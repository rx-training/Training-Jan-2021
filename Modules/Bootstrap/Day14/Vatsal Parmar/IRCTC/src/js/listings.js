var s = localStorage.getItem("Search Data");
var searchData = JSON.parse(s);

document.getElementById("location").innerHTML = searchData.location;
document.getElementById("destination").innerHTML = searchData.destination;
document.getElementById("date").innerHTML = searchData.date;
document.getElementById("quota").innerHTML = searchData.ticket;
//console.log(searchData);

// SEARCH BAR
document.getElementById("from").value = searchData.location;
document.getElementById("to").value = searchData.destination;
document.getElementById("Date").value = searchData.date;
document.getElementById("ticketType").value = searchData.ticket;
document.getElementById("seatType").value = searchData.seat;

// SIDE BAR
switch (searchData.seat) {
  case "All Class":
    document.getElementById("EA").checked = true;
    document.getElementById("1A").checked = true;
    document.getElementById("EC").checked = true;
    document.getElementById("AC2").checked = true;
    break;
  case "EA":
    document.getElementById("EA").checked = true;
    break;
  case "1A":
    document.getElementById("1A").checked = true;
    break;
  case "EC":
    document.getElementById("EC").checked = true;
    break;
  case "AC2":
    document.getElementById("AC2").checked = true;
    break;
  default:
    document.getElementById("EA").checked = true;
    document.getElementById("1A").checked = true;
    document.getElementById("EC").checked = true;
    document.getElementById("AC2").checked = true;
    break;
}
// For Train List
var trains;
async function getData(file) {
  let x = await fetch(file);
  let y = await x.json();

  var l = localStorage.getItem("Listing Data");
  if (l == null) {
    trains = y.trains;
  } else {
    var Data = JSON.parse(l);
    trains = Data.trains;
    //console.log("from else block");
  }

  var trainCard = "";

  var nor = 0;
  for (let i = 0; i < trains.length; i++) {
    if (
      searchData.location == trains[i].from &&
      searchData.destination == trains[i].to
    ) {
      nor++;
      trainCard +=
        "<div class='container border border-dark mb-3'>" +
        "<div class='row p-2 bg-light'>" +
        "<h4>" +
        trains[i].name +
        "</h4>" +
        "<p class='mx-auto'>Runs On : " +
        trains[i].days +
        "</p>" +
        "</div>" +
        "<div class='row px-2'>" +
        "<p><strong>" +
        trains[i].start +
        " | </strong>" +
        trains[i].from +
        " | " +
        searchData.date +
        "</p>" +
        "<p class='mx-auto'>" +
        trains[i].duration +
        "</p>" +
        "<p><strong>" +
        trains[i].stop +
        " | </strong>" +
        trains[i].to +
        " | " +
        searchData.date +
        "</p>" +
        "</div>" +
        "<div class='row p-2'>" +
        "<div class='col-md-3 border broder-dark'>" +
        "<strong>" +
        trains[i].class[0].name +
        "</strong>" +
        "<p class='text-danger'><strong>" +
        trains[i].class[0].availability +
        "</strong></p>" +
        "<i class='fa fa-rupee'></i> " +
        "<strong>" +
        trains[i].class[0].price +
        "</strong>" +
        "</div>" +
        "<div class='col-md-3 border broder-dark'>" +
        "<strong>" +
        trains[i].class[1].name +
        "</strong>" +
        "<p class='text-success'><strong>" +
        trains[i].class[1].availability +
        "</strong></p>" +
        "<i class='fa fa-rupee'></i> " +
        "<strong>" +
        trains[i].class[1].price +
        "</strong>" +
        "</div>" +
        "<div class='col-md-3 border broder-dark'>" +
        "<strong>" +
        trains[i].class[2].name +
        "</strong>" +
        "<p class='text-success'><strong>" +
        trains[i].class[2].availability +
        "</strong></p>" +
        "<i class='fa fa-rupee'></i> " +
        "<strong>" +
        trains[i].class[2].price +
        "</strong>" +
        "</div>" +
        "<div class='col-md-3 border broder-dark'>" +
        "<strong>" +
        trains[i].class[3].name +
        "</strong>" +
        "<p class='text-success'><strong>" +
        trains[i].class[3].availability +
        "</strong></p>" +
        "<i class='fa fa-rupee'></i> " +
        "<strong>" +
        trains[i].class[3].price +
        "</strong>" +
        "</div>" +
        "</div>" +
        "<div class='row bg-light p-2'>" +
        "<button class='btn btn-warning' onclick='book(" +
        trains[i].id +
        ")' id=" +
        trains[i].id +
        ">Book Now</button>" +
        "</div>" +
        "</div>";
    }
  }

  document.getElementById("noOfResult").innerHTML = nor;
  if (nor == 0) {
    $("#trainContainer").append(
      "<h1 class='text-danger display-2'>Sorry No Trains Available</h1>"
    );
  } else {
    $("#trainContainer").append(trainCard);
  }
}
getData("./train-data.json");

// SEARCH BUTTON
function search() {
  let location = document.getElementById("from").value;
  let destination = document.getElementById("to").value;
  let ticket = document.getElementById("ticketType").value;
  let seat = document.getElementById("seatType").value;
  let date = document.getElementById("Date").value;
  let filter = [];

  if (document.getElementById("op1").checked == true) {
    filter.push("Divyaang Concession");
  }
  if (document.getElementById("op2").checked == true) {
    filter.push("Flexible With Date");
  }
  if (document.getElementById("op3").checked == true) {
    filter.push("Flexible With Date");
  }

  let data = {
    location: location.toUpperCase(),
    destination: destination.toUpperCase(),
    ticket: ticket,
    seat: seat,
    date: date,
    filter: filter,
  };

  let searchData = JSON.stringify(data);
  localStorage.setItem("Search Data", searchData);

  window.location.href = "listings.html";
  //console.log(data);
}

// BOOK NOW

function book(id) {
  let t = trains[id - 1];

  let trainData = JSON.stringify(t);
  localStorage.setItem("Train Data", trainData);
  window.location.href = "booking.html";
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
