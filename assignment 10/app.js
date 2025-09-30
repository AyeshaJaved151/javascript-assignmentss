// Question 1
// const multiarray =[[]]

// Question 2
// const array =[
//     [0,1,2,3],
//     [1,0,1,2],
//     [2,1,0,1],
// ];
// for (let i=0; i<array.length; i++){
//     document.write(array[i]+ "<br/>")
// }

// Question 3
// for(let i=1; i<=10; i++){
//     document.write([i] + "<br/>")
// }

// Question 4
// let userNum=+prompt("enter anumber to show multiplication table")
// let tableLength=+prompt("enter length multiplication table")
// for (let i=1; i<=tableLength; i++){
//     document.write(`${userNum} X ${i} = ${userNum*i}`+"<br/>")
// }

// Question 5
// let fruits = ["apple", "banana", "mango", "orange", "strawberry"];
// for (let i = 0; i < fruits.length; i++) {
//  document.write(fruits[i]+ "<br/>");
// }
// for (let i = 0; i < fruits.length; i++) {
//   document.write("Element at index " + i + " is " + fruits[i] +"<br/>");
// }

//  Question 6
// a. Counting
// let counting = "";
// for (let i = 1; i <= 15; i++) {
//   counting += i + ", ";
// }
// document.write("Counting: " + counting );
// document.write("<br/>")
// // b. Reverse counting
// let reverse = "";
// for (let i = 10; i >= 1; i--) {
//   reverse += i + ", ";
// }
// document.write("Reverse counting: " + reverse);
// document.write("<br/>")
// // c. Even
// let even = "";
// for (let i = 0; i <= 20; i += 2) {
//   even += i + ", ";
// }
// document.write("Even: " + even);
// document.write("<br/>")
// // d. Odd
// let odd = "";
// for (let i = 1; i <= 19; i += 2) {
//   odd += i + ", ";
// }
// document.write("Odd: " + odd);
// document.write("<br/>")
// // e. Series
// let series = "";
// for (let i = 2; i <= 20; i += 2) {
//   series += i + "k, ";
// }
// document.write("Series: " + series);
// document.write("<br/>")

// Question 7
// let A = ["cake", "apple pie", "cookie", "chips", "patties"];
// let userInput = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?");
// let index = A.indexOf(userInput);
// if (index !== -1) {
//   alert(userInput + " is available at index " + index + " in our bakery");
// } else {
//   alert("We are sorry. " + userInput + " is not available in our bakery");
// }

// Question 8
// let numbers = [24, 53, 78, 91, 12];
// let largest = numbers[0];
// for (let i = 1; i < numbers.length; i++) {
//   if (numbers[i] > largest) {
//     largest = numbers[i];
//   }
// }
// console.log("The largest number is: " + largest);

// Question 9
// let numbers = [24, 53, 78, 91, 12];
// let smallest = numbers[0];
// for (let i = 1; i > numbers.length; i++) {
//   if (numbers[i] < smallest) {
//     smallest = numbers[i];
//   }
// }
// console.log("The smallest number is: " + smallest);

// Question 10
// let multiples = "";
// for (let i = 5; i <= 100; i += 5) {
//   multiples += i + ", ";
// }
// document.write(multiples);
