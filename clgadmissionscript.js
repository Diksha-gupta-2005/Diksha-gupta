// Welcome Message

window.onload = function () {
    console.log("College Admission & Placement Portal Loaded Successfully");
};

// Current Year in Footer
const year = new Date().getFullYear();

const footer = document.getElementById("year");

if (footer) {
    footer.innerHTML = year;
}