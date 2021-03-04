function search() {

    var searchValue = document.getElementById("search-input").value;

    if (searchValue == "") {
        alert("Please provide value for search");
        return false;
    }

    searchValue = searchValue.trim();
    searchValue = searchValue.replace(/\s\s+/g, ' ');

    var searchArray = searchValue.split(" ");

    var productArray = JSON.parse(localStorage.getItem("products"));

    var isAvailable = false;

    var availableProductsStr = "";

    if (searchArray.length == 1) {

        availableProductsStr += '<div class="row">';
        for (var i = 0; i < productArray.Products.length; i++) {
            if (productArray.Products[i].category.toLowerCase() == searchArray[0].toLowerCase() || productArray.Products[i].brand.toLowerCase() == searchArray[0].toLowerCase()) {
                isAvailable = true;

                var images = productArray.Products[i].imgurls.split(",");
                //console.log(images);
                availableProductsStr += '<div class="col-6 col-md-4 col-lg-2"> \
                                                    <div class="card" style="border: none;"> \
                                                        <div class="card-body"> \
                                                            <div class="deals-img-container"> \
                                                                <img class="img-fluid" src="' + images[0] + '" alt="" width="100%"> \
                                                            </div> \
                                                        </div> \
                                                        <div class="text-center"> \
                                                            <div class="text-muted">' + productArray.Products[i].name + '</div> \
                                                            <div class="text-dark h5 mt-2"> OFFER : '+ productArray.Products[i].offer + '</div>\
                                                        </div> \
                                                        <div class="text-center">\
                                                            <button class="btn btn-primary mt-2 btn-sm" onclick="return applyOfferBtnClicked(' + i + ')">Apply Offer</button>\
                                                        </div>\
                                                    </div> \
                                            </div>';

                //console.log(productArray.Products[i]);
            }
        }
        availableProductsStr += '</div>';

        document.getElementById("availableProducts").innerHTML = availableProductsStr;
    }
    else if (searchArray.length == 2) {

        availableProductsStr += '<div class="row">';

        for (var i = 0; i < productArray.Products.length; i++) {
            if ((productArray.Products[i].category.toLowerCase() == searchArray[0].toLowerCase() && productArray.Products[i].brand.toLowerCase() == searchArray[1].toLowerCase())
                || (productArray.Products[i].brand.toLowerCase() == searchArray[0].toLowerCase() && productArray.Products[i].category.toLowerCase() == searchArray[1].toLowerCase())) {
                isAvailable = true;

                var images = productArray.Products[i].imgurls.split(",");
                //console.log(images);
                availableProductsStr += '<div class="col-6 col-md-4 col-lg-2"> \
                                                    <div class="card" style="border: none;"> \
                                                        <div class="card-body"> \
                                                            <div class="deals-img-container"> \
                                                                <img class="img-fluid" src="' + images[0] + '" alt="" width="100%"> \
                                                            </div> \
                                                        </div> \
                                                        <div class="text-center"> \
                                                            <div class="text-muted">' + productArray.Products[i].name + '</div> \
                                                            <div class="text-dark h5 mt-2"> OFFER : '+ productArray.Products[i].offer + '</div>\
                                                        </div> \
                                                        <div class="text-center">\
                                                            <button class="btn btn-primary mt-2 btn-sm" onclick="return applyOfferBtnClicked(' + i + ')">Apply Offer</button>\
                                                        </div>\
                                                    </div> \
                                            </div>';
                //console.log(productArray.Products[i]);
            }
        }

        availableProductsStr += '</div>';

        document.getElementById("availableProducts").innerHTML = availableProductsStr;
    }
    else {
        alert("Provide only two words for search");
        return;
    }

    if (isAvailable == false) {
        alert("Product is not Availabe")
    }

    //alert(isAvailable);

    //console.log(search);
    //alert(search);
}


function applyOfferBtnClicked(index) {

    console.log("onclick : " + index);

    var productArray = JSON.parse(localStorage.getItem("products"));

    var applyOfferModalContainer = document.getElementById("applyOfferModalContainer");

    applyOfferModalContainer.innerHTML = '\
    <div class="modal fade" id="applyOfferModal" role="dialog"> \
        <div class="modal-dialog modal-lg"> \
            <div class="modal-content"> \
                <div class="modal-header bg-primary text-white"> \
                    <h5 class="modal-title">Apply Offer</h5> \
                    <button class="close" data-dismiss="modal"> <span>&times;</span> </button> \
                </div> \
                <div class="modal-body"> \
                    <form> \
                        <div class="form-group"> \
                            <label class="form-control-label" for="oldoffer">Old Offer</label> \
                            <input type="text" class="form-control" id="oldoffer' + index +'" value ="' + productArray.Products[index].offer +' "> \
                        </div> \
                        <div class="form-group"> \
                            <label class="form-control-label" for="newoffer">New Offer</label> \
                            <input type="text" class="form-control" id="newoffer' + index + '"> \
                        </div> \
                    </form> \
                </div> \
                <div class="modal-footer"> \
                    <button class="btn btn-secondary" data-dismiss="modal" style="border-radius: 5px;">Close</button> \
                    <button class="btn btn-primary" onclick="return applyOffer(' + index +')">Save Changes</button> \
                </div> \
            </div> \
        </div> \
    </div> \
    ';

    $("#applyOfferModal").modal('show');

}

function applyOffer(index){
    var productArray = JSON.parse(localStorage.getItem("products"));

    productArray.Products[index].offer = document.getElementById("newoffer" + index).value;

    localStorage.setItem("products",JSON.stringify(productArray));

    //alert("Offer applied successfully");

    $("#applyOfferModal").modal('hide');

    document.getElementById("search-button").click();

    //location.reload();

}