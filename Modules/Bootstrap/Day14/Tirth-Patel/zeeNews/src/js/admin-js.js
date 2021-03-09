//This script is for admin-page layout to display the current website state

//cards for live news admin table
var card_news = JSON.parse(localStorage.getItem("news"))
var live_news = document.getElementById("live-news")
var cards_html = "";
card_news.forEach((element,index)=> {

    let cards_table = `<tr>
                         <td><img src="${element["img-src"]}"<"/td>
                        <td>${element["card-title"]}</td>
                        <td>${element["card-body"]}</td>
                        <td><button class="btn btn-danger" type="button" onclick="deleteitem1(${index})">
                            <i class="fa fa-trash"></i>Delete</button>
                        </td>
                        </tr>`

    cards_html += cards_table;





});
live_news.innerHTML = cards_html
console.log(cards_html);

// carsousel breaking news admin-table
var car_news = JSON.parse(localStorage.getItem("breaking-news"))
var breaking_news = document.getElementById("breaking-news")
var car_html = "";
car_news.forEach((element,index) => {

    let car_table = `<tr>
                         <td><img src="${element["img-src"]}"<"/td>
                        <td>${element["car-h3"]}</td>
                        <td>${element["car-p"]}</td>
                        <td><button class="btn btn-danger" type="button" onclick="deleteitem2(${index})">
                            <i class="fa fa-trash"></i>Delete</button>
                        </td>
                        </tr>`

    car_html += car_table;





});
breaking_news.innerHTML = car_html
live_news.innerHTML = cards_html
//budget-2021 Admin-Table
var budegt_news = JSON.parse(localStorage.getItem("budget-2021"))
var budget_news  = document.getElementById("budget-2021")
var budget_html = "";
budegt_news.forEach((element,index) => {

    let budget_table = `<tr>
                         <td><img src="${element["img-src"]}"<"/td>
                        <td>${element["card-title"]}</td>
                        <td>${element["card-text"]}</td>
                        <td><button class="btn btn-danger" type="button" onclick="deleteitem3(${index})">
                            <i class="fa fa-trash"></i>Delete</button>
                        </td>
                        </tr>`

    budget_html += budget_table;





});
budget_news.innerHTML = budget_html;
function deleteitem3(index){
    console.log("del")
    var local_storage_item = JSON.parse(localStorage.getItem("budget-2021"));
    local_storage_item.splice(index,1);
    console.log(local_storage_item);
    localStorage.setItem("budget-2021",JSON.stringify(local_storage_item));
}
function deleteitem2(index){
    console.log("del")
    var local_storage_item = JSON.parse(localStorage.getItem("breaking-news"));
    local_storage_item.splice(index,1);
    console.log(local_storage_item);
    localStorage.setItem("breaking-news",JSON.stringify(local_storage_item));
}
function deleteitem1(index){
    
    console.log("del")
    var local_storage_item = JSON.parse(localStorage.getItem("news"));
    local_storage_item.splice(index,1);
    console.log(local_storage_item);
    localStorage.setItem("news",JSON.stringify(local_storage_item));
    
}
