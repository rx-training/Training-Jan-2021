USE Day15

CREATE TABLE Accounts(
	AccountNo INT PRIMARY KEY,
	AccountName VARCHAR(50),
	AccountType VARCHAR(50), --Savings/Current
	IFSCCode INT,
	Gender CHAR(1),
	TotalBalance FLOAT
)

CREATE TABLE Transactions(
	TransactionId INT PRIMARY KEY,
	AccountNo INT CONSTRAINT fkAccountNo FOREIGN KEY REFERENCES Accounts(AccountNo),
	TransactionType VARCHAR(50), --Debited/Credited
	TransactionAmount FLOAT
)

INSERT INTO Accounts 
VALUES(
	001, 'Fiyona', 'Current', 87654, 'F', 50000
),
(
	002, 'Divyang', 'Current', 76453, 'M', 44000
),
(
	003, 'Nita', 'Savings', 76435, 'F', 22000
)


--Transaction 1
BEGIN TRAN tr1
BEGIN
	BEGIN TRY
		UPDATE Accounts
		SET TotalBalance = TotalBalance - 3000
		WHERE AccountNo = 1

		INSERT INTO Transactions
		VALUES(
			111, 001, 'Debited', 3000
		)
		COMMIT TRANSACTION tr1

		PRINT 'Transaction done'
	END TRY
	BEGIN CATCH
		ROLLBACK TRAN tr1
		PRINT 'Transaction rollbacked'
	END CATCH
END


--Transaction 2
BEGIN TRAN tr2
BEGIN
	BEGIN TRY
		UPDATE Accounts
		SET TotalBalance = TotalBalance + 3000
		WHERE AccountNo = 2

		INSERT INTO Transactions
		VALUES(
			112, 002, 'Credited', 3000
		)
		COMMIT TRANSACTION tr2

		PRINT 'Transaction done'
	END TRY
	BEGIN CATCH
		ROLLBACK TRAN tr2
		PRINT 'Transaction rollbacked'
	END CATCH
END


--Transaction 3
BEGIN TRAN tr3
BEGIN
	UPDATE Accounts
	SET TotalBalance = TotalBalance + 13000
	WHERE AccountNo = 3

	INSERT INTO Transactions
	VALUES(
		113, 003, 'Credited', 13000
	)
	ROLLBACK TRANSACTION tr3

	PRINT 'Transaction not done'
END