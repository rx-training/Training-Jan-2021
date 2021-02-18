function signInPage(){
    window.location.assign("./Asset/Pages/Login.html");
    document.getElementById("cartCount").innerHTML = JSON.parse(localStorage.getItem("Cart")).Cart.length;

}
window.onload=function(){
    var userData = JSON.parse(localStorage.getItem('user'));
    if(userData == null){
    }
    else{
        document.getElementById('signIn').innerText=userData.Name;
    }

    document.getElementById("userName").innerHTML=userData.Name;
    document.getElementById("userContact").innerHTML=userData.Contact;
    document.getElementById("userEmail").innerHTML=userData.Email;
    document.getElementById("userGender").innerHTML = userData.Gender;

    if(userData.Gender == "Male"){
        document.getElementById("imageUser").innerHTML = "<img class='img-fluid rounded' src='../Image/male.png'>";
        document.getElementsByClassName("labelUser").style.color ="blue";

    }
    else{
        document.getElementById("imageUser").innerHTML = "<img class='img-fluid rounded'src='../Image/female.png'>";
        document.getElementsByClassName("labelUser").style.color ="green";
    }

}
function signOut(){
    var userData = JSON.parse(localStorage.getItem('user'));
    if(userData == null){
        localStorage.setItem('user',userData);
        window.location.href="./Asset/Pages/Login.html";
    }
    else{
        window.location.href="../../Index.html"
        
    }
}