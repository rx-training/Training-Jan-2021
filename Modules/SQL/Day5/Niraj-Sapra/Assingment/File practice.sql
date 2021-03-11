CREATE DATABASE DAY5SQLMore;
USE DAY5SQLMore;

CREATE TABLE Cars(Vehicle_identification_number_VIN varchar(12),
Make varchar(15),
Model varchar(12),
Years decimal(6,0),
Mileage decimal(6,0),
Asking_price decimal(6,0) ,
Invoice_price decimal(6,0))
;

INSERT INTO Cars(Vehicle_identification_number_VIN,Make,Model ,Years ,Mileage ,Asking_price  ,Invoice_price ) VALUES 
('Vanambes123','Toyota','Prius','2014','20','732000.00','418579.00');

CREATE TABLE Dealerships(Dealership_ID decimal(6,0) ,
Names  varchar(20),
Street_Address varchar(50),
Citys varchar(15),
States varchar(15));

INSERT INTO Dealerships(Dealership_ID,Names,Street_Address ,Citys ,States) VALUES 
('1','Honda Sales','Near By Vithalvadi petrol pump','Bhavnagar','Gujrat'),
('2','Yamaha World','On Road in Vadhavadi','Bhavnagar','Gujrat'),
('3','Concept Hyundai ','Near By Rangoli park','Bhavnagar','Gujrat');


CREATE TABLE Salespersons(Salespersonid decimal(6,0),Name varchar(15));

INSERT INTO Salespersons(Salespersonid,Name) VALUES ('1','Niraj Sapra'),('2','Priya Maheta'),('3','Ajay Radhuvansi');

CREATE TABLE Customer (customerid decimal(6,0),name varchar(15), address varchar(50), city varchar(15), state varchar(15));
INSERT INTO Customer(customerid, name, address, city, state) VALUES('1','Raj Radhuvansi','Vadhavadhi road','Bhavnagar','Gujrat');


CREATE TABLE Reportstos (reportstoid decimal(6,0), salespersonid decimal(6,0), managingsalespersonid decimal(6,0));
INSERT INTO Reportstos (reportstoid, salespersonid, managingsalespersonid) VALUES('1','1','1');


CREATE TABLE Worksat (worksatid decimal(6,0), salespersonid decimal(6,0), dealershipid decimal(6,0), monthworked  varchar(10), basesalaryformonth varchar(10));
INSERT INTO worksat (worksatid, salespersonid, dealershipid, monthworked, basesalaryformonth) VALUES('1','Raj Radhuvansi','Vadhavadhi road','Bhavnagar','Gujrat');


CREATE TABLE Inventorys (inventoryid decimal(6,0), vin decimal(6,0), dealershipid decimal(6,0));
INSERT INTO Customer(customerid, name, address, city, state) VALUES('1','Raj Radhuvansi','Vadhavadhi road','Bhavnagar','Gujrat');


CREATE TABLE Sales (saleid decimal(6,0), vin decimal(6,0), customerid decimal(6,0), salespersonid decimal(6,0), dealershipid decimal(6,0), saleprice decimal(6,0), saledate date);
INSERT INTO Customer(customerid, name, address, city, state) VALUES('1','Raj Radhuvansi','Vadhavadhi road','Bhavnagar','Gujrat');




