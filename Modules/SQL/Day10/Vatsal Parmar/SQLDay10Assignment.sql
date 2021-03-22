/*** Day 10 Assignment ***/

/** Using cursor implement the following task employee

Update the salary of the employee using following condition

Salary between 30000 and 40000 - 5000 hike

Salary between 40000 and 55000 - 7000 hike

Salary between 55000 and 65000 - 9000 hike **/


DECLARE @Id INT, @Temp INT, @salary INT
DECLARE cur_emp CURSOR
STATIC FOR
	SELECT EmployeeID, Salary FROM Employees
OPEN cur_emp
IF @@CURSOR_ROWS > 0
BEGIN
FETCH NEXT FROM cur_emp INTO @Id,@salary
WHILE @@FETCH_STATUS = 0
BEGIN
IF @salary BETWEEN 30000 AND 40000
BEGIN
SET @Temp = @salary + 5000
UPDATE Employees SET Salary = @Temp  WHERE EmployeeID = @Id;
END
IF @salary BETWEEN 40000 AND 55000
BEGIN
SET @Temp = @salary + 7000
UPDATE Employees SET Salary = @Temp WHERE EmployeeID = @Id;
END
IF @salary BETWEEN 55000 AND 65000
BEGIN
SET @Temp = @salary + 9000
UPDATE Employees SET Salary = @Temp WHERE EmployeeID = @Id;
END
FETCH NEXT FROM cur_emp INTO @Id,@salary
END
END
CLOSE cur_emp
DEALLOCATE cur_emp
