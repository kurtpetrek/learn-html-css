/* part1.js 
==================================== */
var app = {
  
  questions: [{
    multipleAnswers: false,
    question: "What tag is used to create a paragraph?",
    answer1: "<p>",
    answer2: "<par>",
    answer3: "<t>",
    answer4: "<text>",
    correctAnswer: this.answerA
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
  
  createQuestion: function(obj){
    var question,
        feedback,
        choices;
    document.querySelector("#question-container").innerHTML = "";
    question = this.createEasyEl("p", "question-container-question");
    question.innerHTML = this.cleanHTMLString(obj.question);
    document.querySelector("#question-container").appendChild(question);
    
    feedback = this.createEasyEl("div", "question-feedback");
    document.querySelector("#question-container").appendChild(feedback);
    
    choices = this.createEasyEl("ol", "question-container-choices");
    for (var x = 0; x < 4; x ++) {
      var answerEl = this.createEasyEl("li", "choice");
      var current = "answer" + (x + 1);
      answerEl.innerHTML = this.cleanHTMLString(obj[current]);
      choices.appendChild(answerEl);
    }
    document.querySelector("#question-container").appendChild(choices);
  }
}; // ends app

app.createQuestion(app.questions[0]);

