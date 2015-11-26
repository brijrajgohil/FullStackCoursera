var target = 0;
var guess_input_text;
var guess_input;
var finished = false;
var guesses = 0;

function do_game() {
	var random_number = Math.random * 100;
	var random_number_integer = Math.floor(random_number);
	target = random_number_integer + 1;

	while(!finished) {
		guess_input_text = prompt("I am thinking of a number in the range of 1 to 100\n\n Guess it?");
		guess_input = parseInt(guess_input_text);
		guesses += 1;
		finished = check_guess();
	}
}

function check_guess() {
	if(isNaN(guess_input)) {
		alert("You didn't enter a number.");
		return false;
	}
	if((guess_input < 1) || (guess_input > 100)) {
		alert("Enter a number between the range of 1 to 100");
		return false;
	}
	if(guess_input > target) {
		alert("Your number is too large.");
		return false;
	}
	if(guess_input < target) {
		alert("Your number is too small.");
		return false;
	}

	alert("You got it Right!!");
	return true;
}