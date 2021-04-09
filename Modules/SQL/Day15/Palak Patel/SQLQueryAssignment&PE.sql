USE Day15

--Detroit Bank need to implement the transaction whenever the amount is transferred from one account to the another account.
CREATE TABLE Accounts (
	ActNo INT PRIMARY KEY NOT NULL,
	ActHolderName VARCHAR(50) NOT NULL,
	Amount MONEY NOT NULL
)

CREATE TABLE TransferLog (
	FromActNo INT CONSTRAINT fkFromActNo FOREIGN KEY REFERENCES dbo.Accounts(ActNo),
	ToActNo INT CONSTRAINT fkToActNo FOREIGN KEY REFERENCES dbo.Accounts(ActNo),
	Amount MONEY NOT NULL
)

GO
CREATE TRIGGER trgTransaction ON TransferLog AFTER INSERT
AS
BEGIN
	DECLARE @fees MONEY, @to INT, @from INT
	SELECT @fees = Amount, @to = ToActNo, @from = FromActNo FROM inserted
	IF (SELECT Amount FROM Accounts WHERE ActNo = @from)-@fees >= 0
	BEGIN
		UPDATE Accounts SET Amount = (Amount + @fees) WHERE ActNo = @to
		UPDATE Accounts SET Amount = (Amount - @fees) WHERE ActNo = @from
	END
	ELSE
		PRINT 'Not Enough Balance To Transfer Amount'
END
GO

BEGIN TRAN TR1
BEGIN TRY
	INSERT INTO TransferLog (ToActNo,FromActNo,Amount) VALUES (5,4,16000)
	COMMIT TRAN TR1
	PRINT 'Transaction Successful'
END TRY
BEGIN CATCH
	ROLLBACK TRAN TR1
	PRINT 'Transaction Rollback'
END CATCH

SELECT * FROM Accounts

--At AdventureWorks, Inc., an employee named Sidney Higa, who is currently working as Production Technician – WC10 
--has been promoted as Marketing Manager. The employee ID of Sidney is 50. As a database developer, you need to update 
--his records. This involves updating the title in the Employee table and updating the department history details.​
--You need to ensure that all the changes take effect. In addition, you need to ensure that no other transaction 
--should be able to view the data being modified by the current transaction.​
USE AdventureWorks2012 
SELECT * FROM HumanResources.Employee WHERE BusinessEntityID = 50
SELECT * FROM HumanResources.EmployeeDepartmentHistory WHERE BusinessEntityID = 50

SET TRANSACTION ISOLATION LEVEL
SERIALIZABLE
BEGIN TRAN TR2
BEGIN TRY
	UPDATE HumanResources.Employee SET JobTitle = 'Marketing Manager' WHERE BusinessEntityID = 50
	UPDATE HumanResources.EmployeeDepartmentHistory SET DepartmentID = (SELECT DepartmentID FROM HumanResources.Department WHERE Name = 'Marketing') WHERE BusinessEntityID = 50
	COMMIT TRANSACTION TR2
	PRINT 'Transaction Successful'
END TRY
BEGIN CATCH
	ROLLBACK TRANSACTION TR2
	PRINT 'Transaction Rollback'
END CATCH

