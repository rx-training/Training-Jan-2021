var list = [];
async function getText(file) {
    let myObject = await fetch(file);
    let myText = await myObject.text();
    let product = JSON.parse(myText);
    var p = product.products;

    for (let x in p) {
        let str = JSON.stringify(p[x])
        let arr = str.split(",");
        let i_o = JSON.parse(arr);
        list.push(i_o);
    }
    console.log(list)
    var i = "";
    for (var j = 0; j < list.length; j++) {
        i += "<tr>";
        i += "<td>" + (j + 1) + "</td>";
        i += "<td>" + list[j].Name + "</td>";
        i += "<td>" + list[j].Price + "</td>";
        i += "<td>" + list[j].Location + "</td>";
        i += "<td><input type='text' pattern='[0-9]+' name='qty" + (j + 1) + "'" + " class='form-control' id='qty" + (j + 1) + "'></td>"
        i += '<td><button class="btn btn-danger" onclick="retrieve(' + "'" + (j + 1) + "'" + ',' + "'" + list[j].Name + "'" + ',' + "'" + list[j].Price + "'" + ',' + "'" + list[j].Location + "'" + ',' + "qty" + (j + 1) + ".value" + ')">Add Cart</button></td></tr>'
    }
    document.getElementById('productDetails').innerHTML = i;
}
var val = [];

function retrieve(id, name, price, loc, qty) {
    var obj = {
        "ProductID": id,
        "ProductName": name,
        "Price": price,
        "Location": loc,
        "Quantity": qty
    };
    val.push(JSON.stringify(obj));
    localStorage.setItem("productKey", val);
}

function display() {
    console.log(localStorage.getItem("productKey"));
}
getText("info.json");