var data = navigator.geolocation.getCurrentPosition(showLocation); //watchPosition can tract live location , clearWatch stops tracking

function showLocation(data) {
    var long = data.coords.longitude;
    var lat = data.coords.latitude;
    var param = lat + "," + long;

    console.log("Accuracy: " + data.coords.accuracy);
    console.log("altitude: " + data.coords.altitude);
    console.log("heading: " + data.coords.heading);
    console.log("speed: " + data.coords.speed);

    console.log("Coordinates: " + param);
}