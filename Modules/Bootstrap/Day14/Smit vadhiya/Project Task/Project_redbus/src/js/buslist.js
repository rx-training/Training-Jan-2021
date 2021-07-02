$(document).ready(function(){
    $("#userName").append(localStorage.getItem("currantUser"));
    var foundData = JSON.parse(localStorage.getItem("found-buses"));
    var allBus = JSON.parse(localStorage.getItem("buses"));
    var route = JSON.parse(localStorage.getItem("search-buses"));
    
    var monthArray = ["January","February","March","April","May","June","July","August","September","October","November","December"]
    var date = new Date(route.date);
    var day = date.getDate();
    var month = monthArray[date.getMonth()];
    

    var str1 = '<div class="d-flex flex-column flex-sm-row text-center justify-content-center"><div  class="h4 m-2">    <div > <span class="text-capitalize" >'+allBus[foundData[0]].start+'</span>  <i class=" h4 fa fa-long-arrow-right"></i> <span class="text-capitalize" > '+allBus[foundData[0]].end+'</span></div></div><div class="m-2 h4">    <div> &#10641; <span class="p-3">'+day+' '+month +' </span> &#10642; </div></div></div>'
    $("#displayHeading").append(str1);

    var str = ""
    for(i of foundData){
        var value = allBus[i];
        var startTimeArr =  value.startTime.split(":")
        var endTimeArr =  value.endTime.split(":")
        var total  = (parseInt(endTimeArr[0])*3600)+(parseInt(endTimeArr[1])*60) - (parseInt(startTimeArr[0])*3600)+(parseInt(startTimeArr[1])*60);
        
        if(total<0){
            total = 86400+total 
        }
        var hr = parseInt(total/3600);
        var min = (total%3600)/60;
  
        
        var bg = ""
        if(value.rating < 3.0){
            bg = "badge-danger";
        } else if (value.rating < 4.0 ){
            bg = "badge-warning";
        } else if (value.rating >= 4.0 ){
            bg = "badge-success";
        }
        
        str += '<div class="p-2 my-2 border border-dark"><div class="row justify-content-around"><div class="col-5 col-md-3"><h5> <i class="fa fa-bus"></i> '+value.busname+'</h5><p class="text-muted"> '+value.coach+'</p></div><div class="col-2 col-md-1 text-center"> <h5 >'+value.startTime+'</h5><p class="text-muted text-capitalize"> '+value.start+'</p></div><div class="col-3 col-md-2 text-center"> <p class="lead text-muted">'+hr+' hr '+min+' min</p></div><div class="col-2 col-md-1 text-center"> <h5>'+value.endTime+'</h5><p class="text-muted text-capitalize"> '+value.end+'</p></div><div class="col-4 col-md-1" > <div class="p-2 badge '+bg+'"><i class="fa fa-star"></i> '+value.rating+'</div><p class="text-muted"> <i class="fa fa-group"> 45</i></p></div><div class="col-4 col-md-2 "> <p class="text-muted d-inline"> INR</p><h4 class="d-inline" > '+value.farePrice+'</h4></div><div class="col-4 col-md-2"> <p class="text-muted d-inline"><b></b>45 Seats Available</p><h4 class="d-inline" ></h4></div></div><div class="d-flex flex-row-reverse"><div><button class="btn bg-theme" id="seat">Select seat</button></div></div></div>'  
    }
    $("#displayBus").append(str);
})