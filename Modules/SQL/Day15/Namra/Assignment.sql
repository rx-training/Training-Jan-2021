
CREATE TABLE AccountTypes(
	AccountTypeID INT NOT NULL CONSTRAINT pkAccountTypes PRIMARY KEY IDENTITY(1,1),
	TypeName VARCHAR(50) NOT NULL
);

CREATE TABLE Cities(
	CityID INT NOT NULL CONSTRAINT pkCities PRIMARY KEY IDENTITY(1,1),
	CityName VARCHAR(100) NOT NULL,
	Country VARCHAR(100) NOT NULL,
	Pincode VARCHAR(6) NOT NULL  CONSTRAINT chkPincode CHECK(Pincode LIKE '[1-9][0-9][0-9][0-9][0-9][0-9]')
);

CREATE TABLE Customer(
	CustomerID INT NOT NULL CONSTRAINT pkCustomer PRIMARY KEY IDENTITY (1,1),
	AccountNumber INT NOT NULL CONSTRAINT unqAccount UNIQUE,
	AccountTypeID INT NOT NULL CONSTRAINT fkCustomer FOREIGN KEY REFERENCES AccountTypes(AccountTypeID),
	FirstName VARCHAR(100) NOT NULL, 
	LastName VARCHAR(100) NOT NULL, 
	DOB DATE NOT NULL,
	ContactNumber VARCHAR(13) NOT NULL CONSTRAINT chkContactNumber CHECK(ContactNumber LIKE '[+][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]'),
	Email VARCHAR(100) NOT NULL,
	Gender VARCHAR(1) NOT NULL,
	Password VARCHAR(100) NOT NULL,
	DateOpened DATE DEFAULT GETDATE()
);

DROP TABLE Customer
CREATE TABLE CustomerAccount(
	CustomerID INT NOT NULL CONSTRAINT fkCustomerAccount FOREIGN KEY REFERENCES Customer(CustomerID),
	Balance MONEY NOT NULL
);

CREATE TABLE CustomerDetails(
	CustomerID INT NOT NULL CONSTRAINT fkCustomerAccountCustomerDetails FOREIGN KEY REFERENCES Customer(CustomerID),
	FatherName VARCHAR(100) NOT NULL, 
	MotherName VARCHAR(100) NOT NULL,
	Address VARCHAR(MAX) NOT NULL, 
	CityId INT NOT NULL CONSTRAINT fkCityIdCustomerDetaiks  FOREIGN KEY REFERENCES Cities(CityID), 
	Income MONEY NOT NULL, 
	Occupation VARCHAR(100) NOT NULL, 
	Salary MONEY NOT NULL, 
	MaritalStatus VARCHAR(1) NOT NULL
);

--Inserting data

INSERT INTO AccountTypes (TypeName) VALUES
	('Savings'),
	('Current');


INSERT INTO Cities (CityName, Country, Pincode) VALUES
	('Ahmedabad', 'India', '387000'),
	('Nadiad', 'India', '387001');

INSERT INTO Customer (AccountNumber, AccountTypeID, FirstName, LastName, DOB, ContactNumber, Email, Gender, Password) VALUES
	(01234567, 1, 'Namra', 'Patel', '1999-07-22', '+918487070712', 'namra@gmail.com', 'M', '123456'),
	(01234568, 1, 'Nihar', 'Sodha', '1999-07-23', '+918487070713', 'nihar@gmail.com', 'M', '123456');

SELECT * FROM Customer

INSERT INTO CustomerAccount (CustomerID, Balance) VALUES
	(1, 100000000),
	(2, 100000000);

INSERT INTO CustomerDetails (CustomerID, FatherName, MotherName, Address, CityId, Income, Occupation, Salary, MaritalStatus) VALUES
	(1, 'abc', 'def', 'ghi', 1, 5000000, 'Student', 0, 'S'),
	(2, 'aaa', 'bbb', 'ccc', 1, 5000000, 'Student', 0, 'S');

CREATE TABLE Transactions
(
	TransactionId INT CONSTRAINT pkTransactions PRIMARY KEY IDENTITY(1,1),
	Amount MONEY NOT NULL,
	AvailableBalance MONEY NOT NULL,
	AccountNumber INT CONSTRAINT fkAccountNumberInTransactionsTable FOREIGN KEY REFERENCES Customer(AccountNumber),
	FromAccountNumber INT CONSTRAINT fkFromAccountNumberInTransactionsTable FOREIGN KEY REFERENCES Customer(AccountNumber) DEFAULT NULL,
	ToAccountNumber INT CONSTRAINT fkToAccountNumberInTransactionsTable FOREIGN KEY REFERENCES Customer(AccountNumber) DEFAULT NULL,
	Type VARCHAR(10) NOT NULL,
	Status VARCHAR(10) NOT NULL,
	Reason VARCHAR(100) NOT NULL,
	TransactionTime TIME DEFAULT CURRENT_TIMESTAMP,
);

DROP TABLE Transactions

-- Detroit Bank need to implement the transaction whenever the amount is transferred from one account to the another account.

	CREATE PROCEDURE TransferMoney
	(@Amount MONEY, @AccountNumber INT, @FromAccount INT, @ToAccount INT)
	AS
	BEGIN
		-- condition for 
		IF(@FromAccount IS NOT NULL AND @ToAccount IS NOT NULL)
			RAISERROR('Please enter only one entry for FROMACCOUNT AND TOACCOUNT ',16,1)
		IF(@FromAccount IS NOT NULL)
			BEGIN 
				IF(@AccountNumber = @FromAccount)
					RAISERROR('Can''t transfer money',16,1)
				IF(@AccountNumber NOT IN (SELECT AccountNumber FROM Customer) 
					OR @FromAccount NOT IN (SELECT AccountNumber FROM Customer))
					RAISERROR('Account number is wrong',16,1)

				DECLARE @Balance MONEY = ((SELECT Balance FROM CustomerAccount WHERE CustomerID = (SELECT CustomerID FROM Customer WHERE AccountNumber = @AccountNumber)))

				IF(@Amount > (SELECT Balance FROM CustomerAccount WHERE CustomerID = (SELECT CustomerID FROM Customer WHERE AccountNumber = @FromAccount)))
					
				INSERT INTO Transactions (Amount, AvailableBalance, AccountNumber, FromAccountNumber,Type,Status,Reason) VALUES
								(@Amount,@Balance,@AccountNumber, @FromAccount,'Transfer','Failed', 'Transfered from'+CONVERT(VARCHAR(20),@FromAccount))

				ELSE
				BEGIN
					SET @Balance = @Balance + @Amount
					DECLARE @BalanceFrom MONEY = ((SELECT Balance FROM CustomerAccount WHERE CustomerID = (SELECT CustomerID FROM Customer WHERE AccountNumber = @FromAccount)))
					SET @BalanceFrom = @BalanceFrom - @Amount
					INSERT INTO Transactions (Amount, AvailableBalance, AccountNumber, FromAccountNumber,Type,Status,Reason) VALUES
								(@Amount,@Balance,@AccountNumber, @FromAccount,'Transfer','Succcess', 'Transfered from'+CONVERT(VARCHAR(20),@FromAccount))
					UPDATE CustomerAccount 
					SET Balance = @BalanceFrom
					WHERE CustomerID = (SELECT CustomerID FROM Customer WHERE AccountNumber = @FromAccount)
					
					UPDATE CustomerAccount 
					SET Balance = @Balance
					WHERE CustomerID = (SELECT CustomerID FROM Customer WHERE AccountNumber = @AccountNumber)
				END		
			END
		ELSE
			BEGIN		
				IF(@AccountNumber = @FromAccount)
					RAISERROR('Can''t transfer money',16,1)
				IF(@AccountNumber NOT IN (SELECT AccountNumber FROM Customer)
					OR @ToAccount NOT IN (SELECT AccountNumber FROM Customer))
					RAISERROR('Account number is wrong',16,1)
				DECLARE @BalanceSelf MONEY = ((SELECT Balance FROM CustomerAccount WHERE CustomerID = (SELECT CustomerID FROM Customer WHERE AccountNumber = 1234567)))
				IF(@BalanceSelf < @Amount)
					INSERT INTO Transactions (Amount, AvailableBalance, AccountNumber, ToAccountNumber,Type,Status,Reason) VALUES
								(@Amount,@BalanceSelf,@AccountNumber, @ToAccount,'Transfer','Failed', 'Transfered to'+CONVERT(VARCHAR(20),@ToAccount))
				ELSE 
					BEGIN 
						SET @BalanceSelf = @BalanceSelf - @Amount 
						INSERT INTO Transactions (Amount, AvailableBalance, AccountNumber, ToAccountNumber,Type,Status,Reason) VALUES
								(@Amount,@BalanceSelf,@AccountNumber, @ToAccount,'Transfer','Failed', 'Transfered to'+CONVERT(VARCHAR(20),@ToAccount))
						
						DECLARE @BalanceTo MONEY = ((SELECT Balance FROM CustomerAccount WHERE CustomerID = (SELECT CustomerID FROM Customer WHERE AccountNumber = @ToAccount)))
						SET @BalanceTo = @BalanceTo + @Amount
						
						UPDATE CustomerAccount 
						SET Balance = @BalanceTo
						WHERE CustomerID = (SELECT CustomerID FROM Customer WHERE AccountNumber = @ToAccount)
					
						UPDATE CustomerAccount 
						SET Balance = @BalanceSelf
						WHERE CustomerID = (SELECT CustomerID FROM Customer WHERE AccountNumber = @AccountNumber)
					END
			END
	END

	SET TRANSACTION ISOLATION LEVEL 
	SERIALIZABLE
	BEGIN TRANSACTION TransferAmount
	SET NOCOUNT ON
	BEGIN TRY
		 	EXECUTE dbo.TransferMoney '1000',123457,1234568,NULL
			COMMIT TRAN TransferAmount
	END TRY
	BEGIN CATCH
		PRINT 'SORRY ! You can''t transfer money.Something goes wrong'
		SELECT ERROR_MESSAGE()'Error Message'
		ROLLBACK TRAN TransferAmount
	END CATCH
	SET NOCOUNT OFF

	SELECT * FROM CustomerAccount
	SELECT * FROM Transactions