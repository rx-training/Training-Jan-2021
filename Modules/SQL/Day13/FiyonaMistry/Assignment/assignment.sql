USE Day8


--Create a scaler Function to compute PF which will accept parameter basicsalary and compute PF. PF is 12% of the basic salary.
CREATE OR ALTER FUNCTION q1(@BasciSalary FLOAT)
RETURNS FLOAT
AS
BEGIN
	DECLARE @pf FLOAT 
	SELECT @pf = (Salary * 0.12)
	FROM Employees
	WHERE Salary = @BasciSalary
	RETURN @pf 
END
GO

SELECT Salary, dbo.q1(Salary) AS 'PF'
FROM Employees
GO


--Create a scaler Function which will compute PT which will accept MontlyEarning.
--Note : Assuming Salary given in table is monthly Salary
CREATE OR ALTER FUNCTION q2(@BasicSalary FLOAT)
RETURNS FLOAT
AS 
BEGIN
	DECLARE @pt FLOAT
	SELECT @pt = CASE
		WHEN Salary < 5999 THEN Salary
		WHEN Salary BETWEEN 6000 AND 8999 THEN Salary - 80
		WHEN Salary BETWEEN 9000 AND 11999 THEN Salary - 150
		WHEN Salary >= 12000 THEN Salary - 200
		ELSE Salary
	END
	FROM Employees
	WHERE Salary = @BasicSalary
	RETURN @pt
END
GO

SELECT Salary, dbo.q2(Salary) AS 'Profession Tax Payable'
FROM Employees
GO


--Create a table valued function which will accept JobTitle which will return new table set based on jobtitle
USE AdventureWorks2012
GO
CREATE OR ALTER FUNCTION q3(@JobTitle NVARCHAR(50))
RETURNS TABLE
AS 
RETURN
(
	SELECT JobTitle
	FROM HumanResources.Employee
	WHERE JobTitle = @JobTitle
	GROUP BY JobTitle
)

SELECT * 
FROM dbo.q3('Senior Tool Designer')