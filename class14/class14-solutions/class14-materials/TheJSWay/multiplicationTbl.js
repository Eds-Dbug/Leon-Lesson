let userInput = prompt('Enter a number', '4');
let userInputNumber = Number(userInput);
let result;
if (userInputNumber >= 2 && userInputNumber <= 9) {
	for (let i = 1; i <= userInputNumber; i++) {
		result = i * userInputNumber;
		console.log(`i: ${result}`);
	}
} else {
	userInput = prompt('Enter a number that is between 2 & 9', '2');
	userInputNumber = Number(userInput);
}
