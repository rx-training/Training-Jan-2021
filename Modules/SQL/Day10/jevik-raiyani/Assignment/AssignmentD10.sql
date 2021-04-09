--Salary between 30000 and 40000 — 5000 hike

DECLARE update_cursor CURSOR FOR 
SELECT * from Employees1
WHERE Salary BETWEEN 30000 AND 40000

OPEN update_cursor
FETCH FROM update_cursor

WHILE @@FETCH_STATUS=0
BEGIN

UPDATE Employees1
SET Salary+=5000 
FETCH NEXT FROM update_cursor
END
CLOSE update_cursor
DEALLOCATE update_cursor

--Salary between 40000 and 55000 — 7000 hike
DECLARE update_cursor CURSOR FOR 
SELECT * from Employees1
WHERE Salary BETWEEN 40000 AND 55000

OPEN update_cursor
FETCH FROM update_cursor

WHILE @@FETCH_STATUS=0
BEGIN

UPDATE Employees1
SET Salary+=7000 
FETCH NEXT FROM update_cursor
END
CLOSE update_cursor
DEALLOCATE update_cursor

--Salary between 55000 and 65000 — 9000 hike

DECLARE update_cursor CURSOR FOR 
SELECT * from Employees1
WHERE Salary BETWEEN 50000 AND 65000

OPEN update_cursor
FETCH FROM update_cursor

WHILE @@FETCH_STATUS=0
BEGIN

UPDATE Employees1
SET Salary+= 9000 
FETCH NEXT FROM update_cursor
END
CLOSE update_cursor
DEALLOCATE update_cursor

--Update salary with all three condition

DECLARE update_cursor CURSOR FOR 
SELECT * from Employees

OPEN update_cursor
FETCH FROM update_cursor

WHILE @@FETCH_STATUS=0
BEGIN

UPDATE Employees
SET  Salary= CASE 
			 WHEN Salary BETWEEN 30000 AND 40000 THEN Salary+5000
			 WHEN Salary BETWEEN 40000 AND 55000 THEN Salary+7000
			 WHEN Salary BETWEEN 55000 AND 65000 THEN Salary+9000
			 ELSE Salary
			 END
FETCH NEXT FROM update_cursor
END
CLOSE update_cursor
DEALLOCATE update_cursor

USE day5
SELECT * FROM Employees