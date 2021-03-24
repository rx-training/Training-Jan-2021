/****************************************  Day 13 *****************************************************************/

/******************* Assignment 1 *********************

Create a scaler Function to compute PF which will accept parameter basicsalary and compute PF. PF is 12% of the basic salary.*/

CREATE FUNCTION ComputePF(@BasicSalary MONEY)
RETURNS MONEY
AS BEGIN
	SET @BasicSalary = @BasicSalary*0.12
	RETURN @BasicSalary
END
GO

DECLARE @Salary MONEY 
SET @Salary= 100
PRINT dbo.ComputePF(@Salary)
GO

/******************* Assignment 2 *********************


Create a scaler Function which will compute PT which will accept MontlyEarning. Criteria as below.

 _______________________________________________
|Monthly Earnings	   |  Profession Tax Payable|
|______________________|________________________|
|Below Rs. 5999	       |  Nil                   |
|Rs. 6000 to Rs. 8999  |  Rs. 80/month          |
|Rs. 9000 to Rs. 11999 |  Rs. 150/month         |
|Rs 12000 and above	   |  Rs. 200/month         |
|______________________|________________________|
*/

CREATE FUNCTION ComputePF2(@MontlyEarning MONEY)
RETURNS MONEY
AS BEGIN
	DECLARE @PF MONEY
	SET @PF = CASE
			WHEN @MontlyEarning <= 5999 THEN 0
			WHEN @MontlyEarning >= 6000  AND @MontlyEarning <= 8999 THEN 80
			WHEN @MontlyEarning >= 9000  AND @MontlyEarning <= 11999 THEN 150
			WHEN @MontlyEarning >= 12000 THEN 200
			END
	RETURN @PF
END
GO


DECLARE @Salary MONEY 
SET @Salary= 12000
PRINT dbo.ComputePF2(@Salary)
GO


/******************* Assignment 3 *********************

Create a table valued function which will accept JobTitle which will return new table set based on jobtitle*/


CREATE FUNCTION JobTable (@JobTitle VARCHAR(40))
RETURNS  TABLE
AS 
	RETURN (SELECT @JobTitle AS  'JobTitle')
GO


SELECT * FROM JobTable('Senior Tool Designer')