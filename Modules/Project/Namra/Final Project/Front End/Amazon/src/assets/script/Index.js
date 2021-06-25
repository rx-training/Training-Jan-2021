$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();   
  });

var availableTags;
window.onload = function(){
  var tags = fetch("https://localhost:44368/api/Product/SearchTags");
  tags.then(result=>result.json()).then(y=>{
    availableTags = JSON.stringify(y) ;
  });
  alert(availableTags);
} 
$('#search1').autocomplete({
  source : availableTags
});

$('#search1').change(function () {
  alert($('#search1').val());
});
