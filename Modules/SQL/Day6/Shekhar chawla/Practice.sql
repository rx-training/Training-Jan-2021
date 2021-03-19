
--Day6:

--What to Learn
--Subqueries
--Views

--Practice Exercise:
--Do the hands on from video and ppt available on tutorial site


-- Subqueries
-- Names of Employees Whose Salary is greater than john's salary
SELECT FirstName FROM Employees WHERE Salary > ( SELECT MAX(Salary) FROM Employees WHERE FirstName = 'John' ) ;


-- IN 
-- Employees who are in department 90
SELECT FirstName, LastName FROM Employees WHERE FirstName IN ( SELECT FirstName FROM Employees WHERE DepartmentID = 90 ) ;


--View : Virtual table
CREATE VIEW ViewC9 AS
	SELECT FirstName+' '+LastName AS Name , Salary FROM Employees ;
SELECT Name , Salary FROM ViewC9 ;


-- Batch
DECLARE @incr_sal INT ;
SELECT @incr_sal = Salary FROM Employees WHERE EmployeeID = 105 ;
PRINT @incr_sal

-- If...else , print
IF @incr_sal < 10000
	BEGIN
		SET @incr_sal = @incr_sal + 10000 ;
		PRINT 'Salary incremented by 10000 : ' + CAST(@incr_sal AS VARCHAR)
	END
ELSE
	PRINT CAST(@incr_sal AS VARCHAR) + ' is sufficient'
GO


-- Case...when , else
SELECT FirstName , Salary , CASE WHEN Salary < 10000 THEN 'less' ELSE 'more' END AS 'Compare' FROM Employees ;
GO


-- While , Break , Continue
DECLARE @a INT = 1 , @n INT = 10 ;
WHILE @a < @n
BEGIN 
	PRINT @a
	SET @a = @a + 1;

	IF @a = 5
		BREAK
END
GO