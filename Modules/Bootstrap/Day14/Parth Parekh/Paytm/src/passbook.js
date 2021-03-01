var sessionValue = sessionStorage.getItem("session");
var sv = JSON.parse(sessionValue);

var List = localStorage.getItem("register_users");
var userList = JSON.parse(List);
//console.log(userList.Users); 
var anyuser = userList.Users;
console.log(anyuser);

if (sv == null) {
    
}
else {
    $.each(anyuser, function (i, v) {
        if (v.name == sv.name) {
            var w = v.wallet;
            //console.log(w);
            $("#purse").html(w);
        }
    });
}

var payment_history = localStorage.getItem("payment_history");

//console.log(payment_history);
    
var data = JSON.parse(payment_history);
if(data == null)
{
    $("#balance").html("<div class='text-center mt-3 display-3 text-info'>No Transaction Yet !!!!</div>");
}
else{
    console.log(data);
    var data = data.array;
    listBlock = "";
    $.each(data , function  (i ,value) {
        listBlock += "<div class='card text-success mt-5 p-3'> <h2 class='card-title display-4'>Money Send To :  " + value.name + "</h2>" +
            "<p class='card-text'>Mobile no :   " + value.num + "</p>" +
            "<p class='card-text'>Amount Pay :  " + value.amount + "</p>" +
            "<p class='card-text'>Remaining Balance :   " + value.total + "</p>" +
            "<p class='card-text'> Transaction Date : " + value.date + " </p>" +
            "<p class='card-text'> Transaction Time : " + value.time + " </p>" +
            "</div>";
        $("#balance").html(listBlock);
        $("#purse").html(value.total);
    });
}


$.getJSON("register_users.json", function (data, status) {
    localStorage.setItem("register_users", JSON.stringify(data));
});
function loginCheck(email, password) {

    var email_pattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
    if (email_pattern.test(email) && email != "" && password != "") {
        var getObject = localStorage.getItem("register_users");
        var getUser = JSON.parse(getObject);
        var get = getUser.Users;
        console.log(get);
        var flag = 1;

        var profile = "";
        $.each(get, function (i, v) {
            if (email == v.email && password == v.password) {
                flag = 0;
                var obj2 = { name: v.name, value: 1 }
                sessionStorage.setItem("session", JSON.stringify(obj2));
            }
        });
        if (flag) { alert("Email & Password Not match"); }
        window.location.href = "index.html";
    }

    else {
        alert("Enter Valid Email & Password");
    }
    
}

function  signup(name , email , password , confirmPass ) {   
    let email_pattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
    if(email_pattern.test(email) && name !="" && password !="" && confirmPass !="" && password ==confirmPass)
    {
        console.log("true");
        var object1 = {
            name:name,
            password : password,
            email : email
        }
        //console.log(object1);
        localStorage.setItem("new users",JSON.stringify(object1));
        let sss = localStorage.getItem("new users");
        console.log(sss);
        window.location.href = "passbook.html";

    }
    else {
        alert("Enter Valid Data");
        console.log("false");
    }
    
}

setTimeout(() => {
    let sss = localStorage.getItem("new users");
    if (sss != null) {
        let object = JSON.parse(sss);
        console.log(object.name);
        let profile = '<h3 class="mr-5 mb-4 p-2 text-capitalize"><i class="fa fa-user " aria-hidden="true"></i>' + object.name +
            '<button type="button" class="ml-3 btn btn-danger" onclick=logout()>' +
            '<i class="fa fa-angle-down" aria-hidden="true"></i> Logout</button> </h3>';
        $("#profile").html(profile);
        $("#d1").css("display", "none");
        $("#d2").css("display", "none"); 

    }
}, 100);


setTimeout(() => {
    let sss = sessionStorage.getItem("session");
    if (sss != null) {
        let info = sessionStorage.getItem("session");
        //console.log(info);
        let profileinfo = JSON.parse(info);
        //console.log(profileinfo);
        let profile = '<h3 class="mr-5 mb-4 p-2 text-capitalize"><i class="fa fa-user " aria-hidden="true"></i>' + profileinfo.name +
            '<button type="button" class="ml-3 btn btn-danger" onclick=logout()>' +
            '<i class="fa fa-angle-down" aria-hidden="true"></i> Logout</button> </h3>';
        $("#profile").html(profile);
        $("#d1").css("display", "none");
        $("#d2").css("display", "none");
    }
    else{ 
        // $("#dnone").css("display","none");
        //console.log("Session not get");
    }
}, 100);

function logout() {
    localStorage.removeItem("payment_history");
    localStorage.removeItem("Wallet");
    sessionStorage.removeItem("session");
    localStorage.removeItem("new users");
    window.location.href = "index.html";
}
