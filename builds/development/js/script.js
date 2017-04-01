(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/* part1.js 
==================================== */
var app = {
  currentQuestion: {},
  
  questions: [{
    multipleAnswers: false,
    question: "What tag is used to create a paragraph?",
    choice1: "<p>",
    choice2: "<par>",
    choice3: "<t>",
    choice4: "<text>",
    answer: this.choice1
  },{
    multipleAnswers: false,
    question: "Paragraph tags are what type of element?",
    choice1: "Inline",
    choice2: "Box",
    choice3: "Block",
    choice4: "None of the above",
    answer: this.choice3
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
      var current = "choice" + (x + 1);
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