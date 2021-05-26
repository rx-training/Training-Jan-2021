function getnumber()
{
    var a=document.getElementById("num").value;
    proc(a,calculation);


}
function calculation(num)
{
    document.getElementById("result").innerHTML="the Squre of the given number is:= " +num;
}
function proc(a,calculation)
{
    var num=a*a;
    calculation(num);
}