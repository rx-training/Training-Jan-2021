localStorage.setItem("Wallet","100");
async function getProducts(file) {
                let myObject = await fetch(file);
                let myData = await myObject.json();
                localStorage.setItem("entertainment", JSON.stringify(myData));
                //localStorage.removeItem("entertainment");
                //console.log(myData);
                var storeImg  = localStorage.getItem("entertainment");
                var object = JSON.parse(storeImg);
                console.log(object);
                var data = object.entertainment;
                
                // entertainment Area
                console.log(data);
                entertainmentBlock = "";
                $.each(data, function (i, value) {
                    console.log(value.path);
                    entertainmentBlock +="<div class = 'card'>" ;
                    entertainmentBlock += "<img src='" +value.path + "' class='img-fluid'>";
                    entertainmentBlock += "<div class='card-body '> <h4 class='card-title text-center text-dark'> Book Now</h4> </div>";
                    entertainmentBlock += "</div>"; 
                });
                $("#dynamicimg").html(entertainmentBlock);

                //Mobile area
                var mobileData = object.mobiles;
                console.log(mobileData);
                mobileBlock = "";
                $.each(mobileData , function  (i , value){
                   mobileBlock +="<div class='card'> <div class='card-body'>";
                   mobileBlock += "<img src='" + value.path + "' class='img-fluid' >";
                   mobileBlock += "<h6 class='card-title text-muted'>" + value.info + "</h6>";
                   mobileBlock += "<p class='card-text'> From <strong>" + value.price + "</strong>";
                   mobileBlock += "<p style = 'text-decoration: line-through;'>" + value.oldprice +"</p></p>";
                   mobileBlock += "</div></div>";

                });
                $("#mobilecontent").html(mobileBlock);

                var groceryData = object.grocery;
                console.log(groceryData);
                groceryBlock = "";
                $.each(groceryData , function  ( i , value) {
                    groceryBlock += "<div class='col-md-3 '>";
                    groceryBlock += '<a href="#"> <img class="img-fluid" width="280px" src="'+value.path+'"></a>';
                    groceryBlock += "</div>";
                    
                })
                $("#grocerycontent").html(groceryBlock);
                      
            }
getProducts("paytm.json");

