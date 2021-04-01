--Day13:


--Practice Exercise
-- Do the hands on the things provided in videos and ppt and on msdn


--What to Learn

--UDF : 1) Scalar functions - takes single value and returns single value 2) Table valued functions

--Create User-defined Functions :
CREATE FUNCTION employee( @empId INT) 
RETURNS TABLE AS
	RETURN ( SELECT * FROM Employees WHERE EmployeeId = @empId ) ;
SELECT * FROM dbo.employee(101) ;



--Limitation and restriction of User-defined Functions :

--User-defined functions cannot be used to perform actions that modify the database state.

--User-defined functions cannot contain an OUTPUT INTO clause that has a table as its target.

--User-defined functions can not return multiple result sets. Use a stored procedure if you need to return multiple result sets.

--Error handling is restricted in a user-defined function. A UDF does not support TRY...CATCH, @ERROR or RAISERROR.

--User-defined functions cannot call a stored procedure, but can call an extended stored procedure.

--User-defined functions cannot make use of dynamic SQL or temp tables. Table variables are allowed.

--SET statements are not allowed in a user-defined function.

--The FOR XML clause is not allowed.




--Scalar Functions :
CREATE FUNCTION totalEmployees( @deptId int )
RETURNS INT
AS
	-- Returns total employees in a department
BEGIN
	DECLARE @count INT;
	SELECT @count = ISNULL( COUNT(EmployeeId) , 0 ) FROM Employees WHERE DepartmentID = @deptId ;

	RETURN @count
END ;
SELECT DepartmentID , dbo.totalEmployees(DepartmentID) AS 'No. of Emp' FROM Employees GROUP BY DepartmentID ;



--Table-Valued Functions :
CREATE FUNCTION empDetails( @name VARCHAR(20) ) 
RETURNS TABLE
AS
	-- Returns Employees Details By taking name
	RETURN (
		SELECT * FROM Employees WHERE FirstName Like @name 
	) ;
SELECT * FROM empDetails('Steven') ;



--Drop Function :
DROP FUNCTION empDetails ;



--Alter Function :
ALTER FUNCTION employee( @empId INT) 
RETURNS TABLE AS
	RETURN ( SELECT FirstName , LastName FROM Employees WHERE EmployeeId = @empId ) ;
SELECT * FROM dbo.employee(101) ;



--Built-in system functions :
-- String functions : ASCII , CHAR , CONCAT , SUBSTR
-- Math functions : COUNT , FLOOR , MAX , MIN , SUM , SQUARE , TAN
-- Date functions : GETDATE , DATEDIFF , ISDATE , MONTH 
-- Advanced funcitons : SYSTEM_USER , IFF , ISNULL , NULLIF , CAST , CONVERT




--Best Practices :
-- 1. Choose inline table-valued functions over multistatement table-valued functions whenever possible.
-- 2. Even if it looks like you need a scalar function, write it as an inline table-valued function; avoid scalar functions wherever possible.
-- 3. If you need a multistatement table-valued function, check to see if a stored procedure might be the appropriate solution. This might require a broader look at query structure, but it's worth taking the time to do it.


