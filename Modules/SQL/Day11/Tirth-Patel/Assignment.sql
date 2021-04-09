USE TestData
GO
--Q1: Create a Store Procedure which will accept name of the customer as 
--input parameter and product the following output, List Names of Customers 
--who are Depositors
--and have Same Branch City as that of input parameter customer’s Name.
ALTER PROCEDURE upCustomersList	
		@Cname varchar(18) 
		AS
			SET NOCOUNT ON 
			SELECT c.Cname FROM Deposits d JOIN Customer c ON d.Cname =  c.Cname
				WHERE c.city IN (SELECT CITY FROM Customer WHERE Cname = @Cname)
		GO
DECLARE @name varchar(18)
EXEC @name= upCustomersList 'SHIVANI'
PRINT @name
GO
--Q2: Create a Store Procedure which will accept name of the customer 
--as input parameter and produce the following output List in JSON format,
--All the Depositors Having Depositors Having 
--deposit in All the Branches where input parameter customer is Having an Account

ALTER PROCEDURE upDepositors 
	@cname varchar(18)
	AS
		SET NOCOUNT ON
		SELECT c.Cname,city FROM Customer c JOIN Deposits d ON
		D.Cname= c.Cname WHERE Bname IN (SELECT d.Bname FROM Customer WHERE
		Cname = @cname)
		FOR JSON PATH 
	GO
DECLARE @resultjson nvarchar(max)
EXEC @resultjson = upDepositors 'PRAMOD'
GO

--Q3: Create a Store Procedure that will accept 
--city name and returns the number of customers in that city.

CREATE PROCEDURE upNoOfcustomerpercity	
	@City varchar(18)
	AS
		SET NOCOUNT ON
		SELECT  COUNT(city)
		FROM Customer WHERE city = @city 
		--GROUP BY city 
	GO

	DECLARE @count int
	EXEC @count = upNoOfcustomerpercity 'Mumbai'
	GO

--Q4: Create a Store Procedure which will accept city of the customer as 
--input parameter and product the following output List in JSON format List All 
--the Customers Living 
--in city provided in input parameter and Having the Branch City as MUMBAI or DELHI

	CREATE PROCEDURE upCustomersCity	
		@city varchar(18)
		AS
			SET NOCOUNT ON
				SELECT d.Cname FROM Customer c JOIN Deposits d ON d.Cname=c.Cname
				JOIN Branches b ON b.Bname = d.Bname WHERE c.city = @city
				AND b.City IN ('MUMBAI', 'DELHI')
				FOR JSON PATH
		GO
  DECLARE @List varchar(max)
  EXEC @List = upCustomersCity 'MUMBAI'

  --Q5: Count the Number of Customers Living in the City where Branch is Located
	SELECT COUNT(c.Cname) AS 'same city as branch' FROM Customer c join Branches b ON c.city = b.City JOIN Deposits d
		on d.Bname= b.Bname WHERE c.city= b.City GROUP BY c.Cname

--Q6: Create a Procedure which will accept input in JSON parameter CustomerName,City,
--ACTNO,Branch,amount  
--And insert these record in the Deposit table. Before inserting some 
--validation should be done like amount should be greater than 10Rs. and date 
--should always be current date.

ALTER PROCEDURE upEntryintoDeposits
	@json nvarchar(max)
	AS BEGIN
	DECLARE @Actno varchar(5), @Cname varchar(18) , @Bname varchar(18)
			, @Amount int , @Adate date ,@error varchar(10)
	SELECT @Actno = Actno,
			@Cname = Cname,
			@Bname = Bname,
			@Amount = Amount,
			@Adate =CONVERT(date, Adate) 

	FROM OPENJSON(@json)
	WITH
	(	Actno varchar(5) '$.Actno',
		Cname varchar(18) '$.Cname',
		Bname varchar(18) '$.Bname',
		Amount int '$.Amount',
		Adate date '$.date'
	)
	IF @Amount < 10

	PRINT 'AMount is low' 

	 ELSE
		BEGIN 
				IF  @adate != GETDATE()
				 PRINT 'Invalid Date ' + CONVERT(varchar(max),@adate) 
				ELSE
						INSERT INTO Deposits VALUES
					( @Actno , @Cname , @Amount , @Adate , @Bname)
	END
END
GO 
DECLARE @json nvarchar(max)
DECLARE @date nvarchar(12) 
SET @date =GETDATE()

SET @json = '[ {"Actno" :"111" ,"Cname" : "SHIVANI" ,
				"Bname" : "M.G.ROAD","Amount" : "123",
				"date" :"'+ @date +'"
				}]'
--SELECT * FROM OPENJSON(@json)
EXEC upEntryintoDeposits @json


DECLARE @myVar nvarchar(20)
SET @myVar = 'SO43659'

 

