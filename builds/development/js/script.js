var currentQuestion = {};
var score = 0,
  playing = true,
  appStarted = false;

var questions = [{
    multipleAnswers: false,
    question: "What tag is used to create a paragraph?",
    choice1: "<p>",
    choice2: "<par>",
    choice3: "<t>",
    choice4: "<text>",
    answer: "<p>",
    answerExplained: "The <p> tag is used to create a paragraph. An opening <p> tag starts a paragraph and the closing </p> tag ends a paragraph."
  }, {
    multipleAnswers: false,
    question: "Paragraph tags are what type of element?",
    choice1: "Inline",
    choice2: "Box",
    choice3: "Block",
    choice4: "None of the above",
    answer: "Block",
    answerExplained: "Paragraphs by default are block level elements."
  }, {
    multipleAnswers: false,
    question: "There are 6 levels of headings",
    choice1: "True",
    choice2: "False",
    choice3: "",
    choice4: "",
    answer: "True",
    answerExplained: "There are 6 levels of headings h1 -h6."
  },{
    multipleAnswers: false,
    question: "What tag is used to create a link to another web page?",
    choice1: "<link>",
    choice2: "<href>",
    choice3: "<lk>",
    choice4: "<a>",
    answer: "<a>",
    answerExplained: "<a> tags are used to link web pages together, they require a href attribute."
  },{
    multipleAnswers: false,
    question: "What tag is used to create a first level heading?",
    choice1: "<h>",
    choice2: "<head>",
    choice3: "<h1>",
    choice4: "<h-1>",
    answer: "<h1>",
    answerExplained: "<h1> tag starts a first level heading and </h1> closes it, <h1>Hello World!</h1>"
  },{
    multipleAnswers: false,
    question: "What is the default alignment for elements?",
    choice1: "left",
    choice2: "center",
    choice3: "right",
    choice4: "",
    answer: "left",
    answerExplained: "By default elements and text are aligned to the left."
  },{
    multipleAnswers: false,
    question: "Select the proper HTML syntax.",
    choice1: '<p class="drop-cap">Hello World</p>',
    choice2: '<p class:drop-cap>Hello World</p>',
    choice3: '<p class="drop-cap" Hello World /p>',
    choice4: '<p class="drop-cap">Hello World</p class="drop-cap">',
    answer: '<p class="drop-cap">Hello World</p>',
    answerExplained: "By default elements and text are aligned to the left."
  },{
    multipleAnswers: false,
    question: "What type of list will number list items for you?",
    choice1: 'Numbered',
    choice2: 'Unordered',
    choice3: 'Listed',
    choice4: 'Ordered',
    answer: 'Ordered',
    answerExplained: "Ordered lists and the <ol> tag are used to define a list with numbers."
  },{
    multipleAnswers: false,
    question: "CSS documents should be linked in the <head> section of a website.",
    choice1: 'True',
    choice2: 'False',
    choice3: '',
    choice4: '',
    answer: 'True',
    answerExplained: "CSS documents should be linked to an html page in the <head> section of the page."
  },{
    multipleAnswers: false,
    question: "Inline styles are written...",
    choice1: 'On a separate css document.',
    choice2: 'In the head section of the html document within <style> tags.',
    choice3: 'In the styled elements opening tag using the style attribute.',
    choice4: '',
    answer: 'In the styled elements opening tag using the style attribute.',
    answerExplained: 'Inline styles are written within the elements html, <p style="color: red;">Hello World</p>'
  },{
    multipleAnswers: false,
    question: "IDs should be used only once per page.",
    choice1: 'True',
    choice2: 'False',
    choice3: '',
    choice4: '',
    answer: 'True',
    answerExplained: 'IDs are unique identifiers that should only be used once per page.'
  },{
    multipleAnswers: false,
    question: "Classes should be used only once per page.",
    choice1: 'True',
    choice2: 'False',
    choice3: '',
    choice4: '',
    answer: 'False',
    answerExplained: 'Classes can be used throughout a html document for styling different elements the same way.'
  },{
    multipleAnswers: false,
    question: "What css would be used to set the background color of the body of a web page to #CBCBCB",
    choice1: 'document {background-color: #CBCBCB;}',
    choice2: 'head {background-color: #CBCBCB;}',
    choice3: 'body {background-color: #CBCBCB;}',
    choice4: 'elements {background-color: #CBCBCB;}',
    answer: 'body {background-color: #CBCBCB;}',
    answerExplained: 'In order to change the background of the body you would first select the body element and then set the background-color or background css properties, body { background-color: #CBCBCB; }'
  },{
    multipleAnswers: false,
    question: "Which is the proper pseudo class CSS syntax for a hover on an <a> tag?",
    choice1: 'a;hover {color: #7348FB;}',
    choice2: '<a>:hover { color: #7348FB; }',
    choice3: 'a:hover-in { color: #7348FB; }',
    choice4: 'a:hover { color: #7348FB; }',
    answer: 'a:hover { color: #7348FB; }',
    answerExplained: 'The hover class is used in this way a:hover { color: #7348FB; }'
  },{
    multipleAnswers: false,
    question: "Which of the following is not a valid value for the css float property?",
    choice1: 'left',
    choice2: 'center',
    choice3: 'right',
    choice4: 'none',
    answer: 'center',
    answerExplained: 'The float property can be set to left, right or none. There is no float center.'
  },{
    multipleAnswers: false,
    question: "The space between an element's content and border is known as...",
    choice1: 'content-wrap',
    choice2: 'nesting',
    choice3: 'margin',
    choice4: 'padding',
    answer: 'padding',
    answerExplained: 'Padding is the space between an elements content and border.'
  },{
    multipleAnswers: false,
    question: "The css selector chain used to target a tags within a nav element is",
    choice1: 'a nav',
    choice2: '.nav a',
    choice3: 'nav a',
    choice4: 'nav + a',
    answer: 'nav a',
    answerExplained: '"nav a" would select all a tags within a nav element.'
  }];

var savedQuestions = questions.slice();

var shuffleArray = function (array) {
  var currentIndex = array.length,
    temporaryValue, randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
};

var cleanHTMLString = function (str) {
  str = str.split("");
  for (var x = 0; x < str.length; x++) {
    if (str[x] == "<") {
      str[x] = "&lt;"
    } else if (str[x] == ">") {
      str[x] = "&gt;"
    }
  }
  str = str.join("");
  return str;
};


var createEasyEl = function (elType, clsNames) {
  var ee = document.createElement(elType);
  if (Array.isArray(clsNames)) {
    for (var x = 0; x < clsNames.length; x++) {
      ee.classList.add(clsNames[x]);
    }
  } else if (typeof clsNames == "string") {
    ee.classList.add(clsNames);
  }
  return ee;
};

var listenForUserChoice = function (e) {
  if (playing) {
    if (e.target.classList.contains("chosen")) {
      e.target.classList.remove("chosen")
    } else if (e.target.classList.contains("choice")) {
      if (!currentQuestion.multipleAnswers) {
        var choiceEls = document.querySelectorAll(".choice");
        for (var x = 0; x < choiceEls.length; x++) {
          if (choiceEls[x].classList.contains("chosen")) {
            choiceEls[x].classList.remove("chosen");
          }
        }
        e.target.classList.add("chosen");
      }
    }
  } else {
    if (!document.querySelector("#main-btn").classList.contains("wiggle")) {
      document.querySelector("#main-btn").classList.add("wiggle");
      setTimeout(function () {
        document.querySelector("#main-btn").classList.remove("wiggle");
      }, 500);
    }
  }
};

var testUserSubmit = function () {
  if (playing && document.body.contains(document.querySelector(".chosen"))) {
    playing = false;

    if (!currentQuestion.multipleAnswers) {
      var choice = "";
      choice = document.querySelector(".chosen").innerHTML;
      if (choice == cleanHTMLString(currentQuestion.answer)) {
        document.querySelector(".question-feedback").innerHTML = "Correct! <br>";
        document.querySelector(".question-feedback").classList.add("question-right");
        score++;
      } else {
        questions.push(currentQuestion);
        document.querySelector(".question-feedback").innerHTML = "Sorry, incorrect <br>";
        document.querySelector(".question-feedback").classList.add("question-wrong");
        score--;
      }
      document.querySelector("#score-holder").innerHTML = score;

      document.querySelector(".question-feedback").innerHTML += cleanHTMLString(currentQuestion.answerExplained);

      document.querySelector("#main-btn").innerHTML = "Next Question";
    }
  } else if (playing && !(document.body.contains(document.querySelector(".chosen")))) {
    if (!document.querySelector(".question-container-choices").classList.contains("wiggle")) {
      document.querySelector(".question-container-choices").classList.add("wiggle");
      setTimeout(function () {
        document.querySelector(".question-container-choices").classList.remove("wiggle");
      }, 500);
    }
  } else if (!playing) {
    questions.shift();
    startNewQuestion();
  }
};

var createQuestion = function (obj) {
  var question,
    feedback,
    choices;
  playing = true;
  
  document.querySelector("#main-btn").innerHTML = "Submit Answer";
  document.querySelector("#question-container").innerHTML = "";
  question = createEasyEl("p", "question-container-question");
  question.innerHTML = cleanHTMLString(obj.question);
  document.querySelector("#question-container").appendChild(question);

  feedback = createEasyEl("div", "question-feedback");
  document.querySelector("#question-container").appendChild(feedback);

  choices = createEasyEl("ol", "question-container-choices");
  for (var x = 0; x < 4; x++) {
    var answerEl = createEasyEl("li", "choice");
    var current = "choice" + (x + 1);
    if (obj[current] != "") {
      answerEl.innerHTML = cleanHTMLString(obj[current]);
      choices.appendChild(answerEl);
    }
  }
  choices.addEventListener("click", this.listenForUserChoice, false);
  document.querySelector("#question-container").appendChild(choices);
};

var startNewQuestion = function () {
  if (questions.length > 0) {
    currentQuestion = questions[0];
    createQuestion(currentQuestion);
  } else {
    var el = this.createEasyEl("p", "question-container-question");
    el.innerHTML = "You finished!<br>Your final score is " + score + "!";
    document.querySelector("#question-container").innerHTML = "";
    document.querySelector("#question-container").appendChild(el);
    document.querySelector("#main-btn").addEventListener("click", start, false);
    document.querySelector("#main-btn").innerHTML = "Restart";
  }

};

var start = function () {
  score = 0;
  document.querySelector("#score-holder").innerHTML = score;
  questions = savedQuestions.slice();
  document.querySelector("#main-btn").removeEventListener("click", start, false);
  questions = shuffleArray(questions);
  document.querySelector("#main-btn").addEventListener("click", testUserSubmit, false);
  startNewQuestion();
};


document.querySelector("#main-btn").addEventListener("click", start, false);

/* part2.js      (update name changes in gulpfile)
==================================== */

