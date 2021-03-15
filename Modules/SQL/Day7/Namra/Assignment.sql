
-- work of day 4 using CTE and Derived Table

--1 Write a query to rank employees based on their salary for a month

WITH Employees_CTE(EmployeeID, FirstName, Salary, Rank)
AS
(
	SELECT EmployeeID,
		FirstName,
		Salary,
		RANK() OVER (ORDER BY Salary) 'Rank'
	FROM Employees
)
SELECT * FROM Employees_CTE;

--2 Select 4th Highest salary from employee table using ranking function

WITH Employees_CTE(EmployeeID , FirstName, Salary, Rank)
AS
(
	SELECT EmployeeID, FirstName, Salary, Rank
	FROM (
			SELECT DENSE_RANK() OVER (ORDER BY Salary DESC) AS 'Rank',
				*
			FROM Employees
		 ) AS tmp
	WHERE Rank = 4
)
SELECT * FROM Employees_CTE 

--3 Get department, total salary with respect to a department from employee table.

WITH Employees_CTE(DepartmentID, SumSalary)
AS
(
	SELECT DepartmentID, SUM(Salary) 'SumSalary'
	FROM Employees
	GROUP BY DepartmentID
)
SELECT * FROM Employees_CTE

--4 Get department, total salary with respect to a department from employee table order by total salary descending

WITH Employees_CTE (DepartmentID, SumSalary, Rank)
AS
(
	SELECT DepartmentID, 
		SUM(Salary) AS 'SumSalary',
		ROW_NUMBER() OVER (ORDER BY SUM(Salary) DESC)'Rank'
	FROM Employees
	GROUP BY DepartmentID
)
SELECT * FROM Employees_CTE

--5 Get department wise maximum salary from employee table order by salary ascending

WITH Employees_CTE(DepartmentID, MaxSalary, Rank)
AS
(
	SELECT DepartmentID,
		MAX(Salary)'MaxSalary',
		ROW_NUMBER() OVER(ORDER BY MAX(Salary))'Rank'
	FROM Employees
	GROUP BY DepartmentID
)
SELECT * FROM Employees_CTE

--6 Get department wise minimum salary from employee table order by salary ascending

WITH Employees_CTE(DepartmentID, MinSalary, Rank)
AS
(
	SELECT DepartmentID,
		MIN(Salary)'MinSalary',
		ROW_NUMBER() OVER(ORDER BY MIN(Salary))'Rank'
	FROM Employees
	GROUP BY DepartmentID
)
SELECT * FROM Employees_CTE

--7 Select department, total salary with respect to a department from employee table where total salary greater than 50000 order by TotalSalary descending

WITH Employees_CTE(DepartmentID, TotalSalary)
AS
(
	SELECT DepartmentID, SUM(Salary)'TotalSalary'
	FROM Employees
	GROUP BY DepartmentID
	HAVING SUM(Salary) > 50000
)
SELECT * FROM Employees_CTE ORDER BY TotalSalary

-- work of day 5 using CTE and Derived Table

-- 1 Get difference between JOINING_DATE and INCENTIVE_DATE from employee and incentives table

	WITH Employees_CTE(EmployeeID, JoiningDate, IncentiveDate,DifferenceBtnDays)
	AS
	(
		SELECT e.EmployeeId,
			e.JoiningDate,
			i.IncentiveDate,
			DATEDIFF(DD, e.JoiningDate,i.IncentiveDate) 'DifferenceBtnDays'
		FROM Employees e
		INNER JOIN Incentives i
		ON e.EmployeeId = i.EmployeeRefId
	)
	SELECT * 
	FROM Employees_CTE

-- 2 Select first_name, incentive amount from employee and incentives table for those employees who have incentives and incentive amount greater than 3000

	WITH Employees_CTE(EmployeeID, FirstName, IncentiveAmount)
	AS
	(
		SELECT e.EmployeeId,
			e.FirstName,
			i.IncentiveAmount
		FROM Employees e
		RIGHT OUTER JOIN Incentives i 
		ON e.EmployeeId = i.EmployeeRefId
		WHERE i.IncentiveAmount>3000
	)
	SELECT * FROM Employees_CTE

-- 3 Select first_name, incentive amount from employee and incentives table for all employees even if they didn’t get incentives.

	WITH Employees_CTE(EmployeeID, FirstName, IncentiveAmount)
	AS
	(
		SELECT e.EmployeeId, e.FirstName, i.IncentiveAmount
		FROM Employees e
		LEFT OUTER JOIN Incentives i
		ON e.EmployeeId = i.EmployeeRefId
	)
	SELECT * 
	FROM Employees_CTE

-- 4 Select EmployeeName, ManagerName from the employee table.

	WITH Employees_CTE(EmployeeName, ManagerName)
	AS
	(
		SELECT mgr.FirstName'EmployeeName', e.FirstName'ManagerName'
		FROM Employees mgr, Employees e
		WHERE e.EmployeeId = mgr.ManagerId
	)
	SELECT * FROM Employees_CTE

/* 5 Select first_name, incentive amount from employee and incentives table for all employees even if
	they didn’t get incentives and set incentive amount as 0 for those employees who didn’t get incentives.*/

	WITH Employees_CTE(FirstName, IncentiveAmount)
	AS
	(
		SELECT e.FirstName,
			CASE 
				WHEN i.IncentiveAmount IS NULL THEN 0
				ELSE i.IncentiveAmount
			END 'IncentiveAmount'
		FROM Employees e
		LEFT OUTER JOIN Incentives i
		ON e.EmployeeId = i.EmployeeRefId
	)
	SELECT * FROM Employees_CTE