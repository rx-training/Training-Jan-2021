document.getElementById("recommendedMovies").innerHTML = "";
document.getElementById("premiereCarouselList").innerHTML = "";
document.getElementById("premiereCarousel").innerHTML ="";
            var moviesArray = JSON.parse(localStorage.getItem("Movies"));
            
            for(data in moviesArray.Movies){
                if(moviesArray.Movies[data].Recommended==true){
                    console.log(moviesArray.Movies[data].Recommended);
                    document.getElementById("recommendedMovies").innerHTML += '<div class="col-sm-12 col-md-4 col-lg-3"><div><div class="slide-content"><a href="#" class="text-decoration-none"><img src="../' + 
                    moviesArray.Movies[data].ImgUrls + '" alt="" loading="lazy" class="w-100 rounded"><h6 style="color: black;" class="pt-3">' 
                    + moviesArray.Movies[data].Name +'</h6><h6 class="text-muted font-weight-normal d-none d-lg-block">' 
                    + moviesArray.Movies[data].Genre + '</h6></a></div></div></div>'
                };

                if(moviesArray.Movies[data].Premiere==true){
                    console.log(moviesArray.Movies[data].Premiere);
                    
                    document.getElementById("premiereMovies").innerHTML += '<div class="col-lg-3"><div><div class="slide-content"><a href="#"><img src="../'
                        + moviesArray.Movies[data].ImgUrls +'" alt="" loading="lazy" class="w-100 rounded"></a><h6 style="color: white;" class="pt-3">'
                        + moviesArray.Movies[data].Name + '</h6><h6 class="font-weight-normal d-none d-lg-block">'
                        + moviesArray.Movies[data].Language +'</h6></div></div></div>';

                    document.getElementById("premiereCarouselList").innerHTML += '<li class="premiereIndicators" data-target="#carouselExampleIndicators" data-slide-to="' + data + '"></li>';
                    $(".premiereIndicators:first").addClass('active');


                    document.getElementById("premiereCarousel").innerHTML += '<div class="carousel-item pt-3 pb-5"><div class="d-flex flex-row flex-fill py-3"><div class="flex-grow-1 pr-3"><a href="#"><img src="../'
                        + moviesArray.Movies[data].ImgUrls + '" alt="" loading="lazy" class="w-100 rounded"></a></div><div class="text-white align-self-center"><h6>'
                        + moviesArray.Movies[data].Name +'</h6><p>' + moviesArray.Movies[data].Time + '</p><p>' + moviesArray.Movies[data].Genre + '•' 
                        + moviesArray.Movies[data].Certification +'</p><p>'
                        + moviesArray.Movies[data].Language + '</p><p>' + moviesArray.Movies[data].About 
                        + '</p></div></div><button class="btn btn-danger btn-block">Buy or Rent</button></div>';
                    $(".carousel-item:first").addClass('active');
                }
            }

        document.getElementById("playsSlider").innerHTML = "";
        var playsArray = JSON.parse(localStorage.getItem("Plays"));
        for(data in playsArray){
            console.log(playsArray[data].Name);
            document.getElementById("playsSlider").innerHTML += '<div class="col-sm-12 col-md-4 col-lg-3"><div><div class="slide-content"><a href="#" class="text-decoration-none"><img src="../' + 
            playsArray[data].ImgUrls + '" alt="" loading="lazy" class="w-100 rounded"><h6 style="color: black;" class="pt-3">' 
            + playsArray[data].Name +'</h6><h6 class="text-muted font-weight-normal d-none d-lg-block">' 
            + playsArray[data].Genre + '</h6></a></div></div></div>';
        }         

document.getElementById("laughterTherapy").innerHTML = "";
        var laughterArray = JSON.parse(localStorage.getItem("LaughterShows"));
        for(data in laughterArray){
            console.log(laughterArray[data].Name);
            document.getElementById("laughterTherapy").innerHTML += '<div class="col-sm-12 col-md-4 col-lg-3"><div><div class="slide-content"><a href="#" class="text-decoration-none"><img src="../' + 
            laughterArray[data].ImgUrls + '" alt="" loading="lazy" class="w-100 rounded"><h6 style="color: black;" class="pt-3">' 
            + laughterArray[data].Name +'</h6><h6 class="text-muted font-weight-normal d-none d-lg-block">' 
            + laughterArray[data].Genre + '</h6></a></div></div></div>';
        }

        document.getElementById("outdoorEvents").innerHTML = "";
        document.getElementById("popularEvents").innerHTML = "";
        var eventsArray = JSON.parse(localStorage.getItem("Events"));
        for(data in eventsArray){
            console.log(eventsArray[data].Name);
            if(eventsArray[data].Category == "Outdoor"){
                document.getElementById("outdoorEvents").innerHTML += '<div class="col-sm-12 col-md-4 col-lg-3"><div><div class="slide-content"><a href="#" class="text-decoration-none"><img src="../' + 
                eventsArray[data].ImgUrls + '" alt="" loading="lazy" class="w-100 rounded"><h6 style="color: black;" class="pt-3">' 
                + eventsArray[data].Name +'</h6><h6 class="text-muted font-weight-normal d-none d-lg-block">' 
                + eventsArray[data].Venue + '</h6></a></div></div></div>';
            }
            else if(eventsArray[data].Category == "Popular"){
                document.getElementById("popularEvents").innerHTML += '<div class="col-sm-12 col-md-4 col-lg-3"><div><div class="slide-content"><a href="#" class="text-decoration-none"><img src="../' + 
                eventsArray[data].ImgUrls + '" alt="" loading="lazy" class="w-100 rounded"><h6 style="color: black;" class="pt-3">' 
                + eventsArray[data].Name +'</h6><h6 class="text-muted font-weight-normal d-none d-lg-block">' 
                + eventsArray[data].Venue + '</h6></a></div></div></div>';
            }
        }

        
        document.getElementById("topSports").innerHTML = "";
        var sportsArray = JSON.parse(localStorage.getItem("Sports"));
        for(data in sportsArray){
            console.log(sportsArray[data].Name);
            document.getElementById("topSports").innerHTML += '<div class="col-sm-12 col-md-4 col-lg-3"><div><div class="slide-content"><a href="#" class="text-decoration-none"><img src="../' + 
            sportsArray[data].ImgUrls + '" alt="" loading="lazy" class="w-100 rounded"><h6 style="color: black;" class="pt-3">' 
            + sportsArray[data].Name +'</h6><h6 class="text-muted font-weight-normal d-none d-lg-block">' 
            + sportsArray[data].Venue + '</h6></a></div></div></div>'; 
        
        }
        
        document.getElementById("funActivities").innerHTML = "";
        var activitiesArray = JSON.parse(localStorage.getItem("Activities"));
        for(data in activitiesArray){
            console.log(activitiesArray[data].Name);
            document.getElementById("funActivities").innerHTML += '<div class="col-sm-12 col-md-4 col-lg-3"><div><div class="slide-content"><a href="#" class="text-decoration-none"><img src="../' + 
            activitiesArray[data].ImgUrls + '" alt="" loading="lazy" class="w-100 rounded"><h6 style="color: black;" class="pt-3">' 
            + activitiesArray[data].Name +'</h6><h6 class="text-muted font-weight-normal d-none d-lg-block">' 
            + activitiesArray[data].Venue + '</h6></a></div></div></div>'; 
        
        }