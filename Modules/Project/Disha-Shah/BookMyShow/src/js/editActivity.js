window.onload = () => {
    var activityArray = JSON.parse(localStorage.getItem("Activities"));
    console.log(activityArray);

    var urlString = new URL(window.location).searchParams;
    var editId = urlString.get('id');
    console.log(editId);
    var newEditId= editId-1;
    console.log(activityArray[newEditId]);

    console.log(activityArray[newEditId].Name);


    document.getElementById("activityName").value = activityArray[newEditId].Name;
    document.getElementById("activityTime").value = activityArray[newEditId].Time;
    document.getElementById("activityAgeGroup").value = activityArray[newEditId].AgeGroup;
    document.getElementById("activityDate").value = activityArray[newEditId].DateOfGame;
    document.getElementById("activityTicket").value = activityArray[newEditId].TicketPrice;
    document.getElementById("activityCategory").value = activityArray[newEditId].Category;
    document.getElementById("activityVenue").value = activityArray[newEditId].Venue;
    

    var languageitems = activityArray[newEditId].Language;
    console.log(languageitems);
    console.log(typeof languageitems);
    languageitems = languageitems.toString();
    var languageSplit = languageitems.split(',');
    //console.log(languageSplit);
    console.log(languageSplit.length);
    for(var i = 0; i< languageSplit.length; i++){
        console.log(languageSplit[i]);
        if(languageSplit[i]=='English'){
            document.getElementById('English').checked = true;
        }
        else if(languageSplit[i]=='Hindi'){
            document.getElementById('Hindi').checked = true;
        }
        else{
            document.getElementById('Gujarati').checked = true;
        }
       
    }
    

    showImg();

}

function showImg(){
    var activityArray = JSON.parse(localStorage.getItem("Activities"));

    var urlString = new URL(window.location).searchParams;
    var editId = urlString.get('id');
    console.log(editId);
    var newEditId= editId-1;
    console.log(activityArray[newEditId]);

    console.log(activityArray[newEditId].Name);

    console.log(activityArray[newEditId].ImgUrls);
    
    $('#activityImageShow').attr('src', "../" + activityArray[newEditId].ImgUrls);
    
}
		
function changeImg(){
    var activityArray = JSON.parse(localStorage.getItem("Activities"));

    var urlString = new URL(window.location).searchParams;
    var editId = urlString.get('id');
    console.log(editId);
    var newEditId= editId-1;
    console.log(activityArray[newEditId]);

    console.log(activityArray[newEditId].Name);
    

    var input = document.getElementById("activityImage");
    var ImgUrl = "images/" + input.files[0].name;
    
    activityArray[newEditId].ImgUrls = ImgUrl;
        
        localStorage.setItem("Activities", JSON.stringify(activityArray));

        showImg();
    
        return false;
}

function updateActivity(){
    var activityArray = JSON.parse(localStorage.getItem("Activities"));

    var urlString = new URL(window.location).searchParams;
    var editId = urlString.get('id');
    console.log(editId);
    var newEditId= editId-1;
    console.log(activityArray[newEditId]);

    console.log(activityArray[newEditId].Name);

        var Name = document.getElementById("activityName").value;
        
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
        errAr[2]=0;
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

        activityArray[newEditId].Name = Name;
        activityArray[newEditId].Time = Time;
        activityArray[newEditId].AgeGroup = AgeGroup;
        activityArray[newEditId].Category = CategoryValue;
        activityArray[newEditId].Language = language;
        activityArray[newEditId].DateOfGame = ActivityDate;
        activityArray[newEditId].TicketPrice = Ticket;
        activityArray[newEditId].Venue = VenueValue;
       console.log(activityArray[newEditId]);
        
       

        for(var i=0;i<errAr.length;i++){
            if(errAr[i]==1){
                flag=1;
            }
        
        }

        if(flag==0){
           
            localStorage.setItem("Activities", JSON.stringify(activityArray));
            alert("Succesfully updated details!!");
            window.location.assign("activities.html");

        }
    

    return false;
}