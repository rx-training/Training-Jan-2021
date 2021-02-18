window.onload = function () {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const productIndex = parseInt(urlParams.get('Index'));

    var productsArr = JSON.parse(localStorage.getItem("Products"));
    var imgLink = productsArr.Products[productIndex].Image_src;
    var imgArr = imgLink.split('/');
    var imgArray = imgArr.slice();
    
    var index = (((((imgArr[imgArr.length-1].split('.'))[0])/4).toString()).split('.'))[0];
    index = index * 4;
    imgArr[imgArr.length-1]="";
    imgArr = imgArr.toString();
    imgArr = imgArr.replaceAll(',','/');
    //alert(imgArr +((index)+1)+'.'+ ((imgArray[imgArray.length-1].split('.'))[1]));

     var str = '<h1 class="display-4 text-center mt-5">'+productsArr.Products[productIndex].Prodcut_Name+'</h1>\
                <div class="row mt-5">\
                    <div class="col-6 col-md-4 col-lg-3"> \
                        <div class="card" style="border: none;"> \
                            <div class="card-body"> \
                                <div class="deals-img-container"> \
                                    <img class="img-fluid" src="' + imgArr +((index)+1)+'.'+ ((imgArray[imgArray.length-1].split('.'))[1])+ '" alt="" width="100%"> \
                                </div> \
                            </div> \
                        </div> \
                    </div>\
                    <div class="col-6 col-md-4 col-lg-3"> \
                        <div class="card" style="border: none;"> \
                            <div class="card-body"> \
                                <div class="deals-img-container"> \
                                    <img class="img-fluid" src="' + imgArr +((index)+2)+'.'+ ((imgArray[imgArray.length-1].split('.'))[1])+ '" alt="" width="100%"> \
                                </div> \
                            </div> \
                        </div> \
                    </div>\
                    <div class="col-6 col-md-4 col-lg-3"> \
                        <div class="card" style="border: none;"> \
                            <div class="card-body"> \
                                <div class="deals-img-container"> \
                                    <img class="img-fluid" src="' + imgArr +((index)+3)+'.'+ ((imgArray[imgArray.length-1].split('.'))[1])+ '" alt="" width="100%"> \
                                </div> \
                            </div> \
                        </div> \
                    </div>\
                    <div class="col-6 col-md-4 col-lg-3"> \
                        <div class="card" style="border: none;"> \
                            <div class="card-body"> \
                                <div class="deals-img-container"> \
                                    <img class="img-fluid" src="' + imgArr +((index)+4)+'.'+ ((imgArray[imgArray.length-1].split('.'))[1])+ '" alt="" width="100%"> \
                                </div> \
                            </div> \
                        </div> \
                    </div>\
                </div>\
                ';

    document.getElementById("viewProduct").innerHTML = str; 
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