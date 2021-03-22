/*** Day 14 Practice Exercise ***/

/** DML Trigger **/
/* Insert Trigger */

CREATE TRIGGER trgInsertShift
ON HumanResources.Shift
FOR INSERT
AS
	DECLARE @ModifiedDate Datetime
	SELECT @ModifiedDate = ModifiedDate FROM Inserted
	IF (@ModifiedDate != Getdate())
	BEGIN
		PRINT 'The Modified Date should be current date.
			Hence, can not insert'
		ROLLBACK TRANSACTION
	END
GO

/* Delete Trigger */

CREATE TRIGGER trdDeleteDepartment
ON HumanResources.Department
FOR DELETE
AS
PRINT 'Deletion of Department is not allowed'
ROLLBACK TRANSACTION 
RETURN
GO

/* Update Trigger */

CREATE TRIGGER trgUpdateEmployeePayHistory
ON HumanResources.EmployeePayHistory
FOR UPDATE
AS
IF UPDATE(Rate)
BEGIN
DECLARE @AvgRate float
SELECT @AvgRate = AVG(Rate)
FROM HumanResources.EmployeePayHistory
IF(@AvgRate>20)
BEGIN
PRINT 'The average value of rate cannot be more than 20'
ROLLBACK TRANSACTION
END
END
GO

/* After Trigger */

CREATE TRIGGER trgDeleteShift ON HumanResources.Shift
AFTER DELETE
AS
PRINT 'Deletion successful'
GO

/* Insted Of Trigger */

CREATE TRIGGER trgDelete ON
HumanResources.Department
INSTEAD OF DELETE
AS
PRINT 'Project Records cannot be deleted'
GO

/* DDL Trigger */

CREATE TRIGGER safety
ON DATABASE
FOR DROP_TABLE,ALTER_TABLE
AS
PRINT 'You must disable Trigger "safety" to drop or alter tables!'
ROLLBACK
GO

/* Alter Trigger */

ALTER TRIGGER HumanResources.trgInsertShift
ON HumanResources.Shift
FOR INSERT
AS
	DECLARE @ModifiedDate Datetime
	SELECT @ModifiedDate = ModifiedDate FROM Inserted
	IF (@ModifiedDate != Getdate())
	BEGIN
		RAISERROR('The Modified Date should be current date.
			Hence, can not insert',10,1)
		ROLLBACK TRANSACTION
	END
GO

/* Deleting a Trigger */

DROP TRIGGER HumanResources.trgInsertShift
GO
DROP TRIGGER HumanResources.trgDelete
GO
DROP TRIGGER HumanResources.trgDeleteShift
GO
DROP TRIGGER HumanResources.trgUpdateEmployeePayHistory
GO
DROP TRIGGER HumanResources.trdDeleteDepartment
GO
DROP TRIGGER safety
ON DATABASE
GO