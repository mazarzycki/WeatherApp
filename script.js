
document.addEventListener("DOMContentLoaded", function (event) { 
    var hour = new Date().getHours();
    
    if (hour >= 19 || hour <= 7) {
        document.getElementById("body").style.backgroundColor = "rgba(9, 32, 63, 0.9)";
        document.getElementById("body").style.color = "rgb(239, 241, 242)";
        document.getElementById("btnLight").style.display = "block";
        document.getElementById("btnDark").style.display = "none";
    } else {
        document.getElementById("body").style.backgroundColor = "rgb(239, 241, 242)";
        document.getElementById("body").style.color = "rgba(9, 32, 63, 0.9)";
        document.getElementById("btnLight").style.display = "none";
        document.getElementById("btnDark").style.display = "block";
    }
    });

function darkMode() {
    document.getElementById("body").style.backgroundColor = "rgba(9, 32, 63, 0.9)";
    document.getElementById("body").style.color = "rgb(239, 241, 242)";
    document.getElementById("btnLight").style.display = "block";
    document.getElementById("btnDark").style.display = "none";

}
function lightMode() {
    document.getElementById("body").style.backgroundColor = "rgb(239, 241, 242)";
    document.getElementById("body").style.color = "rgba(9, 32, 63, 0.9)";
    document.getElementById("btnLight").style.display = "none";
    document.getElementById("btnDark").style.display = "block";
}
