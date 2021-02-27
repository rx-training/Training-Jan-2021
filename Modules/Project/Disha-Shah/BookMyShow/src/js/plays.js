
    if(!localStorage.logged_in_admin){
        window.location.assign("index.html");
    }
    else{
        

        
            document.getElementById("tblPlays").innerHTML = "";
            var playsArray = JSON.parse(localStorage.getItem("Plays"));
            for(data in playsArray){
                console.log(playsArray[data].Name);
                document.getElementById("tblPlays").innerHTML += "<tr><td>" + playsArray[data].Id + "</td><td>" + playsArray[data].Name + "</td><td>"
                        + "<img src='../" + playsArray[data].ImgUrls + "' alt='' class='img-fluid rounded' style='width:70px'>"
                        + "</td><td>" + playsArray[data].Language + "</td><td>" + playsArray[data].Time + "</td><td>" + playsArray[data].AgeGroup
                        + "</td><td>" + playsArray[data].Genre + "</td><td>" + playsArray[data].DateOfLaughter + "</td><td>" + playsArray[data].EventTime
                        + "</td><td>" + playsArray[data].Venue + "</td><td>" + playsArray[data].TicketPrice + "</td><td>" + "<div class='d-md-block d-lg-inline'><a href='#' class='text-dark m-1'><i class='fa fa-2x fa-pencil' id='playEdit-" 
                        + playsArray[data].Id + "'></i></a><a href='#' class='text-dark m-1'><i class='fa fa-2x fa-trash' id='playDelete-" 
                        + playsArray[data].Id + "'></i></a></div>";
            }
        }

        
        
    


 