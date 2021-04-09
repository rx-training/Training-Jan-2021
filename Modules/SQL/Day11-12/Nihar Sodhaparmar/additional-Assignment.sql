USE [Day11-12];

CREATE TABLE Campus 
(
	CampusID INT CONSTRAINT pkCampus PRIMARY KEY NOT NULL, 
	CampusName VARCHAR(50) NOT NULL, 
	Street VARCHAR(100) NOT NULL, 
	City VARCHAR(50) NOT NULL, 
	State VARCHAR(50) NOT NULL, 
	Zip VARCHAR(10) NOT NULL, 
	Phone VARCHAR(20) NOT NULL, 
	CampusDiscount TINYINT NOT NULL
)


INSERT INTO Campus (CampusID, CampusName, Street, City, State, Zip, Phone, CampusDiscount) VALUES
	('1','IUPUI','425 University Blvd.','Indianapolis', 'IN','46202', '317-274-4591',.08),
	('2','Indiana University','107 S. Indiana Ave.','Bloomington', 'IN','47405', '812-855-4848',.07),
	('3','Purdue University','475 Stadium Mall Drive','West Lafayette', 'IN','47907', '765-494-1776',.06);

SELECT * FROM Campus;

----------------------------------------------------------------------------------------------------------------

CREATE TABLE Position 
(
	PositionID INT CONSTRAINT pkPosition PRIMARY KEY NOT NULL, 
	Position VARCHAR(50) NOT NULL, 
	YearlyMembershipFee MONEY NOT NULL
);

INSERT INTO Position (PositionID, Position, YearlyMembershipFee) VALUES
	('1','Lecturer', 1050.50),
	('2','Associate Professor', 900.50),
	('3','Assistant Professor', 875.50),
	('4','Professor', 700.75),
	('5','Full Professor', 500.50);

SELECT * FROM Position;

----------------------------------------------------------------------------------------------------------------

CREATE TABLE Members 
(
	MemberID INT CONSTRAINT pkMembers PRIMARY KEY NOT NULL, 
	LastName VARCHAR(50) NOT NULL, 
	FirstName VARCHAR(50) NOT NULL, 
	CampusAddress VARCHAR(255) NOT NULL, 
	CampusPhone VARCHAR(20) NOT NULL, 
	CampusID INT CONSTRAINT fkCampusIDMembers FOREIGN KEY REFERENCES Campus(CampusID), 
	PositionID INT CONSTRAINT fkPositionIDMembers FOREIGN KEY REFERENCES Position(PositionID), 
	ContractDuration TINYINT
)

INSERT INTO Members (MemberID, LastName, FirstName, CampusAddress, CampusPhone, CampusID, PositionID, ContractDuration) VALUES
	('1','Ellen','Monk','009 Purnell', '812-123-1234', '2', '5', 12),
	('2','Joe','Brady','008 Statford Hall', '765-234-2345', '3', '2', 10),
	('3','Dave','Davidson','007 Purnell', '812-345-3456', '2', '3', 10),
	('4','Sebastian','Cole','210 Rutherford Hall', '765-234-2345', '3', '5', 10),
	('5','Michael','Doo','66C Peobody', '812-548-8956', '2', '1', 10),
	('6','Jerome','Clark','SL 220', '317-274-9766', '1', '1', 12),
	('7','Bob','House','ET 329', '317-278-9098', '1', '4', 10),
	('8','Bridget','Stanley','SI 234', '317-274-5678', '1', '1', 12),
	('9','Bradley','Wilson','334 Statford Hall', '765-258-2567', '3', '2', 10);

SELECT * FROM Members;

----------------------------------------------------------------------------------------------------------------

CREATE TABLE Prices 
(
	FoodItemTypeID INT CONSTRAINT pkPrices PRIMARY KEY NOT NULL, 
	MealType VARCHAR(50) NOT NULL, 
	MealPrice MONEY NOT NULL
);

INSERT INTO Prices (FoodItemTypeID, MealType, MealPrice) VALUES
	('1','Beer/Wine', 5.50),
	('2','Dessert', 2.75),
	('3','Dinner', 15.50), 
	('4','Soft Drink', 2.50), 
	('5','Lunch', 7.25);

SELECT * FROM Prices;

----------------------------------------------------------------------------------------------------------------

CREATE TABLE FoodItems 
(	
	FoodItemID INT CONSTRAINT pkFoodItems PRIMARY KEY NOT NULL, 
	FoodItemName VARCHAR(50) NOT NULL, 
	FoodItemTypeID INT CONSTRAINT fkFoodItemTypeIDFoodItems FOREIGN KEY REFERENCES Prices(FoodItemTypeID) NOT NULL
)

INSERT INTO FoodItems (FoodItemID, FoodItemName, FoodItemTypeID) VALUES
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

SELECT * FROM FoodItems;

----------------------------------------------------------------------------------------------------------------

CREATE TABLE Orders 
(
	OrderID INT CONSTRAINT pkOrders PRIMARY KEY NOT NULL, 
	MemberID INT CONSTRAINT fkMemberIDOrders FOREIGN KEY REFERENCES Members(MemberID) NOT NULL, 
	OrderDate DATE NOT NULL
);

INSERT INTO Orders (OrderID, MemberID, OrderDate) VALUES
	('1', '9', 'March 5, 2015'),
	('2', '8', 'March 5, 2015'),
	('3', '7', 'March 5, 2015'),
	('4', '6', 'March 7, 2015'),
	('5', '5', 'March 7, 2015'),
	('6', '4', 'March 10, 2015'),
	('7', '3', 'March 11, 2015'),
	('8', '2', 'March 12, 2015'),
	('9', '1', 'March 13, 2015'),
	('10', '1', 'April 13, 2015');

SELECT * FROM Orders;


----------------------------------------------------------------------------------------------------------------
CREATE TABLE OrderLine 
(
	OrderID INT CONSTRAINT fkOrderIDOrderLine FOREIGN KEY REFERENCES Orders(OrderID), 
	FoodItemsID INT CONSTRAINT fkFoodItemsIDOrderLine FOREIGN KEY REFERENCES FoodItems(FoodItemID), 
	Quantity SMALLINT
)


INSERT INTO OrderLine (OrderID, FoodItemsID, Quantity) VALUES
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
	('9','10001',1),
	('10','10001',1),
	('10','10006',1),
	('10','10012',1);

SELECT * FROM OrderLine;

/*	Create a listing of all Faculty Members (First and Last), their Faculty Position and the University that they are affiliated 
	with (Name), along with their Monthly_Dues (Calculated Field with a column alias). Sort the records in descending order 
	by University and then by Faculty's last name in ascending order. */

	-- Created procedure which takes memberId and month as input and gives output as above columns
	CREATE PROCEDURE AdditionalProcedure1
		@memberId INT,
		@month TINYINT
	AS
	BEGIN
		SELECT m.FirstName + ' ' + m.LastName [Name]
			, po.Position
			, C.CampusName 
			, DATEPART(MM, o.OrderDate) [Month]
			, SUM(ol.Quantity * p.MealPrice) AS Monthly_Due
		FROM Members m
			JOIN Orders o ON m.MemberID = o.MemberID
			JOIN OrderLine ol ON o.OrderID = ol.OrderID
			JOIN FoodItems fi ON fi.FoodItemID = ol.FoodItemsID
			JOIN Prices p ON fi.FoodItemTypeID = p.FoodItemTypeID
			JOIN Position po ON po.PositionID = m.PositionID
			JOIN Campus c ON c.CampusID = m.CampusID
		WHERE m.MemberID = @memberId AND DATEPART(MM, o.OrderDate) = @month
		GROUP BY o.OrderID
			, m.FirstName
			, m.LastName
			, po.Position
			, c.CampusName
			, DATEPART(MM, o.OrderDate)
		ORDER BY c.CampusName DESC
			, m.LastName ASC;
	END

	EXECUTE AdditionalProcedure1 2, 3;



/*	Create a listing that shows the various food items that the faculty club serves (Name of the food item, 
	type of food item and the price of the food item). Note: List no alcoholic beverages. 
	Sort the records in ascending order by price. */

	-- Created Procedure for the same
	CREATE PROCEDURE AdditionalProdecure2
	AS
	BEGIN
		SELECT DISTINCT fi.FoodItemName, p.MealType, p.MealPrice
				FROM OrderLine ol
					JOIN FoodItems fi ON ol.FoodItemsID = fi.FoodItemID
					JOIN Prices p ON p.FoodItemTypeID = fi.FoodItemTypeID
				WHERE fi.FoodItemName NOT IN ('Red Wine', 'White Wine', 'Lager')
	END

	EXEC AdditionalProdecure2;
	


/*	List the OrderID, Order Date, Faculty Member's Name, Campus Name, each FoodItem that makes up a given order, the type of meal,
	cost of the meal, quantity ordered and the total line total (calculated field and column alias). 
	Sort by Order IDs in descending order. */

	-- Created Procedure to take input as an OrderId and will give output for same column as above for given OrderId
	CREATE PROCEDURE AdditionalProdecure3
		@orderId INT
	AS
	BEGIN
		SELECT o.OrderID
			, o.OrderDate
			, m.FirstName + ' ' + m.LastName AS [Name]
			, C.CampusName
			, po.Position
			, fi.FoodItemName
			, p.MealType
			, p.MealPrice
			, ol.Quantity
			, SUM(p.MealPrice * Quantity) AS 'Total Meal Price'
		FROM Members m
			JOIN Orders o ON m.MemberID = o.MemberID
			JOIN OrderLine ol ON o.OrderID = ol.OrderID
			JOIN FoodItems fi ON fi.FoodItemID = ol.FoodItemsID
			JOIN Prices p ON fi.FoodItemTypeID = p.FoodItemTypeID
			JOIN Position po ON po.PositionID = m.PositionID
			JOIN Campus c ON c.CampusID = m.CampusID
		WHERE O.OrderID = @orderId
		GROUP BY o.OrderID
			, o.OrderDate
			, m.FirstName
			, m.LastName
			, C.CampusName
			, po.Position
			, fi.FoodItemName
			, p.MealType
			, p.MealPrice
			, ol.Quantity
		UNION
		SELECT * FROM
			(SELECT o.OrderID
				, o.OrderDate
				, m.FirstName + ' ' + m.LastName AS [Name]
				, C.CampusName
				, po.Position
				, fi.FoodItemName
				, p.MealType
				, p.MealPrice
				, ol.Quantity
				, SUM(p.MealPrice * Quantity) AS 'Total Meal Price'
			FROM Members m
				JOIN Orders o ON m.MemberID = o.MemberID
				JOIN OrderLine ol ON o.OrderID = ol.OrderID
				JOIN FoodItems fi ON fi.FoodItemID = ol.FoodItemsID
				JOIN Prices p ON fi.FoodItemTypeID = p.FoodItemTypeID
				JOIN Position po ON po.PositionID = m.PositionID
				JOIN Campus c ON c.CampusID = m.CampusID
			GROUP BY o.OrderID
				, o.OrderDate
				, m.FirstName
				, m.LastName
				, C.CampusName
				, po.Position
				, fi.FoodItemName
				, p.MealType
				, p.MealPrice
				, ol.Quantity
			WITH ROLLUP) as tbl 
		WHERE tbl.OrderDate IS NULL AND tbl.OrderID IS NOT NULL AND OrderID = @orderId
		ORDER BY OrderID DESC
			, OrderDate DESC 
	END

	EXECUTE AdditionalProdecure3 2;