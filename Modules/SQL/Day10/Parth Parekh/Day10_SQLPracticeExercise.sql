/* Day10 Practice Exercise */


-- DECLARE CURSOR , OPEN CURSOR , FETCH CURSOR , CLOSE & DEALLOCATE CURSOR 
DECLARE vend_cursor CURSOR  
    FOR SELECT * FROM Purchasing.Vendor  
OPEN vend_cursor  
FETCH NEXT FROM vend_cursor;
CLOSE vend_cursor
DEALLOCATE vend_cursor

-- Example of Cursor 

SET NOCOUNT ON 
DECLARE @Id int ,@Name varchar(50) , @Salary int
DECLARE cur_emp CURSOR 
STATIC  FOR
--STATIC FOR 
SELECT EMPLOYEE_ID , FIRST_NAME , SALARY FROM EMPLOYEE
OPEN cur_emp
IF @@CURSOR_ROWS > 0
BEGIN 
FETCH NEXT FROM cur_emp INTO @Id , @Name , @Salary
WHILE @@FETCH_STATUS = 0
BEGIN 
PRINT 'ID : ' + convert(varchar(20), @Id) + ' , Name : ' + @Name + ' , Salary : ' + convert(varchar(20) , @Salary)
FETCH NEXT FROM cur_emp INTO @Id , @Name , @Salary
END
END
CLOSE cur_emp
DEALLOCATE cur_emp
SET NOCOUNT OFF


--Declaring a SCROLL cursor and using the other FETCH options

-- Execute the SELECT statement alone to show the   
-- full result set that is used by the cursor.  
SELECT LastName, FirstName FROM Person.Person  
ORDER BY LastName, FirstName;  
  
-- Declare the cursor.  
DECLARE contact_cursor SCROLL CURSOR FOR  
SELECT FIRST_NAME , LAST_NAME FROM EMPLOYEE 
  
OPEN contact_cursor;  
  
-- Fetch the last row in the cursor.  
FETCH LAST FROM contact_cursor;  
  
-- Fetch the row immediately prior to the current row in the cursor.  
FETCH PRIOR FROM contact_cursor;  
  
-- Fetch the second row in the cursor.  
FETCH ABSOLUTE 3 FROM contact_cursor;  

-- Fetch the row that is three rows after the current row.  
FETCH RELATIVE 3 FROM contact_cursor;  
  
-- Fetch the row that is two rows prior to the current row.  
FETCH RELATIVE -2 FROM contact_cursor;  
  
CLOSE contact_cursor;  
DEALLOCATE contact_cursor;  
GO



