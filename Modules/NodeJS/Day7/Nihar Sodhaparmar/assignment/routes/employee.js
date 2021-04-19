const express = require('express');
const fs = require('fs');
const router = express.Router();
const empArray = require('../employees.json');


//GET ALL EMPLOYEE DATA
router.get('/', (req, res) => {
    res.send(empArray);
});


//GET EMPLOYEE DATA USING ID
router.get('/:empId', (req, res) => {

    const empId = req.params.empId;
    let found = false;

    empArray.forEach(emp =>{
       
        if(emp.EmpId == empId){
            found = true;
            res.send(emp);
        }
    });

    if(!found){
        res.status(404).send("Employee Not Found");
    }
});


//ADD EMPLOYEE
router.post('/', (req, res) => {
    
    const employee = req.body;
    let empId = empArray.length + 1;
    
    let newEmployee = {
        "EmpId": empId,
        "FirstName": employee.FirstName,
        "LastName": employee.LastName,
        "DateOfBirth": employee.DateOfBirth,
        "AddressLine1": employee.AddressLine1,
        "City": employee.City,
        "State": employee.State,
        "Country": employee.Country,
        "HireDate": employee.HireDate
    }

    empArray.push(newEmployee);

    
    fs.writeFile('./employees.json', JSON.stringify(empArray), (err) => {
        if(err){
            res.status(400).send(err);
            return;
        }
        else{
            res.send('Employee added successfully');
        }
    });

});


//UPDATE EMPLOYEE
router.put('/:empId', (req, res) => {

    const employee = req.body;
    const empId = req.params.empId;
    let found = false;

    empArray.forEach(emp =>{
        
        if(emp.EmpId == empId){
            found = true;

            emp.FirstName = employee.FirstName;
            emp.LastName = employee.LastName;
            emp.DateOfBirth = employee.DateOfBirth;
            emp.AddressLine1 = employee.AddressLine1;
            emp.City = employee.City;
            emp.State = employee.State;
            emp.Country = employee.Country;
            emp.HireDate = employee.HireDate;

        }
    });

    if(!found){
        res.status(404).send("Employee Not Found");
    }
    else{
        fs.writeFile('./employees.json', JSON.stringify(empArray), (err) => {
            if(err){
                res.status(400).send(err);
                return;
            }
            else{
                res.send('Employee details updated successfully');
            }
            
        });
        
    }
});


//DELETE EMPLOYEE
router.delete('/:empId', (req, res) => {

    const empId = req.params.empId;

    if(empId < empArray.length || empId > empArray.length){
        res.status(404).send("Employee Not Found");
    }
    else{
        empArray.splice(empId - 1, 1);
        fs.writeFile('./employees.json', JSON.stringify(empArray), (err) => {
            if(err){
                res.status(400).send(err);
                return;
            }
            else{
                res.send('Employee deleted successfully');
            }
        })
        
    }
    
});

module.exports = router;