
    if(!localStorage.logged_in_admin){
        window.location.assign("index.html");
    }
    else{
        

        
            document.getElementById("tblSports").innerHTML = "";
            var sportsArray = JSON.parse(localStorage.getItem("Sports"));
            for(data in sportsArray){
                console.log(sportsArray[data].Name);
                
                    document.getElementById("tblSports").innerHTML += "<tr><td>" + sportsArray[data].Id + "</td><td>" 
                        + sportsArray[data].Name + "</td><td>"
                        + "<img src='../" + sportsArray[data].ImgUrls + "' alt='' class='img-fluid rounded' style='width:70px'>"
                        + "</td><td>" + sportsArray[data].Language + "</td><td>" 
                        + sportsArray[data].Time + "</td><td>" + sportsArray[data].AgeGroup
                        + "</td><td>" + sportsArray[data].Category + "</td><td>" 
                        + sportsArray[data].DateOfGame
                        + "</td><td>" + sportsArray[data].Venue + "</td><td>" + sportsArray[data].TicketPrice + "</td><td>" 
                        + "<div class='d-md-block d-lg-inline'><a href='#' class='text-dark m-1'><i class='fa fa-2x fa-pencil' id='playEdit-" 
                        + sportsArray[data].Id + "'></i></a><a href='#' class='text-dark m-1'><i class='fa fa-2x fa-trash' id='playDelete-" 
                        + sportsArray[data].Id + "'></i></a></div>";
                
            }
        }

        
