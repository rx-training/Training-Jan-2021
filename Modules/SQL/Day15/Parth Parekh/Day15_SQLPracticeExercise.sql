-- Implicit Transaction
SET IMPLICIT_TRANSACTIONS ON
INSERT INTO Emp VALUES (8 , 'P') 
INSERT INTO Emp VALUES (9 , 'r') 
SELECT @@TRANCOUNT -- It Count the total transaction 
COMMIT TRANSACTION

SET IMPLICIT_TRANSACTIONS OFF
SELECT  * FROM Emp

-- Explicit Transaction
-- Example 1
BEGIN TRAN  myTran
UPDATE FixedDepositAccount
SET Balance = Balance - 25000
WHERE AccountName = 'John'

UPDATE SavingAccount
SET Balance = Balance + 25000
WHERE AccountName = 'John'
COMMIT TRAN myTran

-- Example 2
BEGIN TRANSACTION;  
DELETE FROM HumanResources.JobCandidate  
    WHERE JobCandidateID = 13;  
COMMIT;

-- ROLLBACK
  -- Example 1
CREATE TABLE ValueTable (id INT);  
BEGIN TRANSACTION;  
       INSERT INTO ValueTable VALUES(1);  
       INSERT INTO ValueTable VALUES(2);  
ROLLBACK;  -- It Rollback the transaction 
SELECT * FROM ValueTable

  -- Example 2
BEGIN TRANSACTION TR1
BEGIN TRY
		UPDATE Emp SET EmpID = 5 WHERE EmpID = 9
		UPDATE Sal SET Salary = 10000 WHERE EmpID = 5
		COMMIT TRANSACTION TR1
		SELECT 'Transaction Executed'
END TRY
BEGIN CATCH 
		ROLLBACK TRANSACTION TR1
		SELECT 'Transaction Rollbacked' , ERROR_LINE() ,ERROR_MESSAGE()
END CATCH

-- Impliment Isolation Level
SET TRANSACTION ISOLATION LEVEL
READ COMMITTED
BEGIN TRANSACTION TR1
BEGIN TRY
		UPDATE Emp SET EmpID = 5 WHERE EmpID = 9
		UPDATE Sal SET Salary = 10000 WHERE EmpID = 5
		COMMIT TRANSACTION TR1
		SELECT 'Transaction Executed'
END TRY
BEGIN CATCH 
		ROLLBACK TRANSACTION TR1
		SELECT 'Transaction Rollbacked' , ERROR_LINE() ,ERROR_MESSAGE()
END CATCH