/************************************************************/

SET NOCOUNT ON

DECLARE @ID INT, @Name VARCHAR(50), @Salary INT

DECLARE CurEmp CURSOR 
STATIC FOR SELECT EmployeeID,FirstName,Salary FROM Employees

OPEN CurEmp

IF @@CURSOR_ROWS > 0
BEGIN 
FETCH NEXT FROM CurEmp INTO @ID, @Name, @Salary
WHILE @@FETCH_STATUS = 0
BEGIN
PRINT 'ID: '+CONVERT(VARCHAR(20),@ID)+', Name: '+@Name+', Salary: '+CONVERT(VARCHAR(20),@Salary)
FETCH NEXT FROM CurEmp INTO @ID,@Name,@Salary
PRINT @@FETCH_STATUS
END
END
CLOSE CurEmp
DEALLOCATE CurEmp
SET NOCOUNT OFF

/************************************************************/

CREATE TABLE TMP  
(  
   ii INT  
)  
GO  
  
INSERT INTO TMP(ii) VALUES(1)  
INSERT INTO TMP(ii) VALUES(2)  
INSERT INTO TMP(ii) VALUES(3)  
  
GO  
  
--Create a cursor.  
DECLARE cur CURSOR  
FOR SELECT * FROM TMP  
  
--Display the status of the cursor before and after opening  
--closing the cursor.  
  
SELECT CURSOR_STATUS('global','cur') AS 'After declare'  
OPEN cur  
SELECT CURSOR_STATUS('global','cur') AS 'After Open'  
CLOSE cur  
SELECT CURSOR_STATUS('global','cur') AS 'After Close'  
  
--Remove the cursor.  
DEALLOCATE cur  
  
--Drop the table.  
DROP TABLE TMP

/************************************************************/

