CREATE  FUNCTION MY_FUN (@NAME VARCHAR)
RETURNS VARCHAR
AS
BEGIN
	RETURN ( @NAME + 'ANKS' )
END


DECLARE @SURNAME VARCHAR(25)
SET @SURNAME = 'PATEL'
PRINT @SURNAME


DECLARE @FULL_NAME VARCHAR(8)

SET @FULL_NAME = dbo.MY_FUN (@SURNAME)
