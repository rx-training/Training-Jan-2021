CREATE DATABASE Carsdb;

USE Carsdb;

CREATE TABLE Cars
(
	CarID int NOT NULL PRIMARY KEY,
	VIN varchar(20) NOT NULL,
	Make varchar(20) NOT NULL,
	Model varchar(20) NOT NULL,
	ModelYear int NOT NULL,
	Mileage int NOT NULL,
	Askprice int NOT NULL,
	Invoiceprice int NOT NULL
)
/*DROP TABLE Cars; */
INSERT INTO Cars (CarID,VIN,Make,Model,ModelYear,Mileage,Askprice,Invoiceprice) VALUES(12,'GJ01MX2222','Toyota','Innova',2010,30,400000,420000);
INSERT INTO Cars (CarID,VIN,Make,Model,ModelYear,Mileage,Askprice,Invoiceprice) VALUES(13,'GJ01MX2223','Toyota','Fortuner',2012,25,1400000,1420000);
INSERT INTO Cars (CarID,VIN,Make,Model,ModelYear,Mileage,Askprice,Invoiceprice) VALUES(14,'MH01MX2224','Toyota','Innova',2015,30,400000,420000);
INSERT INTO Cars (CarID,VIN,Make,Model,ModelYear,Mileage,Askprice,Invoiceprice) VALUES(15,'RJ01MX2225','Maruti','Swift',2005,30,400000,420000);
INSERT INTO Cars (CarID,VIN,Make,Model,ModelYear,Mileage,Askprice,Invoiceprice) VALUES(16,'RJ07MX2225','Hyundai','i20',2005,30,400000,420000);
INSERT INTO Cars (CarID,VIN,Make,Model,ModelYear,Mileage,Askprice,Invoiceprice) VALUES(17,'RJ09MX2225','BMW','MX3',2005,30,400000,420000);


CREATE TABLE Dealerships
(
	DealershipID int PRIMARY KEY,
	Name varchar(20) NOT NULL,
	Address varchar(20) NOT NULL,
	City varchar(20) NOT NULL,
	State varchar(20) NOT NULL
)

INSERT INTO Dealerships (DealershipID,Name,Address,City,State) VALUES(51,'XYZ Cars','B-308 Sports Enclave','Ahmedabad','Gujarat');
INSERT INTO Dealerships (DealershipID,Name,Address,City,State) VALUES(52,'Super Cars','C-308 Vasant Vihar','Delhi','Delhi');
INSERT INTO Dealerships (DealershipID,Name,Address,City,State) VALUES(53,'Deluxe Car Sellers','32 Plot No GIDC', 'Rajkot', 'Gujarat');
INSERT INTO Dealerships (DealershipID,Name,Address,City,State) VALUES(54,'Special Car Agency','D-204 Naroda','Mumbai', 'Maharashtra');
INSERT INTO Dealerships (DealershipID,Name,Address,City,State) VALUES(55,'Hero Honda Car World','F-3704 Naroda','Rajkot', 'Gujarat');



CREATE TABLE Salespersons
(
	SalespersonID int PRIMARY KEY,
	Name varchar(20) NOT NULL
)

INSERT INTO Salespersons (SalespersonID,Name) VALUES(81,'Vishakha');
INSERT INTO Salespersons (SalespersonID,Name) VALUES(82,'Raj Patel');
INSERT INTO Salespersons (SalespersonID,Name) VALUES(83,'Yash Panchal');
INSERT INTO Salespersons (SalespersonID,Name) VALUES(84,'Karan Chauhan');


CREATE TABLE Customers
(
	CustomerID int PRIMARY KEY,
	Name varchar(20) NOT NULL,
	Address varchar(20) NOT NULL,
	City varchar(20) NOT NULL,
	State varchar(20) NOT NULL
)
SELECT * FROM Customers;
INSERT INTO Customers (CustomerID,Name,Address,City,State) VALUES(151,'Mr. Vikram Patel','Naroda','Ahmedabad','Gujarat');
INSERT INTO Customers (CustomerID,Name,Address,City,State) VALUES(152,'Mr. Rakesh Patel','E-33 Flat-22 Odhav','Mumbai','Maharashtra');
INSERT INTO Customers (CustomerID,Name,Address,City,State) VALUES(153,'Mr. Vikash Mehta','Bapunagar','Ahmedabad','Gujarat');
INSERT INTO Customers (CustomerID,Name,Address,City,State) VALUES(154,'Mr. Jay Panchal','A-22 Radhe Flats','Rajkot','Gujarat');


CREATE TABLE Reportstos
(
	ReportstoID int PRIMARY KEY,
	SalespersonID int REFERENCES Salespersons(SalespersonID),
	ManagingsalespersonID int
)
/* DROP TABLE Reportstos; */
INSERT INTO Reportstos (ReportstoID, SalespersonID, ManagingsalespersonID) VALUES(201,82,301);
INSERT INTO Reportstos (ReportstoID, SalespersonID, ManagingsalespersonID) VALUES(202,84,302);
INSERT INTO Reportstos (ReportstoID, SalespersonID, ManagingsalespersonID) VALUES(203,83,301);
INSERT INTO Reportstos (ReportstoID, SalespersonID, ManagingsalespersonID) VALUES(204,82,303);
INSERT INTO Reportstos (ReportstoID, SalespersonID, ManagingsalespersonID) VALUES(205,81,NULL);
INSERT INTO Reportstos (ReportstoID, SalespersonID, ManagingsalespersonID) VALUES(206,84,NULL);
INSERT INTO Reportstos (ReportstoID, SalespersonID, ManagingsalespersonID) VALUES(207,84,82);



SELECT * FROM Reportstos;


CREATE TABLE Worksat
(
	WorksatID int PRIMARY KEY,
	SalespersonID int REFERENCES Salespersons(SalespersonID),
	DealershipID int REFERENCES Dealerships(DealershipID),
	MonthWorked varchar(20) NOT NULL,
	BaseSalaryForMonth int NOT NULL
)
/* DROP TABLE Worksat; */


INSERT INTO Worksat (WorksatID,SalespersonID,DealershipID,MonthWorked,BaseSalaryForMonth) VALUES(801,81,53,'March 2010',6000);
INSERT INTO Worksat (WorksatID,SalespersonID,DealershipID,MonthWorked,BaseSalaryForMonth) VALUES(802,81,52,'April 2012',8000);
INSERT INTO Worksat (WorksatID,SalespersonID,DealershipID,MonthWorked,BaseSalaryForMonth) VALUES(803,84,53,'Dec 2008',16000);
INSERT INTO Worksat (WorksatID, SalespersonID,DealershipID,MonthWorked,BaseSalaryForMonth) VALUES(804,82,51,'Feb 2017',5000);

CREATE TABLE Inventory
(
	InventoryID int PRIMARY KEY,
	VIN varchar(20) NOT NULL,
	DealershipID int REFERENCES Dealerships(DealershipID)
)

/* DROP TABLE Inventory; */

INSERT INTO Inventory (InventoryID,VIN,DealershipID) VALUES(1001, 'GJ01MX2222',51);
INSERT INTO Inventory (InventoryID,VIN,DealershipID) VALUES(1002, 'GJ01MX2223',51);
INSERT INTO Inventory (InventoryID,VIN,DealershipID) VALUES(1004, 'MH01MX2224',53);
INSERT INTO Inventory (InventoryID,VIN,DealershipID) VALUES(1006, 'RJ01MX2225',54);
INSERT INTO Inventory (InventoryID,VIN,DealershipID) VALUES(1007, 'RJ07MX2225',55);
INSERT INTO Inventory (InventoryID,VIN,DealershipID) VALUES(1008, 'RJ09MX2225',55);


SELECT * FROM Inventory;

CREATE TABLE Sales
(
	SalesID int PRIMARY KEY,
	VIN varchar(20) NOT NULL,
	CustomerID int REFERENCES Customers(CustomerID),
	SalespersonID int REFERENCES Salespersons(SalespersonID),
	DealershipID int REFERENCES Dealerships(DealershipID),
	Saleprice int NOT NULL,
	Saledate date NOT NULL
)
/* DROP TABLE Sales; */

INSERT INTO Sales (SalesID,VIN,CustomerID,SalespersonID,DealershipID,Saleprice,Saledate) VALUES(1501,'UP01MX2223',151,81,53,600000,'04-06-2018');
INSERT INTO Sales (SalesID,VIN,CustomerID,SalespersonID,DealershipID,Saleprice,Saledate) VALUES(1502,'MP01MX2223',152,83,54,400000,'04-08-2020');
INSERT INTO Sales (SalesID,VIN,CustomerID,SalespersonID,DealershipID,Saleprice,Saledate) VALUES(1503,'HR01MX2223',153,81,52,1200000,'01-06-2010');
INSERT INTO Sales (SalesID,VIN,CustomerID,SalespersonID,DealershipID,Saleprice,Saledate) VALUES(1504,'RJ01MX2223',154,84,51,700000,'04-01-2012');


/* 1. Find the names of all salespeople who have ever worked for the company at any dealership. */
SELECT Name FROM Salespersons S JOIN Worksat W ON S.SalespersonID = W.SalespersonID;

/* 2. List the Name, Street Address, and City of each customer who lives in Ahmedabad. */
SELECT Name, Address, City, State FROM Customers WHERE City = 'Ahmedabad';

/* 3. List the VIN, make, model, year, and mileage of all cars in the inventory of the dealership named "Hero Honda Car World". */
SELECT C.VIN, C.Make, C.Model, C.ModelYear, C.Mileage FROM Cars C JOIN Inventory I ON C.VIN = I.VIN JOIN Dealerships D ON D.DealershipID = I.DealershipID WHERE D.Name = 'Hero Honda Car World';

/* 4. List names of all customers who have ever bought cars from the dealership named "Deluxe Car Sellers". */
SELECT C.Name FROM Customers C JOIN Sales S ON C.CustomerID = S.CustomerID JOIN Dealerships D ON S.DealershipID = D.DealershipID WHERE D.Name = 'Deluxe Car Sellers';

/* 5. For each car in the inventory of any dealership, list the VIN, make, model, and year of the car, along with the name, city, and state of the dealership whose inventory contains the car. */
SELECT C.VIN, C.Make, C.Model, C.ModelYear, D.Name, D.City, D.State FROM Cars C JOIN Inventory I ON C.VIN = I.VIN JOIN Dealerships D ON D.DealershipID = I.DealershipID; 

/* 6. Find the names of all salespeople who are managed by a salesperson named "Raj Patel". */
SELECT S.Name FROM Salespersons S JOIN Reportstos R ON S.SalespersonID = R.ManagingsalespersonID WHERE S.Name='Raj Patel' ;

/* 7. Find the names of all salespeople who do not have a manager. */
SELECT S.Name, R.ManagingsalespersonID FROM Salespersons S LEFT JOIN Reportstos R ON R.SalespersonID = S.SalespersonID WHERE R.ManagingsalespersonID = NULL;

/* 8. Find the total number of dealerships. */
SELECT COUNT(DealershipID) AS "Total Number of Dealerships" FROM Dealerships;

/* 9. List the VIN, year, and mileage of all "Toyota Innova" in the inventory of the dealership named "XYZ Cars". (Note that a "Toyota Innova" is indicated by the make being "Toyota" and the model being "Innova".) */
SELECT C.VIN, C.ModelYear, C.Mileage FROM Cars C JOIN Inventory I ON C.VIN = I.VIN JOIN Dealerships D ON D.DealershipID = I.DealershipID WHERE D.Name = 'XYZ Cars' AND C.Make = 'Toyota' AND C.Model = 'Innova';

/* 10. Find the name of all customers who bought a car at a dealership located in a state other than the state in which they live. */
SELECT C.Name FROM Customers C JOIN Sales S ON C.CustomerID = S.CustomerID JOIN Dealerships D ON S.DealershipID = D.DealershipID WHERE D.State != D.State; 

/* 11. Find the name of the salesperson that made the largest base salary working at the dealership named "Ferrari Sales" during January 2010. */
SELECT Name FROM (SELECT DENSE_RANK() OVER (ORDER BY W.BaseSalaryForMonth DESC) [d_Rank],
S.SalespersonID, S.Name, W.WorksatID, W.Monthworked, W.BaseSalaryForMonth, W.DealershipID, D.Name [D.Name], D.Address, D.State FROM Salespersons S JOIN Worksat W ON S.SalespersonID = W.SalespersonID
JOIN Dealerships D ON D.DealershipID = W.DealershipID WHERE D.Name = 'XYZ Cars') AS table1 JOIN Sales S ON S.SalespersonID = table1.SalespersonID WHERE d_Rank = 1 AND YEAR(S.Saledate) = 2010 
AND DATENAME(MM,S.Saledate) = 'Jan';

/* 12. List the name, street address, city, and state of any customer who has bought more than two cars from all dealerships combined since January 1, 2010. */
SELECT C.Name, C.Address, C.City, C.State FROM ( SELECT DENSE_RANK() OVER (PARTITION BY CustomerID ORDER BY SalesID) AS d_Rank, * FROM Sales) AS table1 JOIN Customers C ON table1.CustomerID = C.CustomerID WHERE d_Rank >= 2 AND Saledate >= '2010-01-01';

/* 13. List the name, salesperson ID, and total sales amount for each salesperson who has ever sold at least one car. The total sales amount for a salesperson is the 
sum of the sale prices of all cars ever sold by that salesperson. */
SELECT SP.SalespersonID, SP.Name, SUM(S.Saleprice) AS "TOTAL PRICE" FROM Sales S JOIN Salespersons SP ON S.SalesID = SP.SalespersonID GROUP BY SP.SalespersonID,SP.Name;

/* 14. Find the names of all customers who bought cars during 2010 who were also salespeople during 2010. For the purpose of this query, assume that no two people have the same name. */
SELECT C.Name FROM Customers C JOIN Salespersons SP ON C.CustomerID=SP.SalespersonID JOIN Sales S ON SP.SalespersonID = S.SalespersonID WHERE S.Saledate LIKE '%2010%' ;

/* 15. Find the name and salesperson ID of the salesperson who sold the most cars for the company at dealerships located in Gujarat between March 1, 2010 and March 31, 2010. */
SELECT SP.SalespersonID, SP.Name, SUM(ISNULL(W.BaseSalaryForMonth, 0) + ISNULL(((C.Askprice - C.Invoiceprice) * 5 / 100), 0)) [GROSS PAY] FROM Salespersons SP LEFT JOIN Sales S ON S.SalespersonID = SP.SalespersonID
LEFT JOIN Cars C ON C.VIN = S.VIN RIGHT JOIN Worksat W ON W.SalespersonID = SP.SalespersonID WHERE DATENAME(MM, S.Saledate) = 'March' AND YEAR(S.Saledate) = 2010 
GROUP BY SP.SalespersonID, SP.Name ORDER BY SP.SalespersonID;

/* 16. Calculate the payroll for the month of March 2010. */
SELECT W.MonthWorked,SP.Name ,SP.SalespersonID,W.BaseSalaryForMonth FROM Worksat W JOIN Salespersons SP ON SP.SalespersonID = W.SalespersonID WHERE MonthWorked LIKE 'March 2010';