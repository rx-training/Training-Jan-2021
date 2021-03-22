-- DAY12 STORE PROCEDURE EXTRA TASK
-- Campus table
CREATE TABLE Campus (
	CampusID varchar(5) CONSTRAINT Campus_CampusID_PK PRIMARY KEY ,
	CampusName varchar(40) NOT NULL ,
	Street varchar(40) NOT NULL ,
	City varchar(40) NOT NULL ,
	State varchar(40) NOT NULL ,
	Zip int NOT NULL ,
	Phone varchar(40) NOT NULL ,
	CampusDiscount decimal(2,2) NOT NULL ,
)

-- Position Table
CREATE TABLE Position
(
	PositionID varchar(5) CONSTRAINT Position_PositionID_PK PRIMARY KEY ,
	Position varchar(40) NOT NULL ,
	YearlyMembershipFee  decimal (7,2) NOT NULL ,
)

--Member Table
CREATE TABLE Members (
	MemberID varchar(5) CONSTRAINT Members_MemberID_PK PRIMARY KEY ,
	LastName varchar(40) NOT NULL ,
	FirstName varchar(40) NOT NULL ,
	CampusAddress varchar(40) NOT NULL ,
	CampusPhone varchar(40) NOT NULL ,
	CampusID varchar(5) CONSTRAINT Members_CampusID_FK FOREIGN KEY REFERENCES Campus NOT NULL,
	PostionID varchar(5) CONSTRAINT Members_PostionID_FK FOREIGN KEY REFERENCES Position NOT NULL,
	ContractDuration decimal(3,0) NOT NULL 
)

-- Prices
CREATE TABLE Prices
(
	FoodItemTypeID int CONSTRAINT Prices_FoodItemTypeID_PK PRIMARY KEY IDENTITY,
	MealType varchar(40) NOT NULL ,
	MealPrice  decimal (7,2) NOT NULL ,
)

--FoodItems
CREATE TABLE FoodItems
(
	FoodItemID varchar(5) CONSTRAINT Prices_FoodItemID_PK PRIMARY KEY ,
	FoodItemName varchar(40) NOT NULL ,
	FoodItemTypeID varchar(5) CONSTRAINT FoodItems_FoodItemTypeID_FK FOREIGN KEY REFERENCES Prices NOT NULL,
)

-- Orders
CREATE TABLE Orders
(
	OrderID varchar(5) CONSTRAINT Orders_OrderID_PK PRIMARY KEY ,
	MemberID varchar(5)  CONSTRAINT Orders_MemberID_FK FOREIGN KEY REFERENCES Members NOT NULL,
	OrderDate date NOT NULL
)

-- OrderLine table
CREATE TABLE OrderLine
(
	OrderID varchar(5) CONSTRAINT OrderLine_OrderID_FK FOREIGN KEY REFERENCES Orders  NOT NULL ,
	FoodItemsID varchar(5) CONSTRAINT OrderLine_FoodItemsID_FK FOREIGN KEY REFERENCES FoodItems  NOT NULL ,
	Quantity decimal(3,0) NOT NULL ,
	CONSTRAINT OrderLine_OrderID_FoodItemID PRIMARY KEY (OrderID , FoodItemsID)	
)



/* 1 - Create a listing of all Faculty Members (First and Last), their Faculty Position and the University that they
are affiliated with (Name), along with their Monthly_Dues (Calculated Field with a column alias). 
Sort the records in descending order by University and then by Faculty's last name in ascending order. */

CREATE PROCEDURE facultymembers 
WITH ENCRYPTION
AS

	SELECT m.FirstName , m.LastName ,p.Position , c.CampusName, m.ContractDuration * p.YearlyMembershipFee AS 'Mothhly_Dues'  FROM Members m 
		 JOIN Position p ON m.PostionID = p.PositionID 
		 JOIN Campus c ON m.CampusID = c.CampusID
		 ORDER BY c.CampusName DESC , m.LastName  
GO

SET NOCOUNT ON
EXEC facultymembers
DROP PROCEDURE facultymembers
SET NOCOUNT OFF
GO

/* 2 - Create a listing that shows the various food items that the faculty club serves 
(Name of the food item, type of food item and the price of the food item). Note: List no alcoholic beverages.
Sort the records in ascending order by price.  */
CREATE PROCEDURE Items @mealtype varchar(10)
WITH ENCRYPTION
AS

	SELECT f.FoodItemName , p.MealType , p.MealPrice AS 'Price' FROM FoodItems f 
       JOIN Prices p  ON  f.FoodItemTypeID = p.FoodItemTypeID 
	   WHERE p.MealType != @mealtype ORDER BY p.MealPrice
GO
SET NOCOUNT ON
EXEC Items'Beer/Wine'
DROP PROCEDURE Items
SET NOCOUNT OFF
GO

/* 3 - List the OrderID, Order Date, Faculty Member's Name, Campus Name, each FoodItem that makes up a given order,
the type of meal, cost of the meal, quantity ordered and the total line total (calculated field and column alias).
Sort by Order IDs in descending order.*/ 

CREATE PROCEDURE GrandTotal 
WITH ENCRYPTION
AS
SELECT    o.OrderID, o.OrderDate,  m.FirstName , m.LastName , c.CampusName , fi.FoodItemName , p.MealType ,p.MealPrice , ol.Quantity, ol.Quantity * p.MealPrice AS 'Total'  FROM Campus c 
      JOIN Members m ON c.CampusID = m.CampusID
	  JOIN Orders o ON  m.MemberID = o.MemberID
	  JOIN OrderLine ol ON  o.OrderID = ol.OrderID
	  JOIN FoodItems fi ON ol.FoodItemsID = fi.FoodItemID
	  JOIN Prices p ON fi.FoodItemTypeID = p.FoodItemTypeID 
	  ORDER BY ol.OrderID DESC
GO

SET NOCOUNT ON 
EXEC GrandTotal 
DROP PROCEDURE GranTotoal
SET NOCOUNT OFF










