/*
	ACID Properties

	-- ATOMICITY
	>> Either all the data modifications are performed or one of them are performed

	-- CONSISTENCY
	>> All the data is in a consistent state after a transcation is completed successfully

	-- ISOLATION
	>> Any data modification made by one transaction must be isolated from the other 
	   concurrent transaction

	-- DURABILITY
	>> Any change in data by a completed transaction remains permanent in the system
    __________________________________________________________________________________________

	-- Types of transcation 

	-- Automatic transaction
	>> It is the default transaction management mode of SQL Server
	>> Each individual statement is a transaction

	-- Implicit transaction
	>> A new transaction is implicitly started when the prior transaction completes, 
	   but each transaction is explicitly completed with a COMMIT or ROLLBACK statement
	
	-- Explicit transaction
	>> Each transaction is explicitly started with the BEGIN TRANSACTION statement 
	   and explicitly ended with a COMMIT or ROLLBACK statement

	-- Batch-scoped transaction
	>> Applicable only to multiple active result sets(MARS), a Transact-SQL explicit 
	   or implicit transaction that starts under a MARS session becomes a batch-scoped
	   transaction. A batch-scoped transaction that is not commited or rolled back when 
	   a batch completes is automatically rolled back by SQL Server.
*/

-- Implicit transaction
	-- Setting on IMPLICIT_TRANSACTIONS ON and wrote insert query
	SET IMPLICIT_TRANSACTIONS ON;
	INSERT INTO Sales ( EmployeeId,NumberOfSales) VALUES(6,19);
	COMMIT TRANSACTION;
	-- Settinf off Implicit_transactions
	SET IMPLICIT_TRANSACTIONS OFF;

	SELECT * FROM Sales

-- Explicit transaction
/* To create explicit transaction
	>> BEGIN TRANSACTION
		Is used to set the starting point of a transaction
	>> COMMIT TRANSACTION
		Is used to save the changes permantently in the database
	>> ROLLBACK TRANSACTION
		Is used to undo the changes
	>> SAVE TRANSACTION
		Is used to establish save points that allow partial rollback 
		of a transaction
*/

BEGIN TRAN myTran 
UPDATE Sales
SET NumberOfSales = 35
WHERE SalesID = 1005
ROLLBACK TRAN myTran

BEGIN TRAN myTran
UPDATE Sales
SET NumberOfSales = 5
WHERE SalesID = 1003
COMMIT TRAN myTran

SELECT * FROM Sales

-- Transaction example

BEGIN TRANSACTION TR1
BEGIN TRY
UPDATE Person.EmailAddress
SET EmailAddress = 'jooly@yhoo.com'
WHERE BusinessEntityID = 10007+'a'

UPDATE HumanResources.EmployeeDepartmentHistory
SET DepartmentID = 2
WHERE BusinessEntityID = 4

COMMIT TRANSACTION TR1
SELECT 'Transaction Executed'
END TRY
BEGIN CATCH
	ROLLBACK TRANSACTION TR1
	SELECT 'Transaction Rollbacked'
END CATCH

/*
	--	 In the absence of locking,the following problems may occur :
	>> Lost updates
		Occurs when two or more transactions try to modify the same row
	>> Uncommitted dependency(Dirty read)
		Occurs when a transaction queries data from a table when the other 
		transaction is in the process of modifying data
	>> Inconsistent analysis
		Occurs when the data is changed between simultaneous read by one user
	>> Phantom reads
		Occurs when new records inserted by a user are identified by transaction 
		that started prior to the INSERT statement
	___________________________________________________________________________________

	Locking is controlled by the following types of isolation levels:
	1. READ UNCOMMITTED
		Allows another transaction to read uncommitted data
	2. READ COMMITTED
		Allows another transaction to read committed data
	3. REPEATABLE READ
		A transaction cannot read the data that is being modified by the current transaction
		No other transaction can update the data read by the current transaction until the current transaction completes
		Other transaction can insert new rows
	4. SNAPSHOT
		Other transaction can insert new row
	5. SERIALIZABLE
		No transaction can read, modify or insert new data while the data is being read or updated by the current transaction
*/

SET TRANSACTION ISOLATION LEVEL 
READ COMMITTED
BEGIN TRANSACTION TR
BEGIN TRY
UPDATE Person.EmailAddress
SET EmailAddress = 'jolyn@yahoo.com'
WHERE BusinessEntityID = 1070 +'a'

UPDATE HumanResources.EmployeeDepartmentHistory 
SET DepartmentID = 1
WHERE BusinessEntityID = 4
COMMIT TRANSACTION TR
PRINT 'Transacction Executed'
END TRY
BEGIN CATCH 
ROLLBACK TRANSACTION TR
PRINT 'Transaction RollBacked'
END CATCH

/*
Deadlock
>> A deadlock is a situation where each transaction waits for a lock on each other's objects to be releases.
*/

