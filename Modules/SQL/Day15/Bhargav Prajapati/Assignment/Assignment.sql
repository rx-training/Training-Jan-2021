USE Assignment

CREATE TABLE DetroitBank(
AccountNumber int,
Name varchar(60),
Email varchar(60),
Amount int 
)
INSERT INTO DetroitBank (AccountNumber,Name,Email,Amount)VALUES (123456,'Jenil','jenil123@gmail.com',5000),
																(78910,'Darshan','darshan456@gmail.com',7000),
																(111213,'Vishal','vishal789@gmail.com',10000),
																(141516,'Dixit','dixit101112@gmail.com',12000),
																(171819,'Parth','Parth111213@gmail.com',14000)

CREATE PROCEDURE TransactionofBank 
@AccountNoSender int,
@AccountNoReceiver int,
@AmountTransfer int
AS
BEGIN
		
	
	IF @AmountTransfer < (SELECT Amount FROM DetroitBank WHERE AccountNumber= @AccountNoSender)
	BEGIN
		BEGIN TRANSACTION BankTranscation

			UPDATE DetroitBank SET Amount=Amount+@AmountTransfer WHERE AccountNumber=@AccountNoReceiver
			UPDATE DetroitBank SET Amount=Amount-@AmountTransfer WHERE AccountNumber=@AccountNoSender
	
		COMMIT TRANSACTION BankTranscation
		PRINT ' SuccessFull Transaction  '

	END
	

	ELSE
		BEGIN
			ROLLBACK TRANSACTION  BankTranscation
			PRINT ' UnsuccessFull Transaction  '
		END
END


EXECUTE TransactionofBank 141516,111213,2000

SELECT * FROM DetroitBank