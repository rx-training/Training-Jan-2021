/*** Day - 13 Assignment ***/

/* 1 - Create a scaler Function to compute PF which will accept parameter basicsalary and compute PF. PF is 12% of the basic salary. */

CREATE FUNCTION CalcPf (@BasicSal FLOAT)
RETURNS FLOAT
AS
BEGIN
RETURN ((@BasicSal * 12) / 100)
END
GO

DECLARE @PF FLOAT
SET @PF =
dbo.CalcPf(1000)
PRINT @PF
GO

DROP FUNCTION dbo.CalcPf
GO

/* 2 - Create a scaler Function which will compute PT which will accept MontlyEarning. Criteria as below. */

CREATE FUNCTION ComputePT(@MonthlyEarning INT)
RETURNS VARCHAR(20)
AS
BEGIN
	DECLARE @PT VARCHAR(20)
	IF @MonthlyEarning < 5999
	BEGIN
	SET @PT = 'Nil'
	END
	IF @MonthlyEarning > 6000 AND @MonthlyEarning < 8999
	BEGIN
	SET @PT = 'Rs. 80/Month'
	END
	IF @MonthlyEarning > 9000 AND @MonthlyEarning < 11999
	BEGIN
	SET @PT = 'Rs. 150/Month'
	END
	IF @MonthlyEarning > 12000
	BEGIN
	SET @PT = 'Rs. 200/Month'
	END
	RETURN(@PT)
END
GO

DECLARE @PT VARCHAR(20)
SET @PT =
dbo.ComputePT(10000)
PRINT @PT	
GO

DROP FUNCTION dbo.ComputePT
GO

/* 3 - Create a table valued function which will accept JobTitle which will return new table set based on jobtitle */

CREATE FUNCTION fx_Jobs
(@JobTitle VARCHAR(20))
RETURNS Table
AS
RETURN 
(
	SELECT * FROM HumanResources.Employee WHERE JobTitle = @JobTitle
)
GO
SELECT * FROM fx_Jobs('Senior Tool Designer')
GO
DROP FUNCTION fx_Jobs
GO