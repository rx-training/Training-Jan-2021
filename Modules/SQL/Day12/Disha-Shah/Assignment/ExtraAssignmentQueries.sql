USE Day6DB
GO

CREATE TABLE Campus(
	CampusID VARCHAR(5) CONSTRAINT Campus_CampusID_PK PRIMARY KEY,
	CampusName VARCHAR(50),
	Street VARCHAR(50),
	City VARCHAR(50),
	Zip VARCHAR(10),
	Phone VARCHAR(50),
	CampusDiscount DECIMAL(2,2)
)
GO

ALTER TABLE Campus ADD State VARCHAR(50)
GO

CREATE TABLE Positions(
	PositionID VARCHAR(5) CONSTRAINT Positions_PositionID_PK PRIMARY KEY,
	Position VARCHAR(50),
	YearlyMembershipFee DECIMAL(7,2)
)
GO

CREATE TABLE Members(
	MemberID VARCHAR(5) CONSTRAINT Members_MemberID_PK PRIMARY KEY,
	LastName VARCHAR(25),
	FirstName VARCHAR(25),
	CampusAddress VARCHAR(50),
	CampusPhone VARCHAR(50),
	CampusID VARCHAR(5) CONSTRAINT Campus_CampusID_FK FOREIGN KEY REFERENCES Campus(CampusID),
	PositionID VARCHAR(5) CONSTRAINT Positions_PositionID_FK FOREIGN KEY REFERENCES Positions(PositionID),
	ContractDuration DECIMAL(3,0)
)
GO

CREATE TABLE Prices(
	FoodItemTypeID INT CONSTRAINT Prices_FoodItemID_Seq PRIMARY KEY IDENTITY(1,1),
	MealType VARCHAR(50),
	MealPrice DECIMAL(7,2)
)
GO

CREATE TABLE FoodItems(
	FoodItemID VARCHAR(5) CONSTRAINT FoodItems_FoodItemID_PK PRIMARY KEY,
	FoodItemName VARCHAR(50),
	FoodItemTypeID INT CONSTRAINT Prices_FoodItemTypeID_FK FOREIGN KEY REFERENCES Prices(FoodItemTypeID)
)
GO

CREATE TABLE Orders(
	OrderID VARCHAR(5) CONSTRAINT Orders_OrderID_PK PRIMARY KEY,
	MemberID VARCHAR(5) CONSTRAINT Members_MemberID_FK FOREIGN KEY REFERENCES Members(MemberID),
	OrderDate VARCHAR(50)
)
GO

CREATE TABLE OrderLine(
	OrderID VARCHAR(5) CONSTRAINT Orders_OrderID_FK FOREIGN KEY REFERENCES Orders(OrderID),
	FoodItemsID VARCHAR(5) CONSTRAINT FoodItems_FoodItemID_FK FOREIGN KEY REFERENCES FoodItems(FoodItemID),
	Quantity DECIMAL(3,0),
	CONSTRAINT OrderLine_OrderID_FoodItemsID_PK PRIMARY KEY(OrderID, FoodItemsID)
)
GO

INSERT INTO Campus VALUES('1','IUPUI','425 University Blvd.','Indianapolis','46202', '317-274-4591',.08, 'IN'),
						 ('2','Indiana University','107 S. Indiana Ave.','Bloomington','47405', '812-855-4848',.07, 'IN'),
						 ('3','Purdue University','475 Stadium Mall Drive','West Lafayette','47907', '765-494-1776',.06, 'IN')
GO

INSERT INTO Positions VALUES('1','Lecturer', 1050.50),
							('2','Associate Professor', 900.50),
							('3','Assistant Professor', 875.50),
							('4','Professor', 700.75),
							('5','Full Professor', 500.50)
GO

INSERT INTO Members VALUES ('1','Ellen','Monk','009 Purnell', '812-123-1234', '2', '5', 12),
							('2','Joe','Brady','008 Statford Hall', '765-234-2345', '3', '2', 10),
							('3','Dave','Davidson','007 Purnell', '812-345-3456', '2', '3', 10),
							('4','Sebastian','Cole','210 Rutherford Hall', '765-234-2345', '3', '5', 10),
							('5','Michael','Doo','66C Peobody', '812-548-8956', '2', '1', 10),
							('6','Jerome','Clark','SL 220', '317-274-9766', '1', '1', 12),
							('7','Bob','House','ET 329', '317-278-9098', '1', '4', 10),
							('8','Bridget','Stanley','SI 234', '317-274-5678', '1', '1', 12),
							('9','Bradley','Wilson','334 Statford Hall', '765-258-2567', '3', '2', 10)
GO

INSERT INTO Prices VALUES ('Beer/Wine', 5.50),
							('Dessert', 2.75),
							('Dinner', 15.50),
							('Soft Drink', 2.50),
							('Lunch', 7.25)
GO

INSERT INTO FoodItems VALUES ('10001','Lager', '1'),
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
							('10015','Cobb Salad', '5')
GO							
							

INSERT INTO Orders VALUES ('1', '9', 'March 5, 2015'),
							('2', '8', 'March 5, 2015'),
							('3', '7', 'March 5, 2015'),
							('4', '6', 'March 7, 2015'),
							('5', '5', 'March 7, 2015'),
							('6', '4', 'March 10, 2015'),
							('7', '3', 'March 11, 2015'),
							('8', '2', 'March 12, 2015'),
							('9', '1', 'March 13, 2015')
GO

INSERT INTO OrderLine VALUES ('1','10001',1),
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
							('9','10001',1)
GO
							

SELECT * FROM Campus
SELECT * FROM Positions
SELECT * FROM Members
SELECT * FROM Prices
SELECT * FROM FoodItems
SELECT * FROM Orders
SELECT * FROM OrderLine
GO


/*Q 1.Create a listing of all Faculty Members (First and Last), their Faculty Position and the University that they are 
affiliated with (Name), along with their Monthly_Dues (Calculated Field with a column alias). Sort the records in descending order 
by University and then by Faculty's last name in ascending order. 
Ans.*/
CREATE PROCEDURE prcFacultyInfo
AS
SET NOCOUNT ON;
BEGIN
SELECT m.FirstName, m.LastName, p.Position, c.CampusName, (p.YearlyMembershipFee/12)*(m.ContractDuration)*(c.CampusDiscount) AS 'Monthly Dues'
FROM Positions AS p JOIN Members AS m
ON p.PositionID=m.PositionID JOIN Campus AS c
ON m.CampusID=c.CampusID
ORDER BY c.CampusName DESC, m.LastName
END

EXECUTE prcFacultyInfo;
GO

/*Q 2.Create a listing that shows the various food items that the faculty club serves (Name of the food item, type of food item and the
price of the food item). Note: List no alcoholic beverages. Sort the records in ascending order by price.
Ans.*/
CREATE PROCEDURE prcFoodItemList @Beverage VARCHAR(50)
AS
SET NOCOUNT ON;
BEGIN
SELECT f.FoodItemName, p.MealType, p.MealPrice 
FROM Prices AS p JOIN FoodItems AS f
ON p.FoodItemTypeID=f.FoodItemTypeID
WHERE p.MealType != @Beverage
ORDER BY p.MealPrice
END

EXECUTE prcFoodItemList 'Beer/Wine';
GO

/*Q 3.List the OrderID, Order Date, Faculty Member's Name, Campus Name, each FoodItem that makes up a given order, the type of meal, 
cost of the meal, quantity ordered and the total line total (calculated field and column alias). Sort by Order IDs in descending order.
Ans.*/
CREATE PROCEDURE prcOrderInfo
AS
SET NOCOUNT ON;
BEGIN
SELECT o.OrderID, o.OrderDate, m.FirstName+' '+m.LastName AS 'Name', c.CampusName, f.FoodItemName, p.MealType, p.MealPrice, ol.Quantity
	, p.MealPrice*ol.Quantity AS 'Total'
FROM Campus AS c JOIN Members AS m
ON c.CampusID=m.CampusID JOIN Orders AS o
ON m.MemberID = o.MemberID JOIN OrderLine AS ol
ON o.OrderID = ol.OrderID JOIN FoodItems AS f
ON ol.FoodItemsID=f.FoodItemID JOIN Prices AS p
ON f.FoodItemTypeID=p.FoodItemTypeID
ORDER BY o.OrderID DESC
END

EXECUTE prcOrderInfo;
GO