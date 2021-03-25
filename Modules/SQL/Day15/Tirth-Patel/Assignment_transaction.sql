    --Detroit Bank need to implement the transaction whenever the amount is transferred from one account to the another account.
	BEGIN TRANSACTION UpdateAccountBalance
	SET TRANSACTION ISOLATION LEVEL SERIALIZABLE 
	BEGIN TRY
	UPDATE BankAccount SET AMOUNT = AMOUNT - WidrawalAmount WHERE ACCOUNT_NUMBER  = 'xyz'
	UPDATE BankAccount SET AMOUNT = AMOUNT + CreditedAMOUNT WHERE ACCOUNT NUMBER = 'ABC'
	COMMIT TRANSACTION UpdateAccountBalance
	PRINT'successful'
	END TRY
	BEGIN CATCH
	ROLLBACK TRANSACTION UpdateAccountBalance
	PRINT ' ERROR OCCURRED'
	END CATCH





/*(At AdventureWorks, Inc., an employee named Sidney Higa, who is currently working as
Production Technician – WC10 has been promoted as Marketing Manager. The employee ID
of Sidney is 13. As a database developer, you need to update his records. 
This involves updating the title in the Employee table and updating the department 
history details.​
You need to ensure that all the changes take effect. In addition, you need to
ensure that no other transaction should be able to view the data being modified by
the current transaction. here businessEntity id is 50*/
USE AdventureWorks2012
--busin
SELECT * FROM HumanResources.Employee WHERE JobTitle = 'Marketing Manager'
SELECT * FROM HumanResources.Department
SELECT * FROM HumanResources.EmployeeDepartmentHistory
	AND FirstName LIKE 'Sidney'
--Solution
BEGIN TRANSACTION UpdateJObtitle
SET TRANSACTION ISOLATION LEVEL REPEATABLE READ
BEGIN TRY
UPDATE HumanResources.Employee SET JobTitle = 'Marketing Manager' WHERE BusinessEntityID = 50
UPDATE HumanResources.EmployeeDepartmentHistory SET   ModifiedDate = GETDATE() , DepartmentID = 
(SELECT DepartmentID  FROM HumanResources.Department WHERE Name = 'Marketing')
WHERE BusinessEntityID = 50
PRINT'UPDATED SUCCESFULLY'
COMMIT TRANSACTION UpdateJObtitle
END TRY
BEGIN CATCH 
PRINT ' ERROR OCCURED FAILED TO UPDATE'
ROLLBACK TRANSACTION UpdateJObtitle;
END CATCH