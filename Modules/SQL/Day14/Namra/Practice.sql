-- Using a DML Trigger With a remainder Message

CREATE TRIGGER Remainder1
ON Sales.Customer
AFTER INSERT , UPDATE
AS Print('Inserted or updated very good')
GO

UPDATE Sales.Customer
SET StoreID = 934 WHERE StoreID = 1028

-- Using a DML trigger with a reminder e-mail message

DISABLE TRIGGER Remainder1 ON Sales.Customer

CREATE TRIGGER Remainder2
ON Sales.Customer
AFTER INSERT, UPDATE, DELETE
AS 
	EXEC msdb.dbo.sp_send_dbmail
		@profile_name = 'AdventureWorks2012 Administrator',
		@recipients = 'patelnamra2310@gmail.com',
		@body = 'Don''t forget to print a report for the sales force',
		@subject = 'Remainder';
	GO

-- Disabling trigger

DISABLE TRIGGER Remainder2 ON Sales.Customer
------------------------------------------------------------------------------------------------------------------------------
CREATE TRIGGER trgUpdateShift
ON HumanResources.Shift
FOR Update
As
	DECLARE @ModifiedDate DATETIME
	SELECT @ModifiedDate = ModifiedDate FROM Inserted
	IF(@ModifiedDate != GETDATE())
	BEGIN
		PRINT 'The modified date should be the current date. Hence, cannot insert'
		ROLLBACK TRANSACTION
	END
GO
-- gives an error
UPDATE HumanResources.Shift 
SET Name = 'Noon' WHERE Name= 'Day'

DISABLE TRIGGER trgUpdateShift ON HumanResources.Shift
------------------------------------------------------------------------------------------------------------------------------

-- delete trigger on department table
CREATE TRIGGER trgDeleteDepartment
ON HumanResources.Department
FOR DELETE 
AS
	PRINT 'Deletion of Department is not allowed'
	ROLLBACK TRANSACTION
RETURN

DELETE FROM HumanResources.Department WHERE DepartmentID = 16

DISABLE TRIGGER trgDeleteDepartment ON HumanResources.Department
------------------------------------------------------------------------------------------------------------------------------

-- Updating the rate column in the employeePayhistory

CREATE TRIGGER trgUpdateEmployeePayHistory
ON HumanResources.EmployeePayHistory 
FOR UPDATE
AS
	IF UPDATE(Rate)
	BEGIN
		DECLARE @AvgRate float
		SELECT @AvgRate = AVG(RATE)
		FROM HumanResources.EmployeePayHistory
		IF(@AvgRate > 20)
		BEGIN
			PRINT 'The avarage value of rate cannot be more than 20'
			ROLLBACK TRANSACTION
		END
	END

SELECT AVG(RATE) FROM HumanResources.EmployeePayHistory
-- Gives an error
UPDATE HumanResources.EmployeePayHistory
SET Rate = 6000 where BusinessEntityID = 3

DISABLE TRIGGER trgUpdateEmployeePayHistory ON HumanResources.EmployeePayHistory 

------------------------------------------------------------------------------------------------------------------------------

-- Creating an after trigger
CREATE TRIGGER trgDeleteShift 
ON HumanResources.Shift
AFTER DELETE
AS
PRINT 'Deletion successful'

DELETE HumanResources.Shift WHERE ShiftID = 3

DISABLE TRIGGER trgDeleteShift ON HumanResources.Shift

------------------------------------------------------------------------------------------------------------------------------
-- Displays a message instead of deleting record from the project table

-- An instead of trigger

CREATE TRIGGER trgEmployeeDelete
ON HumanResources.Shift
INSTEAD OF DELETE
AS
PRINT 'Project records cannot be deleted'

DELETE FROM HumanResources.Shift Where ShiftID = 1

DISABLE TRIGGER trgEmployeeDelete ON HumanResources.Shift

------------------------------------------------------------------------------------------------------------------------------

-- Creating a DDL Trigger

CREATE TRIGGER safety
ON DATABASE
FOR DROP_TABLE, ALTER_TABLE
AS
	PRINT'You must disable trigger "safety" to drop or alter tables!'
ROLLBACK

DROP TABLE HumanResources.Employee

DROP TRIGGER safety on database

-- Altering a trigger

CREATE TRIGGER trgInsertShift
ON HumanResources.Shift
FOR INSERT
AS
	DECLARE @ModifiedDate DATETIME
	SELECT @ModifiedDate = ModifiedDate FROM inserted
	IF(@ModifiedDate != GETDATE())
	BEGIN 
		PRINT 'The modified date should be the current date. Hence, Cannot insert.'
		ROLLBACK TRANSACTION
	END

ALTER TRIGGER HumanResources.trgInsertShift
ON HumanResources.Shift
FOR INSERT 
AS
DECLARE @ModifiedDate DATETIME
SELECT @ModifiedDate = ModifiedDate FROM inserted
IF(@ModifiedDate != GETDATE())
BEGIN
	RAISERROR('The modified date is not the current date. The transaction cannot be processed',10,1)
	ROLLBACK TRANSACTION
END
RETURN
-- DELETING A TRIGGER
DROP TRIGGER HumanResources.trgInsertShift