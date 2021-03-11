--1
SELECT S.SalesPersonID, S.Name AS SalesPersonName, X.Name AS DealershipName 
FROM SalesPersons S JOIN 
(SELECT D.DealershipID, D.Name,W.SalesPersonID 
FROM Dealerships D JOIN 
WorksAt W ON D.DealershipID = W.DealershipID) AS X ON X.SalesPersonID = S.SalesPersonID;

--2
SELECT Name, Address, City, State FROM Customers WHERE City = 'Ahmedabad';

--3
SELECT C.VIN, C.make, C.model, C.year, C.mileage, X.Name AS Dealership FROM Cars C JOIN 
(SELECT I.*, D.Name FROM Dealerships D JOIN Inventory I ON D.DealershipID = I.DealershipID) AS X 
ON X.VIN = C.VIN
WHERE X.Name = 'Hero Honda Car World';

--4
SELECT CC.CustomerID, CC.Name, Y.Name AS Dealership FROM Customers CC JOIN 
(SELECT X.CustomerID, D.Name FROM Dealerships D JOIN 
(SELECT S.*,C.Make FROM Sales S JOIN Cars C ON C.VIN = S.VIN) AS X 
ON D.DealershipID = X.DealershipID WHERE D.Name = 'Concept Hyundai') AS Y 
ON Y.CustomerID = CC.CustomerID;

--5
SELECT C.VIN, C.make, C.model, C.year, X.Name AS Dealership, X.Address, X.City, X.State FROM Cars C JOIN 
(SELECT D.*, I.VIN FROM Dealerships D JOIN Inventory I ON D.DealershipID = I.DealershipID) AS X 
ON X.VIN = C.VIN;

--6
SELECT * FROM SalesPersons WHERE SalesPersonID IN 
(SELECT SalesPersonID FROM ReportsTo R WHERE R.ManagingSalesPersonID = 
(SELECT S.SalesPersonID FROM SalesPersons S WHERE Name = 'Adam Smith'));

--7
SELECT * FROM SalesPersons WHERE SalesPersonID NOT IN (SELECT DISTINCT SalesPersonID FROM ReportsTo);

--8
SELECT COUNT(*) AS DealershipCount FROM Dealerships;

--9
SELECT C.VIN, C.make, C.model, C.year, C.Mileage FROM Cars C JOIN 
(SELECT D.*, I.VIN FROM Dealerships D JOIN Inventory I ON D.DealershipID = I.DealershipID) AS X 
ON X.VIN = C.VIN WHERE X.Name = 'Toyota Performance' AND C.Model = 'Camry';

--10
SELECT DISTINCT C.CustomerID, C.Name FROM Customers C JOIN 
(SELECT D.State AS DealershiState, CustomerID FROM Dealerships D JOIN 
Sales S ON D.DealershipID = S.DealershipID) AS X 
ON X.CustomerID = C.CustomerID WHERE DealershiState <> State;

--11
SELECT TOP 1 S.*, X.BaseSalaryForMonth FROM SalesPersons S JOIN
(SELECT W.SalesPersonID, W.BaseSalaryForMonth FROM WorksAt W JOIN 
Dealerships D ON D.DealershipID = W.DealershipID 
WHERE DATEDIFF(MM, '2010-01-01', GETDATE()) = W.MonthWorked AND D.Name = 'Ferrari Sales') AS X
ON X.SalesPersonID = S.SalesPersonID ORDER BY BaseSalaryForMonth DESC;

--12
SELECT C.CustomerID, C.Name FROM Customers C JOIN 
Sales S ON S.CustomerID = C.CustomerID WHERE S.SaleDate > '2020-01-01' 
GROUP BY C.CustomerID, C.Name HAVING COUNT(C.CustomerID) > 2;

--13
SELECT S.SalesPersonID,SP.Name, SUM(S.SalePrice) AS TotalSale FROM Sales S JOIN 
SalesPersons SP on S.SalesPersonID = SP.SalesPersonID GROUP BY S.SalesPersonID,SP.Name;

--14
SELECT * FROM SalesPersons WHERE Name IN (SELECT C.Name FROM Customers C JOIN 
Sales S ON S.CustomerID = C.CustomerID WHERE DATEPART(YYYY, S.SaleDate) = 2010);

--15
SELECT TOP 1 X.SalesPersonID, X.Name FROM Dealerships D JOIN 
(SELECT S.DealershipID,SP.Name,SP.SalesPersonID, MAX(S.SalePrice) AS SalePrice FROM Sales S 
JOIN SalesPersons SP on S.SalesPersonID = SP.SalesPersonID 
GROUP BY S.DealershipID,SP.Name, SP.SalesPersonID) AS X 
ON X.DealershipID = D.DealershipID 
WHERE State = 'Gujarat' ORDER BY SalePrice DESC

--16
SELECT SP.SalesPersonID, SP.Name,
SUM(ISNULL(W.BaseSalaryForMonth, 0) + ISNULL(((C.AskPrice - C.InvoicePrice) * 5 / 100), 0)) 'Gross Pay'
FROM SalesPersons SP
LEFT JOIN Sales S ON S.SalesPersonID = SP.SalesPersonID
LEFT JOIN Cars C ON C.VIN = S.VIN
RIGHT JOIN WorksAt W ON W.SalesPersonID = SP.SalesPersonID
WHERE DATENAME(MM, S.SaleDate) = 'March' AND YEAR(s.saledate) = 2010
GROUP BY SP.SalesPersonID, SP.Name
ORDER BY SP.SalesPersonID;
