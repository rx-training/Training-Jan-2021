// Practice 1

// parent() : 1 level up
// $(document).ready(function(){
//   $("span").parent().css({"color": "cyan", "border": "2px solid cyan"});
// });

// parents([element]) : all levels up or upto element
// $(document).ready(function(){
//   $("span").parents().css({"color": "cyan", "border": "2px solid cyan"});
//   $("span").parents("div").css({"color": "green", "border": "2px solid green"});
// });

// parentsUntil(element) : upto element
// $(document).ready(function(){
//   $("span").parentsUntil("div").css({"color": "green", "border": "2px solid green"});
// });


// children([e]) : only 1 level down
// $(document).ready(function(){
//   $("div div").children().css({"color": "green", "border": "2px solid green"});
// });

// find(e) : down-most to e or (*) for all descendants
// $(document).ready(function(){
//   $("div").find("span").css({"color": "green", "border": "2px solid green"});
//   $("div div").find("*").css({"color": "green", "border": "2px solid green"});
// });

// siblings(e) : same level
// $(document).ready(function(){
//   $("h3").siblings("h5").css({"color": "green", "border": "2px solid green"});
// });

// next() : next element same lvel
// $(document).ready(function(){
//   $("h3").next().css({"color": "green", "border": "2px solid green"});
// });

// nextAll() : All next elements same lvel
// $(document).ready(function(){
//   $("p").nextAll().css({"color": "green", "border": "2px solid green"});
// });

// nextUntil(e) : Until next element  same lvel
// $(document).ready(function(){
//   $("p").nextUntil("h3").css({"color": "green", "border": "2px solid green"});
// });

// same for prev(), prevAll() and prevUntil() but with reverse functionality





// Assignment
$(document).ready(function(){
  $("button").click(function(){
    $.getJSON("https://gorest.co.in/public-api/users", function(data){
      	var list = data.data;
      	$("table").html(" <tr> <th>Id</th> <th>Name</th> <th>Email</th> <th>Gender</th> <th>Status</th> </tr>")
      	list.forEach( emp => {
      		$("table").append(" <tr> <td>" + emp.id + "</td><td>" + emp.name + "</td><td>" + emp.email + "</td><td>" + emp.gender + "</td><td>" + emp.status + "</td></tr>")
      	});
    	 
    });
  });
});