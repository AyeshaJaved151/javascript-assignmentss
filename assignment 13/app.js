// Question 1
// let currentDate = new Date();
// document.write(currentDate);

// Question 2
// let months = ["January", "February", "March", "April", "May", "June", "July",
//                "August", "September", "October", "November", "December"];
// let now = new Date();
// let currentMonth = months[now.getMonth()];
// alert("Current month: " + currentMonth);

// Question 3
// let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// let today = new Date();
// let dayName = days[today.getDay()];
// alert("Today is " + dayName);

// Question 5
// let current = new Date();
// let millisecondsSince1970 = current.getTime();
// let minutesSince1970 = millisecondsSince1970 / (1000 * 60);
// document.write("Current Date: " + current + "<br>");
// document.write("Elapsed milliseconds since January 1, 1970: " + millisecondsSince1970 + "<br>");
// document.write("Elapsed minutes since January 1, 1970: " + minutesSince1970);

// Question 7
// let hours = current.getHours();
// if (hours < 12) {
//     alert("It's AM");
// } else {
//     alert("It's PM");
// }

// Question 8
// let laterDate = new Date("Dec 31, 2020");
// document.write("Later date: " + laterDate);

// Question 9
// let ramadanStart = new Date("June 18, 2015");
// let today = new Date();
// let diffTime = today.getTime() - ramadanStart.getTime();
// let diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
// alert(diffDays + " days have passed since 1st Ramadan, 2015");

// Question 10
// let beginning2015 = new Date("Jan 1, 2015");
// let currentDate = new Date();
// let secondsPassed = Math.floor((currentDate - beginning2015) / 1000);
// document.write("On reference date " + currentDate + ",<br>");
// document.write(secondsPassed + " seconds had passed since beginning of 2015");

// Question 11
// let current = new Date();
// document.write("Current date: " + current + "<br>");
// let hourLater = new Date(current);
// hourLater.setHours(current.getHours() + 1);
// document.write("1 hour later, it was: " + hourLater);

// Question 12
// let now = new Date();
// document.write("Current date: " + now + "<br>");
// let hundredYearsBack = new Date(now);
// hundredYearsBack.setFullYear(now.getFullYear() - 100);
// document.write("100 years back, it was: " + hundredYearsBack);

// Question 13
// let age = +prompt("Enter your age:");
// let currentYear = new Date().getFullYear();
// let birthYear = currentYear - age;
// document.write("Your age is " + age + "<br>");
// document.write("Your birth year is " + birthYear);

// Question 14
// let customerName = "ABC Customer";
// let currentMonth = "February";
// let numberOfUnits = 410;
// let chargesPerUnit = 16;
// let latePaymentSurcharge = 350;
// let netAmountPayable = numberOfUnits * chargesPerUnit;
// let grossAmountPayable = netAmountPayable + latePaymentSurcharge;
// document.write("<h2>K-Electric Bill</h2>");
// document.write("Customer Name: " + customerName + "<br>");
// document.write("Month: " + currentMonth + "<br>");
// document.write("Number of units: " + numberOfUnits + "<br>");
// document.write("Charges per unit: " + chargesPerUnit + "<br><br>");
// document.write("Net Amount Payable (within Due Date): " + netAmountPayable + "<br>");
// document.write("Late Payment Surcharge: " + latePaymentSurcharge + "<br>");
// document.write("Gross Amount Payable (after Due Date): " + grossAmountPayable);
