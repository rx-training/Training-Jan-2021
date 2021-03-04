window.onload = () => {

    var brandArray = ["Levis", "hrx", "wrogn", "roadster"];
    var productsArray = JSON.parse(localStorage.getItem("products"));
    var categoriesArray = JSON.parse(localStorage.getItem("categories"));

    var productsContainer = document.getElementById("productsContainer");

    //console.log(brandArray[0].toLowerCase());
    //console.log(productsArray.Products[0].brand.toLowerCase());

    var strProductsContainer = "";
    var strProductsContainer1 = "";
    var categoryStr = "";

    for (var i = 0; i < brandArray.length; i++) {
        strProductsContainer += '<div class="brand-header pt-4">' + brandArray[i].toUpperCase() + '</div>';

        for (var k = 0; k < categoriesArray.Category.length; k++) {
            //strProductsContainer += '<div class="category-header">' + categoriesArray.Category[k].categoryName.toUpperCase() + '</div>';
            categoryStr = "";
            strProductsContainer1 = "";
            var productWithCategorIsAvailable = false;
            //strProductsContainer += '<div class="row">';
            for (var j = 0; j < productsArray.Products.length; j++) {

                if (productsArray.Products[j].brand.toLowerCase() == brandArray[i].toLowerCase() && productsArray.Products[j].category.toLowerCase() == categoriesArray.Category[k].categoryName.toLowerCase()) {

                    var images = productsArray.Products[j].imgurls.split(",");
                    productWithCategorIsAvailable = true;
                    //console.log(images);
                    strProductsContainer1 += '<div class="col-6 col-md-4 col-lg-2"> \
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

            if(productWithCategorIsAvailable == true){
                categoryStr = '<div class="category-header pt-3">' + categoriesArray.Category[k].categoryName.toUpperCase() + '</div>';
            }
            strProductsContainer += categoryStr + '<div class="row">' + strProductsContainer1 + '</div>';
        }

    }

    productsContainer.innerHTML = strProductsContainer; 

}