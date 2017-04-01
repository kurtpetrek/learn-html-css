var app = {
  currentQuestion: {},
  score: 0,
  playing: true,
  questions: [{
    multipleAnswers: false,
    question: "What tag is used to create a paragraph?",
    choice1: "<p>",
    choice2: "<par>",
    choice3: "<t>",
    choice4: "<text>",
    answer: "<p>",
    answerExplained: "The <p> tag is used to create a paragraph. An opening <p> tag starts a paragraph and the closing </p> tag ends a paragraph."
  },{
    multipleAnswers: false,
    question: "Paragraph tags are what type of element?",
    choice1: "Inline",
    choice2: "Box",
    choice3: "Block",
    choice4: "None of the above",
    answer: "Block",
    answerExplained: "Paragraphs by default are block level elements."
  }],
  
  cleanHTMLString: function(str){
    str = str.split("");
    for(var x = 0; x < str.length; x++){
      if(str[x] == "<"){
        str[x] = "&lt;"
      } else if(str[x] == ">"){
        str[x] = "&gt;"
      }
    }
    str = str.join("");
    return str;
  },
  
  
  createEasyEl: function(elType, clsNames) {
    var ee = document.createElement(elType);
    if(Array.isArray(clsNames)){
      for (var x = 0; x < clsNames.length; x++){
        ee.classList.add(clsNames[x]);
      }
    } else if(typeof clsNames == "string") {
      ee.classList.add(clsNames);
    }
    return ee;
  },
  
  listenForUserChoice: function(e){
    if(app.playing){
      if(e.target.classList.contains("chosen")){
        e.target.classList.remove("chosen")
      } else if(e.target.classList.contains("choice")){
        if(!app.currentQuestion.multipleAnswers){
          var choiceEls = document.querySelectorAll(".choice");
          for(var x = 0; x < choiceEls.length; x++){
            if(choiceEls[x].classList.contains("chosen")){
              choiceEls[x].classList.remove("chosen");
            }
          }
          e.target.classList.add("chosen");
        }
      }
    }
  },
  
  testUserSubmit: function(){
    if(app.playing && document.body.contains(document.querySelector(".chosen"))){
      app.playing = false;
      
      if(!app.currentQuestion.multipleAnswers){
        var choice = "";
        choice = document.querySelector(".chosen").innerHTML;
        if(choice == app.cleanHTMLString(app.currentQuestion.answer)){
          document.querySelector(".question-feedback").innerHTML = "Correct! <br>";
          document.querySelector(".question-feedback").classList.add("question-right");
          app.score++;
          document.querySelector("#score-holder").innerHTML = app.score;
        } else {
          document.querySelector(".question-feedback").innerHTML = "Sorry, incorrect <br>";
          document.querySelector(".question-feedback").classList.add("question-wrong");
        }
        document.querySelector(".question-feedback").innerHTML += app.cleanHTMLString(app.currentQuestion.answerExplained);
        
        document.querySelector("#main-btn").innerHTML = "Next Question";
      }
    } else {
      app.questions.shift();
      app.startNewQuestion();
      console.log("foo");
    }
  },
  
  createQuestion: function(obj){
    var question,
        feedback,
        choices;
    app.playing = true;
    document.querySelector("#main-btn").innerHTML = "Submit Answer";
    document.querySelector("#question-container").innerHTML = "";
    question = this.createEasyEl("p", "question-container-question");
    question.innerHTML = this.cleanHTMLString(obj.question);
    document.querySelector("#question-container").appendChild(question);
    
    feedback = this.createEasyEl("div", "question-feedback");
    document.querySelector("#question-container").appendChild(feedback);
    
    choices = this.createEasyEl("ol", "question-container-choices");
    for (var x = 0; x < 4; x ++) {
      var answerEl = this.createEasyEl("li", "choice");
      var current = "choice" + (x + 1);
      answerEl.innerHTML = this.cleanHTMLString(obj[current]);
      choices.appendChild(answerEl);
    }
    choices.addEventListener("click", this.listenForUserChoice, false);
    document.querySelector("#question-container").appendChild(choices);
  },
  
  startNewQuestion: function() {
    this.currentQuestion = this.questions[0];
    this.createQuestion(this.currentQuestion);
  },
  
  start: function(){
    document.querySelector("#main-btn").addEventListener("click", app.testUserSubmit, false);
    this.startNewQuestion();
  }
}; // ends app

app.start();