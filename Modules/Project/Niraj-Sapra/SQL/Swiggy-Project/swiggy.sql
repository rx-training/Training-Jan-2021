
CREATE DATABASE Swiggy_Project

USE Swiggy_Project

/*ALTER Table Product
Add Restorent_ID INT CONSTRAINT fkresids FOREIGN KEY REFERENCES Restorent (Restorent_Id);
*/
CREATE TABLE Product (Product_Id int CONSTRAINT pkproduct PRIMARY KEY ,Product_Name Varchar(50),Product_Price Money,Product_Image varchar(200),Restorent_ID INT CONSTRAINT fkresids FOREIGN KEY REFERENCES Restorent (Restorent_Id));

INSERT INTO Product (Product_Id,Product_Name,Product_Price) VALUES ('101','Panner kofta','150.00'),
('102','Panner Handi','180.00'),('103','Panner Tika','160.00'),('104','Veg Manchurian','120.00'),
('105','Veg Hakaa Nudles','120.00'),
('106','Veg Panner Rise','140.00'),
('107','Manchuriyanrise','130.00'), 
('108','Masala dosa','130.00'), 
('109','Masur dosa','140.00'), 
('110','Paper dosa','80.00'), 
('111','Dal-vada','70.00'), 
('112','Butter Roti','15.00'), 
('113','Tandur Roti','18.00'), 
('114','Tandur Nan','22.00'),
('115','Chaash','20.00'),
('116','Milk','25.00'),
('117','Dhahi','20.00'),
('118','Lassi','35.00')

CREATE TABLE Category (Category_Id int CONSTRAINT pkcategory PRIMARY KEY ,Category_Name Varchar(50),Res_IDCATEGORY INT CONSTRAINT fkrescategory FOREIGN KEY REFERENCES Restorent (Restorent_Id));

/*ALTER TABLE CATEGORY
ADD Res_IDCATEGORY INT CONSTRAINT fkrescategory FOREIGN KEY REFERENCES Restorent (Restorent_Id)
*/
CREATE TABLE Customer (Customer_Id int CONSTRAINT pkcustomer PRIMARY KEY ,Customer_Name Varchar(50)
,Customer_Phoneno Varchar(10),Customer_Email varchar(100) );
 
ALTER TABLE  Category
ADD RESID FKresIdcategory Res_IDCATEGORY INT CONSTRAINT fkrescategory FOREIGN KEY REFERENCES Restorent (Restorent_Id)

/*Alter Table Customer
Alter Column Customer_Phoneno Varchar(10) */
Create table Offer_Status (Offer_Status_id int NOT NULL PRIMARY KEY ,Offer_Status_ varchar(50));

INSERT INTO Offer_Status (Offer_Status_id,Offer_Status_) Values('1','10% Discount'),
('2','55 Off Total'),
 ('3','Diwali Discount'),
('4','Weekend Discount'),
('5','Holi')

CREATE TABLE Offer(Offer_Id int CONSTRAINT pkoffer PRIMARY KEY ,Offer_Status_id int CONSTRAINT fkoffers FOREIGN KEY REFERENCES Offer_Status (Offer_Status_id),Offer_Discount_Price Money);

Create table Quote_Item (Quote_Item_id int  PRIMARY KEY,Quote_Item_product int CONSTRAINT fkquoteItempro 
FOREIGN KEY REFERENCES Product (Product_Id))

Create table Quote(Quote_id int Primary key,Quote_subtotal Money,Shippment_tax Money,
Quote_FinalTotal Money,Quote_Discount Money 
,ShippmentName varchar(50));

Create table Order_Status (Order_Status_id int NOT NULL PRIMARY KEY ,Order_Status_ varchar(50));

INSERT INTO Order_Status (Order_Status_id,Order_Status_) Values('1','holded'),
('2','complete'),
 ('3','fraud'),
('4','pandding'),
('5','canceled'),
('6','closed')

CREATE TABLE Orders(Order_Id int CONSTRAINT pkorder PRIMARY KEY,
CUSTOMER_ID INT CONSTRAINT fkcustomerid FOREIGN KEY REFERENCES Customer(Customer_Id),
Offer_Id int CONSTRAINT FKofferid FOREIGN KEY REFERENCES Offer(Offer_Id),Current_times DATE);

Create table Payment_type (Payment_type_id int NOt NULL PRIMARY KEY ,Payment_Name varchar(50));

INSERT INTO Payment_type (Payment_type_id,Payment_Name) Values('1','Cash On Delivery'),
('2','Netbanking'),
('3','Credit/Dabit Card Payment'),
('4','Paytm'),
('5','Google Pay'),
('6','Phone Pay')


CREATE TABLE Payment(Payment_Id int CONSTRAINT pkpayment PRIMARY KEY,
CUSTOMER_ID INT CONSTRAINT fkPAYCUSTOMERID FOREIGN KEY REFERENCES Customer(Customer_Id),Order_ID int Constraint fkorderid REFERENCES Orders(Order_Id),Current_times DATETime,
Paymenttype INT constraint fkpaymenttype FOREIGN KEY REFERENCES Payment_type (Payment_type_id),PAY_TOTLE_PRICE MONEY);

CREATE TABLE Shipment (Shipment_Id int CONSTRAINT pkshipment PRIMARY KEY ,Shipment_Status Varchar(50),
Order_Id int CONSTRAINT fkorderidshipment FOREIGN KEY REFERENCES Orders(Order_Id),
Customer_id INT CONSTRAINT fkcustomeridshipment FOREIGN KEY REFERENCES Customer(Customer_Id));

CREATE TABLE Creditmemo (Creditmemo_Id int CONSTRAINT pkcreditmemo PRIMARY KEY 
,Order_Id int CONSTRAINT fkordercreditmemo FOREIGN KEY REFERENCES Orders(Order_Id),
Total_price money,Customer_id INT CONSTRAINT fkcustomeridcraditmemo FOREIGN KEY REFERENCES Customer(Customer_Id));

CREATE TABLE Invoice (Invoice_Id int CONSTRAINT pkinvoice PRIMARY KEY ,Order_Id int CONSTRAINT fkorderinvoiceid 
FOREIGN KEY REFERENCES Orders(Order_Id),Total_price money,Customer_id INT CONSTRAINT fkcustomeridinvoice
FOREIGN KEY REFERENCES Customer(Customer_Id));


CREATE TABLE Restorent (Restorent_Id int CONSTRAINT pkrestorent PRIMARY KEY,Restorent_Name Varchar(100),
Restorent_City Varchar(50),Rest_FoodPRICETWOPERSON MONEY,Restorent_IMAGE Varchar(100));

-->CREATE STORE PROCEDURE TO FATCH DATA AS PRODUCT DATA BASED ON PER CATEGORY NAME 

CREATE PROCEDURE PSSearchProd
@categoryName varchar(20)
AS
BEGIN
PRINT @categoryName
SELECT P.Product_Id,P.Product_Name,P.Product_Price  FROM Product P JOIN Category C   ON C.Res_IDCATEGORY=P.Restorent_ID 
WHERE C.Category_Name = @categoryName
END

EXEC PSSearchProd 'Panjabi'
EXEC PSSearchProd 'Chinese'
EXEC PSSearchProd 'Starter'



-->CREATE VIEW SHOW ALL PRODUCT BASED ON RESTORENT   

CREATE OR ALTER VIEW VIEW_Product  
AS
SELECT R.Restorent_Name,P.Product_Name,P.Product_Price FROM Restorent R JOIN Product P ON P.Restorent_ID=R.Restorent_Id
WHERE R.Restorent_City='Bhavnagar'

SELECT * from VIEW_Product

-->function for quote


-->CREATE VIEW last 5 order ALL    

SELECT * FROM Orders 
	


