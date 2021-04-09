USE day5

CREATE TRIGGER reminder1  
ON Employees  
AFTER INSERT, UPDATE   
AS RAISERROR ('Notify Customer Relations', 16, 10);  
GO
INSERT INTO Employees
VALUES('410','a','aa',5000,'12-12-1999',0,0)

-- Trigger valid for multirow and single row inserts  
-- and optimal for single row inserts.  
USE AdventureWorks2012;  
GO  
CREATE TRIGGER NewPODetail3  
ON Purchasing.PurchaseOrderDetail  
FOR INSERT AS  
IF @@ROWCOUNT = 1  
BEGIN  
   UPDATE Purchasing.PurchaseOrderHeader  
   SET SubTotal = SubTotal + LineTotal  
   FROM inserted  
   WHERE PurchaseOrderHeader.PurchaseOrderID = inserted.PurchaseOrderID  

END  
ELSE  
BEGIN  
      UPDATE Purchasing.PurchaseOrderHeader  
   SET SubTotal = SubTotal +   
      (SELECT SUM(LineTotal)  
      FROM inserted  
      WHERE PurchaseOrderHeader.PurchaseOrderID  
       = inserted.PurchaseOrderID)  
   WHERE PurchaseOrderHeader.PurchaseOrderID IN  
      (SELECT PurchaseOrderID FROM inserted)  
END;

SELECT * FROM Purchasing.PurchaseOrderHeader

IF (ROWCOUNT_BIG() = 0)
RETURN;

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
INSERT INTO Sales.Customer(PersonID,StoreID,TerritoryID,rowguid)
	VALUES (NULL,934,1,'3F5AE95E-B87D-4AED-95B4-D3797AFCB74F')
SELECT * FROM Sales.Customer

-- This trigger prevents a row from being inserted in the Purchasing.PurchaseOrderHeader 
-- table when the credit rating of the specified vendor is set to 5 (below average).  
  
CREATE TRIGGER Purchasing.LowCredit 
ON Purchasing.PurchaseOrderHeader  
AFTER INSERT  
AS  
IF (ROWCOUNT_BIG() = 0)
RETURN;
IF EXISTS (SELECT *  
           FROM Purchasing.PurchaseOrderHeader AS p   
           JOIN inserted AS i   
           ON p.PurchaseOrderID =i.PurchaseOrderID  
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

CREATE TRIGGER safety   
ON DATABASE   
FOR DROP_SYNONYM  
AS   
IF (@@ROWCOUNT = 0)
RETURN;
   RAISERROR ('You must disable Trigger "safety" to remove synonyms!', 10, 1)  
   ROLLBACK  
GO  
DROP TRIGGER safety  
ON DATABASE;  
GO

CREATE TRIGGER ddl_trig_database   
ON ALL SERVER   
FOR CREATE_DATABASE   
AS   
    PRINT 'Database Created.'  
    SELECT EVENTDATA().value('(/EVENT_INSTANCE/TSQLCommand/CommandText)[1]','nvarchar(max)')  
GO  
DROP TRIGGER ddl_trig_database  
ON ALL SERVER;  
GO

CREATE DATABASE newaa
DROP DATABASE newaa

CREATE TRIGGER Sales.bonus_reminder  
ON Sales.SalesPersonQuotaHistory  
WITH ENCRYPTION  
AFTER INSERT, UPDATE   
AS RAISERROR ('Notify Compensation', 16, 10);  
GO  

-- Now, change the trigger.  
ALTER TRIGGER Sales.bonus_reminder  
ON Sales.SalesPersonQuotaHistory  
AFTER INSERT  
AS RAISERROR ('Notify Compensation', 16, 10);  
GO

DROP TRIGGER Sales.bonus_reminder

IF OBJECT_ID ('Sales.bonus_reminder', 'TR') IS NOT NULL  
   DROP TRIGGER Sales.bonus_reminder;

USE AdventureWorks2012;   
GO  
SELECT  name, parent_id, create_date, modify_date, is_instead_of_trigger  
FROM sys.triggers  
WHERE type = 'TR';   
GO

USE AdventureWorks2012;   
GO  
SELECT OBJECTPROPERTY(OBJECT_ID(N'Person.iuPerson'), 'ExecIsInsteadOfTrigger');   
GO

CREATE TRIGGER safety   
ON DATABASE   
FOR DROP_TABLE, ALTER_TABLE   
AS   
   PRINT 'You must disable Trigger "safety" to drop or alter tables!'   
   ROLLBACK;
ALTER TABLE HumanResources.Department
ADD  new1 int

DROP TRIGGER safety
ON DATABASE
SELECT * FROM HumanResources.Department

CREATE TRIGGER AfterInsertTrigger
ON Employees
AFTER INSERT
AS
PRINT 'Insert'
GO
CREATE TRIGGER InsteadOfInsertTrigger
ON Employees
INSTEAD OF INSERT
AS
PRINT 'Insert INSTEAD OF'
GO

CREATE TRIGGER InsteadOfInsertTrigger
ON Employees
INSTEAD OF INSERT
AS
BEGIN
	SET NOCOUNT ON
	UPDATE Employees
	SET Last_name = 'ab' 
	FROM Employees e
	JOIN deleted d ON d.Emp_ID = e.Emp_ID
	WHERE e.Last_Name= 'aa'

END
GO
INSERT INTO Employees
VALUES('111','a','aa',5000,'12-12-1999',0,0)


USE day5
SELECT * FROM Employees
DROP TRIGGER InsteadOfInsertTrigger

CREATE TRIGGER trgshiftinsert
ON humanresources.Shift
FOR INSERT
AS
	DECLARE @ModifiedDate datetime
	SELECT @ModifiedDate = ModifiedDate FROM inserted
	IF(@ModifiedDate != GETDATE())
	BEGIN
		PRINT 'not current, not inserted.'
	ROLLBACK TRANSACTION
END

CREATE TRIGGER trgDteDept
ON Humanresources.Department
FOR DELETE
AS 
PRINT 'Deletion is not allowed'
ROLLBACK TRANSACTION
RETURN

DELETE  FROM HumanResources.Department WHERE DepartmentID=0

CREATE TRIGGER trgupdateemphis
ON Humanresources.EmployeePayHistory
FOR UPDATE
AS
IF UPDATE(RATE)
BEGIN
DECLARE @AvgRate float
SELECT @AvgRate = AVG(Rate)
FROM HumanResources.EmployeePayHistory
IF(@AvgRate<20)
BEGIN
PRINT 'connot be more than 20'
IF(@AvgRate>20)
BEGIN
PRINT 'conntbe more than 200'
ROLLBACK TRANSACTION
END
END
END
UPDATE HumanResources.EmployeePayHistory
SET Rate=15
WHERE BusinessEntityID=1

CREATE TRIGGER trgDelete
ON employees
AFTER DELETE
AS 
PRINT 'deleted'

DELETE FROM Employees
WHERE emp_id=11

CREATE TRIGGER tgddeleteinsteadof
ON employees1
INSTEAD OF DELETE
AS
PRINT 'CAN NOT DELETED'

DELETE FROM Employees1
WHERE EmployeeID = 105

CREATE TRIGGER ForSafety
ON employees
FOR DROP_TABLE,ALTER_TABLE
AS
PRINT 'Disable trigger "ForSafety" to drop or alter table!'
ROLLBACK


ALTER TRIGGER HumanResources.trgshiftinsert
ON humanresources.Shift
FOR INSERT
AS
	DECLARE @ModifiedDate datetime
	SELECT @ModifiedDate = ModifiedDate FROM inserted
	IF(@ModifiedDate != GETDATE())
	BEGIN
		PRINT 'not current, not inserted.'
	ROLLBACK TRANSACTION
END
RETURN

DROP TRIGGER HumanResources.trgshiftinsert