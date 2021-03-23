--Sub Query
USE AdventureWorks2012

SELECT Name
FROM Production.Product
WHERE ListPrice =
    (SELECT ListPrice
     FROM Production.Product
     WHERE Name = 'Chainring Bolts')


--Sub Query [IN]
SELECT Name
FROM Sales.Store
WHERE BusinessEntityID IN
    (SELECT CustomerID
     FROM Sales.Customer
     WHERE TerritoryID = 5)


--Sub Query [EXISTS]
SELECT BusinessEntityID, JobTitle
FROM HumanResources.Employee
WHERE EXISTS 
	(SELECT *
	FROM HumanResources.EmployeeDepartmentHistory
	WHERE BusinessEntityID = HumanResources.Employee.BusinessEntityID AND DepartmentID = 4)


--Nested Sub Query
SELECT LastName, FirstName
FROM Person.Person
WHERE BusinessEntityID IN
    (SELECT BusinessEntityID
     FROM HumanResources.Employee
     WHERE BusinessEntityID IN
        (SELECT BusinessEntityID
         FROM Sales.SalesPerson)
    )


--Correlated Sub Query
USE Day4
SELECT *
FROM Employees AS e
WHERE Salary = 
	(SELECT MAX(Salary)
	FROM Employees
	WHERE DepartmentID = e.DepartmentID)


--VIEWS
USE AdventureWorks2012
CREATE VIEW HumanResources.EmployeeHireDate
AS 
SELECT p.FirstName, p.LastName, e.HireDate
FROM HumanResources.Employee AS e
JOIN Person.Person AS p
ON e.BusinessEntityID = p.BusinessEntityID

SELECT FirstName, LastName, HireDate
FROM HumanResources.EmployeeHireDate
ORDER BY LastName