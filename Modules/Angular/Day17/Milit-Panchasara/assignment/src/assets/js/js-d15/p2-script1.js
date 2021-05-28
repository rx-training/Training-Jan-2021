function viewCities(){
    var cities = ['Rajkot','Ahmedabad','Mumbai','Delhi','Banglore'];
    var count = 1;
    for(var city of cities) {
        alert("city no. " + count + " is " + city);
        count++;
    }
}