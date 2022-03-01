// *Variables*
// Create a variable and console log the value
let variable = 'something';
console.log(variable);
// Create a variable, add 10 to it, and alert the value
let number = 1;
alert(`NUMBER IS: ${number + 10}`);
// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
function subtract(a, b, c, d) {
	let result = a - b - c - d;
	alert(`result: ${result}`);
}

console.log(subtract(6, 2, 1, 1));
// Create a function that divides one number by another and returns the remainder
function divide(a, b) {
	let result = a % b;
	return result;
}
console.log(`divide: ${divide(4, 2)}`);
// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
function Jumanji(a, b) {
	let result = a + b;
	if (result > 50) {
		alert('Jumanji');
	}
}

Jumanji(41, 10);
Jumanji(10, 10);
// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
function zebra(a, b, c) {
	let result = a * b * c;
	if (result % 3 === 0) {
		alert('ZEBRA');
	} else {
		alert('not zebra');
	}
}

zebra(3, 3, 1);
zebra(1, 1, 1);
