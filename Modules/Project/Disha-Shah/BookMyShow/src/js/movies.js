
    if(!localStorage.logged_in_admin){
        window.location.assign("login.html");
    }
    else{
        

        
            document.getElementById("tblMovie").innerHTML = "";
            var movieArray = JSON.parse(localStorage.getItem("Movies"));
            for(data in movieArray){
                console.log(movieArray[data].Name);
                

                        if(movieArray[data].ImgUrls.split(',')[0]==""){
                            var movieUrl = movieArray[data].ImgUrls.split(',')[1];
                            
                        }
                        else{
                            var movieUrl = movieArray[data].ImgUrls.split(',')[0];
                        }
                        document.getElementById("tblMovie").innerHTML += "<tr><td>" + movieArray[data].Id + "</td><td>" + movieArray[data].Name + "</td><td>"
                        + "<img src='../" + movieUrl + "' alt='' class='img-fluid rounded' style='width:70px'>"
                        
                        + "</td><td>" + movieArray[data].Rating + "</td><td>" + movieArray[data].Film + "</td><td>" + movieArray[data].Language
                        + "</td><td>" + movieArray[data].Time + "</td><td>" + movieArray[data].Genre + "</td><td>" + movieArray[data].Certification
                        + "</td><td>" + movieArray[data].DateOfRelease + "</td><td>" + "<div class='d-md-block d-lg-inline'><a href='#' class='text-dark m-1'><i class='fa fa-2x fa-pencil' id='edit-" 
                        + movieArray[data].Id + "'></i></a><a href='#' class='text-dark m-1'><i class='fa fa-2x fa-trash' id='delete-" 
                        + movieArray[data].Id + "'></i></a></div>"
            }
        }

       

        
