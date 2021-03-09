$(document).ready(function () {
    

    $("#activityImage").change( function() {

        var input = document.getElementById("activityImage");
        $('#activityImageShow').attr('src', "../images/" + input.files[0].name);
        document.getElementById("errImage").innerHTML='';
         
    });
    
})
   
   function addActivity() {
        
        var Name = document.getElementById("activityName").value;
        var Image = document.getElementById("activityImage").value;
        var Time = document.getElementById("activityTime").value;
        var AgeGroup = document.getElementById("activityAgeGroup").value;
        var ActivityDate = document.getElementById("activityDate").value;
        var Ticket = document.getElementById("activityTicket").value;
        var errAr = [];
        var flag = 0;

        
        if(Name == ""){
            document.getElementById("errName").innerHTML='Name is required';
            errAr[1]=1;
        }
        else{
            document.getElementById("errName").innerHTML='';
            errAr[1]=0;
        }
        if(Image == ""){
            document.getElementById("errImage").innerHTML='Image is required';
            errAr[2]=1;
        }
        else{
            document.getElementById("errImage").innerHTML='';
            errAr[2]=0;
        }
        if(Time == ""){
            document.getElementById("errTime").innerHTML='Time is required';
            errAr[3]=1;
        }
        else{
            document.getElementById("errTime").innerHTML='';
            errAr[3]=0;
        }
        if(AgeGroup == ""){
            document.getElementById("errAgeGroup").innerHTML='AgeGroup is required';
            errAr[4]=1;
        }
        else{
            document.getElementById("errAgeGroup").innerHTML='';
            errAr[4]=0;
        }
        if(ActivityDate == ""){
            document.getElementById("errActivityDate").innerHTML='Date Of Activity is required';
            errAr[5]=1;
        }
        else{
            document.getElementById("errActivityDate").innerHTML='';
            errAr[5]=0;
        }
        if(Ticket == ""){
            document.getElementById("errTicket").innerHTML='Ticket is required';
            errAr[6]=1;
        }
        else{
            document.getElementById("errTicket").innerHTML='';
            errAr[6]=0;
        }

        var Category = document.getElementById("activityCategory");
        console.log(Category.value);
        var CategoryValue = Category.value;
        if(CategoryValue == ""){
            document.getElementById("errCategory").innerHTML = '<span class="mt-2">Category is Required</span>';
        
            errAr[7]=1;
        }
        else{
            document.getElementById("errCategory").innerHTML='';
            errAr[7]=0;
        }

        if(document.getElementById("English").checked==false && document.getElementById("Gujarati").checked==false && document.getElementById("Hindi").checked==false) {
            document.getElementById("errLanguage").innerHTML='<span class="mt-2">Language is Required</span>'
            errAr[8]=1;
        }
        else{
            document.getElementById("errLanguage").innerHTML='';
            errAr[8]=0;
        }

        var Venue = document.getElementById("activityVenue");
        console.log(Venue.value);
        var VenueValue = Venue.value;
        if(VenueValue == ""){
            document.getElementById("errVenue").innerHTML = '<span class="mt-2">Venue is Required</span>';
            errAr[9]=1;
        }
        else{
            document.getElementById("errVenue").innerHTML='';
            errAr[9]=0;
        }
        

        var language = [];
        
        var languageitems=document.getElementsByName('language');
		for(var i=0; i<languageitems.length; i++){
			if(languageitems[i].type=='checkbox' && languageitems[i].checked==true)
				language.push(languageitems[i].value);
		}
        console.log(language.join(","));

        var input = document.getElementById("activityImage");
        var ImgUrl = "images/" + input.files[0].name;
        

        var activityArray = JSON.parse(localStorage.getItem("Activities"));
        console.log(activityArray);
        
        var activity = {
           
            "Id": activityArray.length+1, 
            "Name": Name, 
            "ImgUrls": ImgUrl,
            "Time": Time,
            "AgeGroup": AgeGroup,
            "Language": language,
            "DateOfGame": ActivityDate,
            "TicketPrice": Ticket,
            "Category": CategoryValue,
            "Venue": VenueValue 
        }

        for(var i=0;i<errAr.length;i++){
            if(errAr[i]==1){
                flag=1;
            }
        
        }

        if(flag==0){
            
            console.log(activityArray[0].Name);
            activityArray.push(activity);
            console.log(activityArray);
           
            localStorage.setItem("Activities", JSON.stringify(activityArray));
            alert("Succesfully added new fun activity!!");
            window.location.assign("activities.html");

        }
        return false;
    }

    