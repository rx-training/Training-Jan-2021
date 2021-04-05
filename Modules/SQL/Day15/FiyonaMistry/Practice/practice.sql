--Transaction
BEGIN TRAN tr1
BEGIN
	BEGIN TRY
		UPDATE Person.EmailAddress
		SET EmailAddress = 'jolyn@yahoo.com'
		WHERE BusinessEntityID = 1070

		SET IMPLICIT_TRANSACTIONS ON
		
		UPDATE HumanResources.Employee
		SET MaritalStatus = 'M'
		WHERE BusinessEntityID = 1

		COMMIT TRAN tr1

		SET IMPLICIT_TRANSACTIONS OFF

		PRINT 'Transaction Execution'
	END TRY
	BEGIN CATCH 
		ROLLBACK TRAN tr1
		PRINT 'Transaction Rollbacked'
	END CATCH
END
GO


--Isolation Level
SET TRAN ISOLATION LEVEL
READ COMMITTED
BEGIN TRAN tr1
BEGIN
	BEGIN TRY
		UPDATE Person.EmailAddress
		SET EmailAddress = 'jolyn@yahoo.com'
		WHERE BusinessEntityID = 1070
		
		UPDATE HumanResources.Employee
		SET MaritalStatus = 'M'
		WHERE BusinessEntityID = 1

		COMMIT TRAN tr1

		PRINT 'Transaction Execution'
	END TRY
	BEGIN CATCH 
		ROLLBACK TRAN tr1
		PRINT 'Transaction Rollbacked'
	END CATCH
END
GO


--Another Isolation Level
SET TRANSACTION ISOLATION LEVEL REPEATABLE READ
GO  
BEGIN TRANSACTION
GO  
	SELECT *   
    FROM HumanResources.EmployeePayHistory
	GO 
	
	SELECT *   
    FROM HumanResources.Department
	GO  
COMMIT TRANSACTION
GO