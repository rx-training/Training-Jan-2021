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
