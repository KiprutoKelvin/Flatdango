console.log('Bring in calculator');

let displayValue = '';

function addNumber(num) {
	displayValue += num;
	document.getElementById('display').value = displayValue;
}