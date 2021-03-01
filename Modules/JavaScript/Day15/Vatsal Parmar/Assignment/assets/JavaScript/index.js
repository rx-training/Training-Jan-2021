function calculate() {
  // Taking Inputs

  var a = parseInt(document.getElementById("num1").value);
  var b = parseInt(document.getElementById("num2").value);
  var aad = document.getElementById("add").checked;
  var sub = document.getElementById("subtract").checked;
  var mul = document.getElementById("mul").checked;
  var div = document.getElementById("div").checked;

  //Validation for wrong input
  if (isNaN(a)) {
    document.getElementById("wrang-num-1").innerHTML =
      "Please enter first number";
    document.getElementById("answer").innerHTML = "";
  } else if (isNaN(b)) {
    document.getElementById("wrang-num-1").innerHTML = "";
    document.getElementById("wrang-num-2").innerHTML =
      "Please enter second number";
    document.getElementById("answer").innerHTML = "";
  } else {
    // Taking Switch statement for calculator logic

    switch (true) {
      case aad:
        document.getElementById("answer").innerHTML = a + b;
        document.getElementById("wrang-selection").innerHTML = "";
        break;
      case sub:
        document.getElementById("answer").innerHTML = a - b;
        document.getElementById("wrang-selection").innerHTML = "";
        break;
      case mul:
        document.getElementById("answer").innerHTML = a * b;
        document.getElementById("wrang-selection").innerHTML = "";
        break;
      case div:
        document.getElementById("answer").innerHTML = a / b;
        document.getElementById("wrang-selection").innerHTML = "";
        break;
      default:
        document.getElementById("wrang-num-1").innerHTML = "";
        document.getElementById("wrang-num-2").innerHTML = "";
        document.getElementById("wrang-selection").innerHTML =
          "Please select an operation";
        document.getElementById("answer").innerHTML = "";
        break;
    }
  }
  return false;
}
