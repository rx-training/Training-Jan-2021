-- Store Procedure

CREATE PROCEDURE procedure1 @LastName nvarchar(50) , @FirstName nvarchar(50)
AS 
	SET NOCOUNT ON 
	SELECT FirstName , LastName , Department FROM HumanResources.vEmployeeDepartmentHistory
	WHERE FirstName = @FirstName AND LastName = @LastName
	AND EndDate IS NULL
	
GO

SET NOCOUNT ON
EXECUTE procedure1 'Brown' ,'Jo'
DROP PROCEDURE procedure1
SET NOCOUNT OFF
GO

CREATE PROCEDURE procedure1 @LastName nvarchar(50) , @FirstName nvarchar(50)
AS 
	SET NOCOUNT ON 
	SELECT FirstName , LastName , Department FROM HumanResources.vEmployeeDepartmentHistory
	WHERE FirstName = @FirstName AND LastName = @LastName
	AND EndDate IS NULL
	
GO

-- WITH ENCRYPTION

CREATE PROCEDURE procedure1 @LastName nvarchar(50) , @FirstName nvarchar(50)
WITH ENCRYPTION
AS 
	SET NOCOUNT ON 
	SELECT FirstName , LastName , Department FROM HumanResources.vEmployeeDepartmentHistory
	WHERE FirstName = @FirstName AND LastName = @LastName
	AND EndDate IS NULL
	
GO


-- OUTPUT Parameter 

CREATE PROCEDURE Sales.uspGetEmployeeSalesYTD  
@SalesPerson nvarchar(50),  
@SalesYTD money OUTPUT  
AS    
  
    SET NOCOUNT ON;  
    SELECT @SalesYTD = SalesYTD  
    FROM Sales.SalesPerson AS sp  
    JOIN HumanResources.vEmployee AS e ON e.BusinessEntityID = sp.BusinessEntityID  
    WHERE LastName = @SalesPerson;  
RETURN 0 
GO

-- Declare the variable to receive the output value of the procedure.  
SET NOCOUNT ON
DECLARE @SalesYTDBySalesPerson money;  
-- Execute the procedure specifying a last name for the input parameter  
-- and saving the output value in the variable @SalesYTDBySalesPerson  
EXECUTE Sales.uspGetEmployeeSalesYTD  
    N'Blythe',  @SalesYTDBySalesPerson OUTPUT;  
-- Display the value returned by the procedure.  
PRINT 'Year-to-date sales for this employee is ' + convert(varchar(10),@SalesYTDBySalesPerson);  
DROP PROCEDURE Sales.uspGetEmployeeSalesYTD
SET NOCOUNT OFF
GO

-- Return JSON Output From Store Procedure
CREATE PROCEDURE JsonData 
	@data varchar(MAX) OUTPUT
AS 
	SELECT @data = ( SELECT FIRST_NAME , LAST_NAME FROM EMPLOYEE FOR JSON PATH)
RETURN 0
GO
SET NOCOUNT ON;
DECLARE @dummy VARCHAR(MAX)
EXEC  JsonData @data = @dummy OUTPUT
PRINT @dummy
GO 
DROP PROCEDURE JsonData
GO
SET NOCOUNT OFF;
GO

-- TRY - CATCH Statement
BEGIN TRY 
	SELECT 1/0
END TRY
BEGIN CATCH 
SELECT 'THERE WAS AN ERROR !' + ERROR_MESSAGE() AS ErrorMessage ,
ERROR_LINE() AS ERRORLINE ,
ERROR_NUMBER() AS ERRORNUMBER , 
ERROR_PROCEDURE() AS ERRORPROCEDURE ,
ERROR_SEVERITY() AS ERROSERVERITY ,
ERROR_STATE() AS ERRORSTATE 
END CATCH 
GO

-- RAISERROR 
BEGIN TRY
   RAISERROR ('yes go it',10,1)
END TRY
BEGIN CATCH
	
PRINT 'ERROR'
END CATCH
GO

-- Built in Stored Procedure Function 
EXEC sp_helpdb  -- IT Display name of Database , Size , Owner , dbid , created date , Status , compatibility_level 
EXEC sp_help    -- IT Display Name , Owner , Object_type
EXEC sp_helptext JsonData -- It display store procedure step by step in table 
EXEC sp_datatype_info -- Returns information about the data types supported by the current environment.
EXEC sp_who  -- Provides information about current users, sessions, and processes

  
