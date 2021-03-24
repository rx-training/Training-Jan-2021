
/*
Create a listing of all Faculty Members (First and Last), their Faculty Position and the University that they are affiliated with (Name), 
along with their Monthly_Dues (Calculated Field with a column alias). Sort the records in descending order by University and then by 
Faculty's last name in ascending order. 
*/

CREATE OR ALTER PROCEDURE sp_day12_1 AS
SET NOCOUNT ON
SELECT M.FirstName,M.LastName, P.Position, (P.YearlyMembershipFee / 12) AS MonthlyDues FROM Campus C 
JOIN Members M ON M.CampusID = C.CampusID
JOIN Position P ON P.PositionID = M.PositionID
ORDER BY C.CampusName DESC, M.LastName ASC
SET NOCOUNT OFF
GO

EXEC sp_day12_1;
GO

/*
Create a listing that shows the various food items that the faculty club serves (Name of the food item, type of food item and the price of 
the food item). Note: List no alcoholic beverages. Sort the records in ascending order by price. 
*/

CREATE OR ALTER PROCEDURE sp_day12_2 AS
SET NOCOUNT ON
SELECT FI.FoodItemName, P.MealType, P.MealPrice FROM FoodItems FI
JOIN Prices P ON P.FoodItemTypeID = FI.FoodItemTypeID
WHERE P.MealType <> 'Beer/Wine'
ORDER BY P.MealPrice
SET NOCOUNT OFF
GO

EXEC sp_day12_2;
GO

/*
List the OrderID, Order Date, Faculty Member's Name, Campus Name, each FoodItem that makes up a given order, the type of meal, cost of the 
meal, quantity ordered and the total line total (calculated field and column alias). Sort by Order IDs in descending order. 
*/

CREATE OR ALTER PROCEDURE sp_day12_3 AS
SET NOCOUNT ON
SELECT O.OrderID, O.OrderDate, M.FirstName + ' ' + M.LastName 'Name', C.CampusName, FI.FoodItemName, 
P.MealType, P.MealPrice, OL.Quantity, (P.MealPrice * OL.Quantity) 'Total' FROM Orders O
JOIN OrderLine OL ON OL.OrderID = O.OrderID
JOIN FoodItems FI ON FI.FoodItemID = OL.FoodItemID
JOIN Members M ON M.MemberID = O.MemberID
JOIN Campus C ON C.CampusID = M.CampusID
JOIN Prices P ON P.FoodItemTypeID = FI.FoodItemTypeID
ORDER BY O.OrderID DESC
SET NOCOUNT OFF
GO

EXEC sp_day12_3;
GO
