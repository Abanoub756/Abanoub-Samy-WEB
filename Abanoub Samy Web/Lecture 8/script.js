let x = myFunction(5, 4);
document.getElementById('demo1').innerHTML += x;
function myFunction(a, b) {
    return a * b;
}
////////////////////////////////
const hour = new Date().getHours();
let greeting;
if (hour < 18) {
    greeting = "Good day";
} else {
    greeting = "Good evening";
}
document.getElementById('demo2').innerHTML += "<br>" + greeting;
////////////////////////////////
let day;
switch (new Date().getDay()) {
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday";
}
document.getElementById('demo3').innerHTML += ("Today is " + day);
////////////////////////////////
let text = "";
for (let i = 0; i < 5; i++) {
    text += "The number is " + i + "<br>";
}
document.getElementById('demo4').innerHTML += (text);
////////////////////////////////
const person = { fname: "Abanoub", lname: "Samy", age: 20 };
let txt = "";
for (let x in person) {
    txt += person[x] + " ";
}
document.getElementById('demo5').innerHTML += txt;
////////////////////////////////
const cars = ["BMW", "Volvo", "Mini"];
let text2 = "";
for (let x of cars) {
    text2 += x + "<br>";
}
document.getElementById('demo6').innerHTML += text2;
////////////////////////////////
let language = "JavaScript";
let text3 = "";
for (let x of language) {
    text3 += x + "<br>";
}
document.getElementById('demo7').innerHTML += text3;
////////////////////////////////
let text4 = "";
let i = 0;
while (i < 10) {
    text4 += "<br>The number is " + i++;
}
document.getElementById('demo8').innerHTML += text4;
////////////////////////////////
// The following command displays the path of the currently open page.
document.getElementById('demo9').innerHTML += window.document.location;
////////////////////////////////
var demo = document.getElementById('demo10');
let w = window.innerWidth;
let h = window.innerHeight;
demo.innerHTML = 'width: ' + w + '<br>' + 'height: ' + h;
////////////////////////////////
function clickevent() {
    document.getElementById('demo11').innerHTML += "This is Java*******point<br>";
}
////////////////////////////////
function mouseoverevent() {
    alert("This is Java******point");
}
////////////////////////////////
let str = "0123456789";
for (let x of str) {
    document.getElementById('demo12').innerHTML += "number: " + x + "<br>";
}
////////////////////////////////
function focusevent() {
    document.getElementById("input1").style.background = " aqua";
}
////////////////////////////////
////////////////////////////////
////////////////////////////////
////////////////////////////////
