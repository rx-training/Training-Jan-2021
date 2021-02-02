function startExamTimer(){
  
    new Promise ( (resolve,reject) => {
        setTimeout( () => { resolve('Exam is Over ! Your answers submitted Successfully.'); }, 1000);
    }).then( (msg) => {
        alert(msg);
        window.location.href = 'resultAssignment4.html'
    }).catch( (err) => console.error(err));
    
}

var sec = 0;
var min = 0;
var hour = 0;

var timer = setInterval(showTime,1000);

function showTime(){
    sec++;
    if(sec == 60){
        min++;
        sec = 0;
    }
    if(min == 60)
    {
        min=0;
        hour++;
    }

    var seconds = (sec < 10)? "0" + sec : sec.toString();
    var minutes = (min < 10)? "0" + min : min.toString();
    var hours = hour;
    var time = "Time  :  " + "0" + hours +":" + minutes + ":" + seconds;
    document.getElementById("timeInterval").innerText = time;

    if(hourCount == 3)
    {
        clearInterval(timer);
    }
    
}
