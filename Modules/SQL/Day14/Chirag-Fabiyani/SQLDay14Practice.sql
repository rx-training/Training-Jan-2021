

CREATE TRIGGER trgInsertShift
ON HumanResources.Shift
FOR INSERT
AS
	DECLARE @ModifiedDate datetime
	SELECT @ModifiedDate = ModifiedDate FROM Inserted
	IF(@ModifiedDate!=GETDATE())
	BEGIN
		PRINT 'The Modified Date should be current date'
		ROLLBACK TRANSACTION
	END

INSERT INTO HumanResources.Shift VALUES ('AfterNight','13:00:00','15:00:00','2021/03/21')

INSERT INTO HumanResources.Shift VALUES ('MidNight','12:00:00','15:00:00',GETDATE())


CREATE TRIGGER trgDeleteDepartment
ON HumanResources.Department
FOR DELETE
AS
PRINT 'Deletion of Department is not allowed'
ROLLBACK TRANSACTION
RETURN

DELETE FROM HumanResources.Department WHERE DepartmentID=16






CREATE TRIGGER trigUpdateEmployeePayHistory
ON HumanResources.EmployeePayHistory
FOR UPDATE
AS
IF UPDATE(Rate)
BEGIN
*+DECLARE @AvgRate float
SELECT @AvgRate = AVG(Rate)	FROM HumanResources.EmployeePayHistory
IF(@AvgRate>20)
BEGIN
PRINT 'The average value of rate cannot be more than 20'
ROLLBACK TRANSACTION
END
END

UPDATE HumanResources.EmployeePayHistory
SET Rate=1000
WHERE BusinessEntityID=3





CREATE TRIGGER trgDeleteShift ON HumanResources.Shift
AFTER DELETE
AS
PRINT 'Deletion Successful'

DELETE FROM HumanResources.Shift
WHERE ShiftID=4




CREATE TRIGGER trgDelete ON HumanResources.Shift
INSTEAD OF DELETE
AS
PRINT 'Project records cannot be deleted'




CREATE TRIGGER safety ON DATABASE
FOR DROP_TABLE, ALTER_TABLE
AS
PRINT 'You must disable the "safety" trigger to drop table'
ROLLBACK

CREATE TABLE emp(
	id int
)

DROP TABLE emp




ALTER TRIGGER HumanResources.trgInsertShift
ON HumanResources.Shift
FOR INSERT
AS
	DECLARE @ModifiedDate datetime
	SELECT @ModifiedDate = ModifiedDate FROM Inserted
	IF(@ModifiedDate!=GETDATE())
	BEGIN
		RAISERROR ('The Modified Date should be current date',10,1)
		ROLLBACK TRANSACTION
	END
	RETURN