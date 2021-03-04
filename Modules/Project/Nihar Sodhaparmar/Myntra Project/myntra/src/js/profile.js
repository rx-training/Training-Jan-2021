function checkLogin() {
    if (localStorage.getItem("userDetails") === null) {
        window.location.assign("login.html")
    }
}

checkLogin();


window.onload = () => {

    var profileDataTable = document.getElementById("profileDataTable");

    var userDetails = JSON.parse(localStorage.getItem("userDetails"));

    for (var field in userDetails) {

        if (field == "userId" || field == "password") {
            continue;
        }

        console.log(userDetails[field]);

        var rowcount = profileDataTable.rows.lenght;
        var tr = profileDataTable.insertRow(rowcount);

        var td = document.createElement('td');

        td = tr.insertCell(0)
        td.innerHTML = field.toUpperCase();

        td = tr.insertCell(1);
        td.innerHTML = userDetails[field];
    }

    console.log(userDetails);
}

function logout() {

    localStorage.removeItem("userDetails");

    alert("Successfully Logout");
    location.assign("index.html");
}