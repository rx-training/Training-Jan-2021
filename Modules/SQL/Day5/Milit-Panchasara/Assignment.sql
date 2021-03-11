--1. Get difference between JOINING_DATE and INCENTIVE_DATE from employee and incentives table
SELECT E.EmployeeID, E.JoiningDate, I.IncentiveDate, DATEDIFF(MM, E.JoiningDate, I.IncentiveDate) AS 'Difference (in Month)' 
FROM Employees AS E JOIN Incentives AS I ON E.EmployeeID = I.EmployeeRefID;

--2. Select first_name, incentive amount from employee and incentives table for those employees who have incentives and 
--   incentive amount greater than 3000
SELECT E.FirstName, I.IncentiveDate, I.IncentiveAmount FROM Employees AS E 
JOIN Incentives AS I ON E.EmployeeID = I.EmployeeRefID 
WHERE I.IncentiveAmount > 3000;

--3. Select first_name, incentive amount from employee and incentives table for all employees even if they didn’t get incentives.
SELECT E.FirstName, I.IncentiveDate, I.IncentiveAmount FROM Employees AS E 
LEFT JOIN Incentives AS I ON E.EmployeeID = I.EmployeeRefID 
WHERE I.IncentiveAmount IS NULL;

--4. Select EmployeeName, ManagerName from the employee table.
SELECT E.FirstName AS EmployeeName, M.FirstName AS ManagerName FROM Employees E, Employees M WHERE E.ManagerID = M.EmployeeID; -- without join and on using ',' to join same table
SELECT E.FirstName AS EmployeeName, M.FirstName AS ManagerName FROM Employees E JOIN Employees M ON E.ManagerID = M.EmployeeID; -- with join and on keyword

--5. Select first_name, incentive amount from employee and incentives table for all employees even if they didn’t get incentives and 
--   set incentive amount as 0 for those employees who didn’t get incentives.
SELECT 
	E.FirstName, 
	CASE 
		WHEN I.IncentiveAmount IS NULL THEN 0
		ELSE I.IncentiveAmount
	END AS IncentiveAmount,
	I.IncentiveDate
FROM Employees AS E 
LEFT JOIN Incentives AS I ON E.EmployeeID = I.EmployeeRefID;