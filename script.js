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
let display_value = "";

for (let i = 0; i < button.length; i++) {
	button[i].addEventListener("click", function () {
		if (button[i] == document.querySelector(".clear")) {
			display_value = "0";
			display.textContent = display_value;
		} else if (button[i] == document.querySelector(".delete")) {
			if (display_value == "0" || display_value.length == 1) {
				display_value = "0";
				display.textContent = display_value;
			} else {
				display_value = display_value.slice(0, display_value.length - 1);
				display.textContent = display_value;
			}
		} else {
			if (display_value == "0") {
				display_value = "";
			}
			display_value += this.textContent;
			display.textContent = display_value;
		}
	});
}
// button1.addEventListener("click", function () {
// 	display.textContent = this.textContent;
// });
