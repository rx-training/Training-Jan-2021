function submit()
{
    var no1 = prompt("Please Enter Number");
    var no2 = prompt("Please Enter Number");
    var no3 = prompt("Please Enter Number");
    var temp = 0;

    if(no1 == "" && no2 == "" && no3 == "")
    {
        alert("Please Enter the number");
    }

    if(no1 > no2)
    {
        if(no1 > no3)
        {
            if(no1 > 40)
            {
                temp = parseFloat(temp) + parseFloat(no1);
            }
            if(no2 > 40)
            {
                temp = parseFloat(temp) + parseFloat(no2);
            }
            if(no3 > 40)
            {
                temp = parseFloat(temp) + parseFloat(no3);
            }
            alert("Gretest Number is :- " + no1 + "Sum is : " + temp);
        }
        else
        {
            if(no1 > 40)
            {
                temp = parseFloat(temp) + parseFloat(no1);
            }
            if(no2 > 40)
            {
                temp = parseFloat(temp) + parseFloat(no2);
            }
            if(no3 > 40)
            {
                temp = parseFloat(temp) + parseFloat(no3);
            }
            alert("Gretest Number is :- " + no3);
        }
    }
    else
    {
        if(no2 > no3)
        {
            if(no1 > 40)
            {
                temp = parseFloat(temp) + parseFloat(no1);
            }
            if(no2 > 40)
            {
                temp = parseFloat(temp) + parseFloat(no2);
            }
            if(no3 > 40)
            {
                temp = parseFloat(temp) + parseFloat(no3);
            }
            alert("Gretest Number is :- " + no2);
        }
        else
        {
            if(no1 > 40)
            {
                temp = parseFloat(temp) + parseFloat(no1);
            }
            if(no2 > 40)
            {
                temp = parseFloat(temp) + parseFloat(no2);
            }
            if(no3 > 40)
            {
                temp = parseFloat(temp) + parseFloat(no3);
            }
            alert("Gretest Number is :- " + no3);
        }
    }

    
    
    
}


/* Task 2 */


function check()
{
    var city = ["Ahmedabad","Surat","Vadodra","Rajkot","Vapi"];
    for(x of city)
    {
        alert(x);
    }
}