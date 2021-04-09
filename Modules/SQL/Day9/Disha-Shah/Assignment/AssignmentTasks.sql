/*Q 1. Create a batch Select Banking as ‘Bank Dept’, Insurance as ‘Insurance Dept’ and Services as ‘Services Dept’ from employee table
Ans.*/
USE Day6DB

SELECT * FROM Employees

SELECT * FROM Departments
GO

SELECT e.EmployeeID, e.FirstName + ' ' + e.LastName AS 'Name', d.DepartmentName AS 'Administration Dept'
FROM Employees AS e JOIN Departments AS d
ON e.DepartmentID = d.DepartmentID
WHERE d.DepartmentName = 'Administration'

SELECT e.EmployeeID, e.FirstName + ' ' + e.LastName AS 'Name', d.DepartmentName AS 'Marketing Dept'
FROM Employees AS e JOIN Departments AS d
ON e.DepartmentID = d.DepartmentID
WHERE d.DepartmentName = 'Marketing'

SELECT e.EmployeeID, e.FirstName + ' ' + e.LastName AS 'Name', d.DepartmentName  AS 'HR Dept'
FROM Employees AS e JOIN Departments AS d
ON e.DepartmentID = d.DepartmentID
WHERE d.DepartmentName = 'Human Resources'
GO

/*Q 2. 5 Students Name, Address, City, DOB, Standard need to be inserted in the student table, need to fetch these result from json variable. and select
output in the json format
Ans.*/
USE SampleDB
GO

DECLARE @jsonStudent NVARCHAR(MAX);
SET @jsonStudent = N'[
  {"id": 1, "name": "Reena Sharma", "residence": {"address": "B-14, Nilkanthvarni Flats", "city": "Ahmedabad"}, "dob": "2005-11-04", "standard": 8},
  {"id": 2, "name": "Meena Sharma", "residence": {"address": "C-14, Someshwar Flats", "city": "Mumbai"}, "dob": "2006-11-04", "standard": 9},
  {"id": 3, "name": "Teena Sharma", "residence": {"address": "A-14, Naimesh Flats", "city": "Ahmedabad"}, "dob": "2007-11-04", "standard": 2},
  {"id": 4, "name": "Reema Sharma", "residence": {"address": "B-4, Nilkanthvarni Flats", "city": "Mumbai"}, "dob": "2001-11-04", "standard": 3},
  {"id": 5, "name": "Rita Sharma", "residence": {"address": "D-14, Aakash Flats", "city": "Ahmedabad"}, "dob": "2002-11-04", "standard": 8}
]';

SELECT *
INTO Students
FROM OPENJSON(@jsonStudent)
  WITH (
    Id INT 'strict $.id',
	Name VARCHAR(50) '$.name',
    Address VARCHAR(50) '$.residence.address',
    City VARCHAR(50) '$.residence.city',
    DOB DATE '$.dob',
    Standard INT '$.standard'
  );
GO

SELECT Id As 'Id',
	   Name AS 'Name',
	   Address AS 'Residence.Address',
	   City AS 'Residence.City',
	   DOB AS 'DateOfBirth',
	   Standard AS 'Std'
FROM Students
FOR JSON PATH, ROOT('StudentsInfo')
GO
