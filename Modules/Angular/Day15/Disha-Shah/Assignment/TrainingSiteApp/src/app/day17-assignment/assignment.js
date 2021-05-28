export function assignment(){
    function validateForm() {
        var eid = document.getElementById("eid").value;
        var ename = document.getElementById("ename").value;
        var age = document.getElementById("age").value;
        var designation = document.getElementById("designation").value;
        var salary = document.getElementById("salary").value;
        var location = document.getElementById("location").value;
        var email = document.getElementById("email").value;
        var doj = document.getElementById("dateOfJoining").value;
        var contact = document.getElementById("contact").value;
        var errArr = new Array(9);
        var i=0;

        function checkEId() {
            if(!eid.match(/^[0-9]{5,}$/)) {
                errArr[0] = "Employee Id should be of minimum 5 characters.";
                
            }
            else {
                errArr[0] ="";
               
            }
            return errArr[0];
        }

        function checkAge() {
            empAge = parseInt(age);

            if(isNaN(empAge) || empAge<18 || empAge>70) {
                errArr[2] = "Invalid Employee Age.";
                
            }
            else {
                errArr[2] ="";
               
            }
            return errArr[2];
        }

        function checkEmail() {
            if(!email.match(/^([a-zA-Z0-9_\$\#\%\&\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/)) {
                errArr[7] = "Invalid Email Id";
                
            }
            else {
                errArr[7] = "";
                
            }
            return errArr[7];
        }

        function checkContact() {
            if(!contact.match(/^[6-9]{1}[0-9]{9}$/)) {
                errArr[9] = "Invalid Contact";
                
            }
            else {
                errArr[9] = "";
                
            }
            return errArr[9];
        }

        if(eid == "") {
            errArr[0] = "Employee Id is required.";
            
        }
        else{
            checkEId();
        }
        if(ename == "") {
            errArr[1] = "Employee Name is required.";
            
        }
        else{
            errArr[1] = "";
            
        }
        if(age == ""){
            errArr[2] = "Age is required.";
            
        
        }
        else {
            checkAge();
        }
        if(document.getElementById("male").checked==false && document.getElementById("female").checked==false) {
            errArr[3] = "Gender is Required";
            
        }
        else{
            errArr[3] = "";
            
        }
        if(designation == "") {
            errArr[4] = "Employee Designation is required.";
            
        }
        else{
            errArr[4] ="";
            
        }
        if(salary == "") {
            errArr[5] = "Employee Salary is required.";
            
        }
        else{
            errArr[5] = "";
            
        }
        if(location == "") {
            errArr[6] = "Employee Location is required.";
            
        }
        else{
            errArr[6] ="";
            
        }
        if(email == ""){
            errArr[7] = "Email Id is required.";
            
        
        }
        else {
            checkEmail();
        }
        if(doj == "") {
            errArr[8] = "Employee Date of joining is required.";
            
        }
        else{
            errArr[8] = "";
            
        }
        if(contact == "") {
            errArr[9] = "Employee Contact is required.";
            
        }
        else{
            checkContact();
        }

        document.getElementById("errid").innerHTML = "";
        for(i; i<errArr.length; i++) {
            if(errArr[i] == "") {
                continue;
            }
            document.getElementById("errid").innerHTML += '<div class="alert alert-danger">' + errArr[i] + '</div>';
        }
        window.scrollTo(0,0);
        return false;
    }

    function myFunc() { 
        var sidebarContent = document.getElementById("sidebar"); 
        sidebarContent.classList.toggle("active");
        return false; 
    }
}