USE Employeesdb;

SELECT * FROM Employees;

DECLARE @temp int, @eid int;
DECLARE Salary_Cursor CURSOR FOR
SELECT Salary, EmployeeID FROM Employees;

OPEN Salary_Cursor;

FETCH NEXT FROM Salary_Cursor INTO @temp, @eid;
WHILE @@FETCH_STATUS=0
BEGIN
	IF @temp BETWEEN 3000 AND 4000
		BEGIN
			SET @temp = @temp + 5000
			UPDATE Employees SET Salary = @temp WHERE EmployeeID = @eid;
		END

	IF @temp BETWEEN 4000 AND 5000
		BEGIN
			SET @temp = @temp + 7000
			UPDATE Employees SET Salary = @temp WHERE EmployeeID = @eid;
		END

	IF @temp BETWEEN 5500 AND 6500
		BEGIN
			SET @temp = @temp + 9000
			UPDATE Employees SET Salary = @temp WHERE EmployeeID = @eid;
		END
	FETCH NEXT FROM Salary_Cursor INTO @temp, @eid;

END
CLOSE Salary_Cursor
DEALLOCATE Salary_Cursor;
GO

SELECT * FROM Employees;


