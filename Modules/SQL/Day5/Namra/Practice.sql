
-- Practice of PPT 
-- Inner Join 
	SELECT e.BusinessEntityID ,e.JobTitle, eph.Rate, eph.PayFrequency FROM HumanResources.Employee e JOIN HumanResources.EmployeePayHistory eph 
	ON e.BusinessEntityID = eph.BusinessEntityID

-- OUTER JOIN

	-- Left Outer Join
		SELECT p.ProductID, p1.SalesOrderID, p1.UnitPrice
		FROM Sales.SpecialOfferProduct P LEFT OUTER JOIN Sales.SalesOrderDetail p1 ON p.ProductID = p1.ProductID WHERE SalesOrderID IS NULL

	-- Right Outer Join
		SELECT e.JobTitle, d.JobCandidateID
		FROM HumanResources.Employee e RIGHT OUTER JOIN HumanResources.JobCandidate d ON e.BusinessEntityID = d.BusinessEntityID

	-- FULL OUTER JOIN
		SELECT e.BusinessEntityID,e.JobTitle, eph.Rate,eph.PayFrequency
		FROM HumanResources.Employee e FULL OUTER JOIN HumanResources.EmployeePayHistory eph ON e.BusinessEntityID = eph.BusinessEntityID


-- Practice of videos

	-- Inner Join 
	SELECT pc.Name 'CategoryName',
		ps.Name 'SubCategoryName',
		pc.ProductCategoryID 'pc.productCategoryId'
		, ps.ProductCategoryID 'ps.categoryId'
	FROM Production.ProductCategory AS pc
	INNER JOIN Production.ProductSubcategory AS ps
	ON pc.ProductCategoryID = ps.ProductCategoryID

	-- OUTER JOIN
	
	SELECT pc.Name AS 'CategoryName',
		ps.Name AS 'SubCategoryName'
	FROM Production.ProductCategory AS pc
	LEFT OUTER JOIN Production.ProductSubcategory AS ps
	 ON pc.ProductCategoryID = ps.ProductCategoryID
	
	SELECT pc.Name AS 'CategoryName',
		ps.Name AS 'SubCategoryName'
	FROM Production.ProductCategory AS pc
	RIGHT OUTER JOIN Production.ProductSubcategory AS ps
	 ON pc.ProductCategoryID = ps.ProductCategoryID
	
	-- SELF Joins
	SELECT lhs.BusinessEntityID ' lhs Employee ID',
		lhs.HireDate,
		rhs.BusinessEntityID 'rhs.EMployeedId'
	FROM HumanResources.Employee lhs
	INNER JOIN HumanResources.Employee rhs 
	ON lhs.HireDate = rhs.HireDate
	AND lhs.BusinessEntityID < rhs.BusinessEntityID

	-- Cross Join

	SELECT p.Name, e.HireDate AS 'productionDate'
	FROM Production.Product AS p,
		HumanResources.Employee AS e

