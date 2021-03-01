window.onload = () => {
    var moviesArray = JSON.parse(localStorage.getItem("Movies"));
    console.log(moviesArray.Movies);

    var urlString = new URL(window.location).searchParams;
    var editId = urlString.get('id');
    console.log(editId);
    var newEditId= editId-1;
    console.log(moviesArray.Movies[newEditId]);

    console.log(moviesArray.Movies[newEditId].Name);


    document.getElementById("movieName").value = moviesArray.Movies[newEditId].Name;
    document.getElementById("movieRating").value = moviesArray.Movies[newEditId].Rating;
    document.getElementById("movieTime").value = moviesArray.Movies[newEditId].Time;
    document.getElementById("movieReleaseDate").value = moviesArray.Movies[newEditId].DateOfRelease;
    document.getElementById("movieAbout").value = moviesArray.Movies[newEditId].About;


    


    var filmitems=moviesArray.Movies[newEditId].Film;
    console.log(filmitems);
    filmitems = filmitems.toString();
    var filmSplit = filmitems.split(',');
    console.log(filmSplit.length);
    for(var i = 0; i< filmSplit.length; i++){
        console.log(filmSplit[i]);
        if(filmSplit[i]=='2D'){
            document.getElementById('2D').checked = true;
        }
        else if(filmSplit[i]=='3D'){
            document.getElementById('3D').checked = true;
        }
        else if(filmSplit[i]=='4DX'){
            document.getElementById('4DX').checked = true;
        }
        else{
            document.getElementById('MX4D').checked = true;
        }
    }

    var languageitems=moviesArray.Movies[newEditId].Language;
    console.log(languageitems);
    languageitems = languageitems.toString();
    var languageSplit = languageitems.split(',');
    console.log(languageSplit.length);
    for(var i = 0; i< languageSplit.length; i++){
        console.log(languageSplit[i]);
        if(languageSplit[i]=='English'){
            document.getElementById('English').checked = true;
        }
        else if(languageSplit[i]=='Hindi'){
            document.getElementById('Hindi').checked = true;
        }
        else if(languageSplit[i]=='Tamil'){
            document.getElementById('Tamil').checked = true;
        }
        else{
            document.getElementById('Telugu').checked = true;
        }
    }


    var genreitems=moviesArray.Movies[newEditId].Genre;
    console.log(genreitems);
    console.log(typeof genreitems);
    genreitems = genreitems.toString();
    console.log(genreitems);
    console.log(typeof genreitems);
    var genreSplit = genreitems.split(',');
    console.log(genreSplit);
    console.log(genreSplit.length);
    for(var i = 0; i< genreSplit.length; i++){
        console.log(genreSplit[i]);
        if(genreSplit[i]=='Action'){
            document.getElementById('Action').checked = true;
        }
        else if(genreSplit[i]=='Thriller'){
            document.getElementById('Thriller').checked = true;
        }
        else if(genreSplit[i]=='Comedy'){
            document.getElementById('Comedy').checked = true;
        }
        else if(genreSplit[i]=='Drama'){
            document.getElementById('Drama').checked = true;
        }
        else if(genreSplit[i]=='Family'){
            document.getElementById('Family').checked = true;
        }
        else{
            document.getElementById('Animation').checked = true;
        }
    }

    var certificationitems=moviesArray.Movies[newEditId].Certification;
    console.log(certificationitems);

        if(certificationitems=='UA'){
            document.getElementById('UA').checked = true;
        }
        else if(certificationitems=='U'){
            document.getElementById('U').checked = true;
        }
        else{
            document.getElementById('A').checked = true;
        }
        

    if(moviesArray.Movies[newEditId].Recommended == true){
        document.getElementById('Recommended').checked = true;
    }
    if(moviesArray.Movies[newEditId].Premiere == true){
        document.getElementById('Premiere').checked = true;
    }

    showImg();

}

function showImg(){
    var moviesArray = JSON.parse(localStorage.getItem("Movies"));

    var urlString = new URL(window.location).searchParams;
    var editId = urlString.get('id');
    console.log(editId);
    var newEditId= editId-1;
    console.log(moviesArray.Movies[newEditId]);

    console.log(moviesArray.Movies[newEditId].Name);

    console.log(moviesArray.Movies[newEditId].ImgUrls);
    
    $('#movieImageShow').attr('src', "../" + moviesArray.Movies[newEditId].ImgUrls);
    
}
		
function changeImg(){
    var moviesArray = JSON.parse(localStorage.getItem("Movies"));

    var urlString = new URL(window.location).searchParams;
    var editId = urlString.get('id');
    console.log(editId);
    var newEditId= editId-1;
    console.log(moviesArray.Movies[newEditId]);

    console.log(moviesArray.Movies[newEditId].Name);
    

    var input = document.getElementById("movieImage");
    var ImgUrl = "images/" + input.files[0].name;
    
        moviesArray.Movies[newEditId].ImgUrls = ImgUrl;
        
        localStorage.setItem("Movies", JSON.stringify(moviesArray));

        showImg();
    
        return false;
}

function updateMovie(){
    var moviesArray = JSON.parse(localStorage.getItem("Movies"));

    var urlString = new URL(window.location).searchParams;
    var editId = urlString.get('id');
    console.log(editId);
    var newEditId= editId-1;
    console.log(moviesArray.Movies[newEditId]);

    console.log(moviesArray.Movies[newEditId].Name);

    var Name = document.getElementById("movieName").value;
    var Rating = document.getElementById("movieRating").value;
    var Time = document.getElementById("movieTime").value;
    var DateOfRelease = document.getElementById("movieReleaseDate").value;
    var About = document.getElementById("movieAbout").value;
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
        
        if(Rating == ""){
            document.getElementById("errRating").innerHTML='Rating is required';
            errAr[3]=1;
        }
        else{
            document.getElementById("errRating").innerHTML='';
            errAr[3]=0;
        }
        if(Time == ""){
            document.getElementById("errTime").innerHTML='Time is required';
            errAr[4]=1;
        }
        else{
            document.getElementById("errTime").innerHTML='';
            errAr[4]=0;
        }
        if(DateOfRelease == ""){
            document.getElementById("errReleaseDate").innerHTML='Date Of Release is required';
            errAr[5]=1;
        }
        else{
            document.getElementById("errReleaseDate").innerHTML='';
            errAr[5]=0;
        }
        if(About == ""){
            document.getElementById("errAbout").innerHTML='About is required';
            errAr[6]=1;
        }
        else{
            document.getElementById("errAbout").innerHTML='';
            errAr[6]=0;
        }
        if(document.getElementById("2D").checked==false && document.getElementById("3D").checked==false && document.getElementById("4DX").checked==false && document.getElementById("MX4D").checked==false) {
            document.getElementById("errFilm").innerHTML='<span class="mt-2">Film is Required</span>';
            errAr[7]=1;
        }
        else{
            document.getElementById("errFilm").innerHTML='';
            errAr[7]=0;
        }
        if(document.getElementById("English").checked==false && document.getElementById("Tamil").checked==false && document.getElementById("Hindi").checked==false && document.getElementById("Telugu").checked==false) {
            document.getElementById("errLanguage").innerHTML='<span class="mt-2">Language is Required</span>'
            errAr[8]=1;
        }
        else{
            document.getElementById("errLanguage").innerHTML='';
            errAr[8]=0;
        }
        if(document.getElementById("Action").checked==false && document.getElementById("Thriller").checked==false && document.getElementById("Comedy").checked==false && document.getElementById("Drama").checked==false && document.getElementById("Family").checked==false && document.getElementById("Animation").checked==false) {
            document.getElementById("errGenre").innerHTML='<span class="mt-2">Genre is Required</span>';
            errAr[9]=1;
        }
        else{
            document.getElementById("errGenre").innerHTML='';
            errAr[9]=0;
        }
        if(document.getElementById("UA").checked==false && document.getElementById("U").checked==false && document.getElementById("A").checked==false) {
            document.getElementById("errCertification").innerHTML='Certification is Required';
            errAr[10]=1;
        }
        else{
            document.getElementById("errCertification").innerHTML='';
            errAr[10]=0;
        }
        if(document.getElementById("Recommended").checked==false && document.getElementById("Premiere").checked==false) {
            document.getElementById("errCategory").innerHTML='Category is Required';
            errAr[11]=1;
        }
        else{
            document.getElementById("errCategory").innerHTML='';
            errAr[11]=0;
        }


        var film = [];
        
        var filmitems=document.getElementsByName('film');
		for(var i=0; i<filmitems.length; i++){
			if(filmitems[i].type=='checkbox' && filmitems[i].checked==true)
				film.push(filmitems[i].value);
		}
        console.log(film.join(","));

        var language = [];
        
        var languageitems=document.getElementsByName('language');
		for(var i=0; i<languageitems.length; i++){
			if(languageitems[i].type=='checkbox' && languageitems[i].checked==true)
				language.push(languageitems[i].value);
		}
        console.log(language.join(","));

        var genre = [];
        
        var genreitems=document.getElementsByName('genre');
		for(var i=0; i<genreitems.length; i++){
			if(genreitems[i].type=='checkbox' && genreitems[i].checked==true)
				genre.push(genreitems[i].value);
		}
        console.log(genre.join("/"));

        var certification = "";
        
        var certificationitems=document.getElementsByName('certification');
		for(var i=0; i<certificationitems.length; i++){
			if(certificationitems[i].type=='radio' && certificationitems[i].checked==true)
				certification = certificationitems[i].value;
		}
        console.log(certification);

        var recommended = false;
         var premiere = false;
        

        var categoryitems=document.getElementsByName('category');
		 for(var i=0; i<categoryitems.length; i++){
		 	if(categoryitems[i].type=='checkbox' && categoryitems[i].checked==true && categoryitems[i].value=="Recommended"){
		 		recommended = true;
             }
             if(categoryitems[i].type=='checkbox' && categoryitems[i].checked==true && categoryitems[i].value=="Premiere"){
		 		premiere = true;
             }
		 }

        moviesArray.Movies[newEditId].Name = Name;
        moviesArray.Movies[newEditId].Rating = Rating;
        moviesArray.Movies[newEditId].Film = film;
        moviesArray.Movies[newEditId].Language = language;
        moviesArray.Movies[newEditId].Time = Time;
        moviesArray.Movies[newEditId].Genre = genre;
        moviesArray.Movies[newEditId].Certification = certification;
        moviesArray.Movies[newEditId].DateOfRelease = DateOfRelease;
        moviesArray.Movies[newEditId].About = About;
        moviesArray.Movies[newEditId].Recommended = recommended;
        moviesArray.Movies[newEditId].Premiere = premiere;
    

        for(var i=0;i<errAr.length;i++){
            if(errAr[i]==1){
                flag=1;
            }
        
        }

        if(flag==0){
            
            localStorage.setItem("Movies", JSON.stringify(moviesArray));
            alert("Succesfully updated details!!");
            window.location.assign("movies.html");

        }
    

    return false;
}