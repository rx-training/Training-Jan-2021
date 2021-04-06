CREATE DATABASE BATA
USE BATA

CREATE TABLE Admins
(
AdminUsername VARCHAR(30),
AdminPassword VARCHAR(30)
);

INSERT INTO Admins VALUES('Admin1','Admin111')
INSERT INTO Admins VALUES('Admin2','Admin112')

DROP TABLE Admins
SELECT * FROM Admins

CREATE TABLE Customers
(
CustomerID INT CONSTRAINT PK_Customers_CustomerID PRIMARY KEY IDENTITY(1,1),
CustomerName VARCHAR(30),
CustomerEmail VARCHAR(30),
CustomerPassword VARCHAR(30),
CustomerMobile NUMERIC,
PhoneNumberCountryCode VARCHAR(30),
Gender VARCHAR(30),
OTP INT,
ReferralCode INT,
PinCode NUMERIC,
CustomerAddress VARCHAR(100),
Landmark VARCHAR(20),
City VARCHAR(20),
CustomerState VARCHAR(20),
Country VARCHAR(20),
Phone NUMERIC
);

INSERT INTO Customers (CustomerName,CustomerEmail,CustomerPassword,CustomerMobile,PhoneNumberCountryCode,Gender,OTP,
ReferralCode,PinCode,CustomerAddress,Landmark,City,CustomerState,Country,Phone) 
VALUES('Abc','abc@gmail.com','abc','9999999999','+91','Female','9999','1234','300000',
'10,Xyz Bunglows','Sola Bhagwat','Ahmedabad','Gujarat','India','079-23232323')
INSERT INTO Customers (CustomerName,CustomerEmail,CustomerPassword,CustomerMobile,PhoneNumberCountryCode,Gender,OTP,
ReferralCode,PinCode,CustomerAddress,Landmark,City,CustomerState,Country,Phone) 
VALUES('Xyz','xyz@gmail.com','xyz','9999999998','+91','Female','9995','123','300022',
'11,Xyz Bunglows','Sola Bhagwat','Ahmedabad','Gujarat','India','079-23232324')
INSERT INTO Customers (CustomerName,CustomerEmail,CustomerPassword,CustomerMobile,PhoneNumberCountryCode,Gender,OTP,
ReferralCode,PinCode,CustomerAddress,Landmark,City,CustomerState,Country,Phone) 
VALUES('Pqr','pqr@gmail.com','pqr','9999999997','+91','Female','9995','123','300022',
'4,Pqr Bunglows','Sola Bhagwat','Ahmedabad','Gujarat','India','079-23232327')

DROP TABLE Customers
SELECT * FROM Customers

CREATE TABLE Products
(
ProductCode VARCHAR(50) CONSTRAINT PK_Products_ProductCode PRIMARY KEY,
ProductPrice MONEY,
ProductDescription VARCHAR(50),
ProductImage VARCHAR(100),
SubCategoryID INT CONSTRAINT FK_SubCategories_SubCategoryID FOREIGN KEY REFERENCES SubCategories(SubCategoryID),
BrandID INT CONSTRAINT FK_Products_BrandID FOREIGN KEY REFERENCES Brands(BrandID),
Discount FLOAT,
Quantity INT
);

INSERT INTO Products VALUES('101','2000.00','Black Ballerinas Shoes for women','D:/Charmi',101,1,0.00,10)
INSERT INTO Products VALUES('102','900.00','Red Ballerinas Shoes for women','D:/Charmi',102,1,0.40,10)
INSERT INTO Products VALUES('103','2000.00','Black Sneakers for men','D:/Charmi',103,1,0.00,10)
INSERT INTO Products VALUES('104','900.00','Red Sneakers for men','D:/Charmi',104,2,0.50,10)
INSERT INTO Products VALUES('105','2000.00','Handbags for women','D:/Charmi',105,1,0.00,10)
INSERT INTO Products VALUES('106','900.00','Wallets for women','D:/Charmi',106,2,0.40,10)
INSERT INTO Products VALUES('107','2000.00','Belts for men','D:/Charmi',107,1,0.00,10)
INSERT INTO Products VALUES('108','900.00','Mask for men','D:/Charmi',108,2,0.50,10)

DROP TABLE Products
SELECT * FROM Products

CREATE TABLE Brands
(
BrandID INT CONSTRAINT PK_Brands_BrandID PRIMARY KEY ,
BrandName VARCHAR(20),
BrandImage VARCHAR(100)
);

INSERT INTO Brands VALUES(1,'Bata','D:/Charmi')
INSERT INTO Brands VALUES(2,'Scholl','D:/Charmi')

DROP TABLE Brands
SELECT * FROM Brands

CREATE TABLE Categories
(
CategoryID INT CONSTRAINT PK_Categories_CategoryID PRIMARY KEY,
CategoryName VARCHAR(20)
);

INSERT INTO Categories VALUES(1,'Women')
INSERT INTO Categories VALUES(2,'Men')
INSERT INTO Categories VALUES(3,'Kids')

DROP TABLE Categories
SELECT * FROM Categories

CREATE TABLE SubCategories
(
SubCategoryID INT CONSTRAINT PK_SubCategories_SubCategoryID PRIMARY KEY,
CategoryID INT CONSTRAINT FK_Categories_CategoryID FOREIGN KEY REFERENCES Categories(CategoryID),
SubCategoryName VARCHAR(20)
);

INSERT INTO SubCategories VALUES(101,1,'Ballerinas')
INSERT INTO SubCategories VALUES(102,1,'Ballerinas')
INSERT INTO SubCategories VALUES(103,2,'Sneakers')
INSERT INTO SubCategories VALUES(104,2,'Sneakers')
INSERT INTO SubCategories VALUES(105,1,'Handbags')
INSERT INTO SubCategories VALUES(106,1,'Wallets')
INSERT INTO SubCategories VALUES(107,2,'Belts')
INSERT INTO SubCategories VALUES(108,2,'Mask')

DROP TABLE SubCategories
SELECT * FROM SubCategories

CREATE TABLE Payment
(
PaymentID INT CONSTRAINT PK_Payment_PaymentID PRIMARY KEY,
OrderID INT CONSTRAINT FK_Payment_OrderID FOREIGN KEY REFERENCES Orders(OrderID),
Amount MONEY,
PaymentMode VARCHAR(20),
CardNumber VARCHAR(30),
ExpiryDate DATE,
CVV NUMERIC
);

DROP TABLE Payment
SELECT * FROM Payment

CREATE TABLE Orders
(
OrderID INT CONSTRAINT PK_Orders_OrderID  PRIMARY KEY IDENTITY(1,1),
ProductCode VARCHAR(50) CONSTRAINT FK_Products_ProductCode FOREIGN KEY REFERENCES Products(ProductCode),
ProductPrice MONEY,
Quantity INT,
Amount MONEY,
ProductDescription VARCHAR(100),
DateOfOrder DATE,
VoucherCode INT,
PaymentMode VARCHAR(20)
);

INSERT INTO Orders(ProductCode,ProductPrice,Quantity,Amount,ProductDescription,DateOfOrder,VoucherCode,PaymentMode)
VALUES('101','2000.00',1,'2000.00','Black Ballerinas Shoes for women','2021-03-26','999','cash')
INSERT INTO Orders(ProductCode,ProductPrice,Quantity,Amount,ProductDescription,DateOfOrder,VoucherCode,PaymentMode)
VALUES('101','2000.00',1,'2000.00','Black Ballerinas Shoes for women','2021-03-26','999','cash')
INSERT INTO Orders(ProductCode,ProductPrice,Quantity,Amount,ProductDescription,DateOfOrder,VoucherCode,PaymentMode)
VALUES('103','2000.00',1,'2000.00','Black Sneakers for Men','2021-03-26','999','cash')

DROP TABLE Orders
SELECT * FROM Orders

/*CREATE TABLE Cart
(
CartID INT PRIMARY KEY IDENTITY(1,1),
CustomerID INT CONSTRAINT FK_Cart_CustomerID FOREIGN KEY REFERENCES Customers(CustomerID),
ProductPrice MONEY,
ProductCode VARCHAR(50),
ProductDescription VARCHAR(50),
ProductImage VARCHAR(100),
Quantity INT,
Size INT
);*/

CREATE TABLE Cart
(
CartID INT PRIMARY KEY IDENTITY(1,1),
CustomerID INT CONSTRAINT FK_Cart_CustomerID FOREIGN KEY REFERENCES Customers(CustomerID),
ProductCode VARCHAR(50),
Quantity INT,
Size INT
);

INSERT INTO Cart(CustomerID,ProductCode,Quantity,Size)
VALUES(1,101,1,7)

DROP TABLE Cart
SELECT * FROM Cart

CREATE TABLE Offers
(
VoucherCode INT CONSTRAINT PK_Offers_VoucherCode PRIMARY KEY,
Discount FLOAT
);

DROP TABLE Offers
SELECT * FROM Offers


CREATE TABLE Sales
(
SaleID INT CONSTRAINT PK_Sale_SaleID PRIMARY KEY IDENTITY(1,1),
CustomerID INT CONSTRAINT FK_Sale_CustomerID FOREIGN KEY REFERENCES Customers(CustomerID),
OrderID INT CONSTRAINT FK_Sale_OrderID  FOREIGN KEY REFERENCES Orders(OrderID),
ProductCode VARCHAR(50) CONSTRAINT FK_Sale_ProductCode FOREIGN KEY REFERENCES Products(ProductCode),
);

INSERT INTO Sales(CustomerID,OrderID,ProductCode)
VALUES(1,1,101)
INSERT INTO Sales(CustomerID,OrderID,ProductCode)
VALUES(3,2,101)
INSERT INTO Sales(CustomerID,OrderID,ProductCode)
VALUES(2,3,103)

DROP TABLE Sales
SELECT * FROM Sales

CREATE TABLE Countries
(
CountryID INT CONSTRAINT PK_Countries_CountryID PRIMARY KEY,
CountryName VARCHAR(50),
CountryCode VARCHAR(20),
SiteAddress VARCHAR(150)
);

DROP TABLE Countries
SELECT * FROM Countries

-->1. STORED PROCEDURE FOR DISPLAYING PRODUCT DYNAMICALLY BY ADMIN
CREATE OR ALTER PROCEDURE SP_ProductDisplay
AS
BEGIN
SELECT p.ProductCode,p.ProductPrice,p.ProductDescription,p.ProductImage,b.BrandName,c.CategoryName
FROM Products p JOIN Brands b ON p.BrandID = b.BrandID JOIN SubCategories s ON s.SubCategoryID = p.SubCategoryID
JOIN Categories c ON c.CategoryId = s.CategoryID
END

SP_ProductDisplay

-->2. VIEW FOR PRODUCTS COMING AS PER CATEGORIES
CREATE OR ALTER VIEW View_Men
AS
SELECT p.ProductCode,p.ProductPrice,p.ProductDescription,p.ProductImage,b.BrandName,c.CategoryName
FROM Products p JOIN Brands b ON p.BrandID = b.BrandID JOIN SubCategories s ON s.SubCategoryID = p.SubCategoryID
JOIN Categories c ON c.CategoryId = s.CategoryID WHERE c.CategoryName = 'Men'

SELECT * FROM View_Men

CREATE OR ALTER VIEW View_Women
AS
SELECT p.ProductCode,p.ProductPrice,p.ProductDescription,p.ProductImage,b.BrandName,c.CategoryName
FROM Products p JOIN Brands b ON p.BrandID = b.BrandID JOIN SubCategories s ON s.SubCategoryID = p.SubCategoryID
JOIN Categories c ON c.CategoryId = s.CategoryID WHERE c.CategoryName = 'Women'

SELECT * FROM View_Women

CREATE OR ALTER VIEW View_Kids
AS
SELECT p.ProductCode,p.ProductPrice,p.ProductDescription,p.ProductImage,b.BrandName,c.CategoryName
FROM Products p JOIN Brands b ON p.BrandID = b.BrandID JOIN SubCategories s ON s.SubCategoryID = p.SubCategoryID
JOIN Categories c ON c.CategoryId = s.CategoryID WHERE c.CategoryName = 'Kids'

SELECT * FROM View_Kids

-->3. CREATE STORED PROCEDURE TO FETCH DATA AS PER CATEGORY WOMEN THERE IS SUBCATEGORY BALLERINAS

CREATE OR ALTER PROCEDURE SP_ProductDisplaySubCategories @SubCategory VARCHAR(20),@CategoryName VARCHAR(20)
AS
BEGIN
SELECT p.ProductCode,p.ProductPrice,p.ProductDescription,p.ProductImage,b.BrandName,c.CategoryName
FROM Products p JOIN Brands b ON p.BrandID = b.BrandID JOIN SubCategories s ON s.SubCategoryID = p.SubCategoryID
JOIN Categories c ON c.CategoryId = s.CategoryID WHERE s.SubCategoryName = @SubCategory AND c.CategoryName = @CategoryName
END 

SP_ProductDisplaySubCategories 'Ballerinas','Women'
SP_ProductDisplaySubCategories 'Sneakers','Men'
SP_ProductDisplaySubCategories 'Belts','Men'
SP_ProductDisplaySubCategories 'Handbags','Women'

-->4. VIEW FOR PRODUCTS COMING BELOW RS.999 AS PER CATEGORIES
CREATE OR ALTER VIEW View_Men_999
AS
SELECT p.ProductCode,p.ProductPrice,p.ProductDescription,p.ProductImage,b.BrandName,c.CategoryName
FROM Products p JOIN Brands b ON p.BrandID = b.BrandID JOIN SubCategories s ON s.SubCategoryID = p.SubCategoryID
JOIN Categories c ON c.CategoryId = s.CategoryID WHERE c.CategoryName = 'Men' AND p.ProductPrice < = '999.00'

SELECT * FROM View_Men_999

CREATE OR ALTER VIEW View_Women_999
AS
SELECT p.ProductCode,p.ProductPrice,p.ProductDescription,p.ProductImage,b.BrandName,c.CategoryName
FROM Products p JOIN Brands b ON p.BrandID = b.BrandID JOIN SubCategories s ON s.SubCategoryID = p.SubCategoryID
JOIN Categories c ON c.CategoryId = s.CategoryID WHERE c.CategoryName = 'Women' AND p.ProductPrice < = '999.00'

SELECT * FROM View_Women_999

CREATE OR ALTER VIEW View_Kids_999
AS
SELECT p.ProductCode,p.ProductPrice,p.ProductDescription,p.ProductImage,b.BrandName,c.CategoryName
FROM Products p JOIN Brands b ON p.BrandID = b.BrandID JOIN SubCategories s ON s.SubCategoryID = p.SubCategoryID
JOIN Categories c ON c.CategoryId = s.CategoryID WHERE c.CategoryName = 'Kids' AND p.ProductPrice < = '999.00'

SELECT * FROM View_Kids_999

-->5. CREATE STORED PROCEDURE TO FETCH DATA AS PER BRAND LIKE BATA AND CATEGORY WOMEN 

CREATE OR ALTER PROCEDURE SP_ProductDisplayBrandsCategories @BrandName VARCHAR(20),@CategoryName VARCHAR(20)
AS
BEGIN
SELECT p.ProductCode,p.ProductPrice,p.ProductDescription,p.ProductImage,b.BrandName,c.CategoryName
FROM Products p JOIN Brands b ON p.BrandID = b.BrandID JOIN SubCategories s ON s.SubCategoryID = p.SubCategoryID
JOIN Categories c ON c.CategoryId = s.CategoryID WHERE b.BrandName = @BrandName AND c.CategoryName = @CategoryName
END 

SP_ProductDisplayBrandsCategories 'BATA','Women'
SP_ProductDisplayBrandsCategories 'Scholl','Men'
SP_ProductDisplayBrandsCategories 'BATA','Men'
SP_ProductDisplayBrandsCategories 'Scholl','Women'

-->6. CREATE STORED PROCEDURE TO FETCH DATA AS PER BRAND NAME LIKE BATA

CREATE OR ALTER PROCEDURE SP_ProductsAsPerBrands @BrandName VARCHAR(20)
AS
BEGIN
SELECT p.ProductCode,p.ProductPrice,p.ProductDescription,p.ProductImage,b.BrandName,c.CategoryName
FROM Products p JOIN Brands b ON p.BrandID = b.BrandID JOIN SubCategories s ON s.SubCategoryID = p.SubCategoryID
JOIN Categories c ON c.CategoryId = s.CategoryID WHERE b.BrandName = @BrandName
END 

SP_ProductsAsPerBrands 'BATA'
SP_ProductsAsPerBrands 'Scholl'

-->7. CREATE STORED PROCEDURE TO FETCH DATA IF THERE IS DISCOUNT AS PER CATEGORY WOMEN THERE IS SUBCATEGORY BALLERINAS

CREATE OR ALTER PROCEDURE SP_ProductsAsPerDiscount @SubCategory VARCHAR(20),@CategoryName VARCHAR(20)
AS
BEGIN
SELECT p.ProductCode,p.ProductPrice,p.ProductDescription,p.ProductImage,b.BrandName,c.CategoryName
FROM Products p JOIN Brands b ON p.BrandID = b.BrandID JOIN SubCategories s ON s.SubCategoryID = p.SubCategoryID
JOIN Categories c ON c.CategoryId = s.CategoryID WHERE p.Discount > 0.00 AND SubCategoryName = @SubCategory AND CategoryName = @CategoryName
END 

SP_ProductsAsPerDiscount 'Ballerinas','Women'
SP_ProductsAsPerDiscount 'Sneakers','Men'
SP_ProductsAsPerDiscount 'Wallets','Women'
SP_ProductsAsPerDiscount 'Mask','Men'

-->8. SELECT PRODUCT WHICH IS MOST SOLD 
CREATE OR ALTER VIEW Most_Saled_Product AS 
SELECT TOP(1) ProductCode, RANK() OVER(ORDER BY ProductCode) AS 'rank' FROM Sales 

SELECT * FROM Most_Saled_Product 

-->CART DETAILS FOR A CUSTOMER SHOW
CREATE OR ALTER PROCEDURE SP_Customer @CustomerID INT
AS
SELECT c.CartID,c.CustomerID,c.Quantity,c.Size,p.ProductCode,p.ProductPrice,p.ProductDescription,p.ProductImage FROM Products p JOIN Cart c ON c.ProductCode = p.ProductCode
WHERE c.CustomerId = @CustomerID

SP_Customer @CustomerID = 1
SELECT* FROM Customers;
Select * from Sales
-->10 SALES INFORMATION
SELECT s.SaleID,c.CustomerID,s.OrderID,c.CustomerName,s.ProductCode,o.ProductPrice FROM Customers c JOIN Sales s ON s.CustomerID = c.CustomerID JOIN Orders o ON s.OrderID = o.OrderID; 