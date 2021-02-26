/*$(document).ready(function(){
    $("#saveMovie").click(function(){
        var Id = document.getElementById("movieId").value;
        var Name = document.getElementById("movieName").value;
        var Image = document.getElementById("movieImage").value;
        var Rating = document.getElementById("movieRating").value;
        var Time = document.getElementById("movieTime").value;
        var DateOfRelease = document.getElementById("movieReleaseDate").value;
        var errAr = [];
        var flag = 0;

        if(Id == ""){
            $("#errId").text('Id is required');
            errAr[0]=1;
        }
        else{
            $("#errId").text('');
            errAr[0]=0;
        }
        if(Name == ""){
            $("#errName").text('Name is required');
            errAr[1]=1;
        }
        else{
            $("#errName").text('');
            errAr[1]=0;
        }
        if(Image == ""){
            $("#errImage").text('Image is required');
            errAr[2]=1;
        }
        else{
            $("#errImage").text('');
            errAr[2]=0;
        }
        if(Rating == ""){
            $("#errRating").text('Rating is required');
            errAr[3]=1;
        }
        else{
            $("#errRating").text('');
            errAr[3]=0;
        }
        if(Time == ""){
            $("#errTime").text('Time is required');
            errAr[4]=1;
        }
        else{
            $("#errTime").text('');
            errAr[4]=0;
        }
        if(DateOfRelease == ""){
            $("#errReleaseDate").text('Date Of Release is required');
            errAr[5]=1;
        }
        else{
            $("#errReleaseDate").text('');
            errAr[5]=0;
        }
        if(document.getElementById("2D").checked==false && document.getElementById("3D").checked==false && document.getElementById("4DX").checked==false && document.getElementById("MX4D").checked==false) {
            $("#errFilm").text('Film is Required').addClass('mt-2');
            errAr[6]=1;
        }
        else{
            $("#errFilm").text('');
            errAr[6]=0;
        }
        if(document.getElementById("English").checked==false && document.getElementById("Tamil").checked==false && document.getElementById("Hindi").checked==false && document.getElementById("Telugu").checked==false) {
            $("#errLanguage").text('Language is Required').addClass('mt-2');
            errAr[7]=1;
        }
        else{
            $("#errLanguage").text('');
            errAr[7]=0;
        }
        if(document.getElementById("Action").checked==false && document.getElementById("Thriller").checked==false && document.getElementById("Comedy").checked==false && document.getElementById("Drama").checked==false && document.getElementById("Family").checked==false && document.getElementById("Animation").checked==false) {
            $("#errGenre").text('Genre is Required').addClass('mt-2');
            errAr[8]=1;
        }
        else{
            $("#errGenre").text('');
            errAr[8]=0;
        }
        if(document.getElementById("UA").checked==false && document.getElementById("U").checked==false && document.getElementById("A").checked==false) {
            $("#errCertification").text('Certification is Required').addClass('mt-2');
            errAr[9]=1;
        }
        else{
            $("#Certification").text('');
            errAr[9]=0;
        }
        if(document.getElementById("Recommended").checked==false && document.getElementById("Premiere").checked==false) {
            $("#errCategory").text('Category is Required').addClass('mt-2');
            errAr[10]=1;
        }
        else{
            $("#Category").text('');
            errAr[10]=0;
        }

        var film = [];
        $.each($("input[name='film']:checked"), function() {
            film.push($(this).val());
        });
        console.log(film.join(","));

        var language = [];
        $.each($("input[name='language']:checked"), function() {
            language.push($(this).val());
        });
        console.log(language.join(","));

        var genre = [];
        $.each($("input[name='genre']:checked"), function() {
            genre.push($(this).val());
        });
        console.log(genre.join("/"));

        var certification = "";
        certification =  $('input[name="certification"]:checked').val();
        console.log(certification);


        var input = document.getElementById("movieImage");
        var imgs = [];
        for(var i=0;i<input.files.length;i++){
            console.log(input.files[i].name);
            imgs.push(input.files[i].name);
        }
        var imgsJoin = imgs.join(",")
        console.log(imgsJoin);


        var recommended = false;
        var premiere = false;
        var ImgUrls = "";
        $.each($("input[name='category']:checked"), function() {
            if($(this).val()=="Recommended"){
                recommended = true;
               
            }
            if($(this).val()=="Premiere"){
                premiere = true;
                
            }
        });
        if((recommended == true && premiere == true) || (recommended == true && premiere == false)){
            ImgUrls = "images/" + imgsJoin;
                
        }
        else if((recommended == false && premiere == true)){
            ImgUrls = ",images/" + imgsJoin;
        }
        console.log(recommended + " " + premiere);

        //ImgUrls = ",images/" + imgsJoin;
        console.log(ImgUrls);

        
        var movie = {
           
            "Id":Id, 
            "Name": Name, 
            "ImgUrls": ImgUrls,
            "Rating": Rating,
            "Film": film,
            "Language": language,
            "Time": Time,
            "Genre": genre,
            "Certification": certification,
            "DateOfRelease": DateOfRelease,
            "Recommended": recommended,
            "Premiere": premiere 
        }

        for(var i=0;i<errAr.length;i++){
            if(errAr[i]==1){
                flag=1;
            }
        
        }

        if(flag==0){
            var moviesArray = JSON.parse(localStorage.getItem("Movies"));
            console.log(moviesArray.Movies[0].Name);
            moviesArray.Movies.push(movie);
            console.log(moviesArray.Movies);
            localStorage.setItem("Movies", JSON.stringify(moviesArray));
            window.location.assign("movies.html");
        }

    });
    
});*/
//var a={};
    
    function addMovie() {
        var Id = document.getElementById("movieId").value;
        var Name = document.getElementById("movieName").value;
        var Image = document.getElementById("movieImage").value;
        var Rating = document.getElementById("movieRating").value;
        var Time = document.getElementById("movieTime").value;
        var DateOfRelease = document.getElementById("movieReleaseDate").value;
        var errAr = [];
        var flag = 0;

        if(Id == ""){
            document.getElementById("errId").innerHTML='Id is required';
            errAr[0]=1;
        }
        else{
            document.getElementById("errId").innerHTML='';
            errAr[0]=0;
        }
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
        if(document.getElementById("2D").checked==false && document.getElementById("3D").checked==false && document.getElementById("4DX").checked==false && document.getElementById("MX4D").checked==false) {
            document.getElementById("errFilm").innerHTML='<span class="mt-2">Film is Required</span>';
            errAr[6]=1;
        }
        else{
            document.getElementById("errFilm").innerHTML='';
            errAr[6]=0;
        }
        if(document.getElementById("English").checked==false && document.getElementById("Tamil").checked==false && document.getElementById("Hindi").checked==false && document.getElementById("Telugu").checked==false) {
            document.getElementById("errLanguage").innerHTML='<span class="mt-2">Language is Required</span>'
            errAr[7]=1;
        }
        else{
            document.getElementById("errLanguage").innerHTML='';
            errAr[7]=0;
        }
        if(document.getElementById("Action").checked==false && document.getElementById("Thriller").checked==false && document.getElementById("Comedy").checked==false && document.getElementById("Drama").checked==false && document.getElementById("Family").checked==false && document.getElementById("Animation").checked==false) {
            document.getElementById("errGenre").innerHTML='<span class="mt-2">Genre is Required</span>';
            errAr[8]=1;
        }
        else{
            document.getElementById("errGenre").innerHTML='';
            errAr[8]=0;
        }
        if(document.getElementById("UA").checked==false && document.getElementById("U").checked==false && document.getElementById("A").checked==false) {
            document.getElementById("errCertification").innerHTML='Certification is Required';
            errAr[9]=1;
        }
        else{
            document.getElementById("errCertification").innerHTML='';
            errAr[9]=0;
        }
        if(document.getElementById("Recommended").checked==false && document.getElementById("Premiere").checked==false) {
            document.getElementById("errCategory").innerHTML='Category is Required';
            errAr[10]=1;
        }
        else{
            document.getElementById("errCategory").innerHTML='';
            errAr[10]=0;
        }


        var film = [];
        // $.each($("input[name='film']:checked"), function() {
        //     film.push($(this).val());
        // });
        var filmitems=document.getElementsByName('film');
		for(var i=0; i<filmitems.length; i++){
			if(filmitems[i].type=='checkbox' && filmitems[i].checked==true)
				film.push(filmitems[i].value);
		}
        console.log(film.join(","));

        var language = [];
        // $.each($("input[name='language']:checked"), function() {
        //     language.push($(this).val());
        // });
        var languageitems=document.getElementsByName('language');
		for(var i=0; i<languageitems.length; i++){
			if(languageitems[i].type=='checkbox' && languageitems[i].checked==true)
				language.push(languageitems[i].value);
		}
        console.log(language.join(","));

        var genre = [];
        // $.each($("input[name='genre']:checked"), function() {
        //     genre.push($(this).val());
        // });
        var genreitems=document.getElementsByName('genre');
		for(var i=0; i<genreitems.length; i++){
			if(genreitems[i].type=='checkbox' && genreitems[i].checked==true)
				genre.push(genreitems[i].value);
		}
        console.log(genre.join("/"));

        var certification = "";
        //certification =  $('input[name="certification"]:checked').val();
        var certificationitems=document.getElementsByName('certification');
		for(var i=0; i<certificationitems.length; i++){
			if(certificationitems[i].type=='radio' && certificationitems[i].checked==true)
				certification = certificationitems[i].value;
		}
        console.log(certification);


        var input = document.getElementById("movieImage");
        var imgs = [];
        for(var i=0;i<input.files.length;i++){
            console.log(input.files[i].name);
            imgs.push(input.files[i].name);
        }
        var imgsJoin = imgs.join(",")
        console.log(imgsJoin);


        var recommended = false;
        var premiere = false;
        var ImgUrls = "";
        // $.each($("input[name='category']:checked"), function() {
        //     if($(this).val()=="Recommended"){
        //         recommended = true;
               
        //     }
        //     if($(this).val()=="Premiere"){
        //         premiere = true;
                
        //     }
        // });
        var categoryitems=document.getElementsByName('category');
		for(var i=0; i<categoryitems.length; i++){
			if(categoryitems[i].type=='checkbox' && categoryitems[i].checked==true && categoryitems[i].value=="Recommended"){
				recommended = true;
            }
            if(categoryitems[i].type=='checkbox' && categoryitems[i].checked==true && categoryitems[i].value=="Premiere"){
				premiere = true;
            }
		}
        if((recommended == true && premiere == true) || (recommended == true && premiere == false)){
            ImgUrls = "images/" + imgsJoin;
                
        }
        else if((recommended == false && premiere == true)){
            ImgUrls = ",images/" + imgsJoin;
        }
        console.log(recommended + " " + premiere);

        //ImgUrls = ",images/" + imgsJoin;
        console.log(ImgUrls);

        
        var movie = {
           
            "Id":Id, 
            "Name": Name, 
            "ImgUrls": ImgUrls,
            "Rating": Rating,
            "Film": film,
            "Language": language,
            "Time": Time,
            "Genre": genre,
            "Certification": certification,
            "DateOfRelease": DateOfRelease,
            "Recommended": recommended,
            "Premiere": premiere 
        }

        for(var i=0;i<errAr.length;i++){
            if(errAr[i]==1){
                flag=1;
            }
        
        }

        if(flag==0){
            var moviesArray = JSON.parse(localStorage.getItem("Movies"));
            console.log(moviesArray.Movies[0].Name);
            moviesArray.Movies.push(movie);
            console.log(moviesArray.Movies);
            a = {
                Movies: moviesArray.Movies,
            };
            localStorage.setItem("Movies", JSON.stringify(a));
            //showOnUser(a);
            window.location.assign("movies.html");
        

        

        }
        return false;
    }

    