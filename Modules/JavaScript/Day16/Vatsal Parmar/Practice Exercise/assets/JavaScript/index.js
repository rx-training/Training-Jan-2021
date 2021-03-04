var arr1 = ["Hello", "World"]; // initial array for exercise 5 for push and pop function
for (var i = 0; i < arr1.length; i++) {
  document.getElementById("ans5").innerHTML +=
    "<li><strong>" + arr1[i] + "</strong></li>";
}

// to check whether a input string is blank or not
function checkEmpty(a, ans1) {
  if (a.length == 0) {
    ans1.innerHTML = "String Is Empty";
  } else {
    ans1.innerHTML = "String is not empty";
  }
}

// spliting string when blank space occured and converting it into an array of words.
function convertInArr() {
  document.getElementById("ans2").innerHTML = "";
  var b = document.getElementById("input2").value;
  var t = b.trim();
  console.log(t);
  var arr = t.split(" ");
  for (var i = 0; i < arr.length; i++) {
    document.getElementById("ans2").innerHTML +=
      "<li><strong>" + arr[i] + "</strong></li>";
  }
}

//extracting a specified number of characters from a string using substr method
function extractString() {
  var c = document.getElementById("input3").value;
  var d = document.getElementById("input4").value;
  var res = c.substr(0, d);
  document.getElementById("ans3").innerHTML = "<strong>" + res + "</strong>";
}

// getting current date using getDate method
function gateCurrentDate() {
  var e = new Date();
  document.getElementById("ans4").innerHTML = e.getDate();
}

// adding string to array using push()
function addElement() {
  document.getElementById("ans5").innerHTML = "";
  var str = document.getElementById("input5").value;
  arr1.push(str);
  for (var i = 0; i < arr1.length; i++) {
    document.getElementById("ans5").innerHTML +=
      "<li><strong>" + arr1[i] + "</strong></li>";
  }
}

// removing element from array using pop()
function deleteElement() {
  var f = arr1.pop();
  document.getElementById("ans6").innerHTML =
    "<strong> Poped Element : " + f + "</strong>";
}

// changing color of string
function changeColor() {
  document.getElementById("ans7").style.color = "red";
}
