var val = [];
        function retrieve(id,name,price,qty){
            var obj = {"ProductID" : id, "ProductName" : name, "Price" : price, "Quantity" : qty};
            val.push(JSON.stringify(obj));
            localStorage.setItem("productKey", val);
        }
        function display(){
            fetch("../../../../assets/json/info.json")
            .then(response => {
                response.json().then(
                    products => {
                        var i = "";
                        for(var j = 0; j<products.length; j++){
                            i += "<tr>";
                            i += "<td>" + products[j].ProductID + "</td>";
                            i += "<td>" + products[j].ProductName + "</td>";
                            i += "<td>" + products[j].Price + "</td>";
                            i += "<td>" + products[j].Quantity + "</td>";
                            i += '<td><button class="btn btn-danger" onclick="retrieve('+"'"+products[j].ProductID+"'"+','+"'"+products[j].ProductName+"'"+','+"'"+products[j].Price+"'"+','+"'"+products[j].Quantity+"'"+')">Add Cart</button></td></tr>'
                        }
                        document.getElementById("productDetails").innerHTML = i;
                    }
                )
            })
            console.log(localStorage.getItem("productKey"));
        }
        
