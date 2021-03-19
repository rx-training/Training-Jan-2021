--=========================================================================================
--QUERIES :
--=========================================================================================

--1. Find the names of all salespeople who have ever worked for the company at any dealership.
SELECT  SalesPersons.Name AS 'Salesperson Name' ,
		Dealership.Name AS 'Dealership Name' 
		FROM	SalesPeopleWorksAt , SalesPersons , Dealership
		WHERE	SalesPeopleWorksAt.SalespersonId = SalesPersons.Id AND
				SalesPeopleWorksAt.DealershipId = Dealership.Id ;

--2. List the Name, Street Address, and City of each customer who lives in Ahmedabad.
SELECT Customers.Name, Customers.Addr , Customers.City FROM Customers WHERE Customers.City = 'Ahmedabad' ;


--3. List the VIN, make, model, year, and mileage of all cars in the inventory of the dealership named "Hero Honda Car World".
SELECT Car.Vin , Car.Make , Car.Model , Car.Mileage 
		FROM	Inventory , Dealership , Car
		WHERE	Inventory.CarVin = Car.Vin AND
				Inventory.DealershipId = Dealership.Id AND
				Dealership.Name = 'Hero Honda Car World' ;


--4. List names of all customers who have ever bought cars from the dealership named "Concept Hyundai".
SELECT Customers.Name FROM Sales , Dealership , Customers
		WHERE	Sales.CustomerId = Customers.Id AND
				Sales.DealershipId = Dealership.Id AND 
				Dealership.Name = 'Concept Hyundai' ;


--5. For each car in the inventory of any dealership, list the VIN, make, model, and year of the car, along with the name, city, and state of the dealership whose inventory contains the car.
SELECT Car.Vin , Car.Make , Car.Model , Car.LaunchYear , Dealership.Name , Dealership.City , Dealership.StateName
		FROM Car , Dealership , Inventory
		WHERE	Inventory.CarVin = Car.Vin AND
				Inventory.DealershipId = Dealership.Id ;


--6. Find the names of all salespeople who are managed by a salesperson named "Adam Smith".
SELECT SalesPersons.Name FROM SalesPersons JOIN SalesPeopleManagers 
	ON	SalesPeopleManagers.SalespersonId = SalesPersons.Id AND 
		SalesPeopleManagers.ManagerName = 'Adam Smith' ;


--7. Find the names of all salespeople who do not have a manager.
SELECT SalesPersons.Name , SalesPeopleManagers.ManagerName 
	FROM	SalesPersons LEFT JOIN SalesPeopleManagers 
	ON		SalesPersons.Id = SalesPeopleManagers.SalespersonId 
	WHERE	SalesPersons.Id NOT IN ( SELECT SalesPeopleManagers.SalespersonId FROM SalesPeopleManagers) ;



--8. Find the total number of dealerships.
SELECT COUNT( Dealership.Id ) FROM Dealership ;


--9. List the VIN, year, and mileage of all "Toyota Camrys" in the inventory of the dealership named "Toyota Performance". (Note that a "Toyota Camry" is indicated by the make being "Toyota" and the model being "Camry".)
SELECT Car.Vin , Car.Make + ' ' + Car.Model AS 'Car Name' , Car.LaunchYear , Car.Mileage 
		FROM	Inventory
		JOIN	Car			ON Inventory.CarVin = Car.Vin
		JOIN	Dealership	ON Inventory.DealershipId = Dealership.Id AND Dealership.Name = 'Toyota Performance' ;


--10. Find the name of all customers who bought a car at a dealership located in a state other than the state in which they live.
SELECT Customers.Name , Customers.City AS 'Living City' , Dealership.City AS 'Buying City'
		FROM	Sales
		JOIN	Customers	ON	Sales.CustomerId = Customers.Id 
		JOIN	Dealership	ON	Sales.DealershipId = Dealership.Id 
		WHERE	Customers.City	!=	Dealership.City ;


--11. Find the name of the salesperson that made the largest base salary working at the dealership named "Ferrari Sales" during January 2010.
SELECT  TOP 1	SalesPersons.Name AS 'Sales Person Name', Dealership.Name AS 'Dealership Name', (SalesPeopleWorksAt.BaseSalary), SalesPeopleWorksAt.MonthWorked
		FROM SalesPeopleWorksAt
		JOIN SalesPersons	ON SalesPeopleWorksAt.SalespersonId = SalesPersons.Id
		JOIN Dealership		ON SalesPeopleWorksAt.DealershipId = Dealership.Id
		WHERE	Dealership.Name = 'Ferrari Sales'			AND 
				MONTH(SalesPeopleWorksAt.MonthWorked)=1		AND
				Year(SalesPeopleWorksAt.MonthWorked)=2010		
		ORDER BY SalesPeopleWorksAt.BaseSalary DESC ;	
		


--12. List the name, street address, city, and state of any customer who has bought more than two cars from all dealerships combined since January 1, 2010.
SELECT Customers.Name , Customers.Addr , Customers.City , Customers.StateName 
		FROM Sales
		JOIN Customers	ON Sales.CustomerId = Customers.Id
		WHERE Sales.SaleDate > '2010-01-01' AND 
		Customers.Id IN (SELECT CustomerId FROM Sales GROUP BY CustomerId HAVING COUNT(CustomerId) > 2 );



--13. List the name, salesperson ID, and total sales amount for each salesperson who has ever sold at least one car. The total sales amount for a salesperson is the sum of the sale prices of all cars ever sold by that salesperson.
SELECT SalesPersons.Name  , SUM(Sales.Saleprice) AS 'Total Sales Amount'
		FROM Sales
		JOIN SalesPersons ON Sales.SalespersonId = SalesPersons.Id
		GROUP BY SalesPersons.Name ;


--14. Find the names of all customers who bought cars during 2010 who were also salespeople during 2010. For the purpose of this query, assume that no two people have the same name.
SELECT Customers.Name AS 'Cutomer Name' , SalesPersons.Name AS 'Sales Person Name'
		FROM Sales
		JOIN Customers		ON Sales.CustomerId = Customers.Id
		JOIN SalesPersons	ON Sales.SalespersonId = SalesPersons.Id 
		WHERE	Customers.Name = SalesPersons.Name AND 
				Sales.SaleDate > '2010-01-01' ;
		;
-- Comment WHERE Clause and see the change in 12th row 


--15. Find the name and salesperson ID of the salesperson who sold the most cars for the company at dealerships located in Gujarat between March 1, 2010 and March 31, 2010.
SELECT TOP 1 SalesPersons.Name , SalesPersons.Id , COUNT(Sales.Vin) AS 'Total Cars'
		FROM Sales
		JOIN SalesPersons	ON Sales.SalespersonId = SalesPersons.Id
		JOIN Dealership		ON Sales.DealershipId = Dealership.Id 
		WHERE Dealership.StateName = 'Gujarat'
		GROUP BY (SalesPersons.Name), (SalesPersons.Id) 
		;


--16. Calculate the payroll for the month of March 2010.
--	* The payroll consists of the name, salesperson ID, and gross pay for each salesperson who worked that month.

--        * The gross pay is calculated as the base salary at each dealership employing the salesperson that month, along with the total commission for the salesperson that month.
--        * The total commission for a salesperson in a month is calculated as 5% of the profit made on all cars sold by the salesperson that month.
--        * The profit made on a car is the difference between the sale price and the invoice price of the car. (Assume, that cars are never sold for less than the invoice price.)

SELECT DISTINCT SalesPersons.Id, SalesPersons.Name , SUM(Sales.Saleprice - Car.InvoicePrice) AS 'Profit' ,
		(SUM(Sales.Saleprice - Car.InvoicePrice)*5/100) AS 'Total Commision' ,
		(SalesPersons.Salary + SUM(Sales.Saleprice - Car.InvoicePrice)*5/100) AS 'Gross Pay'
		FROM Sales
		JOIN SalesPersons	ON Sales.SalespersonId = SalesPersons.Id
		JOIN Car			ON Sales.Vin = Car.Vin
		WHERE MONTH(Sales.SaleDate) = 1
		GROUP BY SalesPersons.Name , SalesPersons.Salary , SalesPersons.Id
		;











USE [master]
GO
/****** Object:  Table [dbo].[Car]    Script Date: 3/12/2021 3:23:39 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[Car](
	[CarId] [int] NOT NULL,
	[Vin] [int] NOT NULL,
	[Make] [varchar](50) NOT NULL,
	[Model] [varchar](50) NOT NULL,
	[LaunchYear] [date] NOT NULL,
	[Mileage] [decimal](10, 3) NOT NULL,
	[AskingPrice] [float] NULL,
	[InvoicePrice] [float] NULL,
PRIMARY KEY CLUSTERED 
(
	[CarId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY],
UNIQUE NONCLUSTERED 
(
	[Vin] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[Customers]    Script Date: 3/12/2021 3:23:40 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[Customers](
	[Id] [int] NOT NULL,
	[Name] [varchar](50) NOT NULL,
	[Addr] [varchar](50) NOT NULL,
	[City] [varchar](50) NOT NULL,
	[StateName] [varchar](50) NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[Dealership]    Script Date: 3/12/2021 3:23:40 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[Dealership](
	[Id] [int] NOT NULL,
	[Name] [varchar](50) NOT NULL,
	[StreetAddress] [varchar](50) NULL,
	[City] [varchar](50) NOT NULL,
	[StateName] [varchar](50) NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[Inventory]    Script Date: 3/12/2021 3:23:40 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Inventory](
	[Id] [int] NOT NULL,
	[CarVin] [int] NOT NULL,
	[DealershipId] [int] NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[Records]    Script Date: 3/12/2021 3:23:40 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Records](
	[Id] [int] NOT NULL,
	[CarVin] [int] NOT NULL,
	[CustomerId] [int] NOT NULL,
	[SalespersonId] [int] NOT NULL,
	[DealershipId] [int] NOT NULL,
	[SaleId] [int] NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[ReportsTo]    Script Date: 3/12/2021 3:23:40 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ReportsTo](
	[Id] [int] NOT NULL,
	[SalespersonId] [int] NOT NULL,
	[ManagerId] [int] NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[Sales]    Script Date: 3/12/2021 3:23:40 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[Sales](
	[SaleId] [int] NOT NULL,
	[Vin] [int] NOT NULL,
	[CustomerId] [varchar](50) NOT NULL,
	[SalespersonId] [int] NOT NULL,
	[DealershipId] [int] NOT NULL,
	[Saleprice] [decimal](6, 2) NULL,
	[SaleDate] [date] NULL,
PRIMARY KEY CLUSTERED 
(
	[SaleId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[SalesPeopleWorksAt]    Script Date: 3/12/2021 3:23:40 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[SalesPeopleWorksAt](
	[Id] [int] NOT NULL,
	[SalespersonId] [int] NOT NULL,
	[DealershipId] [int] NOT NULL,
	[MonthWorked] [date] NOT NULL,
	[BaseSalary] [int] NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[SalesPersons]    Script Date: 3/12/2021 3:23:40 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[SalesPersons](
	[Id] [int] NOT NULL,
	[Name] [varchar](50) NOT NULL,
	[Salary] [int] NOT NULL,
	[Commission] [decimal](6, 2) NULL,
PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
ALTER TABLE [dbo].[Inventory]  WITH CHECK ADD FOREIGN KEY([CarVin])
REFERENCES [dbo].[Car] ([Vin])
GO
ALTER TABLE [dbo].[Inventory]  WITH CHECK ADD FOREIGN KEY([DealershipId])
REFERENCES [dbo].[Dealership] ([Id])
GO
ALTER TABLE [dbo].[Records]  WITH CHECK ADD FOREIGN KEY([CarVin])
REFERENCES [dbo].[Car] ([Vin])
GO
ALTER TABLE [dbo].[Records]  WITH CHECK ADD FOREIGN KEY([CustomerId])
REFERENCES [dbo].[Customers] ([Id])
GO
ALTER TABLE [dbo].[Records]  WITH CHECK ADD FOREIGN KEY([DealershipId])
REFERENCES [dbo].[Dealership] ([Id])
GO
ALTER TABLE [dbo].[Records]  WITH CHECK ADD FOREIGN KEY([SaleId])
REFERENCES [dbo].[Sales] ([SaleId])
GO
ALTER TABLE [dbo].[Records]  WITH CHECK ADD FOREIGN KEY([SalespersonId])
REFERENCES [dbo].[SalesPersons] ([Id])
GO
ALTER TABLE [dbo].[ReportsTo]  WITH CHECK ADD FOREIGN KEY([SalespersonId])
REFERENCES [dbo].[SalesPersons] ([Id])
GO
ALTER TABLE [dbo].[Sales]  WITH CHECK ADD FOREIGN KEY([DealershipId])
REFERENCES [dbo].[Dealership] ([Id])
GO
ALTER TABLE [dbo].[Sales]  WITH CHECK ADD FOREIGN KEY([SalespersonId])
REFERENCES [dbo].[SalesPersons] ([Id])
GO
ALTER TABLE [dbo].[Sales]  WITH CHECK ADD FOREIGN KEY([Vin])
REFERENCES [dbo].[Car] ([Vin])
GO
ALTER TABLE [dbo].[SalesPeopleWorksAt]  WITH CHECK ADD FOREIGN KEY([DealershipId])
REFERENCES [dbo].[Dealership] ([Id])
GO
ALTER TABLE [dbo].[SalesPeopleWorksAt]  WITH CHECK ADD FOREIGN KEY([SalespersonId])
REFERENCES [dbo].[SalesPersons] ([Id])
GO

CREATE TABLE SalesPeopleManagers ( 
	Id				INT				NOT NULL ,
	SalespersonId	INT				NOT NULL ,
	ManagerId		INT				NOT NULL ,
	ManagerName		VARCHAR( 50 )	NOT NULL ,

	PRIMARY KEY (Id)						 ,
	FOREIGN KEY (SalespersonId)		REFERENCES SalesPersons(Id)
) ;





INSERT INTO Car VALUES
    (1,1111, 'Toyota', 'Camry', '2006', 0, 24750.00, 21400.00);
INSERT INTO Car VALUES
    (2,2222, 'Mazda', 'Protege', '1991', 143570, 2300.00, 1100.00);
INSERT INTO Car VALUES
    (3,3333, 'Ford', 'F-150', '2001', 67554, 9575.00, 7125.00);
INSERT INTO Car VALUES
    (4,4444, 'Passion Pro', 'F-150', '2019', 67554, 9575.00, 7125.00);
INSERT INTO Car VALUES
    (5,5555, 'Passion X Pro', 'F-150', '2019', 67554, 9575.00, 7125.00);
SELECT * FROM Car;


INSERT INTO Dealership VALUES
    (101, 'Irvine Toyota Sales', '100 Alton St', 'Irvine', 'CA');
INSERT INTO Dealership VALUES
    (102, 'Tata Nexa Sales', 'galaxy St', 'Ahmedabad', 'Gujarat');
INSERT INTO Dealership VALUES
    (103, 'Hero Honda Car World', 'C.G Road', 'Ahmedabad', 'Gujarat');
INSERT INTO Dealership VALUES
    (104, 'Concept Hyundai', 'M.G Road', 'Surat', 'Gujarat');
INSERT INTO Dealership VALUES
    (105, 'Toyota Performance', 'S.G Highway', 'Ahmedabad', 'Gujarat');
INSERT INTO Dealership VALUES
    (106, 'Toyota Hexa', 'S.G Highway', 'Vadodara', 'Gujarat');
INSERT INTO Dealership VALUES
    (107, 'Ferrari Sales', 'S.G Highway', 'Ahmedabad', 'Gujarat');
SELECT * FROM Dealership ;



INSERT INTO Salespersons VALUES (201, 'Joe Salesperson', 50000, NULL);
INSERT INTO Salespersons VALUES (202, 'Angela Manager', 20000 , 4.5);
INSERT INTO Salespersons VALUES (203, 'Kyle Owner', 4000 , 1.5);
INSERT INTO Salespersons VALUES (204, 'Megan Fox', 4000 , 1.5);
INSERT INTO Salespersons VALUES (205, 'Chadwick Boseman', 4000 , 1.5);
INSERT INTO Salespersons VALUES (206, 'Aman Pandya', 4000 , 1.5);
SELECT * FROM Salespersons ;


INSERT INTO SalesPeopleManagers 
		VALUES	( 1 , 201 , 111 , 'Adam Smith') ;
INSERT INTO SalesPeopleManagers 
		VALUES	( 2 , 203 , 111 , 'Adam Smith') ;
INSERT INTO SalesPeopleManagers 
		VALUES	( 3 , 202 , 112 , 'Eve Smith') ;
SELECT * FROM SalesPeopleManagers ;


INSERT INTO Customers VALUES
    (123456789, 'Jane Customer', '1 Main St', 'Fountain Valley', 'CA');
INSERT INTO Customers VALUES
    (234567890, 'Howard Buyer', '2 Central Blvd', 'Yuma', 'AZ');
INSERT INTO Customers VALUES
    (23452890, 'Raman', '2 Central Blvd', 'Ahmedabad', 'AZ');
INSERT INTO Customers VALUES
    (223467890, 'Baman', '2 Central Blvd', 'Ahmedabad', 'AZ');
INSERT INTO Customers VALUES
    (223347890, 'Neha Saigal', '223 Galaxy Towers', 'Ahmedabad', 'Gujarat');
INSERT INTO Customers VALUES
    (223343450, 'Rahul Tripathi', '213 Galaxy Towers', 'Ahmedabad', 'Gujarat');
INSERT INTO Customers VALUES
    (223345890, 'Kirtan Mittal', '203 Galaxy Towers', 'Ahmedabad', 'Gujarat');
INSERT INTO Customers VALUES
    (223344590, 'Aman Pandya', '203 Galaxy Towers', 'Vadodara', 'Gujarat');
SELECT * FROM Customers ;



INSERT INTO Reportsto VALUES (1,201, 202);
INSERT INTO Reportsto VALUES (2,202, 203);
Select * from ReportsTo ;



INSERT INTO SalesPeopleWorksAt VALUES (1,201, 101, '2006-01-01', 2500.00);
INSERT INTO SalesPeopleWorksAt VALUES (2,202, 101, '2006-01-01', 4000.00);
INSERT INTO SalesPeopleWorksAt VALUES (3,203, 102, '2006-01-01', 12000.00);
INSERT INTO SalesPeopleWorksAt VALUES (4,203, 107, '2010-01-01', 12000.00);
INSERT INTO SalesPeopleWorksAt VALUES (5,202, 107, '2010-01-01', 10000.00);
INSERT INTO SalesPeopleWorksAt VALUES (6,201, 107, '2010-01-01', 8000.00);
INSERT INTO SalesPeopleWorksAt VALUES (7,203, 107, '2006-01-01', 1200.00);
SELECT * FROM SalesPeopleWorksAt ;



INSERT INTO Inventory VALUES (1,'1111', 101);
INSERT INTO Inventory VALUES (2,'1111', 101);
INSERT INTO Inventory VALUES (3,'4444', 103);
INSERT INTO Inventory VALUES (4,1111, 105);
INSERT INTO Inventory VALUES (5,1111, 105);
SELECT * FROM Inventory ;


INSERT INTO Sales VALUES
    (1,2222, '123456789', 201, 101, 1950.00, '2006-01-13');
INSERT INTO Sales VALUES
    (2,3333, '234567890', 202, 101, 9300.00, '2006-01-19');
INSERT INTO Sales VALUES
    (3,4444, '223347890', 202, 104, 9300.00, '2006-01-19');
INSERT INTO Sales VALUES
    (4,1111, '223343450', 202, 104, 9300.00, '2006-01-19');
INSERT INTO Sales VALUES
    (5,2222, '223345890', 202, 104, 9300.00, '2006-01-19');
INSERT INTO Sales VALUES
    (6,2222, '223344590', 202, 106, 9300.00, '2006-01-19');
INSERT INTO Sales VALUES
    (7,3333, '123456789', 202, 104, 9300.00, '2010-01-19');
INSERT INTO Sales VALUES
    (8,4444, '123456789', 202, 106, 9300.00, '2010-01-19');
INSERT INTO Sales VALUES
    (9,2222, '123456789', 202, 106, 9300.00, '2010-01-19');
INSERT INTO Sales VALUES
    (10,2222, '123456789', 202, 106, 9300.00, '2010-01-19');
INSERT INTO Sales VALUES
    (11,2222, '223347890', 202, 106, 9300.00, '2010-01-19');
INSERT INTO Sales VALUES
    (12,2222, '223344590', 206, 106, 9300.00, '2010-01-19');
SELECT * FROM Sales ;






CREATE TABLE  Employees (
    EmployeeID decimal(6,0) NOT NULL DEFAULT '0',
	FirstName varchar(20) DEFAULT NULL,
	LastName varchar(25) NOT NULL,
	Email varchar(25) NOT NULL,
	PhoneNumber varchar(20) DEFAULT NULL,
	HireDate date NOT NULL,
	JobId varchar(10) NOT NULL,
	Salary decimal(8,2) DEFAULT NULL,
	CommissionPct decimal(2,2) DEFAULT NULL,
	ManagerID decimal(6,0) DEFAULT NULL,
	DepartmentID decimal(4,0) DEFAULT NULL,
	CONSTRAINT pkEmployeeID PRIMARY KEY (EmployeeID),
	CONSTRAINT ukEmail UNIQUE  (Email)
 );

--
-- Dumping data for table `employees`
--

INSERT INTO Employees (EmployeeID,FirstName,LastName , Email, PhoneNumber, HireDate, JobId, Salary, CommissionPct, ManagerID, DepartmentID) VALUES
('100', 'Steven', 'King', 'SKING', '515.123.4567', '1987-06-17', 'AD_PRES', '24000.00', '0.00', '0', '90'),
('101', 'Neena', 'Kochhar', 'NKOCHHAR', '515.123.4568', '1987-06-18', 'AD_VP', '17000.00', '0.00', '100', '90'),
('102', 'Lex', 'De Haan', 'LDEHAAN', '515.123.4569', '1987-06-19', 'AD_VP', '17000.00', '0.00', '100', '90'),
('103', 'Alexander', 'Hunold', 'AHUNOLD', '590.423.4567', '1987-06-20', 'IT_PROG', '9000.00', '0.00', '102', '60'),
('104', 'Bruce', 'Ernst', 'BERNST', '590.423.4568', '1987-06-21', 'IT_PROG', '6000.00', '0.00', '103', '60'),
('105', 'David', 'Austin', 'DAUSTIN', '590.423.4569', '1987-06-22', 'IT_PROG', '4800.00', '0.00', '103', '60'),
('106', 'Valli', 'Pataballa', 'VPATABAL', '590.423.4560', '1987-06-23', 'IT_PROG', '4800.00', '0.00', '103', '60'),
('107', 'Diana', 'Lorentz', 'DLORENTZ', '590.423.5567', '1987-06-24', 'IT_PROG', '4200.00', '0.00', '103', '60'),
('108', 'Nancy', 'Greenberg', 'NGREENBE', '515.124.4569', '1987-06-25', 'FI_MGR', '12000.00', '0.00', '101', '100'),
('109', 'Daniel', 'Faviet', 'DFAVIET', '515.124.4169', '1987-06-26', 'FI_ACCOUNT', '9000.00', '0.00', '108', '100'),
('110', 'John', 'Chen', 'JCHEN', '515.124.4269', '1987-06-27', 'FI_ACCOUNT', '8200.00', '0.00', '108', '100'),
('111', 'Ismael', 'Sciarra', 'ISCIARRA', '515.124.4369', '1987-06-28', 'FI_ACCOUNT', '7700.00', '0.00', '108', '100'),
('112', 'Jose Manuel', 'Urman', 'JMURMAN', '515.124.4469', '1987-06-29', 'FI_ACCOUNT', '7800.00', '0.00', '108', '100'),
('113', 'Luis', 'Popp', 'LPOPP', '515.124.4567', '1987-06-30', 'FI_ACCOUNT', '6900.00', '0.00', '108', '100'),
('114', 'Den', 'Raphaely', 'DRAPHEAL', '515.127.4561', '1987-07-01', 'PU_MAN', '11000.00', '0.00', '100', '30'),
('115', 'Alexander', 'Khoo', 'AKHOO', '515.127.4562', '1987-07-02', 'PU_CLERK', '3100.00', '0.00', '114', '30'),
('116', 'Shelli', 'Baida', 'SBAIDA', '515.127.4563', '1987-07-03', 'PU_CLERK', '2900.00', '0.00', '114', '30'),
('117', 'Sigal', 'Tobias', 'STOBIAS', '515.127.4564', '1987-07-04', 'PU_CLERK', '2800.00', '0.00', '114', '30'),
('118', 'Guy', 'Himuro', 'GHIMURO', '515.127.4565', '1987-07-05', 'PU_CLERK', '2600.00', '0.00', '114', '30'),
('119', 'Karen', 'Colmenares', 'KCOLMENA', '515.127.4566', '1987-07-06', 'PU_CLERK', '2500.00', '0.00', '114', '30'),
('120', 'Matthew', 'Weiss', 'MWEISS', '650.123.1234', '1987-07-07', 'ST_MAN', '8000.00', '0.00', '100', '50'),
('121', 'Adam', 'Fripp', 'AFRIPP', '650.123.2234', '1987-07-08', 'ST_MAN', '8200.00', '0.00', '100', '50'),
('122', 'Payam', 'Kaufling', 'PKAUFLIN', '650.123.3234', '1987-07-09', 'ST_MAN', '7900.00', '0.00', '100', '50'),
('123', 'Shanta', 'Vollman', 'SVOLLMAN', '650.123.4234', '1987-07-10', 'ST_MAN', '6500.00', '0.00', '100', '50'),
('124', 'Kevin', 'Mourgos', 'KMOURGOS', '650.123.5234', '1987-07-11', 'ST_MAN', '5800.00', '0.00', '100', '50'),
('125', 'Julia', 'Nayer', 'JNAYER', '650.124.1214', '1987-07-12', 'ST_CLERK', '3200.00', '0.00', '120', '50'),
('126', 'Irene', 'Mikkilineni', 'IMIKKILI', '650.124.1224', '1987-07-13', 'ST_CLERK', '2700.00', '0.00', '120', '50'),
('127', 'James', 'Landry', 'JLANDRY', '650.124.1334', '1987-07-14', 'ST_CLERK', '2400.00', '0.00', '120', '50'),
('128', 'Steven', 'Markle', 'SMARKLE', '650.124.1434', '1987-07-15', 'ST_CLERK', '2200.00', '0.00', '120', '50'),
('129', 'Laura', 'Bissot', 'LBISSOT', '650.124.5234', '1987-07-16', 'ST_CLERK', '3300.00', '0.00', '121', '50'),
('130', 'Mozhe', 'Atkinson', 'MATKINSO', '650.124.6234', '1987-07-17', 'ST_CLERK', '2800.00', '0.00', '121', '50'),
('131', 'James', 'Marlow', 'JAMRLOW', '650.124.7234', '1987-07-18', 'ST_CLERK', '2500.00', '0.00', '121', '50'),
('132', 'TJ', 'Olson', 'TJOLSON', '650.124.8234', '1987-07-19', 'ST_CLERK', '2100.00', '0.00', '121', '50'),
('133', 'Jason', 'Mallin', 'JMALLIN', '650.127.1934', '1987-07-20', 'ST_CLERK', '3300.00', '0.00', '122', '50'),
('134', 'Michael', 'Rogers', 'MROGERS', '650.127.1834', '1987-07-21', 'ST_CLERK', '2900.00', '0.00', '122', '50'),
('135', 'Ki', 'Gee', 'KGEE', '650.127.1734', '1987-07-22', 'ST_CLERK', '2400.00', '0.00', '122', '50'),
('136', 'Hazel', 'Philtanker', 'HPHILTAN', '650.127.1634', '1987-07-23', 'ST_CLERK', '2200.00', '0.00', '122', '50'),
('137', 'Renske', 'Ladwig', 'RLADWIG', '650.121.1234', '1987-07-24', 'ST_CLERK', '3600.00', '0.00', '123', '50'),
('138', 'Stephen', 'Stiles', 'SSTILES', '650.121.2034', '1987-07-25', 'ST_CLERK', '3200.00', '0.00', '123', '50'),
('139', 'John', 'Seo', 'JSEO', '650.121.2019', '1987-07-26', 'ST_CLERK', '2700.00', '0.00', '123', '50'),
('140', 'Joshua', 'Patel', 'JPATEL', '650.121.1834', '1987-07-27', 'ST_CLERK', '2500.00', '0.00', '123', '50'),
('141', 'Trenna', 'Rajs', 'TRAJS', '650.121.8009', '1987-07-28', 'ST_CLERK', '3500.00', '0.00', '124', '50'),
('142', 'Curtis', 'Davies', 'CDAVIES', '650.121.2994', '1987-07-29', 'ST_CLERK', '3100.00', '0.00', '124', '50'),
('143', 'Randall', 'Matos', 'RMATOS', '650.121.2874', '1987-07-30', 'ST_CLERK', '2600.00', '0.00', '124', '50'),
('144', 'Peter', 'Vargas', 'PVARGAS', '650.121.2004', '1987-07-31', 'ST_CLERK', '2500.00', '0.00', '124', '50'),
('145', 'John', 'Russell', 'JRUSSEL', '011.44.1344.429268', '1987-08-01', 'SA_MAN', '14000.00', '0.40', '100', '80'),
('146', 'Karen', 'Partners', 'KPARTNER', '011.44.1344.467268', '1987-08-02', 'SA_MAN', '13500.00', '0.30', '100', '80'),
('147', 'Alberto', 'Errazuriz', 'AERRAZUR', '011.44.1344.429278', '1987-08-03', 'SA_MAN', '12000.00', '0.30', '100', '80'),
('148', 'Gerald', 'Cambrault', 'GCAMBRAU', '011.44.1344.619268', '1987-08-04', 'SA_MAN', '11000.00', '0.30', '100', '80'),
('149', 'Eleni', 'Zlotkey', 'EZLOTKEY', '011.44.1344.429018', '1987-08-05', 'SA_MAN', '10500.00', '0.20', '100', '80'),
('150', 'Peter', 'Tucker', 'PTUCKER', '011.44.1344.129268', '1987-08-06', 'SA_REP', '10000.00', '0.30', '145', '80'),
('151', 'David', 'Bernstein', 'DBERNSTE', '011.44.1344.345268', '1987-08-07', 'SA_REP', '9500.00', '0.25', '145', '80'),
('152', 'Peter', 'Hall', 'PHALL', '011.44.1344.478968', '1987-08-08', 'SA_REP', '9000.00', '0.25', '145', '80'),
('153', 'Christopher', 'Olsen', 'COLSEN', '011.44.1344.498718', '1987-08-09', 'SA_REP', '8000.00', '0.20', '145', '80'),
('154', 'Nanette', 'Cambrault', 'NCAMBRAU', '011.44.1344.987668', '1987-08-10', 'SA_REP', '7500.00', '0.20', '145', '80'),
('155', 'Oliver', 'Tuvault', 'OTUVAULT', '011.44.1344.486508', '1987-08-11', 'SA_REP', '7000.00', '0.15', '145', '80'),
('156', 'Janette', 'King', 'JKING', '011.44.1345.429268', '1987-08-12', 'SA_REP', '10000.00', '0.35', '146', '80'),
('157', 'Patrick', 'Sully', 'PSULLY', '011.44.1345.929268', '1987-08-13', 'SA_REP', '9500.00', '0.35', '146', '80'),
('158', 'Allan', 'McEwen', 'AMCEWEN', '011.44.1345.829268', '1987-08-14', 'SA_REP', '9000.00', '0.35', '146', '80'),
('159', 'Lindsey', 'Smith', 'LSMITH', '011.44.1345.729268', '1987-08-15', 'SA_REP', '8000.00', '0.30', '146', '80'),
('160', 'Louise', 'Doran', 'LDORAN', '011.44.1345.629268', '1987-08-16', 'SA_REP', '7500.00', '0.30', '146', '80'),
('161', 'Sarath', 'Sewall', 'SSEWALL', '011.44.1345.529268', '1987-08-17', 'SA_REP', '7000.00', '0.25', '146', '80'),
('162', 'Clara', 'Vishney', 'CVISHNEY', '011.44.1346.129268', '1987-08-18', 'SA_REP', '10500.00', '0.25', '147', '80'),
('163', 'Danielle', 'Greene', 'DGREENE', '011.44.1346.229268', '1987-08-19', 'SA_REP', '9500.00', '0.15', '147', '80'),
('164', 'Mattea', 'Marvins', 'MMARVINS', '011.44.1346.329268', '1987-08-20', 'SA_REP', '7200.00', '0.10', '147', '80'),
('165', 'David', 'Lee', 'DLEE', '011.44.1346.529268', '1987-08-21', 'SA_REP', '6800.00', '0.10', '147', '80'),
('166', 'Sundar', 'Ande', 'SANDE', '011.44.1346.629268', '1987-08-22', 'SA_REP', '6400.00', '0.10', '147', '80'),
('167', 'Amit', 'Banda', 'ABANDA', '011.44.1346.729268', '1987-08-23', 'SA_REP', '6200.00', '0.10', '147', '80'),
('168', 'Lisa', 'Ozer', 'LOZER', '011.44.1343.929268', '1987-08-24', 'SA_REP', '11500.00', '0.25', '148', '80'),
('169', 'Harrison', 'Bloom', 'HBLOOM', '011.44.1343.829268', '1987-08-25', 'SA_REP', '10000.00', '0.20', '148', '80'),
('170', 'Tayler', 'Fox', 'TFOX', '011.44.1343.729268', '1987-08-26', 'SA_REP', '9600.00', '0.20', '148', '80'),
('171', 'William', 'Smith', 'WSMITH', '011.44.1343.629268', '1987-08-27', 'SA_REP', '7400.00', '0.15', '148', '80'),
('172', 'Elizabeth', 'Bates', 'EBATES', '011.44.1343.529268', '1987-08-28', 'SA_REP', '7300.00', '0.15', '148', '80'),
('173', 'Sundita', 'Kumar', 'SKUMAR', '011.44.1343.329268', '1987-08-29', 'SA_REP', '6100.00', '0.10', '148', '80'),
('174', 'Ellen', 'Abel', 'EABEL', '011.44.1644.429267', '1987-08-30', 'SA_REP', '11000.00', '0.30', '149', '80'),
('175', 'Alyssa', 'Hutton', 'AHUTTON', '011.44.1644.429266', '1987-08-31', 'SA_REP', '8800.00', '0.25', '149', '80'),
('176', 'Jonathon', 'Taylor', 'JTAYLOR', '011.44.1644.429265', '1987-09-01', 'SA_REP', '8600.00', '0.20', '149', '80'),
('177', 'Jack', 'Livingston', 'JLIVINGS', '011.44.1644.429264', '1987-09-02', 'SA_REP', '8400.00', '0.20', '149', '80'),
('178', 'Kimberely', 'Grant', 'KGRANT', '011.44.1644.429263', '1987-09-03', 'SA_REP', '7000.00', '0.15', '149', '0'),
('179', 'Charles', 'Johnson', 'CJOHNSON', '011.44.1644.429262', '1987-09-04', 'SA_REP', '6200.00', '0.10', '149', '80'),
('180', 'Winston', 'Taylor', 'WTAYLOR', '650.507.9876', '1987-09-05', 'SH_CLERK', '3200.00', '0.00', '120', '50'),
('181', 'Jean', 'Fleaur', 'JFLEAUR', '650.507.9877', '1987-09-06', 'SH_CLERK', '3100.00', '0.00', '120', '50'),
('182', 'Martha', 'Sullivan', 'MSULLIVA', '650.507.9878', '1987-09-07', 'SH_CLERK', '2500.00', '0.00', '120', '50'),
('183', 'Girard', 'Geoni', 'GGEONI', '650.507.9879', '1987-09-08', 'SH_CLERK', '2800.00', '0.00', '120', '50'),
('184', 'Nandita', 'Sarchand', 'NSARCHAN', '650.509.1876', '1987-09-09', 'SH_CLERK', '4200.00', '0.00', '121', '50'),
('185', 'Alexis', 'Bull', 'ABULL', '650.509.2876', '1987-09-10', 'SH_CLERK', '4100.00', '0.00', '121', '50'),
('186', 'Julia', 'Dellinger', 'JDELLING', '650.509.3876', '1987-09-11', 'SH_CLERK', '3400.00', '0.00', '121', '50'),
('187', 'Anthony', 'Cabrio', 'ACABRIO', '650.509.4876', '1987-09-12', 'SH_CLERK', '3000.00', '0.00', '121', '50'),
('188', 'Kelly', 'Chung', 'KCHUNG', '650.505.1876', '1987-09-13', 'SH_CLERK', '3800.00', '0.00', '122', '50'),
('189', 'Jennifer', 'Dilly', 'JDILLY', '650.505.2876', '1987-09-14', 'SH_CLERK', '3600.00', '0.00', '122', '50'),
('190', 'Timothy', 'Gates', 'TGATES', '650.505.3876', '1987-09-15', 'SH_CLERK', '2900.00', '0.00', '122', '50'),
('191', 'Randall', 'Perkins', 'RPERKINS', '650.505.4876', '1987-09-16', 'SH_CLERK', '2500.00', '0.00', '122', '50'),
('192', 'Sarah', 'Bell', 'SBELL', '650.501.1876', '1987-09-17', 'SH_CLERK', '4000.00', '0.00', '123', '50'),
('193', 'Britney', 'Everett', 'BEVERETT', '650.501.2876', '1987-09-18', 'SH_CLERK', '3900.00', '0.00', '123', '50'),
('194', 'Samuel', 'McCain', 'SMCCAIN', '650.501.3876', '1987-09-19', 'SH_CLERK', '3200.00', '0.00', '123', '50'),
('195', 'Vance', 'Jones', 'VJONES', '650.501.4876', '1987-09-20', 'SH_CLERK', '2800.00', '0.00', '123', '50'),
('196', 'Alana', 'Walsh', 'AWALSH', '650.507.9811', '1987-09-21', 'SH_CLERK', '3100.00', '0.00', '124', '50'),
('197', 'Kevin', 'Feeney', 'KFEENEY', '650.507.9822', '1987-09-22', 'SH_CLERK', '3000.00', '0.00', '124', '50'),
('198', 'Donald', 'OConnell', 'DOCONNEL', '650.507.9833', '1987-09-23', 'SH_CLERK', '2600.00', '0.00', '124', '50'),
('199', 'Douglas', 'Grant', 'DGRANT', '650.507.9844', '1987-09-24', 'SH_CLERK', '2600.00', '0.00', '124', '50'),
('200', 'Jennifer', 'Whalen', 'JWHALEN', '515.123.4444', '1987-09-25', 'AD_ASST', '4400.00', '0.00', '101', '10'),
('201', 'Michael', 'Hartstein', 'MHARTSTE', '515.123.5555', '1987-09-26', 'MK_MAN', '13000.00', '0.00', '100', '20'),
('202', 'Pat', 'Fay', 'PFAY', '603.123.6666', '1987-09-27', 'MK_REP', '6000.00', '0.00', '201', '20'),
('203', 'Susan', 'Mavris', 'SMAVRIS', '515.123.7777', '1987-09-28', 'HR_REP', '6500.00', '0.00', '101', '40'),
('204', 'Hermann', 'Baer', 'HBAER', '515.123.8888', '1987-09-29', 'PR_REP', '10000.00', '0.00', '101', '70'),
('205', 'Shelley', 'Higgins', 'SHIGGINS', '515.123.8080', '1987-09-30', 'AC_MGR', '12000.00', '0.00', '101', '110'),
('206', 'William', 'Gietz', 'WGIETZ', '515.123.8181', '1987-10-01', 'AC_ACCOUNT', '8300.00', '0.00', '205', '110');


