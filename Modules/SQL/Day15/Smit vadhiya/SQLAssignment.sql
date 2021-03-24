
CREATE TABLE UserAccount
(
	UserId INT CONSTRAINT pkUserAccount PRIMARY KEY,
	Name VARCHAR(30),
	Balance INT DEFAULT 0
)

CREATE TABLE MyTransaction
(
	SenderId INT CONSTRAINT fk_SenderId_MyTransaction FOREIGN KEY REFERENCES UserAccount(UserId),
	ReciverId INT CONSTRAINT fk_ReciverId_MyTransaction FOREIGN KEY REFERENCES UserAccount(UserId),
	Amount INT
)

INSERT INTO UserAccount VALUES
		(1,'MEHUL',300),
		(2,'RAHUL',DEFAULT),
		(3,'SAUMYA',50000),
		(4,'VIRAL',6000),
		(5,'VIRAT',3467),
		(6,'DHARMA',12467),
		(7,'SWATI',234),
		(8,'MANDIRA',3222),
		(9,'MAHENDRA',90690)
GO


SELECT * FROM UserAccount
GO
		
ALTER TRIGGER TransferMyMoney ON MyTransaction FOR INSERT
AS BEGIN
	SET NOCOUNT ON
	BEGIN TRANSACTION 

	DECLARE @Amount INT,@SenderId INT,@ReciverId INT, @UserId INT,@SenderBalance INT,@ReciverBalance INT

	SELECT @Amount = Amount FROM inserted
	SELECT @SenderId = SenderId FROM inserted
	SELECT @ReciverId = ReciverId FROM inserted
	SELECT @SenderBalance = Balance FROM UserAccount WHERE UserId = @SenderId
	SELECT @ReciverBalance = Balance FROM UserAccount WHERE UserId = @ReciverId

	UPDATE UserAccount SET Balance = @SenderBalance- @Amount WHERE UserId = @SenderId
	UPDATE UserAccount SET Balance = @ReciverBalance+ @Amount WHERE UserId = @ReciverId

	IF @SenderId = @ReciverId
	BEGIN
		PRINT 'BOTH USER CAN NOT BE SAME'
		ROLLBACK TRANSACTION
	END
	ELSE 
	BEGIN
		IF @Amount > @SenderBalance
		BEGIN
			PRINT 'LOW BALANCE'
			ROLLBACK TRANSACTION
		END
		ELSE 
		BEGIN
			
			
			PRINT 'AMOUNT IS TRANSFERED' 
			COMMIT TRANSACTION
		END
	END
	SET NOCOUNT OFF
END


INSERT INTO MyTransaction VALUES (2,4,300)

SELECT * FROM UserAccount
SELECT * FROM MyTransaction
