$(document).ready(function() { 
    var url = $("#video2").attr('src'); 
    $("#video1").on('hide.bs.modal', function() { 
        $("#video2").attr('src', ''); 
    }); 
    $("#video1").on('show.bs.modal', function() { 
        $("#video2").attr('src', url); 
    }); 
}); 

