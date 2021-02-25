
    if(!localStorage.logged_in_admin){
        window.location.assign("login.html");
    }
    else{
        

        
            document.getElementById("tblEvents").innerHTML = "";
            var eventsArray = JSON.parse(localStorage.getItem("Events"));
            for(data in eventsArray){
                console.log(eventsArray[data].Name);
                if(eventsArray[data].Category == "Outdoor" || eventsArray[data].Category == "Popular"){
                    document.getElementById("tblEvents").innerHTML += "<tr><td>" + eventsArray[data].Id + "</td><td>" 
                        + eventsArray[data].Name + "</td><td>"
                        + "<img src='../" + eventsArray[data].ImgUrls + "' alt='' class='img-fluid rounded' style='width:70px'>"
                        + "</td><td>" + eventsArray[data].Language + "</td><td>" 
                        + eventsArray[data].Time + "</td><td>" + eventsArray[data].AgeGroup
                        + "</td><td>" + eventsArray[data].Category + "</td><td>" + eventsArray[data].SubCategory + "</td><td>" 
                        + eventsArray[data].DateOfEvents
                        + "</td><td>" + eventsArray[data].Venue + "</td><td>" + eventsArray[data].TicketPrice + "</td><td>" 
                        + "<div class='d-md-block d-lg-inline'><a href='#' class='text-dark m-1'><i class='fa fa-2x fa-pencil' id='playEdit-" 
                        + eventsArray[data].Id + "'></i></a><a href='#' class='text-dark m-1'><i class='fa fa-2x fa-trash' id='playDelete-" 
                        + eventsArray[data].Id + "'></i></a></div>";
                }
            }
        }

        
        
        
