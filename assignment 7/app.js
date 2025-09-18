// Question 1
// let city = prompt("Enter your city name:");
// if (city === "karachi") {
//     alert("Welcome to city of lights");
// } else {
//     alert("Welcome to " + city);
// }

// Question 2
// let gender = prompt("Enter your gender (male/female):");
// if (gender === "male") {
//     alert("Good Morning Sir.");
// } else if (gender === "female") {
//     alert("Good Morning Ma'am.");
// } else {
//     alert("Good Morning!");
// }

// Question 3
// let signalColor = prompt("Enter traffic signal color (Red/Yellow/Green):");
// if (signalColor === "red") {
//     alert("Must Stop");
// } else if (signalColor === "yellow") {
//     alert("Ready to move");
// } else if (signalColor === "green") {
//     alert("Move now");
// } else {
//     alert("Invalid color entered");
// }

// Question 4
// let fuel = parseFloat(prompt("Enter remaining fuel in your car (in litres):"));
// if (fuel < 0.25) {
//     alert("Please refill the fuel in your car");
// } else {
//     alert("You have enough fuel");
// }

// Question 5
// a)
// let a = 4;
// if (++a === 5) {
//     alert("Given condition for variable a is true");
// }

// b)
// let b = 82;
// if (b++ === 83) {
//     alert("given condition for variable b is true");
// }

// c)
// let c = 12;
// if (c++ === 13) {
//     alert("condition 1 is true");
// }
// if (c === 13) {
//     alert("condition 2 is true");
// }
// if (++c < 14) {
//     alert("condition 3 is true");
// }
// if (c === 14) {
//     alert("condition 4 is true");
// }

// d)
// let materialCost = 20000;
// let laborCost = 2000;
// let totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost) {
//     alert("The cost equals");
// }

// e)
// if (true) {
//     alert("True");
// }
// if (false) {
//     alert("False");
// }

// f)
// if ("car" < "cat") {
//     alert("car is smaller than cat");
// }

// Question 6
// let sub1 = parseInt(prompt("Enter marks of subject 1:"));
// let sub2 = parseInt(prompt("Enter marks of subject 2:"));
// let sub3 = parseInt(prompt("Enter marks of subject 3:"));
// let totalMarks = 300;
// let marksObtained = sub1 + sub2 + sub3;
// let percentage = (marksObtained / totalMarks) * 100;
// let grade = "";
// let remarks = "";
// if (percentage >= 80) {
//     grade = "A-one";
//     remarks = "Excellent";
// } else if (percentage >= 70) {
//     grade = "A";
//     remarks = "Good";
// } else if (percentage >= 60) {
//     grade = "B";
//     remarks = "You need to improve";
// } else {
//     grade = "Fail";
//     remarks = "you need to improve";
// }
// document.write("<h2>Marks Sheet</h2>");
// document.write("Total marks: " + totalMarks + "<br>");
// document.write("Marks obtained: " + marksObtained + "<br>");
// document.write("Percentage: " + percentage.toFixed(2) + "%<br>");
// document.write("Grade: " + grade + "<br>");
// document.write("Remarks: " + remarks);

// Question 7
// let secretNumber = Math.floor(Math.random() * 10) + 1;  
// let guess = parseInt(prompt("Guess the secret number (1-10):"));
// if (guess === secretNumber) {
//     alert("Bingo! Correct answer.");
// } else if (guess + 1 === secretNumber) {
//     alert("Close enough to the correct answer.");
// } else {
//     alert("Wrong guess! The secret number was " + secretNumber);
// }

// Question 8
// let num1 = parseInt(prompt("Enter a number:"));
// if (num1 % 3 === 0) {
//     alert(num1 + " is divisible by 3");
// } else {
//     alert(num1 + " is not divisible by 3");
// }


// Question 9
// let num2 = parseInt(prompt("Enter a number:"));
// if (num2 % 2 === 0) {
//     alert(num2 + " is an Even number.");
// } else {
//     alert(num2 + " is an Odd number.");
// }


// Question 10
// let T = parseInt(prompt("Enter temperature:"));
// if (T > 40) {
//     alert("It is too hot outside.");
// } else if (T > 30) {
//     alert("The Weather today is Normal.");
// } else if (T > 20) {
//     alert("Today’s Weather is cool.");
// } else if (T > 10) {
//     alert("OMG! Today’s weather is so Cool.");
// } else {
//     alert("It is freezing cold!");
// }


// Question 11
// let firstNum = prompt("Enter first number:");
// let secondNum = prompt("Enter second number:");
// let operation = prompt("Enter operation (+, -, *, /, %):");
// let result;
// if (operation === "+") {
//     result = firstNum + secondNum;
// } else if (operation === "-") {
//     result = firstNum - secondNum;
// } else if (operation === "*") {
//     result = firstNum * secondNum;
// } else if (operation === "/") {
//     result = firstNum / secondNum;
// } else if (operation === "%") {
//     result = firstNum % secondNum;
// } else {
//     result = "Invalid operation!";
// }
// alert("Result: " + result);



