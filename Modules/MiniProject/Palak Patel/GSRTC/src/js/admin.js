var myStorage = window.localStorage;

let flag = Number(JSON.parse(window.localStorage.getItem('flag')));

if(flag==0){
    window.location.href='index.html';
}

let buses = JSON.parse(window.localStorage.getItem('buses')) || [];
const submit = document.getElementById('submit');
const logout = document.getElementById('logout');
let source = document.getElementById('source');
let dest = document.getElementById('destination');
let busNo = document.getElementById('busNo');
let at = document.getElementById('at');
let dt = document.getElementById('dt');
let price = document.getElementById('price');
//let cur = 1;

submit.addEventListener('click', function (e) {
    e.preventDefault();
    let busInfo = {
        'Source': source.value,
        'Destination': dest.value,
        'BusNo': busNo.value,
        'ArrivalTime': at.value,
        'DepartureTime': dt.value,
        'Ticket' : price.value
    }
    
    buses.push(busInfo);
    myStorage.setItem(`buses` ,JSON.stringify(buses));
    //console.log(buses);
    source.value = '';
    dest.value = '';
    busNo.value = '';
    at.value = '';
    dt.value = '';
    price.value = '';
})

logout.addEventListener('click', function (){
    localStorage.setItem('flag','0');
    window.location.href = 'index.html';
});