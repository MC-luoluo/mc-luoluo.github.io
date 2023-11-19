var date = new Date;
var year = date.getFullYear();
var specialDate = new Date(year, 10, 20);
if (date.getDate() === specialDate.getDate() &&
    date.getMonth() === specialDate.getMonth() &&
    date.getFullYear() === specialDate.getFullYear()) {
  document.querySelector("p1120").style.display = "block";
}