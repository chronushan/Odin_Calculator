let number = 0;
let operator = "";
let otherNum = 0;

function add(a, b) {
	return Number(a) + Number(b);
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
showed = document.querySelector(".showed");

let display_value = "";

for (let i = 0; i < button.length; i++) {
	button[i].addEventListener("click", function () {
		if (button[i] == document.querySelector(".clear")) {
			number = "0";
			document.querySelector(".operator").textContent = "";
			document.querySelector(".number1").textContent = "";

			showed.textContent = number;
		} else if (button[i] == document.querySelector(".delete")) {
			if (number == "0" || number.length == 1) {
				number = "0";
				showed.textContent = number;
			} else {
				number = number.slice(0, number.length - 1);
				showed.textContent = number;
			}
		} else if (button[i] == document.querySelector(".negative")) {
			if (!(number.charAt(0) == "-")) {
				number = "-" + number;
				showed.textContent = number;
			} else {
				number = number.slice(1, number.length);
				showed.textContent = number;
			}
		} else if (
			button[i] == document.querySelector(".add") ||
			button[i] == document.querySelector(".subtract") ||
			button[i] == document.querySelector(".multiply") ||
			button[i] == document.querySelector(".divide") ||
			button[i] == document.querySelector(".modulo")
		) {
			if (button[i] == document.querySelector(".add")) {
				operator = button[i].textContent;

				document.querySelector(".number1").textContent = number;
				document.querySelector(".operator").textContent = operator;
				otherNum = number;
				number = 0;
				showed.textContent = number;
			} else {
				operator = button[i].textContent;

				document.querySelector(".number1").textContent = number;
				document.querySelector(".operator").textContent = operator;
				otherNum = number;
				number = 0;
				showed.textContent = "0";
			}
		} else if (button[i] == document.querySelector(".calculate")) {
			showed.textContent = operate(operator, otherNum, number);
			document.querySelector(".number1").textContent = "";
			number = operate(operator, otherNum, number);
			document.querySelector(".operator").textContent = "";
		} else {
			if (number == "0") {
				number = "";
			}
			number += this.textContent;
			showed.textContent = number;
		}
	});
}
// button1.addEventListener("click", function () {
// 	display.textContent = this.textContent;
// });
