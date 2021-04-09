USE AdventureWorks2012

--creating trigger for insert operation
CREATE TRIGGER trgInsertShift
ON HumanResources.Shift FOR INSERT
AS
BEGIN
	DECLARE @MOdifieddate datetime
	SELECT @MOdifieddate = ModifiedDate from inserted
	IF (@MOdifieddate != GETDATE())
	BEGIN 
		PRINT 'The modified date should be current date HEnce, cannot insert'
		ROLLBACK TRANSACTION
	END
END
--Creating trigger for deletion operation
CREATE TRIGGER trgDeleteDepartment
ON HumanResources.Department
FOR DELETE
	AS 
		PRINT 'DELETION OF DEPARTMENT IS NOT ALLOWED'
		ROLLBACK TRANSACTION
		RETURN

SELECT * from HumanResources.Department
DELETE FROM HumanResources.Department WHERE DepartmentID = 16

-- Template generated from Template Explorer using:
-- Create Trigger (New Menu).SQL
--
-- Use the Specify Values for Template Parameters 
-- command (Ctrl-Shift-M) to fill in the parameter 
-- values below.
--
-- See additional Create Trigger templates for more
-- examples of different Trigger statements.
--
-- This block of comments will not be included in
-- the definition of the function.
-- ================================================
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		<Author,,Name>
-- Create date: <Create Date,,>
-- Description:	Checks the vendor credit 
--rating before allowing a new purchase order with the vendor to be inserted
-- =============================================
CREATE TRIGGER purchasing.NewPODetail2  
   ON  purchasing.purchaseOrderDetail
   AFTER  INSERT
AS 
BEGIN
	-- SET NOCOUNT ON added to prevent extra result sets from
	-- interfering with SELECT statements.
	SET NOCOUNT ON;

	IF @@ROWCOUNT= 1
	BEGIN
		UPDATE Purchasing.PurchaseOrderHeader SET 
		SubTotal = SubTotal +LineTotal FROM inserted
		WHERE PurchaseOrderHeader.PurchaseOrderID = inserted.PurchaseOrderID
	END
	ELSE
	BEGIN
		UPDATE Purchasing.PurchaseOrderHeader  
		SET SubTotal = SubTotal + (SELECT SUM(linetotal) FROM inserted 
		WHERE PurchaseOrderHeader.PurchaseOrderID = inserted .PurchaseOrderID)
			WHERE PurchaseOrderHeader.PurchaseOrderID IN (select PurchaseOrderID 
				FROM inserted)
	END
   
END
GO


--update trigger
CREATE TRIGGER trgupdateEmployeehPayHistory	
On humanresources.EmployeePayHistory
	FOR UPDATE
		AS
		IF UPDATE(RATE)
		BEGIN
			DECLARE @avgrate float
			SELECT @avgrate  = AVG(RATE) FROM HumanResources.EmployeePayHistory
			IF (@avgrate > 20)
			BEGIN
				PRINT'AVG rate can not be greater then 20'
				ROLLBACK TRANSACTION
			END
		END
	GO
DISABLE TRIGGER trgupdateEmployeehPayHistory	on humanresources.EmployeePayHistory
GO
ENABLE  TRIGGER trgupdateEmployeehPayHistory	on humanresources.EmployeePayHistory
GO
	SELECT * from HumanResources.EmployeePayHistory
	UPDATE HumanResources.EmployeePayHistory 
	SET Rate = 40 

	--After trigger
	CREATE TRIGGER trgDeleteShift
	ON humanresources.Shift
	AFTER DELETE
	AS
	PRINT ' SHIFT DELETED SUCCESSFULLY'
	GO
	DELETE FROM HumanResources.Shift WHERE ShiftID =1

	--Instred of Triggers
		CREATE TRIGGER trgDeletes ON
		humanResources.Employee
		INSTEAD OF DELETE
			AS
				PRINT 'CAN NOT DELETE IT'
			GO
			
--nested triggers
CREATE TABLE Del_save (logs varchar(max))
	CREATE TRIGGER Purchasing.savedel  
   ON Purchasing.PurchaseOrderDetail  
FOR DELETE  
AS  
   INSERT del_save  
   SELECT PurchaseOrderID FROM deleted
				

SELECT * FROM Del_save
SELECT * FROM Purchasing.PurchaseOrderDetail


CREATE TRigger reminder2
ON sales.customer
AFTER INSERT ,UPDATE, DELETE 
AS
	EXEC msdb.dbo.sp_send_dbmail 
	@profile_name = 'Administrator',
	@recipients = '@Tirth@adventureWorks.com',
	@body = 'Dont forget to Print a report for the sales force.',
	@subject = 'Reminder'
GO

UPDATE Sales.customer SET PersonID= 21 WHERE CustomerID = 1

--REcursive trigger
ALTER DATABASE ADVENTUREWORKS2012
SET RECURSIVE_TRIGGERS ON
Go
CREATE TABLE dbo.emp_mgr(
	emp char(30) PRIMARY KEY,
	mgr char(30) NULL FOREIGN KEY REFERENCES emp_mgr(emp),
	NOoFReports int Default 0)
	GO
CREATE TRIGGER dbo.emp_mgrins ON dbo.emp_mgr 
FOR INSERT 
AS
	DECLARE @e char(30) , @m char(30)
	DECLARE c1 CURSOR FOR 
	SELECT emp_mgr.emp
		FROM emp_mgr , inserted 
		WHERE emp_mgr.emp = inserted.mgr

	OPEN C1
		FETCH NEXT FROM c1 INTO @e
		WHILE @@FETCH_STATUS  = 0
		BEGIn
		UPDATE dbo.emp_mgr 
		SET emp_mgr.NOoFReports = emp_mgr.NOoFReports + 1
		WHERE emp_mgr.emp = @e
		FETCH NEXT FROM c1 INTO @e
		END
	CLOSE c1
	DEALLOCATE c1
	GO
CREATE TRIGGER dbo.emp_mgrupd ON dbo.emp_mgr FOR UPDATE AS
IF UPDATE(mgr)
BEGIN
	UPDATE dbo.emp_mgr 
	SET emp_mgr.NOoFReports = emp_mgr.NOoFReports + 1
	FROM Inserted 
	WHERE emp_mgr.emp = inserted.mgr
	UPDATE dbo.emp_mgr 
	SET emp_mgr.NOoFReports  = emp_mgr.NOoFReports - 1
	FROM deleted
	WHERE emp_mgr.emp = deleted.mgr
END
GO
INSERT dbo.emp_mgr(emp, mgr) VALUES  
    ('Harry', NULL)  
    ,('Alice', 'Harry')  
    ,('Paul', 'Alice')  
    ,('Joe', 'Alice')  
    ,('Dave', 'Joe');  
GO
SELECT emp,mgr,NoOfReports  
FROM dbo.emp_mgr; 
UPDATE dbo.emp_mgr SET mgr = 'harry' WHERE emp = 'Harry'
GO
SELECT emp,mgr,NoOfReports FROM emp_mgr;