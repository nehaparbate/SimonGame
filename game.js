var gamePattern = [];
var randomNumber;
var buttonColours = ["red", "blue", "green", "yellow"];
var userClickedPattern =[];
var level = 0;
var isGameStarted = 0;

// Start the game

// Add the event listener to the document
document.addEventListener('keypress', handleKeyPress);


function handleKeyPress(event) {

  if (isGameStarted == 0){
    // Add delay of 3 second (3000 milliseconds) before calling nextSequence
    setTimeout(function() {
      $("h1").text("Level "+ level);
      nextSequence();
      isGameStarted = 1;
    }, 2000);
  }

}

//

function nextSequence(){
  userClickedPattern = [];
  level++;
  $("h1").text("Level "+ level);
    randomNumber = Math.floor(Math.random() * 4);
    randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomNumber);
    showAnimation(randomChosenColour);
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

function checkAnswer(currentLevel) {

  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
    if (userClickedPattern.length === gamePattern.length){
      setTimeout(function () {
        nextSequence();
      }, 1000);
    }
  } else {
    playSound("wrong");
    $("body").addClass("game-over");
    $("#level-title").text("Game Over, Press Any Key to Restart");

    setTimeout(function () {
      $("body").removeClass("game-over");
    }, 200);

    startOver();
  }
}



$("#yellow").on( "click", function(event) {

    console.log(event.target.id);
    userClickedPattern.push(  buttonColours.indexOf( event.target.id) );
    showAnimation(event.target.id);
    playAudio(event.target.id);
    checkAnswer(userClickedPattern.length-1);

  } );

  $( "#green" ).on( "click", function(event) {
    console.log(event.target.id);
    userClickedPattern.push(buttonColours.indexOf( event.target.id));
    showAnimation(event.target.id);
    playAudio(event.target.id);
    checkAnswer(userClickedPattern.length-1);
 
  } );$( "#red" ).on( "click", function(event) {
    console.log(event.target.id);
    userClickedPattern.push(buttonColours.indexOf( event.target.id));
    showAnimation(event.target.id);
    playAudio(event.target.id);
    checkAnswer(userClickedPattern.length-1);


  } );$( "#blue" ).on( "click", function(event) {
    console.log(event.target.id);
    userClickedPattern.push(buttonColours.indexOf( event.target.id));
    showAnimation(event.target.id);
    playAudio(event.target.id);
    checkAnswer(userClickedPattern.length-1);

  } );

  function startOver() {
    level = 0;
    gamePattern = [];
    isGameStarted = 0;
  }

  function playSound(name) {
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
  }


