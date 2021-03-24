GRANT EXECUTE,ALTER ON ex1 TO guest; -- grants permissions to other users, applications
GO

-- Creating Store Procedure with input and output parameter
CREATE OR ALTER PROCEDURE practice3
	@name varchar(18),
	@data nvarchar(MAX) OUTPUT
AS
	
	SET @data = (SELECT count(*) FROM Deposits WHERE Cname = @name)
	SELECT @data AS DATACOUNTS
GO

--executing SP with params
EXEC practice3 @name = 'SUNIL',@data = OUTPUT --assign values to input/output params
GO

--Returning multiple resultset
CREATE OR ALTER PROCEDURE practice5
	@name varchar(18),
	@data nvarchar(MAX) OUTPUT
AS
	
	SET @data = (SELECT count(*) FROM Deposits WHERE Cname = @name)
	SELECT @data AS DATACOUNTS

	SET @data = (SELECT count(*) FROM Deposits WHERE Cname <> @name)
	SELECT @data AS REMAINING_DATACOUNTS
GO

EXEC practice5 @name = 'SUNIL',@data = OUTPUT --assign values to input/output params
GO

--Return JSON output from Store Procedure -- Use the SET NOCOUNT ON

CREATE OR ALTER PROCEDURE practice6
	@name varchar(18),
	@data nvarchar(MAX) OUTPUT
AS
	SET NOCOUNT ON -- Use the SET NOCOUNT ON 
	SET @data = (SELECT * FROM Deposits WHERE Cname = @name FOR JSON AUTO);
	SELECT @data AS DATA 
SET NOCOUNT OFF
GO

--executing SP with params
EXEC practice6 @name = 'SUNIL',@data = OUTPUT --assign values to input/output params
GO

-- TRY CATCH BLOCK using THROW -- with ENCRYPTION
CREATE OR ALTER PROCEDURE practice7
	@name varchar(18),
	@data nvarchar(MAX) OUTPUT
	WITH ENCRYPTION
AS
	SET NOCOUNT ON -- Use the SET NOCOUNT ON 
	
	BEGIN TRY
		SET @data = (SELECT * FROM Deposits WHERE Cname = @name FOR JSON AUTO);
		IF @data IS NULL
		BEGIN
			THROW 54000, 'NO DATA FOUND', 1
			--RAISERROR('NO DATA FOUND', -1, 1)
			--RETURN
		END
		SELECT @data AS DATA
	END TRY
	BEGIN CATCH
		PRINT ERROR_MESSAGE() + ' ' + convert(varchar(100),ERROR_NUMBER())
	END CATCH
	SET NOCOUNT OFF
GO

--executing SP with params
EXEC practice7 @name = 'SUNILXX',@data = OUTPUT --assign values to input/output params
GO


-- TRY CATCH BLOCK using RAISERRROR()-- with ENCRYPTION
CREATE OR ALTER PROCEDURE practice8
	@name varchar(18),
	@data nvarchar(MAX) OUTPUT
	WITH ENCRYPTION
AS
	SET NOCOUNT ON -- Use the SET NOCOUNT ON 
	
	BEGIN TRY
		SET @data = (SELECT * FROM Deposits WHERE Cname = @name FOR JSON AUTO);
		IF @data IS NULL
		BEGIN
			--THROW 54000, 'NO DATA FOUND', 1
			RAISERROR('NO DATA FOUND', 16, 1)
			RETURN
		END
		SELECT @data AS DATA
	END TRY
	BEGIN CATCH
		PRINT ERROR_MESSAGE() + ', SEVERITY: ' + convert(varchar(100),ERROR_SEVERITY())
	END CATCH
	SET NOCOUNT OFF
GO

--executing SP with params
EXEC practice8 @name = 'SUNILXX',@data = OUTPUT --assign values to input/output params
GO

