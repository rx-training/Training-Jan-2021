// Practice 1
// Create one paragraph, add some dummy text and apply blue background color using jquery
$(document).ready(function() {

	$(".btn").click(function() {
		$("p.bg-blue").css({"background-color":"cyan"});
	});
	
// Practice 2
// There is one Hide/show the text inside the #helpText span element when the user’s mouse passes over the text

	$("#helpText").hover(function() {
		$(this).hide(600);
	}, function() {
		$(this).show(600);
	});

});
// Practice 3
$('input[type="radio"]').click(function() {
	if( $('input[name="tech"]:checked') ){
		$(this).wrap("<span>You have selected " + $(this).val() +"</span>")
	}
})

// Assignment
if( $(":selected").text() == "Please select" ) {
		$("select option").each( function(index, value) {
			if(index > 0){
				$("#show").append("<li>"+ value.innerHTML + "</li>");
			}
		})
	}
$("select").change(function() {
	if( $(":selected").text() == "Please select" ) {
		$("#show").empty();
		$("select option").each( function(index, value) {
			if(index > 0){
				$("#show").append("<li>"+ value.innerHTML + "</li>");
			}
		})
	}
	else {
		$("#show").empty();
		$("#show").append("<li>" + $(":selected").text() + "</li>");
	}
})

