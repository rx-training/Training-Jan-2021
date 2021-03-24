$(document).ready(function(){
    $("#userName").append(localStorage.getItem("currantUser"));

    // async function loadjson(){
    //     let jsonData = await fetch("../JSON/buses.json");
    //     let data = await jsonData.text();
    //     localStorage.setItem("buses",data);
    // } 
    // loadjson();

    var busData = JSON.parse(localStorage.getItem("buses"));
    console.log(busData);
    var busSearch = $("#busSearch");

    busSearch.click(function(){
    
        var source = $("#source").val().toLowerCase();
        var dest = $("#destination").val().toLowerCase();
        var date = new Date($("#date").val());
        var todayDate = new Date();
        
        
        if(source.length == 0){
            alert("Enter starting point");
        } else if(dest.length == 0){
            alert("Enter destination point");
        } else if(date.length == 0 ){
            alert("Enter Travel date");
        } else if(date < todayDate){
            alert("Please enter valid date");
        } else {

            var flag=0;
            var index = []
            for (i of busData){
                if(i.start == source && i.end == dest){
                    index.push(busData.indexOf(i));
                    flag = 1;
                }
            }

            if(flag == 0){
                alert("No buses found for this route");
            }
            else {
                var searchBus = {
                    "start" : source,
                    "end" : dest,
                    "date" : date,
                }
                localStorage.setItem("search-buses" , JSON.stringify(searchBus));
                localStorage.setItem("found-buses" , JSON.stringify(index));
                busSearch.attr("type" ,"submit")
            }
        }
        
    })
})