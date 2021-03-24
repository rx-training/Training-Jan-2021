USE Assignment
CREATE TABLE Customer(
CName varchar(19) PRIMARY KEY,
City varchar(18)
)
INSERT INTO Customer(CName,City) VALUES ('ANIL','KOLKATA'),
										('SUNIL','DELHI'),
										('MEHUL','BARODA'),
										('MANDAR','PATNA'),
										('MADHURI','NAGPUR'),
										('PRAMOD','NAGPUR'),
										('SANDIP','SURAT'),
										('SHIVANI','MUMBAI'),
										('KRANTI','MUMBAI'),
										('NAREN','MUMBAI')
CREATE TABLE Branch(
	BName varchar(18) PRIMARY KEY,
	City varchar(18) 
)
INSERT INTO Branch(BName,City) VALUES ('VRCE','NAGPUR'),
									  ('AJNI','NAGPUR'),
									  ('KAROLBAGH','DELHI'),
									  ('CHANDNI','DELHI'),
									  ('DHARAMPETH','NAGPUR'),
									  ('M.G.ROAD','BANGLORE'),
									  ('ANDHERI','MUMBAI'),
									  ('VIRAR','MUMBAI'),
									  ('NEHRU PLACE','DELHI'),
									  ('POWAI','MUMBAI')

CREATE TABLE Diposite
(
	ACTNO varchar(5) PRIMARY KEY,
	CName varchar(19)CONSTRAINT fk1 FOREIGN KEY REFERENCES Customer(CName),
	BName varchar(18) CONSTRAINT fk2 FOREIGN KEY REFERENCES Branch (BName),
	Amount int,
	ADate date
)
INSERT INTO Diposite(ACTNO,CName,BName,Amount,ADate) VALUES (100,'ANIL','VRCE',1000,'1-Mar-1995'),
															(101,'SUNIL','AJNI',5000,'4-Jan-1996'),
															(102,'MEHUL','KAROLBAGH',3500,'17-Nov-1995'),
															(104,'MADHURI','DHARAMPETH',1200,'17-Dec-1995'),
															(105,'PRAMOD','M.G.ROAD',3000,'27-Mar-1996'),
															(106,'SANDIP','ANDHERI',2000,'	31-Mar-1996'),
															(107,'SHIVANI','VIRAR',1000,'5-Sep-1995'),
															(108,'KRANTI','NEHRU PLACE',5000,'2-Jul-1995'),
															(109,'NAREN','POWAI','7000','10-Aug-1995')

CREATE TABLE Borrow
(
	LOANNO varchar(5) PRIMARY KEY,
	CNAME varchar(19) FOREIGN KEY REFERENCES Customer(CName),
	BNAME varchar(18) FOREIGN KEY REFERENCES Branch(BName),
	Amount int
)
INSERT INTO Borrow(LOANNO,CNAME,BNAME,Amount) VALUES (201,'ANIL','VRCE',1000),
											  (206,'MEHUL','AJNI',5000),
											  (311,'SUNIL','DHARAMPETH',3000),
											  (321,'PRAMOD','VIRAR',8000),
											  (481,'KRANTI','NEHRU PLACE',3000)



/*1 Create a Store Procedure which will accept name of the customer as input parameter and product  the following output,
List Names of Customers  who are Depositors and have Same Branch City as that of input parameter customer’s Name.*/

SELECT * FROM Customer
SELECT * FROM Diposite
SELECT * FROM  Branch


Alter PROCEDURE  procedure1 @Name varchar(Max)
AS
BEGIN
SELECT c.CName,d.BName,c.City FROM Customer c JOIN Diposite d  ON c.CName=d.CName  WHERE d.BName IN(SELECT b1.BName FROM Branch b1 JOIN Branch b2 ON b1.City=b2.City) AND c.CName=@Name
END
GO
EXECUTE procedure1 @Name='KRANTI'

/*Q2: Create a Store Procedure which will accept name of the customer as input parameter and 
produce the following output List in JSON format, All the Depositors Having Depositors Having 
Deposit in All the Branches where input parameter customer is Having an Account*/	
CREATE PROCEDURE Procedure9 @custName varchar(50),@jsondata nvarchar(MAX) OUTPUT
AS
BEGIN
SET @jsondata=(SELECT c1.CName,c1.City FROM Customer c1 RIGHT OUTER JOIN Diposite d1 ON C1.CName=d1.CName WHERE d1.CName=d1.CName GROUP BY c1.CName ,c1.City FOR JSON PATH)
END

DECLARE @JSONdata2 nvarchar(MAX)
EXECUTE Procedure9 'ANIL',@JSONdata2 OUTPUT
PRINT @JSONdata2


/*3 Create a Store Procedure that will accept city name and returns the number of customers in that city.*/

CREATE PROCEDURE Procedure2 @City varchar(Max), @Count int OUTPUT
AS
BEGIN
	 SELECT @Count= COUNT(CName) FROM Customer WHERE City=@City 
END
GO
DECLARE @Countcustomer int
EXECUTE Procedure2 @City= 'NAGPUR' , @Count=@Countcustomer OUTPUT 
 
IF(@Countcustomer=0)
PRINT 'PLEASE ENTER VALID CITY'
ELSE
PRINT 'THE NUMBER OF CUSTOMER IN  :- '+ CAST(@Countcustomer AS VARCHAR(30)) 

/*4 Create a Store Procedure which will accept city of the customer as input parameter and product the
following output List in JSON format List All the Customers Living in city  provided in input parameter and Having
the Branch City as MUMBAI or DELHI*/

ALTER PROCEDURE Jsondata @CustomerName varchar(Max), @jsoninfo nvarchar(MAX)  OUTPUT
AS
BEGIN
	DECLARE @Cname varchar(MAX),@CustomerCity varchar(MAX)
	DECLARE cursorforjsondata CURSOR  STATIC FOR  SELECT CName,City  FROM Customer
	OPEN cursorforjsondata
	FETCH NEXT FROM cursorforjsondata INTO @Cname,@CustomerCity
	IF(@@CURSOR_ROWS>0)
	BEGIN
		WHILE @@FETCH_STATUS=0
			BEGIN
				SET @jsoninfo=(SELECT CName,City FROM Customer WHERE City='DELHI' OR City='MUMBAI' FOR JSON PATH)
				FETCH NEXT FROM cursorforjsondata INTO @Cname,@CustomerCity

			END
			
	END
	CLOSE cursorforjsondata
	DEALLOCATE cursorforjsondata
END

DECLARE @jsonformdata nvarchar(MAX)
EXECUTE Jsondata 'SANDIP',@jsonformdata OUTPUT
PRINT @jsonformdata
/* 5 Count the Number of Customers Living in the City where Branch is Located*/
SELECT * FROM Customer
SELECT * FROM Branch

ALTER PROCEDURE Procedure3 @City varchar(50),@Count int OUTPUT
AS
BEGIN
DECLARE @citys varchar(30) ,@name varchar(50) 
DECLARE countdata CURSOR  STATIC FOR  SELECT City,CName  FROM Customer
	OPEN Countdata
	FETCH NEXT FROM  Countdata INTO @Citys,@name
	IF @@ROWCOUNT>0
	BEGIN
	WHILE @@FETCH_STATUS=0
	BEGIN
		SELECT @Count= COUNT(c1.CName) FROM Customer c1 LEFT OUTER JOIN 
		Branch b1  ON c1.City =b1.City WHERE c1.City=@City GROUP BY c1.CName,c1.City
		FETCH NEXT FROM  Countdata INTO @Citys,@name
END
CLOSE Countdata
DEALLOCATE Countdata
END
END

DECLARE @countdata int
EXECUTE Procedure3 'SURAT',@countdata OUTPUT
PRINT @countdata


/* 6 Create a Procedure which will accept input in JSON parameter CustomerName,City, ACTNO,Branch,amount  
And insert these record in the Deposit table. Before inserting some validation should be done like amount 
should be greater than 10Rs. and date should always be current date.*/

ALTER PROCEDURE   Getjsondata  @data nvarchar(Max)
AS
BEGIN
	
	IF JSON_VALUE(@data,'$.INFO.DATA[0].Amount')>10
	BEGIN
		IF JSON_VALUE(@data,'$.INFO.DATA[0].Adate')=GETDATE()
			BEGIN
			INSERT INTO Diposite  SELECT * FROM OPENJSON(@data) 
			WITH 
			(
			ACTNO varchar(5)  '$.INFO.DATA[0].ACTNO' ,
			Cname varchar(18) '$.INFO.DATA[0].Cname' ,
			Bname varchar(18) '$.INFO.DATA[0].Bname',
			Amount int '$.INFO.DATA[0].Amount',
			Adate date '$.INFO.DATA[0].Adate'
			)
			 
		END
		ELSE
				PRINT 'PLEASE ENTER CURRENT DATE'
		END
	ELSE
		PRINT 'PLEASE ENTER VALID VALUE'
	
END
 
 
EXECUTE  Getjsondata  @data='{"INFO":{"DATA":[{"ACTNO":115,"Cname":"MEHUL","Bname":"AJNI","Amount":11,"Adate":"18-Mar-2021"}]}}'

SELECT * FROM Diposite


	




