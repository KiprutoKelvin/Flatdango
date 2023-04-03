console.log('Bring in calculator');

let displayValue = '';

function addNumber(num) {
	displayValue += num;
	document.getElementById('display').value = displayValue;
}

function addOperator(operator) {
	if (displayValue === '') return;

	const lastChar = displayValue.slice(-1);

	if (lastChar === '+' || lastChar === '-' || lastChar === '*' || lastChar === '/') {
		displayValue = displayValue.slice(0, -1) + operator;
	} else {
		displayValue += operator;
	}

	document.getElementById('display').value = displayValue;
}