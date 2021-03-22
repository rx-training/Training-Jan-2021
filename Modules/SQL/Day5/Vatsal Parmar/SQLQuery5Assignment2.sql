/* Day 5 Assignment 2 */
CREATE TABLE Cars(
	CarId INT UNIQUE NOT NULL
	,VIN INT NOT NULL CONSTRAINT pk_VIN PRIMARY KEY
	,Make VARCHAR(20) NOT NULL
	,Modal VARCHAR(20) NOT NULL
	,[Year] INT NOT NULL
	,Milage INT NOT NULL
	,AskPrice INT NOT NULL
	,Invoiceprice INT NOT NULL
);

CREATE TABLE Dealerships(
	DealershipId INT NOT NULL CONSTRAINT pk_DealershipId PRIMARY KEY
	,[Name] VARCHAR(20) NOT NULL 
	,[Address] VARCHAR(50) NOT NULL
	,[City] VARCHAR(20) NOT NULL
	,[State] VARCHAR(20) NOT NULL
);

CREATE TABLE Salespersons(
	SalespersonId INT NOT NULL CONSTRAINT pk_SalespersonId PRIMARY KEY
	,[Name] VARCHAR(20) NOT NULL
);

CREATE TABLE Customers(
	CustomerId INT NOT NULL CONSTRAINT pk_CustomerId PRIMARY KEY
	,[Name] VARCHAR(20) NOT NULL
	,[Address] VARCHAR(50) NOT NULL
	,[City] VARCHAR(20) NOT NULL
	,[State] VARCHAR(20) NOT NULL
);

CREATE TABLE Reportstos(
	ReportstoId INT NOT NULL CONSTRAINT pk_ReportstoId PRIMARY KEY
	,SalespersonId INT NOT NULL CONSTRAINT fk_SalespersonId FOREIGN KEY REFERENCES Salespersons
	,ManagingSalespersonId INT NOT NULL
);

CREATE TABLE Worksat(
	WorksatId INT NOT NULL CONSTRAINT pk_WorksatId PRIMARY KEY
	,SalespersonId INT NOT NULL CONSTRAINT fk_Salesperson_Id FOREIGN KEY REFERENCES Salespersons
	,DealershipId INT NOT NULL CONSTRAINT fk_DealershipId FOREIGN KEY REFERENCES Dealerships
	,Monthworked INT
	,BasesalaryForMonth INT
);

CREATE TABLE Inventories(
	InventoryId INT NOT NULL CONSTRAINT pk_InventoryId PRIMARY KEY
	,VIN INT NOT NULL CONSTRAINT fk_VIN FOREIGN KEY REFERENCES Cars
	,DealershipId INT NOT NULL CONSTRAINT fk_Dealership_Id FOREIGN KEY REFERENCES Dealerships
);

CREATE TABLE Sales(
	SaleId INT NOT NULL CONSTRAINT pk_SaleId PRIMARY KEY
	,VIN INT NOT NULL CONSTRAINT FK_Vid FOREIGN KEY REFERENCES Cars
	,CustomerId INT NOT NULL CONSTRAINT FK_CustomerId FOREIGN KEY REFERENCES Customers
	,SalespersonId INT NOT NULL CONSTRAINT Fk_SPersonId FOREIGN KEY REFERENCES Salespersons
	,DealershipId INT NOT NULL CONSTRAINT Fk_DId FOREIGN KEY REFERENCES Dealerships
	,Saleprice INT NOT NULL
	,Saledate DATE NOT NULL
);

-- 1. Find the names of all salespeople who have ever worked for the company at any dealership.

SELECT s.[Name] FROM Salespersons s JOIN Worksat w ON s.SalespersonId = w.SalespersonId;

-- 2. List the Name, Street Address, and City of each customer who lives in Ahmedabad.

SELECT [Name], [Address], [City] FROM Customers WHERE City = 'Ahmedabad';

-- 3. List the VIN, make, model, year, and mileage of all cars in the inventory of the dealership named "Hero Honda Car World".

SELECT c.VIN,c.Make,c.Modal,c.[Year],c.Milage 
FROM Cars c JOIN Inventories i 
ON c.VIN = i.VIN 
WHERE i.DealershipId = (SELECT DealershipId FROM Dealerships WHERE [Name] = 'Hero Honda Car World');

-- 4. List names of all customers who have ever bought cars from the dealership named "Concept Hyundai".

SELECT c.[Name]
FROM Customers c JOIN Sales i 
ON c.CustomerId = i.CustomerId
WHERE i.DealershipId = (SELECT DealershipId FROM Dealerships WHERE [Name] = 'Concept Hyundai');

-- 5. For each car in the inventory of any dealership, list the VIN, make, model, and year of the car,
--along with the name, city, and state of the dealership whose inventory contains the car.

SELECT c.VIN,c.Make,c.Modal,c.[Year],d.[Name],d.[City],d.[City],d.[State]
FROM Cars c 
JOIN	Inventories i
ON c.VIN = i.VIN 
JOIN Dealerships d
ON i.DealershipId = d.DealershipId;

--6. Find the names of all salespeople who are managed by a salesperson named "Adam Smith".

SELECT s.[Name]
FROM Salespersons s 
JOIN Reportstos r
ON s.SalespersonId = r.SalespersonId  
JOIN Salespersons a
ON r.ManagingSalespersonId=a.SalespersonId
WHERE a.[Name]='Adam Smith'
;

-- 7. Find the names of all salespeople who do not have a manager.

SELECT s.[Name]
FROM Salespersons s 
JOIN Reportstos r
ON s.SalespersonId = r.SalespersonId  
JOIN Salespersons a
ON r.ManagingSalespersonId=a.SalespersonId
WHERE a.[Name] IS NULL
;

-- 8. Find the total number of dealerships.

SELECT COUNT(*) 'Total DealerShips' FROM Dealerships;

-- 9. List the VIN, year, and mileage of all "Toyota Camrys" in the inventory of the
--dealership named "Toyota Performance".
--(Note that a "Toyota Camry" is indicated by the make being "Toyota" and the model being "Camry".)

SELECT c.[VIN],c.[Year],c.[Milage]
FROM Cars c 
JOIN Inventories i
ON c.CarId = i.VIN
JOIN Dealerships d
ON i.DealershipId=d.DealershipId
WHERE d.[Name]='Toyota Performance' AND c.Make='Toyota'AND c.[Modal] = 'Camry';

-- 10. Find the name of all customers who bought a car at a dealership located in a state other than the state in which they live.

SELECT c.[Name]
FROM Customers c 
JOIN Sales s
ON c.CustomerId = s.CustomerId
JOIN Dealerships d
ON d.DealershipId = s.DealershipId
WHERE d.[State]!=c.[State];

-- 11. Find the name of the salesperson that made the largest base salary working at the dealership 
--named "Ferrari Sales" during January 2010.

SELECT [Name]
FROM(
SELECT DENSE_RANK() OVER(ORDER BY w.BasesalaryForMonth DESC)[d_rank],
s.SalespersonId,s.[Name],w.WorksatId,w.Monthworked,w.BasesalaryForMonth,
w.DealershipId,d.[Name][d.Name],d.[Address],d.[City],d.[State]
FROM Salespersons s
JOIN Worksat w
ON s.SalespersonId = w.SalespersonId
JOIN Dealerships d
ON d.DealershipId = w.DealershipId
WHERE d.[Name]= 'Ferrari Sales')[tb1]
JOIN Sales sa
ON sa.SalespersonId=tb1.SalespersonId
WHERE d_rank = 1 AND YEAR(sa.Saledate) = 2010 AND
DATENAME(mm,sa.Saledate) = 'January';

-- 12. List the name, street address, city, and state of any customer who has bought more than  
--two cars from all dealerships combined since January 1, 2010.

SELECT c.[Name],c.[Address],c.[City],c.[State]
FROM (
	SELECT DENSE_RANK() OVER (PARTITION BY CustomerId ORDER BY SaleId ASC)[d_rank],*
	FROM Sales
)[tb]
JOIN Customers c
ON tb.CustomerId = c.CustomerId
WHERE d_rank >= 2 AND Saledate >= '2010-01-01';

-- 13. List the name, salesperson ID, and total sales amount for each salesperson who has ever 
--sold at least one car. The total sales amount for a salesperson is the sum of the 
--sale prices of all cars ever sold by that salesperson.

SELECT sp.SalespersonId,sp.[Name],SUM(s.Saleprice) 'Total Sales' FROM Sales s
JOIN Salespersons sp 
ON s.SalespersonId = sp.SalespersonId
GROUP BY sp.SalespersonId,sp.[Name];

-- 14. Find the names of all customers who bought cars during 2010 who were also salespeople during 2010.
--For the purpose of this query, assume that no two people have the same name.

SELECT c.[Name] 'Customer Name'
FROM Customers c
JOIN Salespersons sp 
ON c.[Name] = sp.[Name]
JOIN Sales s 
ON s.SalespersonId = sp.SalespersonId
WHERE YEAR(s.Saledate) = 2010;

-- 15. Find the name and salesperson ID of the salesperson who sold the most cars for the 
--company at dealerships located in Gujarat between March 1, 2010 and March 31, 2010.

SELECT sp.*
FROM Salespersons sp
JOIN Sales s ON s.SalespersonId = sp.SalespersonId
JOIN Dealerships d ON d.DealershipId = s.DealershipId
WHERE sp.SalespersonId IN (
	SELECT SalespersonId
	FROM Sales
	GROUP BY SalespersonId
	HAVING COUNT(SalespersonId)=
	(
		SELECT MAX(CountId)
		FROM(
			SELECT COUNT(SalespersonId) CountId
			FROM Sales
			GROUP BY SalespersonId
		)Tb1
	)
)AND d.[State]= 'Gujarat' AND s.Saledate >= '2010-03-01'
AND s.Saledate <= '2010-03-31';

--16. Calculate the payroll for the month of March 2010.
	--* The payroll consists of the name, salesperson ID, and gross pay for each salesperson who worked that month.
    --* The gross pay is calculated as the base salary at each dealership employing the salesperson that month, along with the total commission for the salesperson that month.
    --* The total commission for a salesperson in a month is calculated as 5% of the profit made on all cars sold by the salesperson that month.
    --* The profit made on a car is the difference between the sale price and the invoice price of the car. (Assume, that cars are never sold for less than the invoice price.)

SELECT sp.SalespersonId, sp.[Name],
SUM(ISNULL(w.BasesalaryForMonth, 0) + ISNULL(((c.AskPrice - c.Invoiceprice) * 5 / 100), 0)) [Gross Pay]
FROM Salespersons sp
LEFT JOIN Sales s ON s.SalespersonId = sp.SalespersonId
LEFT JOIN Cars c ON c.vin = s.vin
RIGHT JOIN Worksat w ON w.SalespersonId = sp.SalespersonId
WHERE DATENAME(MM, s.Saledate) = 'March' AND YEAR(s.Saledate) = 2010
GROUP BY sp.SalespersonId, sp.[Name]
ORDER BY sp.SalespersonId;