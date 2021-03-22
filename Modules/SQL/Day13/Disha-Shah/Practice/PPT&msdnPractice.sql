USE SampleDB
GO

--UDF

--CREATING SCALER FUNCTION
CREATE FUNCTION HumanResources.MonthlySal (@PayRate Float)
RETURNS FLOAT
AS
BEGIN
RETURN (@PayRate*8*30)
END

--CALLING SCALER FUNCTION
DECLARE @PayRate FLOAT
SET @PayRate = HumanResources.MonthlySal (12.25)
PRINT @PayRate
GO


SELECT * FROM Sales.SalesOrderHeader

CREATE FUNCTION Sales.uf_MostRecentCustomerOrderDate(@CustomerID INT)
RETURNS DATETIME
AS
BEGIN
DECLARE @MostRecentOrderDate DATETIME
SELECT @MostRecentOrderDate = MAX(OrderDate)
FROM Sales.SalesOrderHeader
WHERE CustomerID=@CustomerID
RETURN (@MostRecentOrderDate)
END

--CALLING SCALER FUNCTION
DECLARE @MostRecentOrderDate DATETIME
SET @MostRecentOrderDate = Sales.uf_MostRecentCustomerOrderDate (29825)
PRINT @MostRecentOrderDate


--MSDN PRACTICE OF SCALER FUNCTION

SELECT * FROM Production.Product  

IF OBJECT_ID (N'dbo.ufnGetInventoryStock', N'FN') IS NOT NULL  
    DROP FUNCTION ufnGetInventoryStock;  
GO  
CREATE FUNCTION dbo.ufnGetInventoryStock(@ProductID int)  
RETURNS int   
AS   
-- Returns the stock level for the product.  
BEGIN  
    DECLARE @ret int;  
    SELECT @ret = SUM(p.Quantity)   
    FROM Production.ProductInventory p   
    WHERE p.ProductID = @ProductID   
        AND p.LocationID = '6';  
     IF (@ret IS NULL)   
        SET @ret = 0;  
    RETURN @ret;  
END;

SELECT ProductModelID, Name, dbo.ufnGetInventoryStock(ProductID)AS CurrentSupply  
FROM Production.Product  
WHERE ProductModelID BETWEEN 75 and 80;


--CREATING TABLE VALUED FUNCTION
CREATE FUNCTION fx_Department_Gname (@GrName NVARCHAR(20))
RETURNS TABLE
AS 
RETURN (
	SELECT * FROM HumanResources.Department WHERE GroupName=@GrName
)
GO

--CALLING TABLE VALUED FUNCTION
SELECT * FROM fx_Department_Gname('Manufacturing')


--MSDN PRACTICE FOR TABLE VALUED FUNCTION
IF OBJECT_ID (N'Sales.ufn_SalesByStore', N'IF') IS NOT NULL  
    DROP FUNCTION Sales.ufn_SalesByStore;  
GO  
CREATE FUNCTION Sales.ufn_SalesByStore (@storeid int)  
RETURNS TABLE
WITH SCHEMABINDING
AS  
RETURN   
(  
    SELECT P.ProductID, P.Name, SUM(SD.LineTotal) AS 'Total'  
    FROM Production.Product AS P   
    JOIN Sales.SalesOrderDetail AS SD ON SD.ProductID = P.ProductID  
    JOIN Sales.SalesOrderHeader AS SH ON SH.SalesOrderID = SD.SalesOrderID  
    JOIN Sales.Customer AS C ON SH.CustomerID = C.CustomerID  
    WHERE C.StoreID = @storeid  
    GROUP BY P.ProductID, P.Name  
);

SELECT * FROM Sales.ufn_SalesByStore (602);


--MULTI STATEMENT TABLE VALUED FUNCTION
IF OBJECT_ID (N'dbo.ufn_FindReports', N'TF') IS NOT NULL  
    DROP FUNCTION dbo.ufn_FindReports;  
GO  
CREATE FUNCTION dbo.ufn_FindReports (@InEmpID INTEGER)  
RETURNS @retFindReports TABLE   
(  
    EmployeeID int primary key NOT NULL,  
    FirstName nvarchar(255) NOT NULL,  
    LastName nvarchar(255) NOT NULL,  
    JobTitle nvarchar(50) NOT NULL,  
    RecursionLevel int NOT NULL  
)  
WITH SCHEMABINDING
--Returns a result set that lists all the employees who report to the   
--specific employee directly or indirectly.*/  
AS  
BEGIN  
WITH EMP_cte(EmployeeID, OrganizationNode, FirstName, LastName, JobTitle, RecursionLevel) -- CTE name and columns  
    AS (  
        SELECT e.BusinessEntityID, e.OrganizationNode, p.FirstName, p.LastName, e.JobTitle, 0 -- Get the initial list of Employees for Manager n  
        FROM HumanResources.Employee e   
INNER JOIN Person.Person p   
ON p.BusinessEntityID = e.BusinessEntityID  
        WHERE e.BusinessEntityID = @InEmpID  
        UNION ALL  
        SELECT e.BusinessEntityID, e.OrganizationNode, p.FirstName, p.LastName, e.JobTitle, RecursionLevel + 1 -- Join recursive member to anchor  
        FROM HumanResources.Employee e   
            INNER JOIN EMP_cte  
            ON e.OrganizationNode.GetAncestor(1) = EMP_cte.OrganizationNode  
INNER JOIN Person.Person p   
ON p.BusinessEntityID = e.BusinessEntityID  
        )  
-- copy the required columns to the result of the function   
   INSERT @retFindReports  
   SELECT EmployeeID, FirstName, LastName, JobTitle, RecursionLevel  
   FROM EMP_cte   
   RETURN  
END;  
GO

SELECT EmployeeID, FirstName, LastName, JobTitle, RecursionLevel  
FROM dbo.ufn_FindReports(2);

--USE APPLY IN FUNCTIONS
CREATE FUNCTION Sales.uf_CustomerOrderDates(@CustomerID INT)
RETURNS TABLE
AS
RETURN 
	SELECT OrderDate
	FROM Sales.SalesOrderHeader
	WHERE CustomerID = @CustomerID


SELECT OrderDate FROM Sales.uf_CustomerOrderDates(29825)

SELECT c.CustomerID, cod.OrderDate
FROM Sales.Customer AS c
	CROSS APPLY Sales.uf_CustomerOrderDates(c.CustomerID) AS cod
WHERE c.CustomerID=29825


--BUILT IN SYSTEM FUNCTIONS
--CAN BE USED IN T-SQL UDF
SELECT CURRENT_TIMESTAMP
SELECT GETUTCDATE()
SELECT @@CONNECTIONS
SELECT @@CPU_BUSY
SELECT @@DBTS
SELECT @@IDLE
SELECT @@IO_BUSY
SELECT @@MAX_CONNECTIONS
SELECT @@MAX_PRECISION
SELECT @@PACK_RECEIVED
SELECT @@PACK_SENT
SELECT @@PACKET_ERRORS
SELECT @@TIMETICKS
SELECT @@TOTAL_ERRORS
SELECT @@TOTAL_READ
SELECT @@TOTAL_WRITE
SELECT @@LANGID
SELECT @@LANGUAGE 


--@@DATEFIRST
SET DATEFIRST 3;
GO  
SELECT @@DATEFIRST; -- 3 (Wednesday)
GO

SET LANGUAGE Italian;  
GO  
SELECT @@DATEFIRST;  
GO  
SET LANGUAGE us_english;  
GO  
SELECT @@DATEFIRST;

--@@TEXTSIZE
-- Set the TEXTSIZE option to the default size of 4096 bytes.  
SET TEXTSIZE 0  
SELECT @@TEXTSIZE AS 'Text Size'  
SET TEXTSIZE 2048  
SELECT @@TEXTSIZE AS 'Text Size'

--CAN NOT BE USED IN T-SQL UDF
SELECT RAND()
SELECT NEWID()


--MODIFY UDF
ALTER FUNCTION [dbo].[ufnGetAccountingEndDate]()  
RETURNS [datetime]   
AS   
BEGIN  
    RETURN DATEADD(millisecond, -2, CONVERT(datetime, '20040701', 112));  
END; 


--TO GET DEFINITIONS AND PROPERTIES OF A FUNCTION
-- Get the function name, definition, and relevant properties  
SELECT sm.object_id,   
   OBJECT_NAME(sm.object_id) AS object_name,   
   o.type,   
   o.type_desc,   
   sm.definition,  
   sm.uses_ansi_nulls,  
   sm.uses_quoted_identifier,  
   sm.is_schema_bound,  
   sm.execute_as_principal_id  
-- using the two system tables sys.sql_modules and sys.objects  
FROM sys.sql_modules AS sm  
JOIN sys.objects AS o ON sm.object_id = o.object_id  
-- from the function 'dbo.ufnGetProductDealerPrice'  
WHERE sm.object_id = OBJECT_ID('dbo.ufnGetProductDealerPrice')  
ORDER BY o.type;  
GO  

-- Get the definition of the function dbo.ufnGetProductDealerPrice  
SELECT OBJECT_DEFINITION (OBJECT_ID('dbo.ufnGetProductDealerPrice')) AS ObjectDefinition;  
GO  


--TO GET THE DEPENDENCIES OF A FUNCTIION
-- Get all of the dependency information  
SELECT OBJECT_NAME(sed.referencing_id) AS referencing_entity_name,   
    o.type_desc AS referencing_desciption,   
    COALESCE(COL_NAME(sed.referencing_id, sed.referencing_minor_id), '(n/a)') AS referencing_minor_id,   
    sed.referencing_class_desc, sed.referenced_class_desc,  
    sed.referenced_server_name, sed.referenced_database_name, sed.referenced_schema_name,  
    sed.referenced_entity_name,   
    COALESCE(COL_NAME(sed.referenced_id, sed.referenced_minor_id), '(n/a)') AS referenced_column_name,  
    sed.is_caller_dependent, sed.is_ambiguous  
-- from the two system tables sys.sql_expression_dependencies and sys.object  
FROM sys.sql_expression_dependencies AS sed  
INNER JOIN sys.objects AS o ON sed.referencing_id = o.object_id  
-- on the function dbo.ufnGetProductDealerPrice  
WHERE sed.referencing_id = OBJECT_ID('dbo.ufnGetProductDealerPrice');  
GO 

sp_help 'HumanResources.Employee'