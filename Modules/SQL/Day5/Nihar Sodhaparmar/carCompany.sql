USE CarCompany;

-- CARS TABLE
CREATE TABLE Cars
(
	CarId INT CONSTRAINT pkCars PRIMARY KEY IDENTITY(1,1), 
	VIN INT NOT NULL CONSTRAINT ukVINCars UNIQUE, 
	Make VARCHAR(50) NOT NULL, 
	Model VARCHAR(50) NOT NULL, 
	[Year] DATE NOT NULL,
	Mileage TINYINT NOT NULL, 
	AskPrice MONEY NOT NULL, 
	InvoicePrice MONEY NOT NULL
);

INSERT INTO Cars (VIN, Make, Model, [Year], Mileage, AskPrice, InvoicePrice) VALUES
	(10000001, 'Toyota', 'Prius', '2010-01-01', 23.91, 4600000, 4500000),
	(10000002, 'Toyota', 'Camry', '2010-01-01', 19.16, 4100000, 3900000),
	(10000003, 'Toyota', 'Glanza', '2010-01-01', 21.96, 4100000, 3900000),
	(10000004, 'Hyundai', 'Verna', '2010-01-01', 25, 1000000, 900000),
	(10000005, 'Honda', 'Amaze', '2010-01-01', 24.70, 6500000, 6400000);

SELECT * FROM Cars;

-- DEALERSHIPS TABLE
CREATE TABLE DealerShips 
(
	DealerShipId INT CONSTRAINT pkDealerShips PRIMARY KEY IDENTITY(1,1), 
	Name VARCHAR(100) NOT NULL, 
	Address VARCHAR(500) NOT NULL, 
	City VARCHAR(50) NOT NULL, 
	State VARCHAR(50) NOT NULL
);

INSERT INTO DealerShips (Name, Address, City, State) VALUES
	('Concept Hyundai', 'SRP Camp', 'Nadiad', 'Gujarat'),
	('Hero Honda Car World', 'SRP Camp', 'Delhi', 'Delhi'),
	('Ferrari Sales', 'SRP Camp', 'Delhi', 'Delhi'),
	('Toyota Performance', 'SRP Camp', 'Nadiad', 'Gujarat');

SELECT * FROM DealerShips;

-- SALESPERSONS TABLE
CREATE TABLE SalesPersons 
(
	SalesPersonId INT CONSTRAINT pkSalesPersons PRIMARY KEY IDENTITY(1,1), 
	Name VARCHAR(100) NOT NULL
);

INSERT INTO SalesPersons (Name) VALUES
	('Adam Smith'),
	('Nihar Sodhaparmar'),
	('John Smith'),
	('Neela Kochhar'),
	('David Austin'),
	('Julia Nayer'),
	('Ki Gee'),
	('Peter King'),
	('Lisa Fox'),
	('Sarah Bell'),
	('Ronak Sodha'),
	('James Smith');

SELECT * FROM SalesPersons;

-- CUSTOMERS TABLE
CREATE TABLE Customers 
(
	CustomerId INT CONSTRAINT pkCustomers PRIMARY KEY IDENTITY(1,1), 
	Name VARCHAR(100) NOT NULL, 
	Address VARCHAR(500) NOT NULL, 
	City VARCHAR(50) NOT NULL, 
	State VARCHAR(50) NOT NULL
);

INSERT INTO Customers (Name, Address, City, State) VALUES
	( 'Ronak Sodha', 'SG Road', 'Ahmedabad', 'Gujarat'),
	( 'Mahi Parmar', 'SG Road', 'Ahmedabad', 'Gujarat'),
	( 'Divya Agrawal', 'Juhu', 'Mumbai', 'Madhya Pradesh'),
	( 'Stephy Parmar', 'Madailand', 'Mumbai', 'Madhya Pradesh'),
	( 'Nihal Singh', 'Red Fort', 'Delhi', 'Delhi');

SELECT * FROM Customers;

-- REPORTSTO TABLE
CREATE TABLE ReportsTo 
(
	ReportsToId INT NOT NULL CONSTRAINT pkReportsTo PRIMARY KEY IDENTITY(1,1), 
	SalesPersonId INT NOT NULL CONSTRAINT fkSalesPersonIdReportsToTable FOREIGN KEY REFERENCES SalesPersons(SalesPersonId), 
	ManagingSalesPersonId INT NOT NULL CONSTRAINT fkmanagingSalesPersonIdReportsToTable FOREIGN KEY REFERENCES Salespersons(SalesPersonId)
);

INSERT INTO ReportsTo (SalesPersonId, ManagingSalesPersonId) VALUES
	(3,1),
	(4,1),
	(5,1),
	(6,1),
	(7,2),
	(8,2),
	(9,2),
	(10,2);
	
SELECT * FROM ReportsTo;

-- WORKSAT TABLE
CREATE TABLE WorksAt
(
	WorksAtId INT CONSTRAINT pkWorksAt PRIMARY KEY IDENTITY(1,1), 
	SalesPersonId INT NOT NULL CONSTRAINT fkSalesPersonIdWorksAtTable FOREIGN KEY REFERENCES SalesPersons(SalesPersonId),
	DealerShipId INT NOT NULL CONSTRAINT fkDealerShipsIdWorksAtTable FOREIGN KEY REFERENCES DealerShips(DealerShipId), 
	MonthWorked DATE NOT NULL,
	BaseSalaryforMonth MONEY NOT NULL
);

INSERT INTO WorksAt (SalesPersonId, DealerShipId, MonthWorked, BaseSalaryforMonth) VALUES
	(1, 3, '2010-01-01', 15000),
	(3, 3, '2010-01-01', 10000),
	(4, 3, '2010-01-01', 11000),
	(5, 3, '2010-01-01', 12000),
	(6, 3, '2010-01-01', 12000),
	(2, 2, '2010-01-01', 16000),
	(7, 2, '2010-01-01', 11500),
	(8, 2, '2010-01-01', 12500),
	(9, 2, '2010-01-01', 13500),
	(10, 2, '2010-01-01', 14500),
	(11, 1, '2010-01-01', 10500),
	(12, 4, '2010-01-01', 16000);

SELECT * FROM WorksAt

-- INVENTORIES TABLE
CREATE TABLE Inventories 
(
	InventoryId INT CONSTRAINT pkInventories PRIMARY KEY IDENTITY(1,1), 
	VIN INT NOT NULL CONSTRAINT fkVINInventoriesTable FOREIGN KEY REFERENCES Cars(VIN), 
	DealersShipId INT NOT NULL CONSTRAINT fkDealerShipIdInventoriesTable FOREIGN KEY REFERENCES DealerShips(DealerShipId),
);

INSERT INTO Inventories (VIN, DealersShipId) VALUES
	(10000001, 4),
	(10000002, 4),
	(10000003, 4),
	(10000004, 1),
	(10000004, 2);

SELECT * FROM Inventories;

-- SALES TABLE
CREATE TABLE Sales 
(
	SaleId INT CONSTRAINT pkSales PRIMARY KEY IDENTITY(1,1), 
	VIN INT NOT NULL CONSTRAINT fkVINSalesTable FOREIGN KEY REFERENCES Cars(VIN), 
	CustomerId INT NOT NULL CONSTRAINT fkCustomersID FOREIGN KEY REFERENCES Customers(CustomerId), 
	SalesPersonID INT NOT NULL CONSTRAINT fkSalesPersonIdSalesTable FOREIGN KEY REFERENCES SalesPersons(SalesPersonId),
	DealerShipId INT NOT NULL CONSTRAINT fkDealerShipIdSalesTable FOREIGN KEY REFERENCES Dealerships(DealerShipId),
	SalePrice MONEY NOT NULL, 
	SaleDate DATE NOT NULL
);

INSERT INTO Sales (VIN, CustomerId, SalesPersonID, DealerShipId, SalePrice, SaleDate) VALUES
	(10000004, 1, 11, 1, 1000000 , '2010-01-01'),
	(10000004, 2, 11, 1, 1000000 , '2010-01-01'),
	(10000004, 3, 11, 1, 1000000 , '2010-01-01'),
	(10000004, 4, 11, 1, 1000000 , '2010-01-01'),
	(10000001, 1, 12, 4, 1000000 , '2010-01-01'),
	(10000002, 1, 12, 4, 1000000 , '2010-01-01'),
	(10000003, 1, 12, 4, 1000000 , '2010-01-01'),
	(10000003, 1, 12, 3, 1000000 , '2010-01-01'),
	(10000004, 1, 11, 1, 1000000 , '2010-03-01'),
	(10000004, 2, 11, 1, 1000000 , '2010-03-01'),
	(10000004, 3, 11, 1, 1000000 , '2010-03-01'),
	(10000004, 4, 11, 1, 1000000 , '2010-03-01'),
	(10000001, 1, 12, 4, 1000000 , '2010-03-01'),
	(10000002, 1, 12, 4, 1000000 , '2010-03-01'),
	(10000003, 1, 12, 4, 1000000 , '2010-03-01'),
	(10000003, 1, 12, 3, 1000000 , '2010-03-01');

SELECT * FROM Sales;


-- =========================================================================================
-- QUERIES :
-- =========================================================================================

/* 1. Find the names of all salespeople who have ever worked for the company at any dealership. */
SELECT s.Name AS 'SalesPersonName'
FROM SalesPersons s 
	INNER JOIN WorksAt w ON s.SalesPersonId = w.SalesPersonId;


/* 2. List the Name, Street Address, and City of each customer who lives in Ahmedabad. */
SELECT Name
	, Address
	, City
FROM Customers WHERE City = 'Ahmedabad';


/* 3. List the VIN, make, model, year, and mileage of all cars in the inventory of the dealership named "Hero Honda Car World". */
SELECT c.VIN
	, c.Make
	, c.Model
	, c.[Year]
	, c.Mileage
FROM Inventories i 
	INNER JOIN Cars c ON c.VIN = i.VIN
	INNER JOIN DealerShips d ON i.DealersShipId = d.DealerShipId
WHERE d.Name = 'Hero Honda Car World';


/* 4. List names of all customers who have ever bought cars from the dealership named "Concept Hyundai". */
SELECT c.Name AS 'CustomerName'
FROM Sales s
	INNER JOIN Customers c ON s.CustomerId = c.CustomerId
	INNER JOIN DealerShips d ON s.DealerShipId = d.DealerShipId
WHERE d.Name = 'Concept Hyundai';


/* 5. For each car in the inventory of any dealership, list the VIN, make, model, and year of the car, along with the name, 
city, and state of the dealership whose inventory contains the car. */
SELECT c.VIN AS 'CarVIN'
	, c.Make AS 'CarMake'
	, c.Model AS 'CarModel'
	, c.[Year] AS 'CarYear'
	, d.Name AS 'DealerShipName'
	, d.City AS 'DealerShipCity'
	, d.State AS 'DealerShipState'
FROM Inventories i
	INNER JOIN DealerShips d ON i.DealersShipId = d.DealerShipId
	INNER JOIN Cars c ON i.VIN = c.VIN;

/* 6. Find the names of all salespeople who are managed by a salesperson named "Adam Smith". */
SELECT s2.Name
FROM ReportsTo r
	INNER JOIN SalesPersons s1 ON r.ManagingSalesPersonId = s1.SalesPersonId
	INNER JOIN SalesPersons s2 ON r.SalesPersonId = s2.SalesPersonId
WHERE s1.Name = 'Adam Smith';


/* 7. Find the names of all salespeople who do not have a manager. */
SELECT s.Name
FROM SalesPersons s
	LEFT OUTER JOIN ReportsTo r ON s.SalesPersonId = r.SalesPersonId
WHERE r.ManagingSalesPersonId IS NULL;


/* 8. Find the total number of dealerships. */
SELECT COUNT(*) AS 'Total Number Of DealerShips' FROM DealerShips;


/* 9. List the VIN, year, and mileage of all "Toyota Camrys" in the inventory of the dealership named "Toyota Performance". 
(Note that a "Toyota Camry" is indicated by the make being "Toyota" and the model being "Camry".) */
SELECT c.VIN
	, c.[Year]
	, c.Mileage
FROM Inventories i
	INNER JOIN DealerShips d ON i.DealersShipId = d.DealerShipId
	INNER JOIN Cars c ON i.VIN = c.VIN
WHERE d.Name = 'Toyota Performance'
	AND c.Make = 'Toyota'
	AND c.Model = 'Camry';


/* 10. Find the name of all customers who bought a car at a dealership located in a state other than the state in which they live. */
SELECT c.Name
FROM Sales s
	INNER JOIN Customers c ON s.CustomerId = c.CustomerId
	INNER JOIN DealerShips d ON s.DealerShipId = d.DealerShipId
WHERE c.State <> d.State; 


/* 11. Find the name of the salesperson that made the largest base salary working at the dealership named "Ferrari Sales" 
during January 2010. */
SELECT salesPersonTbl.Name
FROM ( SELECT s.Name
			, DENSE_RANK() OVER (ORDER BY w.BaseSalaryforMonth DESC) AS 'BaseSalaryRank'
		FROM SalesPersons s
			INNER JOIN WorksAt w ON s.SalesPersonId = w.SalesPersonId
			INNER JOIN DealerShips d ON d.DealerShipId = w.DealerShipId
		WHERE d.Name = 'Ferrari Sales'
			AND DATENAME(MM,w.MonthWorked) = 'January' AND DATENAME(YY,w.MonthWorked) = 2010 ) AS salesPersonTbl
WHERE salesPersonTbl.BaseSalaryRank = 1;


/* 12. List the name, street address, city, and state of any customer 
who has bought more than two cars from all dealerships combined since January 1, 2010. */
SELECT DISTINCT c1.Name
	, c1.Address
	, c1.City
	, c1.State
FROM Customers c1 
	INNER JOIN (SELECT DISTINCT c.CustomerId
				FROM Customers c
					INNER JOIN Sales s ON c.CustomerId = s.CustomerId
				WHERE S.SaleDate >= '2010-01-01'
				GROUP BY c.CustomerId HAVING COUNT(*) > 2) c2 ON C1.CustomerId = c2.CustomerId;

SELECT DISTINCT c1.Name
	, c1.Address
	, c1.City
	, c1.State
FROM Customers c1 
WHERE c1.CustomerId IN (SELECT DISTINCT c.CustomerId
				FROM Customers c
					INNER JOIN Sales s ON c.CustomerId = s.CustomerId
				WHERE S.SaleDate >= '2010-01-01'
				GROUP BY c.CustomerId HAVING COUNT(*) > 2);


/* 13. List the name, salesperson ID, and total sales amount for each salesperson who has ever sold at least one car. 
The total sales amount for a salesperson is the sum of the sale prices of all cars ever sold by that salesperson. */
SELECT sp.SalesPersonId, sp.Name, SUM(s.SalePrice) AS 'TotalSales'
FROM Sales s 
	INNER JOIN SalesPersons sp ON s.SalesPersonID = sp.SalesPersonId
GROUP BY sp.SalesPersonId, sp.Name
HAVING COUNT(s.SalesPersonID) > 0;


/* 14. Find the names of all customers who bought cars during 2010 who were also salespeople during 2010. 
For the purpose of this query, assume that no two people have the same name. */
SELECT DISTINCT c.Name
FROM Sales s
	INNER JOIN Customers c ON s.CustomerId = c.CustomerId
	INNER JOIN WorksAt w ON s.SalesPersonID = w.SalesPersonId
	INNER JOIN SalesPersons sp ON sp.Name = c.Name
WHERE DATEPART(YY,s.SaleDate) = 2010 AND DATEPART(YY,w.MonthWorked) = 2010;


/* 15. Find the name and salesperson ID of the salesperson who sold the most cars for the company at dealerships 
located in Gujarat between March 1, 2010 and March 31, 2010. */
SELECT TOP 1 tempTbl.SalesPersonID, tempTbl.Name, MAX(tempTbl.NumberOfCarsSoldInGujarat) AS 'TotalCarsSold'
FROM ( SELECT COUNT(*) AS 'NumberOfCarsSoldInGujarat', s.SalesPersonID, sp.Name
		FROM Sales s
			INNER JOIN DealerShips d ON d.DealerShipId = s.DealerShipId
			INNER JOIN SalesPersons sp ON s.SalesPersonID = sp.SalesPersonId
		WHERE s.SaleDate BETWEEN '2010-03-01' AND '2010-03-31'
			AND d.State = 'Gujarat'
		GROUP BY s.SalesPersonId, sp.Name ) AS tempTbl
GROUP BY tempTbl.NumberOfCarsSoldInGujarat,tempTbl.SalesPersonID, tempTbl.Name
ORDER BY tempTbl.NumberOfCarsSoldInGujarat DESC;


/* 16. Calculate the payroll for the month of March 2010.
	* The payroll consists of the name, salesperson ID, and gross pay for each salesperson who worked that month.
	* The gross pay is calculated as the base salary at each dealership employing the salesperson that month, 
	  along with the total commission for the salesperson that month.
	* The total commission for a salesperson in a month is calculated as 5% of the profit made on all cars sold 
	  by the salesperson that month.
	* The profit made on a car is the difference between the sale price and the invoice price of the car. (Assume, 
	  that cars are never sold for less than the invoice price.) */
SELECT sp.SalesPersonId
		, sp.Name
		, SUM(ISNULL(w.BaseSalaryforMonth, 0) + ISNULL(((c.AskPrice - c.InvoicePrice) * 5 / 100), 0)) [Gross Pay]
FROM SalesPersons sp    
	LEFT JOIN Sales s ON s.SalesPersonID = sp.SalesPersonId    
	LEFT JOIN Cars c ON c.VIN = s.VIN    
	RIGHT JOIN worksat w ON w.SalesPersonId = sp.SalesPersonId
WHERE DATENAME(MM, s.SaleDate) = 'March' 
		AND YEAR(s.SaleDate) = 2010
GROUP BY sp.SalesPersonId
		, sp.Name
ORDER BY sp.SalesPersonId;