var text = [" { “Name”: “Cheese”, “Price” : 2.50, “Location”: “Refrigerated foods”}","  { “Name”: “Crisps”, “Price” : 3, “Location”: “the Snack isle”}",   "{ “Name”: “Pizza”, “Price” : 4, “Location”: “Refrigerated foods”}", " { “Name”: “Chocolate”, “Price” : 1.50, “Location”: “the Snack isle”}" , "{ “Name”: “Self-raising flour”, “Price” : 1.50, “Location”: “Home baking”}", "{ “Name”: “Ground almonds”, “Price” : 3, “Location”: “Home baking”}"];
let text_serialized = JSON.stringify(text);
localStorage.setItem("text",text_serialized);

let text_deserialized = JSON.parse( localStorage.getItem("text"));

console.log(text_deserialized);


