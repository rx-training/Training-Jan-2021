function validateDate(inputText)
{
    var dateformat = /^(0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])[\/\-]\d{4}$/;
    const max_year = 9999;
    const min_year = 1800;

    if(inputText.value.match(dateformat))
    {
        var opera1 = inputText.value.split('/');
        var opera2 = inputText.value.split('-');
        lenopera1 = opera1.length;
        lenopera2 = opera2.length;

        if (lenopera1>1)
        {
            var pdate = inputText.value.split('/');
        }
        else if (lenopera2>1)
        {
            var pdate = inputText.value.split('-');
        }
        var mm  = parseInt(pdate[0]);
        var dd = parseInt(pdate[1]);
        var yy = parseInt(pdate[2]);

        var listOfDays = [31,28,31,30,31,30,31,31,30,31,30,31];
        if (mm==1 || mm>2)
        {
            if (dd>listOfDays[mm-1])
            {
                alert('Invalid date format!');
                return false;
            }
        }
        if (mm==2)
        {
            var lyear = false;
            if (!(yy % 4)) 
            {
                lyear = true;
            }
            if ((lyear==false) && (dd>=29))
            {
                alert('Invalid date format!');
                return false;
            }
            if ((lyear==true) && (dd>29))
            {
                alert('Invalid date format!');
                return false;
            }
        }
        if ((yy > max_year) || (yy < min_year))
        {
            alert('Invalid date format!');
            return false;
        }
    }
    else
    {
        alert("Invalid date format!");
        return false;
    }
}
