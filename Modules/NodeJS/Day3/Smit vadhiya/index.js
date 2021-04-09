/*!!!!!!!!!!!!!!!   PLEASE UNCOMMENT FUNCTION CALLING FOR RUN   !!!!!!!!!!!!!!*/

/***********  GENRAL PRACTICE *****************/

//come from export.car 
function prac(){

    const cars = require('./cars')
    console.log(cars.car);
    
    // come from direct export
    console.log(cars.detail);
    
    const {name} = require('./cars').car
    console.log(name);
}
//prac()



/************************  PRACTICE TASK DAY 3 **********************************/


/*---------------------(1)---------------------
Create hello.js file and exports a value of 
constant variable greeting=”Greeting of the day!!!” and load the same in index.js
*/
function pr01(){
    const hello = require('./hello')
    console.log(hello);
}
//pr01()

/*---------------------(2)---------------------
 Create Rectangle.js and compute AreaofRectangle and 
 perimeter of Rectangle, and exports area and perimeter of rectangle
 'yobike',653436727,'smit',3
*/

function pr02(){
    const rectangle = require('./Rectangle')

    rectangle.rectangle.area(1,4)
    rectangle.rectangle.perimeter(2,4)
}
//pr02()


/**************************************  ASSIGNMENT DAY 3 ********************************/


function Assignment(){
    const data = require('./RamboRental')
    const per = new data('yobike',653436727,'smit',2)
    per.Compute()
}

//Assignment()

