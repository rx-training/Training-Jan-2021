var data = window.localStorage.getItem("items");
data = JSON.parse(data);
console.log(data.products.length);

for(var i = 0; i < data.products.length; i++) {
    console.log(JSON.stringify(data.products[i]))
}

console.log(sessionStorage.getItem('items'));
sessionStorage.removeItem("items");
localStorage.clear();