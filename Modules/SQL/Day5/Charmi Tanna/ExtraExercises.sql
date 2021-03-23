CREATE DATABASE EXTRAEXERCISE
USE EXTRAEXERCISE
CREATE TABLE Car
(
	CarID INT,
	VIN VARCHAR(20) PRIMARY KEY,
	Make VARCHAR(20),
	Model VARCHAR(20),
	Year NUMERIC,
	Mileage NUMERIC,
	AskPrice MONEY,
	InvoicePrice MONEY,
);
INSERT INTO  Car VALUES(1,'ABC123','Toyota','Pirus',2010,22,500000,550000);
INSERT INTO  Car VALUES(2,'ABC124','BMW','X5',2010,24,6000000,6500000);
INSERT INTO  Car VALUES(3,'ABC125','Maruti','Suzuki',2010,23,700000,750000);
INSERT INTO  Car VALUES(4,'ABC126','Audi','Q7',2010,22,8000000,8500000);
INSERT INTO  Car VALUES(5,'ABC127','Hyundai','Baleno',2010,23,900000,950000);
INSERT INTO  Car VALUES(6,'ABC128','Honda','Amaez',2010,23,90000,95000);
INSERT INTO  Car VALUES(7,'ABC129','Toyota Camrys','Camrys',2010,23,800000,850000);
INSERT INTO  Car VALUES(8,'ABC130','Ferrari','488 GTB',2010,23,9000000,9500000);
INSERT INTO  Car VALUES(9,'ABC131','Volkswagen','Vento',2010,22,850000,850000);
INSERT INTO  Car VALUES(10,'ABC132','Renault','Duster',2010,22,950000,950000);
INSERT INTO  Car VALUES(11,'ABC133','Volkswagen','Pollo',2010,22,1500000,1500000);
DROP TABLE Car;
SELECT * FROM Car;

CREATE TABLE Dealership
(DealershipID INT PRIMARY KEY,
Name VARCHAR(20),
Address VARCHAR(50),
City VARCHAR(20),
State VARCHAR(20)
);

DROP TABLE Dealership;
SELECT * FROM Dealership;

INSERT INTO Dealership VALUES(1000,'Concept Hyundai','XYZ Complex,120 Ring Road,Thaltej','Ahmedabad','Gujarat');
INSERT INTO Dealership VALUES(1001,'BMW Sales','EFG Complex,121 Ring Road,Pavai','Mumbai','Maharashtra');
INSERT INTO Dealership VALUES(1002,'Audi Sales','Sankalp Complex,122 Ring Road,Nehrunagar','Ahmedabad','Gujarat');
INSERT INTO Dealership VALUES(1003,'Maruti Sales','Kiran Complex,110 Ring Road,Sola','Ahmedabad','Gujarat');
INSERT INTO Dealership VALUES(1004,'Toyota Performance','Sales Complex,115 Ring Road,Naranpura','Ahmedabad','Gujarat');
INSERT INTO Dealership VALUES(1005,'Hero Honda Car World','Care Complex,110 Ring Road,Dadar','Mumbai','Maharashtra');
INSERT INTO Dealership VALUES(1006,'Ferrari Sales','Sales Complex,115 Ring Road,Naranpura','Ahmedabad','Gujarat');
INSERT INTO Dealership VALUES(1007,'Volkswagen World','Kart Showroom,113 Ring Road,Isanpur','Ahmedabad','Gujarat');
INSERT INTO Dealership VALUES(1008,'Renault World','Mega Showroom,113 Ring Road,Naranpura','Ahmedabad','Gujarat');

CREATE TABLE SalesPerson
(SalesPersonID INT PRIMARY KEY,
Name VARCHAR(20)
);

INSERT INTO SalesPerson VALUES(110,'Mukesh');
INSERT INTO SalesPerson VALUES(111,'Mahesh');
INSERT INTO SalesPerson VALUES(112,'Ajay');
INSERT INTO SalesPerson VALUES(113,'Anuj');
INSERT INTO SalesPerson VALUES(114,'Hitesh');
INSERT INTO SalesPerson VALUES(115,'Anish');
INSERT INTO SalesPerson VALUES(116,'Nilesh');
INSERT INTO SalesPerson VALUES(117,'Ramesh');
INSERT INTO SalesPerson VALUES(118,'Riya');
INSERT INTO SalesPerson VALUES(119,'Magan');
INSERT INTO SalesPerson VALUES(120,'Bhumi');
INSERT INTO SalesPerson VALUES(121,'Adam Smith');

SELECT * FROM SalesPerson;

DROP TABLE SalesPerson;

CREATE TABLE Customer
(
CustomerID INT PRIMARY KEY, 
Name VARCHAR(20), 
Address VARCHAR(50), 
City VARCHAR(20), 
State VARCHAR(20));

INSERT INTO Customer VALUES(200,'Bhavesh','Sankalp Bunglows ,Near Star Bazar,Thaltej','Ahmedabad','Gujarat');
INSERT INTO Customer VALUES(201,'Amar','Sakar Bunglows,Near XYZ school,Chandkheda','Ahmedabad','Gujarat');
INSERT INTO Customer VALUES(202,'Anish','Sankalp-2 Bunglows ,Near xyx Mandir,Navrangpura','Ahmedabad','Gujarat');
INSERT INTO Customer VALUES(203,'Komal','Sankalp Bunglows ,Near Star Bazar,Thaltej','Ahmedabad','Gujarat')
INSERT INTO Customer VALUES(204,'Kiran','Mangal Flats,Near Ganshyam Sweets,Thaltej','Ahmedabad','Gujarat');
INSERT INTO Customer VALUES(205,'Banasari','Mangal Appartment,Near Ganshyam Sweets,Thaltej','Ahmedabad','Gujarat');
INSERT INTO Customer VALUES(206,'Bhakti','Mangal Appartment,Near Ganshyam Sweets,Thaltej','Ahmedabad','Gujarat');
INSERT INTO Customer VALUES(207,'Neha','Abhay Appartment,Near Ganshyam Sweets,Thaltej','Ahmedabad','Gujarat');

DROP TABLE Customer;

CREATE TABLE ReportSto 
(ReportStoID INT PRIMARY KEY , 
SalesPersonID INT FOREIGN KEY REFERENCES SalesPerson(SalesPersonID),
ManagingSalesPersonID INT);

INSERT INTO ReportSto  VALUES(1,110,121);
INSERT INTO ReportSto  VALUES(2,111,121);
INSERT INTO ReportSto  VALUES(3,112,11);
INSERT INTO ReportSto  VALUES(4,113,NULL);
INSERT INTO ReportSto  VALUES(5,114,NULL);
INSERT INTO ReportSto  VALUES(6,115,111);
INSERT INTO ReportSto  VALUES(7,116,112);
INSERT INTO ReportSto  VALUES(8,117,112);
INSERT INTO ReportSto  VALUES(9,118,121);
INSERT INTO ReportSto  VALUES(10,121,NULL);

SELECT * FROM ReportSto ;

DROP TABLE ReportSto;

CREATE TABLE WorkSat
(WorkSatId INT PRIMARY KEY , 
SalesPersonID INT FOREIGN KEY REFERENCES SalesPerson(SalesPersonID),
DealershipID INT FOREIGN KEY REFERENCES Dealership(DealershipID),
MonthWorked INT,
BaseSalaryForMonth MONEY);

INSERT INTO WorkSat VALUES(1,114,1008,1,50000);
INSERT INTO WorkSat VALUES(2,113,1002,1,60000);
INSERT INTO WorkSat VALUES(3,110,1004,1,50000);
INSERT INTO WorkSat VALUES(4,111,1000,1,60000);
INSERT INTO WorkSat VALUES(5,112,1001,1,50000);
INSERT INTO WorkSat VALUES(6,115,1001,1,60000);
INSERT INTO WorkSat VALUES(7,116,1003,1,50000);
INSERT INTO WorkSat VALUES(8,117,1007,1,60000);
INSERT INTO WorkSat VALUES(9,118,1007,1,60000);
INSERT INTO WorkSat VALUES(10,119,1005,1,60000);
INSERT INTO WorkSat VALUES(11,120,1006,1,60000);

SELECT * FROM WorkSat;

DROP TABLE WorkSat;

CREATE TABLE Inventory 
(
InventoryId INT PRIMARY KEY,
VIN VARCHAR(20) FOREIGN KEY(VIN) REFERENCES Car(VIN),
DealershipID INT FOREIGN KEY REFERENCES Dealership(DealershipID)
);

DROP TABLE Inventory;

INSERT INTO Inventory VALUES(150,'ABC128',1005);
INSERT INTO Inventory VALUES(151,'ABC129',1004);
INSERT INTO Inventory VALUES(153,'ABC132',1008);

SELECT * FROM Inventory;

CREATE TABLE Sale
(SaleId INT PRIMARY KEY,
VIN VARCHAR(20) FOREIGN KEY REFERENCES Car(VIN),
CustomerId INT FOREIGN KEY REFERENCES Customer(CustomerID),
SalesPersonId INT FOREIGN KEY REFERENCES SalesPerson(SalesPersonID),
DealershipId INT FOREIGN KEY REFERENCES Dealership(DealershipID), 
SalePrice MONEY, 
SaleDate DATE);

INSERT INTO Sale VALUES(10,'ABC123',200,110,1004,800000,'2010-03-09');
INSERT INTO Sale VALUES(11,'ABC127',201,111,1000,1000000,'2010-01-01');
INSERT INTO Sale VALUES(12,'ABC124',202,112,1001,7000000,'2010-01-05');
INSERT INTO Sale VALUES(13,'ABC124',203,115,1001,7000000,'2010-01-15');
INSERT INTO Sale VALUES(14,'ABC126',200,116,1002,9000000,'2010-01-17');
INSERT INTO Sale VALUES(15,'ABC125',204,116,1003,800000,'2010-01-20');
INSERT INTO Sale VALUES(16,'ABC131',205,117,1007,900000,'2010-03-17');
INSERT INTO Sale VALUES(17,'ABC133',206,118,1007,1550000,'2010-03-20');
INSERT INTO Sale VALUES(18,'ABC130',207,120,1006,9000000,'2010-01-20');

DROP TABLE Sale;
SELECT * FROM Sale;

-->1.Find the names of all salespeople who have ever worked for the company at any dealership.
SELECT sp.Name FROM SalesPerson sp JOIN Sale s ON s.SalesPersonId = sp.SalesPersonId WHERE s.DealershipId IS NOT NULL;
-->2.List the Name, Street Address, and City of each customer who lives in Ahmedabad.
SELECT Name,Address,City FROM Customer WHERE City = 'Ahmedabad';
-->3.List the VIN, make, model, year, and mileage of all cars in the inventory of the dealership named "Hero Honda Car World".
SELECT i.VIN,c.Make,c.Model,c.Mileage FROM Inventory i JOIN Car c ON i.VIN = c.VIN  JOIN Dealership d ON i.DealershipId = d.DealershipId WHERE d.Name='Hero Honda Car World';
-->4.List names of all customers who have ever bought cars from the dealership named "Concept Hyundai".
SELECT c.Name FROM Customer c JOIN Sale s ON c.CustomerID = s.CustomerID JOIN  Dealership d ON s.DealershipId = d.DealershipId WHERE d.Name='Concept Hyundai';
-->5.For each car in the inventory of any dealership, list the VIN, make, model, and year of the car, along with the name, city, and state of the dealership whose inventory contains the car.
SELECT c.VIN,c.Make,c.Model,c.Mileage,c.Year,d.Name,d.City,d.State FROM Car c JOIN  Inventory i ON c.VIN = i.VIN JOIN Dealership d ON d.DealershipID = i.DealershipID
-->6.Find the names of all salespeople who are managed by a salesperson named "Adam Smith".
SELECT e.Name , m.Name FROM ReportsTo r JOIN SalesPerson m on r.ManagingSalesPersonID = m.SalesPersonID JOIN SalesPerson e ON r.SalesPersonID = e.SalesPersonID WHERE m.Name = 'Adam Smith';
-->7.Find the names of all salespeople who do not have a manager.
SELECT sp.Name FROM SalesPerson sp JOIN ReportsTo r ON sp.SalesPersonID = r.SalesPersonID AND r.ManagingSalesPersonID IS NULL; 
-->8.Find the total number of dealerships.
SELECT COUNT(DealershipID) FROM Dealership;
-->9.List the VIN, year, and mileage of all "Toyota Camrys" in the inventory of the dealership named "Toyota Performance". (Note that a "Toyota Camry" is indicated by the make being "Toyota" and the model being "Camry".)
SELECT c.VIN,c.Year,c.Mileage FROM Inventory i JOIN  Dealership d ON i.DealershipID = d.DealershipID JOIN Car c   ON c.VIN = i.VIN WHERE d.Name = 'Toyota Performance'	OR c.Make='Toyota Carmys';
-->10.Find the name of all customers who bought a car at a dealership located in a state other than the state in which they live.
SELECT c.Name FROM Customer c JOIN Sale s ON c.CustomerId = s.CustomerId JOIN Dealership d ON s.DealershipID = d.DealershipID WHERE c.State <> d.State; 
-->11.Find the name of the salesperson that made the largest base salary working at the dealership named "Ferrari Sales" during January 2010.
SELECT MAX(w.BaseSalaryForMonth),sp.Name FROM SalesPerson sp JOIN WorkSat w ON sp.SalesPersonID = w.SalesPersonID JOIN Dealership d ON d.DealershipID = w.DealershipID  JOIN Sale s ON s.DealershipID = d.DealershipID WHERE d.Name ='Ferrari Sales' AND s.SaleDate BETWEEN '2010-01-01' AND '2010-01-31' GROUP BY  sp.Name ORDER BY MAX(w.BaseSalaryForMonth) ;
-->12. List the name, street address, city, and state of any customer who has bought more than two cars from all dealerships combined since January 1, 2010.
SELECT c.Name,c.Address,c.City,c.State FROM (SELECT DENSE_RANK() OVER (PARTITION BY CustomerId ORDER BY SaleId ASC)[d_rank],*FROM Sale)[tb] JOIN Customer c ON tb.CustomerId = c.CustomerId WHERE d_rank >= 2 AND Saledate >= '2010-01-01';
-->13. List the name, salesperson ID, and total sales amount for each salesperson who has ever sold at least one car. The total sales amount for a salesperson is the sum of the sale prices of all cars ever sold by that salesperson.
SELECT sp.Name,sp.SalesPersonID,SUM(S.SalePrice) FROM SalesPerson sp JOIN Sale s ON sp.SalesPersonID = s.SalesPersonID GROUP BY sp.Name,sp.SalesPersonID;
-->14. Find the names of all customers who bought cars during 2010 who were also salespeople during 2010. For the purpose of this query, assume that no two people have the same name.
SELECT c.Name FROM Customer c JOIN Salesperson sp  ON c.Name = sp.Name JOIN Sale s  ON s.SalespersonId = sp.SalespersonId WHERE YEAR(s.Saledate) = 2010;
-->15. Find the name and salesperson ID of the salesperson who sold the most cars for the company at dealerships located in Gujarat between March 1, 2010 and March 31, 2010.
SELECT sp.Name,sp.SalesPersonID, COUNT(s.SalesPersonID) FROM  Sale s JOIN SalesPerson sp ON s.SalesPersonID = sp.SalesPersonID JOIN Dealership d ON  s.DealershipID = d.DealershipID WHERE s.SaleDate BETWEEN '2010-03-01' AND '2010-03-31' AND d.State='Gujarat' GROUP BY sp.Name,sp.SalesPersonID ;  
/*16. Calculate the payroll for the month of March 2010.
	* The payroll consists of the name, salesperson ID, and gross pay for each salesperson who worked that month.
        * The gross pay is calculated as the base salary at each dealership employing the salesperson that month, along with the total commission for the salesperson that month.
        * The total commission for a salesperson in a month is calculated as 5% of the profit made on all cars sold by the salesperson that month.
        * The profit made on a car is the difference between the sale price and the invoice price of the car. (Assume, that cars are never sold for less than the invoice price.)*/

SELECT sp.salespersonid, sp.name,
SUM(ISNULL(w.basesalaryformonth, 0) + ISNULL(((c.askprice - c.invoiceprice) * 5 / 100), 0)) [Gross Pay]
FROM salesperson sp
LEFT JOIN sale s ON s.salespersonid = sp.salespersonid
LEFT JOIN car c ON c.vin = s.vin
RIGHT JOIN worksat w ON w.salespersonid = sp.salespersonid
WHERE DATENAME(MM, s.saledate) = 'March' AND YEAR(s.saledate) = 2010
GROUP BY sp.salespersonid, sp.name
ORDER BY sp.salespersonid;

