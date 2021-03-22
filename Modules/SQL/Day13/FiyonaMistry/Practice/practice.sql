--Creating Scalar Function
CREATE OR ALTER FUNCTION dbo.ufnGetInventoryStock(@ProductID INT)  
RETURNS INT
AS   
BEGIN  
    DECLARE @ret INT
    SELECT @ret = SUM(p.Quantity)   
    FROM Production.ProductInventory p   
    WHERE p.ProductID = @ProductID   
        AND p.LocationID = '6'
     IF (@ret IS NULL)   
        SET @ret = 0
    RETURN @ret
END
GO


--Calling Scalar Function
SELECT ProductModelID, Name, dbo.ufnGetInventoryStock(ProductID)AS CurrentSupply  
FROM Production.Product  
WHERE ProductModelID BETWEEN 75 and 80
GO


--Creating Table-valued Function
CREATE OR ALTER FUNCTION Sales.ufn_SalesByStore (@storeid INT)  
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
)


--Calling Table-valued Function
SELECT * FROM Sales.ufn_SalesByStore (602)
GO


--ALTER Function
ALTER FUNCTION dbo.ufnGetAccountingEndDate()  
RETURNS datetime
AS   
BEGIN  
    RETURN DATEADD(millisecond, -2, CONVERT(datetime, '20040701', 112))
END

SELECT dbo.ufnGetAccountingEndDate()
FROM Sales.PersonCreditCard


--DROP Function
IF OBJECT_ID ('Sales.ufn_SalesByStore', 'IF') IS NOT NULL  
    DROP FUNCTION Sales.ufn_SalesByStore 
GO