var products;
async function getData(file) {
  let x = await fetch(file);
  let y = await x.json();

  products = y.products;

  for (var i = 0; i < products.length; i++) {
    var tr = document.createElement("tr");
    var th1 = document.createElement("th");

    var td2 = document.createElement("td");
    var td3 = document.createElement("td");
    var td4 = document.createElement("td");
    var td5 = document.createElement("td");

    var att = document.createAttribute("class");
    att.value = "form-control";
    var att2 = document.createAttribute("placeholder");
    att2.value = "Enter Qty";
    var att4 = document.createAttribute("id");
    att4.value = "in" + products[i].id;

    var text1 = document.createTextNode(products[i].id);
    var text2 = document.createTextNode(products[i].Name);
    var text3 = document.createTextNode(products[i].Price);
    var text4 = document.createTextNode(products[i].Location);
    var tinput = document.createElement("input");

    tinput.setAttributeNode(att);
    tinput.setAttributeNode(att2);
    tinput.setAttributeNode(att4);
    tinput.style.width = "100px";

    th1.appendChild(text1);
    td2.appendChild(text2);
    td3.appendChild(text3);
    td4.appendChild(text4);
    td5.appendChild(tinput);

    tr.appendChild(th1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(td5);

    document.getElementById("tableBody").appendChild(tr);
  }
}
getData("./assets/product.json");

function addToCart() {
  let arr = [];
  for (var i = 0; i < products.length; i++) {
    let z = document.getElementById("in" + products[i].id).value;
    let p = {
      id: products[i].id,
      Name: products[i].Name,
      Price: products[i].Price,
      Location: products[i].Location,
      Qty: z,
    };
    arr.push(p);
  }
  let a = JSON.stringify(arr);
  localStorage.setItem("Items", a);
}

function viewCart() {
  var pData = localStorage.getItem("Items");
  var prodData = JSON.parse(pData);
  document.getElementById("itemList").innerHTML = "";
  document.getElementById("total").innerHTML = "Grand Total : 0 Rs";

  let arr = [];
  for (let i = 0; i < prodData.length; i++) {
    if (prodData[i].Qty != "") {
      arr.push(prodData[i]);
      document.getElementById("itemList").innerHTML +=
        "<li>" +
        "Name : " +
        prodData[i].Name +
        "&nbsp &nbsp" +
        "Price : " +
        prodData[i].Price +
        " Rs " +
        "&nbsp &nbsp" +
        "Qty : " +
        prodData[i].Qty +
        "</li>";
    }
  }
  var total = 0;
  for (let i = 0; i < arr.length; i++) {
    total = total + arr[i].Qty * arr[i].Price;
  }
  document.getElementById("total").innerHTML = "Grand Total : " + total + " Rs";
}
