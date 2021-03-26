USE SQLDay11
GO

-- ex1 --
CREATE OR ALTER PROCEDURE ex1
	@name varchar(18)
AS
	SELECT D.Cname FROM Deposits D JOIN Customers C ON C.CNAME = D.Cname 
	WHERE C.CITY = (SELECT CITY FROM Customers WHERE Cname = @name)
GO

EXEC ex1 @name = 'SHIVANI'
GO


-- ex2 --

CREATE OR ALTER PROCEDURE ex2
	@name varchar(18),
	@data nvarchar(MAX) OUTPUT
AS
	
	SET @data = (SELECT Cname FROM Deposits WHERE Bname IN (
		SELECT DISTINCT Bname FROM Deposits WHERE Cname = @name
	)  GROUP BY Cname HAVING COUNT(*) = (SELECT count(Bname) FROM Deposits WHERE Cname = @name)
	FOR JSON PATH, ROOT ('Depositors'))
	SELECT @data
GO

EXEC ex2 @name = 'SHIVANI',@data = OUTPUT
GO

-- ex3 -- 
CREATE OR ALTER PROCEDURE ex3
	@city varchar(18)
AS

	SELECT count(*) AS CustomerCount FROM Customers WHERE CITY = @city
GO

EXEC ex3 @city = 'MUMBAI'
GO

-- ex4 -- 
CREATE OR ALTER PROCEDURE ex4
	@city varchar(18),
	@output nvarchar(MAX) OUTPUT
AS
	SET @output = 
	(SELECT * FROM (SELECT C.* FROM Customers C JOIN Deposits D ON D.Cname = C.CNAME WHERE CITY = @city AND D.Bname IN (SELECT Bname FROM Branches WHERE CITY IN ('MUMBAI','DELHI'))
	UNION
	SELECT C.* FROM Customers C JOIN Borrows D ON D.Cname = C.CNAME WHERE CITY = @city AND D.Bname IN (SELECT Bname FROM Branches WHERE CITY IN ('MUMBAI','DELHI'))) AS X
	FOR JSON PATH)
	SELECT @output AS 'OUTPUT'
GO

EXEC ex4 @city = 'MUMBAI', @output = OUTPUT
GO

-- ex5 -- 
CREATE OR ALTER PROCEDURE ex5
AS
	SELECT count(*) AS CustomerCount, C.CITY FROM Customers C JOIN Deposits D ON D.Cname = C.CNAME
	JOIN Branches B ON B.BNAME = D.Bname WHERE B.CITY = C.CITY GROUP BY C.CITY
GO

EXEC ex5
GO

-- ex6 -- 
CREATE OR ALTER PROCEDURE ex6
	@json nvarchar(MAX)
AS
	SET NOCOUNT ON

	IF (SELECT Amount FROM OPENJSON(@json) WITH (Amount int '$.Amount')) <= 10
	BEGIN
		SELECT 'INVALID AMOUNT' AS Error
		RETURN
	END

	INSERT INTO Customers(Cname, CITY)  
		(SELECT Cname, CITY FROM 
			OPENJSON(@json) WITH (
			Cname varchar(18) '$.Cname',
			CITY varchar(18) '$.CITY'))

	INSERT INTO Deposits (ACTNO, Cname, Bname, Amount, ADate)  
		(SELECT ACTNO, Cname, Bname, Amount, GETDATE() AS ADate FROM 
			OPENJSON(@json) WITH (
			Amount int '$.Amount',
			ACTNO varchar(5) '$.ACTNO',
			Cname varchar(18) '$.Cname',
			Bname varchar(18) '$.Bname'))

	SET NOCOUNT OFF
GO

EXEC ex6 @json = N'{
	"ACTNO":"110",
	"Cname":"Milit",
	"Bname":"ANDHERI",
	"CITY":"RAJKOT",
	"Amount":100
	}'
GO

SELECT * FROM Deposits WHERE Bname IN (SELECT BName FROM Branches WHERE City IN (SELECT B.CITY FROM Deposits D JOIN Branches B ON B.BNAME = D.Bname WHERE D.Cname = 'SUNIL'))