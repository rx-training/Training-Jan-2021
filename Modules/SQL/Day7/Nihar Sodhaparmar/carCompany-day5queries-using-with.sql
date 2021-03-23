USE CarCompany;

/* 1. Find the names of all salespeople who have ever worked for the company at any dealership. */
WITH EmployeeWorked
AS
(
	SELECT s.*
	FROM SalesPersons s 
		INNER JOIN WorksAt w ON s.SalesPersonId = w.SalesPersonId
)
SELECT Name FROM EmployeeWorked;


/* 2. List the Name, Street Address, and City of each customer who lives in Ahmedabad. */
WITH CustomersAddress AS
(
	SELECT Name
		, Address
		, City
	FROM Customers
)
SELECT * FROM CustomersAddress WHERE City = 'Ahmedabad';


/* 3. List the VIN, make, model, year, and mileage of all cars in the inventory of the dealership named "Hero Honda Car World". */
WITH CarsOfDelaerShips
AS
(
	SELECT c.VIN
		, c.Make
		, c.Model
		, c.[Year]
		, c.Mileage
		, D.Name AS 'DealershipName'
	FROM Inventories i 
		INNER JOIN Cars c ON c.VIN = i.VIN
		INNER JOIN DealerShips d ON i.DealersShipId = d.DealerShipId
)
SELECT * FROM CarsOfDelaerShips WHERE DealershipName = 'Hero Honda Car World';


/* 4. List names of all customers who have ever bought cars from the dealership named "Concept Hyundai". */
WITH CustomersAndDealerShips AS
(
	SELECT c.Name AS 'CustomerName', d.Name AS 'DealerShipName'
		FROM Sales s
			INNER JOIN Customers c ON s.CustomerId = c.CustomerId
			INNER JOIN DealerShips d ON s.DealerShipId = d.DealerShipId
)
SELECT CustomerName FROM CustomersAndDealerShips WHERE DealerShipName = 'Concept Hyundai';


/* 5. For each car in the inventory of any dealership, list the VIN, make, model, and year of the car, along with the name, 
city, and state of the dealership whose inventory contains the car. */
WITH InventoryOfDealerShip(CarVIN, CarMake, CarModel, CarYear, DealerShipName, DealerShipCity, DealerShipState)
AS
(
	SELECT c.VIN 
		, c.Make 
		, c.Model 
		, c.[Year] 
		, d.Name 
		, d.City 
		, d.State
	FROM Inventories i
		INNER JOIN DealerShips d ON i.DealersShipId = d.DealerShipId
		INNER JOIN Cars c ON i.VIN = c.VIN
)
SELECT * FROM InventoryOfDealerShip;


/* 6. Find the names of all salespeople who are managed by a salesperson named "Adam Smith". */
WITH Managers(SalesPersonName, ManagerName)
AS
(
	SELECT s2.Name, s1.Name
	FROM ReportsTo r
		INNER JOIN SalesPersons s1 ON r.ManagingSalesPersonId = s1.SalesPersonId
		INNER JOIN SalesPersons s2 ON r.SalesPersonId = s2.SalesPersonId
)
SELECT SalesPersonName FROM Managers WHERE ManagerName = 'Adam Smith';


/* 7. Find the names of all salespeople who do not have a manager. */
WITH Managers(SalesPersonName, ManagerId)
AS
(
	SELECT s.Name, r.ManagingSalesPersonId
	FROM SalesPersons s
		LEFT OUTER JOIN ReportsTo r ON s.SalesPersonId = r.SalesPersonId
)
SELECT SalesPersonName FROM Managers WHERE ManagerId IS NULL;


/* 8. Find the total number of dealerships. */
WITH NumberOfDealership([Total Number Of DealerShips])
AS
(
	SELECT COUNT(*) FROM DealerShips
)
SELECT [Total Number Of DealerShips] FROM NumberOfDealership;


/* 9. List the VIN, year, and mileage of all "Toyota Camrys" in the inventory of the dealership named "Toyota Performance". 
(Note that a "Toyota Camry" is indicated by the make being "Toyota" and the model being "Camry".) */
WITH InventoryOfDealerShip(CarVIN, CarMake, CarModel, CarYear, CarMileage, DealerShipName, DealerShipCity)
AS
(
	SELECT c.VIN 
		, c.Make 
		, c.Model 
		, c.[Year] 
		, c.Mileage
		, d.Name 
		, d.City 
	FROM Inventories i
		INNER JOIN DealerShips d ON i.DealersShipId = d.DealerShipId
		INNER JOIN Cars c ON i.VIN = c.VIN
)
SELECT CarVIN, CarYear, CarMileage FROM InventoryOfDealerShip WHERE DealerShipName = 'Toyota Performance' 
																		AND CarMake = 'Toyota'
																		AND CarModel = 'Camry';


/* 10. Find the name of all customers who bought a car at a dealership located in a state other than the state in which they live. */
WITH CustomersAndDealerships(CustomerName, CustomerState, DealerShipState) AS
(
	SELECT c.Name, c.State, d.State
	FROM Sales s
		INNER JOIN Customers c ON s.CustomerId = c.CustomerId
		INNER JOIN DealerShips d ON s.DealerShipId = d.DealerShipId
)
SELECT CustomerName FROM CustomersAndDealerships WHERE CustomerState <> DealerShipState;

/* 11. Find the name of the salesperson that made the largest base salary working at the dealership named "Ferrari Sales" 
during January 2010. */
WITH SalesPersonRank(Name, BaseSalaryRank)
AS
(
	SELECT s.Name
		, DENSE_RANK() OVER (ORDER BY w.BaseSalaryforMonth DESC)
	FROM SalesPersons s
		INNER JOIN WorksAt w ON s.SalesPersonId = w.SalesPersonId
		INNER JOIN DealerShips d ON d.DealerShipId = w.DealerShipId
	WHERE d.Name = 'Ferrari Sales'
			AND DATENAME(MM,w.MonthWorked) = 'January' AND DATENAME(YY,w.MonthWorked) = 2010	
)
SELECT Name FROM SalesPersonRank WHERE BaseSalaryRank = 1;


/* 12. List the name, street address, city, and state of any customer 
who has bought more than two cars from all dealerships combined since January 1, 2010. */
WITH CarsCountOfCustomers(CustomerName, CustomerAddress, CustomerCity, CustomerState, CustomerId, CarsCount) 
AS
(
	SELECT c.Name, c.Address, c.City, c.State, c.CustomerId, COUNT(*)
	FROM Customers c
		INNER JOIN Sales s ON c.CustomerId = s.CustomerId
	WHERE S.SaleDate >= '2010-01-01'
	GROUP BY c.CustomerId, c.Name, c.Address, c.City, c.State
)
SELECT CustomerName, CustomerAddress, CustomerCity, CustomerState FROM CarsCountOfCustomers WHERE CarsCount > 2;



/* 13. List the name, salesperson ID, and total sales amount for each salesperson who has ever sold at least one car. 
The total sales amount for a salesperson is the sum of the sale prices of all cars ever sold by that salesperson. */
WITH CarsSoldBySalesPerson(SalesPersonId, SalesPersonName, NumberOfCars, TotalSalesPrice)
AS
(
	SELECT sp.SalesPersonId, sp.Name, COUNT(*), SUM(s.SalePrice)
	FROM Sales s 
		INNER JOIN SalesPersons sp ON s.SalesPersonID = sp.SalesPersonId
	GROUP BY sp.SalesPersonId, sp.Name
)
SELECT * FROM CarsSoldBySalesPerson WHERE NumberOfCars > 0;


/* 14. Find the names of all customers who bought cars during 2010 who were also salespeople during 2010. 
For the purpose of this query, assume that no two people have the same name. */
WITH EmployeeAsCustomerAndSalesPerson(Name, SaleDate, MonthWorked)
AS
(
	SELECT DISTINCT c.Name, s.SaleDate, w.MonthWorked
	FROM Sales s
		INNER JOIN Customers c ON s.CustomerId = c.CustomerId
		INNER JOIN WorksAt w ON s.SalesPersonID = w.SalesPersonId
		INNER JOIN SalesPersons sp ON sp.Name = c.Name
)
SELECT DISTINCT Name FROM EmployeeAsCustomerAndSalesPerson WHERE DATEPART(YY,SaleDate) = 2010 AND DATEPART(YY,MonthWorked) = 2010;


/* 15. Find the name and salesperson ID of the salesperson who sold the most cars for the company at dealerships 
located in Gujarat between March 1, 2010 and March 31, 2010. */
WITH 
NumberOfCarsSoldInGujarat(NumberOfCars, SalesPersonID, Name)
AS
(
	SELECT COUNT(*), s.SalesPersonID, sp.Name
	FROM Sales s
		INNER JOIN DealerShips d ON d.DealerShipId = s.DealerShipId
		INNER JOIN SalesPersons sp ON s.SalesPersonID = sp.SalesPersonId
	WHERE s.SaleDate BETWEEN '2010-03-01' AND '2010-03-31'
		AND d.State = 'Gujarat'
	GROUP BY s.SalesPersonId, sp.Name
),
TotalNumbersOfCarSold(TotalNumberOfCars, SalesPersonID, Name)
AS
(
	SELECT COUNT(*), s.SalesPersonID, sp.Name
	FROM Sales s
		INNER JOIN DealerShips d ON d.DealerShipId = s.DealerShipId
		INNER JOIN SalesPersons sp ON s.SalesPersonID = sp.SalesPersonId
	WHERE s.SaleDate BETWEEN '2010-03-01' AND '2010-03-31'
	GROUP BY s.SalesPersonId, sp.Name
)
SELECT g.SalesPersonID
	, g.Name 
FROM NumberOfCarsSoldInGujarat AS g 
WHERE NumberOfCars > (SELECT TotalNumberOfCars FROM TotalNumbersOfCarSold AS t WHERE g.SalesPersonID = t.SalesPersonID) / 2;


/* 16. Calculate the payroll for the month of March 2010.
	* The payroll consists of the name, salesperson ID, and gross pay for each salesperson who worked that month.
	* The gross pay is calculated as the base salary at each dealership employing the salesperson that month, 
	  along with the total commission for the salesperson that month.
	* The total commission for a salesperson in a month is calculated as 5% of the profit made on all cars sold 
	  by the salesperson that month.
	* The profit made on a car is the difference between the sale price and the invoice price of the car. (Assume, 
	  that cars are never sold for less than the invoice price.) */
WITH PayRoll(SalesPersonId, Name, BaseSalaryforMonth, AskPrice, InvoicePrice, SaleDate)
AS
(
	SELECT sp.SalesPersonId
		, sp.Name
		, w.BaseSalaryforMonth
		, c.AskPrice
		, c.InvoicePrice
		, s.SaleDate
	FROM SalesPersons sp    
		LEFT JOIN Sales s ON s.SalesPersonID = sp.SalesPersonId    
		LEFT JOIN Cars c ON c.VIN = s.VIN    
		RIGHT JOIN worksat w ON w.SalesPersonId = sp.SalesPersonId
)
SELECT SalesPersonId
	, Name
	, SUM(ISNULL(BaseSalaryforMonth, 0) + ISNULL(((AskPrice - InvoicePrice) * 5 / 100), 0)) [Gross Pay] FROM PayRoll 
WHERE DATENAME(MM, SaleDate) = 'March' 
	AND YEAR(SaleDate) = 2010
GROUP BY SalesPersonId
		, Name
ORDER BY SalesPersonId;