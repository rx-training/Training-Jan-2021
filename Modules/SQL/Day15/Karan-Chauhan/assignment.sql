USE Employeesdb;

SELECT * FROM Employees;

/*Detroit Bank need to implement the transaction whenever the 
amount is transferred from one account to the another account.*/

BEGIN TRANSACTION TR1
BEGIN TRY
UPDATE Employees SET Salary = Salary - 1000 WHERE EmployeeId = 100;
--Statement1
UPDATE Employees SET Salary = Salary + 1000 WHERE EmployeeId = 101;
--Statement2
SELECT 'TRANSACTION EXECUTED' 
END TRY
BEGIN CATCH
	ROLLBACK TRANSACTION TR1
	SELECT 'TRANSACTION ROLLBACKED'
END CATCH
COMMIT TRANSACTION TR1;

/*--------------------------------------------------------------------------------------------------*/