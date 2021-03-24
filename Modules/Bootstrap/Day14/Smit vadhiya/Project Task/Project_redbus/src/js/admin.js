$(document).ready(function(){

    
    var buses = JSON.parse(localStorage.getItem("buses"));
    var users = JSON.parse(localStorage.getItem("user"));
    var feedback = JSON.parse(localStorage.getItem("feedback"));
    $("#totalFeedback").text(feedback.length);
    $("#totalBus").text(buses.length);
    var activeUsers = 0,blockUser = 0;
    var count = 0;
    for(item of users){
        if(item["active"] == 1){
            activeUsers++;
        } else {
            blockUser++;
        }
    } 
    $("#totalUser").text(activeUsers);
    $("#totalBlock").text(blockUser);
//------------------------------------------BUS SECTION--------------------------------------------------------------


    var tbody = $("#busTableBody");
    var str = ""

    //-----------Add DATA TO TABLE------------

    
    for(item of buses){
        str += "    <tr>"
        for (i in item){
            str += "<td>"+item[i]+"</td>"
        }
        str += '<td><span><button class="btn btn-danger btn-block h5 p-1"><i class="fa fa-close"></i></button></span></td></tr>'
    }
    tbody.append(str);    

    

    
    

    //-----------------ADD BUS---------------------

    var addNewBus = $("#addBusBtn");

    addNewBus.click(function(){

        var newBusName = $("#busName").val();
        var newBusID = parseInt($("#ID").val());
        var newBusStartPoint = $("#stratPoint").val();
        var newBusEndPoint = $("#endPoint").val();
        var newBusStartTime = $("#startTime").val();
        var newBusEndTime = $("#endTime").val();
        var newBusCoach = $("#busCoach").val();
        var newBusPrice = $("#farePrice").val();
        var IDs = [];

        for(item of buses){
            IDs.push(item["ID"]);
        }
        

        if (newBusName.length == 0){
            alert("Enter bus name");
        } else if (newBusID.length == 0){
            alert("Enter bus ID");
        } else if (IDs.includes(newBusID)){
            alert("Bus ID already exist");
        } else if (newBusStartPoint.length == 0){
            alert("Enter Starting point");
        } else if (newBusEndPoint.length == 0){
            alert("Enter Ending Point");
        } else if (newBusStartTime.length == 0){
            alert("Enter Departure Time");
        } else if (newBusEndTime.length == 0){
            alert("Enter Arrival Time");
        } else if (newBusCoach.length == 0){
            alert("Enter bus category");
        } else  if (newBusPrice.length == 0){
            alert("Enter Fareprice");
        } else {
            
            var newBUsData = {
                "ID" : newBusID,
                "busname" : newBusName,
                "start" : newBusStartPoint,
                "end" : newBusEndPoint,
                "coach" : newBusCoach,
                "startTime" : newBusStartTime,
                "endTime" : newBusEndTime,
                "rating" : 3.1,
                "farePrice" : newBusPrice
            }

            //------Append data to Table-----------
            var busAppend = ""; 
            
            busAppend += "<tr>";
            for(i in newBUsData){
                busAppend += "<td>"+newBUsData[i]+"</td>"
            }
            busAppend += '<td><span><button class="btn btn-danger btn-block h5 p-1"><i class="fa fa-close"></i></button></span></td></tr>';
            tbody.append(busAppend); 

            //-----------Add bus to localstorage------------

            buses.push(newBUsData);
            localStorage.setItem("buses",JSON.stringify(buses));
            $("#totalBus").text(buses.length);
            addNewBus.attr("type","submit");
        }
    })

    //-------------delete buses------------
    tbody.find("span").click(function(){

        var deleteId = parseInt($(this).parents("tr").find("td").first().html());
       
        var i=0;
        for(item of buses){
            if(item["ID"] == deleteId){
                buses.splice(i,1);
                localStorage.setItem("buses",JSON.stringify(buses));
                break;
            } else {
                i++ 
            }
        }
        $("#totalBus").text(buses.length);
        $(this).parents("tr").remove()
    });
    
//------------------------------------------USER SECTION--------------------------------------------------------------

    $("#userInfo").click(function(){
        var userTbody = $("#userTableBody");
        var userStr = ""
    
        //-----------Add DATA TO TABLE------------
    
    
        function addUserToTable(){
            userTbody.html("");
            for(item of users){
                userStr += "<tr>"
                if(item["active"] == 1){
                    for (i in item){
                        if(i == "active" || i == "password"){
                            continue;
                        }else if(i == "email"){
                            userStr += "<td class='mail'>"+item[i]+"</td>"    
                        } else {
                            userStr += "<td>"+item[i]+"</td>"
                        }
                    }
                    userStr += '<td><span><button class="btn btn-danger btn-block h5 p-1"> <i class="fa fa-user-times"></i></button></span></td></tr>';
                }
            }
            userTbody.append(userStr);
        }
        addUserToTable();
    
        //------------------Active user----------------
    
        userTbody.find("span").click(function(){
            var deleteUser = $(this).parents("tr").find("td.mail").html();
            var i=0;
            console.log(users);
            for(item of users){
                if(item["email"] == deleteUser){
                    item["active"] = 0;
                    localStorage.setItem("user",JSON.stringify(users));
                    break;
                } else {
                    i++ 
                }
            }
            activeUsers--;
            blockUser++;
            $("#totalUser").text(activeUsers);
            $("#totalBlock").text(blockUser);
            $(this).parents("tr").remove();
        })
    })
    

    

//------------------------------------------ BLOCK USER SECTION----------------------------------------------------

    $("#blockInfo").click(function(){
        var blockTbody = $("#blockTableBody");
        var blockStr = ""

    //-----------ADD DATA TO  block TABLE------------


    function blockUserToTable(){
        blockTbody.html("");
        for(item of users){
            blockStr += "<tr>"
            if(item["active"] == 0){
                for (i in item){
                    if(i == "active" || i == "password"){
                        continue;
                    }else if(i == "email"){
                        blockStr += "<td class='mail'>"+item[i]+"</td>"    
                    } else {
                        blockStr += "<td>"+item[i]+"</td>"
                    }
                }
                blockStr += '<td><span><button class="btn btn-success btn-block h5 p-1"> <i class="fa fa-user-plus"></i></button></span></td></tr>';
            }
        }
        blockTbody.append(blockStr);
    }
    blockUserToTable();

    //------------------BLOCK USER user----------------

    blockTbody.find("span").click(function(){
        var activeUser = $(this).parents("tr").find("td.mail").html();
        var i=0;
        
        for(item of users){
            if(item["email"] == activeUser){
                item["active"] = 1;
                localStorage.setItem("user",JSON.stringify(users));
                break;
            } else {
                i++ 
            }
        }
            activeUsers++;
            blockUser--;
            $("#totalUser").text(activeUsers);
            $("#totalBlock").text(blockUser);
            $(this).parents("tr").remove();
            $(this).parents("tr").remove();
    })
    })

    
//--------------------------------FEEDBACK-------------------------------------------
    $("#feedbackInfo").click(function(){
        var feedbackTbody = $("#feedbackTableBody");
        var feedbackStr = ""

    //-----------ADD DATA TO  block TABLE------------


    function feedbackUserToTable(){
        feedbackTbody.html("");
        for(item of feedback){
            feedbackStr += "<tr>";
            for (i in item){
                feedbackStr += "<td>"+item[i]+"</td>"
            }
        }
        feedbackTbody.append(feedbackStr);
    }
    feedbackUserToTable();
    })

})