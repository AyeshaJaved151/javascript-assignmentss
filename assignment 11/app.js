// Question 1
// let firstName = prompt("Enter your first name:");
// let lastName = prompt("Enter your last name:");
// let fullName = firstName + " " + lastName;
// alert("Hello " + fullName + "!");

// Question 2
// let phone = prompt("Enter your favorite mobile phone model:");
// document.write("My favorite phone is: " + phone + "<br>");
// document.write("Length of string: " + phone.length);

// Question 3
// let word = "Pakistani";
// let indexN = word.indexOf('n');
// document.write("String: " + word + "<br>Index of 'n': " + indexN);

// Question 4
// let text = "Hello World";
// let lastIndex = text.lastIndexOf('l');
// document.write("String: " + text + "<br>Last index of 'l': " + lastIndex);

// Question 5
// let country = "Pakistani";
// let charAt3 = country.charAt(3);
// document.write("String: " + country + "<br>Character at index 3: " + charAt3);

// Question 6
// let fName = prompt("Enter your first name:");
// let lName = prompt("Enter your last name:");
// let full = fName.concat(" ", lName);
// alert("Hello " + full + "!");

// Question 7
// let city = "Hyderabad";
// let replacedCity = city.replace("Hyder", "Islam");
// document.write("City: " + city + "<br>After replacement: " + replacedCity);

// Question 8
// let message = "Ali and Sami are best friends. They play cricket and football together.";
// let newMessage = message.replaceAll("and", "&");
// document.write(newMessage);

// Question 9
// let str = "472";
// document.write("Value: " + str + "<br>Type: " + typeof str + "<br>");
// let num = Number(str);
// document.write("Value: " + num + "<br>Type: " + typeof num);

// Question 10
// let userInput = prompt("Enter something:");
// let upper = userInput.toUpperCase();
// document.write("User input: " + userInput + "<br>Upper case: " + upper);

// Question 11
// let userInput = prompt("Enter something:");
// let titleCase = userInput.charAt(0).toUpperCase() + userInput.slice(1).toLowerCase();
// document.write("User input: " + userInput + "<br>Title case: " + titleCase);

// Question 12
// let num = 35.36;
// let str = num.toString().replace(".", "");
// document.write("Number: " + num + "<br>Result: " + str);

// Question 14
// let items = ["cake", "apple pie", "cookie", "chips", "patties"];
// let userSearch = prompt("Welcome to ABC Bakery. What do you want to order?").toLowerCase();
// let index = items.indexOf(userSearch);
// if (index !== -1) {
//   document.write(userSearch + " is <b>available</b> at index " + index + " in our bakery");
// } else {
//   document.write("We are sorry. " + userSearch + " is <b>not available</b> in our bakery");
// }

// Question 16
// let university = "University of Karachi";
// let array = university.split("");
// for (let i = 0; i < array.length; i++) {
//   console.log(array[i]);
// }

// Question 17
// let userInput = prompt("Enter any word:");
// let lastChar = userInput[userInput.length - 1];
// console.log("User input: " + userInput);
// console.log("Last character of input: " + lastChar);

// Question 18
// let text = "The quick brown fox jumps over the lazy dog";
// let lowerText = text.toLowerCase();
// let count = (lowerText.match(/the/g) || []).length;
// console.log("Text: " + text);
// console.log("There are " + count + " occurrence(s) of word 'the'");
