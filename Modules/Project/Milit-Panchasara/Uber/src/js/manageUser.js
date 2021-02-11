var totalUsers = 0;

function verifyNumberAndRedirect() {
    var mobile = document.getElementById("contact-input").value;
    if(mobile.match(/[1-9]{1}[0-9]{9}/g) == null || mobile != mobile.match(/[1-9]{1}[0-9]{9}/g)) {
        document.getElementById('error-message').classList.remove('d-none');
        return;
    }
    let users = localStorage.getItem('users');

    if(users != null) {
        users = JSON.parse(users);
        let isExist = false;
        totalUsers = users.length;
        localStorage.setItem('totalUsersCount', totalUsers);
        users.forEach(user => {
            if(user.mobile_number == mobile) {
                isExist = true;
                if(user.is_blocked == 1) {
                    document.getElementById('error-message').classList.remove('d-none');
                    document.getElementById('error-message').innerHTML = "This number has been blocked by UBER.";
                    return;
                }
                document.getElementById('error-message').classList.add('d-none');
                localStorage.setItem('user_id_temp', user.id);
                localStorage.setItem('stored_password', user.password);
                localStorage.setItem('contact_number_temp', mobile);
                window.open('loginPassword.html','_self'); // password page
                return;
            }
        });
        if(isExist == false) {
            localStorage.setItem('contact_number_temp', mobile);
            document.getElementById('error-message').classList.add('d-none');
            window.open('loginOTP.html','_self'); //otp page
            return;
        }
    }
    else {
        localStorage.setItem('totalUsersCount', 0);
        localStorage.setItem('contact_number_temp', mobile);
        window.open('loginOTP.html','_top'); //otp page
        return;
    }
    
}

var otpFailure = 0;
function verifyOTPAndRedirect() {
    var otp = document.getElementById("otp-input").value;
    if(otp != "0000") {
        otpFailure++;
        console.log("show error message");
        if(otpFailure == 3){
            localStorage.removeItem('contact_number_temp');
            alert("Entered wrong OTP 3 times.please try again later");
            window.location.href = 'login.html';
        } 
        return;
    }
    window.open('loginPassword.html','_top'); //otp page
    return;
}

var passwordFailure = 0;
function verifyPasswordAndRedirect() {
    var password = document.getElementById("password-input").value;
    var storedPassword = localStorage.getItem('stored_password');
    var storedNumber = localStorage.getItem('contact_number_temp');
    
    if(storedPassword != null) {
        if(storedPassword == password) {
            document.getElementById('error-message').classList.add('d-none');
            localStorage.setItem('logged_in_user', localStorage.getItem('user_id_temp'));
            localStorage.setItem('logged_in_user_data', JSON.stringify(getUserDataFromId(localStorage.getItem('user_id_temp'))));
            localStorage.removeItem('user_id_temp');
            localStorage.removeItem('stored_password');
            localStorage.removeItem('contact_number_temp');
            window.open('home.html','_top');
            return;
        }
        else {
            document.getElementById('error-message').classList.remove('d-none');
            passwordFailure++;
            console.log("show error message");
            if(passwordFailure == 3){
                localStorage.removeItem('user_id_temp');
                localStorage.removeItem('contact_number_temp');
                localStorage.removeItem('stored_password');
                alert("Entered wrong password 3 times.please try again later");
                window.location.href = 'login.html';
            }
            return;
        }
    }
    else {
        var password = document.getElementById("password-input").value;
        if(password.match(/[A-Z]+/g) != null && password.match(/[a-z]+/g) != null && password.match(/[0-9]+/g) != null) {
            let newUsersCount = (parseInt(localStorage.getItem('totalUsersCount')) +1);
            var userData = {
                "id": newUsersCount,
                "name": "",
                "email": "",
                "mobile_number": localStorage.getItem('contact_number_temp'),
                "date_created": new Date,
                "user_type" : "rider",
                "is_blocked" : 0,
                "ratings" : 0,
                "average_rating": 0,
                "password": password
            };

            localStorage.setItem('newUserData', JSON.stringify(userData));

            let users = localStorage.getItem('users');
            if(users != null) {
                // users += "|" + JSON.stringify(userData);
                users = JSON.parse(users);
                users.push(userData);
                users = JSON.stringify(users);
                localStorage.setItem('users', users);
            }
            else {
                users = new Array(userData);
                users = JSON.stringify(users);
                localStorage.setItem('users', users);
            }
            localStorage.setItem('logged_in_user', newUsersCount);
            localStorage.setItem('totalUsersCount', newUsersCount);
            window.open('completeProfile.html','_top');
            return;
        }
        else {
            document.getElementById('error-message').classList.remove('d-none');
            document.getElementById('error-message').innerHTML = "Password should include at least 1 Uppercase letter, 1 lowercase letter & 1 number.";
            return;
        }
    }
}

function saveProfileAndRedirect(email, name) {
    let userData = localStorage.getItem('newUserData');
    if(userData == null) {
        window.location.href='index.html';
    }
    else {
        userData = JSON.parse(userData);
        userData.name = name;
        userData.email = email;

        let users = localStorage.getItem('users');
        users = JSON.parse(users);
        let index = 0;
        if(users != null) {
            users.forEach(user => {
                if(user.id == userData.id) {
                    return;
                }
                index++;
            });
            
            users[index] = userData;
            console.log(users[index]);

            localStorage.setItem('users', JSON.stringify(users));
            localStorage.removeItem('newUserData');
            localStorage.removeItem('contact_number_temp');
            localStorage.setItem('logged_in_user_data', JSON.stringify(getUserDataFromId(localStorage.getItem('logged_in_user'))));
            window.location.href = 'home.html';
        }
    }
}

function getUserDataFromId(id) {
    let users = localStorage.getItem('users');
    let userData = null;
    if(users != null) {
        users = JSON.parse(users);
        users.forEach(user => {
            if(user.id == id) {
                if(user.is_blocked == 1) {
                    console.log("user is blocked")
                    return userData;
                }
                userData = user;
                return userData;
            }
        });
    }
    return userData;
}