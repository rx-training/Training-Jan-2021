
    if(!localStorage.logged_in_admin){
        window.location.assign("index.html");
    }
    else{
        

        
            document.getElementById("tblComedy").innerHTML = "";
            var laughterArray = JSON.parse(localStorage.getItem("LaughterShows"));
            for(data in laughterArray){
                console.log(laughterArray[data].Name);
                document.getElementById("tblComedy").innerHTML += "<tr><td>" + laughterArray[data].Id + "</td><td>" + laughterArray[data].Name + "</td><td>"
                        + "<img src='../" + laughterArray[data].ImgUrls + "' alt='' class='img-fluid rounded' style='width:70px'>"
                        + "</td><td>" + laughterArray[data].Language + "</td><td>" + laughterArray[data].Time + "</td><td>" + laughterArray[data].AgeGroup
                        + "</td><td>" + laughterArray[data].Genre + "</td><td>" + laughterArray[data].DateOfLaughter + "</td><td>" + laughterArray[data].EventTime
                        + "</td><td>" + laughterArray[data].Venue + "</td><td>" + laughterArray[data].TicketPrice + "</td><td>" + "<div class='d-md-block d-lg-inline'><a href='#' class='text-dark m-1'><i class='fa fa-2x fa-pencil' id='playEdit-" 
                        + laughterArray[data].Id + "'></i></a><a href='#' class='text-dark m-1'><i class='fa fa-2x fa-trash' id='playDelete-" 
                        + laughterArray[data].Id + "'></i></a></div>";
            }

    }
        
    

