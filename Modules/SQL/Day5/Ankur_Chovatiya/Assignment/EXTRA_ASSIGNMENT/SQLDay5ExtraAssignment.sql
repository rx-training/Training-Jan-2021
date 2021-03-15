-- Supported file Assignment

-- 1

SELECT s.Name FROM SalesPersons s JOIN WorksAt w ON s.SalesPersonID=w.SalesPersonID;




-- 2

SELECT c.Name,c.Address,c.City FROM Customers c WHERE c.City='Ahmedabad';




-- 3

SELECT c.VIN, c.Make, c.Model, c.Year, c.Mileage FROM Inventory i JOIN Cars c ON i.VIN=c.VIN 
WHERE DealershipID IN (SELECT DealershipID FROM Dealerships 
WHERE Name='Hero Honda Car World');




-- 4

SELECT c.Name FROM Customers c JOIN Dealerships d ON c.City = d.City WHERE d.Name='Concept Hyundai';




-- 5

SELECT c.VIN, c.Make, c.Model, c.Year, d.Name, d.City, d.State FROM Inventory i
JOIN Cars c ON c.VIN=i.VIN
JOIN Dealerships d ON d.DealershipID=i.DealershipID;




-- 6

SELECT s.Name FROM SalesPersons s JOIN ReportsTo r ON  s.SalesPersonID=r.SalesPersonID 
WHERE r.ManagingSalesPersonID IN (SELECT SalesPersonID FROM SalesPersons WHERE Name='Adam Smith');




-- 7

SELECT s.Name FROM SalesPersons s LEFT OUTER JOIN ReportsTo r ON s.SalesPersonID = r.SalesPersonID 
WHERE s.SalesPersonID NOT IN (SELECT SalesPersonID FROM ReportsTo);




-- 8

SELECT COUNT(DealershipID) AS TotalNumberOfDealerships FROM Dealerships;




-- 9

SELECT c.VIN, c.Year, c.Mileage FROM Cars c JOIN Inventory i ON c.VIN=i.VIN 
WHERE c.Make='Toyota' AND c.Model='Camry' AND DealershipID IN 
(SELECT DealershipID FROM Dealerships WHERE Name='Toyota Performance');




-- 10

SELECT c.Name FROM Customers c JOIN Sales s ON c.CustomerID=s.CustomerID 
WHERE DealershipID IN (SELECT DealershipID FROM Dealerships WHERE c.State != State);




-- 11

SELECT s.Name FROM SalesPersons s 
JOIN WorksAt w ON s.SalesPersonID=w.SalesPersonID
JOIN Sales sa ON s.SalesPersonID=sa.SalesPersonID 
WHERE (sa.SaleDate LIKE '2010-01-%') AND w.DealershipID IN 
(SELECT DealershipID FROM Dealerships WHERE Name='Ferrari Sales') AND w.BaseSalaryForMonth = (SELECT MAX(BaseSalaryForMonth) FROM WorksAt);




-- 12

SELECT DISTINCT c.Name, c.Address, c.City, c.State FROM Customers c JOIN Sales s ON c.CustomerID=s.CustomerID WHERE s.SaleDate>'2010-01-01'
AND c.CustomerID IN (SELECT CustomerID FROM Sales GROUP BY CustomerID HAVING COUNT(CustomerID)>=2);




-- 13

SELECT s.Name, s.SalesPersonID, SUM(SalePrice) AS TotalSalesAmount FROM SalesPersons s 
JOIN Sales sa ON s.SalesPersonID=sa.SalesPersonID GROUP BY s.Name,s.SalesPersonID;




-- 14

SELECT c.Name FROM Customers c JOIN SalesPersons s ON c.Name=s.Name WHERE s.SalesPersonID IN (SELECT SalesPersonID FROM Sales WHERE SaleDate LIKE '2010-%-%');




-- 15

SELECT NAME,SalePersonID FROM
(
SELECT sp.Name 'NAME', RANK() OVER (ORDER BY COUNT(s.Salespersonid)DESC) 'rank',s.Salespersonid 'SalePersonID'
FROM Sales s
INNER JOIN SalesPersons sp
ON s.Salespersonid = sp.Salespersonid
INNER JOIN Dealerships d
ON s.Dealershipid = d.DealershipID
WHERE d.[State]='Gujarat' AND s.Saledate BETWEEN '2010-03-01' AND '2010-03-31'
GROUP BY s.Salespersonid, sp.[Name]
) newtab
WHERE rank=1



-- 16

SELECT s.Name,s.SalesPersonID,SUM(w.BaseSalaryForMonth+(0.05*(sa.SalePrice-c.InvoicePrice))) AS GrossPay FROM Sales sa JOIN SalesPersons s ON sa.SalesPersonID=s.SalesPersonID 
JOIN Cars c ON sa.VIN=c.VIN
JOIN WorksAt w ON sa.SalesPersonID=w.SalesPersonID
WHERE sa.SaleDate LIKE '2010-03-%'
GROUP BY s.Name,s.SalesPersonID;