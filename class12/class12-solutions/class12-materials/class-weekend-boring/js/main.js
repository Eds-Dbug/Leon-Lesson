document.querySelector('#check').addEventListener('click', check);

function check() {
	const day = document.querySelector('#day').value.toUpperCase();

	//Conditionals go here
	if (day === 'TUESDAY' || day === 'THURSDAY') {
		document.querySelector('#placeToSee').innerText = 'CLASS DAY!';
	} else if (day === 'SATURDAY' || day === 'SUNDAY') {
		document.querySelector('#placeToSee').innerText = 'Weekend!';
	} else {
		document.querySelector('#placeToSee').innerText = 'BORRRRRRINNNNNGGGGG!!!';
	}
}
