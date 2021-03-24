--query with batch
Declare @purchasing NVARCHAR(MAX) = 'Purchasing Dept';
Declare @marketing NVARCHAR(MAX) = 'Marketing Dept';
Declare @administration NVARCHAR(MAX) = 'Administration Dept';
SELECT 
	e.EmployeeID, 
	CASE DepartmentName WHEN 'Purchasing' THEN @purchasing WHEN 'Marketing' THEN @marketing WHEN 'Administration' THEN @administration END 'Department'
FROM Employees e JOIN Departments d ON d.DepartmentID = e.DepartmentID WHERE DepartmentName IN ( 'Purchasing','Marketing','Administration')
GO --runs batch
SELECT * FROM Employees; -- outside batch

--VARIABLES WON'T WORK HERE AFTER BATCH STATEMENT
SELECT 
	e.EmployeeID, 
	CASE DepartmentName WHEN 'Purchasing' THEN @purchasing WHEN 'Marketing' THEN @marketing WHEN 'Administration' THEN @administration END 'Department'
FROM Employees e JOIN Departments d ON d.DepartmentID = e.DepartmentID WHERE DepartmentName IN ( 'Purchasing','Marketing','Administration');
