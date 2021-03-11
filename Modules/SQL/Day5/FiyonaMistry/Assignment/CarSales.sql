USE CarSales


--1. Find the names of all salespeople who have ever worked for the company at any dealership.
SELECT sp.SalesPersonID, sp.Name AS 'Sales Person Name', temp.Name AS 'Dealers Name'
FROM SalesPersons AS sp 
JOIN
	(SELECT d.DealershipID, d.Name, w.SalesPersonID
	FROM Dealerships AS d
	JOIN WorksAt AS w
	ON d.DealershipID = w.DealershipID) AS temp
ON temp.SalesPersonID = sp.SalesPersonID


--2. List the Name, Street Address, and City of each customer who lives in Ahmedabad.
SELECT Name, Address, City
FROM Customers
WHERE City = 'Ahmedabad'


--3. List the VIN, make, model, year, and mileage of all cars in the inventory of the dealership named "Hero Honda Car World".
SELECT c.VIN, c.Make, c.Model, c.Year, c.Mileage, temp.Name AS 'Dealership'
FROM Cars AS c
JOIN 
	(SELECT i.*, d.Name
	FROM Dealerships AS d
	JOIN Inventory AS i
	ON d.DealershipID = i.DealershipID) AS temp
ON temp.VIN = c.VIN
WHERE temp.Name = 'Hero Honda Car World'


--4. List names of all customers who have ever bought cars from the dealership named "Concept Hyundai".
SELECT c.CustomerID, c.Name, temp1.Name AS 'Dealership'
FROM Customers AS c
JOIN 
	(SELECT temp2.CustomerID, d.Name
	FROM Dealerships AS d
	JOIN 
		(SELECT s.*, c.Make
		FROM Sales AS s
		JOIN Cars AS c
		ON c.VIN = s.VIN) AS temp2
	ON d.DealershipID = temp2.DealershipID
	WHERE d.Name = 'Concept Hyundai') AS temp1
ON temp1.CustomerID = c.CustomerID


--5. For each car in the inventory of any dealership, list the VIN, make, model, and year of the car, along with the name, city, and state of the dealership whose inventory contains the car.
SELECT c.VIN, c.Make, c.Model, c.Year, temp.Name AS 'Dealership', temp.Address, temp.City, temp.State
FROM Cars AS c
JOIN	
	(SELECT d.*, i.VIN
	FROM Dealerships AS d
	JOIN Inventory AS i
	ON d.DealershipID = i.DealershipID) AS temp
ON temp.VIN = c.VIN


--6. Find the names of all salespeople who are managed by a salesperson named "Adam Smith".
SELECT *
FROM SalesPersons 
WHERE SalesPersonID IN
	(SELECT SalesPersonID
	FROM ReportsTo AS r
	WHERE r.ManagingSalesPersonID = 
		(SELECT sp.SalesPersonID
		FROM SalesPersons AS sp
		WHERE Name = 'Adam Smith'))


--7. Find the names of all salespeople who do not have a manager.
SELECT *
FROM SalesPersons
WHERE SalesPersonID NOT IN 
	(SELECT DISTINCT SalesPersonID
	FROM ReportsTo)


--8. Find the total number of dealerships.
SELECT COUNT(*) AS 'DealershipCount'
FROM Dealerships


--9. List the VIN, year, and mileage of all "Toyota Camrys" in the inventory of the dealership named "Toyota Performance". (Note that a "Toyota Camry" is indicated by the make being "Toyota" and the model being "Camry".)
SELECT c.VIN, c.Make, c.Model, c.Year, c.Mileage
FROM Cars AS c
JOIN
	(SELECT d.*, i.VIN
	FROM Dealerships AS d
	JOIN Inventory AS i
	ON d.DealershipID = i.DealershipID) AS temp
ON temp.Vin = c.VIN 
WHERE temp.Name = 'Toyota Performance' AND c.Model = 'Camry'


--10. Find the name of all customers who bought a car at a dealership located in a state other than the state in which they live.
SELECT DISTINCT c.CustomerID, c.Name
FROM Customers AS c
JOIN 
	(SELECT d.State, CustomerID
	FROM Dealerships AS d
	JOIN Sales AS s
	ON d.DealershipID = s.DealershipID) AS temp
ON temp.CustomerID = c.CustomerID
WHERE temp.State != c.State


--11. Find the name of the salesperson that made the largest base salary working at the dealership named "Ferrari Sales" during January 2010.
SELECT TOP 1 sp.*, temp.BaseSalaryForMonth 
FROM SalesPersons AS sp 
JOIN
	(SELECT w.SalesPersonID, w.BaseSalaryForMonth 
	FROM WorksAt AS w 
	JOIN Dealerships d 
	ON d.DealershipID = w.DealershipID 
	WHERE DATEDIFF(MONTH, '2010-01-01', GETDATE()) = w.MonthWorked AND d.Name = 'Ferrari Sales') AS temp
ON temp.SalesPersonID = sp.SalesPersonID ORDER BY BaseSalaryForMonth DESC


--12. List the name, street address, city, and state of any customer who has bought more than two cars from all dealerships combined since January 1, 2010.
SELECT c.Name, c.Address, c.City, c.State
FROM 
	(SELECT DENSE_RANK() OVER(PARTITION  BY CustomerID ORDER BY SaleID ASC) AS 'dRank', *
	FROM Sales) AS t
JOIN Customers c
ON t.CustomerID = c.CustomerID
WHERE dRank >= 2 AND SaleDate >= '2010-01-01'


--13. List the name, salesperson ID, and total sales amount for each salesperson who has ever sold at least one car. The total sales amount for a salesperson is the sum of the sale prices of all cars ever sold by that salesperson.
SELECT sp.SalesPersonID, sp.Name, SUM(s.SalePrice)
FROM Sales AS s
JOIN SalesPersons AS sp
ON s.SalesPersonID = sp.SalesPersonID
GROUP BY sp.SalesPersonID, sp.Name


--14. Find the names of all customers who bought cars during 2010 who were also salespeople during 2010. For the purpose of this query, assume that no two people have the same name.
SELECT * 
FROM SalesPersons 
WHERE Name IN 
	(SELECT c.Name 
	FROM Customers AS c 
	JOIN Sales AS s 
	ON s.CustomerID = c.CustomerID 
	WHERE DATEPART(YYYY, s.SaleDate) = 2010)


--15. Find the name and salesperson ID of the salesperson who sold the most cars for the company at dealerships located in Gujarat between March 1, 2010 and March 31, 2010.
SELECT TOP 1 temp.SalesPersonID, temp.Name 
FROM Dealerships AS d 
JOIN 
	(SELECT s.DealershipID, sp.Name, sp.SalesPersonID, MAX(s.SalePrice) AS 'SalePrice' 
	FROM Sales AS S 
	JOIN SalesPersons AS sp 
	ON s.SalesPersonID = sp.SalesPersonID 
	GROUP BY s.DealershipID, sp.Name, sp.SalesPersonID) AS temp 
ON temp.DealershipID = d.DealershipID 
WHERE State = 'Gujarat' 
ORDER BY SalePrice DESC


/*16. Calculate the payroll for the month of March 2010.
	* The payroll consists of the name, salesperson ID, and gross pay for each salesperson who worked that month.
    * The gross pay is calculated as the base salary at each dealership employing the salesperson that month, along with the total commission for the salesperson that month.
    * The total commission for a salesperson in a month is calculated as 5% of the profit made on all cars sold by the salesperson that month.
    * The profit made on a car is the difference between the sale price and the invoice price of the car. (Assume, that cars are never sold for less than the invoice price.)
*/
SELECT sp.SalesPersonID, sp.Name, SUM(ISNULL(w.BaseSalaryForMonth, 0) + ISNULL(((c.AskPrice - c.InvoicePrice) * 5 / 100), 0)) AS 'Gross Pay'
FROM SalesPersons AS sp
LEFT JOIN Sales AS s 
ON s.SalesPersonID = sp.SalesPersonID
LEFT JOIN Cars AS c 
ON c.VIN = s.VIN
RIGHT JOIN WorksAt AS w 
ON w.SalesPersonID = sp.SalesPersonID
WHERE DATENAME(MM, s.SaleDate) = 'March' AND YEAR(s.saledate) = 2010
GROUP BY sp.SalesPersonID, sp.Name
ORDER BY sp.SalesPersonID