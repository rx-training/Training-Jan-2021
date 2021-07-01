// Practice1
var checkString = (inputId="stringCheck", outputId="stringInfo") => {
	var word = document.getElementById(inputId).value;

	if(word == ""){
		document.getElementById(outputId).innerHTML = "";
	} else if(!isNaN(word)){
		document.getElementById(outputId).innerHTML = "its a number";
	} else if(typeof(word) == "string") {
		document.getElementById(outputId).innerHTML = "its a string";
	}
}
// Practice2
var stringToArray = () => {
	var str = document.getElementById("toArray").value;
	
	str = str.split(" ");
	text = "<ul>";
	str.forEach(traverse);
	text += "</ul>";
	function traverse(word) {
		if(word != ""){
			text += "<li>" + word + "</li>" 
		}
	}

	if (str[0] == ""){
		document.getElementById("toArrayResult").innerHTML = "";
	}
	document.getElementById("toArrayResult").innerHTML = text;
	
}
// Practice3
var extractString = () => {
	var str = document.getElementById("extrString").value;
	var from = document.getElementById("extrFromString").value;
	var to = document.getElementById("extrToString").value;

	checkString("extrFromString", "extrFromOpString");	
	checkString("extrToString", "extrToOpString");	
	if(from>str.length || to>str.length) {
		document.getElementById("extrFromOpString").innerHTML = "please enter number less than string length";
		document.getElementById("extrToOpString").innerHTML = "please enter number less than string length";
	}

	result = str.substr(from, to);
	document.getElementById("extrResult").innerHTML = result;	
}
// Practice4
var todayDate = () => {
	var date = new Date();
	document.getElementById("date").textContent = date.getDate() +'/'+ (date.getMonth()+1) +'/'+ date.getFullYear();
}

// Practice5
var a = ["apple", "ball", "cat"];
var pushItem = () => {
	item = document.getElementById("push").value;
	a.push(item);
	
	text = '<li class="list-inline-item  btn bg-success text-white">' + a.join('</li><li class="list-inline-item btn bg-success text-white">') + "</li>"
	document.getElementById("pushed").innerHTML = text;
}

var popItem = () => {
	a.pop();

	text = '<li class="list-inline-item  btn bg-success text-white">' + a.join('</li><li class="list-inline-item btn bg-success text-white">') + "</li>"
	document.getElementById("pushed").innerHTML = text;
}
var shiftItem = () => {
	a.shift();

	text = '<li class="list-inline-item  btn bg-success text-white">' + a.join('</li><li class="list-inline-item btn bg-success text-white">') + "</li>"
	document.getElementById("pushed").innerHTML = text;
}
var unshiftItem = () => {
	item = document.getElementById("unshifting").value;
	a.unshift(item);

	text = '<li class="list-inline-item  btn bg-success text-white">' + a.join('</li><li class="list-inline-item btn bg-success text-white">') + "</li>"
	document.getElementById("pushed").innerHTML = text;
}
var deleteItem = () => {
	item = document.getElementById("delete").value;
	if(item<1 || item>a.length){
		document.getElementById("deleteMsg").innerHTML = "Value exceeds array length or value is negative";
	}
	item--;
	delete a[item];

	text = '<li class="list-inline-item  btn bg-success text-white">' + a.join('</li><li class="list-inline-item btn bg-success text-white">') + "</li>"
	document.getElementById("pushed").innerHTML = text;
}



// Assignment
var checkDate = () => {
	d = document.getElementById("ipDate").value;
	opTextBox = document.getElementById("opDate");

	d = d.split("-")

	for (var i = 0; i < d.length; i++) {
		if (isNaN(d[i])) {
			document.getElementById("dateMsg").innerHTML = "please enter digits[0-9] only";
			opTextBox.innerHTML = "";
		} 
		else {
			document.getElementById("dateMsg").innerHTML = "";
			// d = d.join("-")
			// opTextBox.innerHTML = d;
		}
	}
	if(d[0]<0 || d[0]>12){
		document.getElementById("dateMsg").innerHTML = "please enter correct months";
		opTextBox.innerHTML = "";
	}
	if(d[1]<0 || d[1]>31){
		document.getElementById("dateMsg").innerHTML = "please enter correct days";
		opTextBox.innerHTML = "";
	}
	// if (){
		// document.getElementById("dateMsg").innerHTML = "please enter correct months value";
		// opTextBox.innerHTML = "";
	// } else {
		d = d.join("-")
		opTextBox.innerHTML = d;
	// }
		
}


