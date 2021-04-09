USE AdventureWorks2012;

-- ---------------------------------------------------- TRIGGER ----------------------------------------------------
SELECT * FROM HumanResources.Shift;

-- -------------------------- DML TRIGGERS --------------------------
-- CREATE
CREATE TRIGGER HumanResources.trgInsertShift
ON HumanResources.Shift
FOR INSERT
AS
	DECLARE @ModifiedDate datetime
	SELECT @ModifiedDate = ModifiedDate FROM inserted
	IF (@ModifiedDate != GETDATE())
	BEGIN
		PRINT 'The Modified Date should be current date'
		ROLLBACK TRANSACTION
	END

INSERT INTO HumanResources.Shift (Name, StartTime, EndTime, ModifiedDate) VALUES
	('Day3', '07:00:00.0000000', '18:00:00.0000000', GETDATE());


-- DELETE
CREATE TRIGGER trgDeleteDepartment 
ON HumanResources.Department
FOR DELETE
AS
	PRINT 'Deletion of Department is not allowed'
	ROLLBACK TRANSACTION
RETURN


-- UPDATE
CREATE TRIGGER trgUpdateEmployeePayHistory
ON HumanResources.EmployeePayHistory
FOR UPDATE 
AS
IF UPDATE(Rate)
BEGIN
	DECLARE @AvgRate FLOAT
	SELECT @AvgRate = AVG(Rate)
	FROM HumanResources.EmployeePayHistory
	IF(@AvgRate > 20)
	BEGIN
		PRINT 'The average value of rate cannot be more than 20'
		ROLLBACK TRANSACTION
	END
END

SELECT AVG(Rate) FROM HumanResources.EmployeePayHistory;


-- DELETE 
CREATE TRIGGER trgDeleteShift 
ON HumanResources.Shift
AFTER DELETE
AS
	PRINT 'Deletion successful'

DELETE FROM HumanResources.Shift WHERE ShiftID = 15;


-- INSTEAD OF
CREATE TRIGGER trgDelete
ON HumanResources.Department
INSTEAD OF DELETE
AS
	PRINT 'Projects records cannot be deleted'

SELECT * FROM HumanResources.Department;
DELETE FROM HumanResources.Department WHERE DepartmentID = 1;


-- -------------------------- DDL TRIGGERS --------------------------

CREATE TRIGGER Saftey
ON DATABASE
FOR DROP_TABLE, ALTER_TABLE
AS
	PRINT 'You must diasble trigger "Saftey" to drop or alter tables!'



-- -------------------------- ALTER TRIGGER --------------------------
ALTER TRIGGER HumanResources.trgInsertShift
ON HumanResources.Shift
FOR INSERT
AS
	DECLARE @ModifiedDate datetime
	SELECT @ModifiedDate = ModifiedDate FROM inserted
	IF (@ModifiedDate != GETDATE())
	BEGIN
		RAISERROR('The modified date is not the current date.',10,1)
		ROLLBACK TRANSACTION
	END


-- -------------------------- DROP TRIGGER --------------------------
DROP TRIGGER HumanResources.trgInsertShift;