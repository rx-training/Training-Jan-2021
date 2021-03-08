//getting account details from local storage

var a = localStorage.getItem("Accounts");
function login() {
  //checking if local storage is null

  if (a == null) {
    //checking for admin login
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    if (email == "admin" && password == "admin") {
      window.location.href = "admin.html";
    } else {
      alert("Open An Account First");
    }
  } else {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    //flag to show wrong details error
    var flag = false;

    //parsing local storage data into JSON
    var accountsInfo = JSON.parse(a);
    var acc = accountsInfo.accounts;

    if (email == "admin" && password == "admin") {
      window.location.href = "admin.html";
    } else {
      for (let i = 0; i < acc.length; i++) {
        if (email == acc[i].email && password == acc[i].password) {
          flag = false;
          var obj = acc[i];

          //setting user session after right email and password and loging in

          let acData = JSON.stringify(obj);
          sessionStorage.setItem("User", acData);
          window.location.href = "account.html";
          break;
        } else {
          flag = true;
        }
      }
      if (flag) {
        //showing errors
        alert("Wrong Email or Password");
      }
    }
  }
}
