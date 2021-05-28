// async function getjson(file) {
//     let myObject = await fetch(file);
//     let myjson = await myObject.json();
//     buildtable(myjson);
//   }
//  getjson('assignment.json');

//  function buildtable(data){

//     var table = document.getElementById("tabledata");

//     for ( var i= 0 ;i<data.length;i++){

//         var row = `<tr>
//                     <td>${data[i].ProductID}</td>
//                     <td>${data[i].ProductName}</td>
//                     <td>${data[i].price}</td>
//                     <td>${data[i].Quantity}</td>
//                 </tr> 
//         `
//         table.innerHTML += row;
//     }
//  }
// add to cart implmenttaion 


    localStorage.clear();
var addToCartButtons = document.getElementsByClassName('add-to-cart');

for (var i = 0; i < 4; i++) {

    var button = addToCartButtons[i];
    button.addEventListener('click', addToCartClicked);
}

function addToCartClicked(event) {
    //alert('item added');
    var buttons = event.target;

    var shopItem = buttons.parentElement.parentElement;

    var name = shopItem.getElementsByClassName('item-name')[0].innerText;
    var price = shopItem.getElementsByClassName('item-price')[0].innerText;

    additemToCart(name, price);
}
function additemToCart(name, price) {
   
    const cart_summary = [];
    var cart = {
        "name": name,
        "price": price
    }

    cart_summary.push(cart);

    if (localStorage.cart_summary) {
        let cart_added = localStorage.cart_summary += JSON.stringify(cart);
    }
    else {
        cart_added = localStorage.cart_summary += JSON.stringify(cart);
    }




    document.getElementById('cart').innerHTML += "<br>" + JSON.stringify((cart_summary)) + "<br></br>";
}
function mycart() {
   
    var grand_total = 0;
    var arrayprice = 0;
    var price_total =[0];
    var price = null;
    //console.log(price_total)
    var price = (localStorage.getItem("cart_summary") || "");
    console.log(price);
    var numbers = /[0-9]{3}/g;
    var price_total = price.match(numbers);
  //console.log(price_total);
   l = price_total.length;
   
   for( var i=0; i<l;i++){
        arrayprice =parseInt( price_total[i]);
  
        var grand_total = grand_total+ arrayprice;
   }
    // console.log(grand_total);
     document.getElementById('grand-total').innerText = grand_total;
     localStorage.clear();
}



