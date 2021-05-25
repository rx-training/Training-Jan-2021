     //Web Storage
     if(typeof Storage !== undefined) {
        localStorage.setItem("firstName", "Rita");
        console.log(localStorage.getItem("firstName"));
        localStorage.lastName = "Agrawal";
        console.log(localStorage.lastName);
        var x = localStorage.key(0);
        console.log("1st key in local storage: " + x);
        for(var i=0; i<localStorage.length; i++) {
            var x = localStorage.key(i);
            console.log(i+1 + "th key in local storage: " + x); 
        }
    }
    else {
        console.log("Web Storage not supported!!");
    }

    function myNewFunc() {
        if(typeof Storage !== undefined) {
            if(localStorage.clickCount) {
                localStorage.clickCount = Number(localStorage.clickCount) + 1;
            }
            else {
                localStorage.clickCount = 1;
            }
            document.getElementById("demo").innerHTML = localStorage.clickCount;
        }
        else {
            console.log("Web Storage not supported!!");
        }
        return false;
    }

    

    function myFun() {
        if(typeof Storage !== undefined) {
            if(sessionStorage.clickCount) {
                sessionStorage.clickCount = Number(sessionStorage.clickCount) + 1;
            }
            else {
                sessionStorage.clickCount = 1;
            }
            document.getElementById("demo1").innerHTML = sessionStorage.clickCount;
        }
        else {
            console.log("Web Storage not supported!!")
        }
        return false;
    }

    //Web Geolocation
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else { 
        console.log("Geolocation is not supported by this browser.");
    }

    function showPosition(position) {
    /*console.log("Latitude: " + position.coords.latitude + 
    ", Longitude: " + position.coords.longitude);*/
        var latlon = position.coords.latitude + "," + position.coords.longitude;
        var img_url = "https://maps.googleapis.com/maps/api/staticmap?center=" 
        + latlon + "&zoom=14&size=400x300&sensor=false&key=YOUR_KEY";
        document.getElementById("mapholder").innerHTML = "<img src='"+img_url+"'>";
    }

    function showError(error) {
        switch(error.code) {
            case error.PERMISSION_DENIED:
            console.log("User denied the request for Geolocation.");
            break;
            case error.POSITION_UNAVAILABLE:
            console.log("Location information is unavailable.");
            break;
            case error.TIMEOUT:
            console.log("The request to get user location timed out.");
            break;
            case error.UNKNOWN_ERROR:
            console.log("An unknown error occurred.");
            break;
        }
    }

    //watchPosition()
    if (navigator.geolocation) {
        navigator.geolocation.watchPosition(showPosition);
    } else { 
        x.innerHTML = "Geolocation is not supported by this browser.";
    }

    function showPosition(position) {
        console.log("Latitude: " + position.coords.latitude + 
        ", Longitude: " + position.coords.longitude);
    }