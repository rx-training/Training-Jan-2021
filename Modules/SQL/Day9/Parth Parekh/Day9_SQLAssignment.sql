/* 1.  Create a batch Select IT Department as 'IT Department',
Marketing Department as 'Marketing Department' , Finance Department 'Finance Department'
from employee table   */

SELECT e.FirstName AS 'Employee Name'  , d.DepartmentName  AS 'IT Department' FROM Employees e
       JOIN Departments d ON e.DepartmentID = d.DepartmentID WHERE d.DepartmentName ='IT'
SELECT e.FirstName  , d.DepartmentName  AS 'Marketing Department' FROM Employees e
       JOIN Departments d ON e.DepartmentID = d.DepartmentID WHERE d.DepartmentName ='Marketing'
SELECT e.FirstName  , d.DepartmentName  AS 'Finance Department' FROM Employees e
       JOIN Departments d ON e.DepartmentID = d.DepartmentID WHERE d.DepartmentName ='Finance'
GO

/* 2. Students Name, Address, City, DOB, Standard need to be inserted in the StudentsDetails table,
need to fetch these result from json variable. and select output in the json format */

DECLARE @Data varchar(MAX) 
SET @Data = '[{"Name":"Parth","Address":"Mumbai","City":"Mumbai","DateOfBirth":"2010-01-01" , "Standard":"8"},
{"Name":"Rahul","Address":"Kalupur","City":"Ahmedabad","DateOfBirth":"2012-07-11" , "Standard":"6"},
{"Name":"Vanraj","Address":"Kasindra","City":"Dholka","DateOfBirth":"2016-01-31", "Standard":"3"},
{"Name":"Devang","Address":"PNT CORTER","City":"Surendranagar","DateOfBirth":"2000-05-05","Standard":"12"},
{"Name":"Saras","Address":"Shreya Soceity","City":"Maldives","DateOfBirth":"1999-02-21","Standard":"11"}]'


SELECT * INTO Students FROM (SELECT * FROM OPENJSON(@Data) WITH (
Name varchar(50) '$.Name' ,
Address varchar(75) '$.Address' ,
City varchar(50) '$.City',
DateOfBirth date '$.DateOfBirth'
))AS Details

SELECT * FROM Students FOR JSON PATH





