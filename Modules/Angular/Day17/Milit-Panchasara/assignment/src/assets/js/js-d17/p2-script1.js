var newWindow = null;
console.log(window.screen);
function practice1(){
    window.history.back();
}

function practice2(){
    newWindow = window.open('/','_blank',"width=400,height=400");
    newWindow.resizeTo(500,500);
}

function practice3(){
    newWindow.resizeTo(1000,1000);
    window.resizeTo(1000,1000); 
}