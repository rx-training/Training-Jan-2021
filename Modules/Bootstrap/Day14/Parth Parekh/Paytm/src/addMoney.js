
        var sessionValue = sessionStorage.getItem("session");
        var sv = JSON.parse(sessionValue);
        
        async function getContact(file) {
                let myObject = await fetch(file);
                let myData = await myObject.json();
                localStorage.setItem("register_users",JSON.stringify(myData));
                let List = localStorage.getItem("register_users");
                let userList = JSON.parse(List);
                console.log(userList.Users); 
                let anyuser = userList.Users;
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
        };
        getContact("register_users.json");

        
        var name="";
        var num="";
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
                                    console.log("payment_history is null");
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
                                    var s = " <i class='fa display-2 text-success fa-check-square-o ' aria-hidden='true'></i><h2 class='display-4'>Payment Successfull</h2>"+
                                        "<p> <a href='passbook.html'> Check history </p> </a>";
                                    $("#success").html(s);
                                }
                                else
                                {
                                    var aa = payment_historyObject.array;
                                    console.log(aa);  
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
                                    console.log(aa);
                                    ob1 = { array : aa};
                                    console.log(ob1);
                                    localStorage.setItem("payment_history", JSON.stringify(ob1));
                                    

                                    var s = " <i class='fa display-2 text-success fa-check-square-o ' aria-hidden='true'></i><h2 class='display-4'>Payment Successfull</h2>"+
                                            "<p> <a href='passbook.html'> Check history </p> </a>";
                                    $("#success").html(s);
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
                    if(flag){ alert("Email & Passwrod Not match"); }
                }
                else
                { 
                    alert("Enter Valid Email & Password");  
                }
        }
        

        setInterval(() => {
                var sss = sessionStorage.getItem("session");
                if (sss != null) {
                    var info = sessionStorage.getItem("session");
                    //console.log(info);
                    var profileinfo = JSON.parse(info);
                    //console.log(profileinfo);
                    profile = '<h3 class="mr-5 mb-4 p-2"><i class="fa fa-user " aria-hidden="true"></i>' + profileinfo.name +
                        '<button type="button" class="ml-3 btn btn-danger" onclick=logout()>'+
                        '<i class="fa fa-angle-down" aria-hidden="true"></i> Logout</button> </h3>';
                    $("#profile").html(profile);
                    $("#d1").css("display", "none");
                    $("#d2").css("display", "none");

                }
                else { console.log("Session not get"); }
        }, 1000);

        function logout(){
            localStorage.removeItem("payment_history");
            sessionStorage.removeItem("session");
            window.location.href = "index.html";
        } 
    


        
