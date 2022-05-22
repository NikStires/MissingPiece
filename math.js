let operations = ['+', '-', '*', '/'];
let realAnswer = 0;
let score = 0;

for (let i = 0; i < 5; i++) {
  //get first number
  let num1 = Math.floor(Math.random() * 100);
  //get second number
  let num2 = Math.floor(Math.random() * 100);
  //get random operation
  let operation = operations[Math.floor(Math.random() * operations.length)];
  //get answer
  let answer = prompt('what is ' + num1 + operation + num2);

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

  if (answer == realAnswer) {
    console.log('Correct!');
    score++;
  } else {
    console.log('Inccorect :(');
    score--;
  }
}

console.log('Your score was ' + score);
