USE TestData

SELECT FirstName 
	FROM Employees WHERE  Salary > (SELECT Salary FROM Employees WHERE FirstName = 'Lisa')

USE AdventureWorks2012
SELECT * FROM HumanResources.EmployeeAddress WHERE AddressID 
		IN( SELECT AddressID FROM Person.Address WHERE City = 'bothell')

			SELECT * FROM  Person.vAdditionalContactInfo
SELECT BusinessEntityID ,
	JobTitle
FROM HumanResources.Employee
		WHERE EXISTS(
		SELECT * FROM HumanResources.EmployeeDepartmentHistory 
		WHERE  BusinessEntityID= HumanResources.Employee.BusinessEntityID AND DepartmentID =4
		)					
		
SELECT DepartmentID
FROM HumanResources.EmployeeDepartmentHistory
WHERE BusinessEntityID = (SELECT BusinessEntityID FROM HumanResources.Employee
	WHERE rowguid = (SELECT rowguid FROM Person.vAdditionalContactInfo
	WHERE EMailAddress='Joe@sample.com'))

	USE TestData
	SELECT * FROM Employees e WHERE Salary = (SELECT MAX(Salary)
	FROM Employees WHERE DepartmentID <e.EmployeeID)

	USE AdventureWorks2012
	SELECT Name,
		ListPrice
	FROM PRoduction.product  WHERE ListPrice = 
	(SELECT ListPrice FROM Production.Product WHERE Name = 'chainring bolts')

	SELECT LastName, FirstName 
FROM Person.Person
WHERE BusinessEntityID IN
    (SELECT BusinessEntityID
     FROM HumanResources.Employee
     WHERE BusinessEntityID IN
        (SELECT BusinessEntityID
         FROM Sales.SalesPerson)
    );

	SELECT DISTINCT c.LastName, c.FirstName, e.BusinessEntityID 
FROM Person.Person AS c JOIN HumanResources.Employee AS e
ON e.BusinessEntityID = c.BusinessEntityID 
WHERE 5000.00 IN
    (SELECT Bonus
    FROM Sales.SalesPerson sp
    WHERE e.BusinessEntityID = sp.BusinessEntityID) ;


SELECT pa.StateProvinceID, pa.AddressID
FROM Person.Address pa
WHERE AddressID IN
    (SELECT p.AddressID
     FROM Person.Address p
     WHERE p.StateProvinceID = 39);
	 

	 SELECT Name FROM Production.Product WHERE ProductSubcategoryID IN
	 ( SELECT ProductCategoryID FROM Production.ProductSubcategory WHERE Name = 'chains')

	 UPDATE Production.Product
	 SET ListPrice = ListPrice *2 
	 WHERE ProductID IN(SELECT ProductID FROM Purchasing.ProductVendor WHERE 
							BusinessEntityID = 1540)

	SELECT ListPrice  FROM Production.Product WHERE ProductID IN(SELECT ProductID FROM Purchasing.ProductVendor WHERE 
							BusinessEntityID = 1540)