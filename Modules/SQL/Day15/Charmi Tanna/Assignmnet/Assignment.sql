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

/*Problem Statement:At AdventureWorks, Inc., an employee named Sidney Higa, who is currently working as Production Technician – WC10 has been promoted as Marketing Manager. The employee ID of Sidney is 13. As a database developer, you need to update his records. This involves updating the title in the Employee table and updating the department history details.	You need to ensure that all the changes take effect. In addition, you need to ensure that no other transaction should be able to view the data being modified by the current transaction.*/USE AdventureWorks2012CREATE TABLE Employee(EmployeeID INT CONSTRAINT PK_Employee_EmployeeID PRIMARY KEY,EmployeeName VARCHAR(20),EmployeeTitle VARCHAR(40))DROP TABLE EmployeeINSERT INTO Employee VALUES(13,'Sidney Higa','Production Technician – WC10')INSERT INTO Employee VALUES(14,'Adam Smith','Technical Technician')INSERT INTO Employee VALUES(15,'John Higa','Accounting Manager')INSERT INTO Employee VALUES(16,'Rita Smith','Technical Consultant')INSERT INTO Employee VALUES(17,'Roy Higa','Auditor')SELECT * FROM EmployeeCREATE TABLE DepartmentHistory (DepartmentID INT, DepartmentName VARCHAR(20),EmployeeID INT CONSTRAINT FK_DepartmentHistory_EmployeeID FOREIGN KEY REFERENCES Employee(EmployeeID),EmployeeTitle VARCHAR(50))SELECT * FROM DepartmentHistoryDROP TABLE DepartmentHistoryINSERT INTO DepartmentHistory VALUES(101,'Sidney Higa',13,'Production Technician – WC10')INSERT INTO DepartmentHistory VALUES(102,'Adam Smith',14,'Technical Technician')INSERT INTO DepartmentHistory VALUES(103,'John Higa',15,'Accounting Manager')INSERT INTO DepartmentHistory VALUES(102,'Rita Smith',16,'Technical Consultant')INSERT INTO DepartmentHistory VALUES(103,'Roy Higa',17,'Auditor')CREATE OR ALTER PROCEDURE Department 
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