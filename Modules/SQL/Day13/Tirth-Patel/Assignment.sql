--Create a scaler Function to compute PF which will accept parameter basicsalary and 
--compute PF. PF is 12% of the basic salary.

CREATE FUNCTION udfComputePF (@basicSalary int)
RETURNS FLOAT
AS BEGIN
	RETURN(@basicSalary +( 0.12 *@basicsalary))
	END
GO
USE TestData
DECLARE @Increament int
SET @Increament =dbo.udfComputePF(1000)
PRINT 'saalry after increment:' +CONVERT(varchar(10), @Increament)


--Create a scaler Function which will 
--compute PT which will accept MontlyEarning. Criteria as below.
--ALter FUNCTION udfComputetax (@monthlyEarning int )
--RETURNS int
--AS 
--BEGIN 

--DECLARE @pt int =0
--SET @pt = 
--	CASE  
--	WHEN  @monthlyEarning < 5000 then  0
--	WHEN  @monthlyEarning >6000 AND  @monthlyEarning < 8999 then  80
--	WHEN  @monthlyEarning >9000 AND  @monthlyEarning < 11999 then 150
--	WHEN  @monthlyEarning >12000 THEN 200
--	ELSE 0
--	END
--	RETURN @monthlyEarning
--END
--GO

--DECLARE @taxtobepaid int
--SET @taxtobepaid =dbo.udfComputePF(1000)
--PRINT @taxtobepaid

CREATE FUNCTION udftaxtobepaid(@income int)
RETURNS INT
AS BEGIN
	DECLARE @pt int = 0 
	IF @income < 5000 SET @pt = 0
	ELSE IF @income < 8999 SET @pt = 80
	ELSE IF @income < 11999 SET @pt = 150
	ELSE SET @pt = 200
	RETURN @pt
	END
GO

Declare @var int
SET @var = dbo.udftaxtobepaid(8000)
PRINT CONCAT('TAX to be paid monthly is :' ,@var)

--Create a table valued function 
--which will accept JobTitle which will return new table set based on jobtitle
USE AdventureWorks2012
CREATE FUNCTION udfJobTitle
( @jobTitle nvarchar(20) 
)
RETURNS TABLE
AS 
RETURN ( SELECT * FROM HumanResources.Employee WHERE JobTitle = @jobTitle)
GO
SELECT  * FROM udfJobTitle('Senior Tool Designer')