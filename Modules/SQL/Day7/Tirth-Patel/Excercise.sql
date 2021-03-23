SELECT ProductModelID,Name 
FROM Production.ProductModel
WHERE ProductModelID NOT IN(3,4)
UNION 
SELECT  ProductModelID,Name 
	FROM Production.ProductModel 

SELECT ProductModelID ,Name INTO dbo.gloves 
FROM Production.ProductModel WHERE ProductModelID IN (3,4)

SELECT * FROM dbo.gloves
--DROP TABle dbo.ProductResults 
SELECT ProductModelID, Name  
INTO dbo.ProductResults 
	FROM Production.ProductModel WHERE ProductModelID NOT IN (3,4)
	UNION
	SELECT ProductModelID,Name 
		FROM DBO.gloves
		ORDER BY Name

SELECT * FROM DBO.ProductResults

SELECT * FROM Employees

SELECT EmployeeID,FirstName ,LastName 
FROM Employees WHERE EmployeeID< 120
UNION 
SELECT EmployeeID,FirstName ,'dummy' 
FROM Employees WHeRE EmployeeID BETWEEN 100 AND 120 
UNION
SELECT EmployeeID,'dummy' ,LastName 
FROM Employees WHeRE EmployeeID BETWEEN 120 AND 130

SELECT EmployeeID,FirstName ,LastName 
FROM Employees WHERE EmployeeID< 120
UNION ALL(
SELECT EmployeeID,FirstName ,'dummy' 
FROM Employees WHeRE EmployeeID BETWEEN 100 AND 120 UNION
SELECT EmployeeID,'dummy' ,LastName 
FROM Employees WHeRE EmployeeID BETWEEN 120 AND 130)


USE AdventureWorks2012;

SELECT ProductID
FROM Production.Product 
INTERSECT 
SELECT PRODUCTID FROM Production.ProductInventory--product availible in inventory 

SELECT ProductID
FROM Production.Product 
EXCEPT
SELECT PRODUCTID FROM Production.ProductInventory --product not availible in inventory]]



--CTE 
WITH Sales_CTE  (SalesPersonID, NumberofOrders)
AS
( SELECT SalesPersonID ,COUNT(*) AS 'NumberofOrders'
	FROM sales.SalesOrderHeader
	WHERE SalesPersonID IS NOT NULL
	Group by SalesPersonID
)
SELECT SalesPersonID , NumberofOrders 
FROM Sales_CTE
ORDER BY SalesPersonID , Numberoforders

WITH Sales_CTE  (SalesPersonID, NumberofOrders)
AS
( SELECT SalesPersonID ,COUNT(*) AS 'NumberofOrders'
	FROM sales.SalesOrderHeader
	WHERE SalesPersonID IS NOT NULL
	Group by SalesPersonID
)
SELECT  AVG(NumberofOrders) AS 'avaerage sales per person'
FROM Sales_CTE
