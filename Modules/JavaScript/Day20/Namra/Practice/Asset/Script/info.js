// async function getFile(file){
    //     var x = await fetch(file);
    //     var y = await x.json();
    //     console.log(y);
    // }
    
    // getFile("info.json");
    
    
var f = fetch("./Asset/Json/info.json");
    
f.then(result => result.json()).then(y => {
    var str = "";
    for(var i = 0; i < y.products.length ; i++ ){
        localStorage.setItem("Product"+(i+1) , JSON.stringify(y.products[i]));    
        str +="Name : "+ (JSON.parse(localStorage.getItem("Product"+(i+1)))).Name 
        +"<br>Price : "+(JSON.parse(localStorage.getItem("Product"+(i+1)))).Price
        +"&nbsp; &nbsp; Location : "+(JSON.parse(localStorage.getItem("Product"+(i+1)))).Location+"<br><hr>";
        //console.log((JSON.parse(localStorage.getItem("Product"+(i+1)))).Name);
    }
    document.getElementById("json").innerHTML=str;
});

