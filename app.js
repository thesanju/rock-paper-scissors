let pointsHuman = document.getElementById('humanPoints');
let pointsComputer = document.getElementById('computerPoints');

let pointsH = 0;
let pointsC = 0;


function rock() {
  const randomNumber = Math.random();

  let computerMove = '';

  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = 'rock';
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = 'paper';
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerMove = 'scissors';
  }
  console.log(computerMove);

  let result = '';

  if (computerMove === 'rock') {
    result = 'Game Tied';
  } else if (computerMove === 'paper') {
    result = 'You Loose';
    pointsC ++;
  } else if (computerMove === 'scissors') {
    result = 'You Win';
    pointsH ++;
  }

  pointsHuman.innerHTML = `You: ${pointsH}`;
  pointsComputer.innerHTML = `Computer: ${pointsC}`;

  alert(`You picked rock computer picked ${computerMove} and ${result}`)
}


function paper() {
  const randomNumber = Math.random();

  let computerMove = '';

  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = 'rock';
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = 'paper';
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerMove = 'scissors';
  }
  console.log(computerMove);

  let result = '';

  if (computerMove === 'rock') {
    result = 'You Win';
    pointsH ++;
  } else if (computerMove === 'paper') {
    result = 'Game Tied';
  } else if (computerMove === 'scissors') {
    result = 'You Loose';
    pointsC ++;
  }

  pointsHuman.innerHTML = `You: ${pointsH}`;
  pointsComputer.innerHTML = `Computer: ${pointsC}`;

  alert(`You picked paper computer picked ${computerMove} and ${result}`)
}

function scissors() {
  const randomNumber = Math.random();

  let computerMove = '';

  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = 'rock';
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = 'paper';
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerMove = 'scissors';
  }
  console.log(computerMove);

  let result = '';

  if (computerMove === 'paper') {
    result = 'You Win';
    pointsH ++;
  } else if (computerMove === 'scissors') {
    result = 'Game Tied';
  } else if (computerMove === 'rock') {
    result = 'You Loose';
    pointsC ++;
  }

  pointsHuman.innerHTML = `You: ${pointsH}`;
  pointsComputer.innerHTML = `Computer: ${pointsC}`;

  alert(`You picked scissors computer picked ${computerMove} and  ${result}`)
}

console.log();

