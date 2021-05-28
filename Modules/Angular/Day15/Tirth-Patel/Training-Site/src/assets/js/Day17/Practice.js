function wopen(){
    window.open();
}


var x = document.getElementById('current').innerHTML = "current page location is " + window.location.href;
console.log(x);

function newwindow(){
window.location.assign("https://www.w3schools.com/js/js_window_location.asp");
}

function goback(){
history.back();}
function goprev(){
history.forward();}

var widnow
function changes(){

 widnow = window.open("","", "width =500, height = 1000")
}
function changes2() {
widnow.resizeTo(500, 500);
widnow.focus();
}
