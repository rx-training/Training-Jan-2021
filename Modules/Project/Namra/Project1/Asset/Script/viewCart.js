window.onload = function () {

    document.getElementById("cartCount").innerHTML = JSON.parse(localStorage.getItem("Cart")).Cart.length;
    var userData = JSON.parse(localStorage.getItem('user'));

    if (userData == null) {
    }
    else {
        document.getElementById('signIn').innerText = userData.Name;
    }
    var cartArr = JSON.parse(localStorage.getItem("Cart"));
    if (cartArr.Cart.length == 0) {
        document.getElementById("viewCart").innerHTML ="<hr class='m-5'><br><h1 class='text-center text-danger display-3 my-5 font-weight-bold'><i class='text-danger fas fa-shopping-cart'></i> &nbsp;Your cart is Empty</h1><br><hr class='m-5'>";
        document.getElementById("viewCart").style.backgroundColor = "rgba(0, 0, 0, 0.3)";
    }
    else {
        var str = "<div class='row'>";
        var grandTotal = 0;
        var tableStr = "<tr><th>ID</th><th>Product Name</th><th>Returnable</th><th>Price</th></tr>"
        for (var i = 0; i < cartArr.Cart.length; i++) {
            var imgLink = cartArr.Cart[i].Image_src;
            var imgArr = imgLink.split('/');
            var imgArray = imgArr.slice();

            var index = (((((imgArr[imgArr.length - 1].split('.'))[0]) / 4).toString()).split('.'))[0];
            index = index * 4;

            imgArr[imgArr.length - 1] = "";
            imgArr[0] = "";
            imgArr = imgArr.toString();
            imgArr = imgArr.replaceAll(',', '/');
            imgArr = "./Asset" + imgArr;

            //alert(imgArr +((index)+1)+'.'+ ((imgArray[imgArray.length-1].split('.'))[1]));
            str += '<div class="col-6 col-md-4 col-lg-3 mt-5"> \
                            <div class="card" style="border: none;background-color: rgba(2224, 166, 65, 0.4);"> \
                            <div class=" card-header text-center bg-dark"> \
                                <div class=" text-white">' + cartArr.Cart[i].Prodcut_Name + '</div> \
                            </div> \
                                <div class="card-body"> \
                                    <div class="deals-img-container"> \
                                        <a href="view-index-product.html?Index=' + (cartArr.Cart[i].Product_ID) + '"><img class="img-fluid my-2" src="' + imgArr +((index)+1)+'.'+ ((imgArray[imgArray.length-1].split('.'))[1])+ '" alt="" width="100%"> </a>\
                                    </div> \
                                </div> \
                            </div>\
                            </div>';
            grandTotal += cartArr.Cart[i].Price;
            tableStr +='<tr><th>'+(i+1)+'</th><td>'+cartArr.Cart[i].Prodcut_Name+'</td><td>'+cartArr.Cart[i].Returnable+'</td><td><i class="fas fa-rupee-sign"></i> '+cartArr.Cart[i].Price+'</td></tr>';
        }
        console.log(str);
        document.getElementById("viewCart").innerHTML = str +"</div>";
        document.getElementById("tableCart").innerHTML = tableStr;
        document.getElementById("bill").innerHTML='<div class="card border border-dark" style="background-color: rgba(255, 170, 66, 0.4);">\
                                                    <div class="card-header text-white" style="background-color: rgb(255, 119, 0)">\
                                                        <h3>Grand Total</h3>\
                                                    </div>\
                                                    <div class="card-body">\
                                                        <h4>Number of items : '+cartArr.Cart.length+'</h4>\
                                                        <h3>Total Bill : <i class="fas fa-rupee-sign"></i> '+grandTotal+'</h3>\
                                                    </div>\
                                                    <div class="card-footer text-center">\
                                                        <button class="btn-lg border border-dark text-white" onclick="return placeOrder()" style="background-color:rgb(255, 119, 0)">Place Your Order</button>\
                                                    </div>\
                                                </div>';
    }

    /*     var productsArr = JSON.parse(localStorage.getItem("Products"));
        var imgLink = productsArr.Products[productIndex-1].Image_src;
        var imgArr = imgLink.split('/');
        var imgArray = imgArr.slice();
        
        var index = (((((imgArr[imgArr.length-1].split('.'))[0])/4).toString()).split('.'))[0];
        index = index * 4;
        
        imgArr[imgArr.length-1]="";
        imgArr[0]="";
        imgArr = imgArr.toString();
        imgArr = imgArr.replaceAll(',','/');
        imgArr = "./Asset"+imgArr;
        
        //alert(imgArr +((index)+1)+'.'+ ((imgArray[imgArray.length-1].split('.'))[1]));
        document.getElementById("productName").innerHTML=(productsArr.Products[productIndex-1].Prodcut_Name).toUpperCase();
         var str = '<div class="row mt-5">\
                        <div class="col-6 col-md-4 col-lg-3"> \
                            <div class="card" style="border: none;background-color: rgba(165, 165, 165, 0.1);"> \
                                <div class="card-body"> \
                                    <div class="deals-img-container"> \
                                        <img class="img-fluid my-2" src="' + imgArr +((index)+1)+'.'+ ((imgArray[imgArray.length-1].split('.'))[1])+ '" alt="" width="100%"> \
                                    </div> \
                                </div> \
                            </div> \
                        </div>\ */
}
function signInPage(){
    window.location.assign("./Asset/Pages/Login.html");
}
function signOut(){
    var userData = JSON.parse(localStorage.getItem('user'));
    if(userData == null){
        localStorage.setItem('user',userData);
        window.location.href="./Asset/Pages/Login.html";
    }
    else{
        window.location.href="./Asset/Pages/Profile.html"
    }
}
function setUserNull(){
    var user = JSON.parse(localStorage.getItem("user")); 
    user = null;
    localStorage.setItem('user',user);
}

function placeOrder(){
    var cartArr = JSON.parse(localStorage.getItem("Cart"));
    cartArr.Cart.length=0
    alert("Your order placed successfully");

    localStorage.setItem("Cart",JSON.stringify(cartArr));
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    location.reload();
}