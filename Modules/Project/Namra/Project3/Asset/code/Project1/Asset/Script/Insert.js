window.onload = function () {
        document.getElementById("adminName").innerText = localStorage.getItem('AdminName');

        var productsArr = JSON.parse(localStorage.getItem("Products"));
        var tableStr = "";
        for (var i = 0; i < productsArr.Products.length; i++) {
                tableStr += "<tr><td>" + (i + 1) + "</td><td>" + productsArr.Products[i].Prodcut_Name + "</td><td>" + productsArr.Products[i].Price + "</td><td>" + productsArr.Products[i].Product_class + "</td><td>" + productsArr.Products[i].Product_brand + "</td><td>" + productsArr.Products[i].Product_offer + " %</td></tr>"
        }
        document.getElementById("insertTable").innerHTML = "<thead class='table-success text-dark'><tr><th>ID</th><th>Product Name</th><th>Price</th><th>Category</th><th>Brand</th><th>Offer</th></tr></thead><tbody id='tbody'>" + tableStr + "</tbody>";
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
                window.location.href="User.html";
                return false;
            
            case '6':
                window.location.href="Products.html"
                return false;
        
            default:
                break;
        }
    }

    function insertProduct() {
        var productsArr = JSON.parse(localStorage.getItem("Products"));
        var imgLink = document.getElementById("imageInsert").value;
        imgLink = imgLink.split('\\');
        var imgLink = imgLink[imgLink.length-1];
        alert(imgLink);

        var number = productsArr.Products.length;
        var x = {
            "Product_ID": number + 1,
            "Image_src": "../Image/"+(document.getElementById("categoryInsert").value).toLowerCase()+"/"+(document.getElementById("brandInsert").value).toLowerCase()+"/"+imgLink,
            "Product_class":document.getElementById("categoryInsert").value,
            "Product_brand": document.getElementById("brandInsert").value,
            "Product_offer": parseInt(document.getElementById("offerInsert").value),
            "Prodcut_Name": document.getElementById("nameInsert").value,
            "Price": parseInt(document.getElementById("priceInsert").value),
            "Tag":document.getElementById("tagInsert").value
        }
        productsArr.Products.push(x);
        localStorage.setItem("Products", JSON.stringify(productsArr));
        location.reload();
        alert(number+1+" is added");
    }
    function chooseBrand(){
        var classCat = document.getElementById("categoryInsert").value;
        if(classCat == "Laptop"){
                document.getElementById('brandInsert').innerHTML='<option value="dell">DELL</option><option value="hp">HP</option><option value="acer">Acer</option><option value="lenovo">Lenovo</option><option value="samsung">Samsung</option><option value="apple">Apple</option><option value="sony">Sony</option>';
        }
        else if(classCat == "Shirt"){
                document.getElementById('brandInsert').innerHTML='<option value="hrx">HRX</option><option value="arrow">Arrow</option><option value="roadies">Roadies</option><option value="roadster">Roadster</option><option value="lives">Lives</option><option value="buffalo">Buffalo</option>';
        }
        else if(classCat == "Shoes"){
                document.getElementById('brandInsert').innerHTML='<option value="hrx">HRX</option><option value="speed">Speed</option><option value="nike">Nike</option><option value="puma">Puma</option><option value="bata">BATA</option><option value="roadster">Roadster</option><option value="loafer">Loafer</option>';
        }
        else if(classCat == "Mobile"){
                document.getElementById('brandInsert').innerHTML='<option value="apple">Apple</option><option value="samsung">Samsung</option><option value="oneplus">OnePlus</option><option value="google">Google</option><option value="xiaomi">Xiaomi</option><option value="hcl">HCL</option>';
        }
        else if(classCat == "CareProducts"){
                document.getElementById('brandInsert').innerHTML='<option value="amway">Amway</option><option value="alovera">Alovera</option><option value="fair">Fair & Lovely</option><option value="beardo">Beardo</option><option value="vaseline">Vaseline</option>';
        }
        else{
                document.getElementById('brandInsert').innerHTML="";
        }
    }
    function logOut() {
        window.location.href = "../../Index.html";
    }
    

   /*  window.onload = () => {

        function setCategory(){
            var categoriesArray = JSON.parse(localStorage.getItem("categories"));
    
            var select = document.getElementById("category");
    
            for(var i = 0; i < categoriesArray.Category.length; i++){
                var option = document.createElement('option');
                option.value = categoriesArray.Category[i].categoryName;
                option.text = categoriesArray.Category[i].categoryName;
                select.appendChild(option);
            }
        }
    
        setCategory();
    }
    
    function addProduct(){
        var category = document.getElementById("category").value;
        var brand = document.getElementById("brand").value;
        var name = document.getElementById("name").value;
        var details = document.getElementById("details").value;
        var price = document.getElementById("price").value;
        var sizes = document.getElementById("sizes").value;
        var pincodes = document.getElementById("pincodes").value;
        var images = document.getElementById("images").files;
    
        if(category == "select category"){
            alert("Please select category");
            return false;
        }
    
        var returnableArray = document.getElementsByName("returnable");
        var returnable;
    
        if (returnableArray[0].checked) {
            returnable = "true";
        }
        else{
            returnable = "false";
        }
    
        var imagesArray =  [];
    
        var imgurl = "/images/category/" + category.toLowerCase() + "";
        var imagesContainer = document.getElementById("images-container");
    
        for(var i = 0; i <images.length; i++){
            imagesArray.push(imgurl + "/" + images[i].name);
        }
    
        //console.log(imagesArray.toString());
    
        var productArray = JSON.parse(localStorage.getItem("products"));
    
        var productId;
    
        if(productArray.Products.length == 0){
            productId = 1;
        }
        else{
            productId = productArray.Products[productArray.Products.length - 1].productId + 1;
        }
        
    
        var product = {
            "productId" : productId,
            "name" : name,
            "category" : category,
            "brand" : brand,
            "details" : details,
            "price" : price,
            "sizes" : sizes,
            "pincodes" : pincodes,
            "imgurls" : imagesArray.toString(),
        }
    
        productArray.Products.push(product);
    
        localStorage.setItem("products",JSON.stringify(productArray));
    
        location.assign("products.html");
        //location.reload();
    
        //387330,387331,387001,387002
        //console.log(product);
    
        // for(var i = 0; i < images.length; i++){
        //     alert(images[i].name);
        // }
    
        return false;
    } */