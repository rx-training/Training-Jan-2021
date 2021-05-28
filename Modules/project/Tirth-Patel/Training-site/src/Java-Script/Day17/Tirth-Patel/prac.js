// let reg = /tirth/ ;
// // let reg = /tirth/g ;
// var s = "hello this is tirth tirth";

// var result = reg.exec(s);

// // console.log(result);

//  var result2 = reg.test(s);
// //   console.log(result2);//

//   let result3 = s.match(reg);
//   console.log(result3);

//   var result5 = s.search(reg);
// //   console.log(result5);

// var reuslt4 = s.replace(reg,"html");
//     console.log(reuslt4);
//     let str = 'hello';
    
    function wopen(){
        window.open();
    }

   
    var x = document.getElementById('current').innerHTML = "current page location is " + window.location.href;
    console.log(x);

function newwindow(){
    window.location.assign("https://www.w3schools.com/js/js_window_location.asp");
}
 
function goback(){
 history.back();}
 function goprev(){
history.forward();}
  
 var widnow
function changes(){

     widnow = window.open("","", "width =500, height = 1000")
}
function changes2() {
    widnow.resizeTo(500, 500);
    widnow.focus();
}
