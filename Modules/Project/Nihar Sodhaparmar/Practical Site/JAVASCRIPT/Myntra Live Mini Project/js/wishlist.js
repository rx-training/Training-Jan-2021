window.onload = () => {

    showWishlistItems();
    
}

function checkLogin(){
    if(localStorage.getItem("userDetails") === null){
        window.location.assign("login.html")
    }
}

checkLogin();

function showWishlistItems() {

    var wishlistProducts = document.getElementById("wishlistProducts");

    var wishlistArray = JSON.parse(localStorage.getItem("wishlist"));

    if (wishlistArray.Product.length == "0") {
        wishlistProducts.innerHTML = "<li class='list-group-item h3 px-5 text-center mt-5 font-weight-bold'>Wishlist is Empty</li>";
        return;
    }

    wishlistProducts.innerHTML = "<li class='list-group-item h3 px-5 text-center mt-5 font-weight-bold'>Wishlist Items</li>";

    for (var i = 0; i < wishlistArray.Product.length; i++) {
        var offerStr = "";
        if (wishlistArray.Product[i].offer > 0) {
            offerStr = '<span style="color: #ff905a;"> (' + wishlistArray.Product[i].offer + '% OFF) </span>'
        }

        var images = wishlistArray.Product[i].imgurls.split(",");

        wishlistProducts.innerHTML += "<li class='list-group-item px-5'>\
                            <div class='row my-4'>\
                                <div class='col-sm col-md-4 col-lg-3'>\
                                    <img src='" + images[0] + "' width='100%'>\
                                </div>\
                                <div class='col-sm col-md-8 col-lg-8 mx-auto wishlist-and-bag-content'>\
                                    <div class='h5 font-weight-bold'>" + wishlistArray.Product[i].brand + "</div>\
                                    <div class='h5 font-weight-bold'>" + wishlistArray.Product[i].name + "</div>\
                                    <div class='h5 font-weight-bold text-muted'> Size : " + wishlistArray.Product[i].size + "</div> \
                                    <div class='h5 font-weight-bold text-muted'> Quantity : " + wishlistArray.Product[i].quantity + "</div> \
                                    <div class='h5 font-weight-bold text-muted'> Rs. " + wishlistArray.Product[i].price + offerStr + "</div>\
                                    <div class='row'>\
                                        <div class='col-sm col-md-7 col-lg-4'>\
                                            <button class='btn btn-danger mt-3 btn-block' onclick='return removeFromWishlist(" + i + ")'>Remove From Wishlist</button>\
                                        </div>\
                                        <div class='col-sm col-md-5 col-lg-4'>\
                                            <button class='btn btn-primary mt-3 btn-block' onclick='return addToBagFromWishlist(" + i + ")'>Add To Bag</button>\
                                        </div>\
                                    </div>\
                                </div>\
                          </li>";
    }
}


function removeFromWishlist(index) {

    var wishlistArray = JSON.parse(localStorage.getItem("wishlist"));
    var productArray = JSON.parse(localStorage.getItem("products"));

    var productIndex = wishlistArray.Product[index].productId - 1;

    productArray.Products[productIndex].isInWishlist = false;

    wishlistArray.Product.splice(index, 1);

    localStorage.setItem("products", JSON.stringify(productArray));
    localStorage.setItem("wishlist", JSON.stringify(wishlistArray));

    location.reload();

}

function addToBagFromWishlist(index)
{
    var wishlistArray = JSON.parse(localStorage.getItem("wishlist"));
    var bagArray = JSON.parse(localStorage.getItem("bag"));
    var productArray = JSON.parse(localStorage.getItem("products"));

    var productIndex = wishlistArray.Product[index].productId - 1;

    wishlistArray.Product.splice(index, 1);
    bagArray.Product.push(productArray.Products[productIndex]);
    productArray.Products[productIndex].isInBag = true;
    productArray.Products[productIndex].isInWishlist = false;

    localStorage.setItem("bag",JSON.stringify(bagArray));
    localStorage.setItem("wishlist",JSON.stringify(wishlistArray));
    localStorage.setItem("products", JSON.stringify(productArray));

    location.reload();
}