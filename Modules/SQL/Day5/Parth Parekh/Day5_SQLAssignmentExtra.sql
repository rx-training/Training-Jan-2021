/* */
USE Automobiles
CREATE TABLE Car (
	carid int UNIQUE NOT NULL,
	vin int PRIMARY KEY,
	make varchar(25) NOT NULL,
	model varchar (20) NOT NULL,
	year int NOT NULL,
	mileage int NOT NULL,
	askprice int NOT NULL,
	invoiceprice int NOT NULL
)

CREATE TABLE DealerShip (	
	dealershipid int PRIMARY KEY,
	name varchar(25) NOT NULL,
	address varchar(25) NOT NULL,
	city varchar(25) NOT NULL,
	state varchar(25) NOT NULL,
)
  
CREATE TABLE SalesPerson (	
	salespersonid int PRIMARY KEY,
	name varchar(25) NOT NULL,
)

CREATE TABLE Customers (	
	Customerid int PRIMARY KEY,
	name varchar(25) NOT NULL,
	address varchar(25) NOT NULL,
	city varchar(25) NOT NULL,
	state varchar(25) NOT NULL,
)

CREATE TABLE ReportSto (	
	reportstoid int PRIMARY KEY,
	salespersonid int NOT NULL FOREIGN KEY REFERENCES SalesPerson,
	managingsalespersonid int NOT NULL UNIQUE,
)

 
CREATE TABLE Worksat 
(
	worksatid int PRIMARY KEY,
	salespersonid int FOREIGN KEY REFERENCES SalesPerson ,
	dealershipid int FOREIGN KEY REFERENCES  DealerShip,
	monthworked int  ,
	basesalaryformonth int NOT NULL
)

CREATE TABLE Inventory 
(
	inventoryid int PRIMARY KEY,
	vin int FOREIGN KEY REFERENCES Car ,
	dealershipid int FOREIGN KEY REFERENCES  DealerShip,
)


CREATE TABLE Sale
(
	saleid int PRIMARY KEY,
	vin int FOREIGN KEY REFERENCES Car ,
	Customerid int FOREIGN KEY REFERENCES Customers,
	salespersonid int FOREIGN KEY REFERENCES SalesPerson ,
	dealershipid int FOREIGN KEY REFERENCES  DealerShip,
	saleprice int NOT NULL ,
	saledate date NOT NULL
)

/* 1. Find the names of all salespeople who have ever worked for the company at any dealership. */
SELECT * FROM DealerShip 
SELECT  d.name  FROM SalesPerson d JOIN Worksat w ON d.salespersonid = w.salespersonid  

/*2. List the Name, Street Address, and City of each customer who lives in Ahmedabad.*/

SELECT name , address ,city FROM Customers WHERE city = 'Ahmedabad'

/*3. List the VIN, make, model, year, and mileage of all cars in the inventory of the dealership named "Hero Honda Car World".   */
SELECT c.vin , c.make ,c.model , c.year , c.mileage FROM Car c 
       JOIN  Inventory i ON c.vin = i.vin 
	   JOIN DealerShip d ON i.dealershipid = d.dealershipid WHERE d.name = 'Hero Honda Car World'

-- Using SubQuery
SELECT c.vin , c.make ,c.model , c.year , c.mileage FROM Car c 
       JOIN  Inventory i ON c.vin = i.vin
	   WHERE dealershipid = (SELECT dealershipid FROM DealerShip WHERE [name] = 'Hero Honda Car World')

/* 4. List names of all customers who have ever bought cars from the dealership named "Yuvraj". */
SELECT c.name FROM Customers c 
       JOIN Sale s ON  c.Customerid = s.Customerid 
	   JOIN DealerShip d ON s.dealershipid = d.dealershipid WHERE d.name = 'Yuvraj'

-- Using SubQuery
SELECT c.name FROM Customers c JOIN Sale s ON  c.Customerid = s.Customerid WHERE dealershipid = (SELECT dealershipid FROM DealerShip WHERE [name] = 'Yuvraj')

/* 5. For each car in the inventory of any dealership, list the VIN, make, model, and year 
of the car, along with the name, city, and state of the dealership whose inventory contains the car. */

SELECT  c.vin , c.make ,c.model , c.year , d.name , d.city,d.state FROM Car c 
        JOIN  Inventory i ON c.vin = i.vin 
		JOIN DealerShip d ON i.dealershipid = d.dealershipid

/* 6. Find the names of all salespeople who are managed by a salesperson named "Adam Smith".*/

SELECT  s.name FROM SalesPerson s 
        JOIN ReportSto r ON s.salespersonid = r.salespersonid 
		JOIN SalesPerson a ON r.managingsalespersonid = a.salespersonid
        WHERE a.name = 'Adam Smith'

/* 7. Find the names of all salespeople who do not have a manager. */

SELECT  s.name FROM SalesPerson s 
        JOIN ReportSto r ON s.salespersonid = r.salespersonid 
		JOIN SalesPerson a ON r.managingsalespersonid = a.salespersonid
        WHERE a.name IS NULL


/* 8. Find the total number of dealerships. */

SELECT COUNT(*) AS 'Total DealerShips' FROM DealerShip

/* 9. List the VIN, year, and mileage of all "Toyota Camrys" in the inventory of the dealership named "Toyota Performance". 
(Note that a "Toyota Camry" is indicated by the make being "Toyota" and the model being "Camry".) */        

SELECT  c.vin , c.mileage , c.year  FROM Car c 
        JOIN Inventory i ON c.vin = i.vin 
		JOIN DealerShip d ON i.dealershipid = d.dealershipid 
		WHERE d.name = 'Toyota Performance' AND c.make = 'Toyota' AND c.model='Camry'

/* 10. Find the name of all customers who bought a car at a dealership located in a state other than the state in which they live. */

SELECT c.name FROM Customers c 
       JOIN Sale s ON c.Customerid = s.Customerid
	   JOIN DealerShip d ON d.dealershipid = s.dealershipid
	   WHERE d.state != d.state

/* 11. Find the name of the salesperson that made the largest base salary working at the dealership named "Ferrari Sales" during January 2010.*/

SELECT name FROM(
	SELECT DENSE_RANK() OVER(ORDER BY w.basesalaryformonth DESC)[d_rank],
	s.salespersonid,s.name,w.worksatid,w.monthworked,w.basesalaryformonth,
	w.dealershipid,d.name  [d.Name] ,d.address,d.city ,d.state
	FROM SalesPerson s
	JOIN Worksat w
	ON s.salespersonid = w.salespersonid
	JOIN DealerShip d
	ON d.dealershipid = w.dealershipid
	WHERE d.[name]= 'Ferrari Sales')[tb1]
	JOIN Sale sa
	ON sa.salespersonid=tb1.salespersonid
	WHERE d_rank = 1 AND YEAR(sa.saledate) = 2010 AND
DATENAME(mm,sa.saledate) = 'January';

/* 12.List the name, street address, city, and state of any customer who has bought more than two cars from all dealerships combined since January 1, 2010. */

	SELECT c.name ,c.address , c.city , c.city , c.state FROM
	(
		SELECT DENSE_RANK() OVER (PARTITION BY Customerid ORDER BY saleid ASC ) [d_rank] , * FROM Sale
	) tb1 JOIN  Customers c ON tb1.Customerid =  c.Customerid WHERE d_rank >= 2 AND saledate >= '2010-01-01'


/* 13.  List the name, salesperson ID, and total sales amount for each salesperson who has ever sold at least one car. 
The total sales amount for a salesperson is the sum of the sale prices of all cars ever sold by that salesperson. */

SELECT sp.salespersonid , sp.name ,SUM(s.saleprice) FROM Sale s 
       JOIN SalesPerson sp  ON s.salespersonid =sp.salespersonid GROUP BY sp.salespersonid , sp.name

/* 14.  Find the names of all customers who bought cars during 2010 who were also salespeople during 2010.
For the purpose of this query, assume that no two people have the same name. */

SELECT c.name [Customer_Name] FROM Customers c 
	   JOIN SalesPerson sp ON c.name = sp.name
	   JOIN Sale s ON s.salespersonid = sp.salespersonid
	   WHERE YEAR(s.saledate) = 2010

/* 15. Find the name and salesperson ID of the salesperson who sold the most cars for the company 
at dealerships located in Gujarat between March 1, 2010 and March 31, 2010.  */

SELECT sp.*
	FROM Salesperson sp
	JOIN Sale s ON s.salespersonid = sp.salespersonid
	JOIN DealerShip d ON d.dealershipid = s.dealershipid
	WHERE sp.salespersonid IN (
		SELECT salespersonid
		FROM Sale
		GROUP BY salespersonid
		HAVING COUNT(salespersonid)=
		(
			SELECT MAX(CountId)
			FROM(
				SELECT COUNT(salespersonid) CountId
				FROM Sale
				GROUP BY salespersonid
			)Tb1
		)
	)AND d.[state]= 'Gujarat' AND s.saledate >= '2010-03-01'
	AND s.saledate <= '2010-03-31'

/*16. 16. Calculate the payroll for the month of March 2010.
	* The payroll consists of the name, salesperson ID, and gross pay for each salesperson who worked that month.
    * The gross pay is calculated as the base salary at each dealership employing the salesperson that month, along with the total commission for the salesperson that month.
    * The total commission for a salesperson in a month is calculated as 5% of the profit made on all cars sold by the salesperson that month.
    * The profit made on a car is the difference between the sale price and the invoice price of the car. (Assume, that cars are never sold for less than the invoice price.) 
*/
  SELECT sp.salespersonid, sp.name,
        SUM(ISNULL(w.basesalaryformonth, 0) + ISNULL(((c.askprice - c.invoiceprice) * 5 / 100), 0)) [Gross Pay]
    FROM salesperson sp
    LEFT JOIN sale s ON s.salespersonid = sp.salespersonid
    LEFT JOIN car c ON c.vin = s.vin
    RIGHT JOIN worksat w ON w.salespersonid = sp.salespersonid
    WHERE DATENAME(MM, s.saledate) = 'March' AND YEAR(s.saledate) = 2010
    GROUP BY sp.salespersonid, sp.name
    ORDER BY sp.salespersonid

