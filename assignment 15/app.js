// Question 1
// function power(a, b) {
//     let result = 1;
//     for (let i = 1; i <= b; i++) {
//         result *= a;
//     }
//     return result;
// }
// console.log(power(2, 3)); 

// Question 2
// function isLeapYear(year) {
//     if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
//         console.log(year + " is a leap year");
//     } else {
//         console.log(year + " is not a leap year");
//     }
// }
// isLeapYear(2024);

// Question 3
// function semiPerimeter(a, b, c) {
//     return (a + b + c) / 2;
// }
// function areaOfTriangle(a, b, c) {
//     let s = semiPerimeter(a, b, c);
//     let area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
//     return area;
// }
// console.log(areaOfTriangle(3, 4, 5)); 

// Question 4
// function getAverage(m1, m2, m3) {
//     return (m1 + m2 + m3) / 3;
// }
// function getPercentage(m1, m2, m3) {
//     let total = m1 + m2 + m3;
//     return (total / 300) * 100;
// }
// function mainFunction(m1, m2, m3) {
//     let avg = getAverage(m1, m2, m3);
//     let per = getPercentage(m1, m2, m3);
//     console.log("Average: " + avg);
//     console.log("Percentage: " + per + "%");
// }
// mainFunction(85, 90, 95);

// Question 5 
// function myIndexOf(str, ch) {
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === ch) {
//             return i;
//         }
//     }
//     return -1;
// }
// console.log(myIndexOf("hello", "e")); 

// Question 6
// function removeVowels(sentence) {
//     let result = "";
//     for (let i = 0; i < sentence.length; i++) {
//         let ch = sentence[i].toLowerCase();
//         if (ch !== 'a' && ch !== 'e' && ch !== 'i' && ch !== 'o' && ch !== 'u') {
//             result += sentence[i];
//         }
//     }
//     return result;
// }
// console.log(removeVowels("Hello World"));

// Question 7
// function countDoubleVowels(str) {
//     let count = 0;
//     for (let i = 0; i < str.length - 1; i++) {
//         let pair = str[i].toLowerCase() + str[i + 1].toLowerCase();
//         switch (pair) {
//             case "aa": case "ae": case "ai": case "ao": case "au":
//             case "ea": case "ee": case "ei": case "eo": case "eu":
//             case "ia": case "ie": case "ii": case "io": case "iu":
//             case "oa": case "oe": case "oi": case "oo": case "ou":
//             case "ua": case "ue": case "ui": case "uo": case "uu":
//                 count++;
//                 break;
//         }
//     }
//     console.log("Double vowels count: " + count);
// }
// countDoubleVowels("Please read this application");

// Question 8
// function toMeters(km) {
//     return km * 1000;
// }
// function toFeet(km) {
//     return km * 3280.84;
// }
// function toInches(km) {
//     return km * 39370.1;
// }
// function toCentimeters(km) {
//     return km * 100000;
// }
// let distance = 5; 
// console.log("Meters:", toMeters(distance));
// console.log("Feet:", toFeet(distance));
// console.log("Inches:", toInches(distance));
// console.log("Centimeters:", toCentimeters(distance));

// Question 9
// function overtimePay(hoursWorked) {
//     let overtimeRate = 12;
//     if (hoursWorked > 40) {
//         let overtimeHours = hoursWorked - 40;
//         let pay = overtimeHours * overtimeRate;
//         console.log("Overtime pay = Rs." + pay);
//     } else {
//         console.log("No overtime worked");
//     }
// }
// overtimePay(45);

// Question 10
// function cashier(amount) {
//     let hundreds = Math.floor(amount / 100);
//     let remaining = amount % 100;

//     let fifties = Math.floor(remaining / 50);
//     remaining = remaining % 50;

//     let tens = Math.floor(remaining / 10);

//     console.log(hundreds + " hundred notes");
//     console.log(fifties + " fifty notes");
//     console.log(tens + " ten notes");
// }
// cashier(470); 

