USE Day1;

--INSERT STATEMENT---------------------------------------------------------------------
INSERT INTO Departments values ('ReactJs');

INSERT INTO Departments VALUES 
							('PHP'),
							('Node');

--UPDATE STATEMENT---------------------------------------------------------------------
UPDATE Departments SET DepartmentName = 'Android' WHERE DepartmentId = 5;


--SELECT STATEMENT---------------------------------------------------------------------
USE AdventureWorks2012;

SELECT * FROM HumanResources.Employee;

SELECT JobTitle, BirthDate, Gender, HireDate FROM HumanResources.Employee;

SELECT * FROM HumanResources.Department;


--Customizing th display
SELECT 'Department Number' = DepartmentID, 'Deapartment Name' = Name FROM HumanResources.Department;

SELECT DepartmentID 'Department Number', Name 'Deapartment Name' FROM HumanResources.Department;

SELECT DepartmentID AS 'Department Number', Name AS 'Deapartment Name' FROM HumanResources.Department;


--Literals and Concatenate
SELECT LoginId,'Designation' 'Designation: ', JobTitle FROM HumanResources.Employee;

SELECT Name + ' department comes under ' + GroupName + ' group ' AS 'Department' FROM HumanResources.Department;

SELECT * FROM HumanResources.EmployeePayHistory;
SELECT BusinessEntityID, Rate, PerDayRate = 8 * Rate FROM HumanResources.EmployeePayHistory;