USE AdventureWorks2012


--Creating a Trigger
CREATE OR ALTER TRIGGER trgInsert
ON HumanResources.Shift
FOR INSERT
AS
	DECLARE @ModifiedDate DATETIME
	SELECT @ModifiedDate = ModifiedDate 
	FROM inserted
	IF (@ModifiedDate != GETDATE())
	BEGIN 
		PRINT 'Modified date should be the current date. Hence, not inserted'
		ROLLBACK TRANSACTION
	END
GO


--Creating a Delete Trigger
CREATE OR ALTER TRIGGER trgDeleteDept
ON HumanResources.Department
FOR DELETE
AS
	PRINT 'Deletion of Department Table is not allowed'
	ROLLBACK TRANSACTION
RETURN
GO


--Creating an Update Trigger
CREATE OR ALTER TRIGGER trgUpdateEmployeePayHistory
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
			PRINT 'Average value of rate cannot be more than 20'
			ROLLBACK TRANSACTION
		END
	END
GO


--Creating an After Delete Trigger
CREATE OR ALTER TRIGGER trgDeleteShift
ON HumanResources.Shift
AFTER DELETE
AS
	PRINT 'Deletion Successfull'
GO


--Creating an Instead Of Trigger
CREATE OR ALTER TRIGGER trgDelete 
ON HumanResources.EmployeePayHistory
INSTEAD OF DELETE
AS
	PRINT 'Records cannot be deleted'
GO


--Creating a DDL Trigger
CREATE OR ALTER TRIGGER safety
ON DATABASE
FOR DROP_TABLE, ALTER_TABLE
AS
	PRINT 'You must disable trigger safety to alter or drop tables'
	ROLLBACK
GO


--Alter Trigger
ALTER TRIGGER HumanResources.trgInsert
ON HumanResources.Shift
FOR INSERT
AS
	DECLARE @ModifiedDate DATETIME
	SELECT @ModifiedDate = ModifiedDate 
	FROM inserted
	IF (@ModifiedDate != GETDATE())
	BEGIN 
		RAISERROR('Modified date is not the current date. Transaction cannot be processed', 10, 1)
		ROLLBACK TRANSACTION
	END
	RETURN
GO


--Deleting a Trigger
DROP TRIGGER
HumanResources.trgDelete