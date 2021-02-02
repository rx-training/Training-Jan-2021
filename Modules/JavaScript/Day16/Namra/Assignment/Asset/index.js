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