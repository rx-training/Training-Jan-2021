 
 var array = [];
        async function getContact(file) {
                let myObject = await fetch(file);
                let myData = await myObject.json();
                localStorage.setItem("contacts",JSON.stringify(myData));
                var List = localStorage.getItem("contacts");
                var contactList = JSON.parse(List);
                console.log(contactList); 

                temp = "";
                
                var data = contactList.contacts;
                $.each(data , function ( i , value) {
                    temp += "<tr >";
                    temp += "<td class='p-3'>" + value.no + "</td>";
                    temp += "<td>" + value.name + "</td>";
                    temp += "<td>" + value.mobile_no + "</td>";
                    temp += '<td><button data-toggle="modal" data-target="#pay" class="btn btn-success btn-block" onclick="payvalue(' + "'" + value.name + "'" + ',' + "'" + value.mobile_no + "'" + ')">Pay</button></td>';
                    temp += "</tr>";
                })
                $("#tbody").html(temp);

                $("#myInput").on("keyup", function () {
                var value = $(this).val().toLowerCase();
                $("#tbody tr").filter(function () {
                    $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
                });
        });

                
        }
        getContact("contactList.json");

        
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
                    var w = localStorage.getItem("Wallet");
                    
                    console.log(w);
                    var ob1 ;
                    
                    if(amount > w)
                    {
                        alert("Insufficient Balance");    
                    }
                    else{
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
                        array.push(object);
                        ob1 = { array : array};
                        console.log(ob1);
                        localStorage.setItem("payment_history", JSON.stringify(ob1));
                        

                        var s = " <i class='fa display-2 text-success fa-check-square-o ' aria-hidden='true'></i><h2 class='display-4'>Payment Successfull</h2>"+
                                "<p> <a href='passbook.html'> Check history </p> </a>";
                        $("#success").html(s);

                        
                        
                        //window.location.href="passbook.html";
                    }              
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



        
