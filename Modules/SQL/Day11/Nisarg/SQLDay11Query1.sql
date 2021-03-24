
-----Assignment ----------------


SET QUOTED_IDENTIFIER ON
CREATE TABLE Customers(
	CName VARCHAR(19) NOT NULL CONSTRAINT pkCustomers PRIMARY KEY,  
	City VARCHAR(18) NOT NULL
);

INSERT INTO Customers (CName, City) VALUES 
	('Anil','Kolkata'),
	('Sunil','Delhi'),
	('Mehul','Baroda'),
	('Mandar','Patna'),
	('Madhuri','Nagpur'),
	('Pramod','Nagpur'),
	('Sandip','Surat'),
	('Shivani','Mumbai'),
	('Kranti','Mumbai'),
	('Naren','Mumbai');

SET ANSI_NULLS ON 
SET QUOTED_IDENTIFIER ON 
CREATE TABLE Branches
(
	BName VARCHAR(18) CONSTRAINT pkBranches PRIMARY KEY,
	City VARCHAR(18) NOT NULL
); 

INSERT INTO Branches (BName, City) VALUES 
	('VRCE','NAGPUR'),
	('AJNI','NAGPUR'),
	('KAROLBAGH','DELHI'),
	('CHANDNI','DELHI'),
	('DHARAMPETH','NAGPUR'),
	('M.G.ROAD','BANGLORE'),
	('ANDHERI','MUMBAI'),
	('VIRAR','MUMBAI'),
	('NEHRU PLACE','DELHI'),
	('POWAI','MUMBAI');

SET ANSI_NULLS ON 
SET QUOTED_IDENTIFIER ON
CREATE TABLE Borrowers
(
	LoanNo VARCHAR(5) NOT NULL CONSTRAINT pkBorrowers PRIMARY KEY,
	CName VARCHAR(19) NOT NULL CONSTRAINT fkCNameBorrow FOREIGN KEY (CName) REFERENCES Customers(CName),
	BName VARCHAR(18) NOT NULL CONSTRAINT fkBNameBorrow FOREIGN KEY (BName) REFERENCES Branches(BName),
	Amount INT NOT NULL
)

INSERT INTO Borrowers (LoanNo, CName, BName, Amount) VALUES
	('201','Anil','VRCE',1000),
	('206','Mehul','AJNI',5000),
	('311','Sunil','DHARAMPETH',3000),
	('321','Madhuri','ANDHERI',2000),
	('375','Pramod','VIRAR',8000),
	('481','Kranti','NEHRU PLACE',3000);
SET ANSI_NULLS ON 
SET QUOTED_IDENTIFIER ON 
GO
CREATE TABLE Deposits
(
	Actno VARCHAR(5) NOT NULL CONSTRAINT pkDeposit PRIMARY KEY,
	CName VARCHAR(19)NOT NULL CONSTRAINT fkCNameDeposit FOREIGN KEY (CName) REFERENCES Customers(CName),
	BName VARCHAR(18) NOT NULL CONSTRAINT fkBNameDeposit FOREIGN KEY (BName) REFERENCES Branches(BName), 
	Amount INT NOT NULL,
	ADate DATE NOT NULL
)

INSERT INTO Deposits(Actno,CName,BName,Amount,ADate) Values
	('100','Anil','VRCE',1000,'1-MAR-1995'),
	('101','Sunil','AJNI',5000,'4-JAN-1996'),
	('102','Mehul','KAROLBAGH',3500,'17-NOV-1995'),
	('104','Madhuri','CHANDNI',1200,'17-DEC-1995'),
	('105','Pramod','M.G.ROAD',3000,'27-Mar-1996'),
	('106','Sandip','ANDHERI',2000,'31-Mar-1996'),
	('107','Shivani','VIRAR',1000,'5-SEP-1995'),
	('108','Kranti','NEHRU PLACE',5000,'2-JUL-1995'),
	('109','Naren','POWAI',7000,'10-AUG-1995');

/*  Q1: Create a Store Procedure which will accept name of the customer as input parameter and product
	the following output, List Names of Customers who are Depositors and have Same Branch City as that
	of input parameter customer’s Name.*/

	CREATE PROCEDURE Procedure1
		@customer VARCHAR(100)
	AS 
	BEGIN SELECT d.CName
		FROM Deposits d 
		WHERE d.BName IN (
			SELECT b.BName
			FROM Customers c
			JOIN Branches b ON b.City = c.City WHERE c.CName = @customer
		)	
	END

	EXECUTE Procedure1 'Madhuri'

/*  Q2: Create a Store Procedure which will accept name of the customer as input parameter and product 
	the following output List in JSON format, All the Depositors Having  Deposit in
	All the Branches where input parameter customer is Having an Account*/

	CREATE PROCEDURE Procedure2
		@customer VARCHAR(50)
	AS 
	BEGIN
		SELECT CName
		FROM Deposits
		WHERE BName IN(
			SELECT BName
			FROM Branches 
			WHERE City = (
				SELECT City
				FROM Customers
				WHERE CName = @customer)
				) FOR JSON PATH, ROOT('Depositors')
	END

	EXECUTE Procedure2 'Madhuri'

--  Q3: Create a Store Procedure that will accept city name and returns the number of customers in that city.

	CREATE PROCEDURE Procedure3
		@city VARCHAR(20)
		WITH ENCRYPTION
	AS
	BEGIN
		SELECT CName
		FROM Customers
		WHERE City = @city
	END

	EXECUTE Procedure3 'NAGPUR'


/*  Q4: Create a Store Procedure which will accept city of the customer as input parameter and product 
	the following output List in JSON format List All the Customers Living in city provided in input 
	parameter and Having the Branch City as MUMBAI or DELHI*/

	CREATE PROCEDURE Procedure4
		@city VARCHAR(50)
	AS
	BEGIN
		SELECT c.CName 
		FROM Deposits d
			JOIN Customers c ON c.CName = d.CName
			JOIN Branches b ON b.BName = d.BName
		WHERE c.City = @city AND (c.City= 'MUMBAI' OR c.City = 'DELHI') 
		FOR JSON PATH , ROOT('Customers');
	END

	EXECUTE Procedure4 'MUMBAI'

--  Q5: Count the Number of Customers Living in the City where Branch is Located

	CREATE PROCEDURE Procedure5
		@branch VARCHAR(50)
	AS 
	BEGIN
		RETURN(
			SELECT COUNT(c.CName)
			FROM Branches b
				JOIN Customers c ON b.City = c.City
			WHERE b.BName = @branch)
	END
	DECLARE @temp INT;
	EXECUTE @temp=Procedure5 'VRCE';
	PRINT('Number of customers : '+CAST(@temp AS VARCHAR(3)));
/*  Q6: Create a Procedure which will accept input in JSON parameter CustomerName,City, ACTNO,Branch,amount  
	And insert these record in the Deposit table. Before inserting some validation should be done like amount
	should be greater than 10Rs. and date should always be current date.*/

	CREATE PROCEDURE Procedure6  
		@depositDataJson NVARCHAR(MAX)
	AS
	BEGIN
		DECLARE customerCursor CURSOR 
		STATIC FOR
			SELECT * 
			FROM OPENJSON(@depositDataJson)
				WITH (
						CustomerName VARCHAR(50),
						City VARCHAR(50),
						ACTNo VARCHAR(3),
						Branch VARCHAR(50),
						Amount MONEY
					)

		OPEN customerCursor

			DECLARE @CustomerName VARCHAR(50), @City VARCHAR(50), @ACTNo VARCHAR(3), @BranchName VARCHAR(50), @Amount MONEY
			
			PRINT @@CURSOR_ROWS
			IF(@@CURSOR_ROWS > 0)
			BEGIN
				FETCH NEXT FROM customerCursor INTO @CustomerName, @City, @ACTNo, @BranchName, @Amount
				WHILE @@FETCH_STATUS = 0
				BEGIN 
					IF @Amount < 10
						PRINT 'Amount Less Than 10 For ' + @CustomerName
					ELSE
					BEGIN
						DECLARE @CurrentDate DATE = CONCAT(DATEPART(DD, GETDATE()), '-' ,DATENAME(MM, GETDATE()), '-', DATEPART(YY, GETDATE()))
						PRINT @CurrentDate
						INSERT INTO Deposits (Actno, CName, BName, Amount, ADate) VALUES
							(@ACTNo, @CustomerName, @BranchName, @Amount, @CurrentDate)
					END
					FETCH NEXT FROM customerCursor INTO @CustomerName, @City, @ACTNo, @BranchName, @Amount
				END
			END

			CLOSE customerCursor
			DEALLOCATE customerCursor
	END

	


	DECLARE @depositData NVARCHAR(MAX) = '
		[
			{
				"CustomerName" : "Anil",
				"City" : "NAGPUR",
				"ACTNo" : "110",
				"Branch" : "VRCE",
				"Amount" : 500
			},
			{
				"CustomerName" : "Madhuri",
				"City" : "NAGPUR",
				"ACTNo" : "111",
				"Branch" : "AJNI",
				"Amount" : 1500
			}
		]' 

	EXECUTE Procedure6 @depositData;

	SELECT * FROM Deposits
