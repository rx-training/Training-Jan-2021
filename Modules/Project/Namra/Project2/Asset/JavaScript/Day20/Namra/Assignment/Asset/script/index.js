
var f = fetch("./Asset/Json/index.json");
var arr=[4,6,5,6];
var arr1= [4,6,5,6];  
f.then(result => result.json()).then(y => {
   
    for(var i = 0; i < y.products.length ; i++ ){
        localStorage.setItem("Product"+(i+1) , JSON.stringify(y.products[i]));    
    }

});

function addCart(index){
    if(arr[index-1]==0){
        document.getElementById("thing"+index).innerText="Out of Stock";
        document.getElementById("thing"+index).style.color="red";
        alert((JSON.parse(localStorage.getItem("Product"+(index)))).Name+" is out of stock");
        return false;
    }
    else if (arr[index-1] != arr1[index-1]){
        arr[index-1]--;
        var x = arr1[index-1] - arr[index-1];
        if(arr[index-1]==0){
            document.getElementById("thing"+index).innerText="Out of Stock";
            document.getElementById("thing"+index).style.color="red";
            document.getElementById("quantity"+index).innerText=x;
        }
        else{
            document.getElementById("thing"+index).innerText=arr[index-1];
            document.getElementById("quantity"+index).innerText=x;
        }
    }
    else{
        arr[index-1]--;  
        document.getElementById("thing"+index).innerText=arr[index-1];
        document.getElementById("tbodyCart").innerHTML+="<tr><td>"+(JSON.parse(localStorage.getItem("Product"+(index)))).Name+"</td><td>"+(JSON.parse(localStorage.getItem("Product"+(index)))).Price+"</td><td id='quantity"+index+"'>"+1+"</td></tr>"
    }
}
