var gamePattern = [];
var randomNumber;
var buttonColours = ["red", "blue", "green", "yellow"];
var userClickedPattern =[];
var level = 0;
var isGameStarted = 0;

function nextSequence(){

    isGameStarted = 1;
    $("h1").text("Level "+ level);
    randomNumber = Math.floor(Math.random() * 4);
    randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomNumber);
    showAnimation(randomChosenColour);
    level = level + 1;

}

function playAudio(randomChosenColour)
{
  
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

function handleKeyPress(event) {

  if (isGameStarted == 0){
    // Add delay of 3 second (3000 milliseconds) before calling nextSequence
    setTimeout(function() {
      nextSequence();
    }, 2000);
  }

}

function checkArray(currentLevel)
{
  console.log(gamePattern);
  console.log(userClickedPattern);
  if (userClickedPattern.length !== gamePattern.length) {
    return false;
}
for (var i = 0; i < userClickedPattern.length; i++) {
    if (gamePattern[i] !== userClickedPattern[i]) {
        return false;
    }
}
return true;

}

function checkAnswer(){

      if (checkArray() == false)
      {
alert("Game Over");
      }
      else{
 // Add delay of 3 second (3000 milliseconds) before calling nextSequence
 setTimeout(function() {
  nextSequence();
}, 3000);
      }



}
// Add the event listener to the document
document.addEventListener('keypress', handleKeyPress);

$("#yellow").on( "click", function(event) {

    console.log(event.target.id);
    userClickedPattern.push(  buttonColours.indexOf( event.target.id) );
    showAnimation(event.target.id);
    playAudio(event.target.id);
    checkAnswer();

  } );

  $( "#green" ).on( "click", function(event) {
    console.log(event.target.id);
    userClickedPattern.push(buttonColours.indexOf( event.target.id));
    showAnimation(event.target.id);
    playAudio(event.target.id);
    checkAnswer();
 
  } );$( "#red" ).on( "click", function(event) {
    console.log(event.target.id);
    userClickedPattern.push(buttonColours.indexOf( event.target.id));
    showAnimation(event.target.id);
    playAudio(event.target.id);
    checkAnswer();


  } );$( "#blue" ).on( "click", function(event) {
    console.log(event.target.id);
    userClickedPattern.push(buttonColours.indexOf( event.target.id));
    showAnimation(event.target.id);
    playAudio(event.target.id);
    checkAnswer();

  } );

  


