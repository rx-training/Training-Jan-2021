CREATE VIEW Sales.vSalesByCategory
AS
SELECT soh.TotalDue
	, pc.Name AS 'Category'
	, ps.Name AS 'SubCategory'
	, p.Name AS 'Product'
FROM Sales.SalesOrderHeader AS soh
	INNER JOIN Sales.SalesOrderDetail AS sod ON soh.SalesOrderID = sod.SalesOrderID
	INNER JOIN Production.Product AS p ON sod.ProductID = P.ProductID
	INNER JOIN Production.ProductSubcategory AS ps ON p.ProductSubcategoryID = ps.ProductSubcategoryID
	INNER JOIN Production.ProductCategory AS pc ON pc.ProductCategoryID = pc.ProductCategoryID