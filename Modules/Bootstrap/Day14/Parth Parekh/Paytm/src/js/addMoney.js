        //To get session if user is login 
        var sessionValue = sessionStorage.getItem("session");
        var sv = JSON.parse(sessionValue);
        
        //Get Data of User store in register_users.json file & store into localStorage
        async function getContact(file) {
                let myObject = await fetch(file);
                let myData = await myObject.json();
                localStorage.setItem("register_users",JSON.stringify(myData));
                let List = localStorage.getItem("register_users");
                let userList = JSON.parse(List);
                console.log(userList.Users); 
                let anyuser = userList.Users;
                if(sv==null)
                {

                }
                else{
                    $.each(anyuser , function ( i , v ){
                        if(v.name == sv.name)
                        {
                            var temp = "";
                            let x = v.contacts;
                            //console.log(x);
                            $.each(x , function ( i , value) {
                                temp += "<tr >";
                                temp += "<td class='p-3'>" + value.no + "</td>";
                                temp += "<td>" + value.name + "</td>";
                                temp += "<td>" + value.mobile_no + "</td>";
                                temp += '<td><button data-toggle="modal" data-target="#pay" class="btn btn-success btn-block" onclick="payvalue(' + "'" + value.name + "'" + ',' + "'" + value.mobile_no + "'" + ')">Pay</button></td>';
                                temp += "</tr>";
                            });
                            $("#tbody").html(temp);

                            $("#myInput").on("keyup", function () {
                                var value = $(this).val().toLowerCase();
                                $("#tbody tr").filter(function () {
                                $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
                                });
                            });
                        }          
                    });
                }
        };
        getContact("register_users.json");

        
        var name="";
        var num="";

        //below funtion For to Display modal 
        function payvalue(a, b) {
            
            name = a;
            num = b;
            
            modelBlock = "";
            
            modelBlock +="<h2>Money Send to <i class='fa fa-arrow-right h2 ml-2' aria-hidden='true'></i>  " + a +"</h2>";
            modelBlock += '<div class="form-group"> <label for="">Amount</label>';
            modelBlock += '<input type="number" name=""  id="amount"  class="form-control" placeholder=""></div>';
            modelBlock += '<div class="form-group"><label for="">Money for</label><textarea class="form-control" name="" id="" rows="3" placeholder="message"></textarea> </div>';
            modelBlock += "<button type='button' class='btn text-white bg-success btn-block' data-dismiss='modal' onclick='moneysend(amount.value )' >Pay</button>";
            
            $('#modelbody').html(modelBlock);
            // console.log(a,b);   
        }

        
        //When User click the pay button this funtion run , in this we set user wallet from the json file data ,
        // and if Payment is send than we update(set wallet in localStorage) wallet with that value.
        function  moneysend(amount) {
            var amount = parseInt(amount);
           
            if( ! (amount <= 5))
            {
                // console.log(amount);
                // console.log(name);
                // console.log(num);
                var check = confirm("Are Your Sure To Transfer "+ amount + " Rupees to " + name );
                
                if(check == true)
                {
                    
                    let List = localStorage.getItem("register_users");
                    let userList = JSON.parse(List);
                    //console.log(userList.Users); 
                    let anyuser = userList.Users;   
                    
                    $.each(anyuser , function ( i , v ){
                        if(v.name == sv.name)
                        {
                            // var w = v.wallet;
                            var w = localStorage.getItem("Wallet");
                            
                            //console.log(w);
                            var ob1 ;
                            var aa = [];
                    
                            if(amount > w)
                            {
                                alert("Insufficient Balance");    
                            }
                            else
                            {    
                                var his = localStorage.getItem("payment_history");
                                //console.log(his);
                                var payment_historyObject = JSON.parse(his);
                                if(payment_historyObject == null)
                                {
                                    //console.log("payment_history is null");
                                    console.log(amount);
                                    var total = w - amount;
                                    var wallet = localStorage.setItem("Wallet", total);
                                    var d = new Date();
                                    var date = d.getDate() + "/" + d.getMonth()+1 + "/" + d.getFullYear();;
                                    var h = d.getHours() + ":" + d.getMinutes();
                                    var object = {
                                        name : name,
                                        num :num,
                                        amount : amount,
                                        total : total,
                                        date : date,
                                        time : h
                                    }
                                    aa.push(object);
                                    ob1 = { array : aa};
                                    localStorage.setItem("payment_history", JSON.stringify(ob1));
                                    alert("Money added Successfully");
                                    window.location.href = "pay.html";
                                    // var s = " <i class='fa display-2 text-success fa-check-square-o ' aria-hidden='true'></i><h2 class='display-4'>Payment Successfull</h2>"+
                                    //     "<p> <a href='passbook.html'> Check history </p> </a>";
                                    // $("#success").html(s);
                                }
                                else
                                {
                                    var aa = payment_historyObject.array;
                                    //console.log(aa);  
                                    //console.log(amount);  
                                    var total = w - amount;
                                    var wallet = localStorage.setItem("Wallet", total);
                                    var d = new Date();
                                    var date = d.getDate() + "/" + d.getMonth()+1 + "/" + d.getFullYear();;
                                    var h = d.getHours() + ":" + d.getMinutes();
                                    var object = {
                                        name : name,
                                        num :num,
                                        amount : amount,
                                        total : total,
                                        date : date,
                                        time : h
                                    }
                                    aa.push(object);
                                    console.log(aa);
                                    ob1 = { array : aa};
                                    console.log(ob1);
                                    localStorage.setItem("payment_history", JSON.stringify(ob1));
                                    alert("Money added Successfully");
                                    window.location.href = "pay.html";
                                     //
                                    
                                    
                                    // var s = " <i class='fa display-2 text-success fa-check-square-o ' aria-hidden='true'></i><h2 class='display-4'>Payment Successfull</h2>"+
                                    //         "<p> <a href='passbook.html'> Check history </p> </a>";
                                    // $("#success").html(s);
                                    

                                //end
                                }
                                    //window.location.href="passbook.html";
                            }                        
                        //if end
                        }
                    });
                    

                    
                }
                else{
                    e.preventDefault();
                    // //console.log("err1");
                    // window.location.href="pay.html";
                    
                }
            }
            else
                alert("Enter more than 5 rupees ");
        }

        
        $.getJSON("register_users.json", function (data ,status) {
                localStorage.setItem("register_users" , JSON.stringify( data )); 
        });

        //Funtion for logincheck , if data is Successfull than user value store in to sessionStorage
        //to maintain the session in all pages
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
                    window.location.href = "pay.html";

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
            
        }, 101);

        
        /*Get session from sessionStorage if session is not null , then display user name and logout button
          and add css class to display none to login ,signup link */ 
        setTimeout(() => {
                let sss = sessionStorage.getItem("session");
                if (sss != null) {
                    let info = sessionStorage.getItem("session");
                    //console.log(info);
                    let profileinfo = JSON.parse(info);
                    //console.log(profileinfo);
                    let profile = '<h3 class="mr-5 mb-4 p-2 text-capitalize"><i class="fa fa-user " aria-hidden="true"></i>' + profileinfo.name +
                        '<button type="button" class="ml-3 btn btn-danger" onclick=logout()>'+
                        '<i class="fa fa-angle-down" aria-hidden="true"></i> Logout</button> </h3>';
                    $("#profile").html(profile);
                    $("#d1").css("display", "none");
                    $("#d2").css("display", "none");

                }
                else { 
                    let block = "<i class='fa fa-smile-o' aria-hidden='true'></i> you need to login first"+
                    "<a href='#'  data-toggle='modal' data-target='#loginmodal' class='text-info text-capitalize h3 ml-2'>Click here to login</a> ";
                    //console.log(block);
                    $("#getLoginfirst").html(block);
                    console.log("Session not get"); 
                }
        }, 100);

        //Logout Funtion for logout thse user payment_history ,wallet and session of user and redirect to 
        // index.html page
        function logout(){
            localStorage.removeItem("payment_history");
            localStorage.removeItem("Wallet");
            localStorage.removeItem("new users");
            sessionStorage.removeItem("session");
            window.location.href = "index.html";
        } 
    
        //More update to register user
        var arrayObject = [];
        var List = localStorage.getItem("register_users");
        var userList = JSON.parse(List);
        //console.log(userList.Users); 
        var anyuser = userList.Users;
        //console.log(anyuser);
        var getStoreUpdateBalance = localStorage.getItem("update_balance");
        var updateBalanceObject = JSON.parse(getStoreUpdateBalance);
        if(updateBalanceObject != null){
            var updateBalanceArray  = updateBalanceObject.updateBalance;
            // if( updateBalanceArray != null)
            // {
            //     arrayObject  = updateBalanceArray;
            // }
        }
        
        
        var payment_history = localStorage.getItem("payment_history");
        console.log(payment_history);
        if(payment_history)
        { 
            console.log("true");
            let payment_historyObject = JSON.parse(payment_history);
            let historyData = payment_historyObject.array;
            $.each(historyData , function (index , value) {
                    $.each(anyuser , function ( i , v) {
                        if(value.name  == v.name)
                        {  
                            let obj = { name : value.name , amount : value.amount}
                            //console.log(obj);
                            arrayObject.push(obj);
                            let object = { updateBalance : arrayObject }
                            localStorage.setItem("update_balance", JSON.stringify(object));
                            
                        }
                        
                    });
            });
        }

        
                           
        
