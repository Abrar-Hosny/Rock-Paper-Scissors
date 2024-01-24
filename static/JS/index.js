let computerChoice ; 
let computerSelection ;
let msg ;
const CHOICES = ['rock' , 'paper' ,'scissors']


// here when the Dom Content is loaded the pop up card will show up 

document.addEventListener("DOMContentLoaded" , function(){
    document.getElementById("default-modal").style.display="flex";

})


document.getElementById("yes").addEventListener("click", function() {
    // when we click on  "Start Playing" button is clicked it will show nothing
    document.getElementById("default-modal").style.display = "none";
   document.body.style.backgroundColor='white'  ;
});


document.getElementById('no').addEventListener('click' , function(){
    document.getElementById("default-modal").style.display = "none";



})

















computerSelection=getComputerChoice() ;


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

