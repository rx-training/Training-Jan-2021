USE Day2DB

CREATE TABLE Cars(
	CarId INT,
	VIN INT CONSTRAINT pkCarVIN PRIMARY KEY,
	Make VARCHAR(25),
	Model VARCHAR(25),
	Year DATE,
	Mileage INT,
	AskPrice MONEY,
	InvoicePrice MONEY
)

CREATE TABLE Dealerships(
	DealershipId INT CONSTRAINT pkDealershipId PRIMARY KEY,
	Name VARCHAR(50),
	Address VARCHAR(50),
	City VARCHAR(50),
	State VARCHAR(50)
)

CREATE TABLE SalesPersons(
	SalesPersonId INT CONSTRAINT pkSalesPersonId PRIMARY KEY,
	Name VARCHAR(50)
)

CREATE TABLE Customers(
	CustomerId INT CONSTRAINT pkCustomerId PRIMARY KEY,
	Name VARCHAR(50),
	Address VARCHAR(50),
	City VARCHAR(50),
	State VARCHAR(50)
)

CREATE TABLE ReportsTos(
	ReportsToId INT CONSTRAINT pkReportsToId PRIMARY KEY,
	SalesPersonId INT CONSTRAINT fkSalesPersonId FOREIGN KEY REFERENCES SalesPersons(SalesPersonId),
	ManagingSalesPersonId INT CONSTRAINT fkManagingSalesPersonId FOREIGN KEY REFERENCES SalesPersons(SalesPersonId)
)

CREATE TABLE WorksAt(
	WorksAtId INT CONSTRAINT pkWorksAtId PRIMARY KEY,
	SalesPersonId INT CONSTRAINT fkWorksAtSalesPersonId FOREIGN KEY REFERENCES SalesPersons(SalesPersonId),
	DealershipId INT CONSTRAINT fkWorksAtDealershipId FOREIGN KEY REFERENCES Dealerships(DealershipId),
	MonthWorked VARCHAR(25),
	BaseSalaryForMonth MONEY
)

CREATE TABLE Inventorys(
	InventoryId INT CONSTRAINT pkInventoryId PRIMARY KEY,
	VIN INT CONSTRAINT fkInventoryVIN FOREIGN KEY REFERENCES Cars(VIN),
	DealershipId INT CONSTRAINT fkInventoryDealershipId FOREIGN KEY REFERENCES Dealerships(DealershipId)
)

CREATE TABLE Sales(
	SaleId INT CONSTRAINT pkSalesId PRIMARY KEY,
	VIN INT CONSTRAINT fkSalesVIN FOREIGN KEY REFERENCES Cars(VIN),
	CustomerId INT CONSTRAINT fkSalesCustomerId FOREIGN KEY REFERENCES Customers(CustomerId),
	SalesPersonId INT CONSTRAINT fkSalesSalesPersonId FOREIGN KEY REFERENCES SalesPersons(SalesPersonId),
	DealershipId INT CONSTRAINT fkSalesDealershipId FOREIGN KEY REFERENCES Dealerships(DealershipId),
	SalePrice MONEY,
	SaleDate DATE
)

SELECT * FROM Cars

SELECT * FROM Dealerships

SELECT * FROM SalesPersons

SELECT * FROM Customers

SELECT * FROM ReportsTos

SELECT * FROM WorksAt

SELECT * FROM Inventorys

SELECT * FROM Sales

/*Q 1. Find the names of all salespeople who have ever worked for the company at any dealership.
Ans.*/
SELECT DISTINCT s.Name
FROM SalesPersons AS s JOIN WorksAt AS w
ON s.SalesPersonId = w.SalesPersonId

/*Q 2. List the Name, Street Address, and City of each customer who lives in Ahmedabad.
Ans.*/
SELECT Name, Address, City
FROM Customers
WHERE City = 'Ahmedabad'

/*Q 3. List the VIN, make, model, year, and mileage of all cars in the inventory of the dealership named "Hero Honda Car World".
Ans.*/
SELECT c.VIN, c.Make, c.Model, c.Year, c.Mileage
FROM Cars AS c JOIN Inventorys AS i
ON c.VIN = i.VIN JOIN Dealerships AS d
ON i.DealershipId = d.DealershipId
WHERE d.Name = 'Hero Honda Car World'

/*Q 4. List names of all customers who have ever bought cars from the dealership named "Concept Hyundai".
Ans.*/
SELECT c.Name
FROM Customers AS c JOIN Sales AS s
ON c.CustomerId = s.CustomerId JOIN Dealerships AS d
ON s.DealershipId = d.DealershipId
WHERE d.Name = 'Concept Hyundai'

/*Q 5. For each car in the inventory of any dealership, list the VIN, make, model, and year of the car, along with the name, city, and state of the
dealership whose inventory contains the car.
Ans.*/
SELECT c.VIN, c.Make, c.Model, c.Year, d.Name, d.City, d.State
FROM Cars AS c JOIN Inventorys AS i
ON c.VIN = i.VIN JOIN Dealerships AS d
ON i.DealershipId = d.DealershipId

/*Q 6. Find the names of all salespeople who are managed by a salesperson named "Adam Smith".
Ans.*/
SELECT s1.Name
FROM SalesPersons AS s1 JOIN ReportsTos AS r
ON s1.SalesPersonId = r.SalesPersonId JOIN SalesPersons AS s2
ON r.ManagingSalesPersonId = s2.SalesPersonId
WHERE s2.Name = 'Adam Smith'

/*Q 7. Find the names of all salespeople who do not have a manager.
Ans.*/
SELECT s.Name
FROM SalesPersons AS s LEFT OUTER JOIN ReportsTos AS r
ON s.SalesPersonId = r.SalesPersonId
WHERE r.ManagingSalesPersonId IS NULL

/*Q 8. Find the total number of dealerships.
Ans.*/
SELECT COUNT(DealershipId) AS 'TotalDealerships'
FROM Dealerships

/*Q 9. List the VIN, year, and mileage of all "Toyota Camrys" in the inventory of the dealership named "Toyota Performance".
(Note that a "Toyota Camry" is indicated by the make being "Toyota" and the model being "Camry".)
Ans.*/
SELECT c.VIN, c.Year, c.Mileage
FROM Cars AS c JOIN Inventorys AS i
ON c.VIN = i.VIN JOIN Dealerships AS d
ON i.DealershipId = d.DealershipId
WHERE d.Name = 'Toyota Performance' AND c.Make = 'Toyota' AND c.Model = 'Camrys'

/*Q 10. Find the name of all customers who bought a car at a dealership located in a state other than the state in which they live.
Ans.*/
SELECT c.Name
FROM Customers AS c JOIN Sales AS s
ON c.CustomerId = s.CustomerId JOIN Dealerships AS d
ON s.DealershipId = d.DealershipId
WHERE c.State <> d.State

/*Q 11. Find the name of the salesperson that made the largest base salary working at the dealership named "Ferrari Sales" during January 2010.
Ans.*/
SELECT TOP(1) s.Name
FROM SalesPersons AS s JOIN WorksAt AS w
ON s.SalesPersonId = w.SalesPersonId JOIN Dealerships AS d
ON w.DealershipId = d.DealershipId JOIN Sales AS sale
ON d.DealershipId = sale.DealershipId
WHERE d.Name = 'Ferrari Sales' AND YEAR(sale.SaleDate) = 2010 AND DATENAME(MM, sale.SaleDate) = 'January'
ORDER BY w.BaseSalaryForMonth DESC

/*Q 12. List the name, street address, city, and state of any customer who has bought more than two cars from all dealerships combined since January 1, 2010.
Ans.*/
SELECT c.Name, c.Address, c.City, c.State
FROM (
	 SELECT DENSE_RANK() OVER (PARTITION BY CustomerId ORDER BY SaleId ASC) 'dRank', *
	 FROM Sales
	 ) [tblTemp]
JOIN Customers AS c
ON tblTemp.CustomerId = c.CustomerId
WHERE dRank >= 2 AND SaleDate >= '2010-01-01'
GROUP BY c.Name, c.Address, c.City, c.State

/*Q 13. List the name, salesperson ID, and total sales amount for each salesperson who has ever sold at least one car. The total sales amount for a
salesperson is the sum of the sale prices of all cars ever sold by that salesperson.
Ans.*/
SELECT s.SalesPersonId, sp.Name, SUM(s.SalePrice) AS 'TotalSales'
FROM SalesPersons AS sp JOIN Sales AS s
ON sp.SalesPersonId = s.SalesPersonId
GROUP BY s.SalesPersonId, sp.Name
HAVING COUNT(s.SalesPersonId) >= 1

/*Q 14. Find the names of all customers who bought cars during 2010 who were also salespeople during 2010. For the purpose of this query, assume
that no two people have the same name.
Ans.*/
SELECT c.Name
FROM Customers AS c JOIN SalesPersons as sp
ON c.Name = sp.Name JOIN Sales AS s
ON sp.SalesPersonId = s.SalesPersonId
WHERE DATEPART(YY, s.SaleDate) = 2010

/*Q 15. Find the name and salesperson ID of the salesperson who sold the most cars for the company at dealerships located in Gujarat
between March 1, 2010 and March 31, 2010.
Ans.*/
SELECT TOP(1) s.SalesPersonId, sp.Name
FROM SalesPersons AS sp JOIN Sales AS s
ON sp.SalesPersonId = s.SalesPersonId JOIN Dealerships as d
ON d.DealershipId = s.DealershipId
WHERE d.State = 'Gujarat' AND s.SaleDate BETWEEN '2010-03-01' AND '2010-03-31'
GROUP BY s.SalesPersonId, sp.Name
ORDER BY COUNT(s.SalesPersonId) DESC

/*Q 16. Calculate the payroll for the month of March 2010.
		* The payroll consists of the name, salesperson ID, and gross pay for each salesperson who worked that month.
        * The gross pay is calculated as the base salary at each dealership employing the salesperson that month, along with the total commission
		  for the salesperson that month.
        * The total commission for a salesperson in a month is calculated as 5% of the profit made on all cars sold by the salesperson that month.
        * The profit made on a car is the difference between the sale price and the invoice price of the car. (Assume, that cars are never sold for
		  less than the invoice price.)
Ans.*/
SELECT sp.SalesPersonId, sp.Name, SUM(ISNULL(w.BaseSalaryForMonth, 0) + ISNULL(((s.SalePrice-c.InvoicePrice)*5/100), 0)) AS 'GrossPay'
FROM SalesPersons AS sp JOIN WorksAt AS w
ON sp.SalesPersonId = w.SalesPersonId JOIN Sales AS s
ON w.SalesPersonId = s.SalesPersonId JOIN Cars AS c
ON s.VIN = c.VIN
WHERE DATENAME(MM, s.SaleDate) = 'March' AND DATENAME(YY, s.SaleDate) = 2010
GROUP BY sp.salespersonid, sp.name
