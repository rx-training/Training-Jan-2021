window.onload = () => {

    showProducts();

}

function showProducts(){
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const category = urlParams.get('category');

    //console.log(category);

    document.getElementById("category-header").innerHTML = category.toUpperCase();

    productsContainer = document.getElementById("products-container");

    var productsArray = JSON.parse(localStorage.getItem("products"));

    var productsStr = '<div class="row">';

    for(var i =0; i < productsArray.Products.length; i++){

        if(productsArray.Products[i].category.toLowerCase() == category.toLowerCase()){

            var images = productsArray.Products[i].imgurls.split(",");

            productsStr += '<div class="col-6 col-md-4 col-lg-2"> \
                                <a class="card-link" href="buy-product.html?productId=' + productsArray.Products[i].productId +'"> \
                                    <div class="card" style="border: none;"> \
                                        <div class="card-body"> \
                                            <div class="deals-img-container"> \
                                                <img class="img-fluid" src="' + images[0] + '" alt="" width="100%"> \
                                            </div> \
                                        </div> \
                                        <div class="text-center"> \
                                            <div class="text-muted">' + productsArray.Products[i].name + '</div> \
                                        </div> \
                                    </div> \
                                </a> \
                            </div>';
        }
    }

    productsContainer.innerHTML = productsStr;
}