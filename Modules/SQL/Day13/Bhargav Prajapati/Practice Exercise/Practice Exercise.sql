USE AdventureWorks2012

----------------CREATING AND CALLING  SCALER FUNCTION-----------------

CREATE FUNCTION HumanResources.MonthlySal(@PayRate FLOAT)
RETURNS Float
AS
BEGIN
RETURN (@PayRate *8*30)
END

DECLARE @PayRate FLOAT
SET @PayRate=HumanResources.MonthlySal(12.5)
PRINT @PayRate


--------------------Table Valued  Function---------------------
CREATE FUNCTION  Deparment_Gname (@GName nvarchar(MAX))
RETURNS TABLE
AS
RETURN(
SELECT * FROM HumanResources.Department WHERE GroupName= @GName
)
GO

SELECT * FROM Deparment_Gname('Manufacturing')


--------------------------------Example of Scalar Function---------------------------
IF OBJECT_ID (N'dbo.ufnGetInventoryStock', N'FN') IS NOT NULL  
    DROP FUNCTION ufnGetInventoryStock;  
GO
CREATE FUNCTION scalerfunction1 (@ProductionId int)
RETURNS int
BEGIN
	DECLARE @RATE int;
	SELECT @RATE=SUM(p.Quantity) FROM Production.ProductInventory p  
	WHERE ProductID=@ProductionId AND p.LocationID='6'
	IF (@RATE IS NULL)
	SET @RATE=0;
	RETURN @Rate
END
SELECT ProductModelID,Name,dbo.scalerfunction1(ProductID) AS 'CURRENT SUPPLY'  FROM Production.Product
WHERE ProductModelID BETWEEN 75 AND 80

-----------------Table Valued FUNCTION--------------

IF OBJECT_ID (N'Sales.ufn_SalesByStore', N'IF') IS NOT NULL  
    DROP FUNCTION Sales.ufn_SalesByStore;  
GO  
CREATE FUNCTION Sales.ufn_SalesByStore (@storeid int)  
RETURNS TABLE  
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

