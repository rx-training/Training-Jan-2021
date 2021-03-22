/*** Day 9 Assignment ***/

-- 1 - Create a batch Select IT as ‘IT Dept’, Sales as ‘Sales Dept’ and 
--Executive as ‘Executive Dept’ from employee table

SELECT EmployeeID,FirstName+' '+LastName 'Name' ,d.DepartmentName
FROM Employees e
JOIN Departments d ON e.DepartmentID = d.DepartmentID
WHERE d.DepartmentName = 'IT';
SELECT EmployeeID,FirstName+' '+LastName 'Name' ,d.DepartmentName
FROM Employees e
JOIN Departments d ON e.DepartmentID = d.DepartmentID
WHERE d.DepartmentName = 'Sales';
SELECT EmployeeID,FirstName+' '+LastName 'Name' ,d.DepartmentName
FROM Employees e
JOIN Departments d ON e.DepartmentID = d.DepartmentID
WHERE d.DepartmentName = 'Executive'
GO

-- 2 - 5 Students Name, Address, City, DOB, Standard need to be inserted in the student table,
--need to fetch these result from json variable. and select output in the json format


DECLARE @JSON NVARCHAR(MAX)
SET @JSON = '[
	{"Name":"Abc","Address":"Isanpur","City":"Ahmedabad","DOB":"2000-05-27","Standard":12}
	,{"Name":"Xyz","Address":"Ghodasar","City":"Ahmedabad","DOB":"2000-06-27","Standard":12}
	,{"Name":"Def","Address":"Maninagar","City":"Ahmedabad","DOB":"2000-07-27","Standard":12}
	,{"Name":"Ghi","Address":"Gorva","City":"Vadodra","DOB":"2000-08-28","Standard":12}
	,{"Name":"Jkl","Address":"Gokuldham Soc.","City":"Mumbai","DOB":"2000-09-29","Standard":12}
	]'
SELECT * INTO Students FROM(
SELECT * FROM OPENJSON(@JSON)
	WITH(
		 [Name] VARCHAR(50) '$.Name'
		,[Address] VARCHAR(100) '$.Address'
		,[City] VARCHAR(20) '$.City'
		,[DOB] DATE '$.DOB'
		,[Standard] TINYINT '$.Standard'
	))[tb1]
GO
SELECT *
FROM Students
FOR JSON PATH;
