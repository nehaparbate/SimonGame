gamePattern = [];
var randomNumber;
var buttonColours = ["red", "blue", "green", "yellow"];

function nextSequence(){
    randomNumber = Math.floor(Math.random() * 4);
    randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomNumber);

}

function playAudio(){
    var audioString = "sounds\\"+randomChosenColour + ".mp3";
    console.log(audioString);
    var audio = new Audio(audioString);
    audio.play();
}

function showAnimation()
{
var element = $("#" + randomChosenColour);
$("#" + randomChosenColour).fadeOut(100).fadeIn(100);

}



