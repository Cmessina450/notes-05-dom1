/* querySelector() is a DOM level method that is used to select classes or ID's. */
document.querySelector('.getThisQuery').textContent = 'Got this text using querySelector.';

/* Use getElementById to manipulate DOM. */
document.getElementById('getThisId').textContent = 'Got this text using getElementById';

/*FORM taskt */
function submitAnswer() {
	var x = document.querySelector('.myAnimal').value;
	
	document.querySelector('.response').textContent = ('Tha\'ts great, I like ' + x + ' too!');


	




	//document.write('<br> That\'s great, I like ' + x + ' too!');
}


