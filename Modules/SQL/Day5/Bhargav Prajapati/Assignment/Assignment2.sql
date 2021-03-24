USE AssignmentdbDay5
CREATE TABLE Car(
CarId int NOT NULL,
Vin int PRIMARY KEY,
Make varchar(30) NOT NULL,
Model varchar(30) NOT NULL,
Year int NOT NULL,
Mileage int NOT NULL,
AskPrice int NOT NULL,
InvoicePrice int NOT NULL
)
INSERT INTO  Car(CarId,Vin,Make,Model,Year,Mileage,AskPrice,InvoicePrice) VALUES (1,1234,'Toyota','Prius',2010,25,250000,280000),
																				 (2,5678,'Toyota','Inova',2001,15,150000,180000),
																				 (3,9101112,'Honda','I20',2006,27,80000,100000),
																				 (4,13141516,'Honda','I10',2010,18,50000,280000),
																				 (5,17181920,'Jeep','Compass',2014,23,350000,400000)
INSERT INTO  Car(CarId,Vin,Make,Model,Year,Mileage,AskPrice,InvoicePrice) VALUES (6,21222324,'Jeep','Thar',2021,20,500000,520000)
CREATE TABLE DealerShip(
DealerShipId int PRIMARY KEY,
Name varchar(30) NOT NULL,
Address varchar(30) NOT NULL,
City varchar(30) NOT NULL,
State varchar(30) NOT NULL
)
INSERT INTO DealerShip(DealerShipId,Name,Address,City,State) VALUES (1,'Toyota AutoWorld','ABC','AHMEDABAD','GUJARAT'),
																	(2,'Honda AutoWorld','XYZ','AHMEDABAD','GUJARAT'),
																	(3,'Toyota AutoWorld','PQR','MUMBAI CITY','MUMBAI'),
																	(4,'Honda AutoWorld','UVW','MUMBAI CITY','MUMBAI'),
																	(5,'Jeep AutoWorld','JKL','UDAIPUR','RAJASTAN'),
																	(6,'Jeep AutoWorld','MNO','UDAIPUR','RAJASTAN')
																	
CREATE TABLE SalesPerson(
SalesPersonId int PRIMARY KEY,
Name varchar(30) NOT NULL,
)
INSERT INTO SalesPerson(SalesPersonId,Name) VALUES (1,'Jenil'),
												   (2,'Akash'),
												   (3,'Raj'),
												   (4,'Rahul'),
												   (5,'Ayaush')
INSERT INTO SalesPerson(SalesPersonId,Name) VALUES (6,'Misha')
INSERT INTO SalesPerson(SalesPersonId,Name) VALUES (7,'Mayank')
INSERT INTO SalesPerson(SalesPersonId,Name) VALUES (8,'Adam Smith')
CREATE TABLE Customers(
CustomerId int PRIMARY KEY,
Name varchar(30) NOT NULL,
Address varchar(30) NOT NULL,
City varchar(30) NOT NULL,
State varchar(30) NOT NULL
)
INSERT INTO Customers(CustomerId,Name,Address,City,State) VALUES (1,'Dixit','ABC','AHMEDABAD','GUJARAT'),
																 (2,'Vishal','ABC','AHMEDABAD','GUJARAT'),
																 (3,'Aryan','PQR','AHMEDABAD','GUJARAT'),
																 (4,'Parth','JKL','MUMBAI CITY','MUMBAI'),
																 (5,'Hetvi','ABC','UDAIPUR','RAJASTAN')
																 
CREATE TABLE ReportSto(
ReportstoId int Primary Key,
SalesPersonId int NOT NULL CONSTRAINT fkSalesPersonId FOREIGN KEY(SalesPersonId) REFERENCES SalesPerson(SalesPersonId),
ManagingSalesPersonId int  
)
INSERT INTO ReportSto(ReportstoId,SalesPersonId,ManagingSalesPersonId) VALUES (1,1,1),
																			  (2,2,2),
																			  (3,3,3),
																			  (4,4,4),
																			  (5,5,5)
INSERT INTO ReportSto(ReportstoId,SalesPersonId,ManagingSalesPersonId) VALUES(6,2,8)
INSERT INTO ReportSto(ReportstoId,SalesPersonId,ManagingSalesPersonId) VALUES(7,5,NULL)
																	  
DROP TABLE ReportSto
CREATE TABLE WorkSet(
WorksetId int PRIMARY KEY,
SalesPersonId int  FOREIGN KEY REFERENCES SalesPerson(SalesPersonId),
DealerShipId int  FOREIGN KEY REFERENCES  DealerShip(DealerShipId),
MonthWorked int,
BaseSalaryForMonth int NOT NULL
)
INSERT INTO WorkSet(WorksetId,SalesPersonId,DealerShipId,MonthWorked,BaseSalaryForMonth) VALUES (1,1,1,5,2000),
																								(2,2,2,8,7000),
																								(3,3,3,5,2000),
																								(4,4,4,10,8000),
																								(5,5,5,7,5000)
CREATE TABLE Inventory(
InventoryId int PRIMARY KEY,
Vin int FOREIGN KEY REFERENCES Car(Vin),
DealerShipId int  FOREIGN KEY REFERENCES  DealerShip(DealerShipId)
)
INSERT INTO Inventory (InventoryId,Vin,DealerShipId) VALUES (1,1234,1),
															(2,5678,2),
															(3,9101112,3),
															(4,13141516,4),
															(5,17181920,5)
CREATE TABLE Sale(
SaleId int PRIMARY KEY,
Vin int FOREIGN KEY REFERENCES Car(Vin),
CustomerId int FOREIGN KEY REFERENCES Customers(CustomerId),
SalesPersonId int  FOREIGN KEY REFERENCES SalesPerson(SalesPersonId),
DealerShipId int  FOREIGN KEY REFERENCES  DealerShip(DealerShipId),
SalePrice int ,
SaleDate date
)
INSERT INTO Sale(SaleId,Vin,CustomerId,SalesPersonId,DealerShipId,SalePrice,SaleDate) VALUES(1,1234,1,1,1,500000,'01-Jan-2020'),
																							(2,5678,2,2,2,700000,'12-Jan-2020'),
																							(3,9101112,3,3,3,800000,'15-Jan-2020'),
																							(4,13141516,5,5,5,1000000,'25-Feb-2020'),
																							(5,17181920,5,5,5,1200000,'03-Mar-2020')
INSERT INTO Sale(SaleId,Vin,CustomerId,SalesPersonId,DealerShipId,SalePrice,SaleDate) VALUES(6,21222324,1,6,6,500000,'01-Jan-2020')

/*1 Find the names of all salespeople who have ever worked for the company at any dealership*/
SELECT * FROM SalesPerson
SELECT * FROM DealerShip
SELECT s.Name FROM  SalesPerson s JOIN WorkSet w ON s.SalesPersonId=w.SalesPersonId

/*2 List the Name, Street Address, and City of each customer who lives in Ahmedabad*/
SELECT Name,Address AS'Street',City FROM Customers WHERE City='AHMEDABAD'


/*3 List the VIN, make, model, year, and mileage of all cars in the inventory of the dealership
named "Toyota AutoWorld"*/
SELECT c.vin,c.Make,c.Model,c.Year,c.Mileage FROM Car c
JOIN Inventory i ON c.Vin=i.Vin
JOIN DealerShip d ON i.DealerShipId=d.DealerShipId WHERE d.Name='Honda AutoWorld'
/*4 List names of all customers who have ever bought cars from the dealership named "Concept Hyundai"*/
SELECT * FROM Customers
SELECT * FROM DealerShip
SELECT * FROM Sale
SELECT c.Name FROM Customers c JOIN Sale s ON c.CustomerId =s.CustomerId JOIN DealerShip d ON s.DealerShipId=d.DealerShipId 
WHERE d.Name='Toyota AutoWorld'

/*5 For each car in the inventory of any dealership, list the VIN, make, model, and year of the 
car, along with the name, city, and state of the dealership whose inventory contains the car.
*/
SELECT c.Vin,c.Make,c.Model,c.Year, d.Name,d.City,d.State FROM Car c 
JOIN Inventory i ON c.Vin=i.Vin
JOIN DealerShip d ON i.DealerShipId=d.DealerShipId
/*6 Find the names of all salespeople who are managed by a salesperson named "Adam Smith".
*/
SELECT s.Name FROM SalesPerson s JOIN ReportSto r ON s.SalesPersonId=r.SalesPersonId JOIN SalesPerson a ON r.ManagingSalesPersonId=a.SalesPersonId WHERE a.Name='Adam Smith'

/*7 Find the names of all salespeople who do not have a manager.
*/
SELECT s.Name FROM SalesPerson s JOIN ReportSto r ON s.SalesPersonId=r.SalesPersonId JOIN SalesPerson a ON r.ManagingSalesPersonId=a.SalesPersonId WHERE a.Name IS NULL

/* 8 Find the total number of dealerships.
*/
SELECT COUNT(Name) AS 'COUNT' FROM DealerShip GROUP BY Name
 
 /*9 List the VIN, year, and mileage of all "Toyota Camrys" in the inventory of the dealership named "Toyota Performance". 
 (Note that a "Toyota Camry" is indicated by the make being "Toyota" and the model being "Camry".)
*/
 
 SELECT c.Vin,c.Mileage,c.Year FROM Car c JOIN Inventory i ON c.Vin =i.Vin
 JOIN DealerShip d ON i.DealerShipId=d.DealerShipId WHERE d.Name='Honda AutoWorld' AND c.Make='HONDA' AND c.Model='I20'

 /*10 Find the name of all customers who bought a car at a dealership located in a 
 state other than the state in which they live.
*/
SELECT c.Name FROM Customers c JOIN Sale s ON c.CustomerId=s.CustomerId
JOIN DealerShip d ON d.DealerShipId=s.DealerShipId WHERE d.State !=d.State



/*11 Find the name of the salesperson that made the largest base salary working at the dealership 
named "Ferrari Sales" during January 2010.*/
SELECT Name FROM(SELECT DENSE_RANK() OVER (ORDER BY w.BaseSalaryForMonth DESC)[d_Rank],s.SalesPersonId,s.Name,w.WorksetId,w.MonthWorked,w.BaseSalaryForMonth,w.DealerShipId,d.Name[d.Name],d.Address,d.State 
FROM SalesPerson s JOIN WorkSet w ON s.SalesPersonId=w.SalesPersonId JOIN DealerShip d ON d.DealerShipId=w.DealerShipId
WHERE d.Name='Honda AutoWorld'
) AS TABLE1 JOIN Sale s ON s.SalesPersonId=TABLE1.SalesPersonId WHERE d_Rank=1 AND YEAR(s.SaleDate)= 2010 AND DATENAME(MM,s.SaleDate)='Jan'


/*12 List the name, street address, city, and state of any customer who has bought more than 
two cars from all dealerships combined since January 1, 2010.
*/
SELECT c.Name ,c.Address,c.City,c.State FROM (
SELECT DENSE_RANK()OVER (PARTITION BY CustomerId ORDER BY SaleId) AS d_Rank,* FROM Sale
) AS TABLE1 JOIN Customers c ON TABLE1.CustomerId=c.CustomerId WHERE d_Rank>=2 AND SaleDate>='2010-01-01'

/*13 List the name, salesperson ID, and total sales amount for each salesperson who has ever sold at 
least one car. The total sales amount for a salesperson is the sum of the sale prices of all cars ever 
sold by that salesperson.
*/
SELECT sl.SalesPersonId,sl.Name,SUM(s.SalePrice) AS'Totle Price'  FROM Sale s JOIN SalesPerson sl ON s.SaleId=sl.SalesPersonId GROUP BY sl.SalesPersonId,sl.Name

/*14. Find the names of all customers who bought cars during 2010 who were also salespeople during 2010.
For the purpose of this query, assume that no two people have the same name.
*/
SELECT c.Name AS 'Customer_Name' FROM Customers c JOIN SalesPerson sp ON c.Name=sp.Name JOIN Sale s ON s.SalesPersonId=sp.SalesPersonId
WHERE YEAR(s.SaleDate)=2010
/* 15 Find the name and salesperson ID of the salesperson who sold the most cars for the company at
dealerships located in Gujarat between March 1, 2010 and March 31, 2010.
*/
SELECT sp.* FROM SalesPerson sp JOIN Sale s ON s.SalesPersonId=s.DealerShipId JOIN DealerShip d ON d.DealerShipId=s.DealerShipId
WHERE sp.SalesPersonId IN(SELECT SalesPersonId FROM Sale GROUP BY SalesPersonId HAVING COUNT(SalesPersonId)=
(SELECT MAX(CountId) FROM (SELECT COUNT(SalesPersonId) CountId FROM Sale GROUP BY SalesPersonId)
TBL1)
) AND d.State='Gujarat' AND s.SaleDate>='2010-03-01' AND s.SaleDate<='2010-03-31'

/*16. Calculate the payroll for the month of March 2010.
	* The payroll consists of the name, salesperson ID, and gross pay for each salesperson who worked that month.
        * The gross pay is calculated as the base salary at each
		dealership employing the salesperson that month, along with the total commission for the 
		salesperson that month.
        * The total commission for a salesperson in a month is calculated as 5% of the 
		profit made on all cars sold by the salesperson that month.
        * The profit made on a car is the difference between the sale price and the 
		invoice price of the car. (Assume, that cars are never sold for less than the invoice price.)*/
SELECT sp.salespersonid, sp.name,
        SUM(ISNULL(w.Basesalaryformonth, 0) + ISNULL(((c.AskPrice - c.InvoicePrice) * 5 / 100), 0)) [Gross Pay]
    FROM salesperson sp
    LEFT JOIN sale s ON s.salespersonid = sp.salespersonid
    LEFT JOIN car c ON c.vin = s.vin
    RIGHT JOIN WorkSet w ON w.SalesPersonId = sp.SalesPersonId
    WHERE DATENAME(MM, s.saledate) = 'March' AND YEAR(s.saledate) = 2010
    GROUP BY sp.salespersonid, sp.name
    ORDER BY sp.salespersonid;