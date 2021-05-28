var productArray = [" { “Name”: “Cheese”, “Price” : 2.50, “Location”: “Refrigerated foods”}","  { “Name”: “Crisps”, “Price” : 3, “Location”: “the Snack isle”}",   "{ “Name”: “Pizza”, “Price” : 4, “Location”: “Refrigerated foods”}", " { “Name”: “Chocolate”, “Price” : 1.50, “Location”: “the Snack isle”}" , "{ “Name”: “Self-raising flour”, “Price” : 1.50, “Location”: “Home baking”}", "{ “Name”: “Ground almonds”, “Price” : 3, “Location”: “Home baking”}"];

localStorage.clear();
localStorage.setItem("products",JSON.stringify( productArray));

let Product = JSON.parse( localStorage.getItem("products"));

console.log(Product);

// reading data using fetchb api

async function getjson(file) {
    let myObject = await fetch(file);
    let myjson = await myObject.json();
    console.log(myjson);
  }
 getjson("exercise.json");
 

