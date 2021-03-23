USE Day5


--Select employee details from employee table if data exists in incentive table ?
SELECT *
FROM Employees AS e
WHERE EXISTS
	(SELECT *
	FROM Incentives AS i
	WHERE e.EmployeeId = i.EmployeeRefID)


--Find Salary of the employee whose salary is more than Roy Salary
SELECT FirstName
FROM Employees
WHERE Salary > 
	(SELECT Salary
	FROM Employees
	WHERE FirstName = 'Roy')


--Create a view to select FirstName,LastName,Salary,JoiningDate,IncentiveDate and IncentiveAmount
CREATE VIEW View4Third
AS
SELECT e.FirstName, e.LastName, e.JoiningDate, i.IncentiveAmount, i.IncentiveDate
FROM Employees AS e
JOIN Incentives AS i
ON e.EmployeeId = i.EmployeeRefID

SELECT *
FROM View4Third


--Create a view to select Select first_name, incentive amount from employee and incentives table for those employees who have incentives and incentive amount greater than 3000
CREATE VIEW View4Fourth
AS
SELECT e.FirstName, i.IncentiveAmount
FROM Employees AS e
JOIN Incentives AS i
ON e.EmployeeId = i.EmployeeRefID
WHERE i.IncentiveAmount > 3000

SELECT *
FROM View4Fourth