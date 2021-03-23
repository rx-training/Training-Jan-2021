USE Day9SQL;

CREATE TABLE Branch (BNAME varchar(18) CONSTRAINT pkBranch PRIMARY KEY ,CITY varchar(18));
CREATE TABLE Customer (CNAME varchar(19) CONSTRAINT pkCustomer PRIMARY KEY ,CITY varchar(18))
CREATE TABLE Deposit  (ACTNO varchar(5) CONSTRAINT pkDeposit PRIMARY KEY,CNAME varchar(19) CONSTRAINT fkCnamedepo
FOREIGN KEY REFERENCES Customer(CNAME) ,Bname varchar(18)CONSTRAINT fkbnamedepo FOREIGN KEY REFERENCES Branch(BNAME)
,Amount int,Adate date)
CREATE TABLE Borrow (LOANNO VARCHAR(5) CONSTRAINT pkBorrow PRIMARY KEY,CNAME VARCHAR(19) CONSTRAINT fkCnameborrow FOREIGN KEY REFERENCES  
Customer(CNAME) ,Bname varchar(18) CONSTRAINT fkBnameborrow FOREIGN KEY REFERENCES Branch(BNAME),Amount int)

SELECT * from Branch;

INSERT INTO Customer (CNAME ,CITY)
 VALUES ('ANIL','KOLKATA'),
 ('SUNIL','DELHI'),
 ('MEHUL','BARODA'),
 ('MANDAR','PATNA'),
 ('MADHURI','NAGPUR'),
 ('PRAMOD','NAGPUR'),
 ('SANDIP','SURAT'),
 ('SHIVANI','MUMBAI'),
 ('KRANTI','MUMBAI'),
 ('NAREN','MUMBAI');

INSERT INTO Branch (BNAME,CITY) VALUES ('VRCE','NAGPUR'),	
('AJNI','NAGPUR'),
('KAROLBAGH','DELHI'),
('CHANDNI','DELHI'),
('DHARAMPETH','NAGPUR'),
('M.G.ROAD','BANGLORE'),
('ANDHERI','MUMBAI'),
('VIRAR','MUMBAI'),
('NEHRU PLACE','DELHI'),
('POWAI','MUMBAI');


INSERT INTO Deposit  (ACTNO ,Cname  ,Bname ,Amount ,Adate )
 VALUES ('100','ANIL','VRCE','1000','1-Mar-1995'),	
('101','SUNIL','AJNI','5000','4-Jan-1996'),
('102','MEHUL','KAROLBAGH','3500','17-Nov-1995'),	
('104','MADHURI','CHANDNI','1200','17-Dec-1995'),
('105','PRAMOD','M.G. ROAD','3000','27-Mar-1996'),
('106','SANDIP','ANDHERI','2000','31-Mar-1996'),
('107','SHIVANI','VIRAR','1000','5-Sep-1995'),
('108','KRANTI','NEHRU PLACE','5000','2-Jul-1995'),
('109','NAREN','POWAI','7000','	10-Aug-1995');

SELECT * from Deposit;

INSERT INTO Borrow (LOANNO ,CNAME  ,Bname ,Amount) VALUES ('201','ANIL','VRCE','1000'),	
('206','MEHUL','AJNI','5000'),
('311','SUNIL','DHARAMPETH','3000'),	
('321','MADHURI','ANDHERI','2000'),
('375','PRAMOD','VIRAR','8000'),	
('481','KRANTI','NEHRU PLACE','3000');

/*
Q1: Create a Store Procedure which will accept name of the customer as input parameter and product the following output,
List Names of Customers who are Depositors and have Same Branch City as that of input parameter customer’s Name.*/

--SELECT c.CNAME from Customer c WHERE c.CNAME = (SELECT d.Cname FROM Deposit d)

SELECT c.CNAME from Customer c 

--SELECT d.CNAME from Deposit d where d.Bname
 

CREATE PROCEDURE day11
@cname varchar(19)
AS
BEGIN
SET NOCOUNT ON;
	 SELECT c.CName FROM Customer c JOIN Deposit d ON c.CName = d.CName JOIN Branch b ON b.BName = d.BName WHERE b.City IN
(SELECT City FROM Branch WHERE BName IN(SELECT BName FROM Deposit WHERE CName =@cname))
END
spByCustomerCityName 'Kranti'

GO

/*
Q2: Create a Store Procedure which will accept name of the customer as input parameter and produce the following output
List in JSON format, All the Depositors Having Depositors Having Deposit in All the Branches where
input parameter customer is Having an Account */

CREATE PROCEDURE SPBYDEPONAMECUSTOMER
@CNAME VARCHAR(19)
AS
BEGIN
SELECT c.CNAME,c.CITY  FROM Customer c join Deposit d on c.CNAME = d.CNAME where d.Bname in (SELECT d.Bname From Customer where c.CNAME=@CNAME) FOR JSON PATH
END
SPBYDEPONAMECUSTOMER 'MADHURI'

--where ma customer je variable hoy tenu acount number
/*
Q3: Create a Store Procedure that will accept city name and returns the number of customers in that city.*/

CREATE PROCEDURE spByCityName
@CityName VARCHAR(19)
AS
BEGIN
SELECT COUNT(CNAME) FROM Customer WHERE CITY = @CityName

--SELECT c.CName FROM Customer c JOIN Deposit d ON c.CName = d.CName JOIN Branch b ON b.BName = d.BName WHERE b.City IN
--(SELECT City FROM Branch WHERE BName IN(SELECT BName FROM Deposit WHERE CName =@Name))
END
spByCityName 'MUMBAI'


/*
Q4: Create a Store Procedure which will accept city of the customer as input parameter and product the following 
output List in JSON format List All the Customers
Living in city provided in input parameter and Having the Branch City as MUMBAI or DELHI*/

CREATE PROCEDURE spByCityCUSTOMER
@CCityName VARCHAR(19)
AS
BEGIN
SELECT C.CITY,C.CNAME FROM CUSTOMER  c Join Deposit d ON d.CNAME=c.CNAME Join Branch b ON d.Bname = b.BNAME 
Where c.CITY = @CCityName And b.CITY IN ('MUMBAI','DELHI') FOR JSON PATH
END
spByCityCUSTOMER 'MUMBAI'


/*Q5: Count the Number of Customers Living in the City where Branch is Located*/
--COUNT(c.CNAME),Where C.CITY =Where c.CITY = b.CITY AND c.CITY = br.CITY
SELECT COUNT(c.CNAME) FROM CUSTOMER  c Join Deposit d ON d.CNAME=c.CNAME Join Branch b ON d.Bname = b.BNAME 
Where c.CITY = b.CITY

/*
Q6: Create a Procedure which will accept input in JSON parameter CustomerName,City, ACTNO,Branch,amount  
And insert these record in the Deposit table. Before inserting some validation should be done like 
amount should be greater than 10Rs. and date should always be current date.*/

ALTER PROCEDURE spProcedure @JSON1 NVARCHAR(MAX)
AS
BEGIN
DECLARE @name VARCHAR(80)
DECLARE @amount INT
SELECT @amount = Amount,@name= Name FROM OPENJSON(@JSON1)
WITH(Name VARCHAR(40) '$.Name', Amount INT '$.Amount')
INSERT INTO test VALUES (@name,@amount)
END
DECLARE @json1 NVARCHAR(MAX)
SET @JSON1=N'[{"Name":"Rita","Amount":1000}]'
EXECUTE spProcedure @json1
GO
SELECT * FROM test


ALTER PROCEDURE SPinsertdeposit @JSONDEPO1 NVARCHAR(MAX) 
AS 
BEGIN
DECLARE @Actno varchar(5),@CNAME VARCHAR(19),@BranchName varchar(18),@Amount int
SELECT @Actno =Actno,@CNAME= CNAME,@BranchName = BranchName,@Amount=Amount FROM OPENJSON(@JSONDEPO1)
WITH(Actno varchar(5) '$.Actno',CNAME VARCHAR(19) '$.CNAME' ,BranchName varchar(18) '$.BranchName' ,Amount int '$.Amount')
IF @Amount>10
BEGIN
PRINT @Amount
INSERT INTO Deposit VALUES (@Actno,@CNAME,@BranchName,@Amount,GETDATE())
print 'hello'
END
END

DECLARE @jsondepo1 NVARCHAR(MAX)
SET @jsondepo1 = N'[{"Actno":"110","CNAME":"Niraj","BranchName":"Nilambaug","Amount":"1500"}]'
EXECUTE SPinsertdeposit @jsondepo1
GO
                                                                                                

INSERT INTO Branch VALUES('Nilambaug','Bhavnagar')

INSERT INTO Customer VALUES('Niraj','Bhavnagar')
