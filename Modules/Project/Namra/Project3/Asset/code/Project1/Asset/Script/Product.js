window.onload = function (){
    var productsArray = JSON.parse(localStorage.getItem("Products"));
    var arrCategory =[];
    var brandArray = [];
    for (var i=0 ; i<productsArray.Products.length ; i++){
        arrCategory[i]=productsArray.Products[i].Product_class;
        brandArray[i]=productsArray.Products[i].Product_brand;
    }
    arrCategory = [...new Set(arrCategory)];
    brandArray = [...new Set(brandArray)];
    
    showProduct(productsArray,arrCategory,brandArray);
     
    //console.log(brandArray[0].toLowerCase());
    //console.log(productsArray.Products[0].brand.toLowerCase());

    /* var strProductsContainer = "";

    for (var i = 0; i < brandArray.length; i++) {
        strProductsContainer += '<div class="brand-header">' + brandArray[i].toUpperCase() + '</div>';

        for (var k = 0; k <arrCategory.length; k++) {
            strProductsContainer += '<div class="category-header">' + arrCategory[k].toUpperCase() + '</div>';

            strProductsContainer += '<div class="row">';
            for (var j = 0; j < productsArray.Products.length; j++) {

                if ((productsArray.Products[j].Product_brand).toLowerCase() == brandArray[i].toLowerCase() && (productsArray.Products[j].Product_class).toLowerCase() ==  arrCategory[k].toLowerCase()) {

                    var images = productsArray.Products[j].Image_src;
                    //console.log(images);
                    strProductsContainer += '<div class="col-6 col-md-4 col-lg-2"> \
                                                <a class="card-link" href="view-product.html?productIndex=' + j +'"> \
                                                    <div class="card" style="border: none;"> \
                                                        <div class="card-body"> \
                                                            <div class="deals-img-container"> \
                                                                <img class="img-fluid" src="' + images + '" alt="" width="100%"> \
                                                            </div> \
                                                        </div> \
                                                        <div class="text-center"> \
                                                            <div class="text-muted">' + productsArray.Products[j].Prodcut_Name + '</div> \
                                                        </div> \
                                                    </div> \
                                                </a> \
                                            </div>';
                }
            }
            strProductsContainer += '</div>';
        }
    
    }
    document.getElementById("productsContainer").innerHTML = strProductsContainer; */
    //
}
function showProduct(productsArray,arrCategory,brandArray){
     //showProduct(arrCategory,brandArray);
     
    //console.log(brandArray[0].toLowerCase());
    //console.log(productsArray.Products[0].brand.toLowerCase());

    var strProductsContainer = "";

    for (var i = 0; i < brandArray.length; i++) {
        strProductsContainer += '<hr><div class="brand-header display-4 text-center my-1">' + brandArray[i].toUpperCase() + '</div><hr>';

        for (var k = 0; k <arrCategory.length; k++) {
            //strProductsContainer += '<div class="category-header text-center">' + arrCategory[k].toUpperCase() + '</div>';

            strProductsContainer += '<div class="container"><div class="row">';
            for (var j = 0; j < productsArray.Products.length; j++) {

                if ((productsArray.Products[j].Product_brand).toLowerCase() == brandArray[i].toLowerCase() && (productsArray.Products[j].Product_class).toLowerCase() ==  arrCategory[k].toLowerCase()) {

                    var images = productsArray.Products[j].Image_src;
                    //console.log(images);
                    strProductsContainer += '<div class="col-6 col-md-4 col-lg-3"> \
                                                <a class="card-link" href="view-product.html?Index=' + j +'"> \
                                                    <div class="card" style="border: none;"> \
                                                        <div class=" card-header text-center"> \
                                                            <div class="text-muted">' + productsArray.Products[j].Prodcut_Name + '</div> \
                                                        </div> \
                                                        <div class="card-body"> \
                                                            <div class="deals-img-container"  style = "max-width:300px;"> \
                                                                <img class="img-fluid" src="' + images + '" alt="" style ="width:100%;max-width:250px"> \
                                                            </div> \
                                                        </div> \
                                                    </div> \
                                                </a> \
                                            </div>';
                }
            }
            strProductsContainer += '</div></div>';
        }
    
    }
    //console.log(strProductsContainer);
    document.getElementById("productsContainer").innerHTML = strProductsContainer;
}

function showData(value) {

    switch (value) {
        case '1':
            window.location.href="Admin.html";
            return false;

        case '2':
            window.location.href="Admin.html";
            return false;

        case '3':
            window.location.href="Delete.html"
            return false;

        case '4':
            window.location.href="Insert.html";
            return false;

        case '5':
            window.location.href = "User.html"
            return false;

        case '6':
            window.location.href="Products.html"
            return false;
            

        default:
            break;
    }
}
   /*  window.onload = () => {

        var brandArray = ["Levis", "hrx"];
        var productsArray = JSON.parse(localStorage.getItem("Products"));
        var categoriesArray = JSON.parse(localStorage.getItem("Categories"));
    
        var productsContainer = document.getElementById("productsContainer");
    
        //console.log(brandArray[0].toLowerCase());
        //console.log(productsArray.Products[0].brand.toLowerCase());
    
        var strProductsContainer = "";
    
        for (var i = 0; i < brandArray.length; i++) {
            strProductsContainer += '<div class="brand-header">' + brandArray[i].toUpperCase() + '</div>';
    
            for (var k = 0; k < categoriesArray.Category.length; k++) {
                strProductsContainer += '<div class="category-header">' + categoriesArray.Category[k].categoryName.toUpperCase() + '</div>';
    
                strProductsContainer += '<div class="row">';
                for (var j = 0; j < productsArray.Products.length; j++) {
    
                    if (productsArray.Products[j].brand.toLowerCase() == brandArray[i].toLowerCase() && productsArray.Products[j].category.toLowerCase() == categoriesArray.Category[k].categoryName.toLowerCase()) {
    
                        var images = productsArray.Products[j].imgurls.split(",");
                        //console.log(images);
                        strProductsContainer += '<div class="col-6 col-md-4 col-lg-2"> \
                                                    <a class="card-link" href="view-product.html?productIndex=' + j +'"> \
                                                        <div class="card" style="border: none;"> \
                                                            <div class="card-body"> \
                                                                <div class="deals-img-container"> \
                                                                    <img class="img-fluid" src="' + images[0] + '" alt="" width="100%"> \
                                                                </div> \
                                                            </div> \
                                                            <div class="text-center"> \
                                                                <div class="text-muted">' + productsArray.Products[j].name + '</div> \
                                                            </div> \
                                                        </div> \
                                                    </a> \
                                                </div>';
                    }
                }
                strProductsContainer += '</div>';
            }
    
        }
    
        productsContainer.innerHTML = strProductsContainer;
    
    } */
    /* var productImagesContainer = document.getElementById("product-images-container");

    
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
                                <div class="text-center">\
                                    <button class="btn btn-danger mt-3 btn-sm" onclick="return removeImage(' + i + ')">Remove</button>\
                                </div>\
                            </div>\
                        </div>\
                    </div>';
    }

    strimages += '</div>';

    productImagesContainer.innerHTML = strimages; */

function logOut() {
    window.location.href = "../../Index.html";
}
const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const productIndex = urlParams.get('productIndex');