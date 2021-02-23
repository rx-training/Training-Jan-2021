getText("info.json");

async function getText(file) {
    let myObject = await fetch(file);
    let myText = await myObject.text();
    let product = JSON.parse(myText);
    var p = product.products;

    for (let x in p) {
        let str = JSON.stringify(p[x])
        let arr = str.split(",");
        let i_o = JSON.parse(arr);
        console.log(i_o)
        document.getElementById('demo').innerHTML += i_o.Name + "  " +
            i_o.Price + "$  " + i_o.Location + "<br>";
    }
}


var text = { "products": [{ "Name": "Cheese", "Price": 2.50, "Location": "Refrigerated foods" }, { "Name": "Crisps", "Price": 3, "Location": "the Snack isle" }, { "Name": "Pizza", "Price": 4, "Location": "Refrigerated foods" }, { "Name": "Chocolate", "Price": 1.50, "Location": "the Snack isle" }, { "Name": "Self - raising flour", "Price": 1.50, "Location": "Home baking" }, { "Name": "Ground almonds", "Price": 3, "Location": "Home baking" }] }
localStorage.setItem("product", JSON.stringify(text));
var retrievedObject = localStorage.getItem("product");
console.log('retrievedObject: ', JSON.parse(retrievedObject));