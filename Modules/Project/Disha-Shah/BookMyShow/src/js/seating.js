$("document").ready(function(){
    $("#goBack").click(function(){
        localStorage.removeItem("NoOfTickets");
        localStorage.removeItem("SelectedTheatre");
        localStorage.removeItem("SelectedTime");
        window.location.href="selectShowtime.html";
    });
    var selectedTheatre = JSON.parse(localStorage.getItem("SelectedTheatreDetails"));
    var ticketQty = localStorage.NoOfTickets;
    var count=0;
    document.getElementById("selectedTheatre").innerHTML = selectedTheatre.Theatre + " at " + selectedTheatre.Time + " on 01/03/2021";
    document.getElementById("ticketQty").innerHTML = ticketQty + " Tickets";

    $("#proceedToPay").css("display","none");

    var seats = [];
    var seatsJoin = "";
    var ticketPrice = 0.00;


    window.onload = () => {
        var bookingArray = JSON.parse(localStorage.getItem("Booking"));
        for(var i=0;i<bookingArray.length;i++){
            for(var j=0; j<bookingArray[i].Seats.length;j++){
                console.log(bookingArray[i].Seats[j]);
            
                if(document.getElementById('1_1').innerHTML == bookingArray[i].Seats[j]){
                    $('#1_1').addClass('disabled').css({'background-color':'gray','color':'white','border':'0'});
                }
                if(document.getElementById('1_2').innerHTML == bookingArray[i].Seats[j]){
                    $('#1_2').addClass('disabled').css({'background-color':'gray','color':'white','border':'0'});
                }
                if(document.getElementById('1_3').innerHTML == bookingArray[i].Seats[j]){
                    $('#1_3').addClass('disabled').css({'background-color':'gray','color':'white','border':'0'});
                }
                if(document.getElementById('1_4').innerHTML == bookingArray[i].Seats[j]){
                    $('#1_4').addClass('disabled').css({'background-color':'gray','color':'white','border':'0'});
                }
                if(document.getElementById('2_1').innerHTML == bookingArray[i].Seats[j]){
                    $('#2_1').addClass('disabled').css({'background-color':'gray','color':'white','border':'0'});
                }
                if(document.getElementById('2_2').innerHTML == bookingArray[i].Seats[j]){
                    $('#2_2').addClass('disabled').css({'background-color':'gray','color':'white','border':'0'});
                }
                if(document.getElementById('2_3').innerHTML == bookingArray[i].Seats[j]){
                    $('#2_3').addClass('disabled').css({'background-color':'gray','color':'white','border':'0'});
                }
                if(document.getElementById('2_4').innerHTML == bookingArray[i].Seats[j]){
                    $('#2_4').addClass('disabled').css({'background-color':'gray','color':'white','border':'0'});
                }
                if(document.getElementById('3_1').innerHTML == bookingArray[i].Seats[j]){
                    $('#3_1').addClass('disabled').css({'background-color':'gray','color':'white','border':'0'});
                }
                if(document.getElementById('3_2').innerHTML == bookingArray[i].Seats[j]){
                    $('#3_2').addClass('disabled').css({'background-color':'gray','color':'white','border':'0'});
                }
                if(document.getElementById('3_3').innerHTML == bookingArray[i].Seats[j]){
                    $('#3_3').addClass('disabled').css({'background-color':'gray','color':'white','border':'0'});
                }
                if(document.getElementById('3_4').innerHTML == bookingArray[i].Seats[j]){
                    $('#3_4').addClass('disabled').css({'background-color':'gray','color':'white','border':'0'});
                }
            }
        }
    }


    
    $("#1_1").click(function(){
        if(count!=ticketQty && !($("#1_1").hasClass("disabled"))){
            $("#1_1").addClass("btn-success").css("color","white");
            seats.push(document.getElementById("1_1").innerHTML);
            count++;
            if(count==ticketQty){
                $("#symbolInfo").css("display","none");
                $("#proceedToPay").css("display","block");
                return false;
            }
        }
    })
    
    $("#1_2").click(function(){
        if(count!=ticketQty && !($("#1_2").hasClass("disabled"))){
            $("#1_2").addClass("btn-success").css("color","white");
            seats.push(document.getElementById("1_2").innerHTML);
            count++;
            if(count==ticketQty){
                $("#symbolInfo").css("display","none");
                $("#proceedToPay").css("display","block");
                return false;
            }
        }
    })
    $("#1_3").click(function(){
        if(count!=ticketQty && !($("#1_3").hasClass("disabled"))){
            $("#1_3").addClass("btn-success").css("color","white");
            seats.push(document.getElementById("1_3").innerHTML);
            count++;
            if(count==ticketQty){
                $("#symbolInfo").css("display","none");
                $("#proceedToPay").css("display","block");
                return false;
            }
        }
    })
    $("#1_4").click(function(){
        if(count!=ticketQty && !($("#1_4").hasClass("disabled"))){
            $("#1_4").addClass("btn-success").css("color","white");
            seats.push(document.getElementById("1_4").innerHTML);
            count++;
            if(count==ticketQty){
                $("#symbolInfo").css("display","none");
                $("#proceedToPay").css("display","block");
                return false;
            }
        }
    })
    $("#2_1").click(function(){
        if(count!=ticketQty && !($("#2_1").hasClass("disabled"))){
            $("#2_1").addClass("btn-success").css("color","white");
            seats.push(document.getElementById("2_1").innerHTML);
            count++;
            if(count==ticketQty){
                $("#symbolInfo").css("display","none");
                $("#proceedToPay").css("display","block");
                return false;
            }
        }
    })
    $("#2_2").click(function(){
        if(count!=ticketQty && !($("#2_2").hasClass("disabled"))){
            $("#2_2").addClass("btn-success").css("color","white");
            seats.push(document.getElementById("2_2").innerHTML);
            count++;
            if(count==ticketQty){
                $("#symbolInfo").css("display","none");
                $("#proceedToPay").css("display","block");
                return false;
            }
        }
    })
    $("#2_3").click(function(){
        if(count!=ticketQty && !($("#2_3").hasClass("disabled"))){
            $("#2_3").addClass("btn-success").css("color","white");
            seats.push(document.getElementById("2_3").innerHTML);
            count++;
            if(count==ticketQty){
                $("#symbolInfo").css("display","none");
                $("#proceedToPay").css("display","block");
                return false;
            }
        }
    })
    $("#2_4").click(function(){
        if(count!=ticketQty && !($("#2_4").hasClass("disabled"))){
            $("#2_4").addClass("btn-success").css("color","white");
            seats.push(document.getElementById("2_4").innerHTML);
            count++;
            if(count==ticketQty){
                $("#symbolInfo").css("display","none");
                $("#proceedToPay").css("display","block");
                return false;
            }
        }
    })
    $("#3_1").click(function(){
        if(count!=ticketQty && !($("#3_1").hasClass("disabled"))){
            $("#3_1").addClass("btn-success").css("color","white");
            seats.push(document.getElementById("3_1").innerHTML);
            count++;
            if(count==ticketQty){
                $("#symbolInfo").css("display","none");
                $("#proceedToPay").css("display","block");
                return false;
            }
        }
    })
    $("#3_2").click(function(){
        if(count!=ticketQty && !($("#3_2").hasClass("disabled"))){
            $("#3_2").addClass("btn-success").css("color","white");
            seats.push(document.getElementById("3_2").innerHTML);
            count++;
            if(count==ticketQty){
                $("#symbolInfo").css("display","none");
                $("#proceedToPay").css("display","block");
                return false;
            }
        }
    })
    $("#3_3").click(function(){
        if(count!=ticketQty && !($("#3_3").hasClass("disabled"))){
            $("#3_3").addClass("btn-success").css("color","white");
            seats.push(document.getElementById("3_3").innerHTML);
            count++;
            if(count==ticketQty){
                $("#symbolInfo").css("display","none");
                $("#proceedToPay").css("display","block");
                return false;
            }
        }
    })
    $("#3_4").click(function(){
        if(count!=ticketQty && !($("#3_4").hasClass("disabled"))){
            $("#3_4").addClass("btn-success").css("color","white");
            seats.push(document.getElementById("3_4").innerHTML);
            count++;
            if(count==ticketQty){
                $("#symbolInfo").css("display","none");
                $("#proceedToPay").css("display","block");
                return false;
            }
        }
    })

    
   

    $("#proceedToPay").click(function(){
        seats.sort(function(a, b){return a-b});
        seatsJoin = seats.join(",");
        console.log(seats);
        console.log(seatsJoin);
        console.log(typeof seatsJoin)
        $("#screenDetails").append(seatsJoin + '(' + ticketQty + ' Tickets)<br><small class="text-muted">Screen 5 New</small>');

        var showTimeArray = JSON.parse(localStorage.getItem("ShowTimings"));
        
        for(data in showTimeArray){
            if(showTimeArray[data].Movie == "Monster Hunter"){
                ticketPrice = (ticketQty * showTimeArray[data].Ticket).toFixed(2);
            }
        }

        $("#amountDetails").append("Rs." + ticketPrice);
        $("#finalAmount").append("Rs." + ticketPrice);
    })

    $("#cancelBooking").click(function(){
        localStorage.removeItem("NoOfTickets");
        localStorage.removeItem("SelectedTheatre");
        localStorage.removeItem("SelectedTime");
        window.location.assign("selectShowTime.html");
    })


    $("#finalPayment").click(function(){
        var userInfo = JSON.parse(localStorage.getItem("logged_in_user"));
        var selectedMovie = JSON.parse(localStorage.getItem("selectedMovieDetails"));
        var selectedTheatre = JSON.parse(localStorage.getItem("SelectedTheatreDetails"));
        if(localStorage.Booking) {
            var bookingArray = JSON.parse(localStorage.getItem("Booking"));
            var bookingDetails = {
                "bookingId": bookingArray.length + 1,
                "bookedByUser": userInfo.Username,
                "userContact": userInfo.ContactNo,
                "Movie": selectedMovie.Movie,
                "Language": selectedMovie.Language,
                "Film": selectedMovie.Film,
                "Theatre": selectedTheatre.Theatre,
                "Time": selectedTheatre.Time,
                "Seats": seats,
                "TicketPrice": ticketPrice

            }
            bookingArray.push(bookingDetails);
            localStorage.setItem("Booking", JSON.stringify(bookingArray));
        }
        else {
            var bookingDetails = [{
                "bookingId": 1,
                "bookedByUser": userInfo.Username,
                "userContact": userInfo.ContactNo,
                "Movie": selectedMovie.Movie,
                "Language": selectedMovie.Language,
                "Film": selectedMovie.Film,
                "Theatre": selectedTheatre.Theatre,
                "Time": selectedTheatre.Time,
                "Seats": seats,
                "TicketPrice": ticketPrice

            }]

            localStorage.setItem("Booking", JSON.stringify(bookingDetails));
        }

        alert("Payment is successfully done!!");
        window.location.assign("index.html");
    })

})