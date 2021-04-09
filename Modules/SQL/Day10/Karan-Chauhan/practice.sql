USE AdventureWorks2012;  
GO  
DECLARE contact_cursor CURSOR FOR  
SELECT LastName FROM Person.Person  
WHERE LastName LIKE 'B%'  
ORDER BY LastName;  
  
OPEN contact_cursor;  
  
-- Perform the first fetch.  
FETCH NEXT FROM contact_cursor;  
  
-- Check @@FETCH_STATUS to see if there are any more rows to fetch.  
WHILE @@FETCH_STATUS = 0  
BEGIN  
   -- This is executed as long as the previous fetch succeeds.  
   FETCH NEXT FROM contact_cursor;  
END  

/*-----------------------------------------------------*/

USE AdventureWorks2012;  
GO  
-- Declare the variables to store the values returned by FETCH.  
DECLARE @LastName VARCHAR(50), @FirstName VARCHAR(50);  
  
DECLARE contact_cursor CURSOR FOR  
SELECT LastName, FirstName FROM Person.Person  
WHERE LastName LIKE 'B%'  
ORDER BY LastName, FirstName;  
  
OPEN contact_cursor;  
  
-- Perform the first fetch and store the values in variables.  
-- Note: The variables are in the same order as the columns  
-- in the SELECT statement.   
  
FETCH NEXT FROM contact_cursor  
INTO @LastName, @FirstName;  
  
-- Check @@FETCH_STATUS to see if there are any more rows to fetch.  
WHILE @@FETCH_STATUS = 0  
BEGIN  
  
   -- Concatenate and display the current values in the variables.  
   PRINT 'Contact Name: ' + @FirstName + ' ' +  @LastName  
  
   -- This is executed as long as the previous fetch succeeds.  
   FETCH NEXT FROM contact_cursor  
   INTO @LastName, @FirstName;  
END  
  
CLOSE contact_cursor;  
DEALLOCATE contact_cursor;  
GO  

/*-----------------------*/

USE AdventureWorks2012;  
GO  
-- Execute the SELECT statement alone to show the   
-- full result set that is used by the cursor.  
SELECT LastName, FirstName FROM Person.Person  
ORDER BY LastName, FirstName;  
  
-- Declare the cursor.  
DECLARE contact_cursor SCROLL CURSOR FOR  
SELECT LastName, FirstName FROM Person.Person  
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
GO 
  
CLOSE contact_cursor;  
DEALLOCATE contact_cursor;  
GO

/* ---------------------------------------------------------------------------------------------------------------- */

DECLARE Employee_Cursor CURSOR FOR  
SELECT LastName, FirstName  
FROM AdventureWorks2012.HumanResources.vEmployee  
WHERE LastName like 'B%';  
  
OPEN Employee_Cursor;  
  
FETCH NEXT FROM Employee_Cursor;  
WHILE @@FETCH_STATUS = 0  
BEGIN  
    FETCH NEXT FROM Employee_Cursor  
END;  
  
CLOSE Employee_Cursor;  
DEALLOCATE Employee_Cursor;  