
    if(!localStorage.logged_in_admin){
        window.location.assign("index.html");
    }
    else{
        

        
            document.getElementById("tblMovie").innerHTML = "";
            var movieArray = JSON.parse(localStorage.getItem("Movies"));
           
            for(var data=0; data<movieArray.Movies.length; data++){
                console.log(movieArray.Movies[data].Name);
                

                       
                        document.getElementById("tblMovie").innerHTML += "<tr><td>" + movieArray.Movies[data].Id + "</td><td>" 
                        + movieArray.Movies[data].Name + "</td><td>"
                        + "<img src='../" + movieArray.Movies[data].ImgUrls + "' alt='' class='img-fluid rounded' style='width:70px'>"
                        
                        + "</td><td>" + movieArray.Movies[data].Rating + "</td><td>" + movieArray.Movies[data].Film + "</td><td>" + movieArray.Movies[data].Language
                        + "</td><td>" + movieArray.Movies[data].Time + "</td><td>" + movieArray.Movies[data].Genre + "</td><td>" + movieArray.Movies[data].Certification
                        + "</td><td>" + movieArray.Movies[data].DateOfRelease + "</td><td>" + "<div class='d-md-block d-lg-inline'><a href='editMovie.html?id=" + movieArray.Movies[data].Id + "' class='text-dark m-1'><i class='fa fa-2x fa-pencil' id='edit-" 
                        + movieArray.Movies[data].Id + "'></i></a><a href='#' class='text-dark m-1' onclick='return removeMovie(" + data + ")'><i class='fa fa-2x fa-trash' id='delete-" 
                        + movieArray.Movies[data].Id + "'></i></a></div>"
            }
        }


        function removeMovie(i){
            var moviesArray = JSON.parse(localStorage.getItem("Movies"));
        
            moviesArray.Movies.splice(i,1);
            console.log(moviesArray.Movies);
        
            localStorage.setItem("Movies", JSON.stringify(moviesArray));
            alert("movie deleted successfully!!");
            window.location.assign("movies.html");
            
        
            return false;
        }
       

        
