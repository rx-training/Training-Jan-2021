window.onload = () => {

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const productIndex = urlParams.get('productIndex');
    //console.log(productIndex);

    var productsArray = JSON.parse(localStorage.getItem("products"));

    var product = productsArray.Products[productIndex];
    //console.log(product);

    document.getElementById("productName").innerHTML = product.name;
    document.getElementById("productBrand").innerHTML = product.brand + " " + product.category;

    var productImagesContainer = document.getElementById("product-images-container");

    var images = product.imgurls.split(",");

    var strimages = '<div class="row">'; 

    for(var i = 0; i < images.length; i++)
    {
        strimages +='<div class="col-6 col-md-3">\
                        <div class="card" style="border: none;">\
                            <div class="card-body">\
                                <div class="deals-img-container">\
                                    <img class="img-fluid" src="'+ images[i] +'" alt="" width="100%">\
                                </div>\
                            </div>\
                        </div>\
                    </div>';
    }

    strimages += '</div>';

    productImagesContainer.innerHTML = strimages;

    document.getElementById("productDetails").innerHTML = product.details;

    var availableSizes = document.getElementById("availableSizes");

    var strSizeButtons = "";
    var sizes = product.sizes.split(",");

    for(var i = 0; i < sizes.length; i++){
        strSizeButtons += '<button class="size-button m-2">' + sizes[i] +'</button>'
    }

    availableSizes.innerHTML = strSizeButtons;

    document.getElementById("productPrice").innerHTML = "Rs. " + product.price;

    document.getElementById("pincodes").innerHTML = product.pincodes;

    document.getElementById("returnable").innerHTML = product.returnable;

}

function updateProduct(){
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const productIndex = urlParams.get('productIndex');

    location.assign("update-product.html?productIndex=" + productIndex);
    console.log(productIndex);
}

function deleteProduct(){
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const productIndex = urlParams.get('productIndex');

    var productArray = JSON.parse(localStorage.getItem("products"));

    productArray.Products.splice(productIndex,1);

    for(var i = 0; i <productArray.Products.length; i++){
        productArray.Products[i].productId = i + 1;
        //console.log(productArray.products[i]);
    }

    localStorage.setItem("products",JSON.stringify(productArray));

    location.assign("products.html");
    console.log(productIndex);
}