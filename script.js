function computerPlay(){
  let rnd=Math.ceil(Math.random()*3);
  if(rnd==1){
      return("rock");
  }
  else if(rnd==2){
      return("paper");
  }
  else if(rnd==3){
      return("scissors");
  }
}

const buttons = document.querySelectorAll('button');

let scorePlayer=0;
let scoreComputer=0;

buttons.forEach(button => button.addEventListener('click',function(e){
  let computerSelection = computerPlay();
  let result = document.querySelector("#result");
  let score = document.querySelector('#score');
  let winner = document.querySelector('#winner');

  if(this.id==='rock'){
    if(computerSelection === 'rock'){
      result.textContent="It's a tie!";
    }
    else if(computerSelection === 'paper'){
      result.textContent="You lose this round! Paper beats rock.";
      scoreComputer++;
    }
    else {
      result.textContent="You win this round! Rock beats scissors.";
      scorePlayer++;
    }
  }
  else if(this.id==='paper'){
    if(computerSelection === 'rock'){
      result.textContent="You win this round! Paper beats rock.";
      scorePlayer++;
    }
    else if(computerSelection === 'paper'){
      result.textContent="It's a tie!";
    }
    else {
      result.textContent="You lose this round! Scissors beat paper.";
      scoreComputer++;
    }
  }
  else {
    if(computerSelection === 'rock'){
      result.textContent="You lose this round! Rock beats scissors.";
      scoreComputer++;
    }
    else if(computerSelection === 'paper'){
      result.textContent="You win this round! Scissors beat paper.";
      scorePlayer++;
    }
    else {
      result.textContent="It's a tie!";
    }
  }
  score.textContent=`Player ${scorePlayer} -- ${scoreComputer} Computer`;
  if (scorePlayer>=5){
    winner.textContent="You win this match!!!";
  }
  else if(scoreComputer>=5){
    winner.textContent="You lose this match !!!";
  }
}));







