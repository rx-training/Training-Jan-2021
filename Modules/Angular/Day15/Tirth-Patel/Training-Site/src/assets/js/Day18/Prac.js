var n1 = document.getElementById('number1');
        
function square() {
    var n1 = document.getElementById('number1').value;
    {
        function print(result) {
            document.getElementById('res').innerHTML = result;
        }
        function sq(n1, callback1) {
            res = n1 * n1;
            callback1(res);
        }
        sq(n1, print);
    }
}

var a = 20
{
    var a = 30;
    
}
//  console.log(a);//value changes globally
 
let ab = 20;
{
    let ab =30;
   // console.log(a);//value changes for this cope only will not changee globally
}
// console.log(ab);//value changes globally
// 
// let var1 = new  Promise(function(resolve, reject){

//        resolve("resolved");
//        reject("resjected");
// });
// var1.then(alert);
// let var2 = new  Promise(function(resolve, reject){

//       // resolve("resolved");
//        reject("rejected");
// });
// var2.then(alert).catch(alert);
 
function prom(){
    var num = document.getElementById("number").value;
    promm(num);}
    function promm(num){
    
    
    let pro = new Promise( function(resolve,reject){
       
        if(isNaN(num)){
            var a = [];
            var i=0;
            var l = num.length;
            for(i=l-1;i>=0;i--){
                a.push(num[i]);
            }
           setTimeout( resolve(a)

           ,5000);
        }
        else{
           setTimeout(reject("wrong input"),5000);
        }

    }); 
    pro.then(alert).catch(alert);
}