let btn = document.querySelector("#login-btn")

btn.onclick = () => {
    let email = document.querySelector("#email").value;
    let password = document.querySelector("#password").value;
    let data = localStorage.getItem("users");
    let users = data ? JSON.parse(data) : [];
    let matchFind = users.find(u => u.email === email && u.password === password);
    if (matchFind) {
        localStorage.setItem("LoggedIn", JSON.stringify(matchFind));
        alert("Login Successfull");
        window.location.href = "../index.html";
    } else {
        alert("Invalid Credentials");
    }
}