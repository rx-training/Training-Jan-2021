USE Day5;

/* 1. Get difference between JOINING_DATE and INCENTIVE_DATE from employee and incentives table */
WITH EmployeeIncentives(EmployeeID, JoiningDate, IncentiveDate)
AS
(
	SELECT e.EmployeeId, e.JoiningDate, i.IncentiveDate
	FROM Employees e
		INNER JOIN Incentives i ON e.EmployeeId = i.EmployeeRefId
)
SELECT EmployeeID, CONCAT(DATEDIFF(DAY, JoiningDate, IncentiveDate), ' Days ')  AS 'DateDiff' FROM EmployeeIncentives;


/* 2. Select first_name, incentive amount from employee and incentives table for those employees 
who have incentives and incentive amount greater than 3000*/
WITH EmployeeIncentives(FirstName, IncentiveAmount)
AS
(
	SELECT e.FirstName, i.IncentiveAmount
	FROM Employees e
		INNER JOIN Incentives i ON e.EmployeeId = i.EmployeeRefId
)
SELECT FirstName, IncentiveAmount FROM EmployeeIncentives WHERE IncentiveAmount > 3000;


/* 3. Select first_name, incentive amount from employee and incentives table for all employees even if they didn’t get incentives */
WITH EmployeeIncentives(FirstName, IncentiveAmount)
AS
(
	SELECT e.FirstName, i.IncentiveAmount
	FROM Employees e
		LEFT JOIN Incentives i ON e.EmployeeId = i.EmployeeRefId
)
SELECT FirstName, IncentiveAmount FROM EmployeeIncentives;


/* 4. Select EmployeeName, ManagerName from the employee table*/
WITH Managers(EmployeeName, ManagerName)
AS
(
	SELECT e.FirstName AS 'EmployeeName', m.FirstName AS 'ManagerName'
	FROM Employees e
	INNER JOIN Employees m ON e.ManagerId = m.EmployeeId
)
SELECT * FROM Managers;


/* 5. Select first_name, incentive amount from employee and incentives table for all employees even if 
they didn’t get incentives and set incentive amount as 0 for those employees who didn’t get incentives*/
WITH EmployeeIncentives(FirstName, IncentiveAmount)
AS
(
	SELECT e.FirstName, i.IncentiveAmount
	FROM Employees e
		LEFT JOIN Incentives i ON e.EmployeeId = i.EmployeeRefId
)
SELECT FirstName, ISNULL(IncentiveAmount, 0) FROM EmployeeIncentives;