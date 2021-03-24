/*
	Limitation and restriction of UDF
	>> UDF cannot be used to perform actions that modify the database state
	>> UDF cannot contain an OUTPUT INTO clause that has a table as its target
	>> UDF cannot return multiple sets. For that we need to use stored procedure
	>> Error hanndling is restricted in a UDF. UDF doesn't support TRY_CATCH, @ERROR or RAISERROR
	>> UDF can not call a stored procedure, but can call an extended stored procedure
	>> UDF cannot make use of dynamic SQL or temp tables. Table variables are allowed
	>> SET statement are not allowed in UDF
	>> The FOR XML clause is not allowed
	>> UDF can be nested;that is, one UDF can call another. 
	>> The nesting level is incremented when the called function starts execution, and decremented 
		when the called function finishes execution
	>> UDF can be nested up to 32 levels
	>> Exceeding the maximum levels of nesting causes the whole calling function chain to fail
*/

-- SCALAR FUNCTION

	CREATE FUNCTION dbo.ufnGetInventoryStock(@ProductId int)
	RETURNS INT
	AS
	BEGIN
		DECLARE @ret int;
		SELECT @ret = sum(p.Quantity)
		FROM Production.ProductInventory p
		WHERE p.ProductID = @ProductId
			AND p.LocationID = '6';
		IF(@ret IS NULL)
			SET @ret = 0;
		RETURN @ret;
	END;

	SELECT ProductModelID, Name, dbo.ufnGetInventoryStock(ProductID) 'CurrentSupply'
	FROM Production.Product
	WHERE ProductModelID BETWEEN 75 AND 80;

-- Table valued function
CREATE FUNCTION Sales.ufn_SalesByStore(@storeid INT)
RETURNS TABLE
AS
RETURN
(
	SELECT p.ProductID, p.Name, SUM(sd.LineTotal)'Total'
	FROM Production.Product p
		JOIN Sales.SalesOrderDetail sd ON sd.ProductID = p.ProductID
		JOIN Sales.SalesOrderHeader sh on sh.SalesOrderID = sd.SalesOrderID
		JOIN Sales.Customer c ON sh.CustomerID = c.CustomerID
		WHERE c.StoreID = @storeid
		GROUP BY p.ProductID, p.Name
);

SELECT * FROM Sales.ufn_SalesByStore(602);

-- Multi statement table valued function
CREATE FUNCTION dbo.ufn_FindReports(@InEmpId INTEGER)
RETURNS @retFindReports TABLE
(
	EmployeeID INT PRIMARY KEY NOT NULL,
	FirstName NVARCHAR(255) NOT NULL,
	LastName NVARCHAR(255) NOT NULL,
	JobTitle NVARCHAR(50) NOT NULL,
	RecursionLevel INT NOT NULL
)
AS
BEGIN 
	WITH EMP_cte(EmployeeID, OrganizationNode, FirstName, LastName, JobTitle, RecursionLevel)
	AS(
		SELECT 
			e.BusinessEntityID, e.OrganizationNode, p.FirstName, p.LastName, e.JobTitle, 0
		FROM HumanResources.Employee e
			JOIN Person.Person p ON e.BusinessEntityID = p.BusinessEntityID
			WHERE e.BusinessEntityID = @InEmpId
		UNION ALL
		SELECT e.BusinessEntityID, e.OrganizationNode, p.FirstName, p.LastName, e.JobTitle, RecursionLevel + 1 
		FROM HumanResources.Employee e
			JOIN EMP_cte ON e.OrganizationNode.GetAncestor(1) = EMP_cte.OrganizationNode
			JOIN Person.Person p ON p.BusinessEntityID = e.BusinessEntityID
	)

	INSERT @retFindReports
	SELECT EmployeeID, FirstName, LastName, JobTitle, RecursionLevel 
	FROM EMP_cte 
	RETURN 
END
GO

SELECT EmployeeID, FirstName, LastName, JobTitle, RecursionLevel
FROM dbo.ufn_FindReports(1);

-- BEST PRACTICES
/*
	If a UDF is not created with the SCHEMABIDNING clause, changes that are made to underlying objects can 
	effect the definition of the function and produce unecpected results when it is invoked. We recommand that
	you implement one of the following methods to ensure that the funtion become outdated because of changes 
	to its underlying objects:
		>>	Specift the WITH SCHEMABINDING clause when you are creating the UDF. This ensures that the objects 
			referenced in the function definition cannot be modified unless the function is also modified.
		>>	
*/

-- ALTER FUNCTION
CREATE OR ALTER FUNCTION [dbo].[ufnGetAccountingEndDate]()  
RETURNS [datetime]   
AS   
BEGIN  
    RETURN DATEADD(millisecond, -2, CONVERT(datetime, '20040701', 112));  
END;  


-- DROP FUNCTION
DROP FUNCTION dbo.ufn_FindReports;


-- VIEW FUNCTION
SELECT OBJECT_DEFINITION (OBJECT_ID('dbo.ufn_FindReports')) AS ObjectDefinition;