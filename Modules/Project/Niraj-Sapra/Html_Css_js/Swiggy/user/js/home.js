window.onload = () => {
  citynameshow();
  restaurants();
}
function citynameshow(){ 
var lines = document.getElementById('citydynamic');
var citylist = JSON.parse(localStorage.getItem('citylist'));
var str = "";
for(i = 0; i<citylist.length ; i++){
 str +="<div class='col-6 col-sm-6 col-md-4  col-lg-3 col-xl-3 float-left colforuse mt-4 px-5'>"+citylist[i].cityname+"</div>"
}
lines.innerHTML += str;
}
function restaurants(){
  var dynemiccard = document.getElementById('dynemiccard');
  var reslist = JSON.parse(localStorage.getItem('reslist'));
  var str = "";
  for(i = 0; i<reslist.length ; i++){
  //  str +="<div class='col-md-3  col-lg-3 float-left colforuse mt-4 px-5'>"+citylist[i].cityname+"</div>";
  str +="<div class='col-12 col-sm-6 col-md-4  col-lg-3 col-xl-3 float-left cardend py-3 my-3'><div class='card cardbodys'><img class='card-img-top' src="+reslist[i].resimg+" alt='Card image'><div class='card-body px-0'><div class='card-title text-left h5'>"+reslist[i].resname+"</div><p class='card-text text-secondary'>"+reslist[i].foodtype+"</p><div class='row text-secondary sizes'><div class='col'><div class='bg-success text-white text-center'><i class='fas fa-star'></i><span>  4.2</span></div></div><div class='col'>28 MINS</div><div class='col'>₹"+reslist[i].twopersonprice+"FOR TWO</div></div><hr><div class='offercolor'>"+reslist[i].resoffer1+"</div><div class='offercolor my-1'>"+reslist[i].resoffer2+"</div><hr><div class='text-center'><a class='linkshow' href='../html/product_category.html'>Quick View</a></div></div></div></div>";
}
dynemiccard.innerHTML += str;
}