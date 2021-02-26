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

var formValidation = (input) => {
	summary = document.getElementById("summary")

	// Id
	if(input.empId.value == ""){
		document.getElementById("sId").innerHTML = "enter employee id";
	}

	// Name
	var regex = /^[a-zA-Z]+$/;
	if(regex.test(input.ename.value) == false){
		summary.innerHTML = "enter employee id";
	}
}