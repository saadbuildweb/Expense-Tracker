let currentUser = localStorage.getItem("LoggedIn");
let current = currentUser ? JSON.parse(currentUser) : null;
if (!current) {
    window.location.href = "login.html";
} else {
    alert(`Welcome ${current.userName}`);
}

let btn = document.querySelector("#logout-btn");
btn.onclick = () => {
    localStorage.removeItem("LoggedIn");
    window.location.href = "login.html";
}

function RecentExpenses() {
    let raw = localStorage.getItem("expenses")
    let expenses = raw ? JSON.parse(raw) : [];
    let currentUser = JSON.parse(localStorage.getItem("LoggedIn"));
    expenses = expenses.filter(exp => exp.email === currentUser.email);
    let t_body = document.querySelector("#tbody")
    if (expenses.length === 0) {
        let tr = document.createElement("tr");
        tr.innerHTML = `<td>No records</td> <td>-</td> <td>-</td> <td>-</td> <td>`
        t_body.appendChild(tr);
    } else {
        let recent = expenses.slice(-2)
        recent.reverse();
        recent.forEach(element => {
            let tr = document.createElement("tr");
            tr.innerHTML = `<td>${element.Date}</td> <td>${element.Category}</td> <td>${element.Amount}</td> <td>${element.Note}</td>`;
            t_body.appendChild(tr)
        });
    }
}

function TotalExpense() {

    let raw = localStorage.getItem("expenses");
    let expenses = raw ? JSON.parse(raw) : []
    let currentUser = JSON.parse(localStorage.getItem("LoggedIn"));
    expenses = expenses.filter(exp => exp.email === currentUser.email);
    let total = 0;
    expenses.forEach(exp => {
        total += Number(exp.Amount);
    })
    let full_amount = document.querySelector("#TotalExpense").innerHTML = `RS ${total}`;
}

function MonthlyExpense() {
    let raw = localStorage.getItem("expenses");
    let expenses = raw ? JSON.parse(raw) : [];
    let currentUser = JSON.parse(localStorage.getItem("LoggedIn"));
    expenses = expenses.filter(exp => exp.email === currentUser.email);
    let today = new Date();
    let currentMonth = today.getMonth();
    let currentYear = today.getFullYear();
    let monthTotal = 0;
    expenses.forEach(exp => {
        let expDate = new Date(exp.Date);
        if (expDate.getMonth() === currentMonth && expDate.getFullYear() === currentYear) {
            monthTotal = monthTotal + Number(exp.Amount);
        }
    });
    let month_amount = document.querySelector("#MonthExpense").innerHTML = `Rs. ${monthTotal}`;
}

function Entries() {
    let raw = localStorage.getItem("expenses");
    let expenses = raw ? JSON.parse(raw) : [];
    let currentUser = JSON.parse(localStorage.getItem("LoggedIn"));
    expenses = expenses.filter(exp => exp.email === currentUser.email);
    let length = expenses.length;
    let entries = document.querySelector("#Entries").innerHTML = length;

}

RecentExpenses();
TotalExpense();
MonthlyExpense();
Entries();