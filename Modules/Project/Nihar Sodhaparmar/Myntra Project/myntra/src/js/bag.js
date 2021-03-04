function checkLogin() {
    if (localStorage.getItem("userDetails") === null) {
        window.location.assign("login.html")
    }
}

checkLogin();

window.onload = () => {

    showBagItems();
}

function showBagItems() {
    var bag = document.getElementById("bag");

    var bagArray = JSON.parse(localStorage.getItem("bag"));

    if (bagArray.Product.length == "0") {
        bag.innerHTML = "<li class='list-group-item h3 px-5 text-center mt-5 font-weight-bold'>Bag is Empty</li>";
        return;
    }

    bag.innerHTML = "<li class='list-group-item h3 px-5 text-center mt-5 font-weight-bold'>Bag</li>";

    for (var i = 0; i < bagArray.Product.length; i++) {
        var offerStr = "";
        if (bagArray.Product[i].offer > 0) {
            offerStr = '<span style="color: #ff905a;"> (' + bagArray.Product[i].offer + '% OFF) </span>'
        }

        var images = bagArray.Product[i].imgurls.split(",");

        bag.innerHTML += "<li class='list-group-item px-5'>\
                            <div class='row my-4'>\
                                <div class='col-sm col-md-4 col-lg-3'>\
                                    <img src='" + images[0] + "' width='100%'>\
                                </div>\
                                <div class='col-sm col-md-8 col-lg-8 mx-auto wishlist-and-bag-content'>\
                                    <div class='h5 font-weight-bold'>" + bagArray.Product[i].brand + "</div>\
                                    <div class='h5 font-weight-bold'>" + bagArray.Product[i].name + "</div>\
                                    <div class='h5 font-weight-bold text-muted'> Size : " + bagArray.Product[i].size + "</div> \
                                    <div class='h5 font-weight-bold text-muted'> Quantity : " + bagArray.Product[i].quantity + "</div> \
                                    <div class='h5 font-weight-bold text-muted'> Rs. " + bagArray.Product[i].price + offerStr + "</div>\
                                    <div>\
                                        <button class='btn btn-danger mt-3' onclick='return removeFromBag(" + i + ")'>Remove From Bag</button>\
                                    </div>\
                                </div>\
                          </li>";
    }

}

function removeFromBag(index) {

    var bagArray = JSON.parse(localStorage.getItem("bag"));
    var productArray = JSON.parse(localStorage.getItem("products"));

    var productIndex = bagArray.Product[index].productId - 1;

    productArray.Products[productIndex].isInBag = false;

    bagArray.Product.splice(index, 1);

    localStorage.setItem("products", JSON.stringify(productArray));
    localStorage.setItem("bag", JSON.stringify(bagArray));

    location.reload();
}