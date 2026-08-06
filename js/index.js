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