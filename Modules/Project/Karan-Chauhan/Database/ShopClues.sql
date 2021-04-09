CREATE DATABASE SHOPCLUES;
GO
USE SHOPCLUES;
GO


CREATE TABLE Users
(
	Username VARCHAR(20),
	EmailID VARCHAR(20) PRIMARY KEY,
	ContactNumber VARCHAR(10),
	Password VARCHAR(20)
)

GO
CREATE PROCEDURE UsersPrd
@Username VARCHAR(20), @Email VARCHAR(20), @ContactNo VARCHAR(10), @Password VARCHAR(20)
AS
BEGIN
	INSERT INTO Users(Username, EmailID, ContactNumber, Password) VALUES(@Username, @Email, @ContactNo, @Password);
END
GO

EXEC UsersPrd @Username = 'Karan', @Email = 'karan@gmail.com', @ContactNo = '9988998899', @Password = '1234';


CREATE TABLE BlockedUsers
(
	Username VARCHAR(20),
	EmailID VARCHAR(20),
	FOREIGN KEY (EmailID) REFERENCES Users(EmailID)
)

GO
CREATE VIEW view_blockedUsers 
AS
SELECT EmailID FROM BlockedUsers;
GO


CREATE TABLE Products
(
	ProductID INT PRIMARY KEY,
	ProductName VARCHAR(20),
	Category VARCHAR(20),
	Price Money,
	Description VARCHAR(20)
)

GO
CREATE PROCEDURE ProductsPrd
@ProductId INT, @ProductName VARCHAR(20), @Category VARCHAR(20), @Price Money, @Description VARCHAR(20)
AS
BEGIN
	INSERT INTO Products(ProductID, ProductName, Category, Price, Description) VALUES(@ProductId, @ProductName, @Category, @Price, @Description);
END
GO


CREATE VIEW view_Products 
AS 
SELECT * FROM Products;
GO
CREATE TABLE SoldProducts
(
	UserID VARCHAR(20),
	FOREIGN KEY (UserID) REFERENCES Users(EmailID),
	ProductID INT,
	FOREIGN KEY (ProductID) REFERENCES Products(ProductID),
	Price Money,
	Description VARCHAR(20),
	Geolocation VARCHAR(50),
	SoldDate DATE,
	DeliveryAddress VARCHAR(50)
)

GO
CREATE VIEW view_SoldProducts 
AS
SELECT UserID, ProductID, Price, Description, DeliveryAddress FROM SoldProducts;
GO

