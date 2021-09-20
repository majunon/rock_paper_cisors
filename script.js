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
  if(this.id==='rock'){
    if(computerSelection === 'rock'){
      console.log("It's a tie!");
    }
    else if(computerSelection === 'paper'){
      console.log("You lose! Paper beats rock.")
    }
    else {
      console.log("You win! Rock beats scissors.")
    }
  }
  else if(this.id==='paper'){
    if(computerSelection === 'rock'){
      console.log("You win! Paper beats rock.");
    }
    else if(computerSelection === 'paper'){
      console.log("It's a tie!")
    }
    else {
      console.log("You lose! Scissors beat paper.")
    }
  }
  else {
    if(computerSelection === 'rock'){
      console.log("You lose! Rock beats scissors.");
    }
    else if(computerSelection === 'paper'){
      console.log("You win! Scissors beat paper.")
    }
    else {
      console.log("It's a tie!")
    }
  }
}));







