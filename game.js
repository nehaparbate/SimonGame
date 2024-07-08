var gamePattern = [];
var randomNumber;
var buttonColours = ["red", "blue", "green", "yellow"];
var userClickedPattern =[];

function nextSequence(){
    randomNumber = Math.floor(Math.random() * 4);
    randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomNumber);

}

function playAudio(randomChosenColour){
    var audioString = "sounds\\"+randomChosenColour + ".mp3";
    console.log(audioString);
    var audio = new Audio(audioString);
    audio.play();
}

function showAnimation(randomChosenColour)
{
var element = $("#" + randomChosenColour);
$("#" + randomChosenColour).fadeOut(100).fadeIn(100);
}


$( "#yellow" ).on( "click", function(event) {
    console.log(event.target.id);
    userClickedPattern.push(event.target.id);
    showAnimation(event.target.id);
    playAudio(event.target.id);

  } );
  $( "#green" ).on( "click", function(event) {
    console.log(event.target.id);
    userClickedPattern.push(event.target.id);
    showAnimation(event.target.id);
    playAudio(event.target.id);

  } );$( "#red" ).on( "click", function(event) {
    console.log(event.target.id);
    userClickedPattern.push(event.target.id);
    showAnimation(event.target.id);
    playAudio(event.target.id);

  } );$( "#blue" ).on( "click", function(event) {
    console.log(event.target.id);
    userClickedPattern.push(event.target.id);
    showAnimation(event.target.id);
    playAudio(event.target.id);

  } );

  


