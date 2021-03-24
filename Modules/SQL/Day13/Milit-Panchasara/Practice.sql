-- SCALAR function
CREATE OR ALTER FUNCTION practice1 (@id int)
RETURNS decimal(8,2)
AS
BEGIN
RETURN (SELECT SALARY FROM Employees WHERE EmployeeID = @id)
END
GO

PRINT dbo.practice1(101);
GO

-- TABLE_VALUED function
CREATE OR ALTER FUNCTION practice2 (@salary int)
RETURNS table
AS
RETURN (SELECT * FROM Employees WHERE Salary > @salary)
GO

SELECT * FROM dbo.practice2(5000);
GO

-- TABLE_VALUED function WITH MULITPLE Statements and Table variable and CTE
CREATE OR ALTER FUNCTION practice3 ()
RETURNS @resultSet table (
	EmployeeName varchar(50),
	Salary decimal(8,2)
	)
AS
BEGIN
	WITH temp_cte (EmployeeName, Salary)
	AS
	(
		SELECT FirstName+' '+LastName AS EmployeeName, Salary FROM Employees WHERE Salary < 5000
		UNION
		SELECT FirstName+' '+LastName AS EmployeeName, Salary FROM Employees WHERE Salary > 10000
	)

	INSERT INTO @resultSet SELECT * FROM temp_cte

	RETURN
END
GO

SELECT * FROM dbo.practice3() ORDER BY Salary;
GO

DROP FUNCTION dbo.practice1;
DROP FUNCTION dbo.practice2;
GO

SELECT HOST_ID()
SELECT HOST_NAME()