USE Day11


--Q1: Create a Store Procedure which will accept name of the customer as input parameter and product the following output, 
--List Names of Customers who are Depositors and have Same Branch City as that of input parameter customer’s Name.
CREATE OR ALTER PROCEDURE prc1 @Cname VARCHAR(19)
AS
	SET NOCOUNT ON
	SELECT Cname
	FROM Deposit
	WHERE Bname IN
		(SELECT BNAME
		FROM Branch 
		WHERE CITY IN
			(SELECT b.City
			FROM Branch AS b
			JOIN Deposit AS d
			ON b.BNAME = d.Bname
			WHERE d.Cname = @Cname))
GO

EXECUTE prc1 @Cname = 'SANDIP'


--Q2: Create a Store Procedure which will accept name of the customer as input parameter and produce the following output List 
--in JSON format, All the Depositors Having Deposit in All the Branches where input parameter customer is Having an Account
CREATE OR ALTER PROCEDURE prc2 @Cname VARCHAR(19)
AS
	SELECT Cname
	FROM Deposit
	WHERE Bname IN
		(SELECT Bname
		FROM Branch
		WHERE CITY =
			(SELECT CITY
			FROM Customer
			WHERE Cname = @Cname))
	FOR JSON PATH
GO

EXEC prc2 @Cname = 'Madhuri'


--Q3: Create a Stored Procedure that will accept city name and returns the number of customers in that city.
CREATE OR ALTER PROCEDURE prc3 @CityName VARCHAR(18)
AS
	SELECT CNAME, CITY
	FROM Customer
	WHERE CITY = @CityName
GO

EXEC prc3 @CityName = 'Mumbai'


--Q4: Create a Store Procedure which will accept city of the customer as input parameter and product the following output 
--List in JSON format List All the Customers Living in city provided in input parameter and Having the Branch City as MUMBAI or DELHI
CREATE OR ALTER PROCEDURE prc4 @CityName VARCHAR(18)
AS
	SELECT CNAME
	FROM Customer
	WHERE CITY IN
		(SELECT CITY
		FROM Branch
		WHERE CITY = @CityName AND (CITY IN('MUMBAI') OR CITY IN ('DELHI')))
	FOR JSON PATH
GO

EXEC prc4 @CityName = 'MUMBAI'


--Q5: Count the Number of Customers Living in the City where Branch is Located
CREATE OR ALTER PROCEDURE prc5 @Bname VARCHAR(18)
AS 
	SELECT COUNT(c.CNAME)
	FROM Customer AS c
	JOIN Branch AS b
	ON c.CITY = b.CITY
	WHERE b.BNAME = @Bname
GO

EXEC prc5 @Bname = 'VRCE'


--Q6: Create a Procedure which will accept input in JSON parameter CustomerName,City, ACTNO,Branch,amount 
--And insert these record in the Deposit table. Before inserting some validation should be done 
--like amount should be greater than 10Rs. and date should always be current date.
CREATE OR ALTER PROCEDURE prc6 @deposit VARCHAR(MAX)
AS
	SET NOCOUNT ON
	DECLARE custCursor CURSOR 
	STATIC FOR
	SELECT * 
	FROM OPENJSON(@deposit)
	WITH 
		(CustomerName VARCHAR(50),
		City VARCHAR(50),
		ACTNo VARCHAR(3),
		Branch VARCHAR(50),
		Amount MONEY)
	OPEN custCursor
	DECLARE @Cname VARCHAR(50), @City VARCHAR(50), @ACTNO VARCHAR(3), @Bname VARCHAR(50), @Amount MONEY
	PRINT @@CURSOR_ROWS
	IF(@@CURSOR_ROWS > 0)
	BEGIN
		FETCH NEXT FROM custCursor INTO @Cname, @City, @ACTNO, @Bname, @Amount
		WHILE @@FETCH_STATUS = 0
		BEGIN 
			IF @Amount < 10
				PRINT 'Amount less than 10 for ' + @Cname
			ELSE
			BEGIN
				DECLARE @Date DATE = CONCAT(DATEPART(DD, GETDATE()), '-' ,DATENAME(MM, GETDATE()), '-', DATEPART(YY, GETDATE()))
				PRINT @Date
				INSERT INTO Deposit
				VALUES (@ACTNO, @Cname, @Bname, @Amount, @Date)
			END
			FETCH NEXT FROM custCursor INTO @Cname, @City, @ACTNO, @Bname, @Amount
		END
	END
	CLOSE custCursor
	DEALLOCATE custCursor
	SET NOCOUNT OFF
GO

DECLARE @depositData VARCHAR(MAX) = '[
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

EXEC prc6 @depositData

SELECT * FROM Deposit
