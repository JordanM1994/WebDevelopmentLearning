// alert("hello")

var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var gameStart = false
var level = 0


function nextSequence() {
  level++
  $("h1").text("Level " + level)
  var randomNumber = Math.floor(Math.random() * 3) + 1;
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  $("#" + randomChosenColour).fadeOut(100).fadeIn(100);

  var audio = new Audio("sounds/" + randomChosenColour + ".mp3");
  audio.play();
}


$(".btn").click(function(event) {
  var userChosenColour = event.target.id;
  userClickedPattern.push(userChosenColour);
  playSound(userChosenColour);
  animatePress(userChosenColour);
  console.log(userClickedPattern.length - 1);
  checkAnswer(userClickedPattern.length - 1);
})


function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}


function animatePress(currentColour) {
  var colour = currentColour
  $("." + colour).addClass("pressed");
  setTimeout(function(colour) {
    $("." + currentColour).removeClass("pressed")
  }, 100)
}


function checkAnswer(currentLevel) {
  if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
    if (userClickedPattern.length === gamePattern.length) {
      setTimeout(function() {
        nextSequence();
        userClickedPattern = [];
      }, 1000);
    }
  } else {
    playSound("wrong")
    $("h1").text("Game Over, Press Any Key to Restart")
    startOver()
  }
}


function startOver() {
  level = 0;
  gamePattern = [];
  gameStart = false;
  userClickedPattern = []
}


if (gameStart === false) {
  $(document).keypress(function() {
    gameStart = true
    nextSequence()
  })
}
