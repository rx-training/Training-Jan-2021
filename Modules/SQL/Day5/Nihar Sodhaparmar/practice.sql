USE AdventureWorks2012;

-- INNER JOIN
SELECT pc.Name AS 'CategoryName'
	, ps.Name AS 'SubCategoryName'
	, pc.ProductCategoryID AS 'PC-ProductCategoryId'
	, ps.ProductCategoryID AS 'PS-ProductCategoryId'
FROM Production.ProductCategory AS pc
	INNER JOIN Production.ProductSubcategory AS ps ON pc.ProductCategoryID = ps.ProductCategoryID;


-- LEFT OUTER JOIN
SELECT pc.Name AS 'CategoryName'
	, ps.Name AS 'SubCategoryName'
	, pc.ProductCategoryID AS 'PC-ProductCategoryId'
	, ps.ProductCategoryID AS 'PS-ProductCategoryId'
FROM Production.ProductCategory AS pc
	LEFT OUTER JOIN Production.ProductSubcategory AS ps ON pc.ProductCategoryID = ps.ProductCategoryID;


-- RIGHT OUTER JOIN
SELECT pc.Name AS 'CategoryName'
	, ps.Name AS 'SubCategoryName'
	, pc.ProductCategoryID AS 'PC-ProductCategoryId'
	, ps.ProductCategoryID AS 'PS-ProductCategoryId'
FROM Production.ProductCategory AS pc
	RIGHT OUTER JOIN Production.ProductSubcategory AS ps ON pc.ProductCategoryID = ps.ProductCategoryID;


-- FULL OUTER JOIN
SELECT pc.Name AS 'CategoryName'
	, ps.Name AS 'SubCategoryName'
	, pc.ProductCategoryID AS 'PC-ProductCategoryId'
	, ps.ProductCategoryID AS 'PS-ProductCategoryId'
FROM Production.ProductCategory AS pc
	FULL OUTER JOIN Production.ProductSubcategory AS ps ON pc.ProductCategoryID = ps.ProductCategoryID;

--SELF JOIN
SELECT lhs.BusinessEntityID AS 'lhs.BusinessEntityID'
	, lhs.HireDate
	, rhs.BusinessEntityID AS 'rhs.BusinessEntityID'
FROM HumanResources.Employee lhs
	INNER JOIN HumanResources.Employee rhs ON lhs.HireDate = rhs.HireDate
											AND lhs.BusinessEntityID < rhs.BusinessEntityID;
-- CROSS JOIN
SELECT p.Name
	, e.HireDate AS 'ProductionDate'
FROM Production.Product AS p
	, HumanResources.Employee AS e;