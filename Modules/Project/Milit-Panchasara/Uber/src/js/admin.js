async function validateAdminAndRedirect() {
    let email = document.getElementById('email-input').value;
    let password = document.getElementById('password-input').value;

    var adminFile = await fetch("admins.json");
    var data = await adminFile.json();

    console.log(data.admins);

    data.admins.forEach(admin => {
        if(admin.email == email && admin.password == password) {
            localStorage.setItem("logged_in_admin_data",JSON.stringify(admin));
            localStorage.setItem("logged_in_admin",JSON.stringify(admin.id));
            window.location.href = 'dashboard.html';
        }
    });

    return false;
}

function blockUser(id) {
    let isConfirm = confirm("Do you want to block this user ?");
    if(!isConfirm) return;
    var allUsersData = JSON.parse(localStorage.getItem('users'));
    let index=0;
    for(var i=1; i<allUsersData.length;i++) {
        if(allUsersData[i].id == id) {
            index = i;
            break;
        }
    }

    allUsersData[index].is_blocked = 1;
    console.log(allUsersData[index]);
    localStorage.setItem('users',JSON.stringify(allUsersData));
    document.getElementById('userdata-table-body').innerHTML = "";
    populateData();
}

function unblockUser(id) {
    let isConfirm = confirm("Do you want to unblock this user ?");
    if(!isConfirm) return;
    var allUsersData = JSON.parse(localStorage.getItem('users'));
    let index=0;
    for(var i=1; i<allUsersData.length;i++) {
        if(allUsersData[i].id == id) {
            index = i;
            break;
        }
    }

    allUsersData[index].is_blocked = 0;
    console.log(allUsersData[index]);
    localStorage.setItem('users',JSON.stringify(allUsersData));
    document.getElementById('userdata-table-body').innerHTML = "";
    populateData();
}