var obj1 = {
    Name: "Cheese",
    Price: "2.50",
    Location: "Refrigerated foods"
};

var obj2 = 
{
    Name: "Crisps",
    Price: "3",
    Location: "the Snack isle"
};

var obj3 = { Name: "Pizza", Price: "4", Location: "Refrigerated foods" }
var obj4 = { Name: "Chocolate", Price: "1.50", Location: "the Snack isle" }
var obj5 = { Name: "Self-raising flour", Price: "1.50", Location: "Home baking" }
var obj6 = { Name: "Ground almonds", Price: "3", Location: "Home baking" }
localStorage.setItem("object1", JSON.stringify(obj1));
localStorage.setItem("object2", JSON.stringify(obj2));
localStorage.setItem("object3", JSON.stringify(obj3));
localStorage.setItem("object4", JSON.stringify(obj4));
localStorage.setItem("object5", JSON.stringify(obj5));
localStorage.setItem("object6", JSON.stringify(obj6));


var object1 = localStorage.getItem("object1");
document.getElementById("show").innerHTML = "Object-1:= " + object1;
var object2 = localStorage.getItem("object2");
document.getElementById("show1").innerHTML = "Object-2:= " + object2;
var object3 = localStorage.getItem("object3");
document.getElementById("show2").innerHTML = "Object-3:= " + object3;
var object4 = localStorage.getItem("object4");
document.getElementById("show3").innerHTML = "Object-4:= " + object4;
var object5 = localStorage.getItem("object5");
document.getElementById("show4").innerHTML = "Object-5:= " + object5;
var object6 = localStorage.getItem("object6");
document.getElementById("show5").innerHTML = "Object-5:= " + object6;
