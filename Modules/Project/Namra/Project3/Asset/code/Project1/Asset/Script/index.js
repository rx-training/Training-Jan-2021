function signInPage() {
    window.location.assign("./Asset/Pages/Login.html");
}
window.onload = function () {
    var userData = JSON.parse(localStorage.getItem('user'));

    if (userData == null) {
    }
    else {
        document.getElementById('signIn').innerText = userData.Name;
        document.getElementById("SignINBUtton").innerHTML = 'See your profile <strong>' + userData.Name + '</strong>'
    }


    document.getElementById("cartCount").innerHTML = JSON.parse(localStorage.getItem("Cart")).Cart.length;
    

    showImage("Top Sellers");
    //showImage("Gifts in Video Games under $30");
    showImage("Top Beauty");
    showImage("Best Sellers in Baby");
    showImage("Home Decor Under $20");
    showImage("Wireless Product");
    showImage("Stuffed Animal");
    showImage("Video Games");
}

function signOut() {
    var userData = JSON.parse(localStorage.getItem('user'));
    if (userData == null) {
        localStorage.setItem('user', userData);
        window.location.href = "./Asset/Pages/Login.html";
    }
    else {
        window.location.href = "./Asset/Pages/Profile.html"
    }
}
function setUserNull() {
    var user = JSON.parse(localStorage.getItem("user"));
    user = null;
    localStorage.setItem('user', user);

    
}

function showImage(value) {
    var productsArr = JSON.parse(localStorage.getItem("Products"));
    var str = "";
    for (var i = 0; i < productsArr.Products.length; i++) {
        if (value.toLowerCase() == (productsArr.Products[i].Tag).toLowerCase()) {
            var img = productsArr.Products[i].Image_src;

            img = img.split('/');
            img[0] = "";
            img = img.join('/');
            img = "./Asset" + img


            str += "<td>\
                        <a href='view-index-product.html?Index=" + (productsArr.Products[i].Product_ID) + "'><img class='px-3' style='width : 100%;min-width:200px; height: 200px' src='" + img + "'></a>\
                    </td>";
        }
    }
    var id = value[0].toLowerCase() + value.substring(1);
    id = (id.split(" ")).join("");
    //console.log(str);
    document.getElementById(id).innerHTML = str;
}
function searchProduct1() {
    var searchOne = document.getElementById("search1").value;
    if (searchOne != "") {
        var str = "<div class='row'>";
        var productsArr = JSON.parse(localStorage.getItem("Products"));


        for (var i = 0; i < productsArr.Products.length; i++) {
            //console.log(productsArr.Products[i].Product_class);

            if (searchOne.toLowerCase() == (productsArr.Products[i].Product_brand).toLowerCase()) {
                //console.log(productsArr.Products[i].Image_src)
                var imgLink = productsArr.Products[i].Image_src;
                var imgArr = imgLink.split('/');
                var imgArray = imgArr.slice();

                var index = (((((imgArr[imgArr.length - 1].split('.'))[0]) / 4).toString()).split('.'))[0];
                index = index * 4;

                imgArr[imgArr.length - 1] = "";
                imgArr[0] = "";
                imgArr = imgArr.toString();
                imgArr = imgArr.replaceAll(',', '/');
                imgArr = "./Asset" + imgArr;
                str +=
                    '<div class="col-6 col-md-4 col-lg-2 my-3">\
                    <div class="card" style="border : none;">\
                        <div class="card-body">\
                                <div class="deals-img-container">\
                                <a href="view-index-product.html?Index=' + (productsArr.Products[i].Product_ID) + '"><img class="img-fluid mb-2" src="'+ imgArr + ((index) + 1) + '.' + ((imgArray[imgArray.length - 1].split('.'))[1]) + '" width = "100%" heigth="150px"></a>\
                            </div>\
                        </div>\
                        <div class="text-center">\
                            <div class="text-muted">'+ productsArr.Products[i].Prodcut_Name + '</div>\
                        </div>\
                    </div>\
                </div>';
            }
        }
        str += "</div>";
        document.getElementById("searchResult").style.display="inline";
        document.getElementById("searchResult").innerHTML = str;
        document.getElementById("carouselDisplay").style.display="none";
    }
    else{
        document.getElementById("searchResult").style.display="none";
        document.getElementById("carouselDisplay").style.display="inline";
    }
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    return false;

}
function searchProduct2() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    var searchOne = document.getElementById("search2").value;
    if (searchOne != "") {
        var str = "<div class='row'>";
        var productsArr = JSON.parse(localStorage.getItem("Products"));


        for (var i = 0; i < productsArr.Products.length; i++) {
            //console.log(productsArr.Products[i].Product_class);

            if (searchOne.toLowerCase() == (productsArr.Products[i].Product_brand).toLowerCase()) {
                //console.log(productsArr.Products[i].Image_src)
                var imgLink = productsArr.Products[i].Image_src;
                var imgArr = imgLink.split('/');
                var imgArray = imgArr.slice();

                var index = (((((imgArr[imgArr.length - 1].split('.'))[0]) / 4).toString()).split('.'))[0];
                index = index * 4;

                imgArr[imgArr.length - 1] = "";
                imgArr[0] = "";
                imgArr = imgArr.toString();
                imgArr = imgArr.replaceAll(',', '/');
                imgArr = "./Asset" + imgArr;
                str +=
                    '<div class="col-6 col-md-4 col-lg-2 my-3">\
                    <div class="card" style="border : none;">\
                        <div class="card-body">\
                                <div class="deals-img-container">\
                                <a href="view-index-product.html?Index=' + (productsArr.Products[i].Product_ID) + '"><img class="img-fluid mb-2" src="'+ imgArr + ((index) + 1) + '.' + ((imgArray[imgArray.length - 1].split('.'))[1]) + '" width = "100%" heigth="150px"></a>\
                            </div>\
                        </div>\
                        <div class="text-center">\
                            <div class="text-muted">'+ productsArr.Products[i].Prodcut_Name + '</div>\
                        </div>\
                    </div>\
                </div>';
            }
        }
        str += "</div>";
        document.getElementById("searchResult").style.display="inline";
        document.getElementById("searchResult").innerHTML = str;
    }
    else{
        document.getElementById("searchResult").style.display="none";
    }
    return false;
}
