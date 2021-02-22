$(document).ready(function(){
    
    var countryArr = [];
    
    $("#Country option").each(function(index,element){
        if(element.value != "default"){
            countryArr.push(element.value);
        }
    });
    //alert(countryArr);

    $("#selectedCountry").text("Your Selected Country : "+countryArr.toString());

    $("#Country").change(function(index,element){
        //alert($("#Country").val());

        if($("#Country").val() == 'default'){
            $("#selectedCountry").text("Your Selected Country : "+countryArr.toString());
            return false;
        }
        $("#selectedCountry").text("Your Selected Country : "+$("#Country").val());

    });
});