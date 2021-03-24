$(document).ready(function(){
    $("input[name='technology']").click(function(){
       $('#technologylable').append("You have  selected : " +$('input[name="technology"]:checked').val()+"<br>");
   });
});