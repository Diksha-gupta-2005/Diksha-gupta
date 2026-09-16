function checkEligibility() {

    let cgpa = parseFloat(document.getElementById("cgpa").value);

    let backlog = parseInt(document.getElementById("backlogs").value);

    let tenth = parseFloat(document.getElementById("tenth").value);

    let twelfth = parseFloat(document.getElementById("twelfth").value);

    let result = document.getElementById("result");

    if (cgpa >= 7 && backlog == 0 && tenth >= 60 && twelfth >= 60) {

        result.style.color = "green";

        result.innerHTML = "🎉 Eligible for Placement";

    }

    else {

        result.style.color = "red";

        result.innerHTML = "❌ Not Eligible";

    }

}