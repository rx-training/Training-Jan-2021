
-- Practice work of ppt

SELECT * FROM Employees;

SELECT EmployeeID,
	FirstName+' '+ LastName [Name]  
FROM Employees 
	WHERE Salary > (SELECT Salary
					FROM Employees
					WHERE FirstName = 'Neena' AND LastName = 'Kochhar');

USE AdventureWorks2012
-- IN 

SELECT  BusinessEntityID, rowguid
FROM HumanResources.Employee
	WHERE BusinessEntityID IN(
	SELECT BusinessEntityID FROM HumanResources.EmployeePayHistory WHERE Rate > 100
	);

-- Exist

SELECT BusinessEntityID, JobTitle
FROM HumanResources.Employee
WHERE EXISTS 
	(SELECT * FROM HumanResources.EmployeeDepartmentHistory 
	WHERE BusinessEntityID = HumanResources.Employee.BusinessEntityID AND DepartmentID = 4);

-- Nested SubQueries

SELECT DepartmentID 
FROM HumanResources.EmployeeDepartmentHistory
WHERE BusinessEntityID IN
	(SELECT BusinessEntityID FROM HumanResources.Employee
	WHERE BusinessEntityID IN 
	(SELECT BusinessEntityID FROM Person.Person WHERE FirstName ='Ken'));

-- Correlated subqueries

SELECT * FROM Employees e WHERE Salary =
	(SELECT MAX(Salary) FROM Employees WHERE FirstName = 'Steven');


-- Show list price compared to the average for that subcategory
SELECT p.Name
	, p.ListPrice - ap.AverageListPrice AS 'DifferenceFromSubCategoryAverage'
FROM Production.Product p
	INNER JOIN (SELECT ProductSubcategoryID, AVG(ListPrice) AS 'AverageListPrice'
				FROM Production.Product
				GROUP BY ProductSubcategoryID) AS ap
			ON p.ProductSubcategoryID = ap.ProductSubcategoryID;


-- All customers who have placed order

--IN STATEMENT
SELECT c.PersonID
FROM Sales.Customer c
WHERE C.CustomerID IN (SELECT soh.CustomerID 
						FROM Sales.SalesOrderHeader soh);

-- EXISTS STATEMENT
SELECT c.PersonID
FROM Sales.Customer c
WHERE EXISTS ( SELECT soh.CustomerID 
				FROM Sales.SalesOrderHeader soh
				WHERE c.CustomerID = soh.CustomerID);
