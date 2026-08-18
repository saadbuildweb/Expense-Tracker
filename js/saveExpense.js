let btn = document.getElementById("submit");
btn.onclick = () => {
    let date = document.querySelector("#date").value;
    // console.log(date);
    let category = document.querySelector("#Category").value;
    // console.log(category);
    let amount = document.querySelector("#Amount").value;
    // console.log(amount);
    let note = document.querySelector("#Note").value;
    // console.log(note);
    let currentUser = JSON.parse(localStorage.getItem("LoggedIn"));
    let expense = {
        "id": Date.now(),
        "email": currentUser.email,
        "Date": date,
        "Category": category,
        "Amount": amount,
        "Note": note
    }
    let raw = localStorage.getItem("expenses");
    let expenses = raw ? JSON.parse(raw) : [];

    expenses.push(expense);
    localStorage.setItem("expenses", JSON.stringify(expenses));

}