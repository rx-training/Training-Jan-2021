function checkEmployeeId(){
    var id = document.getElementById("employee_id").value;
    if(!id.match(/[0-9]{5}/g)) {
        document.getElementById("employee_id").style.color = 'red';
        return false;
    }
    else {
        document.getElementById("employee_id").style.color = 'green';
        return true;
    }
}

function checkAge() {
    var age = document.getElementById("age").value;
    age = parseInt(age);

    if(isNaN(age) || age < 18 ||  age > 80)
    {
        document.getElementById("age").style.color = 'red';
        return false;
    }
    else {
        document.getElementById("age").style.color = 'green';
        return true;
    }
}

function checkEmail() {
    var email = document.getElementById("employee_email").value;
    // console.log(email.match());
    if(!email.match(/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9-]+[.][a-zA-Z0-9-]+$/g) || email.match(/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9-]+[.][a-zA-Z0-9-]+$/g) != email) {
        document.getElementById("employee_email").style.color = 'red';
        return false;
    }
    else {
        document.getElementById("employee_email").style.color = 'green';
        return true;
    }
}

function validateForm() {
    var isValid = true;
    document.getElementById("error-div").innerHTML = "";
    if(document.getElementById("employee_id").value == "") {
        document.getElementById("error-div").innerHTML += '<div class="alert alert-danger" id="error-div">Employee ID is required.</div>';
        isValid = false;
    }

    if(document.getElementById("employee_name").value == "") {
        document.getElementById("error-div").innerHTML += '<div class="alert alert-danger" id="error-div">Employee Name is required.</div>';
        isValid = false;
    }

    if(document.getElementById("employee_email").value == "") {
        document.getElementById("error-div").innerHTML += '<div class="alert alert-danger" id="error-div">Employee email is required.</div>';
        isValid = false;
    }
    else{
        if(!checkEmail()){
            document.getElementById("error-div").innerHTML += '<div class="alert alert-danger" id="error-div">Employee email is in invalid format.</div>';
            isValid = false;
        }
    }

    if(document.getElementById("employee_contact").value == "") {
        document.getElementById("error-div").innerHTML += '<div class="alert alert-danger" id="error-div">Emplpoyee Contact is required.</div>';
        isValid = false;
    }

    if(document.getElementById("joining-date").value == "") {
        document.getElementById("error-div").innerHTML += '<div class="alert alert-danger" id="error-div">Joining Date is required.</div>';
        isValid = false;
    }

    if(document.getElementById("age").value == "") {
        document.getElementById("error-div").innerHTML += '<div class="alert alert-danger" id="error-div">Age is required.</div>';
        isValid = false;
    }
    else{
        if(!checkAge()){
            document.getElementById("error-div").innerHTML += '<div class="alert alert-danger" id="error-div">Inserted age is not valid (should be between 18 to 80).</div>';
            isValid = false;
        }
    }

    if(document.getElementById("designation").value == "") {
        document.getElementById("error-div").innerHTML += '<div class="alert alert-danger" id="error-div">Designation is required.</div>';
        isValid = false;
    }

    if(document.getElementsByName("gender").value == "") {
        document.getElementById("error-div").innerHTML += '<div class="alert alert-danger" id="error-div">Gender is required.</div>';
        isValid = false;
    }

    if(document.getElementById("salary").value == "") {
        document.getElementById("error-div").innerHTML += '<div class="alert alert-danger" id="error-div">Salary is required.</div>';
        isValid = false;
    }

    if(document.getElementById("location").value == "") {
        document.getElementById("error-div").innerHTML += '<div class="alert alert-danger" id="error-div">Location is required.</div>';
        isValid = false;
    }
    window.scrollTo(0,0);
    return isValid;
}