

----Create a Store Procedure which will accept name of the customer as input parameter and product the following output,----
----List Names of Customers who are Depositors and have Same Branch City as that of input parameter customer’s Name.----

----CURSOR----

DECLARE @Name VARCHAR(18)
DECLARE Cursor_Name CURSOR
FOR
SELECT CName FROM Deposit
OPEN Cursor_Name
FETCH NEXT FROM Cursor_Name INTO @Name;
WHILE @@FETCH_STATUS = 0
	BEGIN
		EXECUTE Proc_1 @Name;
		FETCH NEXT FROM Cursor_Name INTO @Name;
	END
CLOSE Cursor_Name;
Deallocate Cursor_Name;

----PROCEDURE----

CREATE PROCEDURE Proc_1
	@Name VARCHAR(18)
AS
	SELECT d.CName AS Names FROM Deposit d
	JOIN Branch b ON d.BName=b.BName
	JOIN Customer c ON c.City=b.City AND d.CName=c.CName
	WHERE d.CName=@Name
GO




----Create a Store Procedure which will accept name of the customer as input parameter and product the following output List in JSON format,----
----All the Depositors Having Depositors Having Deposit in All the Branches where input parameter customer is Having an Account----

----CURSOR----

DECLARE @Name VARCHAR(18)
DECLARE Cursor_Name CURSOR
FOR
SELECT CName FROM Deposit
OPEN Cursor_Name
FETCH NEXT FROM Cursor_Name INTO @Name;
WHILE @@FETCH_STATUS = 0
	BEGIN
		EXECUTE Proc_2 @Name;
		FETCH NEXT FROM Cursor_Name INTO @Name;
	END
CLOSE Cursor_Name;
Deallocate Cursor_Name;

----PROCEDURE----

CREATE PROCEDURE Proc_2
	@Name VARCHAR(18)
AS
SELECT CName AS Depositors,b.City AS BranchCity FROM Deposit d
JOIN Branch b ON d.BName=b.BName WHERE b.City=(
	SELECT City FROM Deposit d
	JOIN Branch b ON d.BName=b.BName WHERE d.CName=@Name)
	FOR JSON PATH
GO
	



---- Create a Store Procedure that will accept city name and returns the number of customers in that city.----

----CURSOR----

DECLARE @CityName VARCHAR(18)
DECLARE Cursor_Name CURSOR
FOR
SELECT City FROM Customer
OPEN Cursor_Name
FETCH NEXT FROM Cursor_Name INTO @CityName;
WHILE @@FETCH_STATUS = 0
	BEGIN
		EXECUTE Proc_3 @CityName;
		FETCH NEXT FROM Cursor_Name INTO @CityName;
	END
CLOSE Cursor_Name;
Deallocate Cursor_Name;

----PROCEDURE----

CREATE PROCEDURE Proc_3
	@CityName VARCHAR(18)
AS
SELECT  @CityName AS City, COUNT(CName) AS NumberOfCustomers FROM Customer WHERE City=@CityName
GO




---- Create a Store Procedure which will accept city of the customer as input parameter and product the following output List in JSON format----
----List All the Customers Living in city provided in input parameter and Having the Branch City as MUMBAI or DELHI----

----CURSOR----

DECLARE @CityName VARCHAR(18)
DECLARE Cursor_Name CURSOR
FOR
SELECT City FROM Customer
OPEN Cursor_Name
FETCH NEXT FROM Cursor_Name INTO @CityName;
WHILE @@FETCH_STATUS = 0
	BEGIN
		EXECUTE Proc_4 @CityName;
		FETCH NEXT FROM Cursor_Name INTO @CityName;
	END
CLOSE Cursor_Name;
Deallocate Cursor_Name;

----PROCEDURE----

CREATE PROCEDURE Proc_4
	@CityName VARCHAR(18)
AS
SELECT * FROM CUSTOMER WHERE City=@CityName AND CName IN (
	SELECT d.CName FROM Deposit d JOIN Branch b ON d.BName=b.BName WHERE b.City ='MUMBAI' OR b.City='DELHI'
	UNION
	SELECT b.CName FROM Borrow b JOIN Branch br ON b.BName=br.BName WHERE br.City ='MUMBAI' OR br.City='DELHI'
)FOR JSON PATH





----Count the Number of Customers Living in the City where Branch is Located----

----PROCEDURE----

CREATE PROCEDURE Proc_5
AS
SELECT SUM(NumberOfCustomers) AS TotalNumberOfCustomers FROM (
SELECT COUNT(d.CName) AS NumberOfCustomers FROM Deposit d JOIN Branch b ON d.BName=b.BName WHERE CName IN (
	SELECT CName FROM Customer c WHERE c.City=b.City)
UNION
SELECT COUNT(d.CName) AS NumberOfCustomers FROM Borrow d JOIN Branch b ON d.BName=b.BName WHERE CName IN (
	SELECT CName FROM Customer c WHERE c.City=b.City)) AS tbl
GO

EXECUTE Proc_5;




----Create a Procedure which will accept input in JSON parameter CustomerName,City, ACTNO,Branch,amount----
----And insert these record in the Deposit table. Before inserting some validation should be done like amount----
----should be greater than 10Rs. and date should always be current date.----

DECLARE @json NVARCHAR(MAX)
SET @json = '[
	{
		"ActNo":110,
		"CName":"MANDAR",
		"BName":"NEHRU PLACE",
		"Amount":10000,
		"ADate":"2021-03-19"
	}
]'
EXECUTE Proc_6 @json


----PROCEDURE----

CREATE PROCEDURE Proc_6
	@json NVARCHAR(MAX)
AS
BEGIN
SET NOCOUNT ON
DECLARE @a VARCHAR(5), @b VARCHAR(18), @c VARCHAR(18), @d INT, @e DATE
DECLARE ReadJson Cursor
FOR
SELECT * FROM OPENJSON(@json)
WITH(
	ActNo VARCHAR(5) '$.ActNo',
	CName VARCHAR(18) '$.CName',
	BName VARCHAR(18) '$.BName',
	Amount INT '$.Amount',
	ADate DATE '$.ADate'
)
OPEN ReadJson
FETCH NEXT FROM ReadJson INTO @a,@b,@c,@d,@e
IF(@d>10 AND CONVERT(VARCHAR,@e,105)=CONVERT(VARCHAR,GETDATE(),105))
BEGIN
INSERT INTO Deposit VALUES(@a,@b,@c,@d,CONVERT(DATE,@e))
END
CLOSE ReadJson
DEALLOCATE ReadJson
SET NOCOUNT OFF
END

PRINT CONVERT(VARCHAR,GETDATE(),105)