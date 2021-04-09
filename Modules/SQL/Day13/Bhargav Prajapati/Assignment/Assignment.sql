/*Create a scaler Function to compute PF which will accept parameter basicsalary and compute PF.
PF is 12% of the basic salary.*/
USE Assignment
ALTER FUNCTION dbo.CountPF(@Salary FLOAT)
RETURNS Float
AS
BEGIN
RETURN (@Salary*.12)
END
GO
DECLARE @PayRate FLOAT
SET @PayRate=dbo.CountPF(1280)
PRINT 'Your PF Amount Is :- '+ CAST( @PayRate AS varchar(30))


/*Create a scaler Function which will compute PT which will accept MontlyEarning. Criteria as below.*/

CREATE FUNCTION dbo.computePT(@MontlyEarning int)
RETURNS varchar(Max)
AS
BEGIN
	
	DECLARE @text varchar(Max)
	IF @MontlyEarning<5999 
		SET @text=	'Nil'
	IF @MontlyEarning BETWEEN 6000 AND 8999
		SET @text= 'Rs. 80/month'
	IF @MontlyEarning BETWEEN 9000 AND 11999
		SET @text='	Rs. 150/month'
	IF @MontlyEarning>12000 
		SET @text='Rs. 200/month'
	RETURN @text
END
GO
DECLARE @Tex varchar(Max)
SET @Tex=dbo.computePT(13000)
PRINT 'Your Text Per Month :- '+ @Tex

/*Create a table valued function which will accept JobTitle which will return new table set based on jobtitle*/
USE  AdventureWorks2012
SELECT * FROM HumanResources.Employee

CREATE FUNCTION  GetData(@jobtitle varchar(Max))
RETURNS TABLE
AS
 RETURN(SELECT * FROM HumanResources.Employee WHERE JobTitle=@jobtitle)
GO


SELECT * FROM GetData('Senior Tool Designer')








