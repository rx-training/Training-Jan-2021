----------- Database -------------
CREATE TABLE Customers (
	CustomerID int PRIMARY KEY IDENTITY, 
	CustomerName varchar(50), 
	Balance float
);

CREATE TABLE MoneyTransaction (
	TransactionID int PRIMARY KEY IDENTITY, 
	SenderID int,
	receiverID int,
	Amount int,
	TransactionDate date
);

GO

INSERT INTO Customers VALUES ('Milit', 100000),('John', 5000);
GO

--------------------------- ASSIGNMENT ---------------------------
CREATE OR ALTER PROCEDURE sp_day15
	@sender int = NULL,
	@receiver int = NULL,
	@amount float = NULL
AS
SET NOCOUNT ON
BEGIN TRY
BEGIN TRANSACTION

IF @amount IS NULL OR @amount <= 0
BEGIN
	PRINT 'ENTER VALID AMOUNT'
	ROLLBACK TRANSACTION
	RETURN
END

IF (SELECT CustomerID FROM Customers WHERE CustomerID = @sender) IS NULL
BEGIN
	PRINT 'INVALID SENDER ID'
	ROLLBACK TRANSACTION
	RETURN
END

IF (SELECT CustomerID FROM Customers WHERE CustomerID = @receiver) IS NULL OR @sender = @receiver
BEGIN
	PRINT 'INVALID RECEIVER ID'
	ROLLBACK TRANSACTION
	RETURN
END

UPDATE Customers SET Balance = Balance - @amount WHERE CustomerID = @sender
UPDATE Customers SET Balance = Balance + @amount WHERE CustomerID = @receiver
INSERT INTO MoneyTransaction VALUES (@sender, @receiver, @amount, GETDATE())

PRINT 'TRANSACTION SUCCESSFULLY COMPLETED.'

COMMIT TRANSACTION
END TRY
BEGIN CATCH
	ROLLBACK TRANSACTION
	PRINT 'TRANSACTION FAILED !'
END CATCH
SET NOCOUNT OFF
GO

-- To run Stored Procedure --
EXEC sp_day15 @sender = 1, @receiver = 2, @amount = 1000
GO

-- To see updated data -- 
SELECT * FROM Customers
GO