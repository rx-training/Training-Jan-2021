window.onload = function () {
    document.getElementById("adminName").innerText = localStorage.getItem('AdminName');
    var usersArr = JSON.parse(localStorage.getItem("Users"));
    var tableStr = "";
    for (var i = 0; i < usersArr.Users.length; i++) {
        tableStr += "<tr class='border border-warning'><td class='table-secondary'>" + usersArr.Users[i].User_ID + "</td><td>" + usersArr.Users[i].Name + "</td><td>" + usersArr.Users[i].Gender + "</td><td>" + usersArr.Users[i].Contact + "</td><td>" + usersArr.Users[i].Email + "</td><td>" + usersArr.Users[i].UserName + " </td><td>"+usersArr.Users[i].Password+"</td><td class='table-success'><span data-toggle='modal' data-target='#showUser' onclick='return showUser(" + i + ")'><i class='fas fa-id-card'></i></span></td><td class='table-danger'><span onclick='return userDelete(" + i + ")'><i class='fas fa-times'></i></span></td></tr>"
    }
    document.getElementById("userTable").innerHTML = "<thead class='table-info text-dark border border-warning'><tr><th class='table-secondary'>ID</th><th>User Name</th><th>Gender</th><th>Contact no.</th><th>Email ID</th><th>Username</th><th>Password</th><th class='table-success'>View</th><th class='table-danger'>Delete</th></tr></thead><tbody id='tbody'>" + tableStr + "</tbody>";
}
function showData(value) {

    switch (value) {
        case '1':
            window.location.href="Admin.html";
            return false;

        case '2':
            window.location.href="Admin.html";
            return false;

        case '3':
            window.location.href="Delete.html"
            return false;

        case '4':
            window.location.href="Insert.html";
            return false;

        case '5':
            window.location.href = "User.html"
            return false;

        case '6':
            window.location.href="Products.html"
            return false;
            

        default:
            return false;
            break;
    }
}

function userDelete(value){
    var userArr = JSON.parse(localStorage.getItem("Users"));
    
    alert(userArr.Users[value].User_ID+" is deleted");
    userArr.Users.splice(value,1);
    for(var i=0;i<userArr.Users.length;i++){
        userArr.Users[i].User_ID = (i+1);
    }
    localStorage.setItem("Users", JSON.stringify(userArr));
    location.reload();
    return false;
}
function showUser(value){
    var userArr = JSON.parse(localStorage.getItem("Users"));

    document.getElementById("UName").innerText=userArr.Users[value].Name;
    document.getElementById("UGender").innerText=userArr.Users[value].Gender;
    document.getElementById("UsName").innerText=userArr.Users[value].UserName;
    document.getElementById("UContact").innerText=userArr.Users[value].Contact;
    document.getElementById("UEmail").innerText=userArr.Users[value].Email;
    document.getElementById("UPassword").innerText=userArr.Users[value].Password;  
}
function logOut() {
    window.location.href = "../../Index.html";
}
