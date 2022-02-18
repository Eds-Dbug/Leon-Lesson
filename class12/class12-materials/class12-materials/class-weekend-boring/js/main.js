document.querySelector('#check').addEventListener('click', check);

function check() {
	const day = document.querySelector('#day').value;

	//Conditionals go here

	if (day === 'Saturday' || day === 'Sun') {
		document.querySelector('#placeToSee').innerText = 'Weekend';
	} else if (day === 'Tuesday' || day === 'Thursday') {
		document.querySelector('#placeToSee').innerText = 'Class Day';
	} else {
		document.querySelector('#placeToSee').innerText = 'boring day';
	}
}
