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
    result = 'Tie';
  } else if (computerMove === 'paper') {
    result = 'Loose';
  } else if ( computerMove === 'scissors') {
    result = 'Win';
  }
  alert(`You picked rock computer picked ${computerMove} and you ${result}`)
}



