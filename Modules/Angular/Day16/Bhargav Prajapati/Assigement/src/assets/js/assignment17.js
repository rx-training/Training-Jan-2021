function validation()
    {
        //Mobile Number validation
        var mobile_text= document.getElementById("mobile_number").value;
        var mobile_pattern=/^\d{10}$/;
        var check_mobile=mobile_pattern.test(mobile_text);
        var temp=0;
        if(check_mobile==false )
        {
            document.getElementById("invalid_mobile_number").innerHTML="Invalid Moblie Number"
            temp=1; 
        }
        else
        {
            document.getElementById("invalid_mobile_number").innerHTML=""
        }
        //Employee Number validate
        var emp_text=document.getElementById("employee_id").value;
        var emp_pattern= /^[0-9a-zA-z]+$/;
        var check_emp=emp_pattern.test(emp_text);
        len=emp_text.length;
        if(len>=5)
        {
            if(check_emp==false)
            {
                document.getElementById("invalid_employee_id").innerHTML="Employee_id Is not valid";
                temp=1;
            }
            else
        {
            document.getElementById("invalid_employee_id").innerHTML=" ";
        }
        }
        else if(len<5)
        {
        document.getElementById("invalid_employee_id").innerHTML="Employee_id Is atleast five character ";
        temp=1;
        }
        
        
        //mail id validation
        var email_text=document.getElementById("email_id").value;
        var email_pattern=/^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9-]+).([a-z]{2,10})$/
        var check_email=email_pattern.test(email_text);
        if(check_email==false )
        {
            document.getElementById("invalid_email_id").innerHTML="Invalid mail id";
            temp=1;

        }
        else
        {
            document.getElementById("invalid_email_id").innerHTML="";
        }
        var emp_name=document.getElementById("employee_name");
        var emp_age=document.getElementById("employee_age");
        var emp_designation=document.getElementById("designation")

        if( temp==1)
        {
            if(emp_name=="" || emp_age=="" || emp_designation=="" || mobile_text=="" || emp_text=="" || email_text=="" )
            {
                alert(" Some String is empty Plese fill the String before Submit")
            }
           
           
        }
       
       
    }