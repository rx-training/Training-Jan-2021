USE AdventureWorks2012

UPDATE Person.Address
SET ModifiedDate = GETDATE()

UPDATE Sales.SalesPerson
SET Bonus = 8000, CommissionPct = .50, SalesQuota = NULL

UPDATE Production.Product
SET Color =	'Metallic Red'
WHERE Name LIKE 'ROAD-250%' AND Color = 'Red'

DECLARE @NewPrice INT = 10
UPDATE Production.Product
SET ListPrice += @NewPrice
WHERE Color = 'Red'

SELECT DepartmentID AS 'Department Number', Name AS 'Department Name' 
FROM HumanResources.Department

--Literals
SELECT BusinessEntityID, 'Designation: ', JobTitle 
FROM HumanResources.Employee

SELECT 'snow' + 'ball'

SELECT Name + ' department comes under ' + GroupName + ' group ' AS Department 
FROM HumanResources.Department

--calculating column values
SELECT BusinessEntityID, Rate, Per_Day_Rate = 8 * Rate
FROM HumanResources.EmployeePayHistory

--Top
SELECT TOP 10 * 
FROM HumanResources.Employee

--DISTINCT
SELECT DISTINCT JobTitle 
FROM HumanResources.Employee
WHERE JobTitle LIKE 'PR%'

