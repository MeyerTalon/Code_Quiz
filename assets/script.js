
// list of all questions, choices, and answers
var questions = [
  {
    title: 'Commonly used data types DO NOT include:',
    choices: ['strings', 'booleans', 'alerts', 'numbers'],
    answer: 'alerts',
  },
  {
    title: 'The condition in an if / else statement is enclosed within ____.',
    choices: ['quotes', 'curly brackets', 'parentheses', 'square brackets'],
    answer: 'parentheses',
  },
  {
    title: 'Arrays in JavaScript can be used to store ____.',
    choices: [
      'numbers and strings',
      'other arrays',
      'booleans',
      'all of the above',
    ],
    answer: 'all of the above',
  },
  {
    title:
      'String values must be enclosed within ____ when being assigned to variables.',
    choices: ['commas', 'curly brackets', 'quotes', 'parentheses'],
    answer: 'quotes',
  },
  {
    title:
      'A very useful tool used during development and debugging for printing content to the debugger is:',
    choices: ['JavaScript', 'terminal / bash', 'for loops', 'console.log'],
    answer: 'console.log',
  }
];

var startEl = document.querySelector("#start");
startEl.addEventListener("click", beginGame);

var titleEl = document.querySelector('#title')
var choice0Btn = document.querySelector('#choice-0');
var choice1Btn = document.querySelector('#choice-1');
var choice2Btn = document.querySelector('#choice-2');
var choice3Btn = document.querySelector('#choice-3');
var resultEl = document.querySelector('#result');

var time = 0;
var timeEl = $("#time");
var endGame = false;
var score = 0;

function beginGame() {
  time = 75;
  var timerInterval = setInterval(function() {
    timeEl.text('Time: ' + time);
    time--;
    if (endGame || (time === 0)) {
      score = time;
      clearInterval();
    }

  }, 1000);
}

var index = 0;
function checkAnswer(event) {
  input = event.target.text;
  if (input === questions[index].answer) {
    $("#result").text("Correct!");
    index++;
  } else {
    $("#result").text("Wrong :(")
    time -= 10;
    index++;
  }
  if (index === 4) {
    endGame = true;
    index = 0;
  }
  changeScreen();
  return;
}

choice0Btn.addEventListener('click', checkAnswer);
choice1Btn.addEventListener('click', checkAnswer);
choice2Btn.addEventListener('click', checkAnswer);
choice3Btn.addEventListener('click', checkAnswer);

var count = 0;
function changeScreen() {
  if (count === 0) {
    $('#homepage').removeClass("d-block");
    $('#homepage').addClass("d-none");
    $('#question-page').removeClass('d-none');
    $('#question-page').addClass('d-block');
  }
  titleEl.textContent = questions[0].title;
  choice0Btn.textContent = questions[count].choices[0];
  choice1Btn.textContent = questions[count].choices[1];
  choice2Btn.textContent = questions[count].choices[2];
  choice3Btn.textContent = questions[count].choices[3];
  increment++;
}
