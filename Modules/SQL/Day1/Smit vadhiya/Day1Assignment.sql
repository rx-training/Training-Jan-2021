-----------------------------------------ASSIGNMENT--------------------------------------------

/*You have been hired to create a relational database to support a car sales business.
You need to store information on the business’s employees, inventory, and completed sales. 
You also need to account for the fact that each salesperson receives a different percentage 
of their sales in commission. What tables and columns would you create in your relational database,
and how would you link the tables?*/


/*
	1) CREATE TABLE TO STORE DATA OF EMPLOYEE AND INVENTORIES(CARS).WHERE COMMISION COLUMN IN
	   EMPLOYEE WILL BE UNIQUE KEY
	2) CREATE TABLE TO STORE SALE DETAIL WHICH SHOW THAT WHICH SALESMAN SALE WHICH 
	   CAR AND HOW MUCH COMMISION HE GOT 
	3) IN SALES TABLE WE GIVE FOREIGN KEY FROM EMPLOYEE TABLE AND INVENTORY TABLE
*/

CREATE DATABASE CarSalesBusiness

USE CarSalesBusiness

CREATE TABLE Employees
(
	EmployeeId INT NOT NULL CONSTRAINT pkEmployee PRIMARY KEY,
	FirstName VARCHAR(20) NOT NULL,
	LastName VARCHAR(20) NOT NULL,
	Email VARCHAR(20) NOT NULL,
	PhoneNumber INT NOT NULL,
	HireDate DATE NOT NULL,
	Salary MONEY NOT NULL,
	Commission VARCHAR(20) NOT NULL UNIQUE,
	Department VARCHAR(20) NOT NULL DEFAULT ('Marketing'),
)


CREATE TABLE Cars
(
	CarId INT NOT NULL CONSTRAINT pkCars PRIMARY KEY,
	CarName VARCHAR(20) NOT NULL,
	CompanyName VARCHAR(20) NOT NULL,
	Price MONEY NOT NULL,
	COLOR VARCHAR(20) NOT NULL
)

CREATE TABLE SaleHistory
(
	SaleId INT NOT NULL CONSTRAINT pkSaleHistory PRIMARY KEY,
	EmployeeId INT NOT NULL,
	CarId INT NOT NULL,
	SellingDate DATE NOT NULL,
	SellingPrice MONEY NOT NULL,
	CONSTRAINT fkEmployeeId FOREIGN KEY (EmployeeId) REFERENCES Employees(EmployeeId),
	CONSTRAINT fkCarId FOREIGN KEY (CarId) REFERENCES Cars(CarId),
)
