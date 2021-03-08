window.onload = () => {
    localStorage.removeItem("selectedMovieDetails");
    localStorage.removeItem("SelectedTheatreDetails");
    localStorage.removeItem("NoOfTickets");
}
    var moviesArray = JSON.parse(localStorage.getItem("Movies"));


    for(data in moviesArray.Movies){
        if(moviesArray.Movies[data].Name == "Monster Hunter"){
        document.getElementById("movieImg").setAttribute("src",moviesArray.Movies[data].ImgUrls);
        document.getElementById("monsterHunterHeader").innerHTML = '<h3 class="pb-3">'+moviesArray.Movies[data].Name
        +'</h3><h6>'+moviesArray.Movies[data].Rating
        +'</h6> <h5>'+moviesArray.Movies[data].Film
        +'</h5><h5>'+moviesArray.Movies[data].Language
        +'</h5> <h5 class="py-3"><span>'+moviesArray.Movies[data].Time
        +'</span> • <span>'+moviesArray.Movies[data].Genre
        +'</span> • <span>'+moviesArray.Movies[data].Certification
        +'</span> • <span>'+moviesArray.Movies[data].DateOfRelease
        +'</span></h5> <input type="button" value="Book Now" class="btn btn-danger" id="btnBook" onclick="return bookTicket()" data-toggle="modal" data-target="#bookModal">';
        document.getElementById("about").innerHTML = moviesArray.Movies[data].About;
        }
    }


    function bookTicket(){
        if(!localStorage.logged_in_user){
            alert("Please login to book your show");
            window.location.assign("Monster Hunter.html");
        }
          
    } 

    $("#film-1").click(function(){
        var movie = {
            "Movie": "Monster Hunter",
            "Language": "English",
            "Film": "2D"
        }
        localStorage.setItem("selectedMovieDetails", JSON.stringify(movie));
    })

    