USE SampleDB

--TRANSACTIONS

--IMPLICIT TRANSACTIONS
SELECT * FROM hr.emp

--COMMIT TRANSACTION
SET IMPLICIT_TRANSACTIONS ON;
INSERT INTO hr.emp VALUES (1, 'Reena');
INSERT INTO hr.emp VALUES (2, 'Meena');
COMMIT TRANSACTION;

--ROLLBACK TRANSACTION
SET IMPLICIT_TRANSACTIONS ON;
INSERT INTO hr.emp VALUES (3, 'Reena');
INSERT INTO hr.emp VALUES (4, 'Meena');
ROLLBACK TRANSACTION;

SET IMPLICIT_TRANSACTIONS OFF;

CREATE TABLE FixedDepositAccount(
	Balance MONEY,
	AccountName VARCHAR(50)
)

CREATE TABLE SavingsAccount(
	Balance MONEY,
	AccountName VARCHAR(50)
)

SELECT * FROM FixedDepositAccount

SELECT * FROM SavingsAccount

--EXPLICIT TRANSACTION

--COMMIT
BEGIN TRAN myTran
UPDATE FixedDepositAccount
SET Balance = Balance - 25000
WHERE AccountName='John'

UPDATE SavingsAccount
SET Balance = Balance + 25000
WHERE AccountName='John'
COMMIT TRAN myTran


--ROLLBACK
BEGIN TRAN myTran
UPDATE FixedDepositAccount
SET Balance = Balance - 5000
WHERE AccountName='John'

UPDATE SavingsAccount
SET Balance = Balance + 5000
WHERE AccountName='John'
ROLLBACK TRAN myTran


--
USE AdventureWorks2012

SELECT * FROM Person.ContactType
SELECT * FROM Person.Address

BEGIN TRANSACTION Tr1
BEGIN TRY
	INSERT INTO Persons VALUES (2,'Assistant Sales Agent')

	SELECT 'TRANSACTION EXECUTED'
END TRY
BEGIN CATCH 
	ROLLBACK TRANSACTION Tr1
	SELECT 'TRANSACTION ROLLBACKED'
END CATCH

--NAMING A TRANSACTION
DECLARE @TranName VARCHAR(20);  
SELECT @TranName = 'MyTransaction';  
  
BEGIN TRANSACTION @TranName;  
USE AdventureWorks2012;  
DELETE FROM AdventureWorks2012.HumanResources.JobCandidate  
    WHERE JobCandidateID = 13;  
  
COMMIT TRANSACTION @TranName;  
GO

--MARKING A TRANSACTION
BEGIN TRANSACTION CandidateDelete  
    WITH MARK N'Deleting a Job Candidate';  
GO  
DELETE FROM AdventureWorks2012.HumanResources.JobCandidate  
    WHERE JobCandidateID = 12;  
GO  
COMMIT TRANSACTION CandidateDelete;  
GO

SELECT * FROM HumanResources.JobCandidate 


--COMMITTING A NESTED TRANSACTION
IF OBJECT_ID(N'TestTran',N'U') IS NOT NULL  
    DROP TABLE TestTran;  
GO  
CREATE TABLE TestTran (Cola INT PRIMARY KEY, Colb CHAR(3));  
GO  
-- This statement sets @@TRANCOUNT to 1.  
BEGIN TRANSACTION OuterTran;  
  
PRINT N'Transaction count after BEGIN OuterTran = '  
    + CAST(@@TRANCOUNT AS NVARCHAR(10));  
 
INSERT INTO TestTran VALUES (1, 'aaa');  
 
-- This statement sets @@TRANCOUNT to 2.  
BEGIN TRANSACTION Inner1;  
 
PRINT N'Transaction count after BEGIN Inner1 = '  
    + CAST(@@TRANCOUNT AS NVARCHAR(10));  
  
INSERT INTO TestTran VALUES (2, 'bbb');  
  
-- This statement sets @@TRANCOUNT to 3.  
BEGIN TRANSACTION Inner2;  
  
PRINT N'Transaction count after BEGIN Inner2 = '  
    + CAST(@@TRANCOUNT AS NVARCHAR(10));  
  
INSERT INTO TestTran VALUES (3, 'ccc');  
  
-- This statement decrements @@TRANCOUNT to 2.  
-- Nothing is committed.  
COMMIT TRANSACTION Inner2;  
 
PRINT N'Transaction count after COMMIT Inner2 = '  
    + CAST(@@TRANCOUNT AS NVARCHAR(10));  
 
-- This statement decrements @@TRANCOUNT to 1.  
-- Nothing is committed.  
COMMIT TRANSACTION Inner1;  
 
PRINT N'Transaction count after COMMIT Inner1 = '  
    + CAST(@@TRANCOUNT AS NVARCHAR(10));  
  
-- This statement decrements @@TRANCOUNT to 0 and  
-- commits outer transaction OuterTran.  
COMMIT TRANSACTION OuterTran;  
  
PRINT N'Transaction count after COMMIT OuterTran = '  
    + CAST(@@TRANCOUNT AS NVARCHAR(10));


--SAVEPOINT TRANSACTION 
IF EXISTS (SELECT name FROM sys.objects  
           WHERE name = N'SaveTranExample')  
    DROP PROCEDURE SaveTranExample;  
GO  
CREATE PROCEDURE SaveTranExample  
    @InputCandidateID INT  
AS  
    -- Detect whether the procedure was called  
    -- from an active transaction and save  
    -- that for later use.  
    -- In the procedure, @TranCounter = 0  
    -- means there was no active transaction  
    -- and the procedure started one.  
    -- @TranCounter > 0 means an active  
    -- transaction was started before the   
    -- procedure was called.  
    DECLARE @TranCounter INT;  
    SET @TranCounter = @@TRANCOUNT;  
    IF @TranCounter > 0  
        -- Procedure called when there is  
        -- an active transaction.  
        -- Create a savepoint to be able  
        -- to roll back only the work done  
        -- in the procedure if there is an  
        -- error.  
        SAVE TRANSACTION ProcedureSave;  
    ELSE  
        -- Procedure must start its own  
        -- transaction.  
        BEGIN TRANSACTION;  
    -- Modify database.  
    BEGIN TRY  
        DELETE HumanResources.JobCandidate  
            WHERE JobCandidateID = @InputCandidateID;  
        -- Get here if no errors; must commit  
        -- any transaction started in the  
        -- procedure, but not commit a transaction  
        -- started before the transaction was called.  
        IF @TranCounter = 0  
            -- @TranCounter = 0 means no transaction was  
            -- started before the procedure was called.  
            -- The procedure must commit the transaction  
            -- it started.  
            COMMIT TRANSACTION;  
    END TRY  
    BEGIN CATCH  
        -- An error occurred; must determine  
        -- which type of rollback will roll  
        -- back only the work done in the  
        -- procedure.  
        IF @TranCounter = 0  
            -- Transaction started in procedure.  
            -- Roll back complete transaction.  
            ROLLBACK TRANSACTION;  
        ELSE  
            -- Transaction started before procedure  
            -- called, do not roll back modifications  
            -- made before the procedure was called.  
            IF XACT_STATE() <> -1  
                -- If the transaction is still valid, just  
                -- roll back to the savepoint set at the  
                -- start of the stored procedure.  
                ROLLBACK TRANSACTION ProcedureSave;  
                -- If the transaction is uncommitable, a  
                -- rollback to the savepoint is not allowed  
                -- because the savepoint rollback writes to  
                -- the log. Just return to the caller, which  
                -- should roll back the outer transaction.  
  
        -- After the appropriate rollback, echo error  
        -- information to the caller.  
        DECLARE @ErrorMessage NVARCHAR(4000);  
        DECLARE @ErrorSeverity INT;  
        DECLARE @ErrorState INT;  
  
        SELECT @ErrorMessage = ERROR_MESSAGE();  
        SELECT @ErrorSeverity = ERROR_SEVERITY();  
        SELECT @ErrorState = ERROR_STATE();  
  
        RAISERROR (@ErrorMessage, -- Message text.  
                   @ErrorSeverity, -- Severity.  
                   @ErrorState -- State.  
                   );  
    END CATCH  
GO

SELECT * FROM HumanResources.JobCandidate

EXECUTE SaveTranExample 11;

--ISOLATION LEVELS
SET TRANSACTION ISOLATION LEVEL
READ COMMITTED
BEGIN TRANSACTION Tr
BEGIN TRY
	INSERT INTO Persons VALUES (3,'Assistant Sales Agent')

	PRINT 'TRANSACTION EXECUTED'
END TRY
BEGIN CATCH
	ROLLBACK TRANSACTION Tr
	PRINT 'TRANSACTION ROLLBACKED'
END CATCH