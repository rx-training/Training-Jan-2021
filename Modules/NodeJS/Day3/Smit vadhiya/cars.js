const name = 'honda'
const brand = 'new'

exports.detail = {
    "name" : 'honda',
    "brand" : 'new'
}

function add(a,b){
    console.log(a+b);
}

exports.car = {name,brand,add}
