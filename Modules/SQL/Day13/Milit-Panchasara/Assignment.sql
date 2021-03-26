--1
CREATE OR ALTER FUNCTION assignment1 (@basicSalary int)
RETURNS decimal(8,2)
AS
BEGIN
RETURN @basicSalary*0.12
END
GO

PRINT dbo.assignment1(10000);
GO

--2
CREATE OR ALTER FUNCTION assignment2 (@salary int)
RETURNS varchar(100)
AS
BEGIN
RETURN CASE 
	WHEN @salary < 5999 THEN 'Nil'
	WHEN @salary >= 6000 AND @salary <= 8999 THEN 'Rs. 80/month'
	WHEN @salary >= 9000 AND @salary <= 11999 THEN 'Rs. 150/month'
	WHEN @salary >= 12000 THEN 'Rs. 200/month'
END
END
GO

PRINT dbo.assignment2(1000);
GO

--3
CREATE OR ALTER FUNCTION assignment3 (@jobTitle varchar(100))
RETURNS table
AS
RETURN (SELECT * FROM Employees 
	WHERE JobId = @jobTitle)
GO

SELECT * FROM dbo.assignment3('IT_PROG');
GO
SELECT * FROM dbo.assignment3('ST_CLERK');
GO



-- EXTRA
CREATE OR ALTER FUNCTION assignment_Extra (@insentive int)
RETURNS table
AS
RETURN (SELECT *, Salary + (Salary * @insentive / 100) AS 'NewSalary'
	FROM Employees 
	WHERE EmployeeID IN 
	(SELECT SalesmanID FROM Sales GROUP BY SalesmanID HAVING count(*) > 10))
GO

SELECT * FROM dbo.assignment_Extra(50);
GO