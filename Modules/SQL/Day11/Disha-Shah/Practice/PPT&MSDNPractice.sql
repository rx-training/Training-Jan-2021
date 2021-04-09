USE AdventureWorks2012

--STORED PROCEDURES

--CREATING STORED PROCEDURE USIN TRANSACT SQL
CREATE PROCEDURE HumanResources.uspGetEmployeesTest2
	@Lastname NVARCHAR(50),
	@Firstname NVARCHAR(50)
AS
	SET NOCOUNT ON;
	SELECT FirstName, LastName, Department 
	FROM HumanResources.vEmployeeDepartmentHistory
	WHERE FirstName = @Firstname AND LastName = @Lastname AND EndDate IS NULL;
GO

--EXECUTING STORED PROCEDURE
EXECUTE HumanResources.uspGetEmployeesTest2 N'Ackerman', N'Pilar';
GO

--OR,
EXEC HumanResources.uspGetEmployeesTest2 @Lastname = N'Ackerman', @Firstname = N'Pilar';
GO

--OR,
EXECUTE HumanResources.uspGetEmployeesTest2 @Firstname = N'Pilar', @Lastname = N'Ackerman';
GO

--RETURN VALUES FROM STORED PROCEDURES
ALTER PROCEDURE prcGetEmployeeDetail @EmpId INT, @DepName CHAR(50) OUTPUT, @ShiftId INT OUTPUT
AS
BEGIN
IF EXISTS(SELECT * FROM HumanResources.Employee WHERE BusinessEntityID = @EmpId)
BEGIN
SELECT @DepName = d.Name, @ShiftId = h.ShiftID
FROM HumanResources.Department AS d JOIN HumanResources.EmployeeDepartmentHistory AS h
ON d.DepartmentID = h.DepartmentID
WHERE h.BusinessEntityID = @EmpId AND h.EndDate IS NULL
RETURN 0
END
END

DECLARE @DepName CHAR(50), @ShiftId INT
EXECUTE prcGetEmployeeDetail 4, @DepName OUTPUT, @ShiftId OUTPUT;
PRINT @DepName;
PRINT @ShiftId;
GO

SELECT * FROM HumanResources.Department
SELECT * FROM HumanResources.EmployeeDepartmentHistory


--CALL A PROCEDURE FROM ANOTHER PROCEDURE
CREATE PROCEDURE prcDisplayEmployeeStatus @EmpId INT
WITH ENCRYPTION
AS
BEGIN
DECLARE @Depname CHAR(50), @ShiftId INT, @ReturnValue INT
EXEC @ReturnValue = prcGetEmployeeDetail @EmpId, @Depname OUTPUT, @ShiftId OUTPUT
IF (@ReturnValue = 0)
BEGIN
PRINT 'The details of an employee with ID: ' + CONVERT(CHAR(10), @EmpId)
PRINT 'Department name: ' + @Depname
PRINT 'ShiftId: ' + CONVERT(CHAR(1), @ShiftId)
SELECT BusinessEntityID, JobTitle FROM HumanResources.Employee
WHERE BusinessEntityID = @EmpId
END
ELSE
PRINT 'No records found for the given employee'
END

EXECUTE prcDisplayEmployeeStatus 14;
GO

--WITH ENCRYPTION OUTPUT
EXEC sys.sp_helptext prcDisplayEmployeeStatus


--MODIFY PROCEDURE USING TRANSACT SQL
IF OBJECT_ID ( 'Purchasing.uspVendorAllInfo', 'P' ) IS NOT NULL   
    DROP PROCEDURE Purchasing.uspVendorAllInfo;  
GO  
CREATE PROCEDURE Purchasing.uspVendorAllInfo  
WITH EXECUTE AS CALLER  
AS  
    SET NOCOUNT ON;  
    SELECT v.Name AS Vendor, p.Name AS 'Product name',   
      v.CreditRating AS 'Rating',   
      v.ActiveFlag AS Availability  
    FROM Purchasing.Vendor v   
    INNER JOIN Purchasing.ProductVendor pv  
      ON v.BusinessEntityID = pv.BusinessEntityID   
    INNER JOIN Production.Product p  
      ON pv.ProductID = p.ProductID   
    ORDER BY v.Name ASC;  
GO

ALTER PROCEDURE Purchasing.uspVendorAllInfo  
    @Product varchar(25)   
AS  
    SET NOCOUNT ON;  
    SELECT LEFT(v.Name, 25) AS Vendor, LEFT(p.Name, 25) AS 'Product name',   
    'Rating' = CASE v.CreditRating   
        WHEN 1 THEN 'Superior'  
        WHEN 2 THEN 'Excellent'  
        WHEN 3 THEN 'Above average'  
        WHEN 4 THEN 'Average'  
        WHEN 5 THEN 'Below average'  
        ELSE 'No rating'  
        END  
    , Availability = CASE v.ActiveFlag  
        WHEN 1 THEN 'Yes'  
        ELSE 'No'  
        END  
    FROM Purchasing.Vendor AS v   
    INNER JOIN Purchasing.ProductVendor AS pv  
      ON v.BusinessEntityID = pv.BusinessEntityID   
    INNER JOIN Production.Product AS p   
      ON pv.ProductID = p.ProductID   
    WHERE p.Name LIKE @Product  
    ORDER BY v.Name ASC;  
GO

EXEC Purchasing.uspVendorAllInfo N'LL Crankarm';  
GO


--VIEW ALL THE STORED PROCEDURES IN THE DATABASE
SELECT name AS procedure_name   
    ,SCHEMA_NAME(schema_id) AS schema_name  
    ,type_desc  
    ,create_date  
    ,modify_date  
FROM sys.procedures;

--DELETE PROCEDURE
DROP PROCEDURE HumanResources.uspGetEmployeesTest2;  
GO

--SYSTEM STORED PROCEDURES
EXEC sys.sp_who;
GO


--SPECIFY PARAMETERS
-- Passing values as constants.  
EXEC dbo.uspGetWhereUsedProductID 819, '20050225';  
GO  
-- Passing values as variables.  
DECLARE @ProductID int, @CheckDate datetime;  
SET @ProductID = 819;  
SET @CheckDate = '20050225';  
EXEC dbo.uspGetWhereUsedProductID @ProductID, @CheckDate;  
GO  
-- Try to use a function as a parameter value.  
-- This produces an error message.  
EXEC dbo.uspGetWhereUsedProductID 819, GETDATE();  
GO  
-- Passing the function value as a variable.  
DECLARE @CheckDate datetime;  
SET @CheckDate = GETDATE();  
EXEC dbo.uspGetWhereUsedProductID 819, @CheckDate;  
GO  



--SPECIFYING DEFAULT VALUES TO PARAMETER
IF OBJECT_ID('Sales.uspGetSalesYTD', 'P') IS NOT NULL  
    DROP PROCEDURE Sales.uspGetSalesYTD;  
GO  
CREATE PROCEDURE Sales.uspGetSalesYTD  
@SalesPerson nvarchar(50) = NULL  -- NULL default value  
AS   
    SET NOCOUNT ON;   
  
-- Validate the @SalesPerson parameter.  
IF @SalesPerson IS NULL  
BEGIN  
   PRINT 'ERROR: You must specify the last name of the sales person.'  
   RETURN  
END  
-- Get the sales for the specified sales person and   
-- assign it to the output parameter.  
SELECT SalesYTD  
FROM Sales.SalesPerson AS sp  
JOIN HumanResources.vEmployee AS e ON e.BusinessEntityID = sp.BusinessEntityID  
WHERE LastName = @SalesPerson;  
RETURN  
GO  

-- Run the procedure without specifying an input value.  
EXEC Sales.uspGetSalesYTD;  
GO  
-- Run the procedure with an input value.  
EXEC Sales.uspGetSalesYTD N'Blythe';  
GO 



--PARAMETERS
-- Create a procedure that takes one input parameter and returns one output parameter and a return code.
CREATE PROCEDURE SampleProcedure @EmployeeIDParm INT,
         @MaxTotal INT OUTPUT
AS
-- Declare and initialize a variable to hold @@ERROR.
DECLARE @ErrorSave INT
SET @ErrorSave = 0

-- Do a SELECT using the input parameter.
SELECT FirstName, LastName, JobTitle
FROM HumanResources.vEmployee
WHERE BusinessEntityID = @EmployeeIDParm

-- Save any nonzero @@ERROR value.
IF (@@ERROR <> 0)
   SET @ErrorSave = @@ERROR

-- Set a value in the output parameter.
SELECT @MaxTotal = MAX(TotalDue)
FROM Sales.SalesOrderHeader;

IF (@@ERROR <> 0)
   SET @ErrorSave = @@ERROR

-- Returns 0 if neither SELECT statement had an error; otherwise, returns the last error.
RETURN @ErrorSave
GO

-- Declare the variables for the return code and output parameter.
DECLARE @ReturnCode INT
DECLARE @MaxTotalVariable INT

-- Execute the stored procedure and specify which variables
-- are to receive the output parameter and return code values.
EXEC @ReturnCode = SampleProcedure @EmployeeIDParm = 19,
   @MaxTotal = @MaxTotalVariable OUTPUT

-- Show the values returned.
PRINT ' '
PRINT 'Return code = ' + CAST(@ReturnCode AS CHAR(10))
PRINT 'Maximum Quantity = ' + CAST(@MaxTotalVariable AS CHAR(10))
GO


--RETURNING DATA USING A RESULT SET
IF OBJECT_ID('Sales.uspGetEmployeeSalesYTD', 'P') IS NOT NULL  
   DROP PROCEDURE Sales.uspGetEmployeeSalesYTD;  
GO  
CREATE PROCEDURE Sales.uspGetEmployeeSalesYTD 

AS    
   
   SET NOCOUNT ON;  
   SELECT LastName, SalesYTD  
   FROM Sales.SalesPerson AS sp  
   JOIN HumanResources.vEmployee AS e ON e.BusinessEntityID = sp.BusinessEntityID  
   
RETURN  
GO  

EXEC Sales.uspGetEmployeeSalesYTD



--
IF OBJECT_ID('Sales.uspGetEmployeeSalesYTD', 'P') IS NOT NULL  
    DROP PROCEDURE Sales.uspGetEmployeeSalesYTD;  
GO  
CREATE PROCEDURE Sales.uspGetEmployeeSalesYTD  
@SalesPerson nvarchar(50),  
@SalesYTD money OUTPUT  
AS    
  
    SET NOCOUNT ON;  
    SELECT @SalesYTD = SalesYTD  
    FROM Sales.SalesPerson AS sp  
    JOIN HumanResources.vEmployee AS e ON e.BusinessEntityID = sp.BusinessEntityID  
    WHERE LastName = @SalesPerson;  
RETURN  
GO  

-- Declare the variable to receive the output value of the procedure.  
DECLARE @SalesYTDBySalesPerson money;  
-- Execute the procedure specifying a last name for the input parameter  
-- and saving the output value in the variable @SalesYTDBySalesPerson  
EXECUTE Sales.uspGetEmployeeSalesYTD  
    N'Blythe', @SalesYTD = @SalesYTDBySalesPerson OUTPUT;  
-- Display the value returned by the procedure.  
PRINT 'Year-to-date sales for this employee is ' +   
    convert(varchar(10),@SalesYTDBySalesPerson);  
GO  



--RECOMPILE
IF OBJECT_ID ( 'dbo.uspProductByVendor', 'P' ) IS NOT NULL   
    DROP PROCEDURE dbo.uspProductByVendor;  
GO  
CREATE PROCEDURE dbo.uspProductByVendor @Name varchar(30) = '%'  
WITH RECOMPILE  
AS  
    SET NOCOUNT ON;  
    SELECT v.Name AS 'Vendor name', p.Name AS 'Product name'  
    FROM Purchasing.Vendor AS v   
    JOIN Purchasing.ProductVendor AS pv   
      ON v.BusinessEntityID = pv.BusinessEntityID   
    JOIN Production.Product AS p   
      ON pv.ProductID = p.ProductID  
    WHERE v.Name LIKE @Name; 

EXECUTE dbo.uspProductByVendor WITH RECOMPILE;  
GO

EXEC sp_recompile N'dbo.uspProductByVendor';   
GO


--RENAMING
CREATE PROCEDURE HumanResources.uspGetAllEmployeesTest  
AS  
    SET NOCOUNT ON;  
    SELECT LastName, FirstName, Department  
    FROM HumanResources.vEmployeeDepartmentHistory;  
GO  
  
--Rename the stored procedure.  
EXEC sp_rename 'HumanResources.uspGetAllEmployeesTest', 'uspEveryEmployeeTest'; 



--EXCEPTION HANDLING

--TRY-CATCH
-- Verify that the stored procedure does not already exist.  
IF OBJECT_ID ( 'usp_GetErrorInfo', 'P' ) IS NOT NULL   
    DROP PROCEDURE usp_GetErrorInfo;  
GO  
  
-- Create procedure to retrieve error information.  
CREATE PROCEDURE usp_GetErrorInfo  
AS  
SELECT  
    ERROR_NUMBER() AS ErrorNumber  
    ,ERROR_SEVERITY() AS ErrorSeverity  
    ,ERROR_STATE() AS ErrorState  
    ,ERROR_PROCEDURE() AS ErrorProcedure  
    ,ERROR_LINE() AS ErrorLine  
    ,ERROR_MESSAGE() AS ErrorMessage;  
GO  
  
BEGIN TRY  
    -- Generate divide-by-zero error.  
    SELECT 1/0;  
END TRY  
BEGIN CATCH  
    -- Execute error retrieval routine.  
    EXECUTE usp_GetErrorInfo;  
END CATCH;


--ERROR NOT CAUGHT BY TRY_CATCH BLOCK
BEGIN TRY  
    -- Table does not exist; object name resolution  
    -- error not caught.  
    SELECT * FROM NonexistentTable;  
END TRY  
BEGIN CATCH  
    SELECT   
        ERROR_NUMBER() AS ErrorNumber  
       ,ERROR_MESSAGE() AS ErrorMessage;  
END CATCH


--SAME ERROR IS CAUGHT BY TRY_CATCH BLOCK, USING PROCEDURES
-- Verify that the stored procedure does not exist.  
IF OBJECT_ID ( N'usp_ExampleProc', N'P' ) IS NOT NULL   
    DROP PROCEDURE usp_ExampleProc;  
GO  
  
-- Create a stored procedure that will cause an   
-- object resolution error.  
CREATE PROCEDURE usp_ExampleProc  
AS  
    SELECT * FROM NonexistentTable;  
GO  
  
BEGIN TRY  
    EXECUTE usp_ExampleProc;  
END TRY  
BEGIN CATCH  
    SELECT   
        ERROR_NUMBER() AS ErrorNumber  
        ,ERROR_MESSAGE() AS ErrorMessage;  
END CATCH;




--RAISERROR

--RETURNING ERROR INFORMATION FROM CATCH BLOCK
BEGIN TRY  
    -- RAISERROR with severity 11-19 will cause execution to   
    -- jump to the CATCH block.  
    RAISERROR ('Error raised in TRY block.', -- Message text.  
               16, -- Severity.  
               1 -- State.  
               );  
END TRY  
BEGIN CATCH  
    DECLARE @ErrorMessage NVARCHAR(4000);  
    DECLARE @ErrorSeverity INT;  
    DECLARE @ErrorState INT;  
  
    SELECT   
        @ErrorMessage = ERROR_MESSAGE(),  
        @ErrorSeverity = ERROR_SEVERITY(),  
        @ErrorState = ERROR_STATE();  
  
    -- Use RAISERROR inside the CATCH block to return error  
    -- information about the original error that caused  
    -- execution to jump to the CATCH block.  
    RAISERROR (@ErrorMessage, -- Message text.  
               @ErrorSeverity, -- Severity.  
               @ErrorState -- State.  
               );  
END CATCH;


--USE LOCAL VARIABLE TO SUPPLY MESSAGE
DECLARE @StringVariable NVARCHAR(50);  
SET @StringVariable = N'<\<%7.3s>>';  
  
RAISERROR (@StringVariable, -- Message text.  
           10, -- Severity,  
           1, -- State,  
           N'abcde'); -- First argument supplies the string.  
-- The message text returned is: <<    abc>>.  
GO


--
BEGIN TRY
DECLARE @num1 INT, @num2 INT, @num3 INT
SET @num1=10
SET @num2=0
IF @num2=0
	RAISERROR('Denominator can not be zero', 10, 1)
ELSE
	SET @num3=@num1/@num2
	PRINT @num3
END TRY
BEGIN CATCH
PRINT ERROR_MESSAGE()
END CATCH



--@@IDENTITY
--Display the value of LocationID in the last row in the table.  
SELECT MAX(LocationID) FROM Production.Location;  
GO  
INSERT INTO Production.Location (Name, CostRate, Availability, ModifiedDate)  
VALUES ('Damaged Goods', 5, 2.5, GETDATE());  
GO  
SELECT @@IDENTITY AS 'Identity';  
GO  
--Display the value of LocationID of the newly inserted row.  
SELECT MAX(LocationID) FROM Production.Location;  
GO  

USE SampleDB

INSERT INTO Tests VALUES('Rita')
PRINT @@IDENTITY

ALTER PROCEDURE prcTests @json NVARCHAR(MAX)
AS
BEGIN
DECLARE @name VARCHAR(50)
SELECT @name=Name 
FROM OPENJSON(@json)
WITH (
	Name VARCHAR(50) '$.Name'
)
INSERT INTO Tests VALUES(@name)
RETURN @@IDENTITY
END

DECLARE @json NVARCHAR(MAX), @Id INT
SET @json='[{"Name": "Rima"}]'
EXECUTE @Id = prcTests @json
PRINT @Id