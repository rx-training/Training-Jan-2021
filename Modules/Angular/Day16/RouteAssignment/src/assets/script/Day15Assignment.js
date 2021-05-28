var max=0;
var sum=0;

function outputCheck(age1, age2,age3){
    var age1=document.getElementById('age1').value;
    var age2=document.getElementById('age2').value;
    var age3=document.getElementById('age3').value;
    console.log(age1);
    window.alert(age2);
}
function calculateAge(age4,age5,age6){
    var age4=document.getElementById('age4').value;
    var age5=document.getElementById('age5').value;
    var age6=document.getElementById('age6').value;
    if(age4>age5)
    {
        if(age4>age6){
            max=age4;
        }
        else{max=age6;}
    }
    else{
        if(age5>age6){
            max=age5;
        }
        else{max=age6;}
    }
    window.alert("maximum age is "+max);
}
function changeHeading(){
    document.getElementById("head1").innerHTML="<font color='blue'>Practice 1"
}
//Day 15 assignment
function calculateOperation() {
    var form1 = document.getElementById('form1');
    var num1 = parseInt(document.getElementById('number1').value);
    var num2 = parseInt(document.getElementById('number2').value);
    var operation = form1.elements["operation"].value;
    var ans;

    if(isNaN(num1) || isNaN(num2))
    {
        alert("Enter Only Numeric Values");
        return false;
    }
    switch (operation) {
        case "add": ans = num1 + num2;
            break;

        case "sub": ans = num1 - num2;
            break;

        case "mul": ans = num1 * num2;
            break;

        case "div": ans = num1 / num2;
            break;

    }
    document.getElementById('resultForm1').innerText += " " + ans;
    return false;
}
function calculateOperation1() {
    var form1 = document.getElementById('form1');
    var num1 = parseInt(document.getElementById('number1').value);
    var num2 = parseInt(document.getElementById('number2').value);
    var operation = form1.elements["operation1"].value;
    var ans;

    if(isNaN(num1) || isNaN(num2))
    {
        alert("Enter Only Numeric Values");
        return false;
    }
    switch (operation) {
        case "add": ans = num1 + num2;
            break;

        case "sub": ans = num1 - num2;
            break;

        case "mul": ans = num1 * num2;
            break;

        case "div": ans = num1 / num2;
            break;

    }
    document.getElementById('resultForm1').innerText += " " + ans;
    return false;
}

function resetForm1(){
    document.getElementById('resultForm1').innerText = "Result is :";
}

//Day 16 assignment
function dateCheck(){
    var dateEnter = document.getElementById('dateValue').value;
    var date = new Date();
    if(dateEnter==""){
        alert("Enter date");
        return false;
    }

    var pat = /\d{2}-\d{2}-\d{4}$/;
    if(!pat.test(dateEnter)){
        alert("Enter date in specified format.")
        return false;
    }
    
    var arrayDate = dateEnter.split('-');
    
    var m = arrayDate[0];
    var d = arrayDate[1];
    var y = arrayDate[2];

    var leapYear = false;
    if(y%4==0)
            {
                if(y%100==0)
                {
                    if(y%400==0)
                    {
                        leapYear = true;
                    }
                }
                else
                {
                    leapYear = true;
                }
            }

    if(y <= 0 || y > date.getFullYear()){
        alert("Please Enter Valid Year");
        return false;
    }
    if( m <= 0 || m > 12){
        alert("Please Enter Valid Month");
        return false;
    }
    if( (d <= 0 || d > 31) || ((m==4 || m==6 || m==9 || m==11) && d==31) || (m==2 && d>29)){
        alert("Please Enter Valid Day");
        return false;
    }

    if(!leapYear && d > 28 && m == 2){
        alert("Enter Valid day");
        return false;
    }

    document.getElementById('dateToday').innerHTML= "Entered date : " + d +" / " + m + " / " + y ;
    return false; 
}
//Day17 Assignment
function assignment17()
{
    var EmployeeID = document.getElementById("EmployeeID").value;
    var EmployeeName = document.getElementById("EmployeeName").value;
    var EmployeeAge = document.getElementById("EmployeeAge").value;
    var EmployeeDesignation = document.getElementById("EmployeeDesignation").value;
    var EmployeeSalary= document.getElementById("EmployeeSalary").value;
    var EmployeeLocation = document.getElementById("EmployeeLocation").value;
    var EmployeeEmail = document.getElementById("EmployeeEmail").value;
    var EmployeeDate = document.getElementById("EmployeeDate").value; 
    var EmployeeContact = document.getElementById("EmployeeContact").value;    

    
    var arrReview= new Array(7);
    var patternId = /\d{5}$/;
    if(!patternId.test(parseInt(EmployeeID)) || EmployeeID == ""){
        arrReview[0] ="Enter Valid Id<br>"
    }
    else{
        arrReview[0]="";
    }

    if(EmployeeName =="")
    {
        arrReview[1] ="Enter Valid Name<br>";  
    }
    else{
        arrReview[1]="";
    }
    
    if(EmployeeAge<18 || EmployeeAge >50 || EmployeeAge == "")
    {
        arrReview[2]="Enter age or Entered age is invalid<br>"
    }
    else
    {
        arrReview[2]="";
    }

    var gender ;
    var genderArray = document.getElementsByName('Gender');
    if(genderArray[0].checked)
    {
        gender = "Male";
    }
    else{
        gender = "Female"
    }
    //alert(EmployeeDesignation);
    if(EmployeeSalary=="")
    {
        arrReview[3]="Enter Salary<br>";
    }
    else{
        arrReview[3]="";
    }
    //alert(EmployeeLocation);
    patternContact = /\d{10}$/;
    if(EmployeeContact=="" || !patternContact.test(parseInt(EmployeeContact))){
        arrReview[4]="Enter Contact or Entered Contact is invalid<br>";
    }
    else{

        arrReview[4]="";
    }

    patternEmail = /[a-z0-9A-Z.$%&#]*@[a-zA-Z0-9]*[.][c][o][m]$/;
    if(EmployeeEmail == "" || !patternEmail.test(EmployeeEmail))
    {
        arrReview[5]="Enter Email or Entered Email is invalid<br>";
    }
    else{

        arrReview[5]="";
    }
    var date = new Date();
    if(EmployeeDate=="")
    {
        arrReview[6]="Enter Date<br>";
    }
    else
    {
        var patDate = /\d{2}-\d{2}-\d{4}$/;
        if(!patDate.test(EmployeeDate)){
            arrReview[6]="Enter date in specified format.<br>"
        }
        else
        {
            var arrayDate = EmployeeDate.split('-');
    
            var m = arrayDate[0];
            var d = arrayDate[1];
            var y = arrayDate[2];


            if(y <= 2005 || y > date.getFullYear()){
                arrReview[6]="Please Enter Valid Year<br>"
            }
            else
            {
                if( m <= 0 || m > 12){
                    arrReview[6]="Please Enter Valid Month<br>"
                }
                else
                {
                    if( (d <= 0 || d > 31) || ((m==4 || m==6 || m==9 || m==11) && d==31) || (m==2 && d>29)){
                        arrReview[6]="Please Enter Valid Day<br>"
                    }
                    else{
                        var leapYear = false;
                        if(y%4==0){
                            leapYear=true;
                        }
                        if(!leapYear && d > 28 && m == 2){
                            arrReview[6]="Please Enter Valid Day<br>"
                        }
                        else{
                            arrReview[6]="";
                        }
                    }
                }
            }
        }
    }
    var review;
    for ( var x in arrReview){
        if(arrReview[x] != ""){
            review = true;
        }
    }
    if(!review){
        document.getElementById("reviewEmployee").style.display="none";
        document.getElementById("reviewEmployeeAlert").style.display="none";
        document.getElementById("resultEmployeeLabel").style.fontSize="x-large";
        document.getElementById("resultEmployeeLabel").innerHTML="Employee Details<br>";
        document.getElementById("resultEmployee").style.padding="20px";
        document.getElementById("resultEmployee").innerHTML="ID : " + parseInt(EmployeeID) + "<br><hr>Name : " +EmployeeName+ "<br>Age : " +EmployeeAge+ "<br>Gender : " + gender + "<br>Designation : " + EmployeeDesignation + " Developer<br>Salary : " + EmployeeSalary + "<br>Location : " +
        EmployeeLocation+ "<br>Email : " + EmployeeEmail + "<br>Joining Date : " + EmployeeDate + "<br>Contact Number : " +EmployeeContact;
        ;
    }
    else{
        document.getElementById("reviewEmployeeAlert").style.fontSize="x-large";
        document.getElementById("resultEmployeeLabel").style.display="none";
        document.getElementById("reviewEmployee").style.padding="20px";
        document.getElementById("reviewEmployeeAlert").innerHTML="Alert<br>";
        document.getElementById("reviewEmployee").innerHTML = arrReview[0] + arrReview[1] + arrReview[2] + arrReview[3] + arrReview[4] + arrReview[5] + arrReview[6] ;
    }
    return false;
}

// Day 19 Assignment
function index(){
    // different types of assigning json objects
    var project = new Object();
    project.name = "Radix Project";
    project.securityLevel = 15;
    project.updateDueDate = function(){
        return true;
    };

    var project2 = {};
    project2.name="radixWEb";

    var project3 = { 
        name : "name",
        security : 15,
        updateDueDate : function(){return true;},
        team : ['one', 'two', 'three']
    };
    var project4 ={
        tasks:[
            {
                taskname : 'first'
            },
            {
                taskname : 'second'
            }
        ]
    };
    var field = 'securityLevel';
    document.getElementById("json").innerHTML= "Project.name : "+ project.name+
        "<br>Project.updateDueDate() : "+project.updateDueDate()+
        "<br>Project['securityLevel'] : " + project["securityLevel"]+
        "<br>Project[field] : "+project[field]+
        "<br>Project2.name : "+project2.name+
        "<br>Project3.name : "+project3.name+
        "<br>Project3.team[2] : "+project3.team[2]+
        "<br>Project4.tasks[1].taskname : "+project4.tasks[1].taskname;
}
function prototypeProperty(){

    var project ={
        security : 2
    };
    var secretProject = Object.create(project);

    document.getElementById("prototype").innerHTML =
    "SectretProject.security = "+secretProject.security+
    "<br>typeof sectretproject.tostring = "+typeof secretProject.toString;

    document.getElementById("prototype2").innerHTML ="<br>secretProject.__proto__ === Object.protoType = " +secretProject.__proto__.__proto__ === Object.prototype;
}
function defineProperty(){

    var task = {};
    Object.defineProperty(task,'text',{
        value : 'Get this job done!',
        writable : true // without this it would be set to readonly by default
    });
    task.text = task.text + '..... NOW!';

    var task2 = {};
    Object.defineProperty(task2, 'text',{
        value:'Get this job done',
        enumerable : true // by default it would be false
    });
    for (var f in task){
        console.log(f);
    }

    var task3 = {};
    Object.defineProperty(task3, 'text', {
        value : 'get this job done ! ',
        configurable : true
    });
    Object.defineProperty(task3,"text",{
        value : "Done !"
    });

    var task4 = {
        _dueDate : '1/15/16'
    };
    Object.defineProperty(task4, 'dueDate', {
        get : function(){
            return this._dueDate;
        },set : function(newValue){
            this._dueDate = newValue ;
        }
    });
    task4.dueDate = '2/2/16';

    var task5 = {};
    Object.defineProperties(task5 , {
        'text' : {
            value : 'New Task'
        },
        'dueDate' : {
            value : '1/15/12'
        }
    });

    var task6 = {};
    Object.defineProperties(task6,{
        'text' : {
            value : 'new task'
        }
    });
    var descriptor = Object.getOwnPropertyDescriptor(task6, 'text');
    document.getElementById("define").innerHTML ="task.text : "+task.text+
    "<br>Task3 text confiurable : " + task3.text +
    "<br>Task4 Due date : " +task4.dueDate +
    "<br>task5 text : "+task5.text+
    "<br>task5 due date : " + task5.dueDate+
    "<br>Task6 descriptor text : "+descriptor;
}

function miscellaneous(){
    var project = {
        name  : 'Top Secret Project',
        dueDate : '1/1/2016'
    };
    var secret = Object.create(project);
    document.getElementById("miscellaneous").innerHTML =
    "project.hasOwnProperty('name') : "+project.hasOwnProperty('name')+
    "<br>project.hasOwnProperty('toString') : "+project.hasOwnProperty('toString')+
    "<br>project.__proto__.hasOwnProperty('name') : "+ project.__proto__.hasOwnProperty('toString')+
    "<br>isPrototypeOf(project) : "+Object.prototype.isPrototypeOf(project)+
    "<br>Object.prototype.isPrototypeOf(secret) : "+Object.prototype.isPrototypeOf(secret);
    
}

// Day 20


var f = fetch("../Json/index.json");
var arr=[4,6,5,6];
var arr1= [4,6,5,6];  
f.then(result => result.json()).then(y => {
   
    for(var i = 0; i < y.products.length ; i++ ){
        localStorage.setItem("Product"+(i+1) , JSON.stringify(y.products[i]));    
    }

});

function addCart(index){
    if(arr[index-1]==0){
        document.getElementById("thing"+index).innerText="Out of Stock";
        document.getElementById("thing"+index).style.color="red";
        alert((JSON.parse(localStorage.getItem("Product"+(index)))).Name+" is out of stock");
        return false;
    }
    else if (arr[index-1] != arr1[index-1]){
        arr[index-1]--;
        var x = arr1[index-1] - arr[index-1];
        if(arr[index-1]==0){
            document.getElementById("thing"+index).innerText="Out of Stock";
            document.getElementById("thing"+index).style.color="red";
            document.getElementById("quantity"+index).innerText=x;
        }
        else{
            document.getElementById("thing"+index).innerText=arr[index-1];
            document.getElementById("quantity"+index).innerText=x;
        }
    }
    else{
        arr[index-1]--;  
        document.getElementById("thing"+index).innerText=arr[index-1];
        document.getElementById("tbodyCart").innerHTML+="<tr><td>"+(JSON.parse(localStorage.getItem("Product"+(index)))).Name+"</td><td>"+(JSON.parse(localStorage.getItem("Product"+(index)))).Price+"</td><td id='quantity"+index+"'>"+1+"</td></tr>"
    }
}
