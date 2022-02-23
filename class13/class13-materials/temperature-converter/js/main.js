//Write your pseduo code first!

document.querySelector('#yell').addEventListener('click', celciusToFarenheit);
function celciusToFarenheit(celcius) {
	//return conversionFormula(celcius);
	let temp = document.querySelector('#sel').ariaValueMax;
	temp = (temp * 9) / 5 + 32;
}

document.querySelector('#placeToYell').innerText = temp;
