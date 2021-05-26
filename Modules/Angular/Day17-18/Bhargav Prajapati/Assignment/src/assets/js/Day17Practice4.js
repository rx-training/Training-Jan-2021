var myWindow;

function openWindow() {
  myWindow = window.open("", "", "width=500, height=500");
}

function resizeWindow() {
  myWindow.resizeTo(1000, 1000);
  myWindow.focus();
}