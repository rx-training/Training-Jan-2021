var myStorage = window.localStorage;
var admin = {
    "username": "PalakPatel",
    "password": "palak@1234"
}
myStorage.setItem('admin', JSON.stringify(admin));

let flag = Number(JSON.parse(window.localStorage.getItem('flag')));
document.getElementById('loginActivity').addEventListener('click', (e) => {
        //alert('shgsw');
        e.preventDefault();
        if (flag == 1) {
            window.location.href = 'admin.html';
        } else {
            window.location.href = 'login.html';
        }
    })

document.getElementById('busRoute').addEventListener('click', function(e){
    e.preventDefault();
    let source = document.querySelector('.source').value;
    let destination = document.querySelector('.dest').value;
    let onward = document.querySelector('.onward').value;
    let rtrn = document.querySelector('.return').value;

    const userData = {
        'source': source,
        'destination' : destination,
        'onward': onward,
        'rtrn': rtrn
    };

    myStorage.setItem('userData', JSON.stringify(userData));

    window.location.href = 'busRoute.html';
});