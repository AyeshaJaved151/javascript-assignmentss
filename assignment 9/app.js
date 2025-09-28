// Question 1
// let studentNames = [];

// Question 2
// let studentNamesObj = new Array();

// Question 3
// let stringArray = ["Ali", "Sara", "John"];

// Question 4
// let numbersArray = [10, 20, 30, 40];

// Question 5
// let booleanArray = [true, false, true];

// Question 6
// let mixedArray = ["Hello", 25, true, null];

// // Question 7
// let qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil", "PhD"];

// document.write("<h3>Qualifications:</h3>");
// for (let i = 0; i < qualifications.length; i++) {
//   document.write((i + 1) + ") " + qualifications[i] + "<br>");
// }

// // Question 8
// let students = ["Michael", "John", "Tony"];
// let scores = [320, 230, 480];
// let totalMarks = 500;
// for (let i = 0; i < students.length; i++) {
//   let percentage = (scores[i] / totalMarks) * 100;
//   let result = percentage >= 50 ? "Pass" : "Fail";
//   document.write("Score of " + students[i] + " is " + scores[i] +
//                  ". Percentage: " + percentage + "% - " + result + "<br>");
// }

// // Question 9
// let colors = ["Red", "Green", "Blue"];
// document.write("<h4>Initial Colors: " + colors.join(", ") + "</h4>");

// // a. 
// let colorStart = prompt("Enter a color to add at the beginning:");
// colorStart ? colors.unshift(colorStart) : null;  // ternary used
// document.write("After adding at beginning: " + colors.join(", ") + "<br>");

// // b. 
// let colorEnd = prompt("Enter a color to add at the end:");
// colorEnd ? colors.push(colorEnd) : null;
// document.write("After adding at end: " + colors.join(", ") + "<br>");

// // c.
// colors.unshift("Purple", "Orange");
// document.write("After adding 2 colors at beginning: " + colors.join(", ") + "<br>");

// // d. 
// colors.shift();
// document.write("After deleting first color: " + colors.join(", ") + "<br>");

// // e. 
// colors.pop();
// document.write("After deleting last color: " + colors.join(", ") + "<br>");

// // f. 
// let indexAdd = +prompt("Enter index to add color:");
// let newColor = prompt("Enter color to add:");
// colors.splice(indexAdd, 0, newColor);
// document.write("After adding at index " + indexAdd + ": " + colors.join(", ") + "<br>");

// // g. 
// let indexDel = +prompt("Enter index to delete color(s):");
// let countDel = +prompt("How many colors to delete?");
// colors.splice(indexDel, countDel);
// document.write("After deleting " + countDel + " color(s): " + colors.join(", ") + "<br>");

//  Question 10
// let studentScores = [320, 230, 480, 120, 400];
// document.write("Scores of Students: " + studentScores.join(", ") + "<br>");
// studentScores.sort((a, b) => a - b);
// document.write("Ordered Scores of Students: " + studentScores.join(", "));

// // Question 11
// let cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
// let selectedCities = cities.slice(2, 4);
// document.write("<h3>Cities list:</h3>" + cities.join(", ") + "<br>");
// document.write("<h3>Selected cities list:</h3>" + selectedCities.join(", "));

// // Question 12
// let arr = ["This", "is", "my", "cat"];
// document.write("<h3>Array:</h3>" + arr.join(",") + "<br>");
// let singleString = arr.join(" ");
// document.write("<h3>String:</h3>" + singleString);

// // Question 13
// let fifoArray = [];
// fifoArray.push("Keyboard");
// fifoArray.push("Mouse");
// fifoArray.push("Printer");
// fifoArray.push("Monitor");
// document.write("<h3>Devices:</h3>" + fifoArray.join(", ") + "<br>");
// document.write("<h3>FIFO Order:</h3>");
// while (fifoArray.length > 0) {
//   let device = fifoArray.shift();
//   document.write(device + "<br>");
// }

// // Question 14
// let lifoArray = [];
// lifoArray.push("Keyboard");
// lifoArray.push("Mouse");
// lifoArray.push("Printer");
// lifoArray.push("Monitor");
// document.write("<h3>Devices:</h3>" + lifoArray.join(", ") + "<br>");
// document.write("<h3>LIFO Order (Out):</h3>");
// while (lifoArray.length > 0) {
//   let device = lifoArray.pop();  
//   document.write("Out: " + device + "<br>");
//   lifoArray.length > 0 
//     ? document.write("Still devices left...<br>") 
//     : document.write("All devices removed.<br>");
// }

// // Question 15
// let phoneManufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
// document.write("<h3>Select a Phone Manufacturer:</h3>");
// document.write("<select>");
// for (let i = 0; i < phoneManufacturers.length; i++) {
//   document.write("<option value='" + phoneManufacturers[i] + "'>" 
//                  + phoneManufacturers[i] + "</option>");
// }
// document.write("</select>");
