CREATE TABLE dbo.Campus(
	CampusID int NOT NULL IDENTITY,
	CampusName varchar(50) NOT NULL,
	Street varchar(50) NOT NULL,
	City varchar(50) NOT NULL,
	State varchar(50) NOT NULL,
	Zip varchar(10) NOT NULL,
	Phone varchar(50) NOT NULL,
	CampusDiscount float NOT NULL,
	CONSTRAINT [Campus_CampusID_PK] PRIMARY KEY CLUSTERED (CampusID)
);

CREATE TABLE dbo.Position (
	PositionID int IDENTITY,
	Position varchar(50) NOT NULL,
	YearlyMembershipFee float NOT NULL,
	CONSTRAINT [Positions_PositionID_PK] PRIMARY KEY CLUSTERED (PositionID)
);

CREATE TABLE dbo.Members(
	MemberID int NOT NULL IDENTITY,
	FirstName varchar(50) NOT NULL,
	LastName varchar(50) NOT NULL,
	CampusAddress varchar(50) NOT NULL,
	CampusPhone varchar(50) NOT NULL,
	CampusID int NOT NULL,
	PositionID int NOT NULL,
	ContractDuration float NOT NULL,
	CONSTRAINT [Members_MemberID_PK] PRIMARY KEY CLUSTERED (MemberID),
	CONSTRAINT fk_CampusID FOREIGN KEY (CampusID) REFERENCES Campus (CampusID),
	CONSTRAINT fk_PositionID FOREIGN KEY (PositionID) REFERENCES Position (PositionID)
);

CREATE TABLE dbo.Prices (
	FoodItemTypeID int IDENTITY,
	MealType varchar(50) NOT NULL,
	MealPrice float NOT NULL,
	CONSTRAINT [Prices_FoodItemTypeID_PK] PRIMARY KEY CLUSTERED (FoodItemTypeID)
);

CREATE TABLE dbo.FoodItems (
	FoodItemID int,
	FoodItemName varchar(50) NOT NULL,
	FoodItemTypeID int NOT NULL,
	CONSTRAINT [FoodItems_FoodItemID_PK] PRIMARY KEY CLUSTERED (FoodItemID),
	CONSTRAINT fk_FoodItemTypeID FOREIGN KEY (FoodItemTypeID) REFERENCES Prices (FoodItemTypeID)

);

CREATE TABLE dbo.Orders (
	OrderID int IDENTITY,
	MemberID int NOT NULL,
	OrderDate date NOT NULL,
	CONSTRAINT [Orders_OrderID_PK] PRIMARY KEY CLUSTERED (OrderID),
	CONSTRAINT fk_MemberID FOREIGN KEY (MemberID) REFERENCES Members (MemberID)
);

CREATE TABLE dbo.OrderLine (
	OrderID int NOT NULL,
	FoodItemID int NOT NULL,
	Quantity int NOT NULL,
	CONSTRAINT [OrderLine_OrderID_FoodItemID_PK] PRIMARY KEY CLUSTERED (OrderID, FoodItemID),
	CONSTRAINT fk_FoodItemID FOREIGN KEY (FoodItemID) REFERENCES FoodItems (FoodItemID),
	CONSTRAINT fk_OrderID FOREIGN KEY (OrderID) REFERENCES Orders (OrderID),
);

--DROP TABLE OrderLine
--DROP TABLE Orders
--DROP TABLE FoodItems
--DROP TABLE Prices
--DROP TABLE Members
--DROP TABLE Position
--DROP TABLE Campus

INSERT INTO dbo.Campus VALUES ('IUPUI','425 University Blvd.','Indianapolis', 'IN','46202', '317-274-4591',.08),
('Indiana University','107 S. Indiana Ave.','Bloomington', 'IN','47405', '812-855-4848',.07),
('Purdue University','475 Stadium Mall Drive','West Lafayette', 'IN','47907', '765-494-1776',.06);

INSERT INTO dbo.Position VALUES ('Lecturer', 1050.50),
('Associate Professor', 900.50),
('Assistant Professor', 875.50),
('Professor', 700.75),
('Full Professor', 500.50);

INSERT INTO dbo.Members VALUES ('Ellen','Monk','009 Purnell', '812-123-1234', '2', '5', 12),
('Joe','Brady','008 Statford Hall', '765-234-2345', '3', '2', 10),
('Dave','Davidson','007 Purnell', '812-345-3456', '2', '3', 10),
('Sebastian','Cole','210 Rutherford Hall', '765-234-2345', '3', '5', 10),
('Michael','Doo','66C Peobody', '812-548-8956', '2', '1', 10),
('Jerome','Clark','SL 220', '317-274-9766', '1', '1', 12),
('Bob','House','ET 329', '317-278-9098', '1', '4', 10),
('Bridget','Stanley','SI 234', '317-274-5678', '1', '1', 12),
('Bradley','Wilson','334 Statford Hall', '765-258-2567', '3', '2', 10);

INSERT INTO dbo.Prices VALUES ('Beer/Wine', 5.50),
('Dessert', 2.75),
('Dinner', 15.50 ),
('Soft Drink', 2.50 ),
('Lunch', 7.25);

INSERT INTO dbo.FoodItems VALUES ('10001','Lager', '1'),
('10002','Red Wine', '1'),
('10003','White Wine', '1'),
('10004','Coke', '4'),
('10005','Coffee', '4'),
('10006','Chicken a la King', '3'),
('10007','Rib Steak', '3'),
('10008','Fish and Chips', '3'),
('10009','Veggie Delight', '3'),
('10010','Chocolate Mousse', '2'),
('10011','Carrot Cake', '2'),
('10012','Fruit Cup', '2'),
('10013','Fish and Chips', '5'),
('10014','Angus Beef Burger', '5'),
('10015','Cobb Salad', '5');

INSERT INTO dbo.Orders VALUES ('9', '2015-03-05'),
('8', '2015-03-05'),
('7', '2015-03-05'),
('6', '2015-03-07'),
('5', '2015-03-07'),
('4', '2015-03-10'),
('3', '2015-03-11'),
('2', '2015-03-12'),
('1', '2015-03-13');

INSERT INTO dbo.OrderLine VALUES ('1','10001',1),
('1','10006',1),
('1','10012',1),
('2','10004',2),
('2','10013',1),
('2','10014',1),
('3','10005',1),
('3','10011',1),
('4','10005',2),
('4','10004',2),
('4','10006',1),
('4','10007',1),
('4','10010',2),
('5','10003',1),
('6','10002',2),
('7','10005',2),
('8','10005',1),
('8','10011',1),
('9','10001',1);