let num1 = Number(prompt("Enter the first number:"));
let num2 = Number(prompt("Enter the second number:"));
let sum = num1 + num2;

let firstName = prompt("Enter your first name:");
let lastName = prompt("Enter your last name:");
let fullName = firstName + " " + lastName;

let result = document.getElementById("display");
result.innerHTML = `The sum of ${num1} and ${num2} is: ${sum}`;
result.innerHTML += `<br>Full name is: ${fullName}`;