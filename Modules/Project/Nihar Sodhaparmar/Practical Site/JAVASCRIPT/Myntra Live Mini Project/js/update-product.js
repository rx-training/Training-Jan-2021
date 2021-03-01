window.onload = () => {

    function setCategory(){
        var categoriesArray = JSON.parse(localStorage.getItem("categories"));

        var select = document.getElementById("category");

        for(var i = 0; i < categoriesArray.Category.length; i++){
            var option = document.createElement('option');
            option.value = categoriesArray.Category[i].categoryName;
            option.text = categoriesArray.Category[i].categoryName;
            select.appendChild(option);
        }
    }

    setCategory();

    var productArray = JSON.parse(localStorage.getItem("products"));

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const productIndex = urlParams.get('productIndex');

    var product = productArray.Products[productIndex];

    //console.log(product);

    document.getElementById("category").value = product.category;
    document.getElementById("brand").value = product.brand;
    document.getElementById("name").value = product.name;
    document.getElementById("details").value = product.details;
    document.getElementById("price").value = product.price;
    document.getElementById("sizes").value = product.sizes;
    document.getElementById("pincodes").value = product.pincodes;

    var returnableArray = document.getElementsByName("returnable");

    if(product.returnable == "true"){
        returnableArray[0].checked = true;
    }
    else{
        returnableArray[1].checked = true;
    }

    showImages();
}


function showImages(){

    var productArray = JSON.parse(localStorage.getItem("products"));

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const productIndex = urlParams.get('productIndex');

    var product = productArray.Products[productIndex];

    var productImagesContainer = document.getElementById("product-images-container");

    if(product.imgurls == "")
    {
        productImagesContainer.innerHTML = "";``
        return;
    }
    var images = product.imgurls.split(",");

    console.log(images);

    var strimages = '<div class="row">'; 

    for(var i = 0; i < images.length; i++)
    {
        strimages +='<div class="col-6 col-md-3">\
                        <div class="card" style="border: none;">\
                            <div class="card-body">\
                                <div class="deals-img-container">\
                                    <img class="img-fluid" src="'+ images[i] +'" alt="" width="100%">\
                                </div>\
                                <div class="text-center">\
                                    <button class="btn btn-danger mt-3 btn-sm" onclick="return removeImage(' + i + ')">Remove</button>\
                                </div>\
                            </div>\
                        </div>\
                    </div>';
    }

    strimages += '</div>';

    productImagesContainer.innerHTML = strimages;
}

function updateProduct(){

    var productArray = JSON.parse(localStorage.getItem("products"));

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const productIndex = urlParams.get('productIndex');


    var category = document.getElementById("category").value;
    var brand = document.getElementById("brand").value;
    var name = document.getElementById("name").value;
    var details = document.getElementById("details").value;
    var price = document.getElementById("price").value;
    var sizes = document.getElementById("sizes").value;
    var pincodes = document.getElementById("pincodes").value;
    //var images = document.getElementById("images").files;

    if(category == "select category"){
        alert("Please select category");
        return false;
    }

    var returnableArray = document.getElementsByName("returnable");
    var returnable;

    if (returnableArray[0].checked) {
        returnable = "true";
    }
    else{
        returnable = "false";
    }

    productArray.Products[productIndex].category = category;
    productArray.Products[productIndex].brand = brand;
    productArray.Products[productIndex].name = name;
    productArray.Products[productIndex].details = details;
    productArray.Products[productIndex].price = price;
    productArray.Products[productIndex].sizes = sizes;
    productArray.Products[productIndex].pincodes = pincodes;
    productArray.Products[productIndex].returnable = returnable;

    localStorage.setItem("products",JSON.stringify(productArray));

    location.assign("view-product.html?productIndex=" + productIndex);

    return false;
}

function removeImage(index){

    var productArray = JSON.parse(localStorage.getItem("products"));

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const productIndex = urlParams.get('productIndex');

    var images =  productArray.Products[productIndex].imgurls.split(",");

    images.splice(index,1);

    productArray.Products[productIndex].imgurls = images.toString();

    //console.log(productArray);

    localStorage.setItem("products",JSON.stringify(productArray));

    showImages();

    return false;

    //console.log(images);
}

function addImage(){

    var images = document.getElementById("images").files;
    var category = document.getElementById("category").value;

    if(images.length == 0){
        alert("Please select image to Add");
        return false;
    }
    var productArray = JSON.parse(localStorage.getItem("products"));

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const productIndex = urlParams.get('productIndex');

    var imagesArray =  [];

    var imgurl = "/images/category/" + category.toLowerCase() + "";

    for(var i = 0; i <images.length; i++){
        imagesArray.push(imgurl + "/" + images[i].name);
    }

    var newImages = productArray.Products[productIndex].imgurls;
    if(newImages == "")
    {
        newImages = imagesArray.toString();
    }
    else{
        newImages = newImages + "," + imagesArray.toString();
    }
    
    console.log(newImages);

    productArray.Products[productIndex].imgurls = newImages;

    localStorage.setItem("products",JSON.stringify(productArray));
    
    showImages();
    return false;
}