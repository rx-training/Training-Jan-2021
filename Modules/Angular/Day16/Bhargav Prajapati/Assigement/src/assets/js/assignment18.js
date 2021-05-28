function start() {
    var a = document.getElementById("str").innerHTML = "Your Exam is Startd After 3hr Exam will be Autometically Submitted"
    for_promise();
    timing();

}
function for_promise() {
    let mypromise= new Promise(function (resolve, reject) {
        setTimeout(function () {
            let error = false;
            if (!error) {

                resolve();
                
           
}
            
            else {
                reject();
            }

        }, 10800000)
        

    })
    mypromise.then(function(){
        document.getElementById("str2").innerHTML="Your Exam Is Over Thank You :)";
    }).catch(function()
    {document.getElementById("str2").innerHTML="There are some issue please contect authorized person :("})
}
function timing(){
var secound = 0;
var minutes=0;
var hour=3;
var timer = setInterval(counter,1000);
function counter() {
    secound--;
    if(secound<0) {
        minutes--;
        secound=60;
    }
    if(minutes<0){
        hour--;
        minutes=59;
    }
    var sec
    if (secound<10) {
      sec=  "0" + secound;
    }
    else{
        sec=secound.toString();
        }
        var min
        if (minutes<10) {
      min=  "0" + minutes;
    }
    else{
        min=minutes.toString();
        }

    document.getElementById("timer").innerHTML = "Time Left: " + hour + ":" + min + ":" + sec;
    if(hour == 0 && minutes == 0 && secound == 0){
        clearInterval(timer);
    }
    return;
}
}