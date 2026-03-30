// Navigate
function goTo(page) {
    window.location.href = page;
}

// Save employee
const form = document.getElementById("employeeForm");

if (form) {
    form.addEventListener("submit", function(e) {
        e.preventDefault();

        let employee = {
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            phone: document.getElementById("phone").value,
            department: document.getElementById("department").value,
            position: document.getElementById("position").value
        };

        let employees = JSON.parse(localStorage.getItem("employees")) || [];
        employees.push(employee);

        localStorage.setItem("employees", JSON.stringify(employees));

        alert("Employee saved!");
        form.reset();
    });
}

// Display employees
const tableBody = document.getElementById("tableBody");

if (tableBody) {
    let employees = JSON.parse(localStorage.getItem("employees")) || "";

    employees.forEach((emp, index) => {
        let row = `
            <tr>
                <td>${emp.name}</td>
                <td>${emp.email}</td>
                <td>${emp.phone}</td>
                <td>${emp.department}</td>
                <td>
                    <button onclick="details(${index})">Details</button>
                    <button onclick="edit()">Edit</button>
                    <button onclick="removeEmp(${index})">Delete</button>
                </td>
            </tr>
        `;
        tableBody.innerHTML += row;
    });
}

// Actions
function details(index) {
    let employees = JSON.parse(localStorage.getItem("employees"));
    alert(JSON.stringify(employees[index], null, 2));
}



function removeEmp(index) {
    if (confirm("Are you sure you want to delete?")) {
        let employees = JSON.parse(localStorage.getItem("employees"));
        employees.splice(index, 1);
        localStorage.setItem("employees", JSON.stringify(employees));
        location.reload();
    }
}