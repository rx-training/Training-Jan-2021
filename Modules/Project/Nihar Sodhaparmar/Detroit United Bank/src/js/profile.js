$(document).ready(function () {

    (new profile).showProfileData();
    (new profile).showModalData();
});

//Class for profile
var profile = function(){

};

//Function for showing Profile Data
profile.prototype.showProfileData = function (){

    var userAcNumber = JSON.parse(localStorage.getItem("loggedUserAccountNumber"));
    var accounts = JSON.parse(localStorage.getItem("accounts"));

    var account;

    for (var i in accounts) {
        if (accounts[i].accountNumber == userAcNumber) {
            account = accounts[i];
            //console.log(account);
        }
    }

    //Profile Data --------------------------
    $("#acNumberProfile").text(account.accountNumber);
    $("#name").text(account.fullname);
    $("#fathername").text(account.fathername);
    $("#mothername").text(account.mothername);
    $("#gender").text(account.gender);
    $("#dob").text(account.dob);
    $("#maritalStatus").text(account.maritalStatus);
    $("#email").text(account.email);
    $("#number").text(account.number);
    $("#occupation").text(account.occupation);
    $("#income").text(account.income);


    //Address Data ----------------------------
    $("#address").text(account.address);
    $("#pincode").text(account.pincode);
    $("#city").text(account.city);
    $("#state").text(account.state);
    $("#country").text(account.country);

};


//Function for showing profile Modal Data
profile.prototype.showModalData = function(){

    var userAcNumber = JSON.parse(localStorage.getItem("loggedUserAccountNumber"));
    var accounts = JSON.parse(localStorage.getItem("accounts"));

    var account;

    for (var i in accounts) {
        if (accounts[i].accountNumber == userAcNumber) {
            account = accounts[i];
            //console.log(account);
        }
    }

    //Profile Data ---------------------------
    $("#fullnameModal").val(account.fullname);
    $("#fathernameModal").val(account.fathername);
    $("#mothernameModal").val(account.mothername);

    if (account.gender == "male") {
        $("#maleRadio").prop("checked", true);
    } else {
        $("#femaleRadio").prop("checked", true);
    }

    $("#dobModal").val(account.dob);

    $("#marital-statusModal option[value=" + account.maritalStatus + "]").attr("selected", "selected");

    $("#emailModal").val(account.email);

    $("#numberModal").val(account.number);

    $("#occupationModal option[value=" + account.occupation + "]").attr("selected", "selected");

    $("#incomeModal option[value=" + account.income + "]").attr("selected", "selected");


    //Address Data ---------------------------
    $("#countryModal").append('<option value="' + account.country + '" selected> ' + account.country + '</option>');

    $("#stateModal").append('<option value="' + account.state + '" selected> ' + account.state + '</option>');

    var countries = JSON.parse(localStorage.getItem("countries"));
    var cities = countries[account.country][0][account.state];

    var cityStr = '<option value="select"> Select City</option>';

    for (var city in cities) {
        if (cities[city] == account.city) {
            cityStr += '<option value="' + cities[city] + '" selected>' + cities[city] + '</option>';
        }
        else {
            cityStr += '<option value="' + cities[city] + '">' + cities[city] + '</option>';
        }

    }

    $("#cityModal").html("");
    $("#cityModal").append(cityStr);

    $("#addressModal").val(account.address);

    $("#pincodeModal").val(account.pincode);

}

//Function for validating update Profile Data
profile.prototype.validateUpdateProfileData = function (){

    $maritalStatusModalError = $("#marital-statusModalError");
    $occupationModalError = $("#occupationModalError");
    $incomeModalError = $("#incomeModalError");

    $maritalStatusModalError.html("");
    $occupationModalError.html("");
    $incomeModalError.html("");

    var isValid = true;
    var maritalStatus = $("#marital-statusModal").val();

    if (maritalStatus == "select") {
        $maritalStatusModalError.html("Please Select Marital Status");
        isValid = false;
    }

    var occupation = $("#occupationModal").val();

    if (occupation == "select") {
        $occupationModalError.html("Please Select Occupation");
        isValid = false;
    }

    var income = $("#incomeModal").val();

    if (income == "select") {
        $incomeModalError.html("Please Select Income");
        isValid = false;
    }

    return isValid;
};

//Function for updating Profile Data
profile.prototype.updateProfileData = function () {

    if(!this.validateUpdateProfileData()){
        return false;
    }

    var maritalStatus = $("#marital-statusModal").val();
    var occupation = $("#occupationModal").val();
    var income = $("#incomeModal").val();
    
    var fullname = $("#fullnameModal").val();
    var fathername = $("#fathernameModal").val();
    var mothername = $("#mothernameModal").val();
    var email = $("#emailModal").val();
    var number = $("#numberModal").val();
    var gender = $("input[name='genderModal']:checked").val();
    var dob = $("#dobModal").val();

    //alert(fullname + "  " + fathername + "  " + mothername + "  " + gender + "  " + dob + "  " + maritalStatus + "  " 
    //         + email + "  " + number + "  " + occupation + "  " + income);

    var accounts = JSON.parse(localStorage.getItem("accounts"));
    var userAcNumber = JSON.parse(localStorage.getItem("loggedUserAccountNumber"));

    for (var i in accounts) {
        if (accounts[i].accountNumber == userAcNumber) {
            accounts[i].fullname = fullname;
            accounts[i].fathername = fathername;
            accounts[i].mothername = mothername;
            accounts[i].email = email;
            accounts[i].number = number;
            accounts[i].gender = gender;
            accounts[i].dob = dob;
            accounts[i].maritalStatus = maritalStatus;
            accounts[i].occupation = occupation;
            accounts[i].income = income;
        }
    }

    localStorage.setItem("accounts", JSON.stringify(accounts));
    location.reload();
    return false;

}

//Function for updating Profile Data
profile.prototype.updateAddreassData = function () {

    $cityModalError = $("#cityModalError");

    $cityModalError.html("");

    var city = $("#cityModal").val();

    if (city == "select") {
        $cityModalError.html("Please Select City");
        return false;
    }

    var address = $("#addressModal").val();
    var pincode = $("#pincodeModal").val();

    //alert(city + "  " + address + "  " + pincode);

    var accounts = JSON.parse(localStorage.getItem("accounts"));
    var userAcNumber = JSON.parse(localStorage.getItem("loggedUserAccountNumber"));

    for (var i in accounts) {
        if (accounts[i].accountNumber == userAcNumber) {
            accounts[i].city = city;
            accounts[i].address = address;
            accounts[i].pincode = pincode;
        }
    }

    localStorage.setItem("accounts", JSON.stringify(accounts));
    location.reload();

    return false;

};