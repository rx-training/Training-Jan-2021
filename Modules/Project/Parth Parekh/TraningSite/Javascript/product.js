async function getProducts(file) {
            let myObject = await fetch(file);
            let myData = await myObject.json();
            console.log(myData); 
            var string = JSON.stringify(myData);
            localStorage.setItem("products",JSON.stringify(myData));
            
            document.getElementById("demo").innerHTML = string;
}
getProducts("product.json");