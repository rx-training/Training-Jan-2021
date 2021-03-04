const { default: localStorage } = require("local-storage");

window.onload = () => {
    var categoriesfetch = fetch("./json/categories.json");
    
    categoriesfetch.then( x => x.json()).then( y => {
                localStorage.setItem("categories",JSON.stringify(y));
            }).catch( err => console.error(err));

    
    var productsfetch = fetch("./json/products.json");
    
    productsfetch.then( x => x.json() ).then( y => {
        localStorage.setItem("products",JSON.stringify(y));
    }).catch( err => console.error(err) );

}