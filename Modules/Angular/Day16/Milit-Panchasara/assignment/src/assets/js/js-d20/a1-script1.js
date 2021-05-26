var data;
getItemsFromFile();
async function getItemsFromFile() {
    var file = await fetch('../../../../assets/json/d20a1.json');
    data = await file.text();
    
    data = JSON.parse(data);

    var tableBody = document.getElementById('items-table-body');

    for(var i=1; i <= data.products.length; i++)
    {
        tableBody.innerHTML += '<tr id="row-'+(i-1)+'">\
            <td>'+i+'</td>\
            <td>'+data.products[i-1].Name+'</td>\
            <td id="price-'+(i-1)+'">'+data.products[i-1].Price+'</td>\
            <td><input class="form-control w-25 text-center mx-auto" type="text" id="quantity-'+(i-1)+'" onkeyup="calculateTotal('+(i-1)+')"></td>\
            <td><button class="btn btn-outline-info" onclick="addItemToCart('+(i-1)+')" id="add-btn-'+(i-1)+'">Add to Cart</button></td>\
            <td id="total-'+(i-1)+'"></td>'
    }

    if(typeof(Storage) !== "undefined") {
        if(localStorage.cartItems){
            console.log(localStorage.cartItems);
            let itemsData = localStorage.cartItems;
            itemsData = itemsData.split("|");
            itemsData.forEach(item => {
                item = JSON.parse(item);
                var itemNumber = item.productIndex;
                document.getElementById('total-'+itemNumber).innerHTML = parseFloat(item.quantity)*parseFloat(data.products[itemNumber].Price);
                document.getElementById('quantity-'+itemNumber).value = item.quantity;
                document.getElementById('add-btn-'+itemNumber).disabled = true;
            });
        }
    }

}

function addItemToCart(item) {
    var quantityId = "quantity-"+item;
    var quantity = parseFloat(document.getElementById(quantityId).value);
    if(isNaN(quantity) || quantity > 25 || quantity < 1) {
        alert("Please enter the quantity between 1 and 25");
        return;
    }

    let itemData = {
        "productIndex": item,
        "quantity" : quantity
    }

    if(typeof(Storage) !== "undefined") {
        if(!localStorage.cartItems) {
            localStorage.setItem('cartItems', JSON.stringify(itemData));
        }
        else {
            localStorage.cartItems += "|" + JSON.stringify(itemData);
        }
        document.getElementById('add-btn-'+item).disabled = true;
    }
    else {
        alert("Storage is not supported!");
        return;
    }
}

function viewCartSummary() {
    if(typeof(Storage) !== "undefined") {
        if(localStorage.cartItems){
            console.log(localStorage.cartItems);
            document.getElementById('modal-body').innerHTML = '<ul id="items-list"></ul>';
            var grandTotal = 0;
            let itemsData = localStorage.cartItems;
            itemsData = itemsData.split("|");
            itemsData.forEach(item => {
                item = JSON.parse(item);
                document.getElementById('items-list').innerHTML+=
                    '<li>Product: '+ data.products[item.productIndex].Name + 
                    ',<br>Quantity: ' + item.quantity + 
                    ',<br>Total price: ' + (parseFloat(item.quantity) * parseFloat(data.products[item.productIndex].Price)) +
                    '</li><hr>';
                grandTotal += (parseFloat(item.quantity) * parseFloat(data.products[item.productIndex].Price));
            });

            document.getElementById('modal-body').innerHTML += '<h4>Grand Total: '+ grandTotal + '</h4>';
        }
        else {
            document.getElementById('modal-body').innerHTML = '<ul id="items-list"></ul><h4>Cart is empty</h4>';
            document.getElementById('checkout-btn').disabled = true;
        }
        
    }
}

function resetCartSummary() {
    if(typeof(Storage) !== "undefined") {
        localStorage.removeItem('cartItems');
        if(document.getElementById('items-list')){
            document.getElementById('items-list').innerHTML = "";
        }
        for(var i=0; i < data.products.length; i++)
        {
            document.getElementById('total-'+i).innerHTML = "";
            document.getElementById('quantity-'+i).value = null;
            document.getElementById('add-btn-'+i).disabled = false;
        }

        alert("Your cart is reset!")
    }
}

function calculateTotal(item) {
    var totalId = "total-"+item;
    var total = document.getElementById(totalId);

    var quantityId = "quantity-"+item;
    var quantity = parseFloat(document.getElementById(quantityId).value);
    if(isNaN(quantity) || quantity > 25 || quantity < 1) {
            total.innerHTML = ""
        return;
    }
    
    var priceId = "price-"+item;
    var price = document.getElementById(priceId).innerHTML;

    total.innerHTML = parseFloat(quantity) * parseFloat(price);
}