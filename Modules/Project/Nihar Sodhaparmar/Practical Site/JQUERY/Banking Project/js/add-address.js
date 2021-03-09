$(document).ready(function () {

    getCountryData();

    loadCountryDataOnChange()
    
});


//Function for get Country Data
async function getCountryData() {
    var countryData = await fetch("./json/country.json");
    var countryArray = await countryData.json();
    localStorage.setItem("countries", JSON.stringify(countryArray));
}


//Function for load Country Data
function loadCountryDataOnChange(){

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
}


//Class for userAddress

var userAddress = function (){

    this.country = $("#country").val();
    this.state = $("#state").val();
    this.city = $("#city").val();
    this.address = $("#address").val();
    this.pincode = $("#pincode").val();

};

//function for validate userAddress Fields
userAddress.prototype.validateFields = function () {

    $countryError = $("#countryError");
    $stateError = $("#stateError");
    $cityError = $("#cityError");

    $countryError.html("");
    $stateError.html("");
    $cityError.html("");

    var isValid = true;
    if(this.country == "select"){
        $countryError.html("Please select Country")
        isValid = false;
    }

    if(this.state == "select"){
        $stateError.html("Please select State");
        isValid = false
    }

    if(this.city == "select"){
        $cityError.html("Please select City");
        isValid = false;
    }

    return isValid;
};

userAddress.prototype.submitUserAddress = function (){

    if(!this.validateFields()){
        return false;
    }

    var userDetails = JSON.parse(localStorage.getItem("userDetails"));

    var random = accountNumberGenerator();

    $("#generatedAccountNumber").html("Your Account Number is " + random + ". Please note this number and Login using this Account Number.");
    $('#accountNumberAlertModal').modal({backdrop: 'static', keyboard: false})  
    $("#accountNumberAlertModal").modal('show');

    //alert();

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
        "country" : this.country,
        "state" : this.state,
        "city" : this.city,
        "address" : this.address,
        "pincode" : this.pincode,
        "accountNumber" : random,
        "balance" : parseFloat(0)
    }

    var accounts = JSON.parse(localStorage.getItem("accounts")) || [];

    accounts.push(accountDetails);
    localStorage.setItem("accounts", JSON.stringify(accounts));

    //localStorage.setItem("accountDetails", JSON.stringify(accountDetails));
    localStorage.removeItem("userDetails");
    localStorage.removeItem("user");

    //location.assign("index.html");

    return false;
};


function accountNumberGenerator(){

    var random = Math.floor((Math.random() * 10000000) + 1) + 11010100000000;

    var accounts = JSON.parse(localStorage.getItem("accounts"));

    for(var i in accounts){
        if(accounts[i].accountNumber == random)
        {
            accountNumberGenerator();
        }
    }

    return random;
}