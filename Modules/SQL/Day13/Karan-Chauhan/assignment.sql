USE AdventureWorks2012;
GO

/*Create a scaler Function to compute PF which will accept parameter basicsalary and compute PF. PF is 12% of the basic salary. */

ALTER FUNCTION dbo.fxComputePF(@BasicSalary FLOAT)
RETURNS FLOAT
AS
BEGIN
RETURN (@BasicSalary * 0.12)
END
GO

DECLARE @PF FLOAT
SET @PF = dbo.fxComputePF(1000)
PRINT @PF

GO



/*Create a scaler Function which will compute PT which will accept MontlyEarning. Criteria as below.*/
CREATE FUNCTION dbo.fxMonthlyEarning (@MonthlyEarning FLOAT)
RETURNS FLOAT
AS
BEGIN
IF @MonthlyEarning < 5999
	RETURN 0
ELSE IF @MonthlyEarning BETWEEN 6000 AND 8999
	RETURN 80
ELSE IF @MonthlyEarning BETWEEN 9000 AND 11999
	RETURN 150
ELSE
	RETURN 200
RETURN 0
END
GO

DECLARE @PT FLOAT
SET @PT = dbo.fxMonthlyEarning(12000)
PRINT @PT

GO

/*Create a table valued function which will accept JobTitle which will return new table set based on jobtitle*/

CREATE FUNCTION fxJobTitle (@JobTitle NVARCHAR(20))
RETURNS TABLE
AS
RETURN (
	SELECT * FROM HumanResources.Employee WHERE JobTitle = @JobTitle 
	)
GO

SELECT * FROM fxJobTitle('Senior Tool Designer');