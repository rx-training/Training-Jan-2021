function checkData() {
  var eId = document.getElementById("EID").value;
  var name = document.getElementById("eName").value;
  var age = document.getElementById("age").value;
  var male = document.getElementById("male").checked;
  var female = document.getElementById("female").checked;
  var designation = document.getElementById("designation").value;
  var salary = document.getElementById("salary").value;
  var location = document.getElementById("location").value;
  var email = document.getElementById("email").value;
  var date = document.getElementById("date").value;
  var contactNo = document.getElementById("contactNo").value;

  var patt = /^\d{5,}$/g;
  var emailPatt = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
  var contactPatt = /^\d{10}$/g;
  var Err = [];

  // To Show Error Message
  var Message = [
    "Enter Valid Employee ID",
    "Enter Valid Name",
    "Enter Valid Age",
    "Select Gender",
    "Enter Designation",
    "Enter Valid Salary",
    "Enter Valid Email",
    "Enter Valid Date",
    "Enter Valid Contact Number",
  ];

  // To Show Valid Data
  if (male) {
    var Data = [
      eId,
      name,
      age,
      "Male",
      designation,
      salary,
      location,
      email,
      date,
      contactNo,
    ];
  } else {
    var Data = [
      eId,
      name,
      age,
      "Female",
      designation,
      salary,
      location,
      email,
      date,
      contactNo,
    ];
  }

  // checking for errors
  if (patt.test(eId) && eId != "") {
    Err[0] = true;
  } else {
    Err[0] = false;
  }
  if (name != "") {
    Err[1] = true;
  } else {
    Err[1] = false;
  }
  if (!isNaN(age) && age != "") {
    Err[2] = true;
  } else {
    Err[2] = false;
  }
  if (male || female) {
    Err[3] = true;
  } else {
    Err[3] = false;
  }
  if (designation != "") {
    Err[4] = true;
  } else {
    Err[4] = false;
  }
  if (!isNaN(salary) && salary != "") {
    Err[5] = true;
  } else {
    Err[5] = false;
  }
  if (emailPatt.test(email) && email != "") {
    Err[6] = true;
  } else {
    Err[6] = false;
  }
  if (date != "") {
    Err[7] = true;
  } else {
    Err[7] = false;
  }
  if (contactPatt.test(contactNo) && contactNo != "") {
    Err[8] = true;
  } else {
    Err[8] = false;
  }

  //checking for errors
  if (
    Err[0] == true &&
    Err[1] == true &&
    Err[2] == true &&
    Err[3] == true &&
    Err[4] == true &&
    Err[5] == true &&
    Err[6] == true &&
    Err[7] == true &&
    Err[8] == true
  ) {
    document.getElementById("ans1").innerHTML = "";
    document.getElementById("ans2").innerHTML = "Submission Successfull";
    document.getElementById("ans3").innerHTML = "";
    for (var j = 0; j < Data.length; j++) {
      document.getElementById("ans3").innerHTML +=
        "<li><strong>" + Data[j] + "</strong></li>";
    }
  } else {
    document.getElementById("ans1").innerHTML = "";
    document.getElementById("ans2").innerHTML = "";
    document.getElementById("ans3").innerHTML = "";

    //to show error msg
    for (var i = 0; i < Err.length; i++) {
      if (Err[i] == false) {
        document.getElementById("ans1").innerHTML +=
          "<li><strong>" + Message[i] + "</strong></li>";
      }
    }
  }
  return false;
}
