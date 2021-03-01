function dateCuurent(){
    var d = new Date();
    document.getElementById("dateToday").innerHTML=" Today's date : "+d.getDate()+" / "+(d.getMonth()+1)+" / "+d.getUTCFullYear();
    return false;
}