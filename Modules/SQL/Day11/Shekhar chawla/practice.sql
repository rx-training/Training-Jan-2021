--Day11/12


--Practice Exercise:
--Do the hands on the video provided and PPT example explained



--What to Learn

--    What is Store Procedure
--    Built in Store Procedure
EXEC sys.sp_who ;



--    Creating Store Procedure with input and output parameter
USE master;
GO

IF OBJECT_ID( 'dbo.pro1' , 'P' ) IS NOT NULL
	DROP PROCEDURE dbo.pro1
Go

CREATE PROCEDURE pro1 
	@Name VARCHAR(40) , 
	@Sal INT OUTPUT
AS
	SET NOCOUNT ON ;
	SELECT @Sal = Salary FROM Employees WHERE FirstName Like '%'+@Name+'%';
RETURN 
GO

DROP PROC pro1
DECLARE @salary INT , @name VARCHAR(34) = 'Neena' ;
EXEC pro1 @Name = @name , @Sal = @salary OUTPUT ;
PRINT @name + CAST(@Salary AS VARCHAR) ;
GO



--    Executing Store Procedure
EXECUTE empFullname 'on';		-- arguments must be in order
EXECUTE empFullname @Name = 'as';	-- with varible name




--    Returning multiple resultset
USE master ;
GO

CREATE PROC pro2				-- returns cursor
	@Salary CURSOR VARYING OUTPUT
AS
	SET NOCOUNT ON ;
	SET @Salary = CURSOR FORWARD_ONLY STATIC FOR
		SELECT FirstName , Salary FROM Employees 
		WHERE Salary > 15000 ;

	OPEN @Salary ;
GO

DECLARE @mycursor CURSOR , @name VARCHAR(34) , @sal INT ;
EXEC pro2 @Salary = @mycursor OUTPUT ;			-- assigning a cursor from procedure's cursor

FETCH NEXT FROM @mycursor INTO @name , @sal 

WHILE ( @@FETCH_STATUS = 0 )
BEGIN;
	PRINT @name + CAST( @sal AS VARCHAR)
	FETCH NEXT FROM @mycursor INTO @name , @sal 
END;
CLOSE @mycursor ; 
DEALLOCATE @mycursor ;



--    Return JSON output from Store Procedure
--    Use the SET NOCOUNT ON

--    WITH ENCRYPTION
CREATE PROCEDURE empName @FirstName VARCHAR(30) , @id INT OUTPUT
WITH ENCRYPTION
AS
	SELECT @id = EmployeeID FROM Employees WHERE FirstName = @FirstName  -- Returns = 100 AND 128
GO

DECLARE @empId INT ;
EXECUTE empName 'Neena' , @empId OUTPUT ;
PRINT @empId
GO

sp_helptext empName			-- cannot view stored proc because it is encrypted


--    Exception Handling
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



--    Using Try Catch
BEGIN TRY  
    -- Generate divide-by-zero error.  
    SELECT 1/0;  
END TRY  
BEGIN CATCH  
    -- Execute error retrieval routine.  
    EXECUTE usp_GetErrorInfo;  
END CATCH;



