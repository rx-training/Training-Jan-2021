USE day5

--Detroit Bank need to implement the transaction whenever the amount is transferred 
--from one account to the another account.

IF OBJECT_ID('BANKING1', 'U') IS NOT NULL
DROP TABLE BANKING1
CREATE TABLE BANKING1 
	(
	ACCOUNT INT CONSTRAINT pk PRIMARY KEY, 
	NAME VARCHAR(MAX), 
	BALANCE MONEY
	)
GO

INSERT INTO BANKING1 VALUES(1,'GHANESH',50000)
INSERT INTO BANKING1 VALUES(2,'PRASAD',25000)
INSERT INTO BANKING1 VALUES(3,'YOGITA',35000)
INSERT INTO BANKING1 VALUES(4,'GAUTAM',4000)
GO

ALTER PROCEDURE FUNDSTRANSFER(@SOURCEID INT, @DESTID INT, @AMT INT)
AS
BEGIN
	DECLARE @COUNT1 INT, @COUNT2 INT
	SET TRANSACTION ISOLATION LEVEL
	SERIALIZABLE
	BEGIN TRANSACTION
	SET NOCOUNT ON
	
	UPDATE BANKING1 SET BALANCE=BALANCE-@AMT WHERE ACCOUNT=@SOURCEID AND BALANCE>@AMT AND @AMT>0 AND BALANCE-@AMT>2000
	SET @COUNT1=@@ROWCOUNT
	UPDATE BANKING1 SET BALANCE=BALANCE+@AMT WHERE ACCOUNT=@DESTID
	SET @COUNT2=@@ROWCOUNT

	IF @COUNT1=@COUNT2
	BEGIN
	COMMIT
	PRINT 'AMOUNT HAS BEEN TRANFERRED'
	END

	ELSE
	BEGIN 
	ROLLBACK
	PRINT 'AMOUNT TRANFERED FAILED'
	END
END

EXEC FUNDSTRANSFER 1,2,1357
EXEC FUNDSTRANSFER 4,2,1000-- faild min bal of acc must be 2000
EXEC FUNDSTRANSFER 1,2, -5000 --failed -ve money will not transfer
EXEC FUNDSTRANSFER 1,5, 5000 --failed acc. 5 is not avaliable
EXEC FUNDSTRANSFER 1,3, 45000 -- failed more money transfer from avaliable

SELECT * FROM BANKING1

--At AdventureWorks, Inc., an employee named Sidney Higa, who is currently 
--working as Production Technician – WC10 has been promoted as Marketing Manager. 
--The employee ID of Sidney is 13. As a database developer, you need to 
--update his records. This involves updating the title in the Employee table 
--and updating the department history details.
	
--You need to ensure that all the changes take effect. In addition, 
--you need to ensure that no other transaction should be able to view 
--the data being modified by the current transaction.

SET TRANSACTION ISOLATION LEVEL
SERIALIZABLE
BEGIN TRAN t1
BEGIN TRY
	UPDATE Humanresources.employee 
	SET jobtitle='Marketing Manager'
	WHERE businessentityID=48

	UPDATE Humanresources.employeedepartmenthistory 
	SET Departmentid =(SELECT Departmentid 
	FROM Humanresources.department WHERE Name='Marketing')
	WHERE businessentityID=48

	COMMIT TRAN t1
	SELECT	'TRANSACTION EXCECUTED'
END TRY
BEGIN CATCH
	ROLLBACK TRAN t1
	SELECT	'TRANSACTION EXCECUTED'
END CATCH

SELECT * FROM Humanresources.employee
SELECT * FROM Humanresources.employeedepartmenthistory
SELECT * FROM Humanresources.department

USE AdventureWorks2012
