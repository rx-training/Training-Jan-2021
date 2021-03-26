--USE SQLDay5

--1. CTE
WITH CTE1 (EmployeeID, JoiningDate, IncentiveDate, Difference)
AS
(
SELECT E.EmployeeID, E.JoiningDate, I.IncentiveDate, DATEDIFF(MM, E.JoiningDate, I.IncentiveDate) AS 'Difference (in Month)' 
FROM Employees AS E JOIN Incentives AS I ON E.EmployeeID = I.EmployeeRefID
)
SELECT * FROM CTE1;

--2. CTE & Derived Table
WITH CTE2 (FirstName, IncentiveDate, IncentiveAmount)
AS
(
SELECT E.FirstName, I.IncentiveDate, I.IncentiveAmount FROM Employees AS E 
JOIN (SELECT * FROM Incentives WHERE IncentiveAmount > 3000 ) AS I ON E.EmployeeID = I.EmployeeRefID
)
SELECT * FROM CTE2;

--3. CTE
WITH CTE3 (FirstName, IncentiveDate, IncentiveAmount)
AS
(
SELECT E.FirstName, I.IncentiveDate, I.IncentiveAmount FROM Employees AS E 
LEFT JOIN Incentives AS I ON E.EmployeeID = I.EmployeeRefID 
)
SELECT * FROM CTE3 WHERE IncentiveAmount IS NULL;


--4. CTE
WITH CTE4 (FirstName, ManagerName)
AS
(
SELECT E.FirstName AS EmployeeName, M.FirstName AS ManagerName FROM Employees E, Employees M WHERE E.ManagerID = M.EmployeeID -- without join and on using ',' to join same table
)
SELECT * FROM CTE4;
-------------
WITH CTE4 (FirstName, ManagerName)
AS
(
SELECT E.FirstName AS EmployeeName, M.FirstName AS ManagerName FROM Employees E JOIN Employees M ON E.ManagerID = M.EmployeeID -- with join and on keyword
)
SELECT * FROM CTE4;

--5. CTE
WITH CTE5 (FirstName, IncentiveAmount, IncentiveDate)
AS
(
SELECT 
	E.FirstName, 
	CASE 
		WHEN I.IncentiveAmount IS NULL THEN 0
		ELSE I.IncentiveAmount
	END AS IncentiveAmount,
	I.IncentiveDate
FROM Employees AS E 
LEFT JOIN Incentives AS I ON E.EmployeeID = I.EmployeeRefID
)
SELECT * FROM CTE5;