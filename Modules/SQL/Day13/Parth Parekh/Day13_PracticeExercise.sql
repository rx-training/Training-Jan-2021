-- Creating / Calling
SELECT * FROM HumanResources.
CREATE FUNCTION MonthlySalary(@PayRate float) 
RETURNS float
AS 
BEGIN
RETURN (@PayRate * 8 )
END

-- ALTER Function
ALTER FUNCTION MonthlySalary(@PayRate float) 
RETURNS float
AS 
BEGIN
RETURN (@PayRate * 8 * 2 )
END

 
DECLARE @PayRate float
SET @PayRate = dbo.MonthlySalary(12)
PRINT @PayRate

-- DROP Function
DROP FUNCTION MonthlySalary

-- Creating Table-valued Function
SELECT * FROM  HumanResources.Department
CREATE FUNCTION fx_Department_Gname (@GrName nvarchar(20))
RETURNS TABLE
AS
RETURN (
	SELECT * FROM HumanResources.Department WHERE GroupName = @GrName
)
GO
SELECT * FROM fx_Department_Gname('Manufacturing')

DROP FUNCTION fx_Department_Gname

-- Another Example
SELECT * FROM EMPLOYEE
CREATE FUNCTION GetDepartment (@dname varchar(MAX))
RETURNS TABLE 
AS 
RETURN ( SELECT  FIRST_NAME , LAST_NAME ,DEPARTMENT FROM  EMPLOYEE WHERE DEPARTMENT = @dname  )
GO
SET NOCOUNT ON
DECLARE @dname VARCHAR(MAX) , @temp VARCHAR(MAX)
SET @dname = 'Insurance'
SET @temp =  (SELECT * FROM GetDepartment (@dname) FOR JSON PATH)
PRINT @temp
DROP FUNCTION GetDepartment
SET NOCOUNT OFF


