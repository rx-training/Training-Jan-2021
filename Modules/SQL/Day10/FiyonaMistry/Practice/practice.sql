SET NOCOUNT ON

DECLARE @Id INT, @Name VARCHAR(50), @Salary INT

DECLARE cur_emp CURSOR

STATIC FOR

SELECT EmployeeID, FirstName, Salary
FROM Employees

OPEN cur_emp

IF @@CURSOR_ROWS > 0
BEGIN 
	FETCH NEXT FROM cur_emp 
	INTO @Id, @Name, @Salary
	WHILE @@FETCH_STATUS = 0
	BEGIN 
		PRINT 'Id : ' + CONVERT(VARCHAR(20), @Id) + ', Name : ' + @Name + ', Salary : ' + CONVERT(VARCHAR(20), @Salary)
		FETCH NEXT FROM cur_emp 
		INTO @Id, @Name, @Salary
	END
END
CLOSE cur_emp
DEALLOCATE cur_emp
SET NOCOUNT OFF
GO