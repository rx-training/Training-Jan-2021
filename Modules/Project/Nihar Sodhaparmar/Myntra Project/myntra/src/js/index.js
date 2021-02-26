window.onload = () => {

    function showDealsOfTheDay(){

        dealsOfTheDayContainer = document.getElementById("deals-of-the-day-container");

        var productsArray = JSON.parse(localStorage.getItem("products"));

        function sortProducts(field){
            return function(a, b){
                if(a[field] > b[field]){
                    return -1;
                }
                else if(a[field] < b[field]){
                    return 1;
                }

                return 0;
            }
        }

        productsArray.Products.sort(sortProducts("offer"));

        //console.log(productsArray);

        var dealsOfThDayStr = '<div class="row">';
        for(var i = 0; i < 6; i++){
            
            var images = productsArray.Products[i].imgurls.split(",");

            dealsOfThDayStr +='<div class="col-6 col-md-4 col-lg-2"> \
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

        dealsOfThDayStr += "</div>"

        dealsOfTheDayContainer.innerHTML = dealsOfThDayStr 
    }

    showDealsOfTheDay();
}