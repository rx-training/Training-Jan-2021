USE Day6;

-- Using cursor implement the following task employee

-- Update the salary of the employee using following condition

-- Salary between 30000 and 40000 — 5000 hike
-- Salary between 40000 and 55000 — 7000 hike
-- Salary between 55000 and 65000 — 9000 hike

SELECT * FROM Employees
UPDATE Employees SET Salary = 24000 WHERE EmployeeID = 100

SET NOCOUNT ON
DECLARE @id INT, @salary MONEY
DECLARE hike_salary CURSOR FOR 
SELECT EmployeeID, Salary 
FROM Employees FOR UPDATE OF Salary

OPEN hike_salary

	FETCH NEXT FROM hike_salary INTO @id, @salary 
	WHILE @@FETCH_STATUS = 0
	BEGIN
		SET @salary = CASE 
			WHEN @salary BETWEEN		30000 and 40000
				THEN @salary + 5000
			WHEN @salary BETWEEN 40000 and 55000
				THEN @salary + 7000
			WHEN @salary BETWEEN 55000 and 65000
				THEN @salary + 9000
			ELSE @salary
			END
		PRINT @id
		PRINT @salary
		UPDATE Employees SET Salary = @salary
		WHERE CURRENT OF hike_salary
		FETCH NEXT FROM hike_salary INTO @id, @salary
	END
CLOSE hike_salary
DEALLOCATE hike_salary
SET NOCOUNT OFF

SELECT * FROM Employees 
