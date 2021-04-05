CREATE DATABASE redbus
USE redbus

CREATE TABLE Cities
(
	CityID INT CONSTRAINT pkCities PRIMARY KEY IDENTITY(1,1),
	CityName VARCHAR(20),
	State VARCHAR(20),
	Latitude FLOAT,
	Longitude FLOAT
)

CREATE TABLE Users
(
	UserID INT CONSTRAINT pkUsers PRIMARY KEY IDENTITY(1,1),
	FirstName VARCHAR(30) NOT NULL,
	LastName VARCHAR(30) NOT NULL,
	Email VARCHAR(30) NOT NULL,
	Gender VARCHAR(2) NOT NULL,
	DOB DATE,
	Password VARCHAR(30),
	PhoneNumber VARCHAR(10),
	City INT CONSTRAINT fk_CityID_Users_Cities FOREIGN KEY REFERENCES Cities(CityID),
	SignupDateTime DATETIME
)

CREATE TABLE Operators
(
	OperatorID INT CONSTRAINT pkOperators PRIMARY KEY IDENTITY(1,1),
	FirstName VARCHAR(30) NOT NULL,
	LastName VARCHAR(30) NOT NULL,
	Email VARCHAR(30) NOT NULL,
	Gender VARCHAR(2) NOT NULL,
	DOB DATE,
	CompanyName VARCHAR(30) NOT NULL,
	Address VARCHAR(50) NOT NULL,
	Password VARCHAR(30) NOT NULL,
	CollaborationDate DATE,
	PhoneNumber VARCHAR(10),
	City INT CONSTRAINT fk_City_Operators_Cities FOREIGN KEY REFERENCES Cities(CityID),
)

CREATE TABLE Buses
(
	BusNumber VARCHAR(10) CONSTRAINT pkBuses PRIMARY KEY, 
	OperatorId INT NOT NULL CONSTRAINT fk_OperatorId_Buses_Operators FOREIGN KEY REFERENCES Operators(OperatorID),
	BusName VARCHAR(30),
	BusType VARCHAR(30),
	BusReleasesate DATE,
	TotalSleeperseat TINYINT,
	TotalSeaterSeat TINYINT,
	TotalSemiSleeperSeat TINYINT,
	ActiveStatus SMALLINT CONSTRAINT ck_ActiveStatus_Buses CHECK(ActiveStatus IN(0,1)), DEFAULT 1,
	Rating DECIMAL(3,1) DEFAULT 3.5,
	CONSTRAINT ck_BusNumber_Buses CHECK(BusNumber LIKE('[A-Z][A-Z][0-9][0-9][A-Z][A-Z][0-9][0-9][0-9][0-9]'))
)
CREATE TABLE MainRoute
(
	RouteID INT CONSTRAINT pkMainRoute PRIMARY KEY IDENTITY(1,1),
	BusNumber VARCHAR(10) CONSTRAINT fk_BusNumber_MainRoute_Buses FOREIGN KEY REFERENCES Buses(BusNumber),
	FromCity INT CONSTRAINT fk_FromCity_MainRoute_Cities FOREIGN KEY REFERENCES Cities(CityID),
 	ToCity INT CONSTRAINT fk_ToCity_MainRoute_Cities FOREIGN KEY REFERENCES Cities(CityID),
	FromTime TIME,
	ToTime TIME,
	ActiveStatus SMALLINT CONSTRAINT ck_ActiveStatus_MainRoute CHECK(ActiveStatus IN(0,1)), DEFAULT 1
)

CREATE TABLE Trip
(
	TripID INT CONSTRAINT pkTrip PRIMARY KEY IDENTITY(1,1),
	FromCity INT CONSTRAINT fk_FromCity_Trip_Cities FOREIGN KEY REFERENCES Cities(CityID),
	ToCity INT CONSTRAINT fk_ToCity_Trip_Cities FOREIGN KEY REFERENCES Cities(CityID),
	UserID INT CONSTRAINT fk_UserID_Trip_Users FOREIGN KEY REFERENCES Users(UserID),
	BusNumber VARCHAR(10) CONSTRAINT fk_BusNumber_Trip_Buses FOREIGN KEY REFERENCES Buses(BusNumber),
	BookIngDate DATE,
	TripDate DATE,
	TripStatus VARCHAR(20),
	FarePrice INT,
	TotalSeat TINYINT,  
	SeatNo VARCHAR(30)
)
CREATE TABLE LoginStatus
(
	UserID INT CONSTRAINT fk_UserID_LoginStatus_Users FOREIGN KEY REFERENCES Users(UserID),
	LoginDateTime DATETIME,
	LogoutDateTime DATETIME DEFAULT NULL
)
CREATE TABLE SubRoutes
(
	RouteId INT CONSTRAINT fk_RouteId_SubRoutes_MainRoute FOREIGN KEY REFERENCES MainRoute(RouteId),
	CityId INT CONSTRAINT fk_CityId_SubRoutes_Cities FOREIGN KEY REFERENCES Cities(CityID),
	DistanceFromStartCity INT,
	ArivalTime TIME 
)

INSERT INTO Cities VALUES
	('ahmedabad','gujrat',23.0225, 72.5714),
	('rajkot','gujrat',22.3039, 70.8022),
	('surat','gujrat',21.1702, 72.8311),
	('vadodara','gujrat',22.3072, 73.1812),
	('bhavnagar','gujrat',21.7645, 72.1519),
	('porbandar','gujrat',21.6417, 69.6293),
	('junagadh','gujrat',21.5222,70.4579),
	('veraval','gujrat',20.9159,70.3629),
	('jetpur','gujrat',21.7547,70.6180),
	('gondal','gujrat',21.9612,70.7939),
	('mendarda','gujrat',21.3206,70.4417),
	('keshod','gujrat',21.2997,70.2493),
	('nadiyad','gujrat',22.6916,72.8634),
	('bharuch','gujrat',21.7051,72.9959)


INSERT INTO Users VALUES
	('mohit','shah','mohitshah@gmail.com','m','02-04-2000','pass','2345678921',3, GETDATE()),
	('hina','khah','hinakhah@gmail.com','f','12-10-1998','pass','2345678921',4, GETDATE()),
	('rahul','dev','rahuldev@gmail.com','m','02-04-2000','pass','2345678921',5, GETDATE()),
	('bharat','naik','bharatnaik@gmail.com','m','02-04-2000','pass','2345678921',4, GETDATE()),
	('sundar','jatt','sundatjatt@gmail.com','m','02-04-2000','pass','2345678921',6, GETDATE()),
	('virat','kohli','viratkohli@gmail.com','m','02-04-2000','pass','2345678921',3, GETDATE()),
	('mohini','kumar','mohinikumar@gmail.com','f','02-04-2000','pass','2345678921',6, GETDATE())

INSERT INTO Operators VALUES 
	('rahul','chuhan','rahulchauhan@gmmail.com','m','12-10-1998','patel travels','xyz','pass','12-10-2019','7654329876',2),
	('virat','patel','viratpatel@gmmail.com','m','05-14-1997','shreehari travels','xyz','pass','07-21-2018','3454329876',1),
	('dhrumil','joshi','dhrumiljoshi@gmmail.com','m','01-12-1989','swaminarayan travels','xyz','pass','12-03-2015','3454329876',1),
	('disha','vekariya','dineshvekariya@gmmail.com','f','05-23-1992','pavan travels','xyz','pass','04-12-2018','3454329876',1),
	('rudra','shah','rudrashah@gmmail.com','m','01-14-1994','neeta travels','xyz','pass','07-14-2014','3454329876',1)

INSERT INTO Buses VALUES 
	('GJ01MH3737',1,'patel travels','non ac sleeper(2x1)','04-04-2017',30,0,0,1,DEFAULT),
	('GJ01RE9009',1,'patel tours & travels','ac seater(2x1)','05-22-2018',0,0,45,1,DEFAULT),
	('GJ01GY4556',2,'shreehari travels','ac sleeper(2x1)','11-23-2017',30,0,0,1,DEFAULT),
	('GJ01TY8776',2,'shreehari travels','non ac sleeper(2x1)','02-01-2020',30,0,0,1,DEFAULT),
	('GJ01HY7654',4,'pavaan travels','non ac sleeper(2x1)','07-04-2016',30,3,0,1,DEFAULT)

	
SELECT dbo.CalculateTime('23:59:00',dbo.Distance(4,2)),dbo.Distance(4,2)

INSERT INTO MainRoute VALUES 
	('GJ01HY7654',1,4,'10:00:00','12:02:00',1),
	('GJ01MH3737',1,5,'22:00:00','00:56:00',1),
	('GJ01MH3737',6,1,'06:45:00','13:31:00',0),
	('GJ01TY8776',4,2,'23:59:00','04:53:00',1)


INSERT INTO Trip VALUES 
	(1,4,2,'GJ01HY7654','12-10-2020','12-10-2020','confirm',600,2,'3,4'),
	(1,5,3,'GJ01MH3737','01-01-2021','02-01-2021','ongoing',450,1,'5'),
	(6,1,1,'GJ01MH3737','03-12-2020','03-12-2020','canceled',1350,3,'9,10')





SELECT * FROM Users
SELECT * FROM Buses	
SELECT * FROM Operators		
SELECT * FROM Cities
SELECT * FROM MainRoute	
SELECT * FROM SubRoutes
SELECT * FROM Trip	
SELECT * FROM LoginStatus
go 
