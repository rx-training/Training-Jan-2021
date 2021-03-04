
//you can change time of exam by changing this H M and S variable 
var h = 0, m=0, s=6;
function clock(){
    if( h == 0 && m==0 && s==0){
        document.getElementById('print').innerHTML = "Exam complete";
    } else {
        s = s - 1;
        if(s == -1 && m>=0){
            s=59;
            m-=1;
        }
        if(m == -1 && h >= 0){
            h-=1;
            m = 59;
        } 
        document.getElementById('print').innerHTML = h+" : "+ m +" : "+ s ;
    }
}
function hello(){
    document.getElementById('remain').innerHTML = "Remaining time";
    setInterval(clock,1000);
    var mypromise = new Promise(function(resolve,error){
        setTimeout(resolve,6000);
    });

    mypromise.then(
        function(){
            alert("exam complete");
        }   
    );
}




