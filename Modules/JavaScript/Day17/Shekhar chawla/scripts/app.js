1// Practice1 Use the getElementById method to find the <p> element, and change its text to "Hello".
document.getElementById("demo").innerHTML = "Hello";

// Practice2 Use the getElementsByTagName method to find the first <p> element, and change its text to "Hello".
document.getElementsByTagName("p")[1].innerHTML = "Hello2";

// Practice3 Change the text of the first element that has the class name "test".
document.getElementsByClassName("test")[0].innerHTML = "Hello3";

// Practice4 Use HTML DOM to change the value of the image's src attribute.
document.getElementById("image").src = "images/kiger.webp"

// Practice5 Use HTML DOM to change the value of the input field.
document.getElementById("myText").value = "Value of input is changed"

// Practice6 Change the text color of the <p> element to "red".
document.getElementById("demo2").style.color = "red";

// Practice7 Use the CSS display property to hide the p element.
document.getElementById("demo3").style.display = "none";

// Practice8 Use Window.location object to navigate on another page
var google = () => {
	text = document.getElementById("ipGoogle").value;
	text = text.split(" ")
	search = "https://www.google.com/search?q=";
	for (var i = 0; i < text.length; i++) {
		if(text[i] == ""){
			break;
		} else {
			search += text[i];
			if(i != (text.length-1)){
				search += "+";
			}
		}
		
	}
	window.location.assign(search);
}

// Practice9 Use Window.history object to move to previous url in the history list
var back = () => {
	if( window.history.back() ) {
		window.history.back();
	}
	else {
		window.location.assign("https://www.google.com");
	}
	
}

// Practice10 Try to change windows height and width using Windows object
var newWin = () => {
	width = document.getElementById("width").value;
	height = document.getElementById("height").value;

	myWin = window.open("", "", "width="+width+",height="+height)
}
var resizeWin = () => {
	width = document.getElementById("width").value;
	height = document.getElementById("height").value;

	myWin = window.open("", "", "width="+width+",height="+height)
}


// Assignment
// 	Design a form for storing employee details. (EmployeeID, Employee name, age, Gender, designation, salary, location, Email ID, Date of Joining and contact number)
// 	Validation required
// 	EmployeeID should be at least 5 character long. use regular Expression
// 	Age should be a number
// 	Each field should contain value
// 	Email ID should be in proper format
// 	Date of joining should be in date format
// 	Location should be in the drop down list
// 	Use radio buttons for Gender
// Note: Show error message in summary box.


function printMsg(id, msg) {
  	document.getElementById(id).innerHTML = msg;
}


form = document.jform

form.addEventListener('keyup', function (event) {
	var idError = nameError = ageError = roleError = salaryError = locationError = dateError = true;


	// id...
	id = form.eId.value;
	if(id == ""){
		printMsg("idError", "Please enter id");
		form.classList.add('was-validated');
	}
	else if(id.length < 6) {
		form.eId.setCustomValidity("Invalid field")
        printMsg("idError", "Please enter at least 5 chars");
        form.classList.add('was-validated');
    }
    else {
        printMsg("idSuccess", "Looks good");
        form.eId.setCustomValidity("")
        form.classList.add('was-validated');
        idError = false;
    }

	// name...
	name = form.name.value
	var regex = /^[a-zA-Z\s]+$/;
	if (name == ""){
		printMsg("nameError", "Please enter name");
		form.classList.add('was-validated');
	} 
	else if(regex.test(name) === false) {
		form.name.setCustomValidity("Invalid field")
        printMsg("nameError", "Please enter a valid name");
        form.classList.add('was-validated');
    }
    else {
        printMsg("nameSuccess", "Looks good");
        form.name.setCustomValidity("")
        form.classList.add('was-validated');
        nameError = false;
    }

    // age
    age = form.age.value;
    regexAge = /^[0-9\s]+$/;
    if(age == ""){
    	printMsg("ageError", "Please enter age");
    	form.classList.add("was-validated");
    }
    else if( regexAge.test(age) == false){
    	form.age.setCustomValidity("Invalid age");
    	printMsg("ageError", "Please enter a number");
    	form.classList.add("was-validated");
    }
    else {
    	printMsg("ageSuccess", "Looks good");
    	form.age.setCustomValidity("")
    	form.classList.add("was-validated");
    	ageError = false;
    }

    // designation
    role = form.role.value
    if (role == ""){
        printMsg("roleError", "Please enter role");
        form.classList.add('was-validated');
    } 
    else if(regex.test(role) === false) {
        form.role.setCustomValidity("Invalid field")
        printMsg("roleError", "Please enter a valid role");
        form.classList.add('was-validated');
    }
    else {
        printMsg("roleSuccess", "Looks good");
        form.role.setCustomValidity("")
        form.classList.add('was-validated');
        roleError = false;
    }

    // salary
    salary = form.salary.value;
    if( regexAge.test(salary) == false){
    	form.salary.setCustomValidity("Invalid salary");
    	printMsg("salaryError", "Please enter a number");
    	form.classList.add("was-validated");
    } else {
    	printMsg("salarySuccess", "Looks good");
    	form.salary.setCustomValidity("")
    	form.classList.add("was-validated");
    	salaryError = false;
    }

    // location 
    if (form.location.value == "none"){
    	form.location.setCustomValidity("Invalid location")
    	printMsg("locationError" , "Please select location")
    	form.classList.add("was-validated");
        locationError = true;
    }
    form.location.addEventListener('change', function() {
        printMsg("locationSuccess", "Looks good");
        form.location.setCustomValidity("")
        form.classList.add("was-validated");
        locationError = false;
    });

    // Email
    regexEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    email = form.email.value;
    if( email == ""){
        printMsg("emailError", "Please enter email");
        form.classList.add('was-validated');
    }
    else if(regexEmail.test(email) === false) {
        form.email.setCustomValidity("Invalid field")
        printMsg("emailError", "Please enter a valid email");
        form.classList.add('was-validated');
    }
    else {
        printMsg("emailSuccess", "Looks good");
        form.email.setCustomValidity("")
        form.classList.add('was-validated');
        emailError = false;
    }

    // Date
    regexDate = /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/;
    date = form.date.value;
    if( date == ""){
        printMsg("dateError", "Please enter date");
        form.classList.add('was-validated');
    }
    else if(regexDate.test(date) === false) {
        form.date.setCustomValidity("Invalid field")
        printMsg("dateError", "Please enter a valid date");
        form.classList.add('was-validated');
    }
    else {
        printMsg("dateSuccess", "Looks good");
        form.date.setCustomValidity("")
        form.classList.add('was-validated');
        dateError = false;
    }
    
})
form.addEventListener('submit', function (event){
    if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();

        printMsg("submitError", "Please enter valid details");
    }
})      
