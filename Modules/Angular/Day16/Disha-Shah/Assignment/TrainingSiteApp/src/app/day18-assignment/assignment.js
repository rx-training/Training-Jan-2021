export function assignment(){
    function validateForm() {
        var eid = document.getElementById("eid").value;
        var pass = document.getElementById("pass").value;
        var errAr = new Array(2);
        var flag=1;

        function checkEId() {
            if(!eid.match(/^[0-9]{5,}$/)) {
                errAr[0] = "Enrollment Id should be of minimum 5 characters.";
                
            }
            else {
                errAr[0] ="";
               
            }
            return errAr[0];
        }

        function checkPass() {
            if(!pass.match(/^[a-zA-Z0-9]{8,}$/)) {
                errAr[1] = "Invalid Password";
            }
            else {
                errAr[1] = "";
            }
            return errAr[1];
        }

        if(eid == "") {
            errAr[0] = "Enrollment Id is required.";  
        }
        else{
            checkEId();
        }
        if(pass == "") {
            errAr[1] = "Password is required.";
            
        }
        else{
            checkPass();
        }

        document.getElementById("errid").innerHTML = "";
        for(var i=0; i<errAr.length; i++) {
            if(errAr[i] == "") {
                continue;
            }
            else{
                flag = 0;
                document.getElementById("errid").innerHTML += '<div class="alert alert-danger">' + errAr[i] + '</div>';
            }
        }

        if(flag == 1) {
            alert("Successfully Logged In!!")
            window.location.assign("Exam.html");  
        }
        return false;

    }

    function myFunc() { 
        var sidebarContent = document.getElementById("sidebar"); 
        sidebarContent.classList.toggle("active");
        return false; 
    }
}