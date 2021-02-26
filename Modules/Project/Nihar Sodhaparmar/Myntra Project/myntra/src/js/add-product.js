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

    document.querySelector("#images").addEventListener("change", function() {
        console.log(this.files);
        var category = document.getElementById("category").value;

        if(category == "select category"){
            alert("Please select category first");
            this.files= null;
            return false;
        }
        
        var imagesArray =  [];
        var imgurl = "/images/category/" + category.toLowerCase() + "";
        var strimages = '<div class="row">';
        var productImagesContainer = document.getElementById("product-images-container");
        
        for(var i = 0; i <this.files.length; i++){
            strimages +='<div class="col-6 col-md-3">\
                        <div class="card" style="border: none;">\
                            <div class="card-body">\
                                <div class="deals-img-container">\
                                    <img class="img-fluid" src="'+ imgurl + "/" + this.files[i].name +'" alt="" width="100%">\
                                </div>\
                            </div>\
                        </div>\
                    </div>';
        }

        strimages += '</div>'

        productImagesContainer.innerHTML = strimages;
    })
}

function addProduct(){
    var category = document.getElementById("category").value;
    var brand = document.getElementById("brand").value;
    var name = document.getElementById("name").value;
    var details = document.getElementById("details").value;
    var price = document.getElementById("price").value;
    var sizes = document.getElementById("sizes").value;
    var pincodes = document.getElementById("pincodes").value;
    var images = document.getElementById("images").files;
    var offer = document.getElementById("offer").value;

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

    var imagesArray =  [];

    var imgurl = "/images/category/" + category.toLowerCase() + "";
    
    for(var i = 0; i <images.length; i++){
        imagesArray.push(imgurl + "/" + images[i].name);
    }

    //console.log(imagesArray.toString());

    var productArray = JSON.parse(localStorage.getItem("products")) || {"Products" : [] };

    var productId;

    // if(productArray.Products.length == 0){
    //     productId = 1;
    // }
    // else{
    //     productId = productArray.Products[productArray.Products.length - 1].productId + 1;
    // }

    productId = productArray.Products.length +1;
    

    var product = {
        "productId" : productId,
        "name" : name,
        "category" : category,
        "brand" : brand,
        "details" : details,
        "price" : price,
        "sizes" : sizes,
        "pincodes" : pincodes,
        "returnable" : returnable,
        "imgurls" : imagesArray.toString(),
        "offer" : offer,
        "isInBag" : false,
        "isInWishlist": false,
    }

    productArray.Products.push(product);

    localStorage.setItem("products",JSON.stringify(productArray));

    location.assign("products.html");
    //location.reload();

    //387330,387331,387001,387002
    //console.log(product);

    // for(var i = 0; i < images.length; i++){
    //     alert(images[i].name);
    // }

    return false;
}