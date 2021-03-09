$(document).ready(function () {

    async function getCountryData() {
        var countryData = await fetch("./json/country.json");
        var countryArray = await countryData.json();
        localStorage.setItem("countries", JSON.stringify(countryArray));
    }

    getCountryData();

    $countryElement = $("#country");
    $stateElement = $("#state");
    $cityElement = $("#city");

    var countries = JSON.parse(localStorage.getItem("countries"));

    var countryStr = "";

    for(var country in countries){
        countryStr += '<option value="' + country + '">' + country + '</option>';
    }

    $countryElement.append(countryStr);


    $countryElement.on("change", function (){
        var states = countries[$(this).val()];
        
        var stateStr = '<option value="select"> Select State</option>';

        if($(this).val() == "select"){
            $stateElement.html("");
            $stateElement.append(stateStr);
            $cityElement.html("");
            $cityElement.append('<option value="select"> Select State</option>');
            return false;
        }

        for(var state in states[0]){
            stateStr += '<option value="' + state + '">' + state + '</option>';
        }

        $stateElement.html("");
        $stateElement.append(stateStr);
        $cityElement.html("");
        $cityElement.append('<option value="select"> Select State</option>');
    });

    

    $stateElement.on("change", function () {
        //alert($(this).val());

        var country = $countryElement.val();
        var state = $(this).val();

        var cities = countries[country][0][state];
        //console.log(state);
        //console.log(cities);

        var cityStr = '<option value="select"> Select State</option>';

        for(var city in cities){
            //alert(cities[city]);
            cityStr += '<option value="' + cities[city] + '">' + cities[city] + '</option>';
        }

        $cityElement.html("");
        $cityElement.append(cityStr);
    });

});


function addAddress() {
    
    var country = $("#country").val();

    if(country == "select"){
        alert("Please select Country");
        return false;
    }


    var state = $("#state").val();

    if(state == "select"){
        alert("Please select State");
        return false
    }


    var city = $("#city").val();

    if(city == "select"){
        alert("Please select City");
        return false;
    }


    var address = $("#address").val();
    var pincode = $("#pincode").val();

    //alert(country + " " + state + " " + city + " " + address + " " + pincode);

    var userDetails = JSON.parse(localStorage.getItem("userDetails"));

    var random = Math.floor((Math.random() * 10000000) + 1);

    alert("Your Account Number is " + random + ". Please note this number and Login using this Account Number");

    var accountDetails = {
        "accountType" : userDetails.accountType,
        "fullname" : userDetails.fullname,
        "fathername" : userDetails.fathername,
        "mothername" : userDetails.mothername,
        "email" : userDetails.email,
        "gender" : userDetails.gender,
        "dob" : userDetails.dob,
        "maritalStatus" : userDetails.maritalStatus,
        "occupation" : userDetails.occupation,
        "income" : userDetails.income,
        "password" : userDetails.password,
        "number" : userDetails.number,
        "country" : country,
        "state" : state,
        "city" : city,
        "address" : address,
        "pincode" : pincode,
        "accountNumber" : random,
        "balance" : parseFloat(0)
    }

    var accounts = JSON.parse(localStorage.getItem("accounts")) || [];

    accounts.push(accountDetails);
    localStorage.setItem("accounts", JSON.stringify(accounts));

    //localStorage.setItem("accountDetails", JSON.stringify(accountDetails));
    localStorage.removeItem("userDetails");
    localStorage.removeItem("user");

    location.assign("index.html");

    return false;
}