CREATE DATABASE PRACTICE12
USE PRACTICE12
CREATE DATABASE PRACTICES12
USE PRACTICES12
CREATE TABLE Branch
(
	Bname VARCHAR(18) CONSTRAINT PK_Branch_Bname PRIMARY KEY,
	City VARCHAR(18)
);
SELECT * FROM Branch
DROP TABLE Branch
INSERT INTO Branch VALUES('Vrce','Nagpur');
INSERT INTO Branch VALUES('Ajni','Nagpur');
INSERT INTO Branch VALUES('Karolbagh','Delhi');
INSERT INTO Branch VALUES('Chandni','Delhi');
INSERT INTO Branch VALUES('Dharampeth','Nagpur');
INSERT INTO Branch VALUES('M.G.ROAD','Banglore');
INSERT INTO Branch VALUES('Andheri','Mumbai');
INSERT INTO Branch VALUES('Virar','Mumbai');
INSERT INTO Branch VALUES('Nehru Place','Delhi');
INSERT INTO Branch VALUES('Powai','Mumbai');
INSERT INTO Branch VALUES('Dadar','Mumbai');
CREATE TABLE DATES
(
HDate DATE CONSTRAINT chk CHECK (HDate IN(CONVERT(VARCHAR,HDate,6)))
)
DROP TABLE DATES
SELECT * FROM DATES
INSERT INTO DATES VALUES('10-mar-2000')
SELECT REPLACE(CONVERT(VARCHAR,HDate,106),' ','-')FROM DATES

-->CREATING CUSTOMER TABLE
CREATE TABLE Customer
(
CName VARCHAR(19) CONSTRAINT PK_Customer_CName PRIMARY KEY,
City VARCHAR(18)
);
SELECT * FROM Customer
DROP TABLE Customer
INSERT INTO Customer VALUES('Anil','Kolkata');
INSERT INTO Customer VALUES('Sunil','Delhi');
INSERT INTO Customer VALUES('Mehul','Baroda');
INSERT INTO Customer VALUES('Mandar','Patna');
INSERT INTO Customer VALUES('Madhuri','Nagpur');
INSERT INTO Customer VALUES('Pramod','Nagpur');
INSERT INTO Customer VALUES('Sandip','Surat');
INSERT INTO Customer VALUES('Shivani','Mumbai');
INSERT INTO Customer VALUES('Kranti','Mumbai');
INSERT INTO Customer VALUES('Naren','Mumbai');
INSERT INTO Customer VALUES('Naman','Mumbai');

DROP TABLE Customer
-->CREATING BORROW TABLE
CREATE TABLE Borrow
(
LoanNo VARCHAR(5) CONSTRAINT PK_Borrow_LoanNo PRIMARY KEY,
CName VARCHAR(19) CONSTRAINT FK_Borrow_CName FOREIGN KEY REFERENCES Customer(CName),
BName VARCHAR(18) CONSTRAINT FK_Borrow_BName FOREIGN KEY REFERENCES Branch(BName),
Amount INT
);
DROP TABLE Borrow
SELECT * FROM Borrow
INSERT INTO Borrow VALUES(201,'Anil','Vrce',1000);
INSERT INTO Borrow VALUES(206,'Mehul','Ajni',5000);
INSERT INTO Borrow VALUES(311,'Sunil','Dharampeth',3000);
INSERT INTO Borrow VALUES(321,'Madhuri','Andheri',2000);
INSERT INTO Borrow VALUES(375,'Pramod','Virar',8000);
INSERT INTO Borrow VALUES(481,'Kranti','Nehru Place',3000);

CREATE TABLE Deposit 
(
ACTNO VARCHAR(5) CONSTRAINT PK_Deposit_ACTNO  PRIMARY KEY,
CName VARCHAR(19) CONSTRAINT FK_Deposit_CName FOREIGN KEY REFERENCES Customers(CName),
BName VARCHAR(18) CONSTRAINT FK_Deposit_BName FOREIGN KEY REFERENCES Branch(BName),
Amount INT,
Adate DATE
);
SELECT * FROM Deposit
DROP TABLE Deposit 
INSERT INTO Deposit VALUES(100,'Anil','Vrce',1000,'1-Mar-1995')
INSERT INTO Deposit VALUES(101,'Sunil','Ajni',5000,'4-Jan-1996')
INSERT INTO Deposit VALUES(102,'Mehul','Karolbagh',3500,'17-Nov-1995')
INSERT INTO Deposit VALUES(104,'Madhuri','Chandni',1200,'17-Dec-1995')
INSERT INTO Deposit VALUES(105,'Pramod','M.G.ROAD',3000,'27-Mar-1996')
INSERT INTO Deposit VALUES(106,'Sandip','Andheri',2000,'31-Mar-1996')
INSERT INTO Deposit VALUES(107,'Shivani','Virar',1000,'5-Sep-1995')
INSERT INTO Deposit VALUES(108,'Kranti','Nehru Place',5000,'2-Jul-1995')
INSERT INTO Deposit VALUES(109,'Naren','Powai',7000,'10-Aug-1995')
SELECT* FROM Customer
SELECT* FROM Deposit
-->Q1: Create a Store Procedure which will accept name of the customer as input parameter and product the following output, List Names of Customers who are Depositors and have Same Branch City as that of input parameter customer’s Name.
CREATE PROCEDURE spByCustomerCityName
@Name VARCHAR(19)
AS
BEGIN
SELECT c.CName FROM Customer c JOIN Deposit d ON c.CName = d.CName JOIN Branch b ON b.BName = d.BName WHERE b.City IN(SELECT City FROM Branch WHERE BName IN(SELECT BName FROM Deposit WHERE CName =@Name))
END
spByCustomerCityName 'Kranti'


-->Q2: Create a Store Procedure which will accept name of the customer as input parameter and produce the following output List in JSON format, All the Depositors Having Depositors Having Deposit in All the Branches where input parameter customer is Having an Account
CREATE PROCEDURE spByCustomerName1
@Name VARCHAR(19)
AS
BEGIN
SELECT d.CName AS 'Customer Name' FROM Deposit d JOIN Branch b ON d.BName = b.BName JOIN Customer c ON b.City = c.City WHERE c.CName=@Name FOR JSON PATH
END
spByCustomerName1 'Kranti'
-->Q3: Create a Store Procedure that will accept city name and returns the number of customers in that city.
CREATE PROCEDURE spByCityCount
@City VARCHAR(18)
AS
BEGIN
SELECT COUNT(CName) FROM Customer WHERE CName IN(SELECT CName FROM Customer WHERE City = @City)
END
spByCityCount 'Mumbai'
-->Q4: Create a Store Procedure which will accept city of the customer as input parameter and product the following output List in JSON format List All the Customers Living in city provided in input parameter and Having the Branch City as MUMBAI or DELHI
CREATE PROCEDURE spByCustomerCity2
@City VARCHAR(18)
AS
BEGIN
SELECT d.CName AS 'Customer Name' FROM Deposit d JOIN Branch b ON b.BName = d.BName JOIN Customer c ON  d.CName = c.CName WHERE c.City =@City AND (b.City = 'Delhi' OR b.City='Mumbai') FOR JSON PATH
END
spByCustomerCity2 'Baroda'

-->Q5: Count the Number of Customers Living in the City where Branch is Located
CREATE OR ALTER PROCEDURE spByCountCustomer   @BranchName VARCHAR(50)
AS
BEGIN
SELECT COUNT(CName) FROM Customer WHERE City IN( SELECT City FROM Branch WHERE City = Customer.City AND BName =@BranchName)
END
spByCountCustomer 'Powai'

-->Q6: Create a Procedure which will accept input in JSON parameter CustomerName,City, ACTNO,Branch,amount  
-->And insert these record in the Deposit table. Before inserting some validation should be done like amount should be greater than 10Rs. and date should always be current date.

ALTER PROCEDURE spProcedure @JSON1 NVARCHAR(MAX)
AS 
BEGIN
DECLARE @actno VARCHAR(5)
DECLARE @cname VARCHAR(19)
DECLARE @bname VARCHAR(18)
DECLARE @amount INT
DECLARE @adate DATE
SELECT @actno = ACTNO , @cname = CName, @bname = BName , @Amount = Amount , @adate = Adate FROM OPENJSON(@JSON1)
WITH(ACTNO VARCHAR(5) '$.ACTNO', CName VARCHAR(19) '$.CName' , BName VARCHAR(18) '$.BName',Amount INT '$.Amount' , Adate DATE 'Adate')
INSERT INTO Deposit VALUES (@actno,@cname,@bname,@amount,@adate)
END
DROP PROCEDURE spProcedure
DECLARE @json1 NVARCHAR(MAX)
SET @JSON1=N'[{"ACTNO":"$.ACTNO","CName":"$.CName","BName":"$.BName","Amount":"$.Amount","Adate":"$.Amount"}]'
INSERT INTO Deposit VALUES(110,'Naman','Dadar',10000,'11-Aug-1995')
EXECUTE spProcedure @json1
GO

SELECT * FROM Deposit
ACTNO VARCHAR(5) CONSTRAINT PK_Deposit_ACTNO  PRIMARY KEY,
CName VARCHAR(19) CONSTRAINT FK_Deposit_CName FOREIGN KEY REFERENCES Customer(CName),
BName VARCHAR(18) CONSTRAINT FK_Deposit_BName FOREIGN KEY REFERENCES Branch(BName),
Amount INT,
Adate DATE