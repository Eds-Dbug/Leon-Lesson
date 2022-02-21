let userInputPrompt;

function pow(a, b) {
	let result = a;
	for (let i = 1; i < b; i++) {
		result *= a;
	}

	return result;
}

while (userInputPrompt !== 'c') {
	userInputPrompt = prompt('x pow y = ?');

	let regex = /\d*\s\d*/g;
	let savedInput = userInputPrompt.match(regex);
	console.log('saved input: ' + savedInput[0]);
	let twoNumbers = savedInput[0].split(' ');
	//alert('two numbers: ' + twoNumbers[0] + ' ' + twoNumbers[1]);
	let firstInput = twoNumbers[0],
		secondInput = twoNumbers[1];

	alert('? = : ' + pow(firstInput, secondInput));
}

// let regex = /[0-9]*\s[0-9]+/g;
// let twoNumbers = userInputPrompt.match(regex);

// alert(twoNumbers[0][1]);

// // let firstInput = twoNumbers[0][0],
// // 	secondInput = twoNumbers[0][1];

// // alert('The pow is: ' + pow(firstInput, secondInput));
