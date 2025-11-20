document.addEventListener('DOMContentLoaded', function() {
    const date = new Date;
    if (date.getMonth() === 0 && date.getDate() === 22) {
        document.getElementById("main").style.display = "none";
        document.getElementById("0122").style.display = "block";
    }
    if (date.getMonth() === 2 && date.getDate() === 27) {
       document.getElementById("main").style.display = "none";
     document.getElementById("0327").style.display = "block";
    }
    if (date.getMonth() === 10 && date.getDate() === 20) {
        document.getElementById("main").style.display = "none";
        document.getElementById("1120").style.display = "block";
    }
});