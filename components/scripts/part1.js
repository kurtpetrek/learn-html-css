/* part1.js 
==================================== */

// var $ = require('jquery');

var app = {
  
  questions: [{
    multipleAnswers: false,
    question: "What tag is used to create a paragraph?",
    answerA: "<p>",
    answerB: "<par>",
    answerC: "<t>",
    answerD: "<text>",
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
  
  createEasyEl: function (elType, clsNames){
    var ee = document.createElement(elType);
    if(typeof clsNames === Array){
      for (var x = 0; x < clsNames.length; x++){
        ee.classList.add(clsNames[x])
      }
    } else if (typeof clsNames === String){
      ee.className = clsName;
    } 
    return ee;
  },
  
  createQuestion: function(obj){
    var question,
        feedback,
        choices;
    document.querySelector("#question-container").innerHTML = "";
    question = this.createEasyEl("p", "question-container-question");
    feedback = this.createEasyEl("div", "question-feedback");
    choices = this.createEasyEl("ol", "question-container-choices");
  }
}; // ends app

app.createQuestion(app.questions[0]);

