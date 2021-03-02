
        //Get images Of entertainment , mobile ,grocery from paytm.json file
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

            //Funtion for logincheck , if data is Successfull than user value store in to sessionStorage 
            //to maintain the session in all pages
            function loginCheck(email ,password) {
                
                var email_pattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
                if(email_pattern.test(email) && email !="" && password !="")
                {
                    let getObject = localStorage.getItem("register_users");
                    let getUser = JSON.parse(getObject);
                    let get = getUser.Users;
                    console.log(get);
                    let flag = 1;
                    
                    let profile = "";
                    $.each(get , function  ( i , v) {
                       if(email == v.email && password == v.password ) {
                           flag = 0;
                        let obj2 = { name : v.name , value : 1}
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

            //First set wallet to -1, if user login then set is wallet from is json file  
            //, and if Payment is done then set wallet to of updated value

            
            
            if(sv==null){
                localStorage.setItem("Wallet", -1);
            }
            else{ 
                    // var arrayObject = [];
                    var List = localStorage.getItem("register_users");
                    var userList = JSON.parse(List);
                    //console.log(userList.Users); 
                    var anyuser = userList.Users;
                    // //console.log(anyuser);
                    // var getStoreUpdateBalance = localStorage.getItem("update_balance");
                    // var updateBalanceObject = JSON.parse(getStoreUpdateBalance);
                    // if(updateBalanceObject != null){
                    //     var updateBalanceArray  = updateBalanceObject.updateBalance;
                    //     // if( updateBalanceArray != null)
                    //     // {
                    //     //     arrayObject  = updateBalanceArray;
                    //     // }
                    // }
                    
                    
                    // var payment_history = localStorage.getItem("payment_history");
                    // console.log(payment_history);
                    // if(payment_history)
                    // { 
                    //     console.log("true");
                    //     let payment_historyObject = JSON.parse(payment_history);
                    //     let historyData = payment_historyObject.array;
                    //     $.each(historyData , function (index , value) {
                    //             $.each(anyuser , function ( i , v) {
                    //                 if(value.name  == v.name)
                    //                 {  
                    //                     let obj = { name : value.name , amount : value.amount}
                    //                     //console.log(obj);
                    //                     arrayObject.push(obj);
                    //                     let object = { updateBalance : arrayObject }
                    //                     localStorage.setItem("update_balance", JSON.stringify(object));
                                        
                    //                 }
                                    
                    //             });
                    //     });
                    // }

                    
                    $.each(anyuser, function (i, v) {
                        if (v.name == sv.name) {

                            var walletEmpty = localStorage.getItem("Wallet");
                            if(walletEmpty == -1 )
                            {
                                var w = parseInt(v.wallet);
                                //console.log(w);
                                //

                                let update_balance = localStorage.getItem("update_balance");
                                let parseupdate = JSON.parse(update_balance);
                                if(parseupdate == null){ 
                                    localStorage.setItem("Wallet" , w);
                                }
                                else{
                                    let parseData = parseupdate.updateBalance;
                                    console.log(parseData);
                                    if(parseData)
                                    {
                                        console.log("yes");
                                        $.each(parseData , function  ( index, value) {
                                            if(sv.name == value.name)
                                            {

                                                let getAmount = parseInt(value.amount);
                                                // console.log(getAmount);
                                                w = w + getAmount ;
                                                console.log(w);
                                                localStorage.setItem("Wallet" , w );
                                            } 
                                            else{
                                                localStorage.setItem("Wallet" , w );
                                            }
                                        });

                                    }
                                    else{
                                        console.log(w);
                                        localStorage.setItem("Wallet", w);
                                    }
                                }
                            }
                            else{
                                localStorage.setItem("Wallet", walletEmpty);
                            }
                        }
                    });
                    
            } 

            //For signup validation , user enter Successfull data then , store is data to localStorage
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
        
        /*Get new user from localStorage if new user is not null , then display user name and logout button
          and add css class to display none to login ,signup link */
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
           
        /*Get session from sessionStorage if session is not null , then display user name and logout button
          and add css class to display none to login ,signup link */ 
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

        //Logout Funtion for logout thse user payment_history ,wallet and session of user and redirect to 
        // index.html page
        function logout() {
            localStorage.removeItem("payment_history");
            localStorage.removeItem("Wallet");
            localStorage.removeItem("new users");
            sessionStorage.removeItem("session");

            window.location.href = "index.html";
        }
