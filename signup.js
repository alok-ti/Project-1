function registerUser() {
    // Get input values
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;

    // Check if passwords match
    if (password !== confirmPassword) {
        document.getElementById("error").innerHTML = "Passwords do not match!";
        document.getElementById("success").innerHTML = "";
        return false;
    }

    // Create user object
    let user = {
        name: name,
        email: email,
        password: password
    };

    // Save user data in localStorage
    localStorage.setItem("userData", JSON.stringify(user));

    // Show success message
    document.getElementById("success").innerHTML = "Account created successfully!";
    document.getElementById("error").innerHTML = "";

    // Redirect to login page after 1 second
    setTimeout(() => {
        window.location.href = "login.html";
    }, 1000);

    return false; // Prevent form refresh
}
