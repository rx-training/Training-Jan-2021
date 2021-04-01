--Assignment

--PROGRAM DESCRIPTION 

--Step 1: Create the following tables and insert the data as listed below:
CREATE TABLE Deposit (
	ACTNO	VARCHAR(5)		PRIMARY KEY ,
	Cname	VARCHAR(19)		FOREIGN KEY REFERENCES Customer( CNAME ) ,
	Bname	VARCHAR(18)		FOREIGN KEY REFERENCES Branch( BNAME ) ,
	Amount	INT				,
	Adate	DATE			,
) ;
INSERT INTO Deposit VALUES ( 100 ,		'ANIL' ,	'VRCE' ,		1000 ,	'1-Mar-1995'	)
INSERT INTO Deposit VALUES ( 101 ,		'SUNIL' ,	'AJNI' ,		5000 ,	'4-Jan-1996'	) 
INSERT INTO Deposit VALUES ( 102 ,		'MEHUL' ,	'KAROLBAGH'	,	3500 , 	'17-Nov-1995'	) 
INSERT INTO Deposit VALUES ( 104 , 	'MADHURI' ,	'CHANDNI'  ,	1200 ,	'17-Dec-1995'	) 
INSERT INTO Deposit VALUES ( 106 , 	'SANDIP' ,	'ANDHERI' ,		2000 ,	'31-Mar-1996'	) 
INSERT INTO Deposit VALUES ( 108 , 	'KRANTI' ,	'NEHRU PLACE' ,	5000 ,	'2-Jul-1995'	) 
INSERT INTO Deposit VALUES ( 109 , 	'NAREN' ,	'POWAI' ,		7000 ,	'10-Aug-1995'	) 
INSERT INTO Deposit VALUES ( 110 , 	'VIJAY' ,	'POWAI' ,		8000 ,	'11-Aug-1995'	) 	

CREATE TABLE Branch (
	BNAME	VARCHAR(18)		PRIMARY KEY ,
	CITY	VARCHAR(18)	
) ;
INSERT INTO Branch VALUES
	( 'VRCE' ,			'NAGPUR'	) ,
	( 'AJNI' ,			'NAGPUR'	) ,
	( 'KAROLBAGH' ,		'DELHI'		) ,
	( 'CHANDNI' ,		'DELHI'		) ,	
	( 'DHARAMPETH' ,	'NAGPUR'	) ,	
	( 'M.G.ROAD' ,		'BANGLORE'	) ,	
	( 'ANDHERI' ,		'MUMBAI'	) ,	
	( 'VIRAR' ,			'MUMBAI'	) ,	
	( 'NEHRU PLACE' ,	'DELHI'		) ,	
	( 'POWAI' ,			'MUMBAI'	) 

CREATE TABLE Customer (
	CNAME	VARCHAR(19)		PRIMARY KEY ,
	CITY	VARCHAR(18)	
) ;
INSERT INTO Customer VALUES 
	( 'ANIL' ,		'KOLKATA'		) ,
	( 'SUNIL' ,		'DELHI'			) ,
	( 'MEHUL' ,		'BARODA'		) ,
	( 'MANDAR' ,	'PATNA'			) ,	
	( 'MADHURI' ,	'NAGPUR'		) ,	
	( 'PRAMOD'	, 	'NAGPUR'		) ,
	( 'SANDIP' ,	'SURAT'			) ,
	( 'SHIVANI' ,	'MUMBAI'		) ,
	( 'KRANTI' ,	'MUMBAI'		) ,
	( 'NAREN' , 	'MUMBAI'		) 
INSERT INTO Customer VALUES	( 'VIJAY' , 	'MUMBAI' ) 

CREATE TABLE BORROW (
	LOANNO	VARCHAR(5) PRIMARY KEY ,
	Cname	VARCHAR(19)		FOREIGN KEY REFERENCES Customer( CNAME ) ,
	Bname	VARCHAR(18)		FOREIGN KEY REFERENCES Branch( BNAME ) ,
	AMOUNT	INT	
) ;
INSERT INTO BORROW VALUES ( 201	, 'ANIL' , 'VRCE' , 1000 )
INSERT INTO BORROW VALUES ( 206	, 'MEHUL' , 'AJNI' , 5000 )
INSERT INTO BORROW VALUES ( 311	, 'SUNIL' , 'DHARAMPETH' , 3000 ) 
INSERT INTO BORROW VALUES ( 321	, 'MADHURI' , 'ANDHERI' , 2000 )
INSERT INTO BORROW VALUES ( 375	, 'PRAMOD' , 'VIRAR' ,	8000 )
INSERT INTO BORROW VALUES ( 481	, 'KRANTI' , 'NEHRU PLACE' , 3000 )
	

--Step 2: Create the queries listed below:

--Q1: Create a Store Procedure which will accept name of the customer as input parameter and product the following output, List Names of Customers who are Depositors and have Same Branch City as that of input parameter customer’s Name.

CREATE PROCEDURE Proc1 
	@customerName VARCHAR(50) 
AS 
	SELECT CNAME FROM Deposit WHERE BNAME = ( SELECT BNAME FROM Deposit WHERE CNAME LIKE @customerName ) ;
GO
EXEC Proc1 'NAREN' ;



--Q2: Create a Store Procedure which will accept name of the customer as input parameter and produce the following output List in JSON format, All the Depositors Having Depositors Having Deposit in All the Branches where input parameter customer is Having an Account
CREATE PROC Proc2
	@customerName VARCHAR(30)
AS
	SELECT * FROM Deposit d
	JOIN Branch b ON b.BNAME = d.Bname
	WHERE	b.BNAME = ANY( SELECT b.BNAME FROM Branch WHERE b.CITY = ( SELECT CITY FROM Customer WHERE CNAME LIKE @customerName ) )
	FOR JSON AUTO ;
GO
EXEC Proc2 'NAREN'



--Q3: Create a Store Procedure that will accept city name and returns the number of customers in that city.

CREATE PROC Proc3
	@cityName VARCHAR(30)
AS
	SELECT COUNT(CNAME) AS 'No. of Customers' FROM Customer WHERE City LIKE @cityName 
GO
EXEC Proc3 'MUMBAI'



--Q4: Create a Store Procedure which will accept city of the customer as input parameter and product the following output List in JSON format List All the Customers Living in city provided in input parameter and Having the Branch City as MUMBAI or DELHI

CREATE PROC Proc4 
	@cityName VARCHAR(340) 
AS
	SELECT c.CNAME , c.CITY AS 'Living City' , b.CITY AS 'Branch City' FROM Customer c , Branch b 
	WHERE c.CITY = @cityName OR b.CITY = 'MUMBAI' OR b.CITY = 'DELHI'
	FOR JSON AUTO 
GO
EXEC Proc4 'SURAT'



--Q5: Count the Number of Customers Living in the City where Branch is Located

CREATE PROC Proc5 
AS
	SELECT COUNT(c.CNAME) FROM Customer c JOIN Branch b ON c.CITY = b.CITY 
GO 
EXEC Proc5 



--Q6: Create a Procedure which will accept input in JSON parameter CustomerName,City, ACTNO,Branch,amount  

--And insert these record in the Deposit table. Before inserting some validation should be done like amount should be greater than 10Rs. and date should always be current date.

SELECT * FROM Deposit 
 
CREATE PROC prox @mjson NVARCHAR(MAX) 
AS
	SET NOCOUNT ON ;
    INSERT INTO Deposit 
    SELECT * FROM OPENJSON( @mjson , '$') 
    WITH (
        id 		INT			N'$.actno' ,
        cname	VARCHAR(30)	N'$.cname' , 
        bname	VARCHAR(340)N'$.bname' ,
        amount	INT			N'$.amount' ,
        adate	DATE		N'$.adate'
    ) ;

DECLARE @myjson NVARCHAR(MAX) ;
SET @myjson = N'[
	{
    	"actno" : 126,
        "cname" : "dazel" , 
        "bname" : "bazri" , 
        "amount": 34000 , 
        "adate" : "16-Mar-1988"
   }
]' ;
EXEC prox @myjson


-- The above query is incomplete . Json not working on my system
