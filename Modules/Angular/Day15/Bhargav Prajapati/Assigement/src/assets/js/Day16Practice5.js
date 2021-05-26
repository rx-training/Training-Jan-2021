var arr1=["mengo","banana","lemon","pinaple","kiwi"];
   document.getElementById("arr1").innerHTML=arr1;
   var arr2=arr1.pop();
   document.getElementById("pop1").innerHTML=arr2;
   document.getElementById("pop2").innerHTML=arr1;

   document.getElementById("push1").innerHTML="Hello";
    arr1.push("hello");
   document.getElementById("push2").innerHTML=arr1


   var arr3=arr1.shift(); 
   document.getElementById("shift1").innerHTML=arr3;
   document.getElementById("shift2").innerHTML=arr1;

    
   document.getElementById("deleted1").innerHTML=arr1[1];
   delete arr1[1];
   document.getElementById("deleted2").innerHTML=arr1;