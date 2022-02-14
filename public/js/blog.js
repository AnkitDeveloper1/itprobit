

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        document.getElementById("topnavbar").style.backgroundColor = "#0c3cd1";
        document.getElementById("topnavbar").style.height= "80px";
    } else {
        document.getElementById("topnavbar").style.backgroundColor = "";
        document.getElementById("topnavbar").style.height= "auto";
    }
}