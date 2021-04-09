USE AdventureWorks2012;


-- -------------------------------------------- PROCEDURE --------------------------------------------

-- CREATING PROCEDURE
CREATE PROCEDURE Person.uspGetEmployeeTest
	@FirstName NVARCHAR(50),
	@LastName NVARCHAR(50)
AS
	SET NOCOUNT ON;
	SELECT BusinessEntityID, FirstName, LastName
	FROM Person.Person
	WHERE FirstName = @FirstName AND LastName = @LastName;
GO


-- EXECUTING PROCEDURE
EXECUTE Person.uspGetEmployeeTest @FirstName = N'John', @LastName= N'Smith';
GO

EXECUTE Person.uspGetEmployeeTest N'John', N'Smith';
GO

EXEC Person.uspGetEmployeeTest @FirstName = N'John', @LastName= N'Smith';
GO

EXEC Person.uspGetEmployeeTest N'John', N'Smith';
GO


-- OUTPUT AND RETURN PARAMETERS
SELECT * FROM HumanResources.vEmployee;

ALTER PROCEDURE SampleProcedure
	@EmployeeIDparm INT,
	@MaxTotal INT OUTPUT
	WITH ENCRYPTION
AS 
DECLARE @ErrorSave INT
SET @ErrorSave = 0

SELECT FirstName, LastName, JobTitle
FROM HumanResources.vEmployee
WHERE BusinessEntityID = @EmployeeIDparm

IF(@@ERROR <> 0)
	SET @ErrorSave = @@ERROR

SELECT @MaxTotal = MAX(TotalDue)
FROM Sales.SalesOrderHeader

IF(@@ERROR <> 0)
	SET @ErrorSave = @@ERROR

RETURN @ErrorSave
GO

-- Execute
SET NOCOUNT ON
DECLARE @ReturnCode INT
DECLARE @MaxTotalVariable INT

EXECUTE @ReturnCode = SampleProcedure @EmployeeIDparm = 19,
	@MaxTotal = @MaxTotalVariable OUTPUT

PRINT ' '
PRINT 'Return Code = ' + CAST(@ReturnCode AS CHAR(10)) 
PRINT 'Maximum Quantity = ' + CAST(@MaxTotalVariable AS CHAR(10))
GO

SET NOCOUNT OFF;

-- WITH ENCRYPTION
sp_helptext [SampleProcedure]
sp_helptext [Person.uspGetEmployeeTest]


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

-- -------------------------------------------- ERROR HANDLING --------------------------------------------

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