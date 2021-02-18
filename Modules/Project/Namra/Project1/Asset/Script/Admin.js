window.onload = function () {
    document.getElementById("adminName").innerText = localStorage.getItem('AdminName');
}
function logOut() {
    window.location.href = "../../Index.html";
}

var showProductType = [false, false];
function showData(value) {

    switch (value) {
        case '1':
            document.getElementById("searchResult").style.display="none";
            document.getElementById("searchHere").style.display = "block";
            document.getElementById("searchTitle").innerHTML = "Apply Offer";
            document.getElementById("images").style.display = "inline";
            document.getElementById("card").style.display = "none";

            showProductType[0] = true;
            showProductType[1] = false;
            var productsArr = JSON.parse(localStorage.getItem("Products"));
            var imgStr = '';
            for (var i = 0; i < productsArr.Products.length; i++) {
                imgStr += '<img  style="height:200px"class="m-2" src="' + productsArr.Products[i].Image_src + '" onclick="return showProduct(' + (i + 1) + ')" >';
            }

            document.getElementById("images").innerHTML = imgStr;
            return false;

        case '2':
            document.getElementById("searchResult").style.display="none";
            document.getElementById("searchHere").style.display = "block";
            document.getElementById("searchTitle").innerHTML = "Update Offer";
            document.getElementById("images").style.display = "inline";
            document.getElementById("card").style.display = "none";


            showProductType[0] = false;
            showProductType[1] = true;
            var productsArr = JSON.parse(localStorage.getItem("Products"));
            var imgStr = '';
            for (var i = 0; i < productsArr.Products.length; i++) {
                imgStr += '<img  style="height:200px"class="m-2" src="' + productsArr.Products[i].Image_src + '" onclick="return showProduct(' + productsArr.Products[i].Product_ID + ')" >';
            }

            document.getElementById("images").innerHTML = imgStr;
            return false;

        case '3':
            window.location.href = "Delete.html"
            return false;

        case '4':
            window.location.href = "Insert.html";
            return false;

        case '5':
            window.location.href = "User.html";
            return false;

        case '6':
            window.location.href = "Products.html"
            return false;

        default:
            break;
    }
}
function showProduct(value) {

    document.getElementById("images").style.display = "none";
    document.getElementById("card").style.display = "inline";

    var productsArr = JSON.parse(localStorage.getItem("Products"));
    document.getElementById("card-img-top").innerHTML = "<img style='height:300px;border:1px solid #8FBC8F; padding : 10px;box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);' class='m-3' src='" + productsArr.Products[value - 1].Image_src + "'>";
    document.getElementById("card-title").innerHTML = "<h3>" + productsArr.Products[value - 1].Prodcut_Name + "</h3>";

    if (showProductType[0] == true) {
        document.getElementById("card-text").innerHTML = "<p>Applied offer : " + productsArr.Products[value - 1].Product_offer + "%</p><span>Choose offer to apply &nbsp;</span><select id='selectOffer' class='p-2'>/<option value='0'>0%<option value='10'>10%</option>/<option value='20'>20%</option>/<option value='30'>30%</option>/<option value='40'>40%</option>/<option value='50'>50%</option>/<option value='60'>60%</option>/</select>";
        document.getElementById("card-footer").innerHTML = "<button onclick='return acceptOffer(" + (value - 1) + ")' class='btn-lg btn btn-outline-success bg-success text-white'>Apply</button>"
        showProductType[0] = false;
    }
    if (showProductType[1] == true) {
        document.getElementById("card-text").innerHTML = "<form id='resetForm'><form-group><label>Product Category</label><input type='text' class='form-control' id='form_category' placeholder='category : " + productsArr.Products[value - 1].Product_class + "'></form-group><form-group><label>Product Brand</label><input type='text' class='form-control' id='form_Brand' placeholder='Brand : " + productsArr.Products[value - 1].Product_brand + "'></form-group></form>";
        document.getElementById("card-footer").innerHTML = "<button onclick='return applyUpdate(" + (value - 1) + ")' class=' mr-3 btn-lg btn btn-outline-success bg-success text-white'>Apply</button><input type='reset' value='reset' onclick='return resetForm()' class='btn btn-lg btn-danger '>"
        showProductType[1] = false;
    }

}
function searchProduct() {
    //alert(document.getElementById("selectCategory").value+"    "+document.getElementById("enterProduct").value);
    var productsArr = JSON.parse(localStorage.getItem("Products"));
    var category = document.getElementById("selectCategory").value;
    var value = document.getElementById("enterProduct").value;
    var str = "<div class='row'>";
    document.getElementById("searchResult").style.display='inline';
    if(value == ""){
        alert("Please Enter Value");
    }
    if (category == "Category") {
            
        for (var i = 0; i < productsArr.Products.length; i++) {
            //console.log(productsArr.Products[i].Product_class);
    
            if(value.toLowerCase() == (productsArr.Products[i].Product_class).toLowerCase()){
                //console.log(productsArr.Products[i].Image_src)
                str+=
                    '<div class="col-6 col-md-4 col-lg-2">\
                        <div class="card" style="border : none;">\
                            <div class="card-body">\
                                    <div class="deals-img-container">\
                                        <img class="img-fluid" src="'+productsArr.Products[i].Image_src+'" width = "100%" height="300px">\
                                </div>\
                            </div>\
                            <div class="text-center">\
                                <div class="text-muted">'+ productsArr.Products[i].Prodcut_Name +'</div>\
                            </div>\
                        </div>\
                    </div>';
            }
        } 
    }
    else if (category == "Brand") {
           
        for (var i = 0; i < productsArr.Products.length; i++) {
            //console.log(productsArr.Products[i].Product_class);
    
            if(value.toLowerCase() == (productsArr.Products[i].Product_brand).toLowerCase()){
                //console.log(productsArr.Products[i].Image_src)
                str+=
                    '<div class="col-6 col-md-4 col-lg-2">\
                        <div class="card" style="border : none;">\
                            <div class="card-body">\
                                    <div class="deals-img-container">\
                                        <img class="img-fluid mb-2" src="'+productsArr.Products[i].Image_src+'" width = "100%" heigth="150px">\
                                </div>\
                            </div>\
                            <div class="text-center">\
                                <div class="text-muted">'+ productsArr.Products[i].Prodcut_Name +'</div>\
                            </div>\
                        </div>\
                    </div>';
            }
        } 
    }
    else if (category == "Product") {
        for (var i = 0; i < productsArr.Products.length; i++) {
            //console.log(productsArr.Products[i].Product_class);
    
            if(value.toLowerCase() == (productsArr.Products[i].Prodcut_Name).toLowerCase() || (productsArr.Products[i].Prodcut_Name.toLowerCase()).search(value.toLowerCase()) != -1) {
                //console.log(productsArr.Products[i].Image_src)
                str+=
                    '<div class="col-6 col-md-4 col-lg-2">\
                        <div class="card" style="border : none;">\
                            <div class="card-body">\
                                    <div class="deals-img-container">\
                                        <img class="img-fluid mb-2" src="'+productsArr.Products[i].Image_src+'" width = "100%" heigth="150px">\
                                </div>\
                            </div>\
                            <div class="text-center">\
                                <div class="text-muted">'+ productsArr.Products[i].Prodcut_Name +'</div>\
                            </div>\
                        </div>\
                    </div>';
            }
        } 
    }
    else {
        alert("Please Choose A Category");
    }
     str += '</div>';
    //console.log(str);
    document.getElementById("searchResult").innerHTML = str; 
}

function acceptOffer(value) {
    var productsArr = JSON.parse(localStorage.getItem("Products"));
    productsArr.Products[value].Product_offer = document.getElementById("selectOffer").value;
    document.getElementById("card-text").innerHTML = "<p>Applied offer : " + productsArr.Products[value].Product_offer + "%</p><span>Choose offer to apply &nbsp;</span><select id='selectOffer' class='p-2'>/<option value='0'>0%<option value='10'>10%</option>/<option value='20'>20%</option>/<option value='30'>30%</option>/<option value='40'>40%</option>/<option value='50'>50%</option>/<option value='60'>60%</option>/</select>";
    document.getElementById("card-footer").innerHTML = "<button onclick='return acceptOffer(" + (value) + ")' class='btn-lg btn btn-outline-success bg-success text-white'>Apply</button>"
    alert("Successfully Offer Applied");
    localStorage.setItem("Products", JSON.stringify(productsArr));
    showProduct(value + 1);
}
function resetForm() {
    document.getElementById("resetForm").reset();
}
function applyUpdate(value) {
    var productsArr = JSON.parse(localStorage.getItem("Products"));
    productsArr.Products[value].Product_class = document.getElementById("form_category").value;
    productsArr.Products[value].Product_brand = document.getElementById("form_Brand").value;
    document.getElementById("card-text").innerHTML = "<form id='resetForm'><form-group><label>Product Category</label><input type='text' class='form-control' id='form_category' placeholder='category : " + productsArr.Products[value].Product_class +
        "'></form-group><form-group><label>Product Brand</label><input type='text' class='form-control' id='form_Brand' placeholder='Brand : " + productsArr.Products[value].Product_brand + "'></form-group></form>";

    alert("Product is Updated");
    localStorage.setItem("Products", JSON.stringify(productsArr));
}




