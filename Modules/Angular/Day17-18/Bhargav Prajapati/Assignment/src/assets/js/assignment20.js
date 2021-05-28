function cart1() {
    sessionStorage.setItem("Productid1", 1);
    sessionStorage.setItem("productname1", "cheese")
    sessionStorage.setItem("price1", 100);
    sessionStorage.setItem("quantity1", 1);
    sessionStorage.setItem("additionalid1", "id1")
}
function cart2() {
    sessionStorage.setItem("Productid2", 2);
    sessionStorage.setItem("productname2", "Pen")
    sessionStorage.setItem("price2", 150);
    sessionStorage.setItem("quantity2", 2);
    sessionStorage.setItem("additionalid2", "id2")

}
function cart3() {
    sessionStorage.setItem("Productid3", 3);
    sessionStorage.setItem("productname3", "Butter")
    sessionStorage.setItem("price3", 100);
    sessionStorage.setItem("quantity3", 1);
    sessionStorage.setItem("additionalid3", "id3")

}
function cart4() {
    sessionStorage.setItem("Productid4", 4);
    sessionStorage.setItem("productname4", "Pencil")
    sessionStorage.setItem("price4", 10);
    sessionStorage.setItem("quantity4", 1);
    sessionStorage.setItem("additionalid4", "id4")

}
function summary() {
    var temp = 0;
    if (sessionStorage.getItem("additionalid1") == "id1") {
        var Productid1 = sessionStorage.getItem("Productid1");
        document.getElementById("productid1").innerHTML = "<b>Product Id :=</b> " + Productid1;
        var Productname1 = sessionStorage.getItem("productname1");
        document.getElementById("productname1").innerHTML = "<b>Product Name:=</b> " + Productname1;
        var price1 = sessionStorage.getItem("price1");
        document.getElementById("price1").innerHTML = "<b>Product price:=</b> " + price1;
        var quantity1 = sessionStorage.getItem("quantity1");
        document.getElementById("quantity1").innerHTML = "<b>Product Quantity:=</b> " + quantity1;

        temp = 1;
    }
    if (sessionStorage.getItem("additionalid2") == "id2") {
        var Productid2 = sessionStorage.getItem("Productid2");
        document.getElementById("productid2").innerHTML = "<b>Product Id :=</b> " + Productid2;
        var Productname2 = sessionStorage.getItem("productname2");
        document.getElementById("productname2").innerHTML = "<b>Product Name:=</b> " + Productname2;
        var price2 = sessionStorage.getItem("price2");
        document.getElementById("price2").innerHTML = "<b>Product price:=</b> " + price2;
        var quantity2 = sessionStorage.getItem("quantity2");
        document.getElementById("quantity2").innerHTML = "<b>Product Quantity:=</b> " + quantity2;
        temp = 1;
    }

    if (sessionStorage.getItem("additionalid3") == "id3") {
        var Productid3 = sessionStorage.getItem("Productid3");
        document.getElementById("productid3").innerHTML = "<b>Product Id :=</b> " + Productid3;
        var Productname3 = sessionStorage.getItem("productname3");
        document.getElementById("productname3").innerHTML = "<b>Product Name:=</b> " + Productname3;
        var price3 = sessionStorage.getItem("price3");
        document.getElementById("price3").innerHTML = "<b>Product price:=</b> " + price3;
        var quantity3 = sessionStorage.getItem("quantity3");
        document.getElementById("quantity3").innerHTML = "<b>Product Quantity:=</b> " + quantity3;
        temp = 1;
    }

    if (sessionStorage.getItem("additionalid4") == "id4") {
        var Productid4 = sessionStorage.getItem("Productid4");
        document.getElementById("productid4").innerHTML = "<b>Product Id :=</b> " + Productid4;
        var Productname4 = sessionStorage.getItem("productname4");
        document.getElementById("productname4").innerHTML = "<b>Product Name:=</b> " + Productname4;
        var price4 = sessionStorage.getItem("price4");
        document.getElementById("price4").innerHTML = "<b>Product price:=</b> " + price4;
        var quantity4 = sessionStorage.getItem("quantity4");
        document.getElementById("quantity4").innerHTML = "<b>Product Quantity:=</b> " + quantity4;
        temp = 1;
    }
    if (temp == 0) {
        document.getElementById("alert1").innerHTML = alert("Please Add One Item In The Cart");
    }

}