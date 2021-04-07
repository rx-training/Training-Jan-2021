let Rectangle = function(l , w){

    let area = l * w;
    let perimeter = 2 * (l + w);
    return {area, perimeter};
}
console.log(Rectangle(5 , 6));

module.exports = Rectangle( 5 , 6);