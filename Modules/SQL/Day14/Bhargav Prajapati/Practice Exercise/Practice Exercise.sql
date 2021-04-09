--------------------------------DML TRIGGER---------------------------------


--------------------------------AFTER TRIGGER-------------------------------

----------------Insert Trigger----------------------------------

CREATE TRIGGER TriggerForInsert 
ON HumanResources.Shift
FOR INSERT 
AS
BEGIN
	DECLARE @modificationdate datetime
	SELECT @modificationdate=ModifiedDate FROM inserted
	IF(@modificationdate != GETDATE())
	BEGIN
			PRINT('MODIFIED DATE SHOULD BE CURRENT DATE  HENCE , CANNOT INSERTED ')
			ROLLBACK TRANSACTION
	END
END

DROP TRIGGER TriggerForInsert
INSERT INTO HumanResources.Shift (ShiftID,Name,StartTime,EndTime,ModifiedDate) 
VALUES(5,'NOON','10:00:00','11:00:00','2021-03-22 00:00:00.000')
SELECT * FROM HumanResources.Shift

-------------------------DELETE TRIGGER------------------------------
CREATE TRIGGER TriggerDelete
ON HumanResources.Department
FOR DELETE
AS
BEGIN
	PRINT 'DELETION OF DEPARTMENT IS NOT ALLOWED'
	ROLLBACK TRANSACTION
END

SELECT * FROM HumanResources.Department
DELETE FROM HumanResources.Department WHERE DepartmentID='1'

------------------------UPDATE TRIGGER ------------------------
CREATE TRIGGER TRIGGERUPDATE
ON HumanResources.EmployeePayHistory
FOR UPDATE
AS
BEGIN

DECLARE @AVGRATE Float
SELECT @AVGRATE=AVG(Rate) FROM HumanResources.EmployeePayHistory
IF(@AVGRATE>20)
	BEGIN
	PRINT 'THE AVERAGE VALUE CAN NOT GRATTER THEN 20'
	ROLLBACK TRANSACTION
	END
END
UPDATE HumanResources.EmployeePayHistory SET Rate=5.5 WHERE  BusinessEntityID=4
SELECT * FROM HumanResources.EmployeePayHistory

-----------------AFTER TRIGGER-------------------

SELECT * FROM Person.ContactType

CREATE TRIGGER Deleteoperation1 
ON Person.ContactType
AFTER DELETE
AS
BEGIN
	DECLARE @id int
	SELECT @id=deleted.ContactTypeID  FROM deleted
PRINT 'SUCCESS FULLY DELETED ID '+SPACE(1)+ CAST(@id AS Varchar(15))+SPACE(1)+' RECORD'
END

DELETE Person.ContactType WHERE ContactTypeID=5

-------------------------INSTED OF TRIGGER--------------------
CREATE TRIGGER TriggerInstedof
ON HumanResources.Department
INSTEAD OF DELETE
AS
BEGIN
PRINT 'NOT Allow To DELETE THE Record'
ROLLBACK TRANSACTION
END
DELETE HumanResources.Department WHERE  DepartmentID=1

---------------------------DDL TRIGGER---------------------
ALTER TRIGGER DDLTRIGGER ON DATABASE
FOR DROP_TABLE,ALTER_TABLE,CREATE_TABLE
AS
BEGIN
	PRINT 'YOU CAN NOT DROP,CREATE AND ALTER THE TABLE'
	ROLLBACK 
END

CREATE TABLE  TEST(id Int)


-----------------DELETING TABLE--------------------
DROP TRIGGER  HumanResources.TriggerInstedof

----------------DISABLE TRIGGER-------------------
DISABLE TRIGGER DDLTRIGGER ON DATABASE

--------------------ENABLE TRIGGER-------------------------
ENABLE TRIGGER DDLTRIGGER ON DATABASE



