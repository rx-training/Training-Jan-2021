
window.onload = function () {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const productIndex = parseInt(urlParams.get('Index'));
    document.getElementById("cartCount").innerHTML = JSON.parse(localStorage.getItem("Cart")).Cart.length;
    var userData = JSON.parse(localStorage.getItem('user'));

    if (userData == null) {
    }
    else {
        document.getElementById('signIn').innerText = userData.Name;
    }

    var productsArr = JSON.parse(localStorage.getItem("Products"));
    var imgLink = productsArr.Products[productIndex - 1].Image_src;
    var imgArr = imgLink.split('/');
    var imgArray = imgArr.slice();

    var index = (((((imgArr[imgArr.length - 1].split('.'))[0]) / 4).toString()).split('.'))[0];
    index = index * 4;

    imgArr[imgArr.length - 1] = "";
    imgArr[0] = "";
    imgArr = imgArr.toString();
    imgArr = imgArr.replaceAll(',', '/');
    imgArr = "./Asset" + imgArr;

    var arrayImageProducts = [imgArr + ((index) + 1) + '.' + ((imgArray[imgArray.length - 1].split('.'))[1]), imgArr + ((index) + 2) + '.' + ((imgArray[imgArray.length - 1].split('.'))[1]), imgArr + ((index) + 3) + '.' + ((imgArray[imgArray.length - 1].split('.'))[1]), imgArr + ((index) + 4) + '.' + ((imgArray[imgArray.length - 1].split('.'))[1])];

    var similarProduct = [];
    var productCat = productsArr.Products[productIndex - 1].Product_class;
    //alert(productCat);
    for (var j = 0; j < productsArr.Products.length; j++) {
        if (productsArr.Products[j].Product_class == productCat && productsArr.Products[j].Product_ID != productsArr.Products[productIndex -1].Product_ID) {
            similarProduct.push(productsArr.Products[j].Product_ID);
        }
    }
    console.log(similarProduct);
    var strSimilar = '<div class="row m-3 mb-5">';

    for (var j = 0; j < 6 && j < similarProduct.length; j++) {
        //console.log(j*2);
        var imgLink1 = productsArr.Products[similarProduct[j] - 1].Image_src;
        var imgArr1 = imgLink1.split('/');
        var imgArray1 = imgArr1.slice();

        var index1 = (((((imgArr1[imgArr1.length - 1].split('.'))[0]) / 4).toString()).split('.'))[0];
        index1 = index1 * 4;

        imgArr1[imgArr1.length - 1] = "";
        imgArr1[0] = "";
        imgArr1 = imgArr1.toString();
        imgArr1 = imgArr1.replaceAll(',', '/');
        imgArr1 = "./Asset" + imgArr1;
        

        strSimilar += '<div class="col-sm-4 col-md-2">\
                        <a class="card-link" href="view-index-product.html?Index=' + similarProduct[j] + ' "> \
                            <div class="card" style="border: none;"> \
                                <div class=" card-header text-center"> \
                                    <div class="text-muted">' + productsArr.Products[similarProduct[j] - 1].Prodcut_Name + '</div>\
                                </div> \
                                <div class="card-body"> \
                                    <div class="deals-img-container"  style = "max-width:300px;"> \
                                        <img class="img-fluid" src="' + (imgArr1 + ((index1) + 1) + '.' + ((imgArray1[imgArray1.length - 1].split('.'))[1]) )+ '" alt="" style ="width:100%;height:200px"> \
                                    </div> \
                                </div> \
                                <div class=" card-footer text-center"> \
                                    <span class="text-danger">Price : <i class="fas fa-rupee-sign"></i>'+productsArr.Products[similarProduct[j] - 1].Price+'</span><br>'+productsArr.Products[similarProduct[j]-1].Product_offer+'% off \
                                </div> \
                            </div> \
                        </a> \
                    </div>';
    }

    strSimilar += '</div>';
    console.log(strSimilar);
    //alert(imgArr +((index)+1)+'.'+ ((imgArray[imgArray.length-1].split('.'))[1]));
    document.getElementById("productName").innerHTML = (productsArr.Products[productIndex - 1].Prodcut_Name).toUpperCase();
    var str = '<div class="row mt-5">\
                    <div class="col-6 col-md-4 col-lg-3"> \
                        <div class="card" style="border: none;background-color: rgba(165, 165, 165, 0.1);"> \
                            <div class="card-body"> \
                                <div class="deals-img-container"> \
                                    <a href="" data-toggle="modal" data-target="#picturesProduct" class="hoverProduct"><img class="img-fluid my-2" src="' + arrayImageProducts[0] + '" alt="" width="100%" style="max-height:300px"></a> \
                                </div> \
                            </div> \
                        </div> \
                    </div>\
                    <div class="col-6 col-md-4 col-lg-3"> \
                        <div class="card" style="border: none;background-color: rgba(165, 165, 165, 0.1);"> \
                            <div class="card-body"> \
                                <div class="deals-img-container"> \
                                    <a href="" data-toggle="modal" data-target="#picturesProduct" class="hoverProduct"><img class="img-fluid my-2" src="' + arrayImageProducts[1] + '" alt="" width="100%" style="max-height:300px"></a> \
                                </div> \
                            </div> \
                        </div> \
                    </div>\
                    <div class="col-6 col-md-4 col-lg-3"> \
                        <div class="card" style="border: none;background-color: rgba(165, 165, 165, 0.1);"> \
                            <div class="card-body"> \
                                <div class="deals-img-container"> \
                                    <a href="" data-toggle="modal" data-target="#picturesProduct" class="hoverProduct"><img class="img-fluid my-2" src="' + arrayImageProducts[2] + '" alt="" width="100%" style="max-height:300px"></a> \
                                </div> \
                            </div> \
                        </div> \
                    </div>\
                    <div class="col-6 col-md-4 col-lg-3"> \
                        <div class="card" style="border: none;background-color: rgba(165, 165, 165, 0.1);"> \
                            <div class="card-body"> \
                                <div class="deals-img-container"> \
                                    <a href="" data-toggle="modal" data-target="#picturesProduct" class="hoverProduct"><img class="img-fluid my-2" src="' + arrayImageProducts[3] + '" alt="" width="100%" style="max-height:300px"></a>\
                                </div> \
                            </div> \
                        </div> \
                    </div>\
                </div>\
                <hr class="bg-light">\
                <div class="row my-4 rounded p-3" style="background-color:rgba(0,0,0,0.2)">\
                    <div class="col-lg-4 text-center ">\
                        \
                        <div class="row" style="font-size:1.5rem">\
                            <div class = "col text-white">\
                                <del class="text-danger">Price :'+ productsArr.Products[productIndex - 1].Price + '</del> ' + productsArr.Products[productIndex - 1].Product_offer + ' %\
                            </div>\
                        </div>\
                        <div class="row"style="font-size:2.5rem">\
                            <div class = "col text-white">\
                                Price : '+ ((productsArr.Products[productIndex - 1].Price - (productsArr.Products[productIndex - 1].Price * productsArr.Products[productIndex - 1].Product_offer / 100))).toFixed(2) + ' <i class="fas fa-rupee-sign"></i>\
                            </div>\
                        </div>\
                    </div>\
                    <div class="col-lg-8 text-white" style="font-size:1rem">\
                        <ul>\
                            <li>'+ (productsArr.Products[productIndex - 1].Prodcut_Name).toUpperCase() + ' is the best selling product on amazon. It is widely available to all countries on the planet.It has the best quality from all the products.</li>\
                            <li>'+ (productsArr.Products[productIndex - 1].Prodcut_Name).toUpperCase() + ' is coming from company ' + (productsArr.Products[productIndex - 1].Product_brand).toUpperCase() + ' & its price is ' + productsArr.Products[productIndex - 1].Price + '</li>\
                            <li>The '+ productsArr.Products[productIndex - 1].Product_offer + '% discount is applied. You can checkout by using the latest amazon pay. The product comes with rich finishing as shown in pictures.</li>\
                            <li>'+ (productsArr.Products[productIndex - 1].Prodcut_Name).toUpperCase() + ' in one the top seller, which is ' + productsArr.Products[productIndex - 1].Tag + '. As you can see, this ' + productsArr.Products[productIndex - 1].Product_class + ' is best of ' + (productsArr.Products[productIndex - 1].Product_brand).toUpperCase() + ' brand.</li>\
                        </ul>\
                    </div>\
                </div>\
                <div class="modal fade" tabindex="-1" id="picturesProduct" role="dialog">\
                    <div class="modal-dialog modal-lg" role="document">\
                        <div class="modal-content bg-dark">\
                            <div class="modal-header">\
                                <h5 class="modal-title text-white" style="font-size:2rem">'+ productsArr.Products[productIndex - 1].Prodcut_Name + '</h5>\
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">\
                                    <span aria-hidden="true" class="text-danger"  style="font-size:2rem">&times;</span>\
                                </button>\
                            </div>\
                            <div class="modal-body">\
                                <div class="row">\
                                    <div class="col-9"  id="picturesItem">\
                                        <img class="img-fluid my-2" id="picture1" src="' + arrayImageProducts[0] + '" alt="" width="100%">\
                                    </div>\
                                    <div class="col-1"></div>\
                                    <div class="col-2">\
                                        <div class="row my-2" onmouseover="bigImg(1)"><div class="col"><img class="img-fluid my-2" src="' + arrayImageProducts[0] + '" alt="" width="80%"></div></div>\
                                        <div class="row my-2" onmouseover="bigImg(2)"><div class="col"><img class="img-fluid my-2" src="' + arrayImageProducts[1] + '" alt="" width="80%"></div></div>\
                                        <div class="row my-2" onmouseover="bigImg(3)"><div class="col"><img class="img-fluid my-2" src="' + arrayImageProducts[2] + '" alt="" width="80%"></div></div>\
                                        <div class="row my-2" onmouseover="bigImg(4)"><div class="col"><img class="img-fluid my-2" src="' + arrayImageProducts[3] + '" alt="" width="80%"></div></div>\
                                    </div>\
                                </div>\
                            </div>\
                        </div>\
                    </div>\
                </div>\
                <div class="text-center my-5"><button class="btn btn-lg btn-outline-primary text-white mr-3 my-2" onclick="return addToCart('+ (productIndex - 1) + ')"><i class="fas fa-cart-plus"></i>&nbsp;Add to cart</button><button class="btn-lg ml-3 btn text-white my-2 btn-outline-success" onclick="return backToHome()"><i class="fas fa-home"></i>&nbsp;Back to Home Screen</button></div>' ;

    document.getElementById("viewProduct").innerHTML = str;
    document.getElementById("similarProductList").innerHTML = strSimilar;
}
function signInPage() {
    window.location.assign("./Asset/Pages/Login.html");
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

function addToCart(index) {
    if (JSON.parse(localStorage.getItem("user")) == null) {
        window.location.href = "./Asset/Pages/Login.html";
        return false;
    }
    var cartArr = JSON.parse(localStorage.getItem("Cart"));
    //var userArr = JSON.parse(localStorage.getItem("Users"));
    //var user = JSON.parse(localStorage.getItem("user"));
    var productsArr = JSON.parse(localStorage.getItem("Products"));

    /* var indexUser;
    for(var i=0;i<userArr.Users.length ; i++){
        if(user.UserName == userArr.Users[i].UserName){
            indexUser = i;
        }
    } */
    //userArr.Users[i].Cart.push(JSON.stringify(productsArr.Products[index]));
    //localStorage.setItem("Users",JSON.stringify(userArr));

    cartArr.Cart.push(productsArr.Products[index]);
    localStorage.setItem("Cart", JSON.stringify(cartArr));
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    location.reload();
}
function backToHome() {
    window.location.href = "index.html";
    return false;
}
function bigImg(pictureIndex) {
    //document.getElementById("picturesItem").innerHTML = "<img src='"+arrayImageProducts[picture]+"' width='100%'>";
    //alert(pictureIndex);

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const productIndex = parseInt(urlParams.get('Index'));
    document.getElementById("cartCount").innerHTML = JSON.parse(localStorage.getItem("Cart")).Cart.length;
    var productsArr = JSON.parse(localStorage.getItem("Products"));
    var imgLink = productsArr.Products[productIndex - 1].Image_src;
    var imgArr = imgLink.split('/');
    var imgArray = imgArr.slice();

    var index = (((((imgArr[imgArr.length - 1].split('.'))[0]) / 4).toString()).split('.'))[0];
    index = index * 4;

    imgArr[imgArr.length - 1] = "";
    imgArr[0] = "";
    imgArr = imgArr.toString();
    imgArr = imgArr.replaceAll(',', '/');
    imgArr = "./Asset" + imgArr;
    var link = imgArr + ((index) + pictureIndex) + '.' + ((imgArray[imgArray.length - 1].split('.'))[1]);

    document.getElementById("picturesItem").innerHTML = '<img class="img-fluid my-2" src="' + link + '" alt="" width="100%">';
}
