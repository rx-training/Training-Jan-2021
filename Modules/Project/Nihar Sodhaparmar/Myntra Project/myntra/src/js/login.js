function checkLogin(){
    var usertype = document.getElementById("usertype").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    if(usertype == "admin"){

        async function getAdminData(){
            var x = await fetch("./json/admin.json")
            var adminArray = await x.json();
            for(var i=0; i < adminArray.Admin.length; i++){
                if(email == adminArray.Admin[i].email && password == adminArray.Admin[i].password){
                    localStorage.setItem("adminDetails", JSON.stringify(adminArray.Admin[i]));
                    window.location.assign("products.html");
                    return true;
                }
            }

            alert("Please Provide Valid Details");
        }

        getAdminData();
        return false;
    }

    if(usertype == "user"){

        async function getUserData(){
            var x = await fetch("./json/users.json");
            var userArray = await x.json();

            for(var i = 0; i < userArray.Users.length; i++){
                if(email == userArray.Users[i].email && password == userArray.Users[i].password){
                    localStorage.setItem("userDetails",JSON.stringify(userArray.Users[i]));
                    alert("Logged In Successfully");
                    window.location.assign("index.html");
                    return true;
                }
            }

            alert("Please Provide Valid Details");
        }

        getUserData();
        return false;
    }
}