var p1Button = document.getElementById("p1Button");
var p2Button = document.getElementById("p2Button");
var resetButton = document.getElementById("resetButton");
var p1Display = document.getElementById("p1Display");
var p2Display = document.getElementById("p2Display");
var limitDisplay = document.getElementById("limitDisplay");
var limitInput = document.getElementById("limitInput");
var p1Score = 0;
var p2Score = 0;
var gameOver = false;
var scoreLimit = 5;

p1Button.addEventListener("click", function(){
    if(gameOver === false){
        p1Score++;
        p1Display.textContent = p1Score;
        if(p1Score >= scoreLimit){
            p1Display.classList.add("winner");
            gameOver = true;
        }
    }
});

p2Button.addEventListener("click", function(){
    if(gameOver === false){
        p2Score++;
        p2Display.textContent = p2Score;
        if(p2Score >= scoreLimit){
            p2Display.classList.add("winner");
            gameOver = true;
        }
    }
});

resetButton.addEventListener("click", function(){
    p1Display.textContent = "0";
    p2Display.textContent = "0";
    p1Score = 0; p2Score = 0;
    p1Display.classList.remove("winner");
    p2Display.classList.remove("winner");
    gameOver = false;
});

limitInput.addEventListener("change", function(){
    scoreLimit = Number(limitInput.value);
    limitDisplay.textContent = scoreLimit;
    reset();
});

function reset(){
    p1Display.textContent = "0";
    p2Display.textContent = "0";
    p1Score = 0; p2Score = 0;
    p1Display.classList.remove("winner");
    p2Display.classList.remove("winner");
    gameOver = false;
}