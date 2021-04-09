/*** Day15 Assignment ***/

/* Detroit Bank need to implement the transaction whenever the amount is transferred from one account to the another account. */

CREATE TABLE DetroitBank(
	Id INT NOT NULL
	,Name VARCHAR(20)
	,Balance INT
)
GO

INSERT INTO DetroitBank 
VALUES 
(1,'abc',10000),
(2,'xyz',5000)
GO

CREATE PROCEDURE uspTransfer
	@Sender INT,
	@Reciver INT,
	@Amount INT
AS
	SET NOCOUNT ON
	BEGIN TRANSACTION myTran
	IF @Sender NOT IN (SELECT id FROM DetroitBank) OR @Reciver NOT IN (SELECT id FROM DetroitBank)
	BEGIN
	PRINT 'Please Enter Valid Sender Or Reciver Id'
	END
	ELSE
	BEGIN
	UPDATE DetroitBank
	SET Balance = Balance - @Amount WHERE Id = @Sender
	UPDATE DetroitBank
	SET Balance = Balance + @Amount WHERE Id = @Reciver
	PRINT 'Transaction Completed'
	END
	COMMIT TRANSACTION myTran
	SET NOCOUNT OFF
GO

EXECUTE uspTransfer 2,3,5000
GO

DROP PROCEDURE uspTransfer
GO

/* At AdventureWorks, Inc., an employee named Sidney Higa, who is currently working as Production Technician – WC10 has been 
promoted as Marketing Manager. The employee ID of Sidney is 13. As a database developer, you need to update his records. 
This involves updating the title in the Employee table and updating the department history details.
You need to ensure that all the changes take effect. In addition, you need to ensure that no other transaction should be
able to view the data being modified by the current transaction */

SET TRANSACTION ISOLATION LEVEL
READ COMMITTED
BEGIN TRANSACTION myTran
BEGIN TRY
	UPDATE HumanResources.Employee SET JobTitle = 'Marketing Manager' WHERE BusinessEntityID = 13
	UPDATE HumanResources.EmployeeDepartmentHistory SET DepartmentID = 
	(SELECT DepartmentID FROM HumanResources.Department WHERE Name='Marketing'),
	ModifiedDate = GETDATE()
	WHERE BusinessEntityID = 13
	COMMIT TRANSACTION myTran
	SELECT 'Transaction Executed'
END TRY
BEGIN CATCH
	ROLLBACK TRANSACTION myTran
	SELECT 'Transaction Rollback',ERROR_LINE(),ERROR_MESSAGE()
END CATCH
