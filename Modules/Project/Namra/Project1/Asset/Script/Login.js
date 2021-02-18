window.onload = function () {
   
    
    var cart = fetch("../Json/cart.json");
    cart.then(result =>result.json()).then(y=>{
        localStorage.setItem("Cart",JSON.stringify(y));
    });

    


}
function loadProduct(){
    var f = fetch("../Json/products.json");
    f.then(result => result.json()).then(y => {
        localStorage.setItem("Products", JSON.stringify(y));
    });

    var u = fetch("../Json/user.json");
    u.then(result =>result.json()).then(y=>{
        localStorage.setItem("Users",JSON.stringify(y));
    });
}
function login(){
    var strName;
    var strPassword;
    var type = document.getElementById("selectType").value;
    strName = document.getElementById("username").value;
    strPassword = document.getElementById("password").value;
    if(type == "Select the login type"){
        alert("Please select the log in type");
    }
    else if(type == "Admin"){
        var f = fetch("../Json/admin.json");
        var answer = false;
        f.then(result => result.json()).then(y =>{
            for(var i=0 ; i<y.Admin.length ; i++){
                if(strName == y.Admin[i].UserName && strPassword == y.Admin[i].Password){
                    window.location.assign("Admin.html");
                    answer = true;
                    localStorage.setItem('AdminName', y.Admin[i].UserName);
                }        
            } 
            if(answer == false){
                alert("Enter valid username and password");
                
            }
        });
    }
    else{
        var userArr = JSON.parse(localStorage.getItem("Users"));
        var answer = false;
        for(var i=0; i < userArr.Users.length ; i++)
        {
            if(strName==userArr.Users[i].UserName  && strPassword == userArr.Users[i].Password){
                answer = true;
                localStorage.setItem('user',JSON.stringify(userArr.Users[i]))
                window.location.href="../../Index.html";
            }
        }
        if(answer == false){
            alert("Enter Valid User and Password");
        }
    }
    return false;
}
function backIndex(){
    var user = JSON.parse(localStorage.getItem("user")); 
    user = null;
    localStorage.setItem('user',user);
}