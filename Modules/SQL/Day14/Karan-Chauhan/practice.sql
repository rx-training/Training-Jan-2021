USE AdventureWorks2012;

CREATE TRIGGER trgInsertShift ON HumanResources.Shift FOR INSERT
AS
DECLARE @ModifiedDate datetime
SELECT @ModifiedDate = ModifiedDate FROM Inserted
IF (@ModifiedDate != GETDATE())
BEGIN
	PRINT 'Modified date should be the current date. Hence, cannot insert.'
	ROLLBACK TRANSACTION
END



CREATE TRIGGER trgDeleteDepartment ON HumanResources.Department FOR DELETE
AS
PRINT 'Deletion of Department is not allowed'
ROLLBACK TRANSACTION
RETURN


CREATE TRIGGER trgUpdate ON HumanResources.EmployeePayHistory FOR UPDATE
AS
IF UPDATE (Rate)
BEGIN
DECLARE @AvgRate FLOAT
SELECT @AvgRate = AVG(Rate) FROM HumanResources.EmployeePayHistory
IF (@AvgRate > 20)
BEGIN
PRINT 'Avg value of rate cannot be more than 20'
ROLLBACK TRANSACTION
END
END


CREATE TRIGGER trgDelete ON HumanResources.Shift AFTER DELETE AS PRINT 'Deletion Successful'

CREATE TRIGGER trgDel ON HumanResources.EmployeePayHistory INSTEAD OF DELETE AS PRINT 'Project records cannot be deleted'

CREATE TRIGGER safety ON DATABASE FOR DROP_TABLE, ALTER_TABLE 
AS
PRINT 'Disable trigger safety to drop or alter tables'
ROLLBACK


ALTER TRIGGER HumanResources.trgInsertShift ON HumanResources.Shift
FOR INSERT
AS
DECLARE @ModifiedDate datetime
SELECT @ModifiedDate = ModifiedDate FROM Inserted
IF (@ModifiedDate != GETDATE())
BEGIN
RAISERROR ('Transaction cannot be processed',10,1)
ROLLBACK TRANSACTION
END
RETURN

DROP TRIGGER HumanResources.trgMagic