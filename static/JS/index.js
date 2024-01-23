let computerChoice ; 
let computerSelection ;
let msg ;
const CHOICES = ['rock' , 'paper' ,'scissors']


document.addEventListener("DOMContentLoaded" , function(){
    document.getElementById("popup-container").style.display="flex";

})


document.getElementById("close-popup").addEventListener("click", function() {
    // Close the pop-up card when the "Start Playing" button is clicked
    document.getElementById("popup-container").style.display = "none";
    document.body.style.color='gray'
  });

















computerSelection=getComputerChoice() ;
console.log("rock" , computerSelection)

console.log(playRound("rock" , computerSelection))


function getComputerChoice(){
    
    return CHOICES[Math.floor(Math.random()* CHOICES.length)];

} 

const selections = document.querySelectorAll('btn');

selections.addEventListener('click' , (playerSelection ,computerSelection )=>{

    if((playerSelection=="paper" && computerSelection=="rock")){
        msg= "You Win 🐝 , Paper Beats Rock  "

       

    }

    
  else if((playerSelection=="rock" && computerSelection=="paper")){
        msg= "You lose 🐝 , Paper Beats Rock  "

       

    }
    
    else if((playerSelection=="rock" && computerSelection=="scissors")){
        msg= "You win 🐝 , Rock Beats Scissors  "

       

    }
    else if((playerSelection=="scissors" && computerSelection=="rock")){
        msg= "You lose 🐝 , Rock Beats Scissors  "

       

    }
    


        
  else if((playerSelection=="scissors" && computerSelection=="paper")){
    msg= "You win 🐝 , Scissors Beats Paper  "

   

}

else if((playerSelection=="paper" && computerSelection=="scissors")){
    msg= "You lose 🐝 , Scissors Beats Paper  "

   

}


else {
    msg= "You are equal🐝"
}


return msg ; 







}
)

