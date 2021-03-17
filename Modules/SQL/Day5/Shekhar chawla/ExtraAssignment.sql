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


