// geting listing data from local storage
var a = localStorage.getItem("Listing Data");

if (a == null) {
  //getting listings data from json file if not available in local storage

  $.getJSON("train-data.json", function (data, status) {
    //storing listing data in local storage
    var listingData = JSON.stringify(data);
    localStorage.setItem("Listing Data", listingData);

    var a = localStorage.getItem("Listing Data");
    var Data = JSON.parse(a);
    Data = Data.trains;

    //showing listing data in table
    var rowData = "";

    $.each(Data, function (i, value) {
      rowData +=
        "<tr>" +
        "<td>" +
        value.id +
        "</td>" +
        "<td>" +
        value.name +
        "</td>" +
        "<td>" +
        value.from +
        "</td>" +
        "<td>" +
        value.to +
        "</td>" +
        "<td>" +
        value.start +
        "</td>" +
        "<td>" +
        value.stop +
        "</td>" +
        "<td>" +
        value.class[0].price +
        " RS" +
        "</td>" +
        "<td>" +
        value.class[1].price +
        " RS" +
        "</td>" +
        "<td>" +
        value.class[2].price +
        " RS" +
        "</td>" +
        "<td>" +
        value.class[3].price +
        " RS" +
        "</td>" +
        // "<td>" +
        // "<button class='btn btn-danger' onclick='remove(" +
        // value.id +
        // ")' >Delete</button>" +
        // "</td>" +
        "</tr>";
    });
    $("#tableBody").append(rowData);
  });
} else {
  //showing listing data from local storage

  var Data = JSON.parse(a);
  Data = Data.trains;
  var rowData = "";
  //console.log(Data);
  $.each(Data, function (i, value) {
    rowData +=
      "<tr>" +
      "<td>" +
      value.id +
      "</td>" +
      "<td>" +
      value.name +
      "</td>" +
      "<td>" +
      value.from +
      "</td>" +
      "<td>" +
      value.to +
      "</td>" +
      "<td>" +
      value.start +
      "</td>" +
      "<td>" +
      value.stop +
      "</td>" +
      "<td>" +
      value.class[0].price +
      " RS" +
      "</td>" +
      "<td>" +
      value.class[1].price +
      " RS" +
      "</td>" +
      "<td>" +
      value.class[2].price +
      " RS" +
      "</td>" +
      "<td>" +
      value.class[3].price +
      " RS" +
      "</td>" +
      //   "<td>" +
      //   "<button class='btn btn-danger' onclick='remove(" +
      //   value.id +
      //   ")' >Delete</button>" +
      //   "</td>" +
      "</tr>";
  });
  $("#tableBody").append(rowData);
}

function addTrain() {
  var a = localStorage.getItem("Listing Data");
  var Data = JSON.parse(a);
  Data = Data.trains;

  //grting new train data from input

  var id = Data.length + 1;
  var name = document.getElementById("name").value;
  var from = document.getElementById("from").value;
  var to = document.getElementById("to").value;
  var start = document.getElementById("start").value;
  var stop = document.getElementById("stop").value;
  var stop = document.getElementById("stop").value;
  var EA = document.getElementById("EA").value;
  var AC1 = document.getElementById("1A").value;
  var EC = document.getElementById("EC").value;
  var AC2 = document.getElementById("AC2").value;
  var duration = document.getElementById("duration").value;

  //making object of train data
  var obj = {
    id: id,
    name: name.toUpperCase(),
    from: from.toUpperCase(),
    to: to.toUpperCase(),
    start: start,
    stop: stop,
    duration: "-" + duration + "-",
    days: "M T W T F S S",
    class: [
      {
        name: "Anubhuti Class",
        availability: "WAITING",
        price: EA,
      },
      {
        name: "AC First Class (1A)",
        availability: "AVAILABLE",
        price: AC1,
      },
      {
        name: "Exec. Chair Car (EC)",
        availability: "AVAILABLE",
        price: EC,
      },
      {
        name: "AC 2 Tier",
        availability: "AVAILABLE",
        price: AC2,
      },
    ],
  };

  //pushing new train data object in to array
  Data.push(obj);

  var b = {
    trains: Data,
  };

  //storing data in local storage
  let listingData = JSON.stringify(b);
  localStorage.setItem("Listing Data", listingData);

  window.location.href = "admin.html";

  //console.log(Data);
}
