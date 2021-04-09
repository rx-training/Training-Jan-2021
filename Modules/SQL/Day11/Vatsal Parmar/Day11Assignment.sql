/*** Day11 Assignment ***/

/* Q1: Create a Store Procedure which will accept name of the customer as input parameter and product the following output,
List Names of Customers who are Depositors and have Same Branch City as that of input parameter customer’s Name. */

CREATE PROCEDURE uspGetCustomerWithSameBranchCity
	@CName VARCHAR(50)
AS
	SET NOCOUNT ON;
	SELECT CNAME FROM Deposits WHERE BNAME IN 
	(SELECT BNAME FROM Branches WHERE CITY IN 
	(SELECT b.CITY FROM Deposits d JOIN Branches b ON b.BNAME = d.BNAME WHERE d.CNAME = @CName));
	SET NOCOUNT OFF
GO

EXECUTE uspGetCustomerWithSameBranchCity 'SUNIL';
GO

DROP PROCEDURE uspGetCustomerWithSameBranchCity
GO

/* Q2: Create a Store Procedure which will accept name of the customer as input parameter and product the following output List
in JSON format, All the Depositors Having Deposit in All the Branches where input parameter customer is
Having an Account */

CREATE PROCEDURE uspGetCustomerWithSameBranch
	@CName VARCHAR(50),
	@Json VARCHAR(MAX) OUTPUT
AS
	SET NOCOUNT ON;
	SELECT @Json = (SELECT CNAME FROM Deposits WHERE BNAME IN 
	(SELECT b.BNAME FROM Deposits d 
	JOIN Branches b ON b.BNAME = d.BNAME
	WHERE d.CNAME = @CName)FOR JSON PATH);
	SET NOCOUNT OFF
GO

SET NOCOUNT ON;
DECLARE @temp VARCHAR(MAX)
EXECUTE uspGetCustomerWithSameBranch 'SUNIL',@temp OUTPUT;
PRINT @temp;
GO

DROP PROCEDURE uspGetCustomerWithSameBranch
SET NOCOUNT OFF
GO

/* Q3: Create a Store Procedure that will accept city name and returns the number of customers in that city. */

CREATE PROCEDURE uspGetTotalCustomersByCityName
	@CityName VARCHAR(50)
AS
	SELECT COUNT(CNAME) 'Total Customers' FROM Customers WHERE CITY = @CityName
GO

EXECUTE uspGetTotalCustomersByCityName 'MUMBAI'
GO

DROP PROCEDURE uspGetTotalCustomersByCityName
GO

/* Q4: Create a Store Procedure which will accept city of the customer as input parameter and product the following output
List in JSON format List All the Customers Living in city provided in input parameter and Having the Branch City as MUMBAI
or DELHI */

CREATE PROCEDURE uspGetCustomerWithSameCity
	@CityName VARCHAR(50),
	@Json VARCHAR(MAX) OUTPUT
AS
	SELECT @Json = (SELECT c.CNAME FROM Customers c 
	JOIN Deposits d ON c.CNAME = d.CNAME
	JOIN Branches b ON d.BNAME = b.BNAME
	WHERE c.CITY = @CityName AND b.CITY IN ('MUMBAI','DELHI') FOR JSON PATH)
GO

SET NOCOUNT ON;
DECLARE @temp VARCHAR(MAX)
EXECUTE uspGetCustomerWithSameCity 'MUMBAI',@temp OUTPUT;
PRINT @temp
GO

DROP PROCEDURE uspGetCustomerWithSameCity
SET NOCOUNT OFF
GO

/* Q5: Count the Number of Customers Living in the City where Branch is Located */

CREATE PROCEDURE uspGetTotalCustomersByBranchCity
	@BranchName VARCHAR(50)
AS
	SELECT COUNT(CNAME) 'Total Customers' 
	FROM Customers c 
	JOIN Branches b ON c.CITY=b.CITY
	WHERE b.BNAME = @BranchName
GO

EXECUTE uspGetTotalCustomersByBranchCity 'POWI'
GO

DROP PROCEDURE uspGetTotalCustomersByBranchCity
GO

/* Q6: Create a Procedure which will accept input in JSON parameter CustomerName,City, ACTNO,Branch,amount 
And insert these record in the Deposit table. Before inserting some validation should be done like amount should be 
greater than 10Rs. and date should always be current date.*/

CREATE PROCEDURE uspInseretDepositRecord
	@Deposit VARCHAR(MAX)
AS
	SET NOCOUNT ON
	DECLARE @cDate DATE
	SET @cDate = GETDATE() 
	DECLARE @Date DATE
	SET @Date = JSON_VALUE(@Deposit,'$.ADATE')
	DECLARE @Amount INT
	SET @Amount = JSON_VALUE(@Deposit,'$.AMOUNT')
	IF @Date = @cDate AND @Amount > 10
	BEGIN
	INSERT INTO Deposits 
	VALUES(
	JSON_VALUE(@Deposit,'$.ACTNO'),
	JSON_VALUE(@Deposit,'$.CNAME'),
	JSON_VALUE(@Deposit,'$.BNAME'),
	@Amount,
	@Date
	)
	END
	ELSE
	BEGIN
	PRINT 'Enter Current Date And Amount Should Be More Then 10 Rs.'
	END
	SET NOCOUNT OFF
GO
SET NOCOUNT ON
DECLARE @Json VARCHAR(MAX)
SET @Json = '{
	"CNAME": "VATSAL",
	"CITY":"MUMBAI",
	"BNAME":"POWI",
	"ACTNO":111,
	"AMOUNT":5000,
	"ADATE":"03-18-2021"
}'
EXECUTE uspInseretDepositRecord @Json
GO

DROP PROCEDURE uspInseretDepositRecord
SET NOCOUNT OFF
GO
