            async function getProducts(file) {
                    let myObject = await fetch(file);
                    let myData = await myObject.json();
                    localStorage.setItem("entertainment", JSON.stringify(myData));
                    //localStorage.removeItem("entertainment");
                    //console.log(myData);
                    var storeImg = localStorage.getItem("entertainment");
                    var object = JSON.parse(storeImg);
                    //console.log(object);
                    var data = object.entertainment;

                    // entertainment Area
                    //console.log(data);
                    entertainmentBlock = "";
                    $.each(data, function (i, value) {
                        //console.log(value.path);
                        entertainmentBlock += "<div class = 'card'>";
                        entertainmentBlock += "<img src='" + value.path + "' class='img-fluid'>";
                        entertainmentBlock += "<div class='card-body '> <h4 class='card-title text-center text-dark'> Book Now</h4> </div>";
                        entertainmentBlock += "</div>";
                    });
                    $("#dynamicimg").html(entertainmentBlock);

                    //Mobile area
                    var mobileData = object.mobiles;
                    //console.log(mobileData);
                    mobileBlock = "";
                    $.each(mobileData, function (i, value) {
                        mobileBlock += "<div class='card'> <div class='card-body'>";
                        mobileBlock += "<img src='" + value.path + "' class='img-fluid' >";
                        mobileBlock += "<h6 class='card-title text-muted'>" + value.info + "</h6>";
                        mobileBlock += "<p class='card-text'> From <strong>" + value.price + "</strong>";
                        mobileBlock += "<p style = 'text-decoration: line-through;'>" + value.oldprice + "</p></p>";
                        mobileBlock += "</div></div>";

                    });
                    $("#mobilecontent").html(mobileBlock);

                    var groceryData = object.grocery;
                    //console.log(groceryData);
                    groceryBlock = "";
                    $.each(groceryData, function (i, value) {
                        groceryBlock += "<div class='col-md-3 '>";
                        groceryBlock += '<a href="#"> <img class="img-fluid" width="280px" src="' + value.path + '"></a>';
                        groceryBlock += "</div>";

                    })
                    $("#grocerycontent").html(groceryBlock);

                }
                getProducts("paytm.json");
            
            $.getJSON("register_users.json", function (data ,status) {
                localStorage.setItem("register_users" , JSON.stringify( data )); 
            });
            function loginCheck(email ,password) {
                
                var email_pattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
                if(email_pattern.test(email) && email !="" && password !="")
                {
                    var getObject = localStorage.getItem("register_users");
                    var getUser = JSON.parse(getObject);
                    var get = getUser.Users;
                    console.log(get);
                    var flag = 1;
                    
                    var profile = "";
                    $.each(get , function  ( i , v) {
                       if(email == v.email && password == v.password ) {
                           flag = 0;
                        var obj2 = { name : v.name , value : 1}
                           sessionStorage.setItem("session" ,JSON.stringify(obj2));  
                       }
                    });
                    if(flag){ alert("Email & Password Not match"); }
                    window.location.href  = "index.html";
                }
                else
                { 
                    alert("Enter Valid Email & Password");  
                }
                
            }
        
            var sessionValue = sessionStorage.getItem("session");
            var sv = JSON.parse(sessionValue);
            if(sv==null){
                localStorage.setItem("Wallet", -1);
            }
            else{ 
                    var List = localStorage.getItem("register_users");
                    var userList = JSON.parse(List);
                    //console.log(userList.Users); 
                    var anyuser = userList.Users;
                    //console.log(anyuser);
                    $.each(anyuser, function (i, v) {
                        if (v.name == sv.name) {

                            var walletEmpty = localStorage.getItem("Wallet");
                            if(walletEmpty == -1 )
                            {
                                var w = v.wallet;
                                console.log(w);
                                localStorage.setItem("Wallet", w);
                            }
                            else{
                                localStorage.setItem("Wallet", walletEmpty);
                            }
                        }
                    });
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
                    window.location.href = "index.html";

                }
                else {
                    alert("Enter Valid Data");
                    console.log("false");
                }
                
        }
        //New user 
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
                let block = "<i class='fa fa-smile-o' aria-hidden='true'></i> You don't have contact list";
                    //console.log(block);
                $("#getLoginfirst").html(block);
            }
            
        }, 100);
           
        //Session
        setTimeout(() => {
                var sss = sessionStorage.getItem("session");
                if (sss != null) {
                    var info = sessionStorage.getItem("session");
                    //console.log(info);
                    var profileinfo = JSON.parse(info);
                    //console.log(profileinfo);
                    profile = '<h3 class="mr-5 mb-4 p-2 text-capitalize"><i class="fa fa-user " aria-hidden="true"></i>' + profileinfo.name +
                        '<button type="button" class="ml-3 btn btn-danger" onclick=logout()>' +
                        '<i class="fa fa-angle-down" aria-hidden="true"></i> Logout</button> </h3>';
                    $("#profile").html(profile);
                    $("#d1").css("display", "none");
                    $("#d2").css("display", "none");

                }
                else { console.log("Session not get"); }
        }, 100);

        function logout() {
            localStorage.removeItem("payment_history");
            localStorage.removeItem("Wallet");
            localStorage.removeItem("new users");
            sessionStorage.removeItem("session");

            window.location.href = "index.html";
        }
