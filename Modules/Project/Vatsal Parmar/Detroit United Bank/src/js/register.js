//getting accounts details from local storage
var a = localStorage.getItem("Accounts");

function register() {
  //checking if details is not present in local storage
  if (a == null) {
    //getting user detais
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var savings = document.getElementById("savings").checked;
    var current = document.getElementById("current").checked;
    var password = document.getElementById("password").value;
    var conf_password = document.getElementById("conf_password").value;
    var accountNo = Math.floor(Math.random() * 12345);
    var emailPatt = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    var account;

    //making object to store user details
    var accountsInfo = {
      accounts: [],
    };

    //checking for selected account type
    if (savings) {
      account = "SAVINGS";
    }
    if (current) {
      account = "CURRENT";
    }

    //user details
    var details = {
      name: name.toUpperCase(),
      email: email,
      accountNo: accountNo,
      account: account,
      password: password,
      balance: 0,
      status: "ACTIVE",
    };

    //validation
    if (name != "") {
      if (email != "" && emailPatt.test(email)) {
        if (email != "admin" && email != "Admin" && email != "ADMIN") {
          if (password != "") {
            if (password == conf_password) {
              //pushing details in array
              accountsInfo.accounts.push(details);

              //storing in local storage
              var acData = JSON.stringify(accountsInfo);
              localStorage.setItem("Accounts", acData);
              //console.log("from elae part");
              alert("Account Created Successfuly");
              window.location.href = "index.html";
            } else {
              alert("enter same password in both the fild");
            }
          } else {
            alert("password can not be empty");
          }
        } else {
          alert("email can not be admin");
        }
      } else {
        alert("enter valid email");
      }
    } else {
      alert("name can not be empty");
    }
  } else {
    //if local storage is not null
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var savings = document.getElementById("savings").checked;
    var current = document.getElementById("current").checked;
    var password = document.getElementById("password").value;
    var conf_password = document.getElementById("conf_password").value;
    var emailPatt = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    var accountNo = Math.floor(Math.random() * 12345);

    var account;
    var accountsInfo = JSON.parse(a);

    //checking for selected account type
    if (savings) {
      account = "SAVINGS";
    }
    if (current) {
      account = "CURRENT";
    }

    var details = {
      name: name.toUpperCase(),
      email: email,
      accountNo: accountNo,
      account: account,
      password: password,
      balance: 0,
      status: "ACTIVE",
    };

    if (name != "") {
      if (email != "" && emailPatt.test(email)) {
        if (email != "admin" && email != "Admin" && email != "ADMIN") {
          if (password != "") {
            if (password == conf_password) {
              accountsInfo.accounts.push(details);

              var acData = JSON.stringify(accountsInfo);
              localStorage.setItem("Accounts", acData);
              //console.log("from elae part");
              alert("Account Created Successfuly");
              window.location.href = "index.html";
            } else {
              alert("enter same password in both the fild");
            }
          } else {
            alert("password can not be empty");
          }
        } else {
          alert("email can not be admin");
        }
      } else {
        alert("enter valid email");
      }
    } else {
      alert("name can not be empty");
    }
  }
}
