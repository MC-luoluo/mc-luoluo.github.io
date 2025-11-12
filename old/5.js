var date = new Date;
var year = date.getFullYear();
var specialDate = new Date(year, 0, 22);
if (date.getDate() === specialDate.getDate() &&
    date.getMonth() === specialDate.getMonth() &&
    date.getFullYear() === specialDate.getFullYear()) {
  document.getElementById("1").style.display = "none";
  document.getElementById("0122").style.display = "block";
}
var specialDate = new Date(year, 2, 27);
if (date.getDate() === specialDate.getDate() &&
    date.getMonth() === specialDate.getMonth() &&
    date.getFullYear() === specialDate.getFullYear()) {
  document.getElementById("1").style.display = "none";
  document.getElementById("0327").style.display = "block";
}
var specialDate = new Date(year, 10, 20);
if (date.getDate() === specialDate.getDate() &&
    date.getMonth() === specialDate.getMonth() &&
    date.getFullYear() === specialDate.getFullYear()) {
  document.getElementById("1").style.display = "none";
  document.getElementById("1120").style.display = "block";
}