--CREATE DATABASE day11
--USE day11
CREATE TABLE Branch(  
	BNAME VARCHAR(18) PRIMARY KEY,     
	CITY VARCHAR(18) 
);

INSERT INTO Branch(BNAME,CITY) 
VALUES ('VRCE','NAGPUR'),
		('AJNI','NAGPUR'),
		('KAROLBAGH','DELHI'),
		('CHANDNI','DELHI'),
		('DHARAMPETH','NAGPUR'),
		('M.G.Road','Banglore'),
		('ANDHERI','NAGPUR'),
		('VIRAR','MUMBAI'),
		('NEHRU PLACE','DELHI'),
		('POWAI','MUMBAI')

CREATE TABLE Customer(
	CNAME VARCHAR(19) PRIMARY KEY,
	CITY VARCHAR(18)
)

INSERT INTO Customer
	VALUES ('ANIL','KOLKATA'),
			('SUNIL','DELHI'),
			('MEHUL','BARODA'),
			('MANDAR','PATNA'),
			('MADHURI','NAGPUR'),
			('PRAMOD','NAGPUR'),
			('SANDIP','SURAT'),
			('SHIVANI','MUMBAI'),
			('KRANTI','MUMBAI'),
			('NAEN','MUMBAI');

CREATE TABLE Borrow( 
	LOANNO VARCHAR(20) PRIMARY KEY,
	CNAME varchar(19) FOREIGN KEY REFERENCES Customer(CNAME), 
	BNAME varchar(18)  FOREIGN KEY REFERENCES Branch(BNAME),
	Amount int  );

INSERT INTO Borrow
	VALUES ('201','ANIL','VRCE',1000),
		('206','MEHUL','AJNI',5000),
		('311','SUNIL','DHARAMPETH',5000),
		('321','MADHURI','ANDHERI',2000),
		('375','PRAMOD','VIRAR',8000),
		('481','KRANTI','NEHRU PLACE',3000)

CREATE TABLE Deposit(
	ACTNO VARCHAR(5) PRIMARY KEY,
	CNAME varchar(19) FOREIGN KEY REFERENCES Customer(CNAME),
	BNAME varchar(18)  FOREIGN KEY REFERENCES Branch(BNAME),
	AMOUNT int,
	ADATE DATE NOT NULL
)

INSERT INTO Deposit
	VALUES (100,'ANIL','VRCE',1000,'1-Mar-1995'),
		(101,'SUNIL','AJNI',5000,'4-Jan-1996'),
		(102,'MEHUL','KAROLBAGH',3500,'17-Nov-1995'),
		(104,'MADHURI','CHANDNI',1200,'17-Dec-1995'),
		(105,'PRAMOD','M.G.Road',3000,'27-Mar-1996'),
		(106,'SANDIP','ANDHERI',2000,'31-Mar-1996'),
		(107,'SHIVANI','VIRAR',1000,'5-Sep-1995'),
		(108,'KRANTI','NEHRU PLACE',5000,'2-Jul-1995'),
		(109,'NAEN','POWAI',7000,'10-Aug-1995')

--Q1: Create a Store Procedure which will accept name of the customer
--as input parameter and product the following output, List Names of Customers 
--who are Depositors and have Same Branch City as that of input parameter 
--customer’s Name.
CREATE PROCEDURE pp1
	@name varchar(20)
AS
BEGIN
	SET NOCOUNT ON
	SELECT CNAME FROM Deposit 
	WHERE BNAME IN(SELECT BNAME FROM Branch 
	WHERE CITY=(SELECT CITY FROM Branch  
	WHERE BNAME =(SELECT BNAME FROM Deposit 
	WHERE @name=CNAME  )))
	SET NOCOUNT OFF
END
GO
EXEC pp1 SUNIL

--Q2: Create a Store Procedure which will accept name of the customer 
--as input parameter and produce the following output List in JSON format,
--All the Depositors Having Depositors Having Deposit in All the Branches 
--where input parameter customer is Having an Account

CREATE PROCEDURE pp2	
	@name varchar(20)
AS
BEGIN
	SET NOCOUNT ON
	SELECT CNAME FROM Deposit 
	WHERE Bname IN (SELECT Bname FROM Deposit 
	WHERE Cname = @name)
	SET NOCOUNT OFF
END
GO
EXEC pp2 SUNIL

--Q3: Create a Store Procedure that will accept city name and
--returns the number of customers in that city.

CREATE PROCEDURE pp3	
	@name varchar(20)
AS
	SET NOCOUNT ON
	SELECT COUNT(*) FROM Customer 
	WHERE CITY=@name
	SET NOCOUNT OFF
GO
EXEC pp3 MUMBAI

--Q4: Create a Store Procedure which will accept city of the customer 
--as input parameter and product the following output List in JSON format 
--List All the Customers Living in city provided in input parameter and 
--Having the Branch City as MUMBAI or DELHI
CREATE PROCEDURE pp4	
	@city varchar(20)
AS
BEGIN
	SET NOCOUNT ON
	SELECT c.CNAME FROM (SELECT CNAME , BNAME 
	FROM Deposit 
	UNION  SELECT CNAME , BNAME   
	FROM Borrow)AS D 
	JOIN Branch AS B 
	ON D.BNAME = B.BNAME 
	JOIN CUSTOMER AS C 
	ON C.CNAME = D.CNAME 
	WHERE B.BNAME IN (SELECT BNAME FROM Branch 
						WHERE CITY IN ('MUMBAI' , 'DELHI')) 
		  AND c.CITY = @city
	FOR JSON PATH
	SET NOCOUNT OFF
END
GO
EXEC pp4 MUMBAI

--Q5: Count the Number of Customers Living in the City where Branch is Located

CREATE PROCEDURE pp5
AS
BEGIN
	SET NOCOUNT ON
	SELECT COUNT(*) FROM (SELECT CNAME , BNAME 
	FROM Deposit 
	UNION  SELECT CNAME , BNAME   
	FROM Borrow)AS D
	JOIN Branch as B 
	ON D.BNAME = B.BNAME  
	JOIN Customer AS C 
	ON C.CNAME = D.CNAME 
	WHERE C.CITY = B.CITY
	SET NOCOUNT OFF
END
GO
EXEC pp5


--Q6: Create a Procedure which will accept input in JSON parameter 
--CustomerName,City, ACTNO,Branch,amount

--And insert these record in the Deposit table. Before inserting 
--some validation should be done like amount should be greater than 10Rs. 
--and date should always be current date.
ALTER PROCEDURE p6 @json NVARCHAR(MAX)
AS
BEGIN
	SET NOCOUNT ON
	DECLARE
	@CustomerName VARCHAR(19),
	@ACTNO VARCHAR(5),
	@Branch VARCHAR(18),
	@amount int
	
	SELECT @CustomerName=Name,@ACTNO=AccountNO,@Branch= Branch,@amount=Amount
	FROM OPENJSON(@json)
	WITH(
		Name VARCHAR(19) '$.Name',
		AccountNO VARCHAR(5) '$.AccountNO',
		Branch VARCHAR(18)'$.Branch',
		Amount int '$.Amount'
	)
	 
	 INSERT INTO Deposit(ACTNO,CNAME,BNAME,AMOUNT)
	 VALUES(@ACTNO,@CustomerName,@Branch,@amount)
	 SET NOCOUNT OFF
 END
 GO
 DECLARE @json NVARCHAR(MAX)
 SET @json =N'[{"Name":"SANDIP" ,
				"AccountNO":"110" ,
				"Branch":"ANDHERI" ,
				"Amount":"2000"
				}]'
EXEC dbo.p6 @json
SELECT * FROM Deposit
	 
ALTER TABLE Deposit
    ADD CONSTRAINT DefAdate DEFAULT GETDATE() FOR Adate
ALTER TABLE Deposit
      ADD CONSTRAINT chkAmount CHECK (Amount >10) 

--SELECT * FROM Borrow
--SELECT * FROM Deposit
--SELECT * FROM Customer
--SELECT* FROM Branch

CREATE TABLE Campus (
    CampusID VARCHAR(5) CONSTRAINT Campus_CampusID_PK PRIMARY KEY ,
    CampusName varchar(40) NOT NULL ,
    Street varchar(40) NOT NULL ,
    City varchar(40) NOT NULL ,
    State varchar(40) NOT NULL ,
    Zip int NOT NULL ,
    Phone varchar(40) NOT NULL ,
    CampusDiscount decimal(2,2) NOT NULL ,
)

INSERT INTO Campus
VALUES ('1','IUPUI','425 University Blvd.','Indianapolis', 'IN','46202', '317-274-4591',.08),
	('2','Indiana University','107 S. Indiana Ave.','Bloomington', 'IN','47405', '812-855-4848',.07),
	('3','Purdue University','475 Stadium Mall Drive','West Lafayette', 'IN','47907', '765-494-1776',.06)


-- Position Table
CREATE TABLE Position
(
    PositionID VARCHAR(5) CONSTRAINT Position_PositionID_PK PRIMARY KEY ,
    Position varchar(40) NOT NULL ,
    YearlyMembershipFee  decimal (7,2) NOT NULL ,
)
INSERT INTO Position
VALUES ('1','Lecturer', 1050.50),
	('2','Associate Professor', 900.50),
	('3','Assistant Professor', 875.50),
	('4','Professor', 700.75),
	('5','Full Professor', 500.50)

--Member Table
CREATE TABLE Members (
    MemberID VARCHAR(5) CONSTRAINT Members_MemberID_PK PRIMARY KEY ,
    LastName varchar(40) NOT NULL ,
    FirstName varchar(40) NOT NULL ,
    CampusAddress varchar(40) NOT NULL ,
    CampusPhone varchar(40) NOT NULL ,
    CampusID varchar(5) CONSTRAINT Members_CampusID_FK FOREIGN KEY REFERENCES Campus NOT NULL,
    PostionID varchar(5) CONSTRAINT Members_PostionID_FK FOREIGN KEY REFERENCES Position NOT NULL,
    ContractDuration decimal(3,0) NOT NULL 
)
INSERT INTO Members
VALUES('1','Ellen','Monk','009 Purnell', '812-123-1234', '2', '5', 12),
	('2','Joe','Brady','008 Statford Hall', '765-234-2345', '3', '2', 10),
	('3','Dave','Davidson','007 Purnell', '812-345-3456', '2', '3', 10),
	('4','Sebastian','Cole','210 Rutherford Hall', '765-234-2345', '3', '5', 10),
	('5','Michael','Doo','66C Peobody', '812-548-8956', '2', '1', 10),
	('6','Jerome','Clark','SL 220', '317-274-9766', '1', '1', 12),
	('7','Bob','House','ET 329', '317-278-9098', '1', '4', 10),
	('8','Bridget','Stanley','SI 234', '317-274-5678', '1', '1', 12),
	('9','Bradley','Wilson','334 Statford Hall', '765-258-2567', '3', '2', 10)

-- Prices
CREATE TABLE Prices
(
    FoodItemTypeID int CONSTRAINT Prices_FoodItemTypeID_PK PRIMARY KEY IDENTITY,
    MealType varchar(40) NOT NULL ,
    MealPrice  decimal (7,2) NOT NULL ,
)
INSERT INTO Prices(MealType,MealPrice)
VALUES ('Beer/Wine', 5.50),
	('Dessert', 2.75),
	('Dinner', 15.50),
	('Soft Drink', 2.50), 
	('Lunch', 7.25) 

--FoodItems
CREATE TABLE FoodItems
(
    FoodItemID VARCHAR(5) CONSTRAINT Prices_FoodItemID_PK PRIMARY KEY ,
    FoodItemName varchar(40) NOT NULL ,
    FoodItemTypeID int CONSTRAINT FoodItems_FoodItemTypeID_FK FOREIGN KEY REFERENCES Prices NOT NULL,
)
INSERT INTO FoodItems
VALUES ('10001','Lager', '1'),
	('10002','Red Wine', '1'),
	('10003','White Wine', '1'),
	('10004','Coke', '4'),
	('10005','Coffee', '4'),
	('10006','Chicken a la King', '3'),
	('10007','Rib Steak', '3'),
	('10008','Fish and Chips', '3'),
	('10009','Veggie Delight', '3'),
	('10010','Chocolate Mousse', '2'),
	('10011','Carrot Cake', '2'),
	('10012','Fruit Cup', '2'),
	('10013','Fish and Chips', '5'),
	('10014','Angus Beef Burger', '5'),
	('10015','Cobb Salad', '5')

-- Orders
CREATE TABLE Orders
(
    OrderID VARCHAR(5) CONSTRAINT Orders_OrderID_PK PRIMARY KEY ,
    MemberID VARCHAR(5)  CONSTRAINT Orders_MemberID_FK FOREIGN KEY REFERENCES Members NOT NULL,
    OrderDate date NOT NULL
)
INSERT INTO Orders
VALUES ('1', '9', 'March 5, 2015'),
	('2', '8', 'March 5, 2015'),
	('3', '7', 'March 5, 2015'),
	('4', '6', 'March 7, 2015'),
	('5', '5', 'March 7, 2015'),
	('6', '4', 'March 10, 2015'),
	('7', '3', 'March 11, 2015'),
	('8', '2', 'March 12, 2015'),
	('9', '1', 'March 13, 2015') 

-- OrderLine table
CREATE TABLE OrderLine
(
    OrderID VARCHAR(5) CONSTRAINT OrderLine_OrderID_FK FOREIGN KEY REFERENCES Orders  NOT NULL ,
    FoodItemsID VARCHAR(5) CONSTRAINT OrderLine_FoodItemsID_FK FOREIGN KEY REFERENCES FoodItems  NOT NULL ,
    Quantity decimal(3,0) NOT NULL ,
    CONSTRAINT OrderLine_OrderID_FoodItemID PRIMARY KEY (OrderID , FoodItemsID)    
)
INSERT INTO OrderLine
VALUES ('1','10001',1),
	('1','10006',1),
	('1','10012',1),
	('2','10004',2),
	('2','10013',1),
	('2','10014',1),
	('3','10005',1),
	('3','10011',1),
	('4','10005',2),
	('4','10004',2),
	('4','10006',1),
	('4','10007',1),
	('4','10010',2),
	('5','10003',1),
	('6','10002',2),
	('7','10005',2),
	('8','10005',1),
	('8','10011',1),
	('9','10001',1)

--Create a listing of all Faculty Members (First and Last), their Faculty Position 
--and the University that they are affiliated with (Name), along with their 
--Monthly_Dues (Calculated Field with a column alias). Sort the records 
--in descending order by University and then 
--by Faculty's last name in ascending order.
SELECT m.FirstName+' '+m.LastName 'Members',p.Position,c.CampusName,
		p.YearlyMembershipFee/12 'Monthly_Dues'
FROM Members m
JOIN Position p
ON p.PositionID=m.PostionID
JOIN Campus c
ON m.CampusID=c.CampusID
ORDER BY c.CampusName, m.LastName DESC

--Create a listing that shows the various food items that the faculty club 
--serves (Name of the food item, type of food item and the price of the food item). 
--Note: List no alcoholic beverages. Sort the records in ascending order by price. 
SELECT f.FoodItemName,p.MealType,p.MealPrice
FROM FoodItems f
JOIN Prices p
ON p.FoodItemTypeID = f.FoodItemTypeID
WHERE p.MealType != 'Beer/Wine'
ORDER BY p.MealPrice

--List the OrderID, Order Date, Faculty Member's Name, Campus Name, 
--each FoodItem that makes up a given order, the type of meal, cost of the meal, 
--quantity ordered and the total line total (calculated field and column alias).
--Sort by Order IDs in descending order.

SELECT o.OrderID,o.OrderDate,m.FirstName+' '+m.LastName 'Name',
	   c.CampusName,f.FoodItemName,p.MealType,p.MealPrice,ord.Quantity, 
	   p.MealPrice*ord.Quantity 'Total'
FROM Orders o
JOIN OrderLine ord
ON  ord.OrderID= o.OrderID
JOIN Members m
ON o.MemberID = m.MemberID
JOIN Campus c
ON m.CampusID=c.CampusID
JOIN FoodItems f
ON f.FoodItemID = ord.FoodItemsID
JOIN Prices p
ON f.FoodItemTypeID = p.FoodItemTypeID
ORDER BY o.OrderID DESC

SELECT * FROM Campus	
SELECT * FROM Position
SELECT * FROM Members
SELECT * FROM Prices
SELECT * FROM FoodItems
SELECT * FROM Orders
SELECT * FROM OrderLine

