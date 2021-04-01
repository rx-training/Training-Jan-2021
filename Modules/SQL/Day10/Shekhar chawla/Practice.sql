
--Day10

--What to Learn

--CURSOR
--Declare cursor
--Fetch
--Open
--Deallocate



--Practice Exercise:

--A. Using simple cursor and syntax
DECLARE emp CURSOR FOR 
	SELECT * FROM Employees
OPEN emp
FETCH NEXT FROM emp ;


--Basic cursor example 
DECLARE @emp VARCHAR(255) ;
DECLARE @sal INT ;

DECLARE emp_cursor CURSOR FOR 
	SELECT FirstName , Salary FROM Employees 

OPEN emp_cursor
FETCH NEXT FROM emp_cursor INTO @emp , @sal ;

WHILE @@FETCH_STATUS = 0
BEGIN
	IF @sal > 5000 AND @sal < 10000
		BEGIN
			SET @sal = @sal + 5 ;
		END
	ELSE
		BEGIN
			SET @sal = @sal + 10 ;
		END

	PRINT @emp + ' earns ' + CONVERT(VARCHAR , @sal )

	FETCH NEXT FROM emp_cursor INTO @emp , @sal ;
END

CLOSE emp_cursor
DEALLOCATE emp_cursor
