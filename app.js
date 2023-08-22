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
    result = 'Loose';
  } else if (computerMove === 'scissors') {
    result = 'Win';
  }
  alert(`You picked rock computer picked ${computerMove} and you ${result}`)
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
    result = 'Win';
  } else if (computerMove === 'paper') {
    result = 'Game Tied';
  } else if (computerMove === 'scissors') {
    result = 'Loose';
  }
  alert(`You picked paper computer picked ${computerMove} and you ${result}`)
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

  if (computerMove === 'scissor') {
    result = 'Game Tied';
  } else if (computerMove === 'paper') {
    result = 'Win';
  } else if (computerMove === 'rock') {
    result = 'Loose';
  }
  alert(`You picked scissors computer picked ${computerMove} and you ${result}`)
}



