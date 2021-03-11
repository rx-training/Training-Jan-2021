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

DROP TABLE Customer;

CREATE TABLE ReportSto 
(ReportStoID INT PRIMARY KEY , 
SalesPersonID INT FOREIGN KEY REFERENCES SalesPerson(SalesPersonID),
ManagingSalesPersonID INT,
ManagingSalesPersonName VARCHAR(20));

INSERT INTO ReportSto  VALUES(1,110,1,'Adam Smith');
INSERT INTO ReportSto  VALUES(2,111,2,'Smith John');
INSERT INTO ReportSto  VALUES(3,112,3,'Manish Dubey');
INSERT INTO ReportSto  VALUES(4,113,NULL,NULL);
INSERT INTO ReportSto  VALUES(5,114,NULL,NULL);
INSERT INTO ReportSto  VALUES(6,115,3,'Manish Dubey');
INSERT INTO ReportSto  VALUES(7,116,4,'Mansi Shah');
INSERT INTO ReportSto  VALUES(8,117,5,'Pooja Shah');
INSERT INTO ReportSto  VALUES(9,118,5,'Pooja Shah');

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
INSERT INTO Inventory VALUES(152,'ABC130',1006);
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

DROP TABLE Sale;
SELECT * FROM Sale;

-->1
SELECT sp.Name FROM SalesPerson sp JOIN Sale s ON s.SalesPersonId = sp.SalesPersonId WHERE s.DealershipId IS NOT NULL;
-->2
SELECT Name,Address,City FROM Customer WHERE City = 'Ahmedabad';
-->3
SELECT i.VIN,c.Make,c.Model,c.Mileage FROM Inventory i JOIN Car c ON i.VIN = c.VIN  JOIN Dealership d ON i.DealershipId = d.DealershipId WHERE d.Name='Hero Honda Car World';
-->4
SELECT c.Name FROM Customer c JOIN Sale s ON c.CustomerID = s.CustomerID JOIN  Dealership d ON s.DealershipId = d.DealershipId WHERE d.Name='Concept Hyundai';
-->5
SELECT c.VIN,c.Make,c.Model,c.Mileage,c.Year,d.Name,d.City,d.State FROM Car c JOIN  Inventory i ON c.VIN = i.VIN JOIN Dealership d ON d.DealershipID = i.DealershipID
-->6
SELECT s.Name FROM SalesPerson s JOIN ReportSto r ON s.SalesPersonID = r.SalesPersonID WHERE ManagingSalesPersonName='Adam Smith';
-->7
SELECT s.Name FROM SalesPerson s JOIN ReportSto r ON s.SalesPersonID = r.SalesPersonID WHERE ManagingSalesPersonName IS NULL;
-->8
SELECT COUNT(DealershipID) FROM Dealership ORDER BY COUNT(DealershipID);
-->9
SELECT c.VIN,c.Year,c.Mileage FROM Inventory i JOIN  Dealership d ON i.DealershipID = d.DealershipID JOIN Car c   ON c.VIN = i.VIN WHERE d.Name = 'Toyota Performance';
-->10
SELECT c.Name FROM Customer c JOIN Sale s ON c.CustomerId = s.CustomerId JOIN Dealership d ON s.DealershipID = d.DealershipID WHERE c.State <> d.State; 
-->11
SELECT MAX(w.BaseSalaryForMonth),sp.Name FROM SalesPerson sp JOIN WorkSat w ON sp.SalesPersonID = w.SalesPersonID JOIN Dealership d ON d.DealershipID = w.DealershipID  WHERE d.Name ='Ferrari Sales' GROUP BY  sp.Name ORDER BY MAX(w.BaseSalaryForMonth) ;
-->12
SELECT c.Name,c.State,c.Address,c.City FROM Customer c FULL OUTER JOIN Sale s ON c.CustomerId = s.CustomerId WHERE s.SaleDate >= '2010-01-01' ;
-->13
SELECT sp.Name,sp.SalesPersonID,SUM(S.SalePrice) FROM SalesPerson sp JOIN Sale s ON sp.SalesPersonID = s.SalesPersonID GROUP BY sp.Name,sp.SalesPersonID;
-->14
SELECT sp.Name,sp.SalesPersonID,c.CustomerID,c.Name FROM Sale s JOIN SalesPerson sp ON s.SalesPersonID = sp.SalesPersonID JOIN  Customer c ON c.CustomerID = s.CustomerID WHERE sp.Name <>c.Name;
SELECT 
-->15
SELECT sp.Name,sp.SalesPersonID, COUNT(s.SalesPersonID) FROM  Sale s JOIN SalesPerson sp ON s.SalesPersonID = sp.SalesPersonID JOIN Dealership d ON  s.DealershipID = d.DealershipID WHERE s.SaleDate BETWEEN '2010-03-01' AND '2010-03-31' GROUP BY sp.Name,sp.SalesPersonID ;  
-->16

SELECT sp.salespersonid, sp.name,
SUM(ISNULL(w.basesalaryformonth, 0) + ISNULL(((c.askprice - c.invoiceprice) * 5 / 100), 0)) [Gross Pay]
FROM salesperson sp
LEFT JOIN sale s ON s.salespersonid = sp.salespersonid
LEFT JOIN car c ON c.vin = s.vin
RIGHT JOIN worksat w ON w.salespersonid = sp.salespersonid
WHERE DATENAME(MM, s.saledate) = 'March' AND YEAR(s.saledate) = 2010
GROUP BY sp.salespersonid, sp.name
ORDER BY sp.salespersonid;

