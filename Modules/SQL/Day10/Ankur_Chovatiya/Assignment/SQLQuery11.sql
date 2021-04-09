  
select * from Employee


DECLARE Sal_Cursor CURSOR  FOR
SELECT * FROM Employee FOR UPDATE OF Salary
OPEN Sal_Cursor
FETCH NEXT FROM Salary_Cursor
WHILE @@FETCH_STATUS = 0
   BEGIN
      UPDATE Employee
        SET Salary =
            CASE
                WHEN Salary >= 30000 AND Salary < 40000 THEN Salary+5000
                WHEN Salary >= 40000 AND Salary < 55000 THEN Salary+7000
                WHEN Salary >= 55000 AND Salary < 65000 THEN Salary+9000
                ELSE Salary
            END
        WHERE CURRENT OF Sal_Cursor
      FETCH NEXT FROM Sal_Cursor;
   END;
CLOSE Sal_Cursor;
DEALLOCATE Salary_Cursor;
GO