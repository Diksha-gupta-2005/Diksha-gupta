// =========================
// Login
// =========================

document.getElementById("loginForm").addEventListener("submit", function(e){

    e.preventDefault();

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if(username === "" || password === ""){
        alert("Please enter Username and Password.");
        return;
    }

    alert("Welcome " + username + "!\nLogin Successful.");
});


// =========================
// Registration
// =========================

document.getElementById("registerForm").addEventListener("submit", function(e){

    e.preventDefault();

    let name = document.getElementById("name").value;

    alert("Registration Successful!\nWelcome " + name);

    this.reset();

});


// =========================
// Admission Form
// =========================

document.getElementById("admissionForm").addEventListener("submit", function(e){

    e.preventDefault();

    let studentName = document.getElementById("studentName").value;
    let course = document.getElementById("course").value;

    alert(
        "Admission Form Submitted Successfully!\n\n" +
        "Student : " + studentName +
        "\nCourse : " + course
    );

});


// =========================
// Eligibility Check
// =========================

function checkEligibility(){

    let cgpa = parseFloat(document.getElementById("cgpa").value);

    let backlogs = parseInt(document.getElementById("backlogs").value);

    let tenth = parseFloat(document.getElementById("tenth").value);

    let twelfth = parseFloat(document.getElementById("twelfth").value);

    let result = document.getElementById("eligibilityResult");

    if(isNaN(cgpa) || isNaN(backlogs) || isNaN(tenth) || isNaN(twelfth)){

        result.style.color="red";
        result.innerHTML="Please fill all fields.";

        return;
    }

    if(cgpa>=7 && backlogs==0 && tenth>=60 && twelfth>=60){

        result.style.color="green";

        result.innerHTML="✅ Congratulations! You are Eligible for Campus Placement.";

    }

    else{

        result.style.color="red";

        result.innerHTML="❌ Sorry! You are Not Eligible for Campus Placement.";

    }

}



// =========================
// Placement Tracking
// =========================

function updatePlacement(){

    document.getElementById("tcs").innerHTML="Applied";

    document.getElementById("infosys").innerHTML="Interview Scheduled";

    document.getElementById("wipro").innerHTML="Selected";

    document.getElementById("accenture").innerHTML="Offer Received";

    document.getElementById("capgemini").innerHTML="HR Round";

    alert("Placement Status Updated Successfully!");

}