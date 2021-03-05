const submit = document.getElementById('submit');
        let username = document.getElementById('username');
        let password = document.getElementById('password');
        submit.addEventListener('click',function(){
            
            let admin = JSON.parse(window.localStorage.getItem('admin'));
            
            if(username.value==admin.username && password.value==admin.password){
                localStorage.setItem('flag','1');
                window.location.href = 'admin.html';
            }else{
                document.getElementById('error').textContent = 'Incorrect Username and Password.';
                document.getElementById('error').style.color = 'red';
            }
        })