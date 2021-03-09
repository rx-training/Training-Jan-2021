window.onload = () =>{
    localStorage.removeItem("SelectedTheatreDetails");
    localStorage.removeItem("NoOfTickets");
}
var moviesArray = JSON.parse(localStorage.getItem("Movies"));
var showTimeArray = JSON.parse(localStorage.getItem("ShowTimings"));


for(data in moviesArray.Movies){
    if(moviesArray.Movies[data].Name == "Monster Hunter"){

    document.getElementById("showTimeMovie").innerHTML = '<h3 class="text-white h2 font-weight-normal">'+ moviesArray.Movies[data].Name 
        +'</h3><div class=" d-flex flex-row flex-wrap"><h6 class="btn btn-outline-light rounded-circle btn-sm mx-2">'+moviesArray.Movies[data].Certification
        +'</h6><h6 class="text-white font-weight-light mx-2">'+moviesArray.Movies[data].Rating
        +'</h6><h6 class="btn btn-outline-light rounded-pill btn-sm mx-2">'+moviesArray.Movies[data].Genre
        +'</h6><h6 class="text-white font-weight-light mx-2">'+moviesArray.Movies[data].DateOfRelease
        +'</h6><h6 class="text-white font-weight-light mx-2">'+moviesArray.Movies[data].Time+'</h6></div>';

    
    //document.getElementById("pills-tab") = '<li class="nav-item" role="presentation"><a class="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">Profile</a></li>'
    }
    
}

for(data in showTimeArray){
    if(showTimeArray[data].Movie == "Monster Hunter"){
        var start = showTimeArray[data].StartDate.split('-')[2];
        var end = showTimeArray[data].EndDate.split('-')[2];
        var month = showTimeArray[data].EndDate.split('-')[1];
        
        start=1;
        
        for(var i = start; i<=end; i++){
            
            $("#showDate").append('<a href="#" id="showDateLink" class="mx-3 text-decoration-none">0'+i+'/'+month+'</a>');
            $('#showDateLink:first').addClass("btn btn-danger").css("color","white");
           
        }
        $("#showCategory").append('<div class="border-bottom border-danger">'+showTimeArray[data].Language+'-'+showTimeArray[data].Film+'</div>');
        $("#showTheatreName").append('<h6>' + showTimeArray[data].Theatre + '</h6>');
        $("#showTimings").append('<a style="border:1px solid green" class="btn btn-outline-success" onclick="return timing('+data+')" data-toggle="modal" data-target="#timingsModal">'+ showTimeArray[data].Time +'</a>');
            
    }
}

function timing(data){
    theatreDetails = {
        "Theatre": showTimeArray[data].Theatre,
        "Time": showTimeArray[data].Time
    }
    localStorage.setItem("SelectedTheatreDetails", JSON.stringify(theatreDetails));
    
    return false;
}

$(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })