USE AdventureWorks2012;

SELECT * FROM Person.Person;

-- AGGREGATING DATA ------------------------------------------------------------------------------

-- COUNT
SELECT COUNT(*) AS 'TotalContacts', COUNT(MiddleName) AS 'ContactsWithMiddleName' FROM Person.Person;


-- GROUP BY
SELECT SUM(soh.TotalDue)
	, st.Name
	, st.[Group]
FROM Sales.SalesOrderHeader AS soh
	INNER JOIN Sales.SalesTerritory AS st ON soh.TerritoryID = st.TerritoryID
GROUP BY st.Name, st.[Group];


-- HAVING
SELECT SUM(soh.TotalDue)
	, st.Name
FROM Sales.SalesOrderHeader AS soh
	INNER JOIN Sales.SalesTerritory AS st ON soh.TerritoryID = st.TerritoryID
GROUP BY st.Name
HAVING SUM(soh.TotalDue) > 20000000;


-- ROLLUP

SELECT * FROM Sales.vSalesByCategory;

SELECT Category
	, SubCategory
	, Product
	, SUM(TotalDue) AS 'TotalSold'
FROM Sales.vSalesByCategory 
WHERE Category = 'Clothing'
GROUP BY Category
	, SubCategory
	, Product
WITH ROLLUP
ORDER BY Category
	, SubCategory
	, Product;

-- CUBE

SELECT Category
	, SubCategory
	, Product
	, SUM(TotalDue) AS 'TotalSold'
FROM Sales.vSalesByCategory 
WHERE Category = 'Clothing'
GROUP BY Category
	, SubCategory
	, Product
WITH CUBE
ORDER BY Category
	, SubCategory
	, Product;


-- GROUPING SETS

SELECT Category
	, SubCategory
	, Product
	, SUM(TotalDue) AS 'TotalSold'
FROM Sales.vSalesByCategory 
WHERE Category = 'Clothing'
GROUP BY GROUPING SETS ( (Category, SubCategory)
						, (Category)
						, (Product) )
ORDER BY Category
	, SubCategory
	, Product;


-- GROUPING

SELECT Category
	, GROUPING(Category) AS 'CategoryTotal'
	, SubCategory
	, GROUPING(SubCategory) AS 'SubCategoryTotal'
	, Product
	, GROUPING(Product) AS 'ProductTotal'
	, SUM(TotalDue) AS 'TotalSold'
FROM Sales.vSalesByCategory 
WHERE Category = 'Clothing'
GROUP BY Category
	, SubCategory
	, Product
WITH CUBE
ORDER BY Category
	, SubCategory
	, Product;


-- GROUPING ID

SELECT GROUPING_ID(Category, SubCategory, Product) AS 'TotalbitMap'
	, Category
	, SubCategory
	, Product
	, SUM(TotalDue) AS 'TotalSold'
FROM Sales.vSalesByCategory 
WHERE Category = 'Clothing'
GROUP BY Category
	, SubCategory
	, Product
WITH CUBE
ORDER BY Category
	, SubCategory
	, Product;


-- Advanced Data Aggregations ----------------------------------------------------

--CTEs

WITH SalesData(Totalsold, OrderYear, TerritoryName)
AS(
SELECT SUM(soh.TotalDue)
	, YEAR(soh.OrderDate)
	, st.Name
FROM Sales.SalesOrderHeader AS soh
	INNER JOIN Sales.SalesTerritory AS st ON soh.TerritoryID = st.TerritoryID
GROUP BY YEAR(soh.OrderDate), st.Name
)
SELECT *
FROM SalesData;


-- RANKING FUNCTIONS

SELECT Name
	, ListPrice
	, ROW_NUMBER() OVER(ORDER BY ListPrice DESC) AS 'Row_Number'
	, RANK() OVER(ORDER BY ListPrice DESC) AS 'Rank'
	, DENSE_RANK() OVER(ORDER BY ListPrice DESC) AS 'Dense_Rank'
	, NTILE(8) OVER(ORDER BY ListPrice DESC) AS 'Ntile'
FROM Production.Product
WHERE ProductSubcategoryID = 1
ORDER BY ListPrice DESC;


-- PAGING

SELECT ROW_NUMBER() OVER (ORDER BY Name) AS 'Row_Number'
	, Name
	, ListPrice
FROM Production.Product
ORDER BY Name
	OFFSET 20 ROWS
	FETCH NEXT 10 ROWS ONLY;


-- SYSTEM FUNCTIONS

SELECT HOST_ID() AS 'HostId', HOST_NAME () AS 'HostName';

SELECT AVG(ISNULL(Weight, 50))  
FROM Production.Product; 

SELECT City, PostalCode  
FROM Person.Address   
WHERE ISNUMERIC(PostalCode) <> 1; 

SELECT ROWCOUNT_BIG ();