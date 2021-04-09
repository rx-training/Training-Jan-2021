USE TestData
GO
SELECT * FROM Employees
SET NOCOUNT ON
DECLARE @newsal decimal
DECLARE Salary_cursor CURSOR FOR 
	SELECT Salary  
	FROM Employees WHERE Salary BETWEEN 30000 AND 65000

	OPEN Salary_cursor
	FETCH NEXT FROM Salary_cursor 

	WHILE @@FETCH_STATUS =0 
	BEGIN
		FETCH NEXT FROM Salary_cursor
		UPDATE Employees 
		SET Salary = 
		CASE	
			WHEN Salary BETWEEN 30000 AND 40000 THEN Salary + 5000
			WHEN Salary BETWEEN 40000 AND 55000 THEN Salary+7000
			WHEN Salary BETWEEN 55000 AND 65000 THEN Salary+9000
			ELSE Salary
			END
			FETCH NEXT FROM Salary_cursor
		
		
	END
	CLOSE Salary_cursor
	DEALLOCATE Salary_cursor
GO
SELECT Salary FROM Employees ORDER BY Salary DESC


