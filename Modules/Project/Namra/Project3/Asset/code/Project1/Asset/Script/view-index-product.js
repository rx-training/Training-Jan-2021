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
    var imgLink = productsArr.Products[productIndex-1].Image_src;
    var imgArr = imgLink.split('/');
    var imgArray = imgArr.slice();
    
    var index = (((((imgArr[imgArr.length-1].split('.'))[0])/4).toString()).split('.'))[0];
    index = index * 4;
    
    imgArr[imgArr.length-1]="";
    imgArr[0]="";
    imgArr = imgArr.toString();
    imgArr = imgArr.replaceAll(',','/');
    imgArr = "./Asset"+imgArr;
    
    //alert(imgArr +((index)+1)+'.'+ ((imgArray[imgArray.length-1].split('.'))[1]));
    document.getElementById("productName").innerHTML=(productsArr.Products[productIndex-1].Prodcut_Name).toUpperCase();
     var str = '<div class="row mt-5">\
                    <div class="col-6 col-md-4 col-lg-3"> \
                        <div class="card" style="border: none;background-color: rgba(165, 165, 165, 0.1);"> \
                            <div class="card-body"> \
                                <div class="deals-img-container"> \
                                    <img class="img-fluid my-2" src="' + imgArr +((index)+1)+'.'+ ((imgArray[imgArray.length-1].split('.'))[1])+ '" alt="" width="100%"> \
                                </div> \
                            </div> \
                        </div> \
                    </div>\
                    <div class="col-6 col-md-4 col-lg-3"> \
                        <div class="card" style="border: none;background-color: rgba(165, 165, 165, 0.1);"> \
                            <div class="card-body"> \
                                <div class="deals-img-container"> \
                                    <img class="img-fluid my-2" src="' + imgArr +((index)+2)+'.'+ ((imgArray[imgArray.length-1].split('.'))[1])+ '" alt="" width="100%"> \
                                </div> \
                            </div> \
                        </div> \
                    </div>\
                    <div class="col-6 col-md-4 col-lg-3"> \
                        <div class="card" style="border: none;background-color: rgba(165, 165, 165, 0.1);"> \
                            <div class="card-body"> \
                                <div class="deals-img-container"> \
                                    <img class="img-fluid" src="' + imgArr +((index)+3)+'.'+ ((imgArray[imgArray.length-1].split('.'))[1])+ '" alt="" width="100%"> \
                                </div> \
                            </div> \
                        </div> \
                    </div>\
                    <div class="col-6 col-md-4 col-lg-3"> \
                        <div class="card" style="border: none;background-color: rgba(165, 165, 165, 0.1);"> \
                            <div class="card-body"> \
                                <div class="deals-img-container"> \
                                    <img class="img-fluid" src="' + imgArr +((index)+4)+'.'+ ((imgArray[imgArray.length-1].split('.'))[1])+ '" alt="" width="100%"> \
                                </div> \
                            </div> \
                        </div> \
                    </div>\
                </div>\
                <div class="text-center my-5"><button class="btn btn-lg btn-outline-primary text-white mr-3 my-2" onclick="return addToCart('+(productIndex-1)+')"><i class="fas fa-cart-plus"></i>&nbsp;Add to cart</button><button class="btn-lg ml-3 btn text-white my-2 btn-outline-success" onclick="return backToHome()"><i class="fas fa-home"></i>&nbsp;Back to Home Screen</button></div>\
                ';

    document.getElementById("viewProduct").innerHTML = str; 
}
function signInPage(){
    window.location.assign("./Asset/Pages/Login.html");
}
function signOut(){
    var userData = JSON.parse(localStorage.getItem('user'));
    if(userData == null){
        localStorage.setItem('user',userData);
        window.location.href="./Asset/Pages/Login.html";
    }
    else{
        window.location.href="./Asset/Pages/Profile.html"
    }
}
function setUserNull(){
    var user = JSON.parse(localStorage.getItem("user")); 
    user = null;
    localStorage.setItem('user',user);
}

function addToCart(index){
    if(JSON.parse(localStorage.getItem("user"))==null)
    {
        window.location.href="./Asset/Pages/Login.html";
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
    localStorage.setItem("Cart",JSON.stringify(cartArr));
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    location.reload();
}
function backToHome(){
    window.location.href="index.html";
    return false;
}