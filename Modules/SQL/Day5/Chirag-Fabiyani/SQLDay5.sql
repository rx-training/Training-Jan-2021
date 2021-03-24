

----Get difference between JOINING_DATE and INCENTIVE_DATE from employee and incentives table----

SELECT DATEDIFF(DAY,e.JoiningDate , i.IncentiveDate  ) DIFF_DAY
FROM Employees as e
JOIN  Incentives as i
ON e.EmployeeID = i.EmployeeRefID




----Select first_name, incentive amount from employee and incentives table for those employees----
----who have incentives and incentive amount greater than 3000----

SELECT e.FirstName , i.IncentiveAmount 
FROM Employees AS e
LEFT JOIN Incentives AS i
ON e.EmployeeID = i.EmployeeRefID
WHERE i.IncentiveAmount  > 3000




----Select first_name, incentive amount from employee and incentives table for all employees even if they didn’t get incentives.----

SELECT e.FirstName , i.IncentiveAmount
FROM Employees AS e
LEFT JOIN Incentives AS i
ON e.EmployeeID = i.EmployeeRefID;




----Select EmployeeName, ManagerName from the employee table.----

SELECT DISTINCT e.FirstName , e1.ManagerID 
FROM Employees AS e
JOIN Employees AS e1
ON e.EmployeeID = e1.ManagerID;




----Select first_name, incentive amount from employee and incentives table for all employees even if they didn’t get incentives----
----and set incentive amount as 0 for those employees who didn’t get incentives.----

SELECT e.FirstName,
CASE 
WHEN i.IncentiveAmount IS NULL THEN 0 
ELSE i.IncentiveAmount 
END AS IncentiveAmount
FROM Employees AS e
LEFT JOIN Incentives AS i
ON e.EmployeeID = i.EmployeeRefID