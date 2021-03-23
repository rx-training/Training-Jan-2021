USE Day5;

-- EMPLOYEE TABLE
CREATE TABLE Employees
(
	EmployeeId INT CONSTRAINT pkEmployees PRIMARY KEY IDENTITY,
	FirstName VARCHAR(50) NOT NULL,
	LastName VARCHAR(50) NOT NULL,
	Salary MONEY NOT NULL,
	JoiningDate DATE NOT NULL,
	Department VARCHAR(20) NOT NULL,
	ManagerId INT NULL
)

INSERT INTO Employees (FirstName, LastName, Salary, JoiningDate, Department, ManagerId) VALUES
						('John', 'Abraham', 1000000, '01-JAN-13', 'Banking', NULL),
						('Michael', 'Clarke', 800000, '01-JAN-13', 'Insurance', 1),
						('Roy', 'Thomas', 700000, '01-FEB-13', 'Banking', 1),
						('Tom', 'Jose', 600000, '01-FEB-13', 'Insurance', 2),
						('Jerry', 'Pinto', 650000, '01-FEB-13', 'Insurance', 3),
						('Philip', 'Mathew', 750000, '01-JAN-13', 'Services', 3),
						('TestName1', '123', 650000, '01-JAN-13', 'Services', 2),
						('TestName2', 'Lname%', 600000, '01-FEB-13', 'Insurance', 2);

SELECT * FROM Employees
-- INCENTIVES TABLE
CREATE TABLE Incentives
(
	EmployeeRefId INT CONSTRAINT fkIncentives FOREIGN KEY REFERENCES Employees(EmployeeId),
	IncentiveDate DATE NOT NULL,
	IncentiveAmount MONEY NOT NULL
)

INSERT INTO Incentives (EmployeeRefId, IncentiveDate, IncentiveAmount) VALUES
						(1, '01-FEB-13', 5000),
						(2, '01-FEB-13', 3000),
						(3, '01-FEB-13', 4000);

SELECT * FROM Incentives

-- 1. Get difference between JOINING_DATE and INCENTIVE_DATE from employee and incentives table 
SELECT e.EmployeeId AS 'EmployeeID',
	(e.FirstName +' '+e.LastName) AS 'Name Of Employee',
	CONCAT(DATEDIFF(DAY, e.JoiningDate, i.IncentiveDate),' DAYS')  AS 'DateDifference'
	FROM Employees e
	INNER JOIN Incentives i ON e.EmployeeId = i.EmployeeRefId;


/*2. Select first_name, incentive amount from employee and incentives table for those employees 
who have incentives and incentive amount greater than 3000*/
SELECT e.FirstName,
	i.IncentiveAmount
	FROM Employees e
	INNER JOIN Incentives i ON e.EmployeeId = i.EmployeeRefId AND i.IncentiveAmount > 3000;


--3. Select first_name, incentive amount from employee and incentives table for all employees even if they didn’t get incentives 
SELECT e.FirstName+' '+e.LastName 'Name Of Employee',
	i.IncentiveAmount
	FROM Employees e
	LEFT OUTER JOIN Incentives i
	ON e.EmployeeId = i.EmployeeRefId;


--4. Select EmployeeName, ManagerName from the employee table

SELECT e.FirstName AS 'Employee Name',
	m.FirstName AS 'Manager Name'
	FROM Employees e INNER JOIN Employees m ON e.ManagerId = m.EmployeeId

/* 5. Select first_name, incentive amount from employee and incentives table for all employees even if 
they didn’t get incentives and set incentive amount as 0 for those employees who didn’t get incentives*/\

SELECT e.FirstName,
	ISNULL(i.IncentiveAmount, 0) AS 'IncentiveAmount'
	FROM Employees e
	LEFT OUTER JOIN Incentives i ON e.EmployeeId = i.EmployeeRefId;

-------------------------------------------------------------------------------------------------------------------------------------------------------
USE Day5Extra

CREATE TABLE Cars (
	CarID INT NOT NULL IDENTITY(1,1) CONSTRAINT pkCar PRIMARY KEY ,
	VIN INT NOT NULL CONSTRAINT uqCars UNIQUE,
	Make VARCHAR(50) NOT NULL,
	Model VARCHAR(50) NOT NULL,
	Year VARCHAR(10) NOT NULL CONSTRAINT chkYearCar CHECK(Year LIKE '[0-9][0-9][0-9][0-9]'),
	Mileage INT NOT NULL,
	AskPrice MONEY NOT NULL,
	InvoicePrice MONEY NOT NULL,
);

CREATE TABLE DealerShips (
	DealerShipID INT NOT NULL PRIMARY KEY IDENTITY(1,1),
	Name VARCHAR(100) NOT NULL,
	Address VARCHAR(255) NOT NULL,
	City VARCHAR(50) NOT NULL,
	State VARCHAR(50) NOT NULL
);

CREATE TABLE SalesPersons(
	SalesPersonID INT NOT NULL PRIMARY KEY IDENTITY(1,1),
	Name VARCHAR(50) NOT NULL
);

CREATE TABLE Customers(
	CustomerId INT NOT NULL PRIMARY KEY IDENTITY(1,1),
	Name VARCHAR(100) NOT NULL,
	Address VARCHAR(255) NOT NULL,
	City VARCHAR(50) NOT NULL,
	State VARCHAR(50) NOT NULL
);

CREATE TABLE ReportsTo(
	ReportsToID INT NOT NULL PRIMARY KEY IDENTITY (1,1),
	SalesPersonID INT NOT NULL CONSTRAINT fkReport FOREIGN KEY REFERENCES SalesPersons(SalesPersonId),
	ManagingSalesPersonID INT NOT NULL
);

CREATE TABLE WorksAt(
	WorksAtId INT NOT NULL PRIMARY KEY,
	ReportsToID INT NOT NULL CONSTRAINT fkWorkReport FOREIGN KEY REFERENCES ReportsTo(ReportsToID),
	SalesPersonID INT NOT NULL CONSTRAINT fkWorkSales FOREIGN KEY REFERENCES SalesPersons(SalesPersonId),
	DealerShipID INT NOT NULL CONSTRAINT fkWorkDealerShip FOREIGN KEY REFERENCES DealerShips(DealerShipID),
	MonthWorked DATE NOT NULL,
	BaseSalaryForMonth MONEY NOT NULL
);

CREATE TABLE Inventories (
	InventoryID INT NOT NULL PRIMARY KEY,
	VIN INT NOT NULL CONSTRAINT fkInventoryVIN FOREIGN KEY REFERENCES Cars(VIN),
	DealerShipID INT NOT NULL CONSTRAINT fkInventoryDealerShip FOREIGN KEY REFERENCES DealerShips(DealerShipID),
);

CREATE TABLE Sales(
	SaleID INT NOT NULL PRIMARY KEY,
	VIN INT NOT NULL CONSTRAINT fkSalesVIN FOREIGN KEY REFERENCES Cars(VIN),
	CustomerID INT NOT NULL CONSTRAINT fkSalesCustomer FOREIGN KEY REFERENCES DealerShips(DealerShipID),
	SalesPersonID INT NOT NULL CONSTRAINT fkSalesSales FOREIGN KEY REFERENCES SalesPersons(SalesPersonId),
	DealerShipID INT NOT NULL CONSTRAINT fkSalesDealerShip FOREIGN KEY REFERENCES DealerShips(DealerShipID),
	SalePrice MONEY NOT NULL,
	SalesDate DATE NOT NULL
);


--1. 1. Find the names of all salespeople who have ever worked for the company at any dealership.

	SELECT s.SalesPersonID 'SalesPersonID',
		s.Name 'SalesPersonName'
	FROM SalesPersons s
		INNER JOIN WorksAt w 
	ON s.SalesPersonID = w.SalesPersonID

-- 2. List the Name, Street Address, and City of each customer who lives in Ahmedabad.
	
	SELECT Name,
		Address,
		City
	FROM Customers WHERE City = 'Ahmedabad';

-- 3. List the VIN, make, model, year, and mileage of all cars in the inventory of the dealership named "Hero Honda Car World".

	SELECT c.VIN,
		c.Make,
		c.Model,
		c.Year,
		c.Mileage
	FROM Inventories i
		INNER JOIN Cars c
		ON c.VIN = i.VIN
		INNER JOIN DealerShips d 
		ON d.DealerShipID = i.DealerShipID
	WHERE d.Name ='Hero Honda Car World';

-- 4. List names of all customers who have ever bought cars from the dealership named "Concept Hyundai".-

	SELECT c.CustomerId 'CustomerID', 
		c.Name 'CustomerName'
	FROM Sales s 
		INNER JOIN Customers c 
		ON c.CustomerId = s.CustomerID
		INNER JOIN DealerShips d
		ON d.DealerShipID = s.DealerShipID
	WHERE d.Name = 'Concept Hyundai';

-- 5. For each car in the inventory of any dealership, list the VIN, make, model, and year of the car, along with the name, city, and state of the dealership whose inventory contains the car.

	SELECT i.VIN 'Vehicle Number',
		c.Make 'Made By',
		c.Model 'Model Name',
		c.Year 'Year of Production',
		d.Name 'Dealership Name',
		d.City 'Dealership City',
		d.State 'DealerShip State'
	FROM Inventories i 
		INNER JOIN DealerShips d
		ON d.DealerShipID = i.DealerShipID
		INNER JOIN Cars c
		ON c.VIN = i.VIN

-- 6. Find the names of all salespeople who are managed by a salesperson named "Adam Smith".

	SELECT s2.Name'Sales Person Name',
		s1.Name 'Manager Name'
	FROM ReportsTo r
		INNER JOIN SalesPersons s1 
		ON r.ManagingSalesPersonID = s1.SalesPersonID
		INNER JOIN SalesPersons s2
		ON r.SalesPersonID = s2.SalesPersonID
	WHERE s1.Name = 'Adam Smith';

-- 7. Find the names of all salespeople who do not have a manager.
	
	SELECT s.SalesPersonID 'ID of Sales' 
	,s.Name 'Name of Sales Person'
	FROM SalesPersons s
		LEFT OUTER JOIN ReportsTo r
		ON s.SalesPersonID = r.SalesPersonID
	WHERE r.ManagingSalesPersonID IS NULL;

-- 8. Find the total number of dealerships.
	
	SELECT COUNT(*)
	FROM DealerShips;


-- 9. List the VIN, year, and mileage of all "Toyota Camrys" in the inventory of the dealership named "Toyota Performance". (Note that a "Toyota Camry" is indicated by the make being "Toyota" and the model being "Camry".)

	SELECT c.VIN 'Vehicle Number',
		(c.Make +''+c.Model) 'Vehicle Name',
		c.Year 'Year of production',
		c.Mileage 'Mileage',
		d.Name 'Dealership Name'
	FROM Inventories i
		INNER JOIN Cars c 
		ON c.VIN = i.VIN
		INNER JOIN DealerShips d
		ON d.DealerShipID = i.DealerShipID
	WHERE c.Make ='Toyoto' AND c.Model = 'Camrys' AND d.Name = 'Toyoto performance';

-- 10. Find the name of all customers who bought a car at a dealership located in a state other than the state in which they live.
	
	SELECT c.CustomerId'Customer ID',
		c.Name 'Customer Name' 
	FROM Sales s
		INNER JOIN DealerShips d
		ON d.DealerShipID = s.DealerShipID
		INNER JOIN Customers c
		ON c.CustomerId = s.CustomerID
	WHERE d.State != c.State


-- 11. Find the name of the salesperson that made the largest base salary working at the dealership named "Ferrari Sales" during January 2010.

	SELECT SalesName 'Sales works under Ferrari Sales',
		MAX(SalarySales) 'Largest Salary'
	FROM(SELECT s.Name 'SalesName',
			w.BaseSalaryForMonth 'SalarySales'
			FROM WorksAt w
			INNER JOIN DealerShips d
			ON d.DealerShipID = w.DealerShipID
			INNER JOIN SalesPersons s
			ON s.SalesPersonID = w.SalesPersonID
			WHERE d.Name ='Ferrari Sales' AND MONTH(w.MonthWorked) = 1 AND  YEAR(w.MonthWorked) = 2010)
			AS tbl 
			GROUP BY SalesName;

 

-- 12. List the name, street address, city, and state of any customer who has bought more than two cars from all dealerships combined since January 1, 2010.

	SELECT DISTINCT c1.Name,
		c1.Address,
		c1.City,
		c1.State
	FROM Customers c1
	WHERE c1.CustomerId IN(
		SELECT DISTINCT c2.CustomerId
		FROM Customers c2 
		INNER JOIN Sales s 
		ON c2.CustomerId = s.CustomerID 
		WHERE s.SalesDate > '2010-01-01'
		GROUP BY c2.CustomerId HAVING COUNT(*)>2
		);

-- 13. List the name, salesperson ID, and total sales amount for each salesperson who has ever sold at least one car. The total sales amount for a salesperson is the sum of the sale prices of all cars ever sold by that salesperson.

	SELECT sp.SalesPersonID 'Sales ID',
		sp.Name 'Sales Name',
		SUM(s.SalePrice) 'Total Price'
	FROM Sales s
	INNER JOIN SalesPersons sp 
	ON s.SalesPersonID = sp.SalesPersonID
	GROUP BY sp.SalesPersonID,sp.Name

-- 14. Find the names of all customers who bought cars during 2010 who were also salespeople during 2010. For the purpose of this query, assume that no two people have the same name.

	SELECT c.Name 'Customer Name'
	FROM Customers c
	INNER JOIN SalesPersons sp 
	ON c.Name = sp.Name
	INNER JOIN Sales s
	ON s.SalesPersonID = sp.SalesPersonID
	WHERE YEAR(s.SalesDate) = 2010;


-- 15. Find the name and salesperson ID of the salesperson who sold the most cars for the company at dealerships located in Gujarat between March 1, 2010 and March 31, 2010.

	SELECT tempTbl.SalesPersonID, 
		tempTbl.Name,
		MAX(tempTbl.NumberOfCarsSoldInGujarat) AS 'TotalCarsSold'
	FROM ( SELECT COUNT(*) AS 'NumberOfCarsSoldInGujarat',
			s.SalesPersonID,
			sp.Name
		FROM Sales s
			INNER JOIN DealerShips d ON d.DealerShipId = s.DealerShipId
			INNER JOIN SalesPersons sp ON s.SalesPersonID = sp.SalesPersonId
		WHERE s.SalesDate BETWEEN '2010-03-01' AND '2010-03-31'
			AND d.State = 'Gujarat'
		GROUP BY s.SalesPersonId, sp.Name ) AS tempTbl
	GROUP BY tempTbl.SalesPersonID, tempTbl.Name;
		
/* 16. Calculate the payroll for the month of March 2010.
	* The payroll consists of the name, salesperson ID, and gross pay for each salesperson who worked that month.
        * The gross pay is calculated as the base salary at each dealership employing the salesperson that month, along with the total commission for the salesperson that month.
        * The total commission for a salesperson in a month is calculated as 5% of the profit made on all cars sold by the salesperson that month.
        * The profit made on a car is the difference between the sale price and the invoice price of the car. (Assume, that cars are never sold for less than the invoice price.)
*/

SELECT sp.SalesPersonId, sp.Name,
        SUM(ISNULL(w.BaseSalaryForMonth, 0) + ISNULL(((c.AskPrice - c.InvoicePrice) * 5 / 100), 0)) [Gross Pay]
FROM SalesPersons sp   
	LEFT JOIN Sales s ON s.SalesPersonID = sp.SalesPersonID   
	LEFT JOIN Cars c ON c.VIN = s.VIN   
	RIGHT JOIN WorksAt w ON w.SalesPersonID = sp.SalesPersonID
	WHERE DATENAME(MM, s.SalesDate) = 'March' AND YEAR(s.SalesDate) = 2010
	GROUP BY sp.SalesPersonID, sp.Name
	ORDER BY sp.SalesPersonID;