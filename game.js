function nextSequence(){
    var randomNumber = Math.floor(Math.random() * 4);

}
var randomNumber = Math.floor(Math.random() * 4);
gamePattern = [];
var buttonColours = ["red", "blue", "green", "yellow"];

var randomChosenColour = buttonColours[randomNumber];
gamePattern.push(randomNumber);




var element = $("#" + randomChosenColour);
$("#" + randomChosenColour).fadeOut(100).fadeIn(100);

var audioString = "sounds\\"+randomChosenColour + ".mp3";
console.log(audioString);
var audio = new Audio(audioString);
audio.play();


console.log(element)
