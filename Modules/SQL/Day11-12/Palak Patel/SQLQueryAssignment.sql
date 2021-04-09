USE DayEleven

CREATE TABLE Depostis (
	ActNo VARCHAR(5) PRIMARY KEY NOT NULL,
	Cname VARCHAR(19) CONSTRAINT fkCname FOREIGN KEY REFERENCES dbo.Customers(Cname),
	Bname VARCHAR(18) CONSTRAINT fkBname FOREIGN KEY REFERENCES dbo.Branches(Bname),
	Amount INT NOT NULL,
	Adate DATE NOT NULL,
)

INSERT INTO Depostis(ActNo, Cname, Bname, Amount,  Adate)  VALUES
	('100','ANIL','VRCE',1000,'1-Mar-1995'),
	('101','SUNIL','AJNI',5000,'4-Jan-1996'),
	('102','MEHUL','KAROLBAGH',3500,'17-Nov-1995'),
	('104','MADHURI','CHANDNI',1200,'17-Dec-1995'),
	('105','PRAMOD','M.G.ROAD',3000,'27-Mar-1996'),
	('106','SANDIP','ANDHERI',2000,'31-Mar-1996'),
	('107','SHIVANI','VIRAR',1000,'5-Sep-1995'),
	('108','KRANTI','NEHRU PLACE',5000,'2-Jul-1995'),
	('109','NAREN','POWAI',7000,'10-Aug-1995')

CREATE TABLE Branches (
	Bname VARCHAR(18) PRIMARY KEY NOT NULL,
	City VARCHAR(18) NOT NULL
)

INSERT INTO Branches (Bname, City) VALUES
	('VRCE','NAGPUR'),
	('AJNI','NAGPUR'),
	('KAROLBAGH','DELHI'),
	('CHANDNI','DELHI'),
	('DHARAMPETH','NAGPUR'),
	('M.G.ROAD','BANGLORE'),
	('ANDHERI','MUMBAI'),
	('VIRAR','MUMBAI'),
	('NEHRU PLACE','DELHI'),
	('POWAI','MUMBAI')


CREATE TABLE Customers (
	Cname VARCHAR(19) PRIMARY KEY NOT NULL,
	City VARCHAR(18) NOT NULL
)

INSERT INTO Customers(Cname, City) VALUES 
	('ANIL','KOLKATA'),
	('SUNIL','DELHI'),
	('MEHUL','BARODA'),
	('MANDAR','PATNA'),
	('MADHURI','NAGPUR'),
	('PRAMOD','NAGPUR'),
	('SANDIP','SURAT'),
	('SHIVANI','MUMBAI'),
	('KRANTI','MUMBAI'),
	('NAREN','MUMBAI')

INSERT INTO Customers (Cname, City) VALUES ('PALAK','MUMBAI'),('DIXITA','NAGPUR')

CREATE TABLE Borrows(
	LoanNo VARCHAR(5) PRIMARY KEY NOT NULL,
	Cname VARCHAR(19) CONSTRAINT fkCnameB FOREIGN KEY REFERENCES dbo.Customers(Cname),
	Bname VARCHAR(18) CONSTRAINT fkBnameB FOREIGN KEY REFERENCES dbo.Branches(Bname),
	AMOUNT INT NOT NULL
)

INSERT INTO Borrows(LoanNo,Cname,Bname,AMOUNT) VALUES
	('201','ANIL','VRCE',1000),
	('206','MEHUL','AJNI',5000),
	('311','SUNIL','DHARAMPETH',3000),
	('321','MADHURI','ANDHERI',2000),
	('375','PRAMOD','VIRAR',8000),
	('481','KRANTI','NEHRU PLACE',3000)

SELECT * FROM Depostis
SELECT * FROM Borrows
SELECT * FROM Branches
SELECT * FROM Customers

SELECT d.Cname,d.Bname FROM Depostis d WHERE d.Bname IN (SELECT Bname FROM Branches WHERE City = (SELECT br.City FROM Borrows b JOIN Branches br ON b.Bname=br.Bname WHERE b.Cname = 'SUNIL'))
--Q1: Create a Store Procedure which will accept name of the customer as input parameter and product the following output, List Names of Customers who are Depositors and have Same Branch City as that of input parameter customer’s Name.
GO
ALTER PROCEDURE GetCustomerDetail @CustName char(50)
AS
BEGIN
IF EXISTS (SELECT * FROM Depostis WHERE Cname = @CustName)
	BEGIN
	SELECT d.Cname, d.Bname FROM Depostis d WHERE d.Bname IN 
		(SELECT Bname FROM Branches WHERE City = 
		(SELECT br.City FROM Borrows b JOIN Branches br ON b.Bname=br.Bname WHERE b.Cname = @CustName))
	RETURN 0
	END
END
GO

EXEC GetCustomerDetail @CustName = 'SUNIL';
GO

SELECT Cname FROM Depostis WHERE Bname IN (SELECT Bname FROM Branches WHERE City=(SELECT b.City FROM Branches b JOIN Depostis d ON d.Bname=b.Bname WHERE d.Cname = 'MADHURI'))
--Q2: Create a Store Procedure which will accept name of the customer as input parameter and produce the following output List in JSON format, All the Depositors Having Deposit in All the Branches where input parameter customer is Having an Account
GO
CREATE PROCEDURE q2GetDepositors @CustName char(50)
AS
BEGIN
IF EXISTS (SELECT Bname FROM Depostis WHERE Cname = @CustName)
	BEGIN
	SELECT	ActNo AS '$.id', 
		Cname AS '$.info.Name',
		Bname AS '$.info.BranchName'
		FROM Depostis WHERE Bname IN 
		(SELECT Bname FROM Branches WHERE City=(SELECT b.City FROM Branches b JOIN Depostis d ON d.Bname=b.Bname WHERE d.Cname = @CustName))
	FOR JSON PATH
	RETURN 0
	END
END
GO

EXEC q2GetDepositors @CustName = 'MADHURI';
GO

SELECT COUNT(Cname) AS 'Number Of Customers' FROM Customers WHERE City = 'Mumbai' GROUP BY City
--Q3: Create a Store Procedure that will accept city name and returns the number of customers in that city.
GO 
CREATE PROCEDURE q3GetCount @CityName char(30)
AS
BEGIN
IF EXISTS (SELECT Cname FROM Customers WHERE City = @CityName)
	BEGIN
	SELECT COUNT(Cname) AS 'Number Of Customers' FROM Customers WHERE City = @CityName GROUP BY City
	RETURN 0
	END
END 
GO

EXEC q3GetCount @CityName = 'MUMBAI'
GO

SELECT c.Cname FROM Customers c JOIN Depostis d ON c.Cname=d.Cname WHERE c.City = 'MUMBAI' AND d.Bname IN (SELECT Bname FROM Branches WHERE City = 'DELHI' OR City = 'MUMBAI')
--Q4: Create a Store Procedure which will accept city of the customer as input parameter and product the following output List
--in JSON format List All the Customers Living in city provided in input parameter and Having the Branch City as MUMBAI or DELHI
GO
CREATE PROCEDURE q4GetCustomer @CityName char(50)
AS
BEGIN
IF EXISTS (SELECT c.Cname FROM Customers c JOIN Depostis d ON c.Cname=d.Cname WHERE c.City = @CityName AND d.Bname IN (SELECT Bname FROM Branches WHERE City = 'DELHI' OR City = 'MUMBAI'))
	BEGIN 
	SELECT c.Cname AS '$.Name' FROM Customers c JOIN Depostis d ON c.Cname=d.Cname WHERE c.City = @CityName 
		AND d.Bname IN (SELECT Bname FROM Branches WHERE City = 'DELHI' OR City = 'MUMBAI') FOR JSON PATH
	RETURN 0
	END
ELSE
	PRINT 'No Such Record Exists'
END
GO

EXEC q4GetCustomer @CityName = 'DELHI'
GO

EXEC q4GetCustomer @CityName = 'MUMBAI'
GO


SELECT COUNT(Cname) FROM Customers WHERE City = (SELECT City FROM Branches WHERE Bname = 'VRCE') GROUP BY City
--Q5: Count the Number of Customers Living in the City where Branch is Located
GO
ALTER PROCEDURE q5GetCustomer @BranchName CHAR(30)
AS
BEGIN
IF EXISTS (SELECT City FROM Branches WHERE Bname = @BranchName)
	BEGIN
	SELECT COUNT(Cname) AS 'Customer Count' FROM Customers WHERE City = (SELECT City FROM Branches WHERE Bname = @BranchName) GROUP BY City
	RETURN 0
	END
ELSE
	PRINT 'No Such Record Found'
END
GO

EXEC q5GetCustomer @BranchName = 'VRCE'
GO


--Q6: Create a Procedure which will accept input in JSON parameter CustomerName,City, ACTNO,Branch,amount 
--And insert these record in the Deposit table. Before inserting some validation should be done like amount should be greater than 10Rs. 
--and date should always be current date.
GO
CREATE PROCEDURE q6GetData @json NVARCHAR(MAX)
AS
BEGIN
IF EXISTS (SELECT * FROM Depostis)
SET NOCOUNT ON
	DECLARE DataCursor CURSOR STATIC FOR 
		SELECT * FROM OPENJSON(@json) WITH
			(CName VARCHAR(30),
			City VARCHAR(30),
			ActNo VARCHAR(30),
			BranchName VARCHAR(30),
			Amount MONEY)
		OPEN DataCursor
		DECLARE @CName VARCHAR(30), @City VARCHAR(30), @ActNo VARCHAR(30), @BName VARCHAR(30), @Amnt MONEY
		IF(@@CURSOR_ROWS > 0)
		BEGIN 
			FETCH NEXT FROM DataCursor INTO @CName, @City, @ActNo, @BName, @Amnt
			WHILE @@FETCH_STATUS = 0
			BEGIN
				IF @Amnt < 10
					PRINT 'Can not Enter Record For less than 10 rupees'
				ELSE
				BEGIN
					DECLARE @Date DATE = GETDATE()
					INSERT INTO Depostis
					VALUES (@ActNo, @CName, @BName, @Amnt, @Date)
				END
				FETCH NEXT FROM DataCursor INTO @CName, @City, @ActNo, @BName, @Amnt
			END
		END
	CLOSE DataCursor
	DEALLOCATE DataCursor
	SET NOCOUNT OFF
END
GO

DECLARE @jsonData NVARCHAR(MAX) 
SET @jsonData = N'[
	{
		"CName" : "PALAK",
		"City" : "MUMBAI",
		"ActNo" : "123",
		"BranchName" : "AJNI",
		"Amount" : "1200"
	},
	{
		"CName" : "DIXITA",
		"City" : "NAGPUR",
		"ActNo" : "145",
		"BranchName" : "KAROLBAGH",
		"Amount" : "15"
	}
]'

EXEC q6GetData @json = @jsonData
GO

SELECT * FROM Depostis