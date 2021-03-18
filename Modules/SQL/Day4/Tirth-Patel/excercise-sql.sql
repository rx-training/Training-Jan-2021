USE AdventureWorks2012
GO

SELECT BusinessEntityID,
		vacationhours,
		ROW_NUMBER() OVER (ORDER BY vacationhours) AS 'Row number',
		RANK() OVER (ORDER BY vacationhours) AS 'RANK',
		DENSE_RANK() OVER (ORDER BY vacationhours) AS 'DENSE',
		NTILE(100)  OVER (ORDER BY sickleavehours) AS 'ntile of 5'
FROM HumanResources.Employee


SELECT COUNT(*)  AS 'TOTAL CONTACTS',
	COUNT(MiddleName) AS 'MiddleNameContacts;'
FROM Person.Person

SELECT JobTitle,gender,
	SUM(SickLeaveHours)
FROM HumanResources.Employee
GROUP BY JobTitle,Gender

SELECT JobTitle,gender,
	SUM(SickLeaveHours),
	RANK() OVER (ORDER BY (Gender)) AS 'RANK',
	DENSE_RANK() OVER (ORDER BY (Gender))  AS "DENSE"
FROM HumanResources.Employee
GROUP BY CUBE(JobTitle,Gender)

SELECT JobTitle,gender,
	SUM(SickLeaveHours),
	RANK() OVER (ORDER BY (Gender)) AS 'RANK',
	DENSE_RANK() OVER (ORDER BY (Gender))  AS "DENSE"
FROM HumanResources.Employee
GROUP BY ROLLUP(JobTitle,Gender)

SELECT JobTitle,gender,
	SUM(SickLeaveHours),
	RANK() OVER (ORDER BY (Gender)) AS 'RANK',
	DENSE_RANK() OVER (ORDER BY (Gender))  AS "DENSE"
FROM HumanResources.Employee
GROUP BY GROUPING SETS(CUBE(JobTitle,Gender) , ROLLUP(JobTitle,Gender))


SELECT SalesOrderID ,
		SUM(LineTotal) AS 'SUBTOTAL'

FROM Sales.SalesOrderDetail
GROUP  BY SalesOrderID
HAVING SUM(LineTotal)> 120000
ORDER BY SalesOrderID

 
  
  SELECT * INTO dbo.NewProducts  
FROM Production.Product  
WHERE ListPrice > $25   
AND ListPrice < $100; 

SELECT * FROM dbo.NewProducts

SELECT SalesQuota, SUM(SalesYTD) 'TotalSalesYTD', GROUPING(SalesQuota) AS 'Grouping'  
FROM Sales.SalesPerson  
GROUP BY SalesQuota WITH ROLLUP;  

SELECT VAR(Bonus) -- var as in variance
FROM Sales.SalesPerson;  
GO  