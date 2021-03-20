USE Day8


--Create a batch Select Banking as ‘Bank Dept’, Insurance as ‘Insurance Dept’ and Services as ‘Services Dept’ from employee table
DECLARE @BankDept varchar(50) = 'Finance'
DECLARE @HRDept varchar(50) = 'Human Resources'
DECLARE @SalesDept varchar(50) = 'Sales'
SELECT d.DepartmentID, CASE
	WHEN d.DepartmentName = @BankDept THEN 'Banking Dept'
	WHEN d.DepartmentName = @HRDept THEN 'HR Dept'
	WHEN d.DepartmentName = @SalesDept THEN 'Sales Dept'
	ELSE d.DepartmentName
END AS 'Department Name'
FROM Departments AS d
JOIN Employees AS e
ON d.DepartmentID = e.DepartmentID
GO


--5 Students Name, Address, City, DOB, Standard need to be inserted in the student table, need to fetch these result from json variable. and select output in the json format
DECLARE @json VARCHAR(MAX)
SET @json = '[
	{"Id" : "1", "Name" : "Aaa", "Address" : "Adalaj", "City" : "Ahmedabad", "DOB" : "1998-11-22", "Standard" : "12"},
	{"Id" : "2", "Name" : "Bbb", "Address" : "Maninagar", "City" : "Ahmedabad", "DOB" : "1999-11-25", "Standard" : "11"},
	{"Id" : "3", "Name" : "Ccc", "Address" : "Thaltej", "City" : "Ahmedabad", "DOB" : "2000-11-22", "Standard" : "10"},
	{"Id" : "4", "Name" : "Ddd", "Address" : "Katargam", "City" : "Surat", "DOB" : "1998-11-30", "Standard" : "12"},
	{"Id" : "5", "Name" : "Eee", "Address" : "Bhestan", "City" : "Surat", "DOB" : "2000-12-23", "Standard" : "10"}
	]'

SELECT * INTO Students
FROM OPENJSON(@json)
WITH
	(Id INT '$.Id',
	Name VARCHAR(50) '$.Name',
	Address VARCHAR(150) '$.Address',
	City VARCHAR(50) '$.City',
	DOB DATE '$.DOB',
	Standard INT '$.Standard')


SELECT *
FROM Students
FOR JSON PATH

------------------------------------------------------------------------------------------------------

/*

Create a batch Select Banking as ‘Bank Dept’, Insurance as ‘Insurance Dept’ and Services as ‘Services Dept’
from employee table 5 Students Name, Address, City, DOB, Standard need to be inserted in the student table,
need to fetch these result from json variable. and select output in the json format
Online Reference:

*/
