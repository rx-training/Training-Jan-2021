function area(a,b){
    console.log(`area of rectangle is : ${a*b}`);
}
function perimeter(a,b)
{
    console.log(`perimeter of rectangle is : ${2*(a+b)}`);
}

exports.rectangle = {area,perimeter}