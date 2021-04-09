

----Create a scaler Function to compute PF which will accept parameter basicsalary and compute PF. PF is 12% of the basic salary.----

CREATE FUNCTION dbo.Func1(@Salary int)
RETURNS int
AS
BEGIN
	DECLARE @PF int
	SELECT @PF=@Salary+@Salary*0.12
	RETURN @PF
END

DECLARE @PSalary int
SET @PSalary=dbo.Func1(10000)
PRINT @PSalary




----Create a scaler Function which will compute PT which will accept MontlyEarning. Criteria as below.----

CREATE FUNCTION dbo.Func2(@MonthlyEarning int)
RETURNS int
AS
BEGIN
	DECLARE @PT int
	IF(@MonthlyEarning<6000)
	BEGIN
		SET @PT=NULL
	END
	IF(@MonthlyEarning>=6000 AND @MonthlyEarning<9000)
	BEGIN
		SET @PT=80
	END
	IF(@MonthlyEarning>=9000 AND @MonthlyEarning<12000)
	BEGIN
		SET @PT=150
	END
	IF(@MonthlyEarning>=12000)
	BEGIN
		SET @PT=200
	END
	RETURN @PT
END

DECLARE @MonthlyEarning int, @PT int
SET @MonthlyEarning=10000
SET @PT = dbo.Func2(@MonthlyEarning)
PRINT 'Inhand Salary is @MonthlyEarning-@PT:'
PRINT @MonthlyEarning-@PT





----Create a table valued function which will accept JobTitle which will return new table set based on jobtitle----

CREATE FUNCTION dbo.Func3(@JobTitle nvarchar(50))
RETURNS TABLE
AS
	RETURN(
		SELECT * FROM HumanResources.Employee WHERE JobTitle=@JobTitle
	)
GO

SELECT * FROM dbo.Func3('Senior Tool Designer')