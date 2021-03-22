-- Creeation of table
CREATE TRIGGER trgInsertShift
ON HumanResources.Shift
FOR INSERT 
AS 

	DECLARE @ModifiedDate datetime 
	SELECT @ModifiedDate = ModifiedDate FROM Inserted
	IF (@ModifiedDate != GETDATE())
	BEGIN 
		PRINT 'The modified date should be the current date. Hence , Cannot insert .'
		ROLLBACK TRANSACTION
	END


-- Creating a DDL trigger
CREATE TRIGGER safety
ON DATABASE
FOR DROP_TABLE ,ALTER_TABLE
AS
PRINT 'You Must disable trigger "Safety to drop or alter tables!"'
ROLLBACK

-- Alter Trigger 
CREATE TRIGGER trgDeleteDepartment
ON HumanResources.Department
FOR DELETE
AS 
PRINT 'Deletion of Department is not allowed'
ROLLBACK TRANSACTION
RETURN


-- Creating an Update Trigger

CREATE TRIGGER trgUpdateEmployeePayHistory
ON HumanResources.EmployeePayHistory
FOR UPDATE
AS
IF UPDATE(Rate)	
BEGIN
DECLARE @AvgRate float 
SELECT  @AvgRate = AVG(Rate)
FROM HumanResources.EmployeePayHistory
IF(@AvgRate > 20)
BEGIN 
PRINT 'The average value of rate cannot be more than 20'
ROLLBACK TRANSACTION
END 
END


-- Creating an after trigger
CREATE TRIGGER trgDeleteShift 
ON HumanResources.Shift
AFTER DELETE 
AS
PRINT 'Deletion	Succesful'

-- Creating an instead of trigger
CREATE TRIGGER trgDelete 
ON HumanResources.Department
INSTEAD OF DELETE 
AS
PRINT 'Project records cannot be deleted'

-- Alter Trigger
ALTER  TRIGGER HumanResources.trgInsertShift
ON HumanResources.Shift
FOR INSERT 
AS 

	DECLARE @ModifiedDate datetime 
	SELECT @ModifiedDate = ModifiedDate FROM Inserted
	IF (@ModifiedDate != GETDATE())
	BEGIN 
		PRINT 'The modified date should be the current date. Hence , Cannot insert .'
		ROLLBACK TRANSACTION
	END
RETURN 

-- Deleting a trigger

DROP TRIGGER HumanResources.trgInsertShift


-- Disable trigger
DISABLE TRIGGER Person.uAddress ON Person.Address;  
GO

DISABLE Trigger ALL ON ALL SERVER;   --Disabling all triggers that were defined with the same scope
-- Enable trigger
ENABLE Trigger Person.uAddress ON Person.Address;  
GO

ENABLE Trigger ALL ON ALL SERVER;  -- Enabling all triggers that were defined with the same scope