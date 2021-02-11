function assignment()
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
