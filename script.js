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

buttons.forEach(button => button.addEventListener('click',function(e){
  let computerSelection = computerPlay();
  let result = document.querySelector("#result");
  let score = document.querySelector('#score');

  if(this.id==='rock'){
    if(computerSelection === 'rock'){
      result.textContent="It's a tie!";
    }
    else if(computerSelection === 'paper'){
      result.textContent="You lose! Paper beats rock.";
    }
    else {
      result.textContent="You win! Rock beats scissors.";
    }
  }
  else if(this.id==='paper'){
    if(computerSelection === 'rock'){
      result.textContent="You win! Paper beats rock.";
    }
    else if(computerSelection === 'paper'){
      result.textContent="It's a tie!";
    }
    else {
      result.textContent="You lose! Scissors beat paper.";
    }
  }
  else {
    if(computerSelection === 'rock'){
      result.textContent="You lose! Rock beats scissors.";
    }
    else if(computerSelection === 'paper'){
      result.textContent="You win! Scissors beat paper.";
    }
    else {
      result.textContent="It's a tie!";
    }
  }
}));







