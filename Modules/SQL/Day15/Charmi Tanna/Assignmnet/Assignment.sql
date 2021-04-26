CREATE DATABASE TRANSACTIONASSIGNMENT
USE TRANSACTIONASSIGNMENT


CREATE TABLE Customer
(
AccountNumber VARCHAR(20),
CustomerName VARCHAR(20),
CustomerAddress VARCHAR(50),
Balance MONEY
);
DROP TABLE Customer
INSERT INTO Customer VALUES('DUB1000','Neha','Xyz Appartment,Ahmedabad','40000.00');
INSERT INTO Customer VALUES('DUB1001','Aditi','Abc Appartment,Ahmedabad','50000.00');
INSERT INTO Customer VALUES('DUB1002','Bansari','Pqr Appartment,Ahmedabad','60000.00');
SELECT * FROM Customer

CREATE TABLE Credit
(
AccountNumber VARCHAR(20),
AmountReceived MONEY,
DepositorAccountNumber VARCHAR(20)
);
DROP TABLE Credit
SELECT * FROM Credit
CREATE TABLE Debit
(
AccountNumber VARCHAR(20),
AmountTransferred MONEY,
TransferredAccountNumber VARCHAR(20)
);

DROP TABLE Debit
SELECT * FROM Debit

CREATE OR ALTER PROCEDURE BankTransaction @AccountNumber VARCHAR(20),@Amount MONEY,@Trans VARCHAR(20)
AS
BEGIN
BEGIN TRY
BEGIN TRANSACTION
INSERT INTO Debit VALUES(@AccountNumber,@Amount,@Trans)
INSERT INTO Credit VALUES(@Trans,@Amount,@AccountNumber)
UPDATE Customer SET Balance = Balance + @Amount WHERE AccountNumber=@Trans
UPDATE Customer SET Balance = Balance - @Amount WHERE AccountNumber=@AccountNumber
COMMIT TRANSACTION
END TRY
BEGIN CATCH
ROLLBACK TRANSACTION
END CATCH
END
BankTransaction 'DUB1002','9000.00','DUB1001'

/*Problem Statement:
AS
BEGIN
BEGIN TRY
BEGIN TRANSACTION
UPDATE Employee SET EmployeeTitle = 'Marketing Manager' WHERE EmployeeID = 13
UPDATE DepartmentHistory SET EmployeeTitle = 'Marketing Manager' WHERE EmployeeID = 13
COMMIT TRANSACTION
END TRY
BEGIN CATCH
ROLLBACK TRANSACTION
END CATCH
END
Department
Department 'DUB1002','9000.00','DUB1001'