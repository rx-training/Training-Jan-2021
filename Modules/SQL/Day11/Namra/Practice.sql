-- Creating a store procedure

USE AdventureWorks2012
GO

CREATE PROCEDURE HumanResources.uspGetEmployeesTest2
	@LastName NVARCHAR(50),
	@FirstName NVARCHAR(50)
AS
	SET NOCOUNT ON;
	SELECT FirstName, LastName, MiddleName
	FROM Person.Person
	WHERE FirstName = @FirstName AND LastName = @LastName;
GO

-- To execute the procedure

EXECUTE HumanResources.uspGetEmployeesTest2 N'Duffy',N'Terri';
EXECUTE HumanResources.uspGetEmployeesTest2 @LastName = N'Ackerman', @FirstName = N'Pilar';

-------------------------------------------------------------------------------------------------------------------------
-- Take input of employee Id and Gives DepName and ShiftId as output

ALTER PROCEDURE prcGetEmplpoyeeDetail @EmpId INT,
	@DepName char(50) OUTPUT,
	@ShiftId INT OUTPUT
AS
BEGIN
	IF EXISTS(SELECT * FROM HumanResources.Employee WHERE BusinessEntityID = @EmpId)
	BEGIN
		SELECT @DepName=d.DepartmentID,@ShiftId = h.ShiftID
		FROM HumanResources.Department d
		JOIN HumanResources.EmployeeDepartmentHistory h
		ON d.DepartmentID = h.DepartmentID
		WHERE BusinessEntityID = @EmpId AND h.EndDate IS NULL
	END
	RETURN 0
END
-- Execute above procedure
DECLARE @DEPARTMENT CHAR(50), @SHIFT INT;
EXECUTE prcGetEmplpoyeeDetail @EmpId=1 ,
	@DepName = @DEPARTMENT OUTPUT,
	@ShiftId = @SHIFT OUTPUT;
PRINT CAST(@DEPARTMENT AS VARCHAR(100)) +' -'+CAST( @SHIFT AS VARCHAR(100))
-------------------------------------------------------------------------------------------------------------------------
-- Modify a procedure

CREATE PROCEDURE Purchasing.uspVendorAllInfo
WITH EXECUTE AS CALLER
AS
	SET NOCOUNT ON;
	SELECT v.Name AS Vendor, 
		p.Name 'Product Name',
		v.CreditRating 'Rating',
		v.ActiveFlag 'Availability'
	FROM Purchasing.Vendor v
	INNER JOIN Purchasing.ProductVendor pv
		ON v.BusinessEntityID = pv.BusinessEntityID
	INNER JOIN Production.Product p
		ON pv.ProductID = p.ProductID
	ORDER BY v.Name ASC;
GO

-- Modifing an above procedure

ALTER PROCEDURE Purchasing.uspVendorAllInfo
	@Product VARCHAR(25)
AS 
	SET NOCOUNT ON;
	SELECT LEFT(v.Name, 25) 'Vendor',
		LEFT(p.Name, 25) 'Product Name', 
		'Rating' = CASE v.CreditRating
				WHEN 1 THEN 'Superior'
				WHEN 2 THEN 'Excellent'
				WHEN 3 THEN 'Above Avarage'
				WHEN 4 THEN 'Avarage'
				WHEN 5 THEN 'Below Avarage'
				ELSE 'No Rating'
				END,
		Availability = CASE v.ActiveFlag
				WHEN 1 THEN 'Yes'
				ELSE 'No'
				END
	FROM Purchasing.Vendor v
	INNER JOIN Purchasing.ProductVendor pv
		ON v.BusinessEntityID = pv.BusinessEntityID
	INNER JOIN Production.Product p
		ON pv.ProductID = p.ProductID
	WHERE p.Name LIKE @Product
	ORDER BY v.Name ASC;
GO

EXECUTE Purchasing.uspVendorAllInfo @Product='Adjustable Race'
----------------------------------------------------------------------------------------------------------------------------------
-- Return Data from a stored procedure
CREATE PROCEDURE Sales.uspGetemployeeSalesYTD
	@SalesPerson NVARCHAR(50),
	@SalesYTD MONEY OUTPUT
AS 
	SET NOCOUNT ON;
	SELECT @SalesYTD = SalesYTD
	FROM Sales.SalesPerson sp
	JOIN HumanResources.vEmployee e
	ON e.BusinessEntityID = sp.BusinessEntityID
	WHERE LastName = @SalesPerson;
RETURN 
GO

DECLARE @SalesYTDBySalesPerson MONEY;
EXECUTE Sales.uspGetemployeeSalesYTD N'Blythe', @SalesYTD = @SalesYTDBySalesPerson OUTPUT;

Print 'Year-to-date sales for this employee is '+CONVERT (VARCHAR(10), @SalesYTDBySalesPerson)
GO
-------------------------------------------------------------------------------------------------------------------------------------
-- RENAME
CREATE PROCEDURE HumanResources.uspGetAllEmployeesTest  
AS  
    SET NOCOUNT ON;  
    SELECT LastName, FirstName, Department  
    FROM HumanResources.vEmployeeDepartmentHistory;  
GO  
 
EXEC sp_rename 'HumanResources.uspGetAllEmployeesTest', 'uspEveryEmployeeTest';


-- RECOMPILE
EXECUTE HumanResources.uspEveryEmployeeTest WITH RECOMPILE;

EXEC sp_recompile N'HumanResources.uspEveryEmployeeTest'; 

-- GRANT PERMISSIONS 
GRANT EXECUTE ON OBJECT::HumanResources.uspEveryEmployeeTest
	TO <USERNAME>;
GO

-- DROP
DROP PROCEDURE HumanResources.uspEveryEmployeeTest;

-----------------------------------------------------------------------------------------------------------------------
-- ERROR HANDLING

BEGIN TRY  
    -- Generate a divide-by-zero error.  
    SELECT 1/0;  
END TRY  
BEGIN CATCH  
    SELECT  
        ERROR_NUMBER() AS ErrorNumber  
        ,ERROR_SEVERITY() AS ErrorSeverity  
        ,ERROR_STATE() AS ErrorState  
        ,ERROR_PROCEDURE() AS ErrorProcedure  
        ,ERROR_LINE() AS ErrorLine  
        ,ERROR_MESSAGE() AS ErrorMessage;  
END CATCH;  
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


--Errors Unaffected by a TRY...CATCH Construct
BEGIN TRY
	SELECT * FROM Employees;
END TRY
BEGIN CATCH
	SELECT
		ERROR_NUMBER() AS ErrorNumber
		, ERROR_MESSAGE() AS ErrorMessage;
END CATCH


-- PROCEDURE FOR ERROR
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


-- RAISE ERROR
BEGIN TRY
	RAISERROR('Error raised in TRY block.', 16, 0);
END TRY
BEGIN CATCH
	SELECT  
    ERROR_NUMBER() AS ErrorNumber  
    ,ERROR_SEVERITY() AS ErrorSeverity  
    ,ERROR_STATE() AS ErrorState  
    ,ERROR_PROCEDURE() AS ErrorProcedure  
    ,ERROR_LINE() AS ErrorLine  
    ,ERROR_MESSAGE() AS ErrorMessage; 
END CATCH