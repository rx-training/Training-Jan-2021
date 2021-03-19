--Using cursor implement the following task employee
--Update the salary of the employee using following condition
--Salary between 30000 and 40000 — 5000 hike
--Salary between 40000 and 55000 — 7000 hike
--Salary between 55000 and 65000 — 9000 hike

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
		SELECT @Salary = CASE
			WHEN @Salary BETWEEN 3000 AND 4000 THEN 5000
			WHEN @Salary BETWEEN 4000 AND 5500 THEN 7000
			WHEN @Salary BETWEEN 5500 AND 6500 THEN 9000
			ELSE @Salary
		END
		PRINT 'Id : ' + CONVERT(VARCHAR(20), @Id) + ', Name : ' + @Name + ', Salary : ' + CONVERT(VARCHAR(20), @Salary)
		FETCH NEXT FROM cur_emp 
		INTO @Id, @Name, @Salary
	END
END
CLOSE cur_emp
DEALLOCATE cur_emp
SET NOCOUNT OFF
GO