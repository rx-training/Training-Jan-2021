function checkdate(){
   
    var date = document.getElementById('checkdates').value;
    //console.log(date);
    if(date == ""){
        alert("enter date");
        return false;
    }

    var arr = date.split("-");
    //console.log(arr);
    console.log(arr);
   var year = arr[2].toString();
    if ( (year.length) < 4){
        alert('enter valid year');
        return false;
    }
   
    
    var m , y, d ;
    m = parseInt( arr[0]) ;
    d = parseInt( arr[1]) ;
    y = parseInt( arr[2]) ;
    
    //console.log(m);
    if(isNaN(m)){
        alert('enter digit only');
        return false;
    }
    console.log(isNaN(m));
    //console.log(typeof(m));
    
    if(m<=0 || m>12){
        alert('not a valid month')
        return false;
    }

    if(d<=0 || d > 31 || ((m== 4 || m== 6 || m== 9 ||m== 11)&& d>30 ) || (m==2 && d>29)){
        alert('not a valid day');
        return false;
    }
    
    alert('date is valid');
}