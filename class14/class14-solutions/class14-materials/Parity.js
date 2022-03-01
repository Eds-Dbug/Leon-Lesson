let userInput = prompt('put in a number');
let final = Number(userInput) + 10;
console.log(final);
let i = Number(userInput);

document.querySelector('.check').addEventListener('click', rotate);
function rotate() {
	while (i <= final) {
		if (i % 2 === 1) {
			console.log(`${i} is odd`);
		} else {
			console.log(`${i} is even`);
		}
		i++;
	}
}
