/* Detroit Bank need to implement the transaction whenever the amount is transferred from one account to the another account. */
CREATE PROCEDURE TransferAmount @SenderAccountNumber INT , @ReceiverAccountNumber INT, @MoneytobeTransfer INT
AS
	SET NOCOUNT ON
	BEGIN TRANSACTION
	IF @SenderAccountNumber NOT IN (SELECT AccountNumber FROM DetroitBank ) OR @ReceiverAccountNumber NOT IN (SELECT AccountNumber FROM DetroitBank )
	BEGIN 
		PRINT 'Transaction Failed'
	END
	ELSE
	BEGIN
		UPDATE DetroitBank SET Balance = Balance - @MoneytobeTransfer WHERE AccountNumber = @SenderAccountNumber 
		UPDATE DetroitBank SET Balance = Balance + @MoneytobeTransfer WHERE AccountNumber = @ReceiverAccountNumber
	END
	COMMIT TRANSACTION
	SET NOCOUNT OFF
	
GO
EXEC TransferAmount  1,2,4000
GO
