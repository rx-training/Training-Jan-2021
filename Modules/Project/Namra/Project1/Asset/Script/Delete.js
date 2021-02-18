window.onload = function () {
    document.getElementById("adminName").innerText = localStorage.getItem('AdminName');
    var productsArr = JSON.parse(localStorage.getItem("Products"));
    var tableStr = "";
    for (var i = 0; i < productsArr.Products.length; i++) {
        tableStr += "<tr><td>" + productsArr.Products[i].Product_ID + "</td><td>" + productsArr.Products[i].Prodcut_Name + "</td><td>" + productsArr.Products[i].Price + "</td><td>" + productsArr.Products[i].Product_class + "</td><td>" + productsArr.Products[i].Product_brand + "</td><td>" + productsArr.Products[i].Product_offer + " %</td><td>"+ productsArr.Products[i].Tag+"</td><td><span onclick='return deletedProduct(" + i + ")'><i class='fas fa-times'></i></span></td></tr>"
    }
    document.getElementById("insertTable1").innerHTML = "<thead class='table-danger text-dark'><tr><th>ID</th><th>Product Name</th><th>Price</th><th>Category</th><th>Brand</th><th>Offer</th><th>Tag Name</th><th>Delete</th></tr></thead><tbody id='tbody'>" + tableStr + "</tbody>";
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

function deletedProduct(value){
    var productsArr = JSON.parse(localStorage.getItem("Products"));
    
    alert(productsArr.Products[value].Product_ID+" is deleted");
    productsArr.Products.splice(value,1);
    for(var i=0;i<productsArr.Products.length;i++){
        productsArr.Products[i].Product_ID = (i+1);
    }
    localStorage.setItem("Products", JSON.stringify(productsArr));
    location.reload();
    return false;
}
function logOut() {
    window.location.href = "../../Index.html";
}
