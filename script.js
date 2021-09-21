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

  if(scorePlayer<5 && scoreComputer<5){
    if(this.id==='rock'){
      if(computerSelection === 'rock'){
        result.textContent="Egalité!";
      }
      else if(computerSelection === 'paper'){
        result.textContent="Perdu ! Le papier bat la pierre...";
        scoreComputer++;
      }
      else {
        result.textContent="Gagné ! La pierre bat les ciseaux !";
        scorePlayer++;
      }
    }
    else if(this.id==='paper'){
      if(computerSelection === 'rock'){
        result.textContent="Bravo! Le papier bat la pierre !";
        scorePlayer++;
      }
      else if(computerSelection === 'paper'){
        result.textContent="Egalité...!";
      }
      else {
        result.textContent="Perdu ! Les ciseaux coupent le papier.";
        scoreComputer++;
      }
    }
    else {
      if(computerSelection === 'rock'){
        result.textContent="Perdu ! La pierre est plus forte que les ciseaux.";
        scoreComputer++;
      }
      else if(computerSelection === 'paper'){
        result.textContent="Gagné ! Les ciseaux coupent le papier";
        scorePlayer++;
      }
      else {
        result.textContent="Egalité !";
      }
    }
    score.textContent=`Vous ${scorePlayer} -- ${scoreComputer} L'ordinateur`;
    if (scorePlayer>=5){
      winner.textContent="Vous avez gagné le match !!!";
    }
    else if(scoreComputer>=5){
      winner.textContent="Vous avez perdu le match...";
    }
  }
}));







