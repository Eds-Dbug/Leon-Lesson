document.querySelector('.check').addEventListener('click', rotate);

let userInputNumber = prompt('put in a number');

function rotate() {
	for (let i = 1; i <= userInputNumber; i++) {
		console.log(i);
	}
}
