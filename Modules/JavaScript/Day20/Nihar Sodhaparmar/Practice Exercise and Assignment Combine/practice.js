async function storeData() {

    var x = await fetch("products.json");
    var y = await x.json();

    // for(var i = 0; i < y.products.length; i++){
    //     localStorage.setItem("product"+(i+1),JSON.stringify(y.products[i]));
    // }

    localStorage.setItem("products", JSON.stringify(y))
}

storeData();

function showData(element) {
    var products = (JSON.parse(localStorage.getItem("products"))).products;

    var productsTable = document.getElementById('productsTable');

    //console.log(products);
    for (var i = 0; i < products.length; i++) {
        var rowCount = productsTable.rows.length;
        var tr = productsTable.insertRow(rowCount);
        var td = document.createElement('td');

        td = tr.insertCell(0);
        td.innerHTML = i + 1;

        td = tr.insertCell(1);
        td.innerHTML = products[i].Name;

        td = tr.insertCell(2);
        td.innerHTML = products[i].Price;

        td = tr.insertCell(3);
        var ele = document.createElement('input');
        ele.setAttribute('id', 'quantity' + i);
        ele.setAttribute('type', 'text');
        ele.setAttribute('value', '');
        ele.setAttribute('class', 'form-control w-50 mx-auto');
        td.appendChild(ele);


        td = tr.insertCell(4);
        var button = document.createElement('input');
        button.setAttribute('id', 'product' + i);
        button.setAttribute('type', 'button');
        button.setAttribute('value', 'Add To Cart');
        button.setAttribute('class', 'btn btn-primary');
        button.setAttribute('onclick', 'addToCart(' + i + ')');
        td.appendChild(button);
    }
}

var cartArray = new Array();

function addToCart(x) {

    var quantity = document.getElementById('quantity' + x).value;

    if(quantity == "")
    {
        alert("Please Enter Valid Quantity");
        return false;
    }
    var products = (JSON.parse(localStorage.getItem("products"))).products;
    
    products[x].quantity = quantity;
    cartArray.push(products[x]);
    //localStorage.setItem('cart', JSON.stringify(products[i]));
    localStorage.setItem('cart', JSON.stringify(cartArray));
    viewCart();
}

function viewCart(){

    var products = JSON.parse(localStorage.getItem('cart'));
    var total = 0;
    var cartSummary = document.getElementById("cartSummary");

    if(products === null){
        cartSummary.innerHTML = "<li class='list-group-item h4 px-5 text-center'>Cart is Empty</li>";
        return;
    }
    cartSummary.innerHTML = "<li class='list-group-item h4 px-5 text-center'>Cart</li>";

    for(var i = 0; i < products.length; i++)
    {
        cartSummary.innerHTML += "<li class='list-group-item px-5'>Product Name : " + products[i].Name + "<br/> Quantity : " + products[i].quantity + "<br> Total Price : " + products[i].Price*products[i].quantity + "</li>";
        total += products[i].Price*products[i].quantity;
    }
    cartSummary.innerHTML += "<li class='list-group-item h5 px-5'> Grand Total : " + total + "</li>";
    console.log(products[0].quantity);
}

function emptyCart(){
    localStorage.removeItem('cart');
    location.reload();
}