CREATE FUNCTION TBL_FUN (@jobTitle varchar(20))
RETURNS TABLE
AS
RETURN (
	SELECT * FROM EMPLOYEE 	
	WHERE jobTitle = @jobTitle
)

SELECT * FROM dbo.TBL_FUN("Senior Tool Designer")