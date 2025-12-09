function loginUser() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let storedUser = JSON.parse(localStorage.getItem("userData"));

    if (!storedUser) {
        document.getElementById("error").innerHTML = "No user found. Please sign up first!";
        return false;
    }

    if (email === storedUser.email && password === storedUser.password) {
        document.getElementById("error").innerHTML = "";
        window.location.href = "index.html";   // SUCCESS REDIRECT
        return false;
    } else {
        document.getElementById("error").innerHTML = "Invalid email or password!";
        return false;
    }
}
