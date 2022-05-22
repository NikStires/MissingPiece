let operations = ['+', '-', '*', '/'];
let realAnswer = 0;
let score = 0;
let count = 0;
let num1 = 0;
let num2 = 0;
let operation = '';

let inputForm = document.getElementById('math-form');
let startButton = document.getElementById('start-button');
let displayQuestion = document.getElementById('math-problem');
let answerInput = document.getElementById('answer');
let scoreDisplay = document.getElementById('score');

function AskQuestion() {
  //get first number
  num1 = Math.floor(Math.random() * 10);
  //get second number
  num2 = Math.floor(Math.random() * 10);
  //get random operation
  operation = operations[Math.floor(Math.random() * operations.length)];
  //display question
  displayQuestion.innerHTML = 'what is ' + num1 + operation + num2;

  count++;
}

function CheckAnswer(answer) {
  //calculate correct answer
  switch (operation) {
    case '+':
      realAnswer = num1 + num2;
      break;
    case '-':
      realAnswer = num1 - num2;
      break;
    case '*':
      realAnswer = num1 * num2;
      break;
    default:
      realAnswer = num1 / num2;
  }

  //compare and score accordingly
  if (answer == realAnswer) {
    scoreDisplay.innerHTML = 'Correct!';
    scoreDisplay.style.color = 'green';
    score++;
  } else {
    scoreDisplay.innerHTML = 'Incorrect :(';
    scoreDisplay.style.color = 'red';
    score--;
  }

  //ask a new question
  if (count != 5) {
    AskQuestion();
  } else {
    scoreDisplay.innerHTML = 'You got ' + score + ' points';
    score >= 1
      ? (scoreDisplay.style.color = 'green')
      : (scoreDisplay.style.color = 'red');
  }
}

startButton.addEventListener('click', function (event) {
  event.preventDefault();
  AskQuestion();
  startButton.style.display = 'none';
});

answerInput.addEventListener('keypress', function (event) {
  if (event.keyCode === 13) {
    CheckAnswer(answerInput.value);
    answerInput.value = '';
  }
});
