USE AdventureWorks2012;  
GO  
SELECT @@CURSOR_ROWS;  
DECLARE Name_Cursor CURSOR FOR  
SELECT LastName ,@@CURSOR_ROWS FROM Person.Person;  
OPEN Name_Cursor;  
FETCH NEXT FROM Name_Cursor;  
SELECT @@CURSOR_ROWS;  
CLOSE Name_Cursor;  
DEALLOCATE Name_Cursor;  
GO

USE DAY6
select * from Employees

SET NOCOUNT ON
DECLARE @Id int, @name Varchar(60), @salary int
DECLARE cur_emp CURSOR
STATIC FOR 
SELECT EmployeeID, FirstName + ' '+LastName, Salary 
FROM Employees

OPEN cur_emp
IF @@CURSOR_ROWS > 0
BEGIN
	FETCH NEXT FROM cur_emp INTO @Id, @name, @salary
	WHILE @@FETCH_STATUS = 0
	BEGIN
		PRINT 'ID : '+convert(varchar(20),@Id)+
		', Name : '+ @name +
		', Salary : '+convert(varchar(20),@salary)
		FETCH NEXT FROM cur_emp INTO @Id, @name, @salary
	END
END

CLOSE cur_emp
DEALLOCATE cur_emp
SET NOCOUNT OFF