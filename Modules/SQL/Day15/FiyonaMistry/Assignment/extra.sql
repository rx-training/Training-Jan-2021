--At AdventureWorks, Inc., an employee named Sidney Higa, who is currently working as Production Technician – 
--WC10 has been promoted as Marketing Manager. The employee ID of Sidney is 50. As a database developer, 
--you need to update his records. This involves updating the title in the Employee table and updating the department history details.
--You need to ensure that all the changes take effect. In addition, you need to ensure that no other transaction 
--should be able to view the data being modified by the current transaction.
USE AdventureWorks2012


SET TRAN ISOLATION LEVEL REPEATABLE READ
BEGIN TRAN tr1
BEGIN
	BEGIN TRY
		UPDATE HumanResources.Employee
		SET JobTitle = 'Marketing Manager'
		WHERE BusinessEntityID = 50

		UPDATE HumanResources.EmployeeDepartmentHistory
		SET DepartmentID = 4
		WHERE BusinessEntityID = 50

		COMMIT TRAN tr1

		PRINT 'Transaction completed successfully'
	END TRY
	BEGIN CATCH
		ROLLBACK TRAN tr1
		PRINT 'Transaction Rollbacked'
	END CATCH
END
GO