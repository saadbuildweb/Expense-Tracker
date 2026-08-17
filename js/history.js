let raw = localStorage.getItem("expenses")
let expenses = raw ? JSON.parse(raw) : [];
let t_body = document.querySelector("tbody")
if (expenses.length === 0) {
    let tr = document.createElement("tr")
    tr.innerHTML = `<td>No records</td> <td>-</td> <td>-</td> <td>-</td> <td> <button class="btn-danger"> Delete</button></td>`;
    t_body.appendChild(tr);

} else {
    expenses.forEach(element => {
        let tr = document.createElement("tr")
        tr.innerHTML = `<td>${element.Date}</td> <td>${element.Category}</td> <td>${element.Amount}</td> <td>${element.Note}</td> <td> <button class="btn-danger" onclick="deleteExpense(${element.id})"> Delete</button></td>`;
        t_body.appendChild(tr);


    });

}

function deleteExpense(id) {
    let raw = localStorage.getItem("expenses");
    let expenses = raw ? JSON.parse(raw) : [];

    let filtered = expenses.filter(exp => exp.id !== id);

    localStorage.setItem("expenses", JSON.stringify(filtered));

    window.location.reload();
}
let all = document.querySelector("#All");
all.onclick = () => (renderExpenses("All"));
let food = document.querySelector("#Food");
food.onclick = () => renderExpenses("Food");
let transport = document.querySelector("#Transport");
transport.onclick = () => (renderExpenses("Transport"));
let bills = document.querySelector("#Bills");
bills.onclick = () => renderExpenses("Bills");
let shopping = document.querySelector("#Shopping");
shopping.onclick = () => (renderExpenses("Shopping"));

function renderExpenses(Category) {
    let raw = localStorage.getItem("expenses");
    let expenses = raw ? JSON.parse(raw) : [];

    let toShow;
    if (Category === "All") {
        toShow = expenses;
    } else {
        toShow = expenses.filter(exp => exp.Category === Category);
    }

    let t_body = document.querySelector("tbody");
    t_body.innerHTML = "";

    toShow.forEach(element => {
        let tr = document.createElement("tr");
        tr.innerHTML = `<td>${element.Date}</td> <td>${element.Category}</td> <td>${element.Amount}</td> <td>${element.Note}</td> <td><button class="btn-danger" onclick="deleteExpense(${element.id})">Delete</button></td>`;
        t_body.appendChild(tr);
    });
}