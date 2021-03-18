--Find the names of all salespeople who have ever worked for the 
--company at any dealership.

SELECT sp.Name 'Name of salesperson'
FROM WorksAt lhs JOIN Salespersonss sp 
	ON lhs.SalesPersonID = sp.SalesPersonID
	
--List the Name, Street Address, and City of each customer who lives in Ahmedabad.

SELECT Name,
		Address,
		City
FROM Customers WHERE City = 'ahmedabad'

--List the VIN, make, model, year, and 
--mileage of all cars in the inventory of the dealership named "Hero Honda Car World".

SELECT c.Vin,
	c.make,
	c.Model,
	c.Year,
	c.Mileage
FROM Cars c  JOIN Inventories i ON c.Vin = i.vin INNER JOIN DealerShips ds
ON ds.DealershipID = i.DealerShipID WHERE ds.Name  LIKE 'concept hyundai'

 --For each car in the inventory of any dealership, list the VIN, make, model, and year of 
 --the car,along with the name,city, and state of the dealership
 --  whose inventory contains the car.

 SELECT DISTINCT c.Vin,
	c.make,
	c.Model,
	c.Year,
	ds.City,
	ds.Name,
	ds.State
FROM Cars c  JOIN Inventories i ON c.Vin = i.vin INNER JOIN DealerShips ds
ON ds.DealershipID = i.DealerShipID 

--Find the names of all salespeople who are managed by a salesperson named "Adam Smith".
SELECT sp.Name
FROM Salespersonss sp join Reportsto rp 
ON sp.SalesPersonID = rp.ManagingSalesPersonID


 --Find the names of all salespeople who do not have a manager

 SELECT sp.Name
FROM Salespersonss sp join Reportsto rp 
ON sp.SalesPersonID > rp.ManagingSalesPersonID 

--Find the total number of dealerships
SELECT COUNT(DealershipID) AS 'Total number of dealership'
FROM DealerShips 

 --List the VIN, year, and mileage of all
 --"Toyota Camrys" in the inventory of the dealership named "Toyota Performance".

 SELECT c.Vin,	
		c.Year,
		c.Mileage
		
FROM Cars c  JOIN Inventories i ON c.Vin = i.vin INNER JOIN DealerShips ds
ON ds.DealershipID = i.DealerShipID  WHERE ds.Name like 'toyota performance' AND
											c.make like 'toyota' AND 
											c.Model like 'camrys'

--Find the name of all customers who bought a 
--car at a dealership located in a state other than the state in which they live.

SELECT c.Name 
	FROM Sales s JOIN DealerShips ds ON s.DealerShipID = ds.DealershipID 
			JOIN  Customers c ON c.CustomerID = s.CustomerID WHERE c.State != ds.State


--Find the name of the salesperson that made the largest base salary working at 
--the dealership named "Ferrari Sales" during January 2010.

SELECT MAX(wa.BaseSalaryForMonth) ,
		sp.name
	FROM Salespersonss sp JOIN WorksAt wa ON sp.SalesPersonID  = wa.SalesPersonID 
								JOIN DealerShips ds on ds.DealershipID = wa.DealerShipID
								WHERE ds.Name like 'Ferrari Sales' GROUP BY (sp.Name)

--List the name, street address, city, and state of any customer who has 
--bought more than two cars from all dealerships combined since January 1, 2010.



	SELECT c.Name,
		s.vin,
		COUNT(s.vin) AS counts
		--SUM(CONVERT(int,s.vin))
FROM Sales s  JOIN DealerShips ds ON s.DealerShipID = s.DealerShipID 
					left JOIN Customers c ON c.CustomerID = s.CustomerID 
					WHERE ds.DealershipID = s.DealerShipID  
					--AND s.SaleDate< Convert(date, '2010-01-01')
					GROUP BY c.Name , s.vin ,s.CustomerID
					HAVING SUM(CONVERT(int,s.vin)) >=2
					
--List the name, salesperson ID, and total sales amount for each salesperson who has ever
--sold at least one car. The total sales amount for a salesperson
--is the sum of the sale prices of all cars ever sold by that salesperson.

SELECT sp.SalesPersonID ,
		SUM(s.SalePrice)
FROM Sales s JOIN Salespersonss sp ON s.SalesPersonID = sp.SalesPersonID
	GROUP BY sp.SalesPersonID  , sp.Name

	--Find the names of all customers who bought cars during 2010
	--who were also salespeople during 2010. For the purpose of this query, 
	--assume that no two people have the same name.


	SELECT c.Name 
	FROM Customers c JOIN Salespersonss sp ON c.Name = sp.Name
		JOIN Sales s ON s.SalesPersonID  = sp.SalesPersonID 
		WHERE SaleDate < CONVERT(date,'2011-1-1') AND 
				SaleDate >	 CONVERT(date,'2009-12-31')

--	Find the name and salesperson ID of the salesperson who sold the most cars for
--the company at dealerships located in Gujarat between March 1, 2010 and March 31, 2010.

	SELECT sp.*
		FROM Salespersonss sp JOIN Sales s ON s.SalesPersonID = sp.SalesPersonID
		JOIN DealerShips ds on ds.DealershipID = s.DealerShipID
		WHERE sp.SalesPersonID in (
			
			SELECT SalesPersonID FROM Sales GROUP BY SalesPersonID
			HAVING COUNT(SalesPersonID) = 
			(
				SELECT MAX(countid)
				FROM (SELECT MAX(salespersonID) AS 'countid' 
					FROM Sales GROUP BY (SalesPersonID)) tbl
					
			 ) AND ds.State = 'Gujarat' 
			AND s.SaleDate >= '2010-03-01'
			AND s.SaleDate <= '2010-03-31');
				--Calculate the payroll for the month of March 2010.
--* The payroll consists of the name, salesperson ID, and gross pay for each salesperson who worked that month. * The gross pay is calculated
--as the base salary at each dealership employing the salesperson that month, along with the total commission for the salesperson that month.
-- * The total commission for a salesperson in a month is calculated as 5% of the profit made on all cars sold by the salesperson that month.
-- * The profit made on a car is the difference between the sale price and the invoice price of the car. (Assume, that cars are never sold for 
-- less than the invoice price.)	


SELECT  sp.SalesPersonID ,
		sp.Name,
		SUM(ISNULL(w.BaseSalaryForMonth,0)) + ISNULL(((c.Askprice - c.Invoice_Price) *5/100),0) [gross pay]
FROM Salespersonss sp LEFT JOIN Sales s On s.SalesPersonID = sp.SalesPersonID
					LEFT JOIN Cars c ON c.Vin = s.vin	
					RIGHT JOIN WorksAt w ON w.SalesPersonID =sp.SalesPersonID 
					WHERE DATENAME(m,s.SaleDate) = 'March' AND YEAR(s.SaleDate) = 2010
					GROUP BY sp.SalesPersonID ,sp.Name,c.Askprice,c.Invoice_Price
					