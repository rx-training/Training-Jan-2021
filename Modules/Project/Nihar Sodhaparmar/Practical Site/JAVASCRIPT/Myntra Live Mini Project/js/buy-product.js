window.onload = () => {

    showProduct()

    //console.log(productId);
}


function showProduct() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const productId = urlParams.get('productId');

    var i = productId;

    var productContainer = document.getElementById("product-container");

    var productArray = JSON.parse(localStorage.getItem("products"));



    //for (var i = 0; i < productArray.Products.length; i++) {

        //if (productArray.Products[i].productId == productId) {

            var images = productArray.Products[i-1].imgurls.split(",");

            var productStr = '<div class="row">';
            for (var j = 0; j < images.length; j++) {

                productStr += '<div class="col-6 col-md-5 col-lg-3 mx-auto"> \
                                        <div class="card" style="border: none;"> \
                                            <div class="card-body"> \
                                                <div class="deals-img-container"> \
                                                    <img class="img-fluid" src="' + images[j] + '" alt="" width="100%"> \
                                                </div> \
                                            </div> \
                                        </div> \
                                </div>';
            }

            productStr += '</div>';

            productContainer.innerHTML = productStr;

            document.getElementById("productBrand").innerHTML = productArray.Products[i-1].brand;

            document.getElementById("productName").innerHTML = productArray.Products[i-1].name;

            var offerStr = "";
            if (productArray.Products[i-1].offer > 0) {
                offerStr = '<span style="color: #ff905a;"> (' + productArray.Products[i-1].offer + '% OFF) </span>'
            }

            document.getElementById("price").innerHTML = "RS. " + productArray.Products[i-1].price + " " + offerStr;

            var strSizeButtons = "";
            var sizes = productArray.Products[i-1].sizes.split(",");

            for (var k = 0; k < sizes.length; k++) {
                strSizeButtons += '<button class="size-button m-2">' + sizes[k] + '</button>'
            }

            document.getElementById("sizes").innerHTML =strSizeButtons;

            document.getElementById("productDetails").innerHTML = productArray.Products[i-1].details;

            showBagBtn(productArray,i);

            showWishlistBtn(productArray,i);

            localStorage.setItem("products", JSON.stringify(productArray));
            
        //}
    //}

}

function showBagBtn(productArray,i){
    if(productArray.Products[i-1].isInBag == true){
        document.getElementById("addToBagBtn").innerHTML = '<a href="bag.html" class="btn btn-block btn-pink btn-lg " style="letter-spacing: 0;"> <i class="fa fa-shopping-bag pr-2" aria-hidden="true"></i> GO TO BAG</a>'
    }
    else{
        document.getElementById("addToBagBtn").innerHTML = '<button class="btn btn-block btn-pink btn-lg " onclick="return addToBag('+ (i-1) +')" style="letter-spacing: 0;"> <i class="fa fa-shopping-bag pr-2" aria-hidden="true"></i> ADD TO BAG </button>';
        //productArray.Products[i-1].isInBag = true;
    }
}

function showWishlistBtn(productArray,i){
    if(productArray.Products[i-1].isInWishlist == true){
        document.getElementById("wishlistBtn").innerHTML = '<button class="btn btn-block btn-secondary btn-lg border"> <i class="fa fa-heart"></i> WISHLISTED</button>';
    }
    else{
        document.getElementById("wishlistBtn").innerHTML = '<button class="btn btn-block btn-lg btn-wishlist" onclick="addToWishlist(' + (i-1) + ')"> <i class="fa fa-heart"></i> WISHLIST</button>';
    }
}

function addToBag(index){
    //console.log(index);

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const productId = urlParams.get('productId');

    var i = productId;

    var productArray = JSON.parse(localStorage.getItem("products"));
    productArray.Products[index].isInBag = true;
    productArray.Products[index].quantity = 1;
    var sizes = productArray.Products[index].sizes.split(",");
    productArray.Products[index].size =  sizes[0];

    var bagArray = JSON.parse(localStorage.getItem("bag")) || {"Product" : []};
    
    bagArray.Product.push(productArray.Products[index]);

    localStorage.setItem("bag",JSON.stringify(bagArray));
    localStorage.setItem("products", JSON.stringify(productArray));

    showBagBtn(productArray,i);

    //location.reload();
    //location.assign("bag.html");
}

function addToWishlist(index){

    
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const productId = urlParams.get('productId');

    var i = productId;

    var productArray = JSON.parse(localStorage.getItem("products"));
    productArray.Products[index].isInWishlist = true;
    productArray.Products[index].quantity = 1;
    var sizes = productArray.Products[index].sizes.split(",");
    productArray.Products[index].size =  sizes[0];

    var wishlistArray = JSON.parse(localStorage.getItem("wishlist")) || {"Product" : []};

    wishlistArray.Product.push(productArray.Products[index]);

    localStorage.setItem("wishlist",JSON.stringify(wishlistArray));
    localStorage.setItem("products", JSON.stringify(productArray));

    showWishlistBtn(productArray,i);
}