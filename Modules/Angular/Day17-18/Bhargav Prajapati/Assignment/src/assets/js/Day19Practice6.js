var add=(function(){
    var cnt=0;
    return function()
    {
        cnt=cnt+1;
        return cnt;
    }
})();
function show()
{
    document.getElementById("show").innerHTML=add();
}