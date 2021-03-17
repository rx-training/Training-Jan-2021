
CREATE PROCEDURE WAIT_PRCD
AS
	SELECT TOP 10 BusinessEntityID FROM HumanResources.Employee;
GO

BEGIN
WAITFOR DELAY '00:00:30' 
EXECUTE WAIT_PRCD -- procedure execute after 30 second
END
GO;