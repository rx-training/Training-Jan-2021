/*** Day 11 Practice Exercise ***/

--Store Procedure

CREATE PROCEDURE uspGetStudents
	@Name VARCHAR(50),
	@City VARCHAR(50)
AS
	SET NOCOUNT ON;
	SELECT [Name],City FROM Students
	WHERE [Name] = @Name AND City = @City;
	SET NOCOUNT OFF
GO

EXECUTE uspGetStudents @Name='Abc',@City='Ahmedabad';
GO

DROP PROCEDURE uspGetStudents
GO

-- WITH ENCRYPTION

CREATE PROCEDURE uspGetStudents
	@Name VARCHAR(50),
	@City VARCHAR(50)
WITH ENCRYPTION
AS
	SET NOCOUNT ON;
	SELECT [Name],City FROM Students
	WHERE [Name] = @Name AND City = @City;
	SET NOCOUNT OFF
GO

EXECUTE uspGetStudents @Name='Abc',@City='Ahmedabad';
GO

DROP PROCEDURE uspGetStudents
GO

EXECUTE sp_helptext uspGetStudents
GO

--RETURN OUTPUT

CREATE PROCEDURE uspGetStudents
	@Name VARCHAR(50),
	@City VARCHAR(50) OUTPUT,
	@Standard INT OUTPUT
AS
	SET NOCOUNT ON;
	SELECT @City=City,@Standard=Standard FROM Students
	WHERE [Name] = @Name;
	RETURN 0
	SET NOCOUNT OFF
GO
SET NOCOUNT ON;
DECLARE @temp VARCHAR(50)
DECLARE @temp2 INT;
EXECUTE uspGetStudents @Name='Abc' , @City = @temp OUTPUT,@Standard = @temp2 OUTPUT;
PRINT @temp;
PRINT @temp2
GO
DROP PROCEDURE uspGetStudents
GO
SET NOCOUNT OFF;
GO

-- Return JSON output from Store Procedure

CREATE PROCEDURE uspGetStudents
	@Json VARCHAR(MAX) OUTPUT
AS
	SET NOCOUNT ON;
	SELECT @Json=
	(SELECT [Name],[Address] FROM Students
	FOR JSON PATH);
	RETURN 0
	SET NOCOUNT OFF
GO
SET NOCOUNT ON;
DECLARE @temp VARCHAR(MAX)
EXECUTE uspGetStudents  @Json = @temp OUTPUT;
PRINT @temp;
GO
DROP PROCEDURE uspGetStudents
GO
SET NOCOUNT OFF;
GO

--Exception Handling
--Using Try Catch

BEGIN TRY
SELECT 1/0
END TRY
BEGIN CATCH
SELECT 'There was an error !' + 
	ERROR_MESSAGE() AS ErrorMessage
	,ERROR_LINE() AS ErrorLine
	,ERROR_NUMBER() AS ErrorNumber
	,ERROR_PROCEDURE() AS ErrorProcedure
	,ERROR_SEVERITY() AS ErrorSeverity
	,ERROR_STATE() AS ErrorState
END CATCH
GO

-- RAISEROR

BEGIN TRY
RAISERROR('Demo Error',1,1)
END TRY
BEGIN CATCH
SELECT 'There was an error !' + 
	ERROR_MESSAGE() AS ErrorMessage
	,ERROR_LINE() AS ErrorLine
	,ERROR_NUMBER() AS ErrorNumber
	,ERROR_PROCEDURE() AS ErrorProcedure
	,ERROR_SEVERITY() AS ErrorSeverity
	,ERROR_STATE() AS ErrorState
END CATCH
GO