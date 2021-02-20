
async function myData(jsonFile){
    let x = await fetch(jsonFile);
    let y = await x.text();

    var data = JSON.parse(y);
    console.log(data);
    //store each item in local storage 
    var j = 1;
    for(item of data.products){
        localStorage.setItem(j++, JSON.stringify(item) )
    }
    localStorage.removeItem("cart");
    var products = data.products;
    var tableBody = document.getElementById("tableBody");
    var i=0;

    for(item of products){
        var trBody = tableBody.insertRow();
        i++;
        for(key in item){
            var td = trBody.insertCell();
            td.innerHTML = item[key];    
        }
        td = trBody.insertCell(0);
        td.innerHTML = i;
        td = trBody.insertCell(4);
        td.innerHTML = "<input type='text' class='form-control' onchange='total(this.value,"+i+")'>";
        td = trBody.insertCell();
        td.innerHTML = "<button class='btn m-auto btn-secondary' onclick ='cart("+i+")'><i class='fa fa-shopping-cart'></i> Add to cart</button>"
        td = trBody.insertCell();
        td.innerHTML = 0;
        tableBody.appendChild(trBody);  
    }
    
}
myData("myJson.json");




var quantity = [];
var cartItem = {};

function total(a,b){
    var c = document.getElementById("tableBody").childNodes;
    var d = c[b].childNodes;
    var x = d[2].childNodes;
    var total = x[0].nodeValue * a;
    if(isNaN(total) || total <= 0){
        alert("Invalid Quantity");
    } else {
        d[6].innerHTML = total;
        quantity[b-1] = a;
        console.log(quantity);  
        
    }   
}

var flag=0;
var sum = 0;
function cart(n){

    if(isNaN(quantity[n-1]) || quantity[n-1] <= 0){
        alert("Insert valid Quantity");
    } else {
        
        flag++;
        cartItem[n] = quantity[n-1];
        console.log(cartItem);
        console.log(localStorage.getItem("cart") === null);
        localStorage.setItem("cart",JSON.stringify(cartItem));
        var data =  JSON.parse(localStorage.getItem(n));

        if(flag==1){
            document.getElementById("modalMain").innerHTML = '<table class="table" ><thead class="bg-dark text-white"><th>Product Name</th><th>Price</th><th>Quantity</th><th>total</th></thead><tbody id="modalBody"></tbody></table><div class="h3" id="finalCart" style="text-align: right;"></div>';
        }

        var modalBody = document.getElementById("modalBody");
        var trModal = modalBody.insertRow();
        var td = trModal.insertCell();
        td.innerHTML = data.Name;
        td = trModal.insertCell();
        td.innerHTML = data.Price;
        td = trModal.insertCell();
        td.innerHTML = quantity[n-1];
        td = trModal.insertCell();
        sum += quantity[n-1] * data.Price;
        console.log(sum);
        td.innerHTML = quantity[n-1] * data.Price;
        document.getElementById("finalCart").innerHTML = "Total amount : "+sum;
        
    }
}

function cartCheck(){
    if(localStorage.getItem("cart") === null){
        document.getElementById("modalMain").innerHTML = "<h3>Cart is emplty</h3>";
   
    }   
    //else{
    //     document.getElementById("modalMain").innerHTML = '<table class="table" id="modalBody"><thead class="bg-dark text-white"><th>Product Name</th><th>Price</th><th>Quantity</th><th>total</th></thead><tbody id="modalBody"></tbody>';
    // }
}

    
    /*
    for(item of products){
        var trBody = document.createElement("tr")
        for(key in item){
            var TR = document.createElement("td");
            
            var textData = document.createTextNode(item[key]);
            TR.appendChild(textData);
            trBody.appendChild(TR);
        }
        item1.appendChild(trBody);  
    }
    console.log(trBody);*/
