var buttonColours=["red", "blue", "green", "yellow"]

var level =0;
var userClickedPattern =[];
var gamePattern = [];
var started = false;
function nextSequence(){

    level++;
    $("h1").text("Level "+level);
    var randomNumber=Math.floor(Math.random()*4);
    var randomChosenColour=buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    $("#"+randomChosenColour).fadeIn(200).fadeOut(200).fadeIn(200);

    playSound(randomChosenColour);
    userClickedPattern =[];
}

$(".btn").click(function(){
    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);

    playSound(userChosenColour);
    animatePress(userChosenColour);

    checkAnswer(userClickedPattern.length-1);

});

function playSound(name){
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

function animatePress(currentColour) {
    $("#" + currentColour).addClass("pressed");
    
    setTimeout(function () {
        $("#" + currentColour).removeClass("pressed");
    }, 100); // Remove class after 100ms
}


$(document).keydown(function(){
    if (!started) {
        nextSequence();
        started = true;
      } 
});

function checkAnswer(currentLevel){
    if(gamePattern[currentLevel]===userClickedPattern[currentLevel]){
        console.log("Success");

        if(gamePattern.length===userClickedPattern.length){
            setTimeout(function(){
                nextSequence();
            },1000);

            
        }
    }
    else{
        console.log("Wrong");

        $("body").addClass("game-over");
        setTimeout(function(){
            $("body").removeClass("game-over");
        }, 200);

        $("h1").text("Game Over, Press Any Key to Restart");
        var audio = new Audio("sounds/wrong.mp3");
        audio.play();
        startover();
    }
}

function startover(){
    started=false;
    level =0;
    gamePattern= [];
}

