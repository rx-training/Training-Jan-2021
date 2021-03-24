USE DetroitUnitedBank;

CREATE TABLE AccountTypes(
	AccountTypeId INT NOT NULL CONSTRAINT pkAccountTypes PRIMARY KEY IDENTITY(1,1),
	AccountName VARCHAR(50) NOT NULL
);

INSERT INTO AccountTypes (AccountName) VALUES
	('Savings'),
	('Current');


CREATE TABLE Addresses
(
	AddressId INT CONSTRAINT pkAddresses PRIMARY KEY IDENTITY(1,1),
	Address VARCHAR(255) NOT NULL,
	PinCode VARCHAR(10) NOT NULL,
	City VARCHAR(50) NOT NULL,
	State VARCHAR(50) NOT NULL,
	Country VARCHAR(50) NOT NULL
);

INSERT INTO Addresses (Address, PinCode, City, State, Country) VALUES
	('Kapadvanj Road', '387330', 'Nadiad', 'Gujarat', 'India'),
	('Naroda', '382330', 'Ahmedabad', 'Gujarat', 'India');



CREATE TABLE Customers
(
	CustomerId INT CONSTRAINT pkCustomers PRIMARY KEY IDENTITY(1,1),
	FullName VARCHAR(255) NOT NULL,
	Email VARCHAR(100) NOT NULL,
	ContactNumber VARCHAR(15) NOT NULL,
	Password VARCHAR(25) NOT NULL
);


INSERT INTO Customers (FullName, Email, ContactNumber, Password) VALUES
	('Niharsinh Bharatsinh Sodhaparmar', 'niharsodha17@gmail.com', '7202016399', '123456');


CREATE TABLE CustomerDetails
(
	CustomerId INT CONSTRAINT fkCustomerIdInCustomerDetailsTable FOREIGN KEY REFERENCES Customers(CustomerId),
	DOB DATE NOT NULL,
	Gender VARCHAR(5) NOT NULL,
	MaritalStatus VARCHAR(1) NOT NULL,
	FatherName VARCHAR(100) NOT NULL, 
	MotherName VARCHAR(100) NOT NULL,
	Occupation VARCHAR(25) NOT NULL,
	Salary MONEY NOT NULL,
	Income VARCHAR(25) NOT NULL, 
	AddressId INT NOT NULL CONSTRAINT fkAddressIdInCustomerDetailsTable FOREIGN KEY REFERENCES Addresses(AddressId)
);

INSERT INTO CustomerDetails (CustomerId, DOB, Gender, MaritalStatus, FatherName, MotherName, Occupation, Salary, Income, AddressId) VALUES
	(1, '2000-05-21', 'M', 'S', 'Bharatsinh Adesinh Sodhaparmar', 'Shakuntalaben Bharatsinh Sodhaparmar', 'Student', 0, '2to5', 1);


CREATE TABLE Accounts
(
	CustomerId INT NOT NULL CONSTRAINT fkCustomerIdInAccountsTable FOREIGN KEY REFERENCES Customers(CustomerId),
	AccountNumber BIGINT NOT NULL CONSTRAINT unqAccountNumber UNIQUE,
	AccountTypeId INT NOT NULL CONSTRAINT fkAccountTypeIdInAccountsTable FOREIGN KEY REFERENCES AccountTypes(AccountTypeId),
	Balance MONEY NOT NULL DEFAULT 0,
	DateOpened DATE DEFAULT GETDATE()
);

SELECT * FROM Accounts;

INSERT INTO Accounts (CustomerId, AccountNumber, AccountTypeId, Balance) VALUES
	(1, 11010106205494, 1, 50000),
	(1, 11010107414264, 2, 50000);


CREATE TABLE Transactions
(
	TransactionId INT CONSTRAINT pkTransactions PRIMARY KEY IDENTITY(1,1),
	Amount MONEY NOT NULL,
	AvailableBalance MONEY DEFAULT NULL,
	AccountNumber BIGINT CONSTRAINT fkAccountNumberInTransactionsTable FOREIGN KEY REFERENCES Accounts(AccountNumber),
	FromAccountNumber BIGINT CONSTRAINT fkFromAccountNumberInTransactionsTable FOREIGN KEY REFERENCES Accounts(AccountNumber) DEFAULT NULL,
	ToAccountNumber BIGINT CONSTRAINT fkToAccountNumberInTransactionsTable FOREIGN KEY REFERENCES Accounts(AccountNumber) DEFAULT NULL,
	Type VARCHAR(10) NOT NULL,
	Status VARCHAR(10) DEFAULT NULL,
	Reason VARCHAR(100) DEFAULT NULL,
	TransactionTime TIME DEFAULT CURRENT_TIMESTAMP,
);


-- PROCEDURE FOR TRANSFER MONEY
CREATE OR ALTER PROCEDURE TransferMoney
	@Amount MONEY, 
	@AccountNumber BIGINT, 
	@ToAccount BIGINT
AS
BEGIN

	IF(@ToAccount IS NOT NULL AND @AccountNumber IS NOT NULL)
	BEGIN
		IF(@AccountNumber = @ToAccount)
			RAISERROR('Can''t transfer money in same Account',16,1);

		IF(@AccountNumber NOT IN (SELECT AccountNumber FROM Accounts))
			RAISERROR('Your account number is wrong',16,1);

		IF(@ToAccount NOT IN (SELECT AccountNumber FROM Accounts))
			RAISERROR('Another account number is wrong',16,1);

		DECLARE @Balance MONEY;
		SELECT @Balance = Balance FROM Accounts WHERE AccountNumber = @AccountNumber;

		IF(@Balance < @Amount)
		BEGIN
			INSERT INTO Transactions (Amount, AvailableBalance, AccountNumber, ToAccountNumber, Type, Status, Reason) VALUES 
				(@Amount, @Balance, @AccountNumber, @ToAccount, 'Transfer', 'Failed', 'Low Account Balance');
		END
		ELSE
		BEGIN
			UPDATE Accounts 
			SET Balance = Balance - @Amount
			WHERE AccountNumber = AccountNumber;

			UPDATE Accounts
			SET Balance = Balance + @Amount
			WHERE AccountNumber = @ToAccount;

			SET @Balance = @Balance - @Amount;

			INSERT INTO Transactions(Amount, AvailableBalance, AccountNumber, ToAccountNumber, Type, Status, Reason) VALUES
				(@Amount, @Balance, @AccountNumber, @ToAccount, 'Transfer', 'Succeeded', 'Succeeded');
			
			DECLARE @ToAccountBalance MONEY;
			SELECT @ToAccountBalance = Balance FROM Accounts WHERE AccountNumber = @ToAccount;
			INSERT INTO Transactions(Amount, AvailableBalance, AccountNumber, FromAccountNumber, Type, Status, Reason) VALUES
				(@Amount, @ToAccountBalance, @ToAccount, @AccountNumber, 'Transfer', 'Succeeded', 'Succeeded');
		END

	END
END


-- EXECUTION OF PROCEDURE
SET TRANSACTION ISOLATION LEVEL 
SERIALIZABLE
BEGIN TRANSACTION TransferAmount
SET NOCOUNT ON
BEGIN TRY
	 	EXECUTE dbo.TransferMoney '500',11010106205494,11010107414264
		COMMIT TRAN TransferAmount
END TRY
BEGIN CATCH
	PRINT 'SORRY ! You can''t transfer money.'
	PRINT ERROR_MESSAGE()
	ROLLBACK TRAN TransferAmount
END CATCH
SET NOCOUNT OFF

SELECT * FROM Accounts
SELECT * FROM Transactions