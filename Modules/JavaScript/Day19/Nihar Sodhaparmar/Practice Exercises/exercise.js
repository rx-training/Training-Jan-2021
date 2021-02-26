//Function For Exercise1
function circleArea(){

    var area = function (r) {
        document.getElementById('circle-area').innerText = 'Area of Circle : ' + 3.14 * r * r; 
    }

    var rad = document.getElementById('radius').value;
    area(rad);

}


//Function For Exercise2
function rectangleArea(){
    var side1 = document.getElementById('side1').value;
    var side2 = document.getElementById('side2').value;

    function recArea(a,b){
        this.area =  a * b;
    }

    var ans = new recArea(side1, side2);
    document.getElementById('rectangle-area').innerText = 'Area of Rectangle : ' + ans.area;

}


//Function For Exercise3
function circleArea1(){

    var rad = document.getElementById('radius1').value;

    document.getElementById('circle-area1').innerHTML = 'Area of Circle : ' + areaOfCircle(rad);

    function areaOfCircle(r){
        return 3.14 * r *r;
    }
}

//Function For Exercise4
function empDetails(){
    var empName = document.getElementById('empName').value;
    var empAdd = document.getElementById('empAdd').value;
    var empDesg = document.getElementById('empDesg').value;

    if(empName == "" || empAdd == "" || empDesg == "")
    {
        alert('Please Enter All Details');
        return false;
    }

    var e1 = {
        name : empName,
        address : empAdd,
        designation : empDesg
    };

    var employees = {

        showDetails : function (emp){
            return "Name : " + this.name + ", Address : " + this.address + ", Designation : " + this.designation; 
        }
    };

    document.getElementById('empDetails').innerText = employees.showDetails.call(e1);
}

//Function For Exercise5
function empDetails1(){
    var empName = document.getElementById('empName1').value;
    var empAdd = document.getElementById('empAdd1').value;
    var empDesg = document.getElementById('empDesg1').value;

    if(empName == "" || empAdd == "" || empDesg == "")
    {
        alert('Please Enter All Details');
        return false;
    }

    var e1 = {
        name : empName,
        address : empAdd,
        designation : empDesg
    };

    var employees = {

        showDetails : function (emp){
            return "Name : " + this.name + ", Address : " + this.address + ", Designation : " + this.designation; 
        }
    };

    document.getElementById('empDetails1').innerText = employees.showDetails.apply(e1);
}

//Function For Exercise6
var salaryUpdater = function (salary) {
    var currentSalary = salary;

    var generator = function () {
        currentSalary += 25000;
        return currentSalary;
    };
    return generator;
};

var updateSalary1 = salaryUpdater(50000);

function updateSalary() {
    document.getElementById('updatedSalary').innerText = "Salary of employee is : " + updateSalary1();
}