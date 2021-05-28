    var grandTotal = 0;

getJSON();

async function getJSON() {
    localStorage.clear();
    let x = await fetch("../assets/JSON/assignment.json");
    console.log(x);
    let y = await x.json();
    console.log(y);
    localStorage.setItem("products", JSON.stringify(y));
    console.log(y);
    document.getElementById("pContent").innerHTML = "";
    for(var i=0; i<y.products.length; i++){
        document.getElementById("pContent").innerHTML += '<tr><td>' + parseInt(i+1) +'</td><td>' + 
        y.products[i].Name + '</td><td>' + y.products[i].Price +
        '</td><td><input type="number" max="2" min="0" id="qty-' + i + '"</td> <td><button class="btn btn-danger" onclick="return myCart(' + i +')" id="cart-' + i + '">Add To Cart</button></td>';
    }
}

function myCart(pid) {
    var qty = document.getElementById("qty-"+pid).value;
    var cart = {
            "cId": pid,
            "cQty": qty
            };
    if(qty == "" || isNaN(qty)){
        alert("Please give valid quantity!!");
        return;
    }

    if(typeof Storage !== undefined) {

            var total = 0;
            
            for(var i=0; i<y.products.length; i++){
                
                if(i==pid) {
                    
                    if(localStorage.cartItems) {
                        localStorage.cartItems += JSON.stringify(cart);
                    }
                    else {
                        localStorage.cartItems = JSON.stringify(cart);
                    }
            
                document.getElementById("cart-"+pid).disabled=true;
                total = parseFloat(qty) * parseFloat(String(y.products[pid].Price));
                grandTotal += total;
                document.getElementById("modal-body").innerHTML += "<tr><td>" + y.products[cart.cId].Name + "</td><td>" + y.products[cart.cId].Price + 
                "</td><td>" + qty + "</td><td>" + total + "</td></tr>";
                }
                
            }
            
            document.getElementById("modalTotal").innerHTML = grandTotal;    
    }
    else {
        console.log("Web Storage not supported!!");
    }
    return false;
}

function cartSummary() {
    if(localStorage.cartItems){
        document.getElementById("checkout").disabled = false;
        console.log(localStorage.cartItems);
    }
    else{
        document.getElementById("checkout").disabled= true;
    }    
    return false;
}

function reset(){
    for(var i=0; i<y.products.length; i++) {
        document.getElementById('qty-'+i).value="";
        document.getElementById("cart-"+i).disabled=false;
    }
    document.getElementById("modal-body").innerHTML = "";
    document.getElementById("modalTotal").innerHTML = "";
    localStorage.removeItem("cartItems");
    return false;
}
