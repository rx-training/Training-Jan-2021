$(document).ready(function(){
    $ ("#mouseenter").mouseenter(function(){
       $("#helpText").hide(); 
    });
    $ ("#mouseouter").mouseleave(function(){
        $("#helpText").show(); 
     });
});