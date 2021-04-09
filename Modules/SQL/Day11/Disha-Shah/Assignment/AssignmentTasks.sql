USE Day6DB

SELECT * FROM Customers
SELECT * FROM Branches
SELECT * FROM Deposits
SELECT * FROM Borrows

/*Q1: Create a Store Procedure which will accept name of the customer as input parameter and product the following output, List Names 
of Customers who are Depositors and have Same Branch City as that of input parameter customer’s Name.
Ans.*/
CREATE PROCEDURE prcDepositorCity @CustName VARCHAR(19)
AS
SET NOCOUNT ON;
BEGIN
IF EXISTS(SELECT b.City FROM Deposits AS d JOIN Branches AS b ON d.Bname=b.Bname WHERE d.Cname=@CustName)
BEGIN
SELECT d.Cname, b.City
FROM Deposits AS d JOIN Branches AS b
ON d.Bname=b.Bname
WHERE b.City = (SELECT b.City FROM Deposits AS d JOIN Branches AS b ON d.Bname=b.Bname WHERE d.Cname=@CustName)
END
ELSE
PRINT 'No records found'
END

EXECUTE prcDepositorCity 'Mehul';
GO


/*Q2: Create a Store Procedure which will accept name of the customer as input parameter and product the following output List in
JSON format, All the Depositors Having Depositors Having Deposit in All the Branches where input parameter customer is Having an Account
Ans.*/
CREATE PROCEDURE prcDepositBranch @CustName VARCHAR(19)
AS
SET NOCOUNT ON;
BEGIN
SELECT *
FROM Deposits
WHERE Bname IN (
SELECT Bname
FROM Deposits
WHERE Cname=@CustName
)
UNION
SELECT *
FROM Deposits
WHERE Bname IN (
SELECT Bname
FROM Borrows
WHERE Cname=@CustName
)
FOR JSON PATH
END

EXECUTE prcDepositBranch 'Mehul';
GO


/*Q3: Create a Store Procedure that will accept city name and returns the number of customers in that city.
Ans.*/
CREATE PROCEDURE prcCustomerCity @CustCity VARCHAR(19)
AS
SET NOCOUNT ON;
BEGIN
IF EXISTS(SELECT City FROM Customers WHERE City=@CustCity)
BEGIN
SELECT COUNT(City) AS 'Total Customers'
FROM Customers
WHERE City=@CustCity
END
ELSE
PRINT 'No records found'
END

EXECUTE prcCustomerCity 'Mumbai';
GO

/*Q4: Create a Store Procedure which will accept city of the customer as input parameter and product the following output List in
JSON format List All the Customers Living in city provided in input parameter and Having the Branch City as MUMBAI or DELHI
Ans.*/
CREATE PROCEDURE prcCustomerBranchCity @CustCity VARCHAR(19)
AS
SET NOCOUNT ON;
BEGIN
SELECT c.Cname, c.City AS 'Customer City', b.City AS 'Branch City'
FROM Customers AS c JOIN Deposits AS d
ON c.Cname = d.Cname JOIN Branches AS b
ON d.Bname = b.Bname
WHERE c.City=@CustCity AND ( b.City = 'Mumbai' OR b.City = 'Delhi')
UNION
SELECT c.Cname, c.City AS 'Customer City', b.City AS 'Branch City'
FROM Customers AS c JOIN Borrows AS d
ON c.Cname = d.Cname JOIN Branches AS b
ON d.Bname = b.Bname
WHERE c.City=@CustCity AND ( b.City = 'Mumbai' OR b.City = 'Delhi')
FOR JSON PATH
END

EXECUTE prcCustomerBranchCity 'Mumbai';
GO

/*Q5: Count the Number of Customers Living in the City where Branch is Located
Ans.*/
CREATE PROCEDURE prcCustBranchCity
AS
SET NOCOUNT ON;
BEGIN
SELECT COUNT(tblCity.Cname) AS 'Total Customers' FROM (
SELECT c.Cname, c.City AS 'Customer City', b.City AS 'Branch City'
FROM Customers AS c JOIN Deposits AS d
ON c.Cname = d.Cname JOIN Branches AS b
ON d.Bname = b.Bname
WHERE c.City=b.City
UNION
SELECT c.Cname, c.City AS 'Customer City', b.City AS 'Branch City'
FROM Customers AS c JOIN Borrows AS d
ON c.Cname = d.Cname JOIN Branches AS b
ON d.Bname = b.Bname
WHERE c.City=b.City
) AS tblCity
END

EXECUTE prcCustBranchCity;
GO

/*Q6: Create a Procedure which will accept input in JSON parameter CustomerName,City, ACTNO,Branch,amount And insert these record
in the Deposit table. Before inserting some validation should be done like amount should be greater than 10Rs. and date should always
be current date.
Ans.*/
CREATE PROCEDURE prcDepositInsert @jsonDeposit NVARCHAR(MAX)
AS
SET NOCOUNT ON;
BEGIN
DECLARE @date VARCHAR(50), @curDate VARCHAR(50), @ActNo VARCHAR(5), @Cname VARCHAR(19), @Bname VARCHAR(18), @Amount INT;
SET @date = JSON_VALUE(@jsonDeposit,'$.ADate')
PRINT @date
SET @curDate = DATENAME(YY, GETDATE()) + '-' + CONVERT(VARCHAR(5), DATEPART(MM, GETDATE())) + '-' + DATENAME(DD, GETDATE())
PRINT @curDate
SET @Amount = JSON_VALUE(@jsonDeposit, '$.Amount')
SET @ActNo = JSON_VALUE(@jsonDeposit, '$.ActNo')
SET @Cname = JSON_VALUE(@jsonDeposit, '$.CustomerName')
SET @Bname = JSON_VALUE(@jsonDeposit, '$.Branch')
IF @Amount>10
BEGIN
	IF @date=@curDate
	BEGIN
		INSERT INTO Deposits (ActNo, Cname, Bname, Amount, Adate)
		VALUES(@ActNo, @Cname, @Bname, @Amount, @date)
	END
	ELSE
		PRINT 'Date is not valid'
END
ELSE
	PRINT 'Please give valid amount'
END

EXECUTE prcDepositInsert N'
  {"CustomerName":"Anil",
  "ActNo": 112,
  "Branch": "Ajni",
  "Amount": 2000,
  "ADate": "2021-3-18"}
';
GO
