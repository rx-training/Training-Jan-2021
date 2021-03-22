/*** Day 10 Practice Exercise ***/

-- Declare Cursor

DECLARE emp_cursor CURSOR  
    FOR SELECT * FROM Employees;

-- Open Cursor

OPEN emp_cursor;

-- Fetch Cursor

FETCH NEXT FROM emp_cursor;

-- Close Cursor

CLOSE emp_cursor;

-- Deallocate Cursor

DEALLOCATE emp_cursor;

-- Example 

SET NOCOUNT ON
DECLARE @Id INT, @name VARCHAR(50), @salary INT
DECLARE cur_emp CURSOR
STATIC FOR
	SELECT EmployeeID, FirstName , Salary FROM Employees
OPEN cur_emp
IF @@CURSOR_ROWS > 0
BEGIN
FETCH NEXT FROM cur_emp INTO @Id,@name,@salary
WHILE @@FETCH_STATUS = 0
BEGIN
PRINT 'ID : ' + CONVERT(VARCHAR(20),@Id) + ', Name : ' + @name + ', Salary : '
		+ CONVERT(VARCHAR(20),@salary)
FETCH NEXT FROM cur_emp INTO @Id,@name,@salary
END
END
CLOSE cur_emp
DEALLOCATE cur_emp
SET NOCOUNT OFF

-- Declaring a SCROLL cursor and using the other FETCH options

DECLARE contact_cursor SCROLL CURSOR FOR  
SELECT LastName, FirstName FROM Employees  
ORDER BY LastName, FirstName;  
  
OPEN contact_cursor;  
  
-- Fetch the last row in the cursor.  
FETCH LAST FROM contact_cursor;  
  
-- Fetch the row immediately prior to the current row in the cursor.  
FETCH PRIOR FROM contact_cursor;  
  
-- Fetch the second row in the cursor.  
FETCH ABSOLUTE 2 FROM contact_cursor;  
  
-- Fetch the row that is three rows after the current row.  
FETCH RELATIVE 3 FROM contact_cursor;  
  
-- Fetch the row that is two rows prior to the current row.  
FETCH RELATIVE -2 FROM contact_cursor;  
  
CLOSE contact_cursor;  
DEALLOCATE contact_cursor;