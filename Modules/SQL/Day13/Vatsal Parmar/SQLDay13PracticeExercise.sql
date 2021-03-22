/*** SQL Day 13 Practice Exercise ***/
--Scalar Functions
-- Creating Function

CREATE FUNCTION MonthlySal (@PayRate FLOAT)
RETURNS FLOAT
AS
BEGIN
RETURN (@PayRate * 8 * 30)
END
GO

-- Alter Function

ALTER FUNCTION MonthlySal (@PayRate FLOAT)
RETURNS FLOAT
AS
BEGIN
RETURN (@PayRate * 8 * 60)
END
GO

-- Calling Function

DECLARE @PayRate FLOAT
SET @PayRate =
dbo.MonthlySal(12.5)
PRINT @PayRate
GO

-- Drop Function

DROP FUNCTION dbo.MonthlySal
GO

-- Table-valued function

CREATE FUNCTION fx_Department_Gname
(@GrName varchar(20))
RETURNS Table
AS
RETURN 
(
	SELECT * FROM HumanResources.Department
	WHERE GroupName = @GrName
)
GO
SELECT * FROM fx_Department_Gname('Manufacturing')
GO
DROP FUNCTION fx_Department_Gname
GO