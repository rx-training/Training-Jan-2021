

---- Find the names of all salespeople who have ever worked for the company at any dealership.----

SELECT s.Name FROM SalesPersons s JOIN WorksAt w ON s.SalesPersonID=w.SalesPersonID;




----List the Name, Street Address, and City of each customer who lives in Ahmedabad.----

SELECT c.Name,c.Address,c.City FROM Customers c WHERE c.City='Ahmedabad';




----List the VIN, make, model, year, and mileage of all cars in the inventory of the dealership named "Hero Honda Car World".----

SELECT c.VIN, c.Make, c.Model, c.Year, c.Mileage FROM Inventory i JOIN Cars c ON i.VIN=c.VIN 
WHERE DealershipID IN (SELECT DealershipID FROM Dealerships 
WHERE Name='Hero Honda Car World');




----List names of all customers who have ever bought cars from the dealership named "Concept Hyundai".----

SELECT c.Name FROM Customers c JOIN Dealerships d ON c.City = d.City WHERE d.Name='Concept Hyundai';




---- For each car in the inventory of any dealership, list the VIN, make, model, and year of the car, along with the name, city,----
----and state of the dealership whose inventory contains the car.----

SELECT c.VIN, c.Make, c.Model, c.Year, d.Name, d.City, d.State FROM Inventory i
JOIN Cars c ON c.VIN=i.VIN
JOIN Dealerships d ON d.DealershipID=i.DealershipID;




----Find the names of all salespeople who are managed by a salesperson named "Adam Smith".----

SELECT s.Name FROM SalesPersons s JOIN ReportsTo r ON  s.SalesPersonID=r.SalesPersonID 
WHERE r.ManagingSalesPersonID IN (SELECT SalesPersonID FROM SalesPersons WHERE Name='Adam Smith');




----Find the names of all salespeople who do not have a manager.----

SELECT s.Name FROM SalesPersons s LEFT OUTER JOIN ReportsTo r ON s.SalesPersonID = r.SalesPersonID 
WHERE s.SalesPersonID NOT IN (SELECT SalesPersonID FROM ReportsTo);




---- Find the total number of dealerships.----

SELECT COUNT(DealershipID) AS TotalNumberOfDealerships FROM Dealerships;




----List the VIN, year, and mileage of all "Toyota Camrys" in the inventory of the dealership named "Toyota Performance".----
----(Note that a "Toyota Camry" is indicated by the make being "Toyota" and the model being "Camry".)----

SELECT c.VIN, c.Year, c.Mileage FROM Cars c JOIN Inventory i ON c.VIN=i.VIN 
WHERE c.Make='Toyota' AND c.Model='Camry' AND DealershipID IN 
(SELECT DealershipID FROM Dealerships WHERE Name='Toyota Performance');




----Find the name of all customers who bought a car at a dealership located in a state other than the state in which they live.----

SELECT c.Name FROM Customers c JOIN Sales s ON c.CustomerID=s.CustomerID 
WHERE DealershipID IN (SELECT DealershipID FROM Dealerships WHERE c.State != State);




----Find the name of the salesperson that made the largest base salary working at the dealership named----
----"Ferrari Sales" during January 2010.----

SELECT s.Name FROM SalesPersons s 
JOIN WorksAt w ON s.SalesPersonID=w.SalesPersonID
JOIN Sales sa ON s.SalesPersonID=sa.SalesPersonID 
WHERE (sa.SaleDate LIKE '2010-01-%') AND w.DealershipID IN 
(SELECT DealershipID FROM Dealerships WHERE Name='Ferrari Sales') AND w.BaseSalaryForMonth = (SELECT MAX(BaseSalaryForMonth) FROM WorksAt);




----List the name, street address, city, and state of any customer who has bought more than two cars----
----from all dealerships combined since January 1, 2010.----

SELECT DISTINCT c.Name, c.Address, c.City, c.State FROM Customers c JOIN Sales s ON c.CustomerID=s.CustomerID WHERE s.SaleDate>'2010-01-01'
AND c.CustomerID IN (SELECT CustomerID FROM Sales GROUP BY CustomerID HAVING COUNT(CustomerID)>=2);




----List the name, salesperson ID, and total sales amount for each salesperson who has ever sold at----
----least one car. The total sales amount for a salesperson is the sum of the sale prices of all cars ever sold by that salesperson.----

SELECT s.Name, s.SalesPersonID, SUM(SalePrice) AS TotalSalesAmount FROM SalesPersons s 
JOIN Sales sa ON s.SalesPersonID=sa.SalesPersonID GROUP BY s.Name,s.SalesPersonID;




----Find the names of all customers who bought cars during 2010 who were also salespeople during 2010.----
----For the purpose of this query, assume that no two people have the same name.----

SELECT c.Name FROM Customers c JOIN SalesPersons s ON c.Name=s.Name WHERE s.SalesPersonID IN (SELECT SalesPersonID FROM Sales WHERE SaleDate LIKE '2010-%-%');




----Find the name and salesperson ID of the salesperson who sold the most cars for the company at----
----dealerships located in Gujarat between March 1, 2010 and March 31, 2010.----

SELECT s.* FROM SalesPersons s
JOIN Sales sa ON s.SalesPersonID=sa.SalesPersonID
JOIN Dealerships d ON d.DealershipID=sa.DealershipID
WHERE s.SalesPersonID IN (
	SELECT SalesPersonID FROM Sales GROUP BY SalesPersonID HAVING COUNT(SalesPersonID) =(
		SELECT MAX(CountID) FROM (SELECT COUNT(SalesPersonID)CountID FROM Sales GROUP BY SalesPersonID) AS tbl
	)
) AND d.state='Gujarat' AND sa.SaleDate BETWEEN '2010-03-01' AND '2010-03-31'
GROUP BY s.SalesPersonID,s.Name;




----Calculate the payroll for the month of March 2010.----
----* The payroll consists of the name, salesperson ID, and gross pay for each salesperson who worked that month.----
----* The gross pay is calculated as the base salary at each dealership employing the salesperson that month, along----
----with the total commission for the salesperson that month.----
----* The total commission for a salesperson in a month is calculated as 5% of the profit made on all cars sold----
----by the salesperson that month.----
----* The profit made on a car is the difference between the sale price and the invoice price of the car.----
----(Assume, that cars are never sold for less than the invoice price.)----

SELECT s.Name,s.SalesPersonID,SUM(w.BaseSalaryForMonth+(0.05*(sa.SalePrice-c.InvoicePrice))) AS GrossPay FROM Sales sa JOIN SalesPersons s ON sa.SalesPersonID=s.SalesPersonID 
JOIN Cars c ON sa.VIN=c.VIN
JOIN WorksAt w ON sa.SalesPersonID=w.SalesPersonID
WHERE sa.SaleDate LIKE '2010-03-%'
GROUP BY s.Name,s.SalesPersonID;