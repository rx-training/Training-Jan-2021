USE Day5


--Get difference between JOINING_DATE and INCENTIVE_DATE from employee and incentives table
SELECT e.EmployeeId, e.JoiningDate, i.IncentiveDate, DATEDIFF(DAY, e.JoiningDate , i.IncentiveDate) AS 'Difference in days'
FROM Employees AS e
JOIN Incentives AS i
ON e.EmployeeId = i.EmployeeRefID


--Select first_name, incentive amount from employee and incentives table for those employees who have incentives and incentive amount greater than 3000
SELECT e.EmployeeId, e.FirstName, i.IncentiveAmount
FROM Employees AS e
RIGHT OUTER JOIN Incentives AS i
ON e.EmployeeId = i.EmployeeRefID
WHERE i.IncentiveAmount > 3000


--Select first_name, incentive amount from employee and incentives table for all employees even if they didn’t get incentives.
SELECT e.EmployeeId, e.FirstName, i.IncentiveAmount
FROM Employees AS e
LEFT OUTER JOIN Incentives AS i
ON e.EmployeeId = i.EmployeeRefID


--Select EmployeeName, ManagerName from the employee table.
SELECT mgr.FirstName AS 'Employee Name', e.FirstName AS 'Manager Name'
FROM Employees AS mgr, Employees AS e
WHERE e.EmployeeId = mgr.ManagerID


--Select first_name, incentive amount from employee and incentives table for all employees even if they didn’t get incentives and set incentive amount as 0 for those employees who didn’t get incentives.
SELECT e.FirstName,
CASE
	WHEN i.IncentiveAmount IS NULL THEN 0
	ELSE i.IncentiveAmount
END AS 'Incentive Amount'
FROM Employees AS e
LEFT OUTER JOIN Incentives AS i
ON e.EmployeeId = i.EmployeeRefID