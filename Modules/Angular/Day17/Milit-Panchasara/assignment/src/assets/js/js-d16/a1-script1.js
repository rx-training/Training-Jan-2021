function checkDate(){
    var date = document.getElementById('date').value.trim();
    if(date == "")
    {
        alert('Please insert a date');
        document.getElementById('date').value="";
        return;
    }
    var dateComponents = date.split('-');

    if(dateComponents.length != 3 || dateComponents[0].length != 2 || dateComponents[1].length != 2 || dateComponents[2].length != 4){
        alert('plz use valid format');
        document.getElementById('date').value="";
        return;
    }

    var year = dateComponents[2];
    if(parseInt(year) < 1950 || parseInt(year) > (new Date()).getFullYear() || isNaN(parseInt(year)))
    {
        alert('invalid year!');
        document.getElementById('date').value="";
        return;
    }

    var month = dateComponents[0];
    if(parseInt(month) < 1 || parseInt(month) > 12 || isNaN(parseInt(month)))
    {
        alert('invalid month!');
        document.getElementById('date').value="";
        return;
    }

    var daysCount = new Date(year, month, 0).getDate(); // month is 0 indexed, date 0 will give last date of previous month
    var day = dateComponents[1];

    date = new Date(year, month-1, day);
    var currentDate = new Date();
    if(parseInt(day) < 1 || parseInt(day) > daysCount || isNaN(parseInt(day)) || date > currentDate)
    {
        alert('invalid date!');
        document.getElementById('date').value="";
        return;
    }
    
    alert('Perfect !');
}