USE AdventureWorks2012;

SET IMPLICIT_TRANSACTIONS ON;
SELECT * FROM HumanResources.EmployeePayHistory;

BEGIN TRANSACTION;   
DELETE FROM HumanResources.JobCandidate  
    WHERE JobCandidateID = 13;   
COMMIT TRANSACTION;

INSERT INTO HumanResources.EmployeePayHistory(BusinessEntityID,RateChangeDate,Rate,PayFrequency,ModifiedDate)
	VALUES(1,GETDATE(),250,2,GETDATE())

COMMIT TRANSACTION;
SET IMPLICIT_TRANSACTIONS OFF;

/*---------------------------------------------------*/
SELECT * FROM Person.ContactType
BEGIN TRANSACTION TR1
BEGIN TRY
UPDATE Person.ContactType SET Name = 'Karan Singh' WHERE ContactTypeID = 4;
--Statement1
UPDATE Person.ContactType SET Name = 'Karan Singh' WHERE ContactTypeID = 8;
--Statement2
SELECT 'TRANSACTION EXECUTED' 
END TRY
BEGIN CATCH
	ROLLBACK TRANSACTION TR1
	SELECT 'TRANSACTION ROLLBACKED'
END CATCH

/*----------------------------------------------------*/
SET TRANSACTION ISOLATION LEVEL
READ COMMITTED
BEGIN TRANSACTION TR2
BEGIN TRY
UPDATE Person.ContactType SET Name = 'Karan Singh' WHERE ContactTypeID = 2;
--Statement1
UPDATE Person.ContactType SET Name = 'Karan Singh' WHERE ContactTypeID = 6;
--Statement2
SELECT 'TRANSACTION EXECUTED' 
END TRY
BEGIN CATCH
	ROLLBACK TRANSACTION TR2
	SELECT 'TRANSACTION ROLLBACKED'
END CATCH

/*------------------------------------------------------------------------------------------------------*/