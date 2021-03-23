USE Day4

--Day4 Assignment
--Write a query to rank employees based on their salary for a month
WITH Employees_CTE(EmployeeID, FirstName,Salary, Rank)
AS
	(SELECT EmployeeID, FirstName,Salary, RANK() OVER(ORDER BY Salary) AS 'Rank'
	FROM Employees)
SELECT *
FROM Employees_CTE


--Select 4th Highest salary from employee table using ranking function
WITH Employees_CTE(EmployeeID, FirstName,Salary, Rank)
AS
	(SELECT EmployeeID, FirstName, Salary, Rank
	FROM
		(SELECT DENSE_RANK() OVER(ORDER BY Salary DESC) AS 'Rank', *
		FROM Employees) AS temp
	WHERE Rank = 4)
SELECT *
FROM Employees_CTE


--Get department, total salary with respect to a department from employee table.
WITH Employees_CTE(DepartmentID, Rank)
AS
	(SELECT DepartmentID, SUM(Salary) AS 'Rank' 
	FROM Employees
	GROUP BY DepartmentID)
SELECT *
FROM Employees_CTE


--Get department, total salary with respect to a department from employee table order by total salary descending
WITH Employees_CTE(DepartmentID, Sum, RowNumber)
AS
	(SELECT DepartmentID, SUM(Salary) AS 'Sum of Salary', ROW_NUMBER() OVER(ORDER BY SUM(Salary) DESC) AS 'Row Number' 
	FROM Employees
	GROUP BY DepartmentID)
SELECT *
FROM Employees_CTE


--Get department wise maximum salary from employee table order by salary ascending
WITH Employees_CTE(DepartmentID, MaximumSalary, RowNumber)
AS
	(SELECT DepartmentID, MAX(Salary) AS 'Maximum Salary', ROW_NUMBER() OVER(ORDER BY MAX(Salary)) AS 'Row Number'
	FROM Employees
	GROUP BY DepartmentID)
SELECT *
FROM Employees_CTE


--Get department wise minimum salary from employee table order by salary ascending
WITH Employees_CTE(DepartmentID, MinimumSalary, RowNumber)
AS
	(SELECT DepartmentID, MIN(Salary) AS 'Maximum Salary', ROW_NUMBER() OVER(ORDER BY MIN(Salary)) AS 'Row Number'
	FROM Employees
	GROUP BY DepartmentID)
SELECT *
FROM Employees_CTE


--Select department, total salary with respect to a department from employee table where total salary greater than 50000 order by TotalSalary descending
WITH Employees_CTE(DepartmentID, TotalSalary)
AS
	(SELECT DepartmentID, SUM(Salary) AS TotalSalary
	FROM Employees
	GROUP BY DepartmentID
	HAVING SUM(Salary) > 50000)
SELECT *
FROM Employees_CTE
ORDER BY TotalSalary




--Day5 Assignment
USE Day5


--Get difference between JOINING_DATE and INCENTIVE_DATE from employee and incentives table
WITH Employees_CTE(EmployeeID, JoiningDate, IncentiveDate, DifferenceInDays)
AS
	(SELECT e.EmployeeId, e.JoiningDate, i.IncentiveDate, DATEDIFF(DAY, e.JoiningDate , i.IncentiveDate) AS 'Difference in days'
	FROM Employees AS e
	JOIN Incentives AS i
	ON e.EmployeeId = i.EmployeeRefID)
SELECT *
FROM Employees_CTE


--Select first_name, incentive amount from employee and incentives table for those employees who have incentives and incentive amount greater than 3000
WITH Employees_CTE(EmployeeID, FirstName, IncentiveAmount)
AS
	(SELECT e.EmployeeId, e.FirstName, i.IncentiveAmount
	FROM Employees AS e
	RIGHT OUTER JOIN Incentives AS i
	ON e.EmployeeId = i.EmployeeRefID
	WHERE i.IncentiveAmount > 3000)
SELECT *
FROM Employees_CTE


--Select first_name, incentive amount from employee and incentives table for all employees even if they didn’t get incentives.
WITH Employees_CTE(EmployeeID, FirstName, IncentiveAmount)
AS
	(SELECT e.EmployeeId, e.FirstName, i.IncentiveAmount
	FROM Employees AS e
	LEFT OUTER JOIN Incentives AS i
	ON e.EmployeeId = i.EmployeeRefID)
SELECT *
FROM Employees_CTE


--Select EmployeeName, ManagerName from the employee table.
WITH Employees_CTE(EmployeeName, ManagerName)
AS
	(SELECT mgr.FirstName AS 'Employee Name', e.FirstName AS 'Manager Name'
	FROM Employees AS mgr, Employees AS e
	WHERE e.EmployeeId = mgr.ManagerID)
SELECT *
FROM Employees_CTE


--Select first_name, incentive amount from employee and incentives table for all employees even if they didn’t get incentives and set incentive amount as 0 for those employees who didn’t get incentives.
WITH Employees_CTE(FirstName, IncentiveAmount)
AS
	(SELECT e.FirstName,
	CASE
		WHEN i.IncentiveAmount IS NULL THEN 0
		ELSE i.IncentiveAmount
	END AS 'Incentive Amount'
	FROM Employees AS e
	LEFT OUTER JOIN Incentives AS i
	ON e.EmployeeId = i.EmployeeRefID)
SELECT *
FROM Employees_CTE