
     function signin(){

        var username = document.getElementById("username").value;
        var password = document.getElementById("password").value;
        var flag =1;

        if(username =="" || password == ""){
            alert("empty input not allowed")
        }
        else{
            var detail = JSON.parse(localStorage.getItem("admin"))
            
            for( var i=0 ; i < detail.length ; i++){
                if(username == detail[i].username || password == detail[i].password){
                    alert("successfull");
                    flag = 0;
                    window.location.assign('admin-layout.html')

                }
                
            }
            if(flag == 1){
                alert('invalid username and password')
            }
        }
        return false;
       }
  



    



 