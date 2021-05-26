var secCount = 0;
var minCount = 0;
var hourCount = 0;

countTime();

var timer = setInterval(myTimer,1000);

function countTime()
{
    new Promise((resolve,reject) => {
        setTimeout(() => {resolve("Time is over! Your all answers have been submited. Thank you.");}, 3*3600*1000);
    }).then((message) => {
        alert(message);
        window.location.href='/';
    }, (error)=> alert(error)); 
    
}

function myTimer() {
    secCount++;
    if(secCount == 60){
        minCount++;
        secCount = 0;
    }
    if(minCount == 60)
    {
        minCount=0;
        hourCount++;
    }

    var seconds = (secCount < 10)? "0" + secCount : secCount.toString();
    var minutes = (minCount < 10)? "0" + minCount : minCount.toString();
    var hours = hourCount;
    var time = "0" + hours +":" + minutes + ":" + seconds;
    document.getElementById("timer").innerHTML = time;

    if(hourCount == 3)
    {
        clearInterval(timer);
    }
}