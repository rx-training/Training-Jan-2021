-- ------------------------------------------------- FUNCTIONS -------------------------------------------------

-- USER DEFINED SCALAR FUNCTION
CREATE FUNCTION dbo.discount_price(@price DECIMAL(12,2), @discount DECIMAL(12,2))
RETURNS DECIMAL(12,2) AS
BEGIN
	RETURN @price * (1 - @discount);
END

SELECT dbo.discount_price(100, 0.5);


-----------------------------------------------------------
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


-- TABLE VALUED FUNCTION
CREATE FUNCTION Sales.ufn_SalesByStore (@storeid INT)  
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


-- ALTER FUNCTION
CREATE OR ALTER FUNCTION [dbo].[ufnGetAccountingEndDate]()  
RETURNS [datetime]   
AS   
BEGIN  
    RETURN DATEADD(millisecond, -2, CONVERT(datetime, '20040701', 112));  
END;  


-- DROP FUNCTION
DROP FUNCTION dbo.discount_price;


-- VIEW FUNCTION
SELECT OBJECT_DEFINITION (OBJECT_ID('dbo.ufnGetProductDealerPrice')) AS ObjectDefinition;