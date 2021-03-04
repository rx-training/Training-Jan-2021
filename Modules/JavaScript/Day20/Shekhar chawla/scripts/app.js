getJsonFile("data.json");

async function getJsonFile(file) {
  let x = await fetch(file);

  if (typeof(Storage) !== "undefined") {
  // Store
  localStorage.setItem('storeData', data);

  // Retrieve
  var getData = localStorage.getItem('storeData');
  var bag = JSON.parse(getData);

  console.log(bag['products'][0]['Name']);
  document.getElementById("result").innerHTML = bag['products'][0]['Name'];

  
  // console.log(Object.keys(bag["products"]).length)
  var row = '<div class="row my-2">'
  var text = ""
  for (var i = 1; i < Object.keys(bag["products"]).length; i++) {
  	text += '<div class="col-3">'+[i]+'</div>'
  	text += '<div class="col-3">'+bag["products"][i]['Name']+'</div>'
  	text += '<div class="col-3">'+bag["products"][i]['Price']+'</div>'
  	text += '<div class="col-3">'+ '<button type="button" onclick="addToCart(this.id)" class="my-2 btn btn-light" id="item'+[i]+'">Add to Cart</button>' +'</div>'
  }
  row = row + text + '</div>'
  document.getElementById("result2").innerHTML = row;

	} else {
	document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
	}
}
a = [];
var addToCart = (id) => {
	i = id[4]
	var getData = localStorage.getItem('storeData');
  	var bag = JSON.parse(getData);	

	var row = '<div class="row my-2">'
  	var text = ""
  	text += '<div class="col-3">'+[i]+'</div>'
  	text += '<div class="col-3">'+bag["products"][i]['Name']+'</div>'
  	text += '<div class="col-3">'+bag["products"][i]['Price']+'</div>'
  	row = row + text + '</div>'
  	
  	a.push(row);
  	
  	document.getElementById("cartModal").innerHTML = a.join("");
}