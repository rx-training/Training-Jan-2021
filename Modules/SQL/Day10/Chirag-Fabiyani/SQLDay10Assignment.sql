

----Using cursor implement the following task employee----

----Update the salary of the employee using following condition----

----Salary between 30000 and 40000 — 5000 hike----

----Salary between 40000 and 55000 — 7000 hike----

----Salary between 55000 and 65000 — 9000 hike----


DECLARE Salary_Cursor CURSOR  FOR
SELECT * FROM Employees FOR UPDATE OF Salary
OPEN Salary_Cursor
FETCH NEXT FROM Salary_Cursor
WHILE @@FETCH_STATUS = 0
   BEGIN  
	  UPDATE Employees
		SET Salary = 
			CASE
				WHEN Salary >= 30000 AND Salary < 40000 THEN Salary+5000
				WHEN Salary >= 40000 AND Salary < 55000 THEN Salary+7000
				WHEN Salary >= 55000 AND Salary < 65000 THEN Salary+9000
				ELSE Salary
			END
		WHERE CURRENT OF Salary_Cursor
      FETCH NEXT FROM Salary_Cursor;
   END;  
CLOSE Salary_Cursor;  
DEALLOCATE Salary_Cursor;  
GO 



