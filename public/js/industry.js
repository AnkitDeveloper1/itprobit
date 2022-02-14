
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
        document.getElementById("topnavbar").style.backgroundColor = "#5d5c61";
        document.getElementById("topnavbar").style.height= "80px";
    } else {
        document.getElementById("topnavbar").style.backgroundColor = "";
        document.getElementById("topnavbar").style.height= "auto";
    }
}