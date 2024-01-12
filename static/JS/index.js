let computerChoice ; 
const CHOICES = ['Rock' , 'Paper' ,'Scissors']
function getComputerChoice(){
    
    return CHOICES[Math.floor(Math.random()* CHOICES.length)];

} 


