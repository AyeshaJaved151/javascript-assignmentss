// Question 1
// let form = document.getElementById("signupForm");
// let output = document.getElementById("output");
// form.addEventListener("submit", function(e) {
//     e.preventDefault(); // stop page reload
//     let name = document.getElementById("name").value;
//     let email = document.getElementById("email").value;
//     let password = document.getElementById("password").value;
//     output.innerHTML = `
//         <p><b>Name:</b> ${name}</p>
//         <p><b>Email:</b> ${email}</p>
//         <p><b>Password:</b> ${password}</p>
//     `;
// });

// Question 2
// let button = document.getElementById("readMoreBtn");
// let fullText = document.getElementById("fullText");
// button.addEventListener("click", function() {
//     fullText.style.display = "block";
//     button.style.display = "none"; 
// });

// Question 3
// let form = document.getElementById("studentForm");
// let table = document.getElementById("studentTable");
// let editForm = document.getElementById("editForm");

// let editIndex = -1;

// form.addEventListener("submit", function (e) {
//     e.preventDefault();

//     let name = document.getElementById("name").value;
//     let roll = document.getElementById("roll").value;

//     let newRow = table.insertRow();
//     let cell1 = newRow.insertCell(0);
//     let cell2 = newRow.insertCell(1);
//     let cell3 = newRow.insertCell(2);

//     cell1.textContent = name;
//     cell2.textContent = roll;
//     cell3.innerHTML = `
//         <button class="editBtn">Edit</button>
//         <button class="deleteBtn">Delete</button>
//     `;

//     document.getElementById("name").value = "";
//     document.getElementById("roll").value = "";
// });

// table.addEventListener("click", function (e) {
//     if (e.target.classList.contains("deleteBtn")) {
//         e.target.parentElement.parentElement.remove();
//     }
//     if (e.target.classList.contains("editBtn")) {
//         let row = e.target.parentElement.parentElement;
//         editIndex = row.rowIndex;
//         let name = row.cells[0].textContent;
//         let roll = row.cells[1].textContent;
//         document.getElementById("editName").value = name;
//         document.getElementById("editRoll").value = roll;
//         editForm.style.display = "block";
//     }
// });
// document.getElementById("updateBtn").addEventListener("click", function () {
//     let name = document.getElementById("editName").value;
//     let roll = document.getElementById("editRoll").value;

//     table.rows[editIndex].cells[0].textContent = name;
//     table.rows[editIndex].cells[1].textContent = roll;

//     editForm.style.display = "none";
// });



