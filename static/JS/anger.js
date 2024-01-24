document.addEventListener("DOMContentLoaded" , function(){
    document.body.style.background = "url('../static/images/angery.gif') no-repeat ";
    document.body.style.backgroundSize = "cover";
})


// Set a timeout to execute the code after a specific time (in milliseconds)
const delayInMilliseconds = 3000; // 5000 milliseconds = 5 seconds
setTimeout(function() {
    // Code to show something after the specified time
    document.getElementById("default-modal").style.display="flex";
    // You can replace the alert with code to display or modify an element on your page
}, delayInMilliseconds);
