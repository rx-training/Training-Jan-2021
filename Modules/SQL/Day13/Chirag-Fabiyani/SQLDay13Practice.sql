
----SACLAR FUNCTION----

CREATE FUNCTION HumanResources.MonthlySal(@PayRate FLOAT)
RETURNS FLOAT
AS
BEGIN
RETURN (@PayRate * 8 * 30)
END

DECLARE @PayRate FLOAT
SET @PayRate = 
	HumanResources.MonthlySal(12.25)
PRINT @PayRate




----TABLE-VALUED FUNCTION----

CREATE FUNCTION fx_Department_Gname
( @GrName nvarchar (20) )
RETURNS TABLE
AS
RETURN(
	SELECT * FROM HumanResources.Department WHERE GroupName=@GrName	
)
GO

SELECT * FROM fx_Department_Gname('Manufacturing')