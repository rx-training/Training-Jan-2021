USE Day6DB

/*Q 1.Create a scaler Function to compute PF which will accept parameter basicsalary and compute PF. PF is 12% of the basic salary.
Ans.*/
--CREATING SCALER FUNCTION
CREATE FUNCTION PF (@BasicSalary DECIMAL(8,2))
RETURNS FLOAT
AS
BEGIN
RETURN (@BasicSalary*0.12)
END

--CALLING SCALER FUNCTION
SELECT EmployeeID, Salary, dbo.PF(Salary) AS 'PF' FROM Employees


/*Q Create a scaler Function which will compute PT which will accept MontlyEarning. Criteria as below.
Monthly Earnings			Profession Tax Payable
Below Rs. 5999				Nil
Rs. 6000 to Rs. 8999		Rs. 80/month
Rs. 9000 to Rs. 11999		Rs. 150/month
Rs 12000 and above			Rs. 200/month
Ans.*/
CREATE FUNCTION PT (@MonthlyEarning DECIMAL(8,2))
RETURNS INT
AS
BEGIN
DECLARE @PT INT
IF @MonthlyEarning<=5999
	SET @PT=0
ELSE IF @MonthlyEarning>=6000 AND @MonthlyEarning<=8999
	SET @PT=80
ELSE IF @MonthlyEarning>=9000 AND @MonthlyEarning<=11999
	SET @PT=150
ELSE
	SET @PT=200
RETURN @PT
END

--CALLING SCALER FUNCTION
SELECT EmployeeID, Salary, dbo.PT(Salary) AS 'PT (in Rs. per month)' FROM Employees

/*Q 3. Create a table valued function which will accept JobTitle which will return new table set based on jobtitle
Ans.*/
USE AdventureWorks2012
GO

CREATE FUNCTION JobTitleDisplay (@JobTitle NVARCHAR(50))
RETURNS TABLE
AS 
RETURN (
	SELECT JobTitle FROM HumanResources.Employee WHERE JobTitle=@JobTitle
)
GO

--CALLING TABLE VALUED FUNCTION
SELECT * FROM JobTitleDisplay('Senior Tool Designer')