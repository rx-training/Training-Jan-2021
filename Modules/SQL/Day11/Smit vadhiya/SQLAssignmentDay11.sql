

/***************************************************** DAY 11 ****************************************************/

CREATE TABLE Branch
(
	BName VARCHAR(18) CONSTRAINT pkBranch PRIMARY KEY,
	City VARCHAR(18) NOT NULL
)


CREATE TABLE Customer
(
	CName VARCHAR(19) CONSTRAINT pkCustomer PRIMARY KEY,
	City VARCHAR(18) NOT NULL
)
CREATE TABLE Deposit 
(
	 ActNo VARCHAR(5) CONSTRAINT pkDeposite PRIMARY KEY,
	 Cname VARCHAR(19)  CONSTRAINT fkCustomerDepo  FOREIGN KEY REFERENCES Customer(Cname),
	 Bname VARCHAR(18) CONSTRAINT fkBranchDepo  FOREIGN KEY REFERENCES Branch(Bname),
	 Amount INT NOT NULL,
	 Adate DATE NOT NULL

)

CREATE TABLE Borrow
(
	LoanNo VARCHAR(15) CONSTRAINT pkBorrow PRIMARY KEY,
	CName VARCHAR(19) CONSTRAINT fkCustomer  FOREIGN KEY REFERENCES Customer(Cname),
	BName VARCHAR(18) CONSTRAINT fkBranch  FOREIGN KEY REFERENCES Branch(Bname),
	Amount INT NOT NULL,
	
)

INSERT INTO Customer VALUES 
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


INSERT INTO Branch VALUES 
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

INSERT INTO Deposit VALUES
	(100,'ANIL','VRCE',1000,'1-Mar-1995'),
	(101,'SUNIL','AJNI',5000,'4-Jan-1996'),
	(102,'MEHUL','KAROLBAGH',3500,'17-Nov-1995'),
	(104,'MADHURI','CHANDNI',1200,'17-Dec-1995'),
	(105,'PRAMOD','M.G.ROAD',3000,'27-Mar-1996'),
	(106,'SANDIP','ANDHERI',2000,'31-Mar-1996'),
	(107,'SHIVANI','VIRAR',1000,'5-Sep-1995'),
	(108,'KRANTI','NEHRU PLACE',5000,'2-Jul-1995'),
	(109,'NAREN','POWAI',7000,'10-Aug-1995')

INSERT INTO  Borrow VALUES 
	(201,'ANIL','VRCE',1000),
	(206,'MEHUL','AJNI',5000),
	(311,'SUNIL','DHARAMPETH',3000),
	(321,'MADHURI','ANDHERI',2000),
	(375,'PRAMOD','VIRAR',8000),
	(481,'KRANTI','NEHRU PLACE',3000)
	

SELECT * FROM Branch
SELECT * FROM Customer
SELECT * FROM Deposit
SELECT * FROM Borrow
GO

/**************************************** ASSIGNMENT 1 ******************************************/

/*Q1: Create a Store Procedure which will accept name of the customer as input parameter and product
the following output, List Names of Customers who are Depositors and have Same Branch City as that
of input parameter customer’s Name.*/

CREATE PROCEDURE FindNameByCity 
@FirstName varchar(19)
AS BEGIN
	SELECT Cname FROM 
	(SELECT d.*,b.City FROM Deposit d JOIN Branch b ON d.Bname = b.BName) AS Tbl 
	WHERE City = (SELECT City FROM Customer WHERE Cname = @FirstName)
END
GO

--------------EXECUTION------------
EXECUTE FindNameByCity 'MADHURI'
GO
/*Q2: Create a Store Procedure which will accept name of the customer as input parameter and product
the following output List in JSON format, All the  Depositors Having Deposit in All 
the Branches where input parameter customer is Having an Account*/

CREATE PROCEDURE GetJson
	@FirstName varchar(19)
AS BEGIN
	SELECT d.* FROM 
	Deposit d JOIN Branch b ON d.Bname = b.BName 
	WHERE City IN (SELECT b.City FROM Deposit d JOIN Branch b ON d.Bname = b.BName WHERE Cname = @FirstName)  FOR JSON PATH
END

--------------EXECUTION------------
EXEC GetJson 'ANIL'
GO
/*Q3: Create a Store Procedure that will accept city name and returns the number of customers in that city.*/

CREATE PROCEDURE CountOfCustomer 
@City varchar(18) ,@Count int OUTPUT 
AS BEGIN
	SELECT @Count = COUNT(*) FROM Customer WHERE CITY = @City GROUP BY City 
END
GO


--------------EXECUTION------------
DECLARE @Answer int 
EXEC  CountOfCustomer 'MUMBAI', @Answer  OUTPUT
SELECT @Answer
GO

/*Q4: Create a Store Procedure which will accept city of the customer as input parameter and product 
the following output List in JSON format List All the Customers Living in city provided in input parameter
and Having the Branch City as MUMBAI or DELHI*/

CREATE PROCEDURE CustomerJson 
@City VARCHAR(18)
AS BEGIN
	SELECT * FROM Customer 
	WHERE City = 'MUMBAI' AND 
	CName IN (SELECT Cname FROM 
			  Deposit d JOIN Branch b ON d.Bname =b.BName 
			  WHERE City IN ('MUMBAI','DELHI')) FOR JSON AUTO
END

--------------EXECUTION------------
EXEC CustomerJson 'MUMBAI'
GO
/*Q5: Count the Number of Customers Living in the City where Branch is Located*/

CREATE PROCEDURE CName
AS BEGIN
	SELECT * FROM Customer WHERE City IN (SELECT City FROM  Branch)
END

--------------EXECUTION------------
EXEC CName
GO
/*Q6: Create a Procedure which will accept input in JSON parameter CustomerName,City, ACTNO,Branch,amount  
And insert these record in the Deposit table. Before inserting some validation should be done like amount
should be greater than 10Rs. and date should always be current date.*/

CREATE PROCEDURE InsertDataFromJson @JSON NVARCHAR(MAX)
AS BEGIN
	SET NOCOUNT ON
	--PROCEDURE BODY
	DECLARE @CName VARCHAR(19), @ActNo INT, @BName VARCHAR(18), @Amount INT,@Date DATE;
	--CURSOR DECLARE
	DECLARE MyCur CURSOR STATIC 
	FOR SELECT * FROM OPENJSON(@JSON)
	WITH (ActNo INT,CName VARCHAR(19), BName VARCHAR(18), Amount INT,Adate DATE)

	OPEN MyCur
	FETCH NEXT FROM MyCur INTO @ActNo, @CName, @BName ,@Amount ,@Date;
	IF @@CURSOR_ROWS > 0 --IF ANY ROW EXIST IN JSON THEN THOS WILL RETURN TRUE
	BEGIN
		WHILE @@FETCH_STATUS = 0
		BEGIN
			IF @Amount > 10 AND @Date =  convert(date,GETDATE())
			BEGIN
				INSERT INTO Deposit VALUES( @ActNo, @CName, @BName ,@Amount ,@Date)
			END
			ELSE 
			BEGIN
				RAISERROR ('ERROR : Invalid Input ',10,1)
			END
			FETCH NEXT FROM MyCur INTO @ActNo, @CName, @BName ,@Amount ,@Date;
		END
	END
	CLOSE MyCur
	DEALLOCATE MyCur
	SET NOCOUNT ON
END
GO

--------------EXECUTION------------

DECLARE @JSON NVARCHAR(MAX)
SET @JSON = '[{"ActNo":116,"CName":"MADHURI","BName":"ANDHERI","Amount": 30,"Adate":"'+convert(varchar,GETDATE())+'"},
			{"ActNo":112,"CName":"SANDIP","BName":"VIRAR","Amount": 5000,"Adate":"18-Sep-1995"},	  
			{"ActNo":113,"CName":"KRANTI","BName":"POWAI","Amount": 4,"Adate":"18-Mar-2021"}]'
			--DATE IS WRONG IN 2nd DATA AND
			--AMOUNT IS WRONG IN 3RD DATA SO 
			--ONLY FIRST DATA WILL INSERT INTO DEPOSITE TABLE 
EXEC InsertDataFromJson @JSON

