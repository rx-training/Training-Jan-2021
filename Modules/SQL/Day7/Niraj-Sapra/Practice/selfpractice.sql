CREATE DATABASE DAY7SQL;

USE DAY7SQL;

CREATE TABLE Customers(
CustomerId INT NOT NULL PRIMARY KEY ,
Name VARCHAR(100) NOT NULL,
Address VARCHAR(255) NOT NULL,
City VARCHAR(50) NOT NULL,
State VARCHAR(50) NOT NULL,
Model VARCHAR(25) NOT NULL,
AskPrice MONEY NOT NULL);

INSERT INTO Customers(CustomerId,Name,Address,City,State,Model,AskPrice) VALUES 
('1','Nill Sapra','Near By Vithalvadi petrol pump','Bhavnagar','Gujrat','test1','100'),
('2','Namra Patel','On Road in Vadhavadi','Bhavnagar','Gujrat','test2','200'),
('3','Vatsal Parmal ','Near By Rangoli park','Bhavnagar','Gujrat','test3','300'),
('4','Nihar Shodpara','Near By Himaliya Mole','Bhavnagar','Gujrat','test4','400'),
('5','Susant Rajput','On Road in Kaliyabid','Bhavnagar','Gujrat','test5','500');

CREATE TABLE Cars (
CarID INT NOT NULL PRIMARY KEY ,
VIN INT NOT NULL CONSTRAINT uqCars UNIQUE,
Make VARCHAR(25) NOT NULL,
Model VARCHAR(25) NOT NULL,
Year VARCHAR(10) NOT NULL CONSTRAINT chkYearCar CHECK(Year LIKE '[0-9][0-9][0-9][0-9]'),
Mileage INT NOT NULL,
AskPrice MONEY NOT NULL,
InvoicePrice MONEY NOT NULL);

Truncate table Cars; 
INSERT INTO Cars(CarID,VIN ,Make ,Model ,Year ,Mileage ,AskPrice ,InvoicePrice ) VALUES 
('1','11111','Toyota','Prius','2014','15','732000','418000'),
('2','11112','Honda ','Honda City','2021','17','924000','778000'),
('3','11113','TATA','Neno','2016','15','224000','194000'),
('4','11114','Hyundai','Varna','2018','15','910000','789000'),
('5','11115','Renault India','Daster','2020','15','525000','375000'),
('6','11116','Renault India','Daster','2020','15','525000','375000');

/*UNION*/

SELECT cu.Model,cu.AskPrice FROM Customers cu 
UNION  
SELECT c.Model,c.AskPrice FROM Cars c ;


/*desent table*/

SELECT AskPrice FROM (SELECT DENSE_RANK()  over (ORDER BY Askprice)[rank],* From Cars)[table_tb1] WHERE [rank]=2; 

SELECT AskPrice FROM (SELECT DENSE_RANK()  over (ORDER BY Askprice) renk,* From Cars)[table_tb1] WHERE [renk]>0; 

/*CTE(Comman Table Expration) table*/

WITH test_CTE (CarID,Model,AskPrice) AS (SELECT CarID,Model,AskPrice FROM Cars Where CarID IS NOT NULL )

SELECT * FROM test_CTE;