window.onload = () => {
    
    function checkLogin(){
        if(localStorage.getItem("userDetails") === null){
            window.location.assign("login.html")
        }
    }

    checkLogin();
}