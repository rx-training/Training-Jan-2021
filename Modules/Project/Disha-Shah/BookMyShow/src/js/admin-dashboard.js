
    if(!localStorage.logged_in_admin){
        window.location.assign("index.html");
    }
    else{
        
        var moviesArray = JSON.parse(localStorage.getItem("Movies"));
        var activitiesArray = JSON.parse(localStorage.getItem("Activities"));
        var playsArray = JSON.parse(localStorage.getItem("Plays"));
        var comedyArray = JSON.parse(localStorage.getItem("LaughterShows"));
        var sportsArray = JSON.parse(localStorage.getItem("Sports"));
        var usersArray = JSON.parse(localStorage.getItem("Users"));
        var bookingArray = JSON.parse(localStorage.getItem("Booking"));
        var eventsArray = JSON.parse(localStorage.getItem("Events"));
        document.getElementById("booking").innerHTML = 0;
        console.log(eventsArray.length);

        document.getElementById("movies").innerHTML = moviesArray.Movies.length;
        document.getElementById("activities").innerHTML = activitiesArray.length;
        document.getElementById("plays").innerHTML = playsArray.length;
        document.getElementById("comedy").innerHTML = comedyArray.length;
        document.getElementById("sports").innerHTML = sportsArray.length;
        document.getElementById("users").innerHTML = usersArray.length;
        document.getElementById("eventsCount").innerHTML = eventsArray.length;
        document.getElementById("booking").innerHTML = bookingArray.length;
       
        
    }    
        
