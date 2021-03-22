/* Q1: Create a Store Procedure which will accept name of the customer as input parameter
    and product the following output,
    List Names of Customers who are Depositors and have Same Branch City as that of input parameter customer's Name. */
CREATE PROCEDURE sameBranchCustomer @name varchar(20) 
AS 
	SELECT Cname FROM Deposit WHERE Bname IN (SELECT BName FROM BRANCH WHERE City IN 
	(SELECT b.CITY FROM Deposit d JOIN BRANCH b ON b.BNAME = d.Bname WHERE d.Cname = @name))
RETURN 0
GO

EXECUTE sameBranchCustomer 'sunil'

/* Q2: Create a Store Procedure which will accept name of the customer as input parameter 
and produce the following output List in JSON format, All the Depositors Having Depositors 
Having Deposit in All the Branches where input parameter customer is Having an Account */

CREATE PROCEDURE procedure2 @name varchar(20) , @data varchar(MAX) OUTPUT
AS
	SET NOCOUNT ON
	SELECT @data = ( SELECT Cname FROM Deposit WHERE Bname IN 
	(SELECT b.BNAME FROM Deposit d JOIN BRANCH b ON b.BNAME = d.Bname WHERE d.Cname = @name) FOR JSON PATH)
	SET NOCOUNT OFF
GO
SET NOCOUNT ON
DECLARE @json VARCHAR(MAX)
EXEC procedure2 'sunil' , @json OUTPUT
PRINT @json
DROP PROCEDURE procedure2
SET NOCOUNT OFF
GO

/*3. Create a Store Procedure that will accept city name and returns the number of customers in that city. */
CREATE PROCEDURE cityname @city varchar(20) 
AS
	SELECT COUNT(CNAME) FROM CUSTOMER WHERE CITY = @city
GO
SET NOCOUNT ON
EXEC cityname 'mumbai'
DROP PROCEDURE cityname
SET NOCOUNT OFF
GO

/*Q4. create a Store Procedure which will accept city of the customer as input parameter 
and product the following output List in JSON format List All the Customers Living in city provided
in input parameter and Having the Branch City as MUMBAI or DELHI   */
CREATE PROCEDURE Customerlivingcity @city varchar(50) ,@json VARCHAR(MAX) OUTPUT
AS 
	SELECT @json = (    
		SELECT c.CNAME  FROM CUSTOMER c 
		JOIN Deposit d ON c.CNAME = d.Cname 
		JOIN BRANCH b ON d.Bname = b.BNAME
		WHERE c.CITY = @city AND b.CITY IN ('delhi' ,'mumbai') FOR JSON PATH)
Go
SET NOCOUNT ON
DECLARE @data VARCHAR(MAX)
EXEC Customerlivingcity 'mumbai' , @data OUTPUT
PRINT @data
DROP PROCEDURE Customerlivingcity
SET NOCOUNT OFF
GO

-- Q5: Count the Number of Customers Living in the City where Branch is Located
CREATE PROCEDURE numberofcustomers @branchname varchar(20)
AS
	SELECT  COUNT(c.CNAME) AS 'Number of customer'FROM CUSTOMER c
	   JOIN BRANCH b ON c.CITY = b.CITY WHERE b.BNAME = @branchname
GO
SET NOCOUNT ON
EXECUTE numberofcustomers 'powai'
DROP PROCEDURE numberofcustomers
SET NOCOUNT OFF
GO
	   
/*--Q6 . Create a Procedure which will accept input in JSON parameter CustomerName,City, ACTNO,Branch,amount 
And insert these record in the Deposit table. Before inserting some validation should be done like amount should be greater than 10Rs.
and date should always be current date. */
CREATE PROCEDURE insertdata @json VARCHAR(MAX)
AS 
	DECLARE @amount int ,@date date  
	DECLARE @onlydate date = GETDATE() 
	SET @amount = JSON_VALUE(@json , '$.amount')
	SET @date = JSON_VALUE(@json ,'$.date')
	IF @amount >= 10 AND @date = @onlydate
	BEGIN
		INSERT INTO Deposit VALUES (JSON_VALUE(@json , '$.actno'),JSON_VALUE(@json , '$.CustomerName') ,
		JSON_VALUE(@json , '$.branch') , JSON_VALUE(@json , '$.amount') ,JSON_VALUE(@json , '$.date'))
	END
	ELSE 
	BEGIN
		IF @amount < 10
		BEGIN
			PRINT 'Amount Should be greater than 10 .'
	    END
		IF @date !=@onlydate
		BEGIN
		PRINT 'Date Should be Current Date'
		END
	END
GO
SET NOCOUNT ON
DECLARE @data VARCHAR(MAX) 
SET @data= '{
		"CustomerName" : "Ronak",
		"city"  : "nagpur" ,
		"actno" : "123" ,
		"branch": "vrce" ,
		"amount": 6 ,
		"date" : "03-19-21"
	}'
EXECUTE insertdata @data
DROP PROCEDURE insertdata
SET NOCOUNT OFF  