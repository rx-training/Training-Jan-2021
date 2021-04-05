

USE master;
GO

CREATE TABLE Deposit_Table
(
	ACTNO VARCHAR(5) PRIMARY KEY,
	CNAME VARCHAR(19) NOT NULL,
	FOREIGN KEY (CNAME) REFERENCES CUSTOMER_TABLE(CNAME),
	BNAME VARCHAR(18) NOT NULL,
	FOREIGN KEY (BNAME) REFERENCES BRANCH_TABLE(BNAME),	
	AMOUNT INT,
	ADATE DATE
);

CREATE TABLE BRANCH_TABLE
(
	BNAME VARCHAR(18) PRIMARY KEY,
	CITY VARCHAR(18) NOT NULL
);

CREATE TABLE CUSTOMER_TABLE
(
	CNAME VARCHAR(19) PRIMARY KEY,
	CITY VARCHAR(18) NOT NULL
);

CREATE TABLE BORROW_TABLE
(
	LOANNO VARCHAR(5) PRIMARY KEY,
	CNAME VARCHAR(19) NOT NULL,
	FOREIGN KEY (CNAME) REFERENCES CUSTOMER_TABLE(CNAME),
	BNAME VARCHAR(18) NOT NULL,
	FOREIGN KEY (BNAME) REFERENCES BRANCH_TABLE(BNAME),
	AMOUNT int NOT NULL
);
GO

/* Q1: Create a Store Procedure which will accept name of the customer as input parameter and product the following output, 
List Names of Customers who are Depositors and have Same Branch City as that of input parameter customer’s Name. */
CREATE PROCEDURE prcCustomers @Name VARCHAR(30)
AS
BEGIN
	IF EXISTS(SELECT * FROM Deposit_Table WHERE CNAME = @Name)
	BEGIN
	SELECT C.CNAME, D.BNAME, C.CITY FROM CUSTOMER_TABLE C JOIN Deposit_Table D ON C.CNAME = D.CNAME 
	WHERE D.BNAME IN (SELECT B.BNAME FROM BRANCH_TABLE B JOIN BRANCH_TABLE A ON B.City = A.City) AND C.CNAME = @Name
	RETURN 0
	END
END
/* DROP PROCEDURE prcCustomers*/
EXECUTE prcCustomers N'NAREN';
GO
/* Q2: Create a Store Procedure which will accept name of the customer as input parameter and produce the following output 
List in JSON format, All the Depositors Having Depositors Having Deposit in All the Branches where input parameter customer is Having an Account */
CREATE PROCEDURE prc2 @CName VARCHAR(30), @JSONDATA NVARCHAR(MAX) OUTPUT
AS
BEGIN
SET @JSONDATA = (SELECT C.CNAME, C.City FROM CUSTOMER_TABLE C RIGHT OUTER JOIN Deposit_Table D ON C.CNAME = D.CNAME WHERE D.CNAME = D.CNAME GROUP BY C.CNAME, C.CITY FOR JSON PATH)
END

DECLARE @JSON NVARCHAR(MAX)
EXECUTE prc2 'NAREN', @JSON OUTPUT
PRINT @JSON
GO
/* Q3: Create a Store Procedure that will accept city name and returns the number of customers in that city.  */
CREATE PROCEDURE prc3 @City VARCHAR(MAX), @Count INT OUTPUT
AS
BEGIN
	SELECT @Count = COUNT(CNAME) FROM CUSTOMER_TABLE WHERE City = @City
END
GO
DECLARE @Cust INT
EXECUTE prc3 @City = 'MUMBAI', @Count = @Cust OUTPUT

IF(@Cust = 0)
PRINT 'PLEASE ENTER VALID CITY'
ELSE
PRINT 'OUTPUT : ' + CAST(@Cust AS VARCHAR(30))
GO
/* Q4: Create a Store Procedure which will accept city of the customer as input parameter and product the following output List in JSON format List
All the Customers Living in city provided in input parameter and Having the Branch City as MUMBAI or DELHI  */
CREATE PROCEDURE prc4 @Cust VARCHAR(MAX), @JSON NVARCHAR(MAX) OUTPUT
AS
BEGIN
	DECLARE @CNAME VARCHAR(MAX), @CustCity VARCHAR(MAX)
	DECLARE jsoncursor CURSOR STATIC FOR SELECT CNAME, City FROM CUSTOMER_TABLE
	OPEN jsoncursor
	FETCH NEXT FROM jsoncursor INTO @CNAME, @CustCity 
	IF(@@CURSOR_ROWS > 0)
	BEGIN
		WHILE @@FETCH_STATUS=0
		BEGIN
			SET @JSON = (SELECT CNAME, City FROM CUSTOMER_TABLE WHERE CITY = 'MUMBAI' FOR JSON PATH)
			FETCH NEXT FROM jsoncursor INTO @CNAME, @CustCity
		END
END
CLOSE jsoncursor
DEALLOCATE jsoncursor
END

DECLARE @js NVARCHAR(MAX)
EXECUTE prc4 'NAREN', @js OUTPUT
PRINT @js
GO
/* Q5: Count the Number of Customers Living in the City where Branch is Located  */
CREATE PROCEDURE pr5 @City VARCHAR(50), @Count INT OUTPUT
AS
BEGIN
DECLARE @CustCity VARCHAR(30), @Cname VARCHAR(50)
DECLARE countcursor CURSOR STATIC FOR SELECT City, CNAME FROM CUSTOMER_TABLE
	OPEN countcursor
	FETCH NEXT FROM countcursor INTO @CustCity, @Cname
	IF @@ROWCOUNT > 0
	BEGIN
	WHILE @@FETCH_STATUS=0
	BEGIN
		SELECT @Count = COUNT(C.CNAME) FROM CUSTOMER_TABLE C LEFT OUTER JOIN BRANCH_TABLE B ON C.CITY = B.CITY WHERE C.CITY = @City GROUP BY C.CNAME, C.CITY
		FETCH NEXT FROM countcursor INTO @CustCity, @Cname
	END
	CLOSE countcursor
	DEALLOCATE countcursor
	END
END

DECLARE @count INT
EXECUTE pr5 'MUMBAI', @count OUTPUT
PRINT @count
GO

/* Q6: Create a Procedure which will accept input in JSON parameter CustomerName,City, ACTNO,Branch,amount 
And insert these record in the Deposit table. Before inserting some validation should be done like amount should be greater 
than 10Rs. and date should always be current date. */

CREATE PROCEDURE pr6 @JSON NVARCHAR(MAX)
AS
BEGIN
	IF JSON_VALUE(@JSON, '$.INFO.JSON[0].AMOUNT') > 10
	BEGIN
		IF JSON_VALUE(@JSON, '$.INFO.JSON[0].ADATE')=GETDATE()
			BEGIN
			INSERT INTO Deposit_Table SELECT * FROM OPENJSON(@JSON)
			WITH
			(
				ACTNO VARCHAR(5) '$.INFO.JSON[0].ACTNO',
				CNAME VARCHAR(18) '$.INFO.JSON[0].CNAME',
				BNAME VARCHAR(18) '$.INFO.JSON[0].BNAME',
				AMOUNT INT '$.INFO.JSON[0].AMOUNT',
				ADATE DATE '$.INFO.JSON[0].ADATE'
			)
			END
		ELSE
			PRINT 'ENTER VALID DATE'
		END
	ELSE
		PRINT 'INVALID VALUE'
END

EXECUTE pr6 @JSON = '{"INFO":{"DATA":[{"ACTNO":111,"CNAME":"Kartik","BNAME":"VRCE","AMOUNT":15,"ADATE":"25-Mar-2021"}]}}'

SELECT * FROM Deposit_Table;