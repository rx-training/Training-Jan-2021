
    if(!localStorage.logged_in_admin){
        window.location.assign("index.html");
    }
    else{
        
            /*document.getElementById("tblActivities").innerHTML = "";
            var activitiesArray = JSON.parse(localStorage.getItem("Activities"));
            for(data in activitiesArray){
                console.log(activitiesArray[data].Name);
                
                    document.getElementById("tblActivities").innerHTML += "<tr><td>" + activitiesArray[data].Id + "</td><td>" 
                        + activitiesArray[data].Name + "</td><td>"
                        + "<img src='../" + activitiesArray[data].ImgUrls + "' alt='' class='img-fluid rounded' style='width:70px'>"
                        + "</td><td>" + activitiesArray[data].Language + "</td><td>" 
                        + activitiesArray[data].Time + "</td><td>" + activitiesArray[data].AgeGroup
                        + "</td><td>" + activitiesArray[data].Category + "</td><td>" 
                        + activitiesArray[data].DateOfGame
                        + "</td><td>" + activitiesArray[data].Venue + "</td><td>" + activitiesArray[data].TicketPrice + "</td><td>" 
                        + "<div class='d-md-block d-lg-inline'><a href='#' class='text-dark m-1'><i class='fa fa-2x fa-pencil' id='playEdit-" 
                        + activitiesArray[data].Id + "'></i></a><a href='#' class='text-dark m-1'><i class='fa fa-2x fa-trash' id='playDelete-" 
                        + activitiesArray[data].Id + "'></i></a></div>";
                
            }*/
    }    
        
