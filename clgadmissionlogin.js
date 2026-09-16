function login(event) {

    event.preventDefault();

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (username == "" || password == "") {

        alert("Please Enter Username and Password");
        return;

    }

    alert("Welcome " + username);

    window.location.href = "placement.html";

}