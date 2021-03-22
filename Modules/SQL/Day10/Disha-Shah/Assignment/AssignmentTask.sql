USE Day6DB

SELECT * FROM Employees

DECLARE SalCursor CURSOR FOR
SELECT EmployeeID, Salary FROM Employees FOR UPDATE OF Salary

OPEN SalCursor

FETCH NEXT FROM SalCursor

WHILE @@FETCH_STATUS = 0
BEGIN
	UPDATE Employees  
	SET Salary =   
		( CASE  
			 WHEN (Salary>=30000 AND Salary<40000) THEN Salary+5000
			 WHEN (Salary>=40000 AND Salary<55000) THEN Salary+7000
			 WHEN (Salary>=55000 AND Salary<=65000) THEN Salary+9000
			 ELSE (Salary)  
		   END  
		)  
	WHERE CURRENT OF SalCursor;

	FETCH NEXT FROM SalCursor
END
CLOSE SalCursor
DEALLOCATE SalCursor
