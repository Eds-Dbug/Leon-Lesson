let userInputNumber = prompt('Enter a number less than or equal 100', '100');
let numUserInputNumber = Number(userInputNumber);

while (!(numUserInputNumber <= 100 && numUserInputNumber >= 50)) {
	userInputNumber = prompt('Enter a number less than or equal 100', '100');
	numUserInputNumber = Number(userInputNumber);
}
