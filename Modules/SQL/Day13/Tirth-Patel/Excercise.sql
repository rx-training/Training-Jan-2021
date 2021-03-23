--//Scalar function

CREATE FUNCTION humanresources.Monthlysal (@payrate float)
RETURNS Float

AS 
	BEGIN
		RETURN ( @payrate * 8 * 20)
	END

DECLARE @payrate float
SET @payrate = HumanResources.monthlysal(12.25)
PRINT @payrate

--Table valued function
CREATE FUNCTION fx_Department_Gname
( @Grname nvarchar(20) 
)
RETURNS TABLE
AS 
RETURN ( SELECT * FROM HumanResources.Department WHERE GroupName = @Grname)
GO

SELECT * FROM fx_Department_Gname('Quality Assurance')

CREATE FUNCTION dbo.ufngetInventoryStock(@prodcutiF int)
RETURNS iNT
AS
BEGIN
	DECLARE @ret int 
	SELECT @ret = SUM(p.Quantity)  FROM Production.ProductInventory p 
	WHERE p.ProductID = @prodcutiF AND p.LocationID = '6' 
	IF (@ret IS null)
	SET @ret = 0
	RETURN @ret
END
SELECT ProductModelID ,
		Name,
		dbo.ufngetInventoryStock (ProductID) AS 'Current Stock'
FROM Production.Product

PRINT @@MAX_CONNECTIONS


USE TestData
CREATE FUNCTION ufnGetnewtables()
RETURNS TABLE
	AS
			RETURN (SELECT FirstName AS Name,
					Email,
					PhoneNumber AS Contact	FROM Employees)
SELECT  * FROM ufnGetnewtables()

--same output with multi0-statement Table valued
CREATE FUNCTION ufnGetmultStateatable() RETURNS  @table
	TABLE (Name varchar(20) , Email varchar(20) , contact varchar(20))
	AS
		BEGIN
			INSERT INTO @table 
				SELECT  FirstName AS Name,
					Email,
					PhoneNumber AS Contact	FROM Employees
					RETURN
		END
	SELECT * FROm ufnGetmultStateatable()
USE AdventureWorks2012
DECLARE @RET  nvarchar(51)
EXEC @RET = [dbo].[ufnGetSalesOrderStatusText] @status = 1
PRINT @RET

sp_helptext ufnGetSalesOrderStatusText