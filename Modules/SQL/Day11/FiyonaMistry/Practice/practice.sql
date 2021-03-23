USE AdventureWorks2012
GO  


--CREATE Stored Procudure
CREATE PROCEDURE HumanResources.uspGetEmployeesTest2 @LastName nvarchar(50), @FirstName nvarchar(50)   
AS   

    SET NOCOUNT ON
    SELECT FirstName, LastName, Department  
    FROM HumanResources.vEmployeeDepartmentHistory  
    WHERE FirstName = @FirstName AND LastName = @LastName AND EndDate IS NULL
GO


EXECUTE HumanResources.uspGetEmployeesTest2 N'Ackerman', N'Pilar';  
-- Or  
EXEC HumanResources.uspGetEmployeesTest2 @LastName = N'Ackerman', @FirstName = N'Pilar';  
GO  
-- Or  
EXECUTE HumanResources.uspGetEmployeesTest2 @FirstName = N'Pilar', @LastName = N'Ackerman';  
GO


--Return Values
IF OBJECT_ID('Sales.uspGetEmployeeSalesYTD', 'P') IS NOT NULL  
   DROP PROCEDURE Sales.uspGetEmployeeSalesYTD
GO  
CREATE PROCEDURE Sales.uspGetEmployeeSalesYTD  
AS    
 
   SET NOCOUNT ON;  
   SELECT LastName, SalesYTD  
   FROM Sales.SalesPerson AS sp  
   JOIN HumanResources.vEmployee AS e ON e.BusinessEntityID = sp.BusinessEntityID  
   
RETURN  
GO

EXECUTE Sales.uspGetEmployeeSalesYTD  


--Call a procedure from another procedure
USE AdventureWorks2012
CREATE PROCEDURE prc @EmpId INT
AS
BEGIN
	DECLARE @DeptName CHAR(50), @ShiftId INT, @ReturnValue INT
	EXEC @ReturnValue = prc @EmpID, @DeptName OUTPUT, @ShiftId OUTPUT
	IF (@ReturnValue = 0)
	BEGIN
		PRINT 'Details of employees with ID: ' + CONVERT(CHAR(10), @EmpId)
		PRINT 'Department Name: ' + @DeptName
		PRINT 'Shift ID: ' + CONVERT(CHAR(1), @ShiftId)
		SELECT BusinessEntityID, JobTitle
		FROM HumanResources.Employee
		WHERE BusinessEntityID = @EmpId
	END
	ELSE
		PRINT 'No records found'
END
GO


--Exception Handling
BEGIN TRY
	INSERT INTO Person.BusinessEntityContact
	VALUES (0, NULL, 11, NULL, GETDATE())
	INSERT INTO HumanResources.EmployeeDepartmentHistory
	VALUES (1, 16, 1, GETDATE(), NULL, GETDATE())
END TRY
BEGIN CATCH 
	SELECT 'There was an error! ' + 
	ERROR_MESSAGE() AS 'Error Message',
	ERROR_LINE() AS 'Error Line',
	ERROR_NUMBER() AS 'Error Number',
	ERROR_PROCEDURE() AS 'Error Procedure',
	ERROR_SEVERITY() AS 'Error Severity',
	ERROR_STATE() AS 'Error State'
END CATCH
GO

