USE DayFiveAssign

CREATE TABLE Employees(
	EmployeeID INT NOT NULL PRIMARY KEY,
	FirstName varchar(20) NOT NULL,
	LastName varchar(25) NOT NULL,
	Salary MONEY NOT NULL,
	JoiningDate DATETIME NOT NULL,
	Department VARCHAR(30) NOT NULL,
	ManagerID INT DEFAULT NULL
)

CREATE TABLE Incentives(
	Employee_Ref_ID INT CONSTRAINT fkEmployeeId FOREIGN KEY REFERENCES dbo.Employees(EmployeeID),
	IncentiveDate Date NOT NULL,
	IncentiveAmount MONEY DEFAULT NULL
)

--Get difference between JOINING_DATE and INCENTIVE_DATE from employee and incentives table
SELECT e.FirstName, DATEDIFF(DAY,CONVERT(DATE, e.JoiningDate),i.IncentiveDate) AS Differece,CONVERT(DATE, e.JoiningDate), i.IncentiveDate FROM Employees e JOIN Incentives i ON e.EmployeeID=i.Employee_Ref_ID

--Select first_name, incentive amount from employee and incentives table for those employees who have incentives and incentive amount greater than 3000
SELECT e.FirstName, i.IncentiveAmount FROM Employees e JOIN Incentives i ON e.EmployeeID=i.Employee_Ref_ID WHERE i.IncentiveAmount > 3000

--Select first_name, incentive amount from employee and incentives table for all employees even if they didn’t get incentives.
SELECT e.FirstName, i.IncentiveAmount FROM Employees e FULL OUTER JOIN Incentives i ON e.EmployeeID=i.Employee_Ref_ID

--Select EmployeeName, ManagerName from the employee table.
SELECT e.EmployeeID, (e.FirstName +' '+e.LastName) 'Manager Name', emp.EmployeeID, emp.FirstName FROM Employees e, Employees emp WHERE e.EmployeeID=emp.ManagerID

--Select first_name, incentive amount from employee and incentives table for all employees even if they didn’t get incentives and set incentive amount as 0 for those employees who didn’t get incentives.
SELECT e.FirstName, ISNULL(i.IncentiveAmount, 0) FROM Employees e FULL OUTER JOIN Incentives i ON e.EmployeeID=i.Employee_Ref_ID

CREATE TABLE Cars(
	CarID INT NOT NULL,
	VIN INT NOT NULL PRIMARY KEY,
	Make VARCHAR(30) NOT NULL,
	Modal VARCHAR(30) NOT NULL,
	MadeYear INT NOT NULL,
	Mileage INT NOT NULL,
	AskPrice MONEY NOT NULL,
	InvoicePrice MONEY NOT NULL
)

CREATE TABLE Dealerships(
	DealershipID INT NOT NULL PRIMARY KEY,
	Name VARCHAR(30) NOT NULL,
	Address VARCHAR(MAX) NOT NULL,
	City VARCHAR(30) NOT NULL,
	State VARCHAR(30) NOT NULL
)

CREATE TABLE  Salespersons(
	SalespeersonID INT NOT NULL PRIMARY KEY,
	Name VARCHAR(30) NOT NULL
)

CREATE TABLE Customers(
	CustomerID INT NOT NULL PRIMARY KEY,
	Name VARCHAR(30) NOT NULL,
	Address VARCHAR(MAX) NOT NULL,
	City VARCHAR(30) NOT NULL,
	State VARCHAR(30) NOT NULL
)

CREATE TABLE Reports(
	ReportID INT NOT NULL PRIMARY KEY,
	SalespersonID INT CONSTRAINT fkSalsepersonID FOREIGN KEY REFERENCES dbo.Salespersons,
	ManagingSalespersonID INT CONSTRAINT fkMSID FOREIGN KEY REFERENCES dbo.Salespersons
)

CREATE TABLE Works(
	WorksAtID INT NOT NULL PRIMARY KEY,
	SalespersonID INT CONSTRAINT fkSalespersonID FOREIGN KEY REFERENCES dbo.Salespersons,
	DealershipID INT CONSTRAINT fkDealershiID FOREIGN KEY REFERENCES dbo.Dealerships,
	MonthWorked DATE NOT NULL,
	BaseSalary MONEY NOT NULL
)

CREATE TABLE Inventories(
	InventoryID INT NOT NULL PRIMARY KEY,
	VIN INT CONSTRAINT fkVIN FOREIGN KEY REFERENCES dbo.Cars,
	DealershipID INT CONSTRAINT fkDealershiID2 FOREIGN KEY REFERENCES dbo.Dealerships
)

CREATE TABLE Sales(
	SaleID INT NOT NULL PRIMARY KEY,
	VIN INT CONSTRAINT fkVIN3 FOREIGN KEY REFERENCES dbo.Cars,
	CustomerID INT CONSTRAINT fkCustomerID3 FOREIGN KEY REFERENCES dbo.Customers,
	SalespersonID INT CONSTRAINT fkSalespersonID3 FOREIGN KEY REFERENCES dbo.Salespersons,
	DealershipID INT CONSTRAINT fkDealershiID3 FOREIGN KEY REFERENCES dbo.Dealerships,
	SalePrice MONEY NOT NULL,
	SaleDate DATE NOT NULL
)

--1. Find the names of all salespeople who have ever worked for the company at any dealership.
SELECT s.Name FROM Salespersons s JOIN Works w ON s.SalespeersonID=w.SalespersonID

--2. List the Name, Street Address, and City of each customer who lives in Ahmedabad.
SELECT Name, Address, City FROM Customers WHERE City = 'Ahmedabad'

--3. List the VIN, make, model, year, and mileage of all cars in the inventory of the dealership named "Hero Honda Car World".
SELECT c.VIN, c.Make, c.Modal, YEAR(c.MadeYear), c.Mileage FROM Cars c JOIN Inventories i ON c.VIN = i.VIN JOIN Dealerships d ON d.DealershipID = i.DealershipID WHERE d.Name = 'Hero Honda Car World'

--4. List names of all customers who have ever bought cars from the dealership named "Concept Hyundai".
SELECT c.Name FROM Customers c JOIN Sales s ON c.CustomerID = s.CustomerID JOIN Dealerships d ON d.DealershipID = s.DealershipID WHERE d.Name = 'Concept Hyundai'

--5. For each car in the inventory of any dealership, list the VIN, make, model, and year of the car, along with the name, city, and state of the dealership whose inventory contains the car.
SELECT c.VIN, c.Make, c.Modal, c.MadeYear, d.Name as 'Dealership Name', d.City as 'Dealership City', d.State as 'Dealership State' FROM Cars c JOIN Inventories i ON c.VIN = i.VIN JOIN Dealerships d ON d.DealershipID = i.DealershipID

--6. Find the names of all salespeople who are managed by a salesperson named "Adam Smith".
SELECT s.Name FROM Salespersons s JOIN Reports r ON s.SalespeersonID = r.SalespersonID JOIN Salespersons a ON r.ManagingSalespersonID = a.SalespeersonID WHERE a.Name = 'Adam Smith'

--7. Find the names of all salespeople who do not have a manager.
SELECT s.Name FROM Salespersons s LEFT OUTER JOIN Reports r ON s.SalespeersonID = r.ReportID WHERE r.ReportID IS NULL

--8. Find the total number of dealerships.
SELECT COUNT(DealershipID) AS 'No. of Dealersips' FROM Dealerships

--9. List the VIN, year, and mileage of all "Toyota Camrys" in the inventory of the dealership named "Toyota Performance". (Note that a "Toyota Camry" is indicated by the make being "Toyota" and the model being "Camry".)
SELECT c.VIN, c.MadeYear, c.Mileage, (c.Make+' '+c.Modal) AS 'Name' FROM Cars c JOIN Inventories i ON c.VIN = i.VIN JOIN Dealerships d ON i.DealershipID = d.DealershipID WHERE d.Name = 'Toyota Performance'

--10. Find the name of all customers who bought a car at a dealership located in a state other than the state in which they live.
SELECT c.Name, c.State AS 'Customer State', d.State AS 'Dealership State' FROM Customers c JOIN Sales s ON c.CustomerID = s.SaleID JOIN Dealerships d ON d.DealershipID = s.DealershipID WHERE c.State != d.State

--11. Find the name of the salesperson that made the largest base salary working at the dealership named "Ferrari Sales" during January 2010.
SELECT s.Name, w.BaseSalary FROM Salespersons s JOIN Works w ON s.SalespeersonID=w.SalespersonID WHERE w.BaseSalary = CONVERT(INT, 
(SELECT MAX(w.BaseSalary) AS Salary FROM Salespersons s JOIN Works w ON s.SalespeersonID = w.SalespersonID 
	JOIN Dealerships d ON w.DealershipID = d.DealershipID 
	WHERE d.Name = 'Ferrari Sales' AND w.MonthWorked = '01-01-2010' ))

--12. List the name, street address, city, and state of any customer who has bought more than two cars from all dealerships combined since January 1, 2010.
SELECT c.Name, COUNT(*) FROM Customers c JOIN Sales s ON c.CustomerID = s.CustomerID WHERE s.SaleDate = '01-01-2010' GROUP BY c.Name HAVING COUNT(*) > 1

--13. List the name, salesperson ID, and total sales amount for each salesperson who has ever sold at least one car. 
--The total sales amount for a salesperson is the sum of the sale prices of all cars ever sold by that salesperson.
SELECT s.Name, s.SalespeersonID, tbl.Amount FROM Salespersons s JOIN 
	(SELECT w.SalespersonID, SUM(w.SalePrice) AS Amount FROM Salespersons s JOIN Sales w ON s.SalespeersonID=w.SalespersonID GROUP BY w.SalespersonID) 
	AS tbl ON tbl.SalespersonID=s.SalespeersonID

--14. Find the names of all customers who bought cars during 2010 who were also salespeople during 2010. 
--For the purpose of this query, assume that no two people have the same name.
SELECT c.Name AS 'Customer', s.Name AS 'Salesperson' FROM Salespersons s JOIN Sales s1 ON s.SalespeersonID=s1.SalespersonID JOIN Customers c ON c.CustomerID=s1.CustomerID WHERE YEAR(s1.SaleDate)='2010'

--15. Find the name and salesperson ID of the salesperson who sold the most cars for the company at dealerships 
--located in Gujarat between March 1, 2010 and March 31, 2010.
SELECT TOP 1 s.Name FROM Salespersons s JOIN 
	(SELECT s.SalespersonID, SUM(s.SalePrice) AS 'Amount' FROM Sales s JOIN Dealerships d ON s.DealershipID=d.DealershipID 
		WHERE d.State='Gujarat' AND s.SaleDate BETWEEN '2010-03-01' AND '2010-03-31' GROUP BY s.SalespersonID)
	AS tbl ON tbl.SalespersonID = s.SalespeersonID

--16. Calculate the payroll for the month of March 2010.
	--* The payroll consists of the name, salesperson ID, and gross pay for each salesperson who worked that month.
    --* The gross pay is calculated as the base salary at each dealership employing the salesperson that month, along with the total commission for the salesperson that month.
    --* The total commission for a salesperson in a month is calculated as 5% of the profit made on all cars sold by the salesperson that month.
    --* The profit made on a car is the difference between the sale price and the invoice price of the car. (Assume, that cars are never sold for less than the invoice price.)
SELECT sp.SalespeersonID, sp.name,
        SUM(ISNULL(w.BaseSalary, 0) + ISNULL(((c.AskPrice - c.InvoicePrice) * 5 / 100), 0)) 'Gross Pay'
    FROM Salespersons sp JOIN Sales s ON s.SalespersonID = sp.SalespeersonID JOIN Cars c ON c.vin = s.vin JOIN Works w ON w.salespersonid = sp.SalespeersonID
    WHERE s.SaleDate BETWEEN '2010-03-01' AND '2010-03-31'
    GROUP BY sp.SalespeersonID, sp.name ORDER BY sp.SalespeersonID

SELECT * FROM Salespersons sp
    JOIN Sales s ON s.SalespersonID = sp.SalespeersonID
    JOIN Cars c ON c.vin = s.vin
    JOIN Works w ON w.salespersonid = sp.SalespeersonID

