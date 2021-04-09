CREATE DATABASE Paytm
USE Paytm
-- Users Table
CREATE TABLE Users 
(
	UserId int CONSTRAINT UserId_Users_PK PRIMARY KEY IDENTITY,
	Name varchar(50) NOT NULL UNIQUE ,
	MobileNo varchar(10) NOT NULL UNIQUE,
	Password varchar(10) NOT NULL ,	
)
-- Transactions Table
CREATE TABLE Transactions 
(
	TransactionId int CONSTRAINT TransactionId_Transactions_PK PRIMARY KEY IDENTITY,
	SenderId int CONSTRAINT SenderId_Transactions_FK FOREIGN KEY REFERENCES Users  ,
	ReceiverId int CONSTRAINT ReceiverId_Transactions_FK FOREIGN KEY REFERENCES Users ,
	TransactionDate datetime NOT NULL ,
	Amount int NOT NULL ,
)
-- Passbook Table
CREATE TABLE Passbook 
(
	UserId int CONSTRAINT UserId_Passbook_FK FOREIGN KEY REFERENCES Users  NOT NULL,
	Balance int  default 0
)
-- Products Table
CREATE TABLE Products
(
	ProductId int CONSTRAINT ProductId_Products_PK PRIMARY KEY IDENTITY,
	ProductName varchar(50) NOT NULL ,
	ProductType varchar(50) NOT NULL ,
	ProductPrice int NOT NULL 
)
-- Orders Table
CREATE TABLE Orders
(
	OrderId int CONSTRAINT OrderId_Orders_PK PRIMARY KEY IDENTITY,
	OrderDate date NOT NULL ,
	UserId int CONSTRAINT UserId_Orders_FK FOREIGN KEY REFERENCES Users  NOT NULL,
	ProductId int CONSTRAINT ProductId_Orders_FK FOREIGN KEY REFERENCES Products  NOT NULL,
	Quantity int NOT NULL ,
)
-- OrderHistory Table
CREATE TABLE OrderHistory 
( 
  OrderId int ,
  UserId int ,
  Name varchar(50) ,
  ProductName varchar(50) ,
  ProductPrice int ,
  Quantity int ,
  TotalPrice int ,
  Payment varchar (4) ,
  PaymentDate datetime 
)

-- View
--1. Creating a view for User Purchase Product
CREATE  VIEW vUserPurchaseProducts
AS
SELECT   o.OrderId ,u.UserId , u.Name , o.ProductId , p.ProductName ,p.ProductType ,p.ProductPrice  , o.OrderDate  ,o.Quantity  ,o.Quantity * p.ProductPrice AS 'Total Price'  
      FROM Users u  JOIN Orders o ON u.UserId = o.UserId 
                    JOIN Products p  ON o.ProductId = p.ProductId 

SELECT * FROM vUserPurchaseProducts

--2. Creating a view for User Transactions
CREATE VIEW vUserTransactions
AS
SELECT  t.TransactionId ,u.UserId AS 'SenderId' , u.Name AS 'SenderName' , t.ReceiverId 
    ,(SELECT Name FROM Users WHERE UserId = t.ReceiverId) 'ReceiverName', t.Amount AS 'Amount transfer'
	, t.TransactionDate FROM Users u 
         JOIN Transactions t ON u.UserId = t.SenderId 
		 JOIN Passbook p ON u.UserId = p.UserId 
		 
SELECT * FROM vUserTransactions

--3. Creating a view for to User Balance Data
CREATE VIEW vShowUserBalance
AS 
   SELECT u.Name , u.MobileNo , p.Balance  FROM Users u JOIN Passbook p ON u.UserId = p.UserId

SELECT * FROM vShowUserBalance
Go

-- Procedure
-- 1. Is Register user ? No then Insert new user 

CREATE PROCEDURE isRegister @Name varchar(50), @mobileno varchar(10) , @password varchar(10)
AS
	SET NOCOUNT ON
	BEGIN TRANSACTION
	IF @Mobileno NOT IN (SELECT MobileNo FROM Users)
	BEGIN 
		INSERT INTO Users VALUES ( @Name , @mobileno , @password )
	END
	ELSE
	BEGIN
		PRINT 'Already Register User'
	END
	COMMIT TRANSACTION
	SET NOCOUNT OFF
GO
EXEC isRegister 'Dhoni' , '901510010' , '77777'
GO

-- 2. Login
ALTER PROCEDURE LoginUser @num varchar(10) , @password varchar(10)
AS
	SET NOCOUNT ON 
	DECLARE @name varchar(50)
	IF @num IN (SELECT MobileNo FROM Users) AND @password IN (SELECT Password FROM Users)
	BEGIN
		SELECT @name = Name FROM Users WHERE MobileNo = @num
		PRINT @name + ' Your Login SuccessFully Done' 
	END
	ELSE
		PRINT 'You Need To Register First'
	SET NOCOUNT OFF
GO
EXEC LoginUser '101010010' , '1234'
GO
-- 3.AddMoney 
CREATE PROCEDURE AddMoney @userid int , @amount int
AS
	SET NOCOUNT ON
	BEGIN TRANSACTION
	IF @userid  IN (SELECT UserId FROM Passbook)
	BEGIN 
		DECLARE @temp INT
		SELECT @temp = Balance FROM Passbook WHERE UserId = @userid
		UPDATE Passbook SET Balance = @amount + @temp WHERE UserId = @userid
		PRINT 'Amount :' +CONVERT(varchar(25), @amount)  +'  Added to UserID : ' + CONVERT(varchar(25), @userid  ) 
		COMMIT TRANSACTION
	END
	ELSE
	BEGIN
		PRINT 'Not Registered User'
		ROLLBACK TRANSACTION
	END
	SET NOCOUNT OFF
GO
EXEC AddMoney 1,7	
GO

-- 4. AddProduct
CREATE PROCEDURE AddProduct @pname varchar(50) , @ptype varchar(50) ,@price int
AS
	SET NOCOUNT ON
	BEGIN TRANSACTION
		IF @pname IN (SELECT ProductName FROM Products) AND @ptype IN (SELECT ProductType FROM Products) AND @price IN (SELECT ProductPrice FROM Products)
		BEGIN	
			PRINT 'Product is Already Added'
			ROLLBACK TRANSACTION
		END
		ELSE
		BEGIN
			INSERT INTO Products VALUES (@pname , @ptype , @price)
		PRINT 'Product Added Successfully'
		COMMIT TRANSACTION
		END
	SET NOCOUNT OFF
GO
EXEC AddProduct 'Fz-5' , 'Automobile' , 1200
GO

-- 5. OderBooking
CREATE PROCEDURE OderBooking @userid int , @pid int , @quantity int
AS
	SET NOCOUNT ON
	BEGIN TRANSACTION
	IF @userid  IN (SELECT UserId FROM Users)
	BEGIN
		INSERT INTO Orders VALUES (GETDATE() , @userid , @pid , @quantity)
		PRINT 'Order Successfully Booked'
	END
	ELSE
	BEGIN
		PRINT 'oops ! Too Book your order you need to Login First'
	END
	COMMIT TRANSACTION
	SET NOCOUNT OFF
GO
EXEC OderBooking  3, 4 ,2
GO

-- 6. Money Transfer
CREATE PROCEDURE TransferAmount @SenderID INT , @ReceiverID INT, @MoneytobeTransfer INT
AS
	SET NOCOUNT ON
	BEGIN TRANSACTION
	IF @SenderID NOT IN (SELECT UserId FROM Users ) OR @ReceiverID NOT IN (SELECT UserId FROM Users )
	BEGIN 
		PRINT 'Transaction Failed'
		ROLLBACK TRANSACTION
	END
	ELSE
	BEGIN
		INSERT INTO Transactions VALUES (@SenderID , @ReceiverID , GETDATE() , @MoneytobeTransfer)
		UPDATE Passbook SET Balance = Balance - @MoneytobeTransfer WHERE UserId = @SenderID
		UPDATE Passbook SET Balance = Balance + @MoneytobeTransfer WHERE UserId = @ReceiverID
		PRINT 'Transfer Money Succesfully'
		COMMIT TRANSACTION
	END
	SET NOCOUNT OFF
GO
EXEC TransferAmount  1,3,10
GO

-- 7. Order Payment
CREATE PROCEDURE OrderPayment   @orderid INT ,@userid INT, @productid INT, @paymentprice INT  
AS
	SET NOCOUNT ON
	BEGIN TRANSACTION
	DECLARE @temp1 INT , @temp2 INT , @temp3 INT ,@name varchar(50) , @Balance INT
	IF @orderid IN (SELECT OrderId FROM Orders)
	BEGIN
		SELECT @temp1 =  UserId FROM vUserPurchaseProducts WHERE OrderId = @orderid
		SELECT @temp2 = ProductId FROM vUserPurchaseProducts WHERE OrderId = @orderid
		SELECT @temp3 = [Total Price] FROM vUserPurchaseProducts WHERE OrderId = @orderid
		SELECT @name  = Name FROM vUserPurchaseProducts WHERE OrderId = @orderid
		IF @userid = @temp1 AND @productid = @temp2 AND @paymentprice = @temp3
		BEGIN
			
			SELECT @Balance = Balance FROM Passbook WHERE UserId = @userid
			IF @Balance >= @paymentprice
			BEGIN 
				UPDATE Passbook SET Balance = @Balance - @paymentprice WHERE UserId = @userid
				INSERT INTO OrderHistory (OrderId , UserId ,Name , ProductName , ProductPrice , Quantity , TotalPrice , Payment , PaymentDate)
				SELECT @orderid , @userid , @name , ProductName , ProductPrice , Quantity , [Total Price] , 'Done' , GETDATE() FROM vUserPurchaseProducts
				WHERE  OrderId = @orderid

				PRINT   @name +' Your Payment Successfully Done ' 
				DELETE FROM Orders WHERE OrderId = @orderid
			END
			ELSE
				PRINT 'Insuffient Balance'
		END
		ELSE
		BEGIN
			PRINT 'Payment Failed'
		END
		COMMIT TRANSACTION
	END
	ELSE
	BEGIN 
		PRINT 'Payment Failed '
		ROLLBACK TRANSACTION
	END
GO
EXEC OrderPayment 17,1,3,2400
GO

