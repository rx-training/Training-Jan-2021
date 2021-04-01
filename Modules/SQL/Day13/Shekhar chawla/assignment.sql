--Assignment:
--Create a scaler Function to compute PF which will accept parameter basicsalary and compute PF. PF is 12% of the basic salary.

CREATE FUNCTION func1( @basicSalary INT )
RETURNS INT
AS
BEGIN
	DECLARE @pf INT ;
	SET @pf = @basicSalary * 12 / 100 
	RETURN @pf 
END

SELECT FirstName , Salary , dbo.func1(Salary) AS 'PF' FROM Employees ;


--Create a scaler Function which will compute PT which will accept MontlyEarning. Criteria as below.
CREATE FUNCTION func2( @monthlyEarning INT )
RETURNS INT
AS
BEGIN
	DECLARE @pt INT ;
	IF ( @monthlyEarning >= 12000 ) 
		SET @pt = 200
	IF ( @monthlyEarning < 12000 ) 
		SET @pt = 150
	IF ( @monthlyEarning < 9000 ) 
		SET @pt = 80
	IF ( @monthlyEarning < 6000 ) 
		SET @pt = 0
	RETURN @pt
END
SELECT FirstName , Salary , dbo.func2(Salary) AS 'PT / month' FROM Employees ;

