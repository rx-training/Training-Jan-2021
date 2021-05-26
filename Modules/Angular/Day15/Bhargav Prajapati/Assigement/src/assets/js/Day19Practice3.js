var i=10;
/*
javascript variable read this variable in following way
var i;//declare first  variable
i=10;//then initalizing the value
*/
document.getElementById("demo1").innerHTML= "The Value Of i := "+i;

var str="hello";
function show()
{
   document.getElementById("demo2").innerHTML= "The Value Of String :="+str;
   var str="welecome";
   /* the output  is un define because the  coplier ren the code as follow
   function show()
   {
          var str;
        document.getElementById("demo2").innerHTML=str;
        str="hello";
        thats why the value are not passed into the   document.getElementById("demo2").innerHTML=str; statement

   }
   */
}
show();
function display()
{
   var str;
   str="welecome"
 document.getElementById("demo3").innerHTML= "The Value Of String :=" +  str;
}
display();