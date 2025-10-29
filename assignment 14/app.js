// Question 1
// let currentDate = new Date();
// document.write(currentDate);

// Question 2
// function greetUser() {
//     let firstName = prompt("Enter your first name:");
//     let lastName = prompt("Enter your last name:");
//     let fullName = firstName + " " + lastName;
//     alert("Hello, " + fullName + "!");
// }
// greetUser();

// Question 3
// function addNumbers() {
//     let num1 = +prompt("Enter first number:");
//     let num2 = +prompt("Enter second number:");
//     let sum = num1 + num2;
//     alert("The sum is: " + sum);
// }
// addNumbers();

// Question 4
// function calculator(num1, num2, operator) {
//     let result;
//     if (operator === "+") result = num1 + num2;
//     else if (operator === "-") result = num1 - num2;
//     else if (operator === "*") result = num1 * num2;
//     else if (operator === "/") result = num1 / num2;
//     else result = "Invalid operator";
//     return result;
// }
// let num1 = +prompt("Enter first number:");
// let num2 = +prompt("Enter second number:");
// let operator = prompt("Enter operator (+, -, *, /):");
// alert("Result: " + calculator(num1, num2, operator));

// Question 5
// function square(num) {
//     let result = num * num;
//     return result;
// }
// alert("Square is: " + square(5));

// Question 6
// function factorial(n) {
//     let result = 1;
//     for (let i = 1; i <= n; i++) {
//         result *= i;
//     }
//     return result;
// }
// alert("Factorial is: " + factorial(5));

// Question 7
// function displayCounting(start, end) {
//     for (let i = start; i <= end; i++) {
//         document.write(i + "<br>");
//     }
// }
// displayCounting(1, 10);

// Question 8
// function calculateHypotenuse(base, perpendicular) {
//     function calculateSquare(x) {
//         return x * x;
//     }
//     let hypotenuse = Math.sqrt(calculateSquare(base) + calculateSquare(perpendicular));
//     return hypotenuse;
// }
// alert("Hypotenuse is: " + calculateHypotenuse(3, 4));

// Question 9
// function areaRectangle(width, height) {
//     return width * height;
// }
// alert("Area of rectangle: " + areaRectangle(5, 10));

// Question 10
// function isPalindrome(str) {
//     let reversed = str.split('').reverse().join('');
//     return str === reversed ? "Palindrome" : "Not palindrome";
// }
// alert(isPalindrome("madam"));

// Question 11
// function capitalizeWords(str) {
//     let words = str.split(' ');
//     for (let i = 0; i < words.length; i++) {
//         words[i] = words[i][0].toUpperCase() + words[i].slice(1);
//     }
//     return words.join(' ');
// }
// alert(capitalizeWords("the quick brown fox"));

// Question 12
// function longestWord(str) {
//     let words = str.split(' ');
//     let longest = words[0];
//     for (let i = 1; i < words.length; i++) {
//         if (words[i].length > longest.length) {
//             longest = words[i];
//         }
//     }
//     return longest;
// }
// alert(longestWord("Web Development Tutorial"));

// Question 13
// function countLetter(str, letter) {
//     let count = 0;
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === letter) {
//             count++;
//         }
//     }
//     return count;
// }
// alert(countLetter("JSResources.com", "o"));

// Question 14
// function calcCircumference(radius) {
//     let circumference = 2 * Math.PI * radius;
//     alert("The circumference is " + circumference.toFixed(2));
// }
// function calcArea(radius) {
//     let area = Math.PI * radius * radius;
//     alert("The area is " + area.toFixed(2));
// }
// calcCircumference(5);
// calcArea(5);
