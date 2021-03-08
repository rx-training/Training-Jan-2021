//getting session details
var a = sessionStorage.getItem("User");
var accountDetails = JSON.parse(a);

//getting accounts details from local storage
var b = localStorage.getItem("Accounts");
var accounts = JSON.parse(b);

//getting transaction history
var c = localStorage.getItem("transaction");

//showing account info
document.getElementById("name").innerHTML = accountDetails.name;
document.getElementById("balance").innerHTML = accountDetails.balance;
document.getElementById("acno").innerHTML = accountDetails.accountNo;
document.getElementById("type").innerHTML = accountDetails.account;
document.getElementById("status").innerHTML = accountDetails.status;

//function for add money
function addMoney() {
  //checking if transaction history is null
  if (c == null) {
    //checking for account status
    if (accountDetails.status == "ACTIVE") {
      let money = document.getElementById("money").value;
      let pwd = document.getElementById("pwd").value;

      //checking for password
      if (pwd == accountDetails.password) {
        accountDetails.balance =
          parseInt(accountDetails.balance) + parseInt(money);

        //to store transaction history
        let date = new Date();
        let transaction = {
          history: [],
        };

        //to update balance in local storage
        for (let i = 0; i < accounts.accounts.length; i++) {
          if (accountDetails.name == accounts.accounts[i].name) {
            accounts.accounts[i].balance = accountDetails.balance;

            let obj = {
              from: "-DEPOSIT-",
              to: accounts.accounts[i].name,
              Amount: money,
              date: date.toLocaleDateString(),
            };

            //pushing new transaction history into array
            transaction.history.push(obj);
          }
        }

        //storing updated information
        let y = JSON.stringify(transaction);
        localStorage.setItem("transaction", y);

        let x = JSON.stringify(accounts);
        localStorage.setItem("Accounts", x);

        let acData = JSON.stringify(accountDetails);
        sessionStorage.setItem("User", acData);

        window.location.href = "account.html";
      } else {
        //showing error for wrong password
        alert("Wrong Password");
      }
    } else {
      //alert if account status is freez
      alert("Your Account Is Freezed, You Can't Performe Any transaction");
    }
  } else {
    //if transaction history is not null
    if (accountDetails.status == "ACTIVE") {
      let money = document.getElementById("money").value;
      let pwd = document.getElementById("pwd").value;
      if (pwd == accountDetails.password) {
        accountDetails.balance =
          parseInt(accountDetails.balance) + parseInt(money);

        let date = new Date();
        //getting transaction history
        let transaction = JSON.parse(c);

        for (let i = 0; i < accounts.accounts.length; i++) {
          if (accountDetails.name == accounts.accounts[i].name) {
            accounts.accounts[i].balance = accountDetails.balance;

            let obj = {
              from: "-DEPOSIT-",
              to: accounts.accounts[i].name,
              Amount: money,
              date: date.toLocaleDateString(),
            };

            //pushing new transaction history into array
            transaction.history.push(obj);
          }
        }

        //storing updated information in local storage

        let y = JSON.stringify(transaction);
        localStorage.setItem("transaction", y);

        let x = JSON.stringify(accounts);
        localStorage.setItem("Accounts", x);

        let acData = JSON.stringify(accountDetails);
        sessionStorage.setItem("User", acData);

        window.location.href = "account.html";
      } else {
        alert("Wrong Password");
      }
    } else {
      alert("Your Account Is Freezed, You Can't Performe Any transaction");
    }
  }
}

//function for transfer money
function transferMoney() {
  //checking if transaction history is null
  if (c == null) {
    //checking for account status
    if (accountDetails.status == "ACTIVE") {
      let money = document.getElementById("transAmount").value;
      let pwd = document.getElementById("pwd2").value;
      let reciver = document.getElementById("reciver").value;
      var flag = false;

      //checking reciver's account no and do not letting transfer if account no is in correct or to him self
      for (let i = 0; i < accounts.accounts.length; i++) {
        if (
          reciver == accounts.accounts[i].accountNo &&
          reciver != accountDetails.accountNo
        ) {
          flag = false;
          if (pwd == accountDetails.password) {
            //checking if transfer amount is greter then balance
            if (money <= accountDetails.balance) {
              //updating balance
              //deducting money from sender
              accountDetails.balance =
                parseInt(accountDetails.balance) - parseInt(money);
              //adding money in reciver's balance
              accounts.accounts[i].balance =
                parseInt(accounts.accounts[i].balance) + parseInt(money);

              //creating obj to store transaction history
              var date = new Date();
              let transaction = {
                history: [],
              };

              let obj = {
                from: accountDetails.name,
                to: accounts.accounts[i].name,
                Amount: money,
                date: date.toLocaleDateString(),
              };

              //pushing new transaction in transaction history
              transaction.history.push(obj);

              for (let i = 0; i < accounts.accounts.length; i++) {
                if (accountDetails.name == accounts.accounts[i].name) {
                  accounts.accounts[i].balance = accountDetails.balance;
                }
              }

              //storing updated information
              let y = JSON.stringify(transaction);
              localStorage.setItem("transaction", y);

              let x = JSON.stringify(accounts);
              localStorage.setItem("Accounts", x);

              let acData = JSON.stringify(accountDetails);
              sessionStorage.setItem("User", acData);

              window.location.href = "account.html";
            } else {
              //showing err if insufficient balance
              alert("Insufficient Balance");
            }

            break;
          } else {
            alert("Wrong Password");
            break;
          }
        } else {
          flag = true;
        }
      }
      if (flag) {
        alert("Please Check Account Number");
      }
    } else {
      //showing if account is freezed
      alert("Your Account Is Freezed, You Can't Performe Any transaction");
    }
  } else {
    //if transaction history is not null
    if (accountDetails.status == "ACTIVE") {
      let money = document.getElementById("transAmount").value;
      let pwd = document.getElementById("pwd2").value;
      let reciver = document.getElementById("reciver").value;
      var flag = false;

      for (let i = 0; i < accounts.accounts.length; i++) {
        if (
          reciver == accounts.accounts[i].accountNo &&
          reciver != accountDetails.accountNo
        ) {
          flag = false;
          if (pwd == accountDetails.password) {
            if (money <= accountDetails.balance) {
              accountDetails.balance =
                parseInt(accountDetails.balance) - parseInt(money);
              accounts.accounts[i].balance =
                parseInt(accounts.accounts[i].balance) + parseInt(money);

              //getting transaction history from local storage
              var date = new Date();
              let transaction = JSON.parse(c);

              let obj = {
                from: accountDetails.name,
                to: accounts.accounts[i].name,
                Amount: money,
                date: date.toLocaleDateString(),
              };

              //adding new transaction record
              transaction.history.push(obj);

              for (let i = 0; i < accounts.accounts.length; i++) {
                if (accountDetails.name == accounts.accounts[i].name) {
                  accounts.accounts[i].balance = accountDetails.balance;
                }
              }

              //storing updated information
              let y = JSON.stringify(transaction);
              localStorage.setItem("transaction", y);

              let x = JSON.stringify(accounts);
              localStorage.setItem("Accounts", x);

              let acData = JSON.stringify(accountDetails);
              sessionStorage.setItem("User", acData);

              window.location.href = "account.html";
            } else {
              alert("Insufficient Balance");
            }

            break;
          } else {
            alert("Wrong Password");
            break;
          }
        } else {
          flag = true;
        }
      }
      if (flag) {
        alert("Please Check Account Number");
      }
    } else {
      alert("Your Account Is Freezed, You Can't Performe Any transaction");
    }
  }
}

//transaction History
if (c != null) {
  //checking if transaction history is null
  let d = JSON.parse(c);
  let Data = d.history;

  var rowData = "";
  //showing tranction history in table
  $.each(Data, function (i, value) {
    if (accountDetails.name == value.from || accountDetails.name == value.to) {
      rowData +=
        "<tr>" +
        "<td>" +
        (i + 1) +
        "</td>" +
        "<td>" +
        value.from +
        "</td>" +
        "<td>" +
        value.to +
        "</td>" +
        "<td>" +
        value.Amount +
        "</td>" +
        "<td>" +
        value.date +
        "</td>" +
        "</tr>";
    }
  });
  $("#tableBody").append(rowData);
}

//logout

function logout() {
  //clearing session on logout
  sessionStorage.removeItem("User");
}
