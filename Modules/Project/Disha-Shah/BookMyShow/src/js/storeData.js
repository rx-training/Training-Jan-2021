window.onload = () => {
    //movies
    var moviesFetch = fetch("./JSON/movies.json");
        moviesFetch.then(x => x.json())
        .then(y => {
           var x1 = localStorage.getItem("Movies");
            
            if(x1==null){
                localStorage.setItem("Movies", JSON.stringify(y));
            }
            
        }).catch(err => console.log(err));

        //comedy
    var laughterFetch = fetch("./JSON/comedy.json");
        laughterFetch.then(x => x.json())
        .then(y => {
            localStorage.setItem("LaughterShows", JSON.stringify(y));
        }).catch(err => console.log(err));

        //events
        var eventsFetch = fetch("./JSON/events.json");
        eventsFetch.then(x => x.json())
        .then(y => {
            localStorage.setItem("Events", JSON.stringify(y));
        }).catch(err => console.log(err));

        //plays
        var playsFetch = fetch("./JSON/plays.json");
        playsFetch.then(x => x.json())
        .then(y => {
            localStorage.setItem("Plays", JSON.stringify(y));
        }).catch(err => console.log(err));

        //sports
        var sportsFetch = fetch("./JSON/sports.json");
        sportsFetch.then(x => x.json())
        .then(y => {
            localStorage.setItem("Sports", JSON.stringify(y));
        }).catch(err => console.log(err));

        //activities
    var activitiesFetch = fetch("./JSON/activities.json");
        activitiesFetch.then(x => x.json())
        .then(y => {
            var x1 = localStorage.getItem("Activities");
            
            if(x1==null){
                localStorage.setItem("Activities", JSON.stringify(y));
            }
        }).catch(err => console.log(err));

        //users
    var userFetch = fetch("./JSON/users.json");
    userFetch.then(x => x.json())
    .then(y => {
        var x1 = localStorage.getItem("Users");
        
        if(x1==null){
            localStorage.setItem("Users", JSON.stringify(y));
        }
    }).catch(err => console.log(err));

    //theatres
    var theatreFetch = fetch("./JSON/theatre.json");
    theatreFetch.then(x => x.json())
    .then(y => {
        var x1 = localStorage.getItem("Theatres");
        
        if(x1==null){
            localStorage.setItem("Theatres", JSON.stringify(y));
        }
    }).catch(err => console.log(err));

    //showTimings
    var showTimingFetch = fetch("./JSON/showtimings.json");
    showTimingFetch.then(x => x.json())
    .then(y => {
        var x1 = localStorage.getItem("ShowTimings");
        
        if(x1==null){
            localStorage.setItem("ShowTimings", JSON.stringify(y));
        }
    }).catch(err => console.log(err));
}