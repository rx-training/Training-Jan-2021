var proDuct = [" { “Name”: “Cheese”, “Price” : 2.50, “Location”: “Refrigerated foods”}","  { “Name”: “Crisps”, “Price” : 3, “Location”: “the Snack isle”}",   "{ “Name”: “Pizza”, “Price” : 4, “Location”: “Refrigerated foods”}", " { “Name”: “Chocolate”, “Price” : 1.50, “Location”: “the Snack isle”}" , "{ “Name”: “Self-raising flour”, “Price” : 1.50, “Location”: “Home baking”}", "{ “Name”: “Ground almonds”, “Price” : 3, “Location”: “Home baking”}"];

localStorage.setItem("proDuct",JSON.stringify(proDuct));

//let storageproductstring = localStorage.getItem("proDuct");
let savedproduct = JSON.parse(localStorage.getItem("proDuct"));
console.log("product object :" +savedproduct);

console.log("product length :"+savedproduct.length);



