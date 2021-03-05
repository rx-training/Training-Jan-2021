//getting accounts data from local storage
var a = localStorage.getItem("Accounts");

//checking if data is null
if (a != null) {
  var accounts = JSON.parse(a);
  let Data = accounts.accounts;
  var rowData = "";

  //showing accounts data in table
  $.each(Data, function (i, value) {
    //showing data of accounts that have ACTIVE status
    if (value.status == "ACTIVE") {
      rowData +=
        "<tr>" +
        "<td>" +
        (i + 1) +
        "</td>" +
        "<td>" +
        value.name +
        "</td>" +
        "<td>" +
        value.email +
        "</td>" +
        "<td>" +
        value.accountNo +
        "</td>" +
        "<td>" +
        value.account +
        "</td>" +
        "<td>" +
        value.balance +
        "</td>" +
        "<td>" +
        value.status +
        "</td>" +
        "<td>" +
        "<button class='btn btn-danger' onclick='freez(" +
        value.accountNo +
        ")' >Freez</button>" +
        "</td>" +
        "</tr>";
    } else {
      //showing data of accounts that have FREEZ status
      rowData +=
        "<tr>" +
        "<td>" +
        (i + 1) +
        "</td>" +
        "<td>" +
        value.name +
        "</td>" +
        "<td>" +
        value.email +
        "</td>" +
        "<td>" +
        value.accountNo +
        "</td>" +
        "<td>" +
        value.account +
        "</td>" +
        "<td>" +
        value.balance +
        "</td>" +
        "<td>" +
        value.status +
        "</td>" +
        "<td>" +
        "<button class='btn btn-success' onclick='unfreez(" +
        value.accountNo +
        ")' >Unfreez</button>" +
        "</td>" +
        "</tr>";
    }
  });
  $("#tableBody").append(rowData);
}

//function to freez account
function freez(j) {
  let accounts = JSON.parse(a);
  for (let i = 0; i < accounts.accounts.length; i++) {
    if (j == accounts.accounts[i].accountNo) {
      accounts.accounts[i].status = "FREEZ";
      let x = JSON.stringify(accounts);
      localStorage.setItem("Accounts", x);
      window.location.href = "admin.html";
    }
  }
}

//function to unfreez account
function unfreez(k) {
  let accounts = JSON.parse(a);
  for (let i = 0; i < accounts.accounts.length; i++) {
    if (k == accounts.accounts[i].accountNo) {
      accounts.accounts[i].status = "ACTIVE";
      let x = JSON.stringify(accounts);
      localStorage.setItem("Accounts", x);
      window.location.href = "admin.html";
    }
  }
}
