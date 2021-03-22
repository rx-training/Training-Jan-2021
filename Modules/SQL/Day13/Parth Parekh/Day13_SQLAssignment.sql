-- Day13 Assignment
/* 1. Create a scaler Function to compute PF which will accept parameter basicsalary and compute PF. PF is 12% of the basic salary.*/
CREATE FUNCTION computePF (@basicsalary float)
RETURNS float
AS
BEGIN
RETURN (@basicsalary * 12)/100
END
GO

DECLARE @basicsalary float
SET @basicsalary = dbo.computePF(20000.00)
PRINT @basicsalary

/* 2. Create a scaler Function which will compute PT which will accept MontlyEarning. Criteria as below. */

ALTER FUNCTION computePT (@MonthlyEarning float)
RETURNS varchar(MAX)
AS
BEGIN
	DECLARE @temp varchar(50)
	IF @MonthlyEarning < 5999
	BEGIN
		SET @temp =  'Nil'
	END
	IF @MonthlyEarning BETWEEN 6000 AND 8999
	BEGIN
		SET @temp =  'Rs. 80/Month'
	END
	IF @MonthlyEarning BETWEEN 9000 AND 11999
	BEGIN
		SET @temp = 'Rs. 150/Month'
	END
	IF @MonthlyEarning >= 12000
	BEGIN
		SET @temp = 'Rs. 200/Month'
	END
RETURN @temp 
END

DECLARE @ans varchar(MAX)
SET @ans = dbo.computePT(8000)
PRINT  'Profession Tax Payable  =  '  + @ans


/* 3. Create a table valued function which will accept JobTitle which will return new table set based on jobtitle */
CREATE FUNCTION Datatable (@JObTitle VARCHAR(MAX))
RETURNS TABLE
AS 
	RETURN ( SELECT * FROM HumanResources.Employee WHERE JobTitle = @JObTitle ) 
Go

SELECT * FROM DataTable ('Senior Tool Designer') 

