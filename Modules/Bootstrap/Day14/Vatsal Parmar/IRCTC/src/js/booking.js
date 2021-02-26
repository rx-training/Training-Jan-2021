var a = localStorage.getItem("Train Data");
var trainData = JSON.parse(a);

var b = localStorage.getItem("Search Data");
var searchData = JSON.parse(b);

document.getElementById("tName").innerHTML = trainData.name;
document.getElementById("date").innerHTML = searchData.date;
document.getElementById("from").innerHTML = trainData.from;
document.getElementById("start").innerHTML = trainData.start;
document.getElementById("to").innerHTML = trainData.to;
document.getElementById("stop").innerHTML = trainData.stop;
document.getElementById("quota").innerHTML = searchData.ticket;
document.getElementById("p1").innerHTML = trainData.class[0].price + " Rs";
document.getElementById("p2").innerHTML = trainData.class[1].price + " Rs";
document.getElementById("p3").innerHTML = trainData.class[2].price + " Rs";
document.getElementById("p4").innerHTML = trainData.class[3].price + " Rs";

$("#anubhuti").click(function () {
  var nos = document.getElementById("num").value;
  $("#total").html("Total : " + nos * trainData.class[0].price + " Rs");
});

$("#1A").click(function () {
  var nos = document.getElementById("num").value;
  $("#total").html("Total : " + nos * trainData.class[1].price + " Rs");
});

$("#EC").click(function () {
  var nos = document.getElementById("num").value;
  $("#total").html("Total : " + nos * trainData.class[2].price + " Rs");
});

$("#AC2").click(function () {
  var nos = document.getElementById("num").value;
  $("#total").html("Total : " + nos * trainData.class[3].price + " Rs");
});

function ticket() {
  let op1 = document.getElementById("anubhuti").checked;
  let op2 = document.getElementById("1A").checked;
  let op3 = document.getElementById("EC").checked;
  let op4 = document.getElementById("AC2").checked;
  let nos = document.getElementById("num").value;
  let name = document.getElementById("name").value;

  document.getElementById("Name").innerHTML = name;
  document.getElementById("numOfSeate").innerHTML = nos;
  document.getElementById("trainName").innerHTML = trainData.name;
  document.getElementById("ticketDate").innerHTML = searchData.date;
  document.getElementById("ticketFrom").innerHTML = trainData.from;
  document.getElementById("ticketStart").innerHTML = trainData.start;
  document.getElementById("ticketTo").innerHTML = trainData.to;
  document.getElementById("ticketStop").innerHTML = trainData.stop;
  document.getElementById("ticketQuota").innerHTML = searchData.ticket;

  switch (true) {
    case op1:
      $("#ticketPrice").html(nos * trainData.class[0].price + " Rs");
      $("#ticketClass").html(trainData.class[0].name);
      break;
    case op2:
      $("#ticketPrice").html(nos * trainData.class[1].price + " Rs");
      $("#ticketClass").html(trainData.class[1].name);
      break;
    case op3:
      $("#ticketPrice").html(nos * trainData.class[2].price + " Rs");
      $("#ticketClass").html(trainData.class[2].name);
      break;
    case op4:
      $("#ticketPrice").html(nos * trainData.class[3].price + " Rs");
      $("#ticketClass").html(trainData.class[3].name);
      break;
    default:
      $("#ticketPrice").html("0 Rs");
      $("#ticketClass").html(trainData.class[0].name);
      break;
  }
}

// User Auth

function auth() {
  var userid = document.getElementById("userid").value;
  var password = document.getElementById("pwd").value;

  if (userid == "admin" && password == "admin") {
    window.location.href = "admin.html";
  } else {
    alert("Wrong Id Or Password");
  }
}
