USE AdventureWorks2012

--TRIGGERS

--CREATING DML TRIGGERS

--CREATE INSERT TRIGGER
SELECT * FROM HumanResources.Shift

CREATE TRIGGER trgInsertShift
ON HumanResources.Shift
FOR INSERT
AS
	DECLARE @ModifiedDate DATETIME
	SELECT @ModifiedDate = ModifiedDate FROM Inserted
	IF(@ModifiedDate != GETDATE())
	BEGIN
		PRINT 'Modified date should be currentdate. hence, can not insert'
		ROLLBACK TRANSACTION
	END

--ERROR
INSERT INTO HumanResources.Shift VALUES ('Noon', '09:00:00.0000000', '11:00:00.0000000', '2020-05-30 00:00:00.000')

--CORRECT
DECLARE @CurDate DATETIME;
SET @CurDate = GETDATE();
INSERT INTO HumanResources.Shift VALUES ('Noon', '09:00:00.0000000', '11:00:00.0000000', @CurDate);

--CREATE DELETE TRIGGER
SELECT * FROM HumanResources.Department

CREATE TRIGGER trgDeleteDepartment
ON HumanResources.Department
FOR DELETE
AS
PRINT 'Deletion of Department is not allowed'
ROLLBACK TRANSACTION
RETURN

DELETE FROM HumanResources.Department WHERE DepartmentID=1


--CREATE UPDATE TRIGGER
SELECT * FROM HumanResources.EmployeePayHistory

CREATE TRIGGER trgUpdateEmpPayHistory
ON HumanResources.EmployeePayHistory
FOR UPDATE
AS
IF UPDATE (Rate)
BEGIN
DECLARE @AvgRate FLOAT
SELECT @AvgRate = AVG(Rate)
FROM HumanResources.EmployeePayHistory
IF(@AvgRate>20)
BEGIN
	PRINT 'Avg Rate can not be >20'
END
ROLLBACK TRANSACTION
END

UPDATE HumanResources.EmployeePayHistory SET Rate=22

--CREATE AFTER TRIGGER
SELECT * FROM HumanResources.Shift

CREATE TRIGGER trgDeleteShift ON HumanResources.Shift
AFTER DELETE
AS
PRINT 'Deletion Successful'

DELETE FROM HumanResources.Shift WHERE ShiftID=6

--CREATE INSTEAD OF TRIGGER
SELECT * FROM HumanResources.Department

CREATE TRIGGER trgDelDept
ON HumanResources.Department
INSTEAD OF DELETE
AS
PRINT 'Deletion of Department is not allowed'
SELECT * FROM Deleted

DELETE FROM HumanResources.Department WHERE DepartmentID=1


--CREATING DDL TRIGGERS
SELECT * FROM TestTable

CREATE TRIGGER Safety
ON DATABASE
FOR DROP_TABLE, ALTER_TABLE
AS
PRINT 'You must disable Trigger "safety" to drop or alter tables'
ROLLBACK

DROP TABLE TestTable

ALTER TABLE TestTable DROP COLUMN TestCol2

--ALTERING TRIGGER
ALTER TRIGGER HumanResources.trgInsertShift
ON HumanResources.Shift
FOR INSERT
AS
DECLARE @ModifiedDate DATETIME
SELECT @ModifiedDate = ModifiedDate FROM Inserted
IF(@ModifiedDate != GETDATE())
BEGIN
	RAISERROR ('modified date is not current date', 10, 1)
	ROLLBACK TRANSACTION
END
RETURN

INSERT INTO HumanResources.Shift VALUES ('Noon', '10:00:00.0000000', '12:00:00.0000000', '2020-07-30 00:00:00.000')

--DELETING A TRIGGER
DROP TRIGGER HumanResources.trgInsertShift


--DML TRIGGER WITH A REMINDER MESSAGE
SELECT * FROM Sales.Customer

CREATE TRIGGER reminder1  
ON Sales.Customer  
AFTER INSERT, UPDATE   
AS RAISERROR ('Notify Customer Relations', 16, 10);  
GO

INSERT INTO Sales.Customer VALUES (1993, 1994, 3, 'AW00030118', '2495B4EB-FE8B-459E-A1B6-DBA25C04E626', '2014-09-12 11:15:07.263')


--DML TRIGGER WITH A EMAIL REMINDER MESSAGE
CREATE TRIGGER reminder2  
ON Sales.Customer  
AFTER INSERT, UPDATE, DELETE   
AS  
   EXEC msdb.dbo.sp_send_dbmail  
        @profile_name = 'AdventureWorks2012 Administrator',  
        @recipients = 'danw@Adventure-Works.com',  
        @body = 'Don''t forget to print a report for the sales force.',  
        @subject = 'Reminder';  
GO

INSERT INTO Sales.Customer VALUES (1993, 1994, 3, 'AW00030118', '2495B4EB-FE8B-459E-A1B6-DBA25C04E626', '2014-09-12 11:15:07.263')


--DML AFTER TRIGGER TO ENFORCE BUSINESS RULES BETWEEN TWO TABLES
-- This trigger prevents a row from being inserted in the Purchasing.PurchaseOrderHeader 
-- table when the credit rating of the specified vendor is set to 5 (below average).  
  
CREATE TRIGGER Purchasing.LowCredit ON Purchasing.PurchaseOrderHeader  
AFTER INSERT  
AS  
IF (ROWCOUNT_BIG() = 0)
RETURN;
IF EXISTS (SELECT *  
           FROM Purchasing.PurchaseOrderHeader AS p   
           JOIN inserted AS i   
           ON p.PurchaseOrderID = i.PurchaseOrderID   
           JOIN Purchasing.Vendor AS v   
           ON v.BusinessEntityID = p.VendorID  
           WHERE v.CreditRating = 5  
          )  
BEGIN  
RAISERROR ('A vendor''s credit rating is too low to accept new  
purchase orders.', 16, 1);  
ROLLBACK TRANSACTION;  
RETURN   
END;  
GO  
  
-- This statement attempts to insert a row into the PurchaseOrderHeader table  
-- for a vendor that has a below average credit rating.  
-- The AFTER INSERT trigger is fired and the INSERT transaction is rolled back.  
  
INSERT INTO Purchasing.PurchaseOrderHeader (RevisionNumber, Status, EmployeeID,  
VendorID, ShipMethodID, OrderDate, ShipDate, SubTotal, TaxAmt, Freight)  
VALUES (  
2  
,3  
,261  
,1652  
,4  
,GETDATE()  
,GETDATE()  
,44594.55  
,3567.564  
,1114.8638 );  
GO


--SERVER SCOPED DDL TRIGGER
CREATE TRIGGER ddl_trig_database   
ON ALL SERVER   
FOR CREATE_DATABASE   
AS   
    PRINT 'Database Created.'  
    SELECT EVENTDATA().value('(/EVENT_INSTANCE/TSQLCommand/CommandText)[1]','nvarchar(max)')  
GO  

CREATE DATABASE TestDb

DROP TRIGGER ddl_trig_database  
ON ALL SERVER;  
GO

DROP DATABASE TestDb


--VIEWING THE EVENTS THAT CAUSE A TRIGGER TO FIRE
SELECT TE.*  
FROM sys.trigger_events AS TE  
JOIN sys.triggers AS T ON T.object_id = TE.object_id  
WHERE T.parent_class = 0 AND T.name = 'safety';  
GO

--ENABLING AND DISABLING A TRIGGER
CREATE TRIGGER safetyNew   
ON DATABASE   
FOR DROP_TABLE, ALTER_TABLE   
AS   
   PRINT 'You must disable Trigger "safety" to drop or alter tables!'   
   ROLLBACK;  
GO  
DISABLE TRIGGER safety ON DATABASE;  
GO  
ENABLE TRIGGER safety ON DATABASE;  
GO


--UPDATE() 
IF EXISTS (SELECT name FROM sys.objects  
      WHERE name = 'reminder' AND type = 'TR')  
   DROP TRIGGER Person.reminder;  
GO  
CREATE TRIGGER reminder  
ON Person.Address  
AFTER UPDATE   
AS   
IF ( UPDATE (StateProvinceID) OR UPDATE (PostalCode) )  
BEGIN  
RAISERROR (50009, 16, 10)  
END;  
GO  
-- Test the trigger.  
UPDATE Person.Address  
SET PostalCode = 99999  
WHERE PostalCode = '12345';  
GO