var SUM = 0;

function clickMe() {
  var a = parseInt(prompt("Enter First Number"));
  var b = parseInt(prompt("Enter Second Number"));
  var c = parseInt(prompt("Enter Third Number"));
  if (a > b) {
    if (a > c) {
      document.getElementById("maximum").innerHTML =
        "<strong>Maximum Number :" + " " + a + "</strong>";
    } else {
      document.getElementById("maximum").innerHTML =
        "<strong>Maximum Number :" + " " + c + "</strong>";
    }
  } else {
    if (b > c) {
      document.getElementById("maximum").innerHTML =
        "<strong>Maximum Number :" + " " + b + "</strong>";
    } else {
      document.getElementById("maximum").innerHTML =
        "<strong>Maximum Number :" + " " + c + "</strong>";
    }
  }
  if (a > 40) {
    SUM = SUM + a;
  }
  if (b > 40) {
    SUM = SUM + b;
  }
  if (c > 40) {
    SUM = SUM + c;
  }
  document.getElementById("sum").innerHTML = "The Sum Is : " + SUM;
  SUM = 0;
}

var arr = ["Ahmedabad", "Vadodra", "Jamnagar", "Surat", "Rajkot"];
function cityNames() {
  for (var i = 0; i < arr.length; i++) {
    alert("Name Of City " + arr[i]);
  }
}
