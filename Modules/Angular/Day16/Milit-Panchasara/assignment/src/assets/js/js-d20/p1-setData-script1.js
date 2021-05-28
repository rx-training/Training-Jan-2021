var local_data = {
    "products": [
        {
            "Name": "Cheese",
            "Price": 2.50,
            "Location": "Refrigerated foods"
        },
        {
            "Name": "Crisps",
            "Price": 3,
            "Location": "the Snack isle"
        },
        {
            "Name": "Pizza",
            "Price": 4,
            "Location": "Refrigerated foods"
        }
    ]
}

var session_data = {
    "products": [
        {
            "Name": "Chocolate",
            "Price": 1.50,
            "Location": "the Snack isle"
        },
        {
            "Name": "Self-raising flour",
            "Price": 1.50,
            "Location": "Home baking"
        },
        {
            "Name": "Ground almonds",
            "Price": 3,
            "Location": "Home baking"
        }
    ]
}

localStorage.setItem("items", JSON.stringify(local_data));

sessionStorage.setItem('items',JSON.stringify(session_data));