let applied = 0;

function applyCompany(company) {

    let status = document.getElementById(company);

    status.innerHTML = "Applied";

    status.style.color = "blue";

    applied++;

    let progress = (applied / 5) * 100;

    document.getElementById("bar").style.width = progress + "%";

    document.getElementById("bar").innerHTML = progress + "%";

    setTimeout(function () {

        status.innerHTML = "Interview Scheduled";

        status.style.color = "orange";

    }, 2000);

    setTimeout(function () {

        status.innerHTML = "Selected";

        status.style.color = "green";

    }, 5000);

}