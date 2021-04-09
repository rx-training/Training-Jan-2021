var count=0;

function p1(){
    setTimeout(()=> {
        console.log("Set Interval cleared after 10 seconds")
    },1000);
}

function p2(){
    count++;
    if(count==10)
    {
        console.log(count);
        clearInterval(x);
        p1();
    }
    else{
        console.log(count);
    }
}

let x = setInterval(p2,1000);