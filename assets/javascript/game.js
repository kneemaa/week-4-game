$(document).ready(function() {

// randomly pick number for computer between 19-120
var computerNumber = Math.floor(Math.random() * ((120 - 19) + 1)) + 19;
var citrine = Math.floor(Math.random() * 12) + 1;
var celestine = Math.floor(Math.random() * 12) + 1;
var quartz = Math.floor(Math.random() * 12) + 1;
var emerald = Math.floor(Math.random() * 12) + 1;
var userScore = 0;
var winTally = 0;
var lossTally = 0;

$("#systemScore").html("Match this number: " + computerNumber);
$("#playerScore").html("Your total: " + userScore);
$("#winCount").html("Wins: " + winTally);
$("#lossCount").html("Loss: " + lossTally);

function randomizeNumbers() {
	computerNumber = Math.floor(Math.random() * ((120 - 19) + 1)) + 19;
	citrine = Math.floor(Math.random() * 12) + 1;
	celestine = Math.floor(Math.random() * 12) + 1;
	quartz = Math.floor(Math.random() * 12) + 1;
	emerald = Math.floor(Math.random() * 12) + 1;
	userScore = 0;
	$("#systemScore").html("Match this number: " + computerNumber);
	$("#playerScore").html("Your total: " + userScore);
	$("#winCount").html("Wins: " + winTally);
	$("#lossCount").html("Loss: " + lossTally);

}
randomizeNumbers();

function scoreCheck() {
	if (computerNumber > userScore) {
		console.log("still ok");
		$("#playerScore").html(userScore);
	} else if (computerNumber === userScore) {
		//user win
		winTally += 1;
		$("#promptText").html("Nailed it! You won.");
		randomizeNumbers();
	} else if (computerNumber < userScore) {
		//user loss
		lossTally += 1;
		$("#promptText").html("You Went Over! You Lossed.");
		randomizeNumbers();
	}
}


//button clicks
$("#citrine").click(function() {
	userScore += citrine;
	scoreCheck();
});

$("#celestine").click(function() {
	userScore += celestine;
	scoreCheck();
});

$("#quartz").click(function() {
	userScore += quartz;
	scoreCheck();
});

$( "#emerald" ).click(function() {
	userScore += emerald;
	scoreCheck();
});


console.log("Computer Number: " + computerNumber);
console.log("citrine: " + citrine);
console.log("celestine: " + celestine);
console.log("quartz: " + quartz);
console.log("emerald: " + emerald)


});