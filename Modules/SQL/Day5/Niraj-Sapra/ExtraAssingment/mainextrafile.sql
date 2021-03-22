CREATE DATABASE DAY5SQLMore;
USE DAY5SQLMore;

CREATE TABLE Cars (
CarID INT NOT NULL PRIMARY KEY ,
VIN INT NOT NULL CONSTRAINT uqCars UNIQUE,
Make VARCHAR(50) NOT NULL,
Model VARCHAR(5) NOT NULL,
Year VARCHAR(10) NOT NULL CONSTRAINT chkYearCar CHECK(Year LIKE '[0-9][0-9][0-9][0-9]'),
Mileage INT NOT NULL,
AskPrice MONEY NOT NULL,
InvoicePrice MONEY NOT NULL);

Truncate table Cars; 
INSERT INTO Cars(CarID,VIN ,Make ,Model ,Year ,Mileage ,AskPrice ,InvoicePrice ) VALUES 
('1','11111','Toyota','Prius','2014','15','732000','418000'),
('2','11112','Honda ','Honda City','2021','17','924000','778000'),
('3','11113','TATA','Neno','2016','15','224000','194000'),
('4','11114','Hyundai','Varna','2018','15','910000','789000'),
('5','11115','Renault India','Daster','2020','15','525000','375000');


CREATE TABLE DealerShips (
DealerShipID INT NOT NULL PRIMARY KEY,
Name VARCHAR(50) NOT NULL,
Address VARCHAR(255) NOT NULL,
City VARCHAR(50) NOT NULL,
State VARCHAR(50) NOT NULL
);


INSERT INTO DealerShips(DealerShipID,Name, Address,City ,State) VALUES 
('1','Honda Sales','Near By Vithalvadi petrol pump','Bhavnagar','Gujrat'),
('2','Yamaha World','On Road in Vadhavadi','Bhavnagar','Gujrat'),
('3','Concept Hyundai ','Near By Rangoli park','Bhavnagar','Gujrat'),
('4','Maruti Sales','Near By Himaliya Mole','Bhavnagar','Gujrat'),
('5','Hero Honda Car World','On Road in Kaliyabid','Bhavnagar','Gujrat'),
('6','Royal Enfield','On Road in Kaliyabid','Bhavnagar','Gujrat');



CREATE TABLE SalesPersons(
SalesPersonID INT NOT NULL PRIMARY KEY ,
Name VARCHAR(50) NOT NULL
);
Truncate Table SalesPersons;

INSERT INTO SalesPersons(SalesPersonID,Name) VALUES
('1','RAJ Manotra'),
('2','Priya Maheta'),
('3','Ajay Radhuvansi'),
('4','Charmi tanna'),
('5','Karina kappur'),
('6','Pratap Maharana'),
('7','Asoka Morya');



CREATE TABLE Customers(
CustomerId INT NOT NULL PRIMARY KEY ,
Name VARCHAR(100) NOT NULL,
Address VARCHAR(255) NOT NULL,
City VARCHAR(50) NOT NULL,
State VARCHAR(50) NOT NULL
);

INSERT INTO Customers(CustomerId,Name,Address,City,State) VALUES 
('1','Nill Sapra','Near By Vithalvadi petrol pump','Bhavnagar','Gujrat'),
('2','Namra Patel','On Road in Vadhavadi','Bhavnagar','Gujrat'),
('3','Vatsal Parmal ','Near By Rangoli park','Bhavnagar','Gujrat'),
('4','Nihar Shodpara','Near By Himaliya Mole','Bhavnagar','Gujrat'),
('5','Susant Rajput','On Road in Kaliyabid','Bhavnagar','Gujrat');

CREATE TABLE ReportsTo(
ReportsToID INT NOT NULL PRIMARY KEY ,
SalesPersonID INT NOT NULL CONSTRAINT fkReport FOREIGN KEY REFERENCES SalesPersons(SalesPersonId),
ManagingSalesPersonID INT NOT NULL
);

INSERT INTO ReportsTo(ReportsToID,SalesPersonID,ManagingSalesPersonID) VALUES 
('1','1','101'),
('2','2','102'),
('3','3','103'),
('4','4','104'),
('5','5','105');

CREATE TABLE WorksAt(
WorksAtId INT NOT NULL PRIMARY KEY,
ReportsToID INT NOT NULL CONSTRAINT fkWorkReport FOREIGN KEY REFERENCES ReportsTo(ReportsToID),
SalesPersonID INT NOT NULL CONSTRAINT fkWorkSales FOREIGN KEY REFERENCES SalesPersons(SalesPersonId),
DealerShipID INT NOT NULL CONSTRAINT fkWorkDealerShip FOREIGN KEY REFERENCES DealerShips(DealerShipID),
MonthWorked INT NOT NULL,
BaseSalaryForMonth MONEY NOT NULL
);
INSERT INTO WorksAt(WorksAtId,ReportsToID,SalesPersonID,DealerShipID,MonthWorked,BaseSalaryForMonth) VALUES 
('100','1','1','1','168','16800'),
('101','2','2','2','165','16500'),
('103','3','3','3','160','16000'),
('104','4','4','4','120','12000'),
('105','5','5','5','140','14000');

CREATE TABLE Sales(
SaleID INT NOT NULL PRIMARY KEY,
VIN INT NOT NULL CONSTRAINT fkSalesVIN FOREIGN KEY REFERENCES Cars(VIN),
CustomerID INT NOT NULL CONSTRAINT fkSalesCustomer FOREIGN KEY REFERENCES DealerShips(DealerShipID),
SalesPersonID INT NOT NULL,
DealerShipID INT NOT NULL CONSTRAINT fkSalesDealerShip FOREIGN KEY REFERENCES DealerShips(DealerShipID),
SalePrice MONEY NOT NULL,
SalesDate datetime  NULL
);

INSERT INTO Sales(SaleID,VIN,CustomerID,SalesPersonID,DealerShipID,SalePrice,SalesDate) VALUES 
('1001','11111','1','12341','1','732000',''),
('1002','11112','2','12342','2','924000',''),
('1003','11113','3','12343','3','224000',''),
('1004','11114','4','12343','4','910000',''),
('1005','11115','5','12345','5','525000','');

/*
('1001','11111','1','12341','1','732000','13-06-2015'),
('1001','11112','2','12342','2','924000','18-09-2020'),
('1003','11113','3','12343','3','224000','10-08-2014'),
('1004','11114','4','12343','4','910000','14-07-2017'),
('1005','11115','5','12345','5','525000','25-01-2020');*/

CREATE TABLE Inventories (
InventoryID INT NOT NULL PRIMARY KEY,
VIN INT NOT NULL CONSTRAINT fkInventoryVIN FOREIGN KEY REFERENCES Cars(VIN),
DealerShipID INT NOT NULL CONSTRAINT fkInventoryDealerShip FOREIGN KEY REFERENCES DealerShips(DealerShipID),
);

INSERT INTO Inventories(InventoryID,VIN,DealerShipID) VALUES 
('200','11111','1'),
('201','11112','2'),
('203','11113','3'),
('204','11114','4'),
('205','11115','5');

/*prac 1:-Find the names of all salespeople who have ever worked for the company at any dealership.*/

SELECT s.SalesPersonID,s.Name,d.DealerShipID,d.Name FROM SalesPersons s INNER JOIN
DealerShips d ON s.SalesPersonID = d.DealerShipID;

/*prac 2:-List the Name, Street Address, and City of each customer who lives in Ahmedabad.*/
Update Customers SET  City='Ahmedabad' WHERE CustomerId = '3';

SELECT c.CustomerId,c.Name,c.Address,c.City,c.State FROM Customers c WHERE c.City='Ahmedabad';


/*prac 3:-List the VIN, make, model, year, and mileage of all cars in the inventory of the dealership named "Hero Honda Car World".*/

SELECT c.VIN, c.Make, c.Model, c.Year, c.Mileage, d.Name FROM
		Cars c JOIN Inventories i ON c.VIN = i.VIN JOIN DealerShips d ON i.DealerShipID = d.DealerShipID 
		where d.Name = 'Hero Honda Car World'
		
/*prac 4:-List names of all customers who have ever bought cars from the dealership named "Concept Hyundai".*/
/*SELECT c.Name,d.Name FROM
		Sales s JOIN DealerShips d ON s.DealerShipID = d.DealerShipID JOIN Customers c ON s.CustomerID=c.CustomerId 
		WHERE d.Name = 'Concept Hyundai';*/

SELECT c.Name FROM Customers c join DealerShips d on c.CustomerId=d.DealerShipID  WHERE d.Name = 'Concept Hyundai';

/*prac 5:-For each car in the inventory of any dealership, list the VIN, make, model, and year of the car,
along with the name, city, and state of the dealership whose inventory contains the car.
*/

SELECT c.VIN, c.Make, c.Model, c.Year, d.Name, d.City, d.State FROM
	Cars c JOIN Inventories i ON c.VIN = i.VIN JOIN DealerShips d ON i.DealerShipID = d.DealerShipID


/*prac 6:-Find the names of all salespeople who are managed by a salesperson named "Adam Smith".*/

SELECT spsec.Name 'EmployeeName', sp.Name 'ManagerName'  
	FROM ReportsTo r JOIN SalesPersons sp on r.ManagingSalesPersonID = sp.SalesPersonID AND sp.Name = 'Adam Smith'
	JOIN SalesPersons spsec ON r.SalesPersonID = spsec.SalesPersonID;
	/*check*/
/*prac 7:- Find the names of all salespeople who do not have a manager.*/

	SELECT sp.Name FROM ReportsTo r JOIN SalesPersons sp ON r.SalesPersonID = sp.SalesPersonID
	AND r.ManagingSalesPersonID IS NULL; 

	/*check*/
/*prac 8:-Find the total number of dealerships.*/

SELECT COUNT(DealerShipID) AS 'total number of dealerships' FROM DealerShips;


/*prac 9:-List the VIN, year, and mileage of all "Toyota Camrys" in the inventory of the dealership named 
"Toyota Performance". (Note that a "Toyota Camry" is indicated by the make being "Toyota" and the model being "Camry".)*/

select c.VIN , c.Year, c.Mileage FROM 
	Inventories i JOIN Cars c ON i.VIN = c.VIN AND c.Make = 'Toyota' AND c.Model = 'Camry' 
	JOIN DealerShips d ON i.DealerShipID = d.DealerShipID AND d.Name = 'Toyota Performance'

	select c.VIN , c.Year, c.Mileage FROM 
	Inventories i JOIN Cars c ON i.VIN = c.VIN 
	JOIN DealerShips d ON i.DealerShipID = d.DealerShipID 
	WHERE c.Make = 'Toyota' AND c.Model = 'Camry' AND d.Name = 'Toyota Performance'
	/*check*/
/*prac 10:- Find the name of all customers who bought a car at a dealership located in a state other than the state in which they live.
*/
SELECT c.Name FROM 
	Sales s JOIN Customers c ON s.CustomerID = c.CustomerId JOIN DealerShips d ON s.DealerShipID = d.DealerShipID  
	WHERE c.State != d.State
	/*check*/

-- 11. Find the name of the salesperson that made the largest base salary working at the dealership 
--named "Ferrari Sales" during January 2010.

SELECT  Name
FROM(
SELECT DENSE_RANK() OVER(ORDER BY w.BaseSalaryForMonth DESC)[d_rank],
s.SalesPersonID,s.Name,w.WorksAtId,w.MonthWorked,w.BaseSalaryForMonth,
w.DealershipId,d.Name,d.Address,d.City,d.State
FROM SalesPersons s
JOIN WorksAt w
ON s.SalesPersonID = w.SalesPersonID
JOIN DealerShips d
ON d.DealerShipID = w.DealerShipID
WHERE d.Name= 'Ferrari Sales') [tb1]
JOIN Sales sa
ON sa.SalesPersonID = tb1.SalesPersonID
WHERE d_rank = 1 AND YEAR(sa.SalesDate) = 2010 AND
DATENAME(mm,sa.SalesDate) = 'January';

-- 12. List the name, street address, city, and state of any customer who has bought more than  
--two cars from all dealerships combined since January 1, 2010.

SELECT c.Name,c.Address,c.City,c.State
FROM (
	SELECT DENSE_RANK() OVER (PARTITION BY CustomerId ORDER BY SaleID ASC)[d_rank],*
	FROM Sales  
)[tb]
JOIN Customers c 
ON tb.CustomerId = c.CustomerId
WHERE d_rank >= 2 AND SalesDate >= '2010-01-01';

-- 13. List the name, salesperson ID, and total sales amount for each salesperson who has ever 
--sold at least one car. The total sales amount for a salesperson is the sum of the 
--sale prices of all cars ever sold by that salesperson.

SELECT sp.SalesPersonID,sp.Name,SUM(s.SalePrice) 'Total Sales' FROM Sales s
JOIN SalesPersons sp 
ON s.SalesPersonID = sp.SalesPersonID
GROUP BY sp.SalesPersonID,sp.Name;

-- 14. Find the names of all customers who bought cars during 2010 who were also salespeople during 2010.
--For the purpose of this query, assume that no two people have the same name.

SELECT c.Name 'Customer Name'
FROM Customers c
JOIN SalesPersons sp 
ON c.Name = sp.Name
JOIN Sales s 
ON s.SalesPersonID = sp.SalesPersonID
WHERE YEAR(s.SalesDate) = 2010;

-- 15. Find the name and salesperson ID of the salesperson who sold the most cars for the 
--company at dealerships located in Gujarat between March 1, 2010 and March 31, 2010.

SELECT sp.*
FROM SalesPersons sp
JOIN Sales s ON s.SalesPersonID = sp.SalesPersonID
JOIN DealerShips d ON d.DealerShipID = s.DealerShipID
WHERE sp.SalesPersonID IN (
	SELECT SalesPersonID
	FROM Sales
	GROUP BY SalesPersonID
	HAVING COUNT(SalesPersonID)=
	(
		SELECT MAX(CountId)
		FROM(
			SELECT COUNT(SalesPersonID) CountId
			FROM Sales
			GROUP BY SalesPersonID
		)Tb1
	)
)AND d.[State]= 'Gujarat' AND s.SalesDate >= '2010-03-01'
AND s.SalesDate <= '2010-03-31';

--16. Calculate the payroll for the month of March 2010.
	--* The payroll consists of the name, salesperson ID, and gross pay for each salesperson who worked that month.
    --* The gross pay is calculated as the base salary at each dealership employing the salesperson that month, along with the total commission for the salesperson that month.
    --* The total commission for a salesperson in a month is calculated as 5% of the profit made on all cars sold by the salesperson that month.
    --* The profit made on a car is the difference between the sale price and the invoice price of the car. (Assume, that cars are never sold for less than the invoice price.)

SELECT sp.SalesPersonID, sp.Name,
SUM(ISNULL(w.BasesalaryForMonth, 0) + ISNULL(((c.AskPrice - c.Invoiceprice) * 5 / 100), 0)) [Gross Pay]
FROM SalesPersons sp
LEFT JOIN Sales s ON s.SalesPersonID = sp.SalesPersonID
LEFT JOIN Cars c ON c.VIN = s.VIN
RIGHT JOIN WorksAt w ON w.SalesPersonID = sp.SalesPersonID
WHERE DATENAME(MM, s.CustomerID) = 'March' AND YEAR(s.SalesDate) = 2010
GROUP BY sp.SalesPersonID, sp.Name
ORDER BY sp.SalesPersonID;