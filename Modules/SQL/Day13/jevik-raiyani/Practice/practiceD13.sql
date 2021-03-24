USE day5

DECLARE @myVar nvarchar(20)
SET @myVar = 'SO43659'
DECLARE @json NVARCHAR(MAX) = N'[  
  {  
    "Order": {  
      "Number":"'+ @myVar +'",  
      "Date":"2011-05-31T00:00:00"  
    },  
    "AccountNumber":"AW29825",  
    "Item": {  
      "Price":2024.9940,  
      "Quantity":1  
    }  
  },  
  {  
    "Order": {  
      "Number":"SO43661",  
      "Date":"2011-06-01T00:00:00"  
    },  
    "AccountNumber":"AW73565",  
    "Item": {  
      "Price":2024.9940,  
      "Quantity":3  
    }  
  }
]'  
SELECT * FROM OPENJSON(@json)

CREATE FUNCTION doublefloat(@num float)
RETURNS float
AS
BEGIN
RETURN (@num * 2)
END

DECLARE @num float
SET @num= dbo.doublefloat(12.5)
PRINT @num
SELECT * FROM Employees

CREATE FUNCTION plusonehallsqure(@num float)
RETURNS float
AS
BEGIN
RETURN (@num+1)*(@num+1)
END

DECLARE @num float
SET @num = dbo.plusonehallsqure(5.1)
PRINT @num

CREATE FUNCTION EMPdept(@dept NVARCHAR(MAX))
RETURNS TABLE
AS
RETURN(
		SELECT * FROM Employees
		WHERE @dept =Department
)
GO
SELECT* FROM dbo.EMPdept('Banking')

ALTER FUNCTION EMPdept(@dept NVARCHAR(MAX))
RETURNS TABLE
AS
RETURN(
		SELECT Emp_ID,First_Name,Salary FROM Employees
		WHERE @dept =Department
)
GO
SELECT* FROM dbo.EMPdept('Banking')
DROP FUNCTION dbo.EMPdept

SELECT MAX(LocationID) FROM AdventureWorks2012.Production.Location;  
GO  
INSERT INTO AdventureWorks2012.Production.Location (Name, CostRate, Availability, ModifiedDate)  
VALUES ('Damaged Goods', 5, 2.5, GETDATE());  
GO  
SELECT @@IDENTITY AS 'Identity';  
GO  
--Display the value of LocationID of the newly inserted row.  
SELECT MAX(LocationID) FROM AdventureWorks2012.Production.Location;  
GO
SELECT @@PACK_RECEIVED

SELECT * FROM Employees
PRINT @@ROWCOUNT

SELECT BINARY_CHECKSUM(*) FROM Employees
SELECT CHECKSUM(*) FROM Employees
SELECT COMPRESS(First_Name),* FROM Employees

SELECT
CONNECTIONPROPERTY('net_transport'),
CONNECTIONPROPERTY('protocol_type'),
CONNECTIONPROPERTY('local_net_address')

SET CONTEXT_INFO 0x1256698456;  
GO  
SELECT CONTEXT_INFO();  
GO
SELECT CURRENT_REQUEST_ID()


SELECT DECOMPRESS(COMPRESS(First_Name)) FROM Employees

BEGIN TRY   
    SELECT 1/0;  
END TRY  
BEGIN CATCH  
    SELECT ERROR_LINE(),
			ERROR_MESSAGE(),
			ERROR_NUMBER(),
			ERROR_PROCEDURE(),
			ERROR_SEVERITY(),
			ERROR_STATE()
END CATCH;  

-- Verify that the stored procedure does not already exist.  
IF OBJECT_ID ( 'usp_ExampleProc', 'P' ) IS NOT NULL   
    DROP PROCEDURE usp_ExampleProc;  
GO  
  
-- Create a stored procedure that   
-- generates a divide-by-zero error.  
CREATE PROCEDURE usp_ExampleProc  
AS  
    SELECT 1/0;  
GO  
  
BEGIN TRY  
    -- Execute the stored procedure inside the TRY block.  
    EXECUTE usp_ExampleProc;  
END TRY  
BEGIN CATCH  
    SELECT   
        ERROR_NUMBER() AS ErrorNumber,  
        ERROR_SEVERITY() AS ErrorSeverity,  
        ERROR_STATE() AS ErrorState,  
        ERROR_PROCEDURE() AS ErrorProcedure,  
        ERROR_MESSAGE() AS ErrorMessage,  
        ERROR_LINE() AS ErrorLine;  
        END CATCH;  
GO
GO

SELECT FORMATMESSAGE('This is the %s and this is the %s.', 
					'first variable', 
					'second variable') AS Result;
SELECT text FROM sys.messages WHERE message_id = 20009 AND language_id = 1033;  
DECLARE @var1 VARCHAR(200);   
SELECT @var1 = FORMATMESSAGE(20009, 'First Variable', 'Second Variable');   
SELECT @var1;

SELECT FORMATMESSAGE('Signed int %i, %d %i, %d, %+i, %+d, %+i, %+d', 5, -5, 50, -50, -11, -11, 11, 11);
SELECT FORMATMESSAGE('Signed int with up to 3 leading zeros %03i', 5);  
SELECT FORMATMESSAGE('Signed int with up to 20 leading zeros %020i', 5);  
SELECT FORMATMESSAGE('Signed int with leading zero 0 %020i', -55);  
SELECT FORMATMESSAGE('Bigint %I64d', 3000000000);
SELECT FORMATMESSAGE('Unsigned int %u, %u', 50, -50);  
SELECT FORMATMESSAGE('Unsigned octal %o, %o', 50, -50);  
SELECT FORMATMESSAGE('Unsigned hexadecimal %x, %X, %X, %X, %x', 11, 11, -11, 50, -50);  
SELECT FORMATMESSAGE('Unsigned octal with prefix: %#o, %#o', 50, -50);  
SELECT FORMATMESSAGE('Unsigned hexadecimal with prefix: %#x, %#X, %#X, %X, %x', 11, 11, -11, 50, -50);  
SELECT FORMATMESSAGE('Hello %s!', 'TEST');  
SELECT FORMATMESSAGE('Hello %20s!', 'TEST');  
SELECT FORMATMESSAGE('Hello %-20s!', 'TEST');

SELECT GETANSINULL('day5')  
GO  
SELECT HOST_ID(),HOST_NAME()

SELECT ISNULL(NULL,4)
SELECT ISNULL(8,4)
SELECT ISNUMERIC(4)
SELECT ISNUMERIC('p')
SELECT MIN_ACTIVE_ROWVERSION()

SELECT NEWID()

CREATE TABLE myTable (
	ColumnA uniqueidentifier DEFAULT NEWSEQUENTIALID()
);

SELECT * FROM Employees
PRINT ROWCOUNT_BIG() 
GO

EXEC sp_set_session_context 'user_id', 4;  
SELECT SESSION_CONTEXT(N'user_id');

SELECT CURRENT_TIMESTAMP,
		GETDATE(),
		GETUTCDATE(),
		@@CONNECTIONS,
		@@CPU_BUSY,
		@@DBTS,
		@@IDLE,
		@@IO_BUSY

SELECT	@@MAX_CONNECTIONS,
		@@PACK_RECEIVED,
		@@PACK_SENT,
		@@PACKET_ERRORS,
		@@TOTAL_READ,
		@@TOTAL_WRITE

SELECT EmployeeID,Salary,Salary*(1-CommissionPct)
FROM Employees1

CREATE FUNCTION dbo.discount(@salary DECIMAL(10,2),@Cptc DECIMAL(10,2))
RETURNS DECIMAL(10,2)
AS
BEGIN
	RETURN @salary*(1-@Cptc)
END

SELECT  EmployeeID,Salary,dbo.discount(Salary,CommissionPct)
FROM Employees1

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