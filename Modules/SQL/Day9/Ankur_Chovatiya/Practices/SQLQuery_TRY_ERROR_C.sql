-- CREATE STORED PROCEDURE

-- TRY CATCH 
-- CATCH ERROR
CREATE PROCEDURE MY_PROCEDURE
AS
	SELECT * FROM TBL;
GO

BEGIN TRY 
	-- EXECUTE PROCEDURE
	EXECUTE MY_PROCEDURE;
END TRY 


BEGIN CATCH
	SELECT ERROR_NUMBER() AS ERROR_NO,
			ERROR_MESSAGE() AS ERROR_MSJ

END CATCH