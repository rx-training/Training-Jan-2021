-- before CURSOR execution
SELECT * FROM Employees
GO

-- CURSOR --
DECLARE @salary decimal(8,2), @empId decimal(6,0) -- variables used in cursor

DECLARE cur_salary CURSOR --cursor declaration
FOR
SELECT Salary, EmployeeID FROM Employees -- select query to choose data to update

OPEN cur_salary --start cursor execution
FETCH NEXT FROM cur_salary INTO @salary, @empId -- fetch initial row

WHILE @@FETCH_STATUS = 0 -- loop through all rows fetched and update each row
BEGIN
	UPDATE Employees
	SET Salary = @salary + 
	CASE 
		WHEN Salary BETWEEN 3000 AND 4000 THEN 500
		WHEN Salary BETWEEN 4000 AND 5500 THEN 700
		WHEN Salary BETWEEN 5500 AND 6500 THEN 900
		ELSE 0 
	END
	WHERE EmployeeID = @empId

	FETCH NEXT FROM cur_salary INTO @salary, @empId --fetch next row
END

CLOSE cur_salary
DEALLOCATE cur_salary --destroying cursor
GO

-- after CURSOR execution
SELECT * FROM Employees;