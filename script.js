let number = 65;
let operator = "%";
let otherNum = 3;

function add(a, b) {
	return a + b;
}

function subtract(a, b) {
	return a - b;
}

function multiply(a, b) {
	return a * b;
}

function divide(a, b) {
	return a / b;
}
function modulus(a, b) {
	return a % b;
}

function operate(a, b, c) {
	if (a == "+") {
		return add(b, c);
	} else if (a == "-") {
		return subtract(b, c);
	} else if (a == "*") {
		return multiply(b, c);
	} else if (a == "/") {
		return divide(b, c);
	} else if (a == "%") {
		return modulus(b, c);
	}
}

console.log(operate(operator, number, otherNum));

button = document.querySelectorAll(".buttons button");
display = document.querySelector(".display");

for (let i = 0; i < button.length; i++) {
	button[i].addEventListener("click", function () {
		display.textContent = this.textContent;
	});
}
// button1.addEventListener("click", function () {
// 	display.textContent = this.textContent;
// });
