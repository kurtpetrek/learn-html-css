(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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
  },{
    multipleAnswers: false,
    question: "P tags are what type of element",
    answer1: "Inline",
    answer2: "Box",
    answer3: "Block",
    answer4: "None of the above",
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

app.createQuestion(app.questions[1]);



/* part2.js      (update name changes in gulpfile)
==================================== */


},{}]},{},[1])