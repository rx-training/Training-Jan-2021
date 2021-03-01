async function getProducts(file) {
                let myObject = await fetch(file);
                let myData = await myObject.json();
                localStorage.setItem("menu", JSON.stringify(myData));
                var store  = localStorage.getItem("menu");
                var object = JSON.parse(store);
                  
                // snacks Area
                var snacksdata = object.snacks;
                snacksBlock = "<h1>Snacks</h1> <div class='row'>";
                $.each(snacksdata, function (i, value) {
                    snacksBlock += "<div class = 'col-md-4'>";
                    snacksBlock += "<div class = 'card border border-light py-2'>";
                    snacksBlock += "<small class = 'card-text text-muted'>" + value.text + "</small>";
                    snacksBlock += "<img src='" +value.image + "' class='card-img mt-2 rounded img-fluid'>";
                    snacksBlock += "<h6 class='card-title py-1 text-muted'>" + value.title + "</h6>";
                    snacksBlock += "<div class='d-flex flex-row'>";
                    snacksBlock += "<h6 class='card-subtitle pt-3'> <i class='fa fa-inr'></i>" + value.subtitle + "</h6>";
                    snacksBlock += "<a href='#' class='btn btn-warning btn-rounded text-white ml-auto mt-0'>Add<i class='fa fa-plus'></i></a>";
                    snacksBlock += "</div></div></div>"; 
                });
                snacksBlock += "</div>";
                $("#snacks").html(snacksBlock);

                // appetizers Area
                var appetizersdata = object.appetizers;
                appetizersBlock = "<h1>Appetizers</h1> <div class='row'>";
                $.each(appetizersdata, function (i, value) {
                    appetizersBlock += "<div class = 'col-md-4'>";
                    appetizersBlock += "<div class = 'card border border-light py-2'>";
                    appetizersBlock += "<small class = 'card-text text-muted'>" + value.text + "</small>";
                    appetizersBlock += "<img src='" + value.image + "' class='card-img mt-2 rounded img-fluid'>";
                    appetizersBlock += "<h6 class='card-title py-1 text-muted'>" + value.title + "</h6>";
                    appetizersBlock += "<div class='d-flex flex-row'>";
                    appetizersBlock += "<h6 class='card-subtitle pt-3'> <i class='fa fa-inr'></i>" + value.subtitle + "</h6>";
                    appetizersBlock += "<a href='#' class='btn btn-warning btn-rounded text-white ml-auto mt-0'>Add<i class='fa fa-plus'></i></a>";
                    appetizersBlock += "</div></div></div>"; 
                });
                appetizersBlock += "</div>";
                $("#appetizers").html(appetizersBlock);

                // dessert Area
                var dessertdata = object.dessert;
                dessertBlock = "<h1>Dessert</h1> <div class='row'>";
                $.each(dessertdata, function (i, value) {
                    dessertBlock += "<div class = 'col-md-4'>";
                    dessertBlock += "<div class = 'card border border-light py-2'>";
                    dessertBlock += "<small class = 'card-text text-muted'>" + value.text + "</small>";
                    dessertBlock += "<img src='" +value.image + "' class='card-img mt-2 rounded img-fluid'>";
                    dessertBlock += "<h6 class='card-title py-1 text-muted'>" + value.title + "</h6>";
                    dessertBlock += "<div class='d-flex flex-row'>";
                    dessertBlock += "<h6 class='card-subtitle pt-3'> <i class='fa fa-inr'></i>" + value.subtitle + "</h6>";
                    dessertBlock += "<a href='#' class='btn btn-warning btn-rounded text-white ml-auto mt-0'>Add<i class='fa fa-plus'></i></a>";
                    dessertBlock += "</div></div></div>"; 
                });
                dessertBlock += "</div>";
                $("#dessert").html(dessertBlock);

                // beverage Area
                var beveragedata = object.beverage;
                beverageBlock = "<h1>Beverage</h1> <div class='row'>";
                $.each(beveragedata, function (i, value) {
                    beverageBlock += "<div class = 'col-md-4'>";
                    beverageBlock += "<div class = 'card border border-light py-2'>";
                    beverageBlock += "<small class = 'card-text text-muted'>" + value.text + "</small>";
                    beverageBlock += "<img src='" +value.image + "' class='card-img mt-2 rounded img-fluid'>";
                    beverageBlock += "<h6 class='card-title py-1 text-muted'>" + value.title + "</h6>";
                    beverageBlock += "<div class='d-flex flex-row'>";
                    beverageBlock += "<h6 class='card-subtitle pt-3'> <i class='fa fa-inr'></i>" + value.subtitle + "</h6>";
                    beverageBlock += "<a href='#' class='btn btn-warning btn-rounded text-white ml-auto mt-0'>Add<i class='fa fa-plus'></i></a>";
                    beverageBlock += "</div></div></div>"; 
                });
                beverageBlock += "</div>";
                $("#beverage").html(beverageBlock);
                
                // continental Area
                var continentaldata = object.continental;
                continentalBlock = "<h1>Continental</h1> <div class='row'>";
                $.each(continentaldata, function (i, value) {
                    continentalBlock += "<div class = 'col-md-4'>";
                    continentalBlock += "<div class = 'card border border-light py-2'>";
                    continentalBlock += "<small class = 'card-text text-muted'>" + value.text + "</small>";
                    continentalBlock += "<img src='" + value.image + "' class='card-img mt-2 rounded img-fluid'>";
                    continentalBlock += "<h6 class='card-title py-1 text-muted'>" + value.title + "</h6>";
                    continentalBlock += "<div class='d-flex flex-row'>";
                    continentalBlock += "<h6 class='card-subtitle pt-3'> <i class='fa fa-inr'></i>" + value.subtitle + "</h6>";
                    continentalBlock += "<a href='#' class='btn btn-warning btn-rounded text-white ml-auto mt-0'>Add<i class='fa fa-plus'></i></a>";
                    continentalBlock += "</div></div></div>"; 
                });
                continentalBlock += "</div>";
                $("#continental").html(continentalBlock);

                // indianthalis Area
                var indianthalisdata = object.indianthalis;
                indianthalisBlock = "<h1>Indian / Thalis</h1> <div class='row'>";
                $.each(indianthalisdata, function (i, value) {
                    indianthalisBlock += "<div class = 'col-md-4'>";
                    indianthalisBlock += "<div class = 'card border border-light py-2'>";
                    indianthalisBlock += "<small class = 'card-text text-muted'>" + value.text + "</small>";
                    indianthalisBlock += "<img src='" + value.image + "' class='card-img mt-2 rounded img-fluid'>";
                    indianthalisBlock += "<h6 class='card-title py-1 text-muted'>" + value.title + "</h6>";
                    indianthalisBlock += "<div class='d-flex flex-row'>";
                    indianthalisBlock += "<h6 class='card-subtitle pt-3'> <i class='fa fa-inr'></i>" + value.subtitle + "</h6>";
                    indianthalisBlock += "<a href='#' class='btn btn-warning btn-rounded text-white ml-auto mt-0'>Add<i class='fa fa-plus'></i></a>";
                    indianthalisBlock += "</div></div></div>"; 
                });
                indianthalisBlock += "</div>";
                $("#indianthalis").html(indianthalisBlock);

                // fitnfab Area
                var fitnfabdata = object.fitnfab;
                fitnfabBlock = "<h1>Fit N Fab</h1> <div class='row'>";
                $.each(fitnfabdata, function (i, value) {
                    fitnfabBlock += "<div class = 'col-md-4'>";
                    fitnfabBlock += "<div class = 'card border border-light py-2'>";
                    fitnfabBlock += "<small class = 'card-text text-muted'>" + value.text + "</small>";
                    fitnfabBlock += "<img src='" + value.image + "' class='card-img mt-2 rounded img-fluid'>";
                    fitnfabBlock += "<h6 class='card-title py-1 text-muted'>" + value.title + "</h6>";
                    fitnfabBlock += "<div class='d-flex flex-row'>";
                    fitnfabBlock += "<h6 class='card-subtitle pt-3'> <i class='fa fa-inr'></i>" + value.subtitle + "</h6>";
                    fitnfabBlock += "<a href='#' class='btn btn-warning btn-rounded text-white ml-auto mt-0'>Add<i class='fa fa-plus'></i></a>";
                    fitnfabBlock += "</div></div></div>"; 
                });
                fitnfabBlock += "</div>";
                $("#fitnfab").html(fitnfabBlock);

                // wokstation Area
                var wokstationdata = object.wokstation;
                wokstationBlock = "<h1>Wok-Station</h1> <div class='row'>";
                $.each(wokstationdata, function (i, value) {
                    wokstationBlock += "<div class = 'col-md-4'>";
                    wokstationBlock += "<div class = 'card border border-light py-2'>";
                    wokstationBlock += "<small class = 'card-text text-muted'>" + value.text + "</small>";
                    wokstationBlock += "<img src='" + value.image + "' class='card-img mt-2 rounded img-fluid'>";
                    wokstationBlock += "<h6 class='card-title py-1 text-muted'>" + value.title + "</h6>";
                    wokstationBlock += "<div class='d-flex flex-row'>";
                    wokstationBlock += "<h6 class='card-subtitle pt-3'> <i class='fa fa-inr'></i>" + value.subtitle + "</h6>";
                    wokstationBlock += "<a href='#' class='btn btn-warning btn-rounded text-white ml-auto mt-0'>Add<i class='fa fa-plus'></i></a>";
                    wokstationBlock += "</div></div></div>"; 
                });
                wokstationBlock += "</div>";
                $("#wokstation").html(wokstationBlock);

                // bigbiriyanico Area
                var bigbiriyanicodata = object.bigbiriyanico;
                bigbiriyanicoBlock = "<h1>Big Biriyani Co.</h1> <div class='row'>";
                $.each(bigbiriyanicodata, function (i, value) {
                    bigbiriyanicoBlock += "<div class = 'col-md-4'>";
                    bigbiriyanicoBlock += "<div class = 'card border border-light py-2'>";
                    bigbiriyanicoBlock += "<small class = 'card-text text-muted'>" + value.text + "</small>";
                    bigbiriyanicoBlock += "<img src='" + value.image + "' class='card-img mt-2 rounded img-fluid'>";
                    bigbiriyanicoBlock += "<h6 class='card-title py-1 text-muted'>" + value.title + "</h6>";
                    bigbiriyanicoBlock += "<div class='d-flex flex-row'>";
                    bigbiriyanicoBlock += "<h6 class='card-subtitle pt-3'> <i class='fa fa-inr'></i>" + value.subtitle + "</h6>";
                    bigbiriyanicoBlock += "<a href='#' class='btn btn-warning btn-rounded text-white ml-auto mt-0'>Add<i class='fa fa-plus'></i></a>";
                    bigbiriyanicoBlock += "</div></div></div>"; 
                });
                bigbiriyanicoBlock += "</div>";
                $("#bigbiriyanico").html(bigbiriyanicoBlock);

                // largeplates Area
                var largeplatesdata = object.largeplates;
                largeplatesBlock = "<h1>Large Plates</h1> <div class='row'>";
                $.each(largeplatesdata, function (i, value) {
                    largeplatesBlock += "<div class = 'col-md-4'>";
                    largeplatesBlock += "<div class = 'card border border-light py-2'>";
                    largeplatesBlock += "<small class = 'card-text text-muted'>" + value.text + "</small>";
                    largeplatesBlock += "<img src='" + value.image + "' class='card-img mt-2 rounded img-fluid'>";
                    largeplatesBlock += "<h6 class='card-title py-1 text-muted'>" + value.title + "</h6>";
                    largeplatesBlock += "<div class='d-flex flex-row'>";
                    largeplatesBlock += "<h6 class='card-subtitle pt-3'> <i class='fa fa-inr'></i>" + value.subtitle + "</h6>";
                    largeplatesBlock += "<a href='#' class='btn btn-warning btn-rounded text-white ml-auto mt-0'>Add<i class='fa fa-plus'></i></a>";
                    largeplatesBlock += "</div></div></div>"; 
                });
                largeplatesBlock += "</div>";
                $("#largeplates").html(largeplatesBlock);

            }
getProducts("menu.json");

$(document).ready(function(){

    $(".class1").click(function(){
        $("#snacks").css("display", "block");
        $("#appetizers").css("display", "none");
        $("#dessert").css("display","none");
        $("#beverage").css("display","none");
        $("#continental").css("display","none");
        $("#indianthalis").css("display","none");
        $("#fitnfab").css("display","none");
        $("#wokstation").css("display","none");
        $("#bigbiriyanico").css("display","none");
        $("#largeplates").css("display","none");
    });

    $(".class2").click(function(){
        $("#snacks").css("display", "none");
        $("#appetizers").css("display", "block");
        $("#dessert").css("display","none");
        $("#beverage").css("display","none");
        $("#continental").css("display","none");
        $("#indianthalis").css("display","none");
        $("#fitnfab").css("display","none");
        $("#wokstation").css("display","none");
        $("#bigbiriyanico").css("display","none");
        $("#largeplates").css("display","none");
    });

    $(".class3").click(function(){
        $("#snacks").css("display", "none");
        $("#appetizers").css("display", "none");
        $("#dessert").css("display","block");
        $("#beverage").css("display","none");
        $("#continental").css("display","none");
        $("#indianthalis").css("display","none");
        $("#fitnfab").css("display","none");
        $("#wokstation").css("display","none");
        $("#bigbiriyanico").css("display","none");
        $("#largeplates").css("display","none");
    });

    $(".class4").click(function(){
        $("#snacks").css("display", "none");
        $("#appetizers").css("display", "none");
        $("#dessert").css("display","none");
        $("#beverage").css("display","block");
        $("#continental").css("display","none");
        $("#indianthalis").css("display","none");
        $("#fitnfab").css("display","none");
        $("#wokstation").css("display","none");
        $("#bigbiriyanico").css("display","none");
        $("#largeplates").css("display","none");
    });

    $(".class5").click(function(){
        $("#snacks").css("display", "none");
        $("#appetizers").css("display", "none");
        $("#dessert").css("display","none");
        $("#beverage").css("display","none");
        $("#continental").css("display","block");
        $("#indianthalis").css("display","none");
        $("#fitnfab").css("display","none");
        $("#wokstation").css("display","none");
        $("#bigbiriyanico").css("display","none");
        $("#largeplates").css("display","none");
    });

    $(".class6").click(function(){
        $("#snacks").css("display", "none");
        $("#appetizers").css("display", "none");
        $("#dessert").css("display","none");
        $("#beverage").css("display","none");
        $("#continental").css("display","none");
        $("#indianthalis").css("display","block");
        $("#fitnfab").css("display","none");
        $("#wokstation").css("display","none");
        $("#bigbiriyanico").css("display","none");
        $("#largeplates").css("display","none");
    });

    $(".class7").click(function(){
        $("#snacks").css("display", "none");
        $("#appetizers").css("display", "none");
        $("#dessert").css("display","none");
        $("#beverage").css("display","none");
        $("#continental").css("display","none");
        $("#indianthalis").css("display","none");
        $("#fitnfab").css("display","block");
        $("#wokstation").css("display","none");
        $("#bigbiriyanico").css("display","none");
        $("#largeplates").css("display","none");
    });

    $(".class8").click(function(){
        $("#snacks").css("display", "none");
        $("#appetizers").css("display", "none");
        $("#dessert").css("display","none");
        $("#beverage").css("display","none");
        $("#continental").css("display","none");
        $("#indianthalis").css("display","none");
        $("#fitnfab").css("display","none");
        $("#wokstation").css("display","block");
        $("#bigbiriyanico").css("display","none");
        $("#largeplates").css("display","none");
    });

    $(".class9").click(function(){
        $("#snacks").css("display", "none");
        $("#appetizers").css("display", "none");
        $("#dessert").css("display","none");
        $("#beverage").css("display","none");
        $("#continental").css("display","none");
        $("#indianthalis").css("display","none");
        $("#fitnfab").css("display","none");
        $("#wokstation").css("display","none");
        $("#bigbiriyanico").css("display","block");
        $("#largeplates").css("display","none");
    });

    $(".class10").click(function(){
        $("#snacks").css("display", "none");
        $("#appetizers").css("display", "none");
        $("#dessert").css("display","none");
        $("#beverage").css("display","none");
        $("#continental").css("display","none");
        $("#indianthalis").css("display","none");
        $("#fitnfab").css("display","none");
        $("#wokstation").css("display","none");
        $("#bigbiriyanico").css("display","none");
        $("#largeplates").css("display","block");
    });
  });