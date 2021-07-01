
console.log("js");
var card1 = document.getElementById('subnews');
var carousel = document.getElementById('corousel-news')
var card_grid = document.getElementById('cards')
let newshtml = "";
let newshtml2 = "";
let cardshtml ="";

fetch("./json/news.json").then(resp => resp.json()).then(data => {
    var news = data;
    //console.log(news)
   // let news_string =  JSON.stringify(news);
  //  localStorage.setItem("news",news_string)
    var data = JSON.parse(localStorage.getItem("news"))
   // console.log(data)
    data.forEach(element => {

        let card1news = `<div class="card">
                                <img src=${element["img-src"]} alt="" height="100%" class="card-img">
                                         <div class="card-img-overlay">
                                             <h3 class="card-title">
                                                 ${element["card-title"]}
                                            </h5>
                                                <p class="card-text">
                                                ${element["card-body"]}
                                                </p>
                                         </div>      
                             </div>`;
        newshtml += card1news;
      // console.log(newshtml)
       
    });
    card1.innerHTML = newshtml;
    // console.log(src)
})

fetch("./json/carousel.json").then(resp => resp.json()).then(data =>{
    var car =data;
    //console.log(car)
   //let carousel_string = JSON.stringify(car);
   // localStorage.setItem("breaking-news",carousel_string);
    var data2 = JSON.parse(localStorage.getItem("breaking-news"));
   // console.log(data2)
    data2.forEach(element =>{
       
        
        //console.log(element)
        let carouselnews = ` <div class="carousel-item ">
                                    <img src=${element["img-src"]} width="100%" >
                                    <div class="carousel-caption">
                                            <h3>${element["car-h3"]}</h3>
                                            <p>${element["car-p"]}</p>
                                     </div>
                             </div>`;
        newshtml2 += carouselnews;
      
       

    });
    console.log(newshtml2)
    carousel.innerHTML = newshtml2;
    $(".carousel-inner > .carousel-item:first").addClass("active");
    
})
fetch("./json/cards.json").then(resp => resp.json()).then(data =>{
    var card =data;
    //console.log(car);
    //let cards_string    = JSON.stringify(card);
    //localStorage.setItem("budget-2021",cards_string);
    var data3 = JSON.parse(localStorage.getItem("budget-2021"));

    data3.forEach(element =>{
       
        
        //console.log(element)
        let cardsnews = `<div class="card">
                            <img src=${element["img-src"]}>
                                 <div class="card-body">
                                         <h5 class="card-title">
                                         ${element["card-title"]}
                                         </h5>
                                            <p class="card-text">${element["card-text"]}
                                             </p>
                                </div>
                            <div class="card-footer">
                             <small class="text-muted">Feb 01,2021,1,02 PM IST</small>
                            </div>
                        </div>`;
         cardshtml += cardsnews;
      
       

    });
    //console.log(newshtml2)
    card_grid.innerHTML = cardshtml;
    $(".card > img").addClass("card-img-top", "img-fluid");
})


