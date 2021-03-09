$(document).ready(function(){
    // Excercise 1
    
    $("#excercise1BTN").click(function(){
        $("#excercise1Out").html("<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque soluta mollitia odit ratione commodi tempora blanditiis officiis nobis, error voluptatibus accusamus voluptas illo at cupiditate facere beatae ullam. Cum, voluptates!</p>");
        $("#excercise1Out").css("background-color", "blue");
    });

    // Excercise 2 

    $("#helpText").hover(function(){
        $(this).toggle();
    });

    // Excercise 3
    $("input[name='technology']").change(function(){
        //alert(($("input[name='technology']:checked").val()).toUpperCase());
        $("#technologySelected").html("You have selected <super>"+($("input[name='technology']:checked").val()).toUpperCase()+"</super>")
    });
});
