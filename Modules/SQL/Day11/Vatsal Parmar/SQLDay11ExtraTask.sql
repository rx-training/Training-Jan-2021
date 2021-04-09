/*** SQL Day11 Extra ***/

CREATE TABLE Campus(
  CampusID VARCHAR(5) NOT NULL CONSTRAINT Campus_CampusID_PK PRIMARY KEY
, CampusName VARCHAR(20) NOT NULL
, Street VARCHAR(50) NOT NULL
, City VARCHAR(20) NOT NULL
, [State] VARCHAR(20) NOT NULL
, Zip INT NOT NULL
, Phone VARCHAR(20) NOT NULL
, CampusDiscount DECIMAL(2,2) NOT NULL
)
GO

CREATE TABLE Position (
  PositionID VARCHAR(5) NOT NULL CONSTRAINT Position_PositionID_PK PRIMARY KEY
, Position VARCHAR(20) NOT NULL
, YearlyMembershipFee DECIMAL(7,2) NOT NULL
)
GO

CREATE TABLE Members (
  MemberID VARCHAR(5) NOT NULL CONSTRAINT Members_MemberID_PK PRIMARY KEY
, LastName VARCHAR(20) NOT NULL
, FirstName VARCHAR(20) NOT NULL
, CampusAddress VARCHAR(50) NOT NULL
, CampusPhone VARCHAR(20) NOT NULL
, CampusID VARCHAR(5) NOT NULL CONSTRAINT Members_CampusID_FK FOREIGN KEY REFERENCES Campus
, PositionID VARCHAR(5) NOT NULL CONSTRAINT Members_PositionID_FK FOREIGN KEY REFERENCES Position
, ContractDuration DECIMAL(3,0) NOT NULL
)
GO

CREATE TABLE Prices (
  FoodItemTypeID INT NOT NULL CONSTRAINT Prices_FoodItemTypeID_PK PRIMARY KEY IDENTITY
, MealType VARCHAR(20) NOT NULL
, MealPrice DECIMAL(7,2) NOT NULL
)
GO

CREATE TABLE FoodItems (
  FoodItemID VARCHAR(5) NOT NULL CONSTRAINT FoodItems_FoodItemID_PK PRIMARY KEY
, FoodItemName VARCHAR(29) NOT NULL
, FoodItemTypeID INT NOT NULL CONSTRAINT FoodItems_FoodItemTypeID_FK FOREIGN KEY REFERENCES Prices
)
GO

CREATE TABLE Orders (
  OrderID VARCHAR(5) NOT NULL CONSTRAINT Orders_OrderID_PK PRIMARY KEY
, MemberID VARCHAR(5) NOT NULL CONSTRAINT Orders_MemberID_FK FOREIGN KEY REFERENCES Members
, OrderDate DATE NOT NULL
)
GO

CREATE TABLE OrderLine (
  OrderID VARCHAR(5) NOT NULL CONSTRAINT OrderLine_OrderID_FK FOREIGN KEY REFERENCES Orders
, FoodItemsID VARCHAR(5) NOT NULL CONSTRAINT OrderLine_FoodItemsID_FK FOREIGN KEY REFERENCES FoodItems
, Quantity DECIMAL(3,0) NOT NULL
, CONSTRAINT OrderLine_OrderID_FoodItems_PK PRIMARY KEY(OrderID,FoodItemsID),
)
GO

/*
CREATE SEQUENCE Prices_FoodItemID_Seq
START WITH 1  
INCREMENT BY 1
GO

DROP SEQUENCE Prices_FoodItemID_Seq
GO
*/

-- Campus Data
INSERT INTO Campus VALUES
('1','IUPUI','425 University Blvd.','Indianapolis', 'IN','46202', '317-274-4591',.08),
('2','Indiana University','107 S. Indiana Ave.','Bloomington', 'IN','47405', '812-855-4848',.07),
('3','Purdue University','475 Stadium Mall Drive','West Lafayette', 'IN','47907', '765-494-1776',.06);
GO
-- Position Data
INSERT INTO Position VALUES
('1','Lecturer', 1050.50),
('2','Associate Professor', 900.50),
('3','Assistant Professor', 875.50),
('4','Professor', 700.75),
('5','Full Professor', 500.50);
GO
-- Members Data
INSERT INTO Members VALUES
('1','Ellen','Monk','009 Purnell', '812-123-1234', '2', '5', 12),
('2','Joe','Brady','008 Statford Hall', '765-234-2345', '3', '2', 10),
('3','Dave','Davidson','007 Purnell', '812-345-3456', '2', '3', 10),
('4','Sebastian','Cole','210 Rutherford Hall', '765-234-2345', '3', '5', 10),
('5','Michael','Doo','66C Peobody', '812-548-8956', '2', '1', 10),
('6','Jerome','Clark','SL 220', '317-274-9766', '1', '1', 12),
('7','Bob','House','ET 329', '317-278-9098', '1', '4', 10),
('8','Bridget','Stanley','SI 234', '317-274-5678', '1', '1', 12),
('9','Bradley','Wilson','334 Statford Hall', '765-258-2567', '3', '2', 10);
GO
-- Prices Data
INSERT INTO Prices VALUES
('Beer/Wine', 5.50),
('Dessert', 2.75),
('Dinner', 15.50),
('Soft Drink', 2.50),
('Lunch', 7.25);
GO
-- FoodItems Data
INSERT INTO FoodItems VALUES
('10001','Lager', '1'),
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
GO
-- Orders Data
INSERT INTO Orders VALUES
('1', '9', 'March 5, 2015'),
('2', '8', 'March 5, 2015'),
('3', '7', 'March 5, 2015'),
('4', '6', 'March 7, 2015'),
('5', '5', 'March 7, 2015'),
('6', '4', 'March 10, 2015'),
('7', '3', 'March 11, 2015'),
('8', '2', 'March 12, 2015'),
('9', '1', 'March 13, 2015');
GO
-- OrderLine Data
INSERT INTO OrderLine VALUES
('1','10001',1),
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
GO
/* 1 - Create a listing of all Faculty Members (First and Last), their Faculty Position and the University that they
are affiliated with (Name), along with their Monthly_Dues (Calculated Field with a column alias). 
Sort the records in descending order by University and then by Faculty's last name in ascending order. */

CREATE PROCEDURE uspFacultyMembers
AS
	SET NOCOUNT ON
	SELECT m.FirstName + ' ' + m.LastName 'Name',p.Position,c.CampusName,m.ContractDuration * p.YearlyMembershipFee 'Monthly_Dues'
	FROM Members m
	JOIN Position p ON m.PositionID = p.PositionID
	JOIN Campus c ON m.CampusID = c.CampusID
	ORDER BY c.CampusName DESC,m.LastName ASC
	RETURN 0
	SET NOCOUNT OFF
GO

EXECUTE uspFacultyMembers
GO

DROP PROCEDURE uspFacultyMembers
GO

/* 2 - Create a listing that shows the various food items that the faculty club serves 
(Name of the food item, type of food item and the price of the food item). Note: List no alcoholic beverages.
Sort the records in ascending order by price.  */

CREATE PROCEDURE uspFoodItems
	@MealType VARCHAR(20)
AS
	SET NOCOUNT ON
	SELECT f.FoodItemName,p.MealType,p.MealPrice FROM FoodItems f
	JOIN Prices p ON f.FoodItemTypeID=p.FoodItemTypeID WHERE p.MealType != @MealType 
	ORDER BY p.MealPrice ASC
	SET NOCOUNT OFF
GO

EXECUTE uspFoodItems 'Beer/Wine'
GO

DROP PROCEDURE uspFoodItems
GO

/* 3 - List the OrderID, Order Date, Faculty Member's Name, Campus Name, each FoodItem that makes up a given order,
the type of meal, cost of the meal, quantity ordered and the total line total (calculated field and column alias).
Sort by Order IDs in descending order.*/

CREATE PROCEDURE uspOrderTotal
AS
	SET NOCOUNT ON
	SELECT o.OrderID,o.OrderDate,m.FirstName + ' ' + m.LastName 'Name',
		c.CampusName,f.FoodItemName,p.MealType,p.MealPrice,ol.Quantity,ol.Quantity*p.MealPrice 'Total Price'
	FROM Orders o
	JOIN Members m ON o.MemberID=m.MemberID
	JOIN Campus c ON m.CampusID = c.CampusID
	JOIN OrderLine ol ON o.OrderID = ol.OrderID
	JOIN FoodItems f ON ol.FoodItemsID = f.FoodItemID
	JOIN Prices p ON f.FoodItemTypeID = p.FoodItemTypeID
	ORDER BY o.OrderID DESC
	SET NOCOUNT OFF
GO

EXECUTE uspOrderTotal
GO

DROP PROCEDURE uspOrderTotal
GO
