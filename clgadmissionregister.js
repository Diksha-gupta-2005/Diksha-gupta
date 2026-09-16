function registerStudent(event) {

    event.preventDefault();

    let password = document.getElementById("password").value;
    let confirm = document.getElementById("confirmPassword").value;

    if (password != confirm) {

        alert("Password does not match.");
        return;

    }

    alert("Registration Successful");

    window.location.href = "login.html";

}