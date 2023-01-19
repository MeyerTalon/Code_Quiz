
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

var userNames = [];
var userScores = [];
userScores = localStorage.getItem('userNames')
userScores = localStorage.getItem('userScores')


var startEl = document.querySelector("#start");
startEl.addEventListener("click", beginGame);

var titleEl = document.querySelector('#title')
var choice0Btn = document.querySelector('#choice-0');
var choice1Btn = document.querySelector('#choice-1');
var choice2Btn = document.querySelector('#choice-2');
var choice3Btn = document.querySelector('#choice-3');
var resultEl = document.querySelector('#result');

var timeEl = document.querySelector("#time");
var endGame = false;
var score = 0;

var incorrectAnsCounter = 0;

function beginGame(event) {
  event.preventDefault();

  var time = 75;
  $('#time').text('Time: ' + time);
  changeScreen();

  choice0Btn.addEventListener('click', checkAnswer);
  choice1Btn.addEventListener('click', checkAnswer);
  choice2Btn.addEventListener('click', checkAnswer);
  choice3Btn.addEventListener('click', checkAnswer);

  var timerInterval = setInterval(function() {
    $('#time').text('Time: ' + time);
    time--;
    if (incorrectAnsCounter === 1) {
      time -= 10;
      incorrectAnsCounter = 0;
    }
    if (endGame || (time === 0)) {
      score = time;
      clearInterval(timerInterval);
    }
    return;
  }, 1000);
  return;
}

var initialsInput = document.querySelector('#initials');
function inputScores() {
  var userName = initialsInput.textContent;
  var userScore = score;
  userName = localStorage.getItem("userName");
  userScore = localStorage.getItem("userScore");
  // userNames.push(userName);
  // userScores.push(score);
  $('#score-input-page').removeClass('d-block');
  $('#score-input-page').addClass('d-none');
  $('#high-score-page').removeClass('d-block');
  $('#high-score-page').addClass('d-none');
  $('#scores-list').append('<li>' + userName + ': ' + userScore + '</li>');
}

var index = 0;
function checkAnswer(event) {
  var clickedBtn = event.target;
  input = clickedBtn.textContent;
  console.log(input);
  if (input === questions[index].answer) {
    $("#result").text("Correct!");
  } else {
    $("#result").text("Wrong :(")
    incorrectAnsCounter++;
  }
  index++;
  if (index === 4) {
    endGame = true;
    index = 0;
  }
  changeScreen();
  return;
}

var count = 0;
function changeScreen() {
  if (count === 0) {
    $('#homepage').addClass("d-none");
    $('#question-page').removeClass('d-none');
    $('#question-page').addClass('d-block');
  }
  if (count === 0) {
    $('#title').text(questions[0].title);
    $('#choice-0').text(questions[0].choices[0]);
    $('#choice-1').text(questions[0].choices[1]);
    $('#choice-2').text(questions[0].choices[2]);
    $('#choice-3').text(questions[0].choices[3]);
  }
  if (count === 1) {
    $('#title').text(questions[1].title);
    $('#choice-0').text(questions[1].choices[0]);
    $('#choice-1').text(questions[1].choices[1]);
    $('#choice-2').text(questions[1].choices[2]);
    $('#choice-3').text(questions[1].choices[3]);
  }
  if (count === 2) {
    $('#title').text(questions[2].title);
    $('#choice-0').text(questions[2].choices[0]);
    $('#choice-1').text(questions[2].choices[1]);
    $('#choice-2').text(questions[2].choices[2]);
    $('#choice-3').text(questions[2].choices[3]);
  }
  if (count === 3) {
    $('#title').text(questions[3].title);
    $('#choice-0').text(questions[3].choices[0]);
    $('#choice-1').text(questions[3].choices[1]);
    $('#choice-2').text(questions[3].choices[2]);
    $('#choice-3').text(questions[3].choices[3]);
  }

  count++;
  if (count === 4) {
    count = 0;
  }

  if (endGame) {
    $('#question-page').removeClass('d-block');
    $('#question-page').addClass('d-none');
    $('#score-input-page').removeClass('d-none');
    $('#score-input-page').addClass('d-block');
  }
  
  var scoreSubmitBtn = document.querySelector('#score-button');
  scoreSubmitBtn.addEventListener('click', inputScores);
}
