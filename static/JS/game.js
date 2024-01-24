let playerChoice ; 


  
document.getElementById('paper').addEventListener('click' , function(){
playerChoice="paper" ;
startTimer();

})


document.getElementById('rock').addEventListener('click' , function(){
    playerChoice="rock";
})


document.getElementById('scissors').addEventListener('click' , function(){
    playerChoice="scissors";
})




function startTimer() {
    let count = 1;

    function displayCount() {
        document.getElementById('timerDisplay').innerText = count;

      if (count < 3) {
        count++;
        setTimeout(displayCount, 1000); // 1000 milliseconds = 1 second
      }
    }

    displayCount();
  }