
//Adds classes
$("h1").addClass("big-title margin-50");

//Adds eventlistener and calls a call back function
$("h1").click(function() {
  $("h1").css("color", "purple")
});

//changes the html for buttons
$("button").html("<em>Don't click!</em>");

//console logs the images src attribute
console.log($("img").attr("src"));

// changesthe attribute that is specified, here it is a href
$("a").attr("href", "https://www.yahoo.com");

//adds an event listener for a click on a button
// $("button").click(function() {
//   $("h1").toggle();
// });

//adds an event listener for a click on a button to fade out
// $("button").click(function() {
//   $("h1").fadeToggle();
// });

//adds an event listener for a click on a button to fade out
$("button").click(function() {
  $("h1").animate({margin: 20});
});

//adds an event listener to the whole page that changes the h1
$(document).keypress(function(event){
  $("h1").text(event.key);
});

//adds an event listener for when the mouse hovers over the h1
$("h1").on("mouseover", function() {
  $("h1").css("color", "purple");
})
