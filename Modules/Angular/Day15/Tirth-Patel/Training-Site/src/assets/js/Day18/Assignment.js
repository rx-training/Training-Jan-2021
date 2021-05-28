function start(){
    var sec=0;
    var min = 0 ;
    var hr = 0;
    
    var timer = setInterval(timer ,1000);
    
    function timer(){
        sec++;
        if(sec == 60)
        {
            min ++;
            sec =0;
        }
        if(min == 60){
            hr ++;
            min =0;
        }
        var totalmin = min;
        var totalhr = hr ;
        var totalsec = sec
        
        document.getElementById('timestart').innerHTML = totalhr +"hours " + totalmin + "minutes" +sec;
        if(hr==3)
        {
            mytime();
        }
    }
    }
    function mytime(){
       
       let times= new Promise (function(resolve,reject){
            setTimeout( resolve("time is over"), 1000);
    
        });
        times.then(alert);
    }