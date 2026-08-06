let btn = document.querySelector("#signup-btn");

btn.onclick = () => {
    let userName = document.querySelector("#username").value;
    let email = document.querySelector("#email").value;
    let password = document.querySelector("#password").value;
    let data = localStorage.getItem("users")
    let users = data ? JSON.parse(data) : [];
    let emailExists = users.some(users => users.email === email);

    if (emailExists) {
        alert("Email already exists")
        return;
    } else {
        let newUser = {
            "userName": userName,
            "email": email,
            "password": password
        };
        users.push(newUser);
        localStorage.setItem("users", JSON.stringify(users));
        console.log(users);
        alert("Sign-Up Successfull");

    }

}