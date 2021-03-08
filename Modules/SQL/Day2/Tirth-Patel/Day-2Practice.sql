USE AdventureWorks2012

UPDATE Sales.SalesPerson 
SET Bonus =6000 , CommissionPct = 0.10	,SalesQuota =NULL

Select Bonus,CommissionPct,SalesQuota FROM Sales.SalesPerson

UPDATE Production.Product
SET Color= N'Metalic Red' WHERE Name LIKE N'Road-250%' AND Color = N'Red';


SELECT Name,Color FROM Production.Product

DECLARE @NewPrice INT =10;
UPDATE Production.Product SET ListPrice += @NewPrice;

SELECT ListPrice FROM Production.Product
--practicing select

SELECT FirstName,
		LastName
		
FROM Person.Person;
SELECT 
	ProductID as'alias-ID',
	Name
	
FROM Production.Product

--concate string
SELECT FirstName + ' ' + LastName AS 'Full-Name'

	FROM Person.Person

SELECT FirstName + ' ' + LastName AS 'Full-Name'

	FROM Person.Person 
	WHERE LastName = 'smith'

SELECT Name,
		ListPrice
FROM Production.Product
WHERE	 ListPrice BETWEEN 100 and 200
SELECT Name,
		ListPrice
FROM Production.Product
WHERE	 ListPrice >=100 AND ListPrice <=200
SELECT Name,
		ListPrice
FROM Production.Product
WHERE Name LIKE 'mou%'
SELECT FirstName,
		LastName,
		MiddleName
FROM Person.Person WHERE MiddleName is NOT NULL
