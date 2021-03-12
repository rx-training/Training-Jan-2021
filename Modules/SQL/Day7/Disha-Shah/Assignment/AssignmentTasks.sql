USE Day2DB

--DAY4 TASKS

SELECT * FROM OldEmployees

/*Q 1. Write a query to rank employees based on their salary for a month
Ans.*/
WITH EmpRank (EmpId, Fname, Lname, EmpSalary, EmplRank)
AS
(
	SELECT EmployeeID, FirstName, LastName, Salary, DENSE_RANK() OVER (ORDER BY Salary) 'DenseRank'
	FROM Employees
)
SELECT * FROM EmpRank;
	
/*2. Select 4th Highest salary from employee table using ranking function
Ans.*/
SELECT * FROM 
(SELECT EmployeeID, FirstName, LastName, Salary, DENSE_RANK() OVER (ORDER BY Salary DESC) 'DenseRank' FROM OldEmployees) AS RankTbl
WHERE DenseRank=4

/*3. Get department, total salary with respect to a department from employee table.
Ans.*/
WITH DeptSalary (DeptId, EmpSalary)
AS
(
	SELECT DepartmentID, Salary
	FROM OldEmployees
)
SELECT DeptId, SUM(EmpSalary) AS 'TotalSalary' FROM DeptSalary GROUP BY DeptId;

/*4. Get department, total salary with respect to a department from employee table order by total salary descending
Ans.*/
WITH DeptSalary (DeptId, EmpSalary)
AS
(
	SELECT DepartmentID, Salary
	FROM OldEmployees
)
SELECT DeptId, SUM(EmpSalary) AS 'TotalSalary'
FROM DeptSalary
GROUP BY DeptId
ORDER BY 'TotalSalary' DESC;

/*5. Get department wise maximum salary from employee table order by salary ascending
Ans.*/
WITH DeptSalary (DeptId, EmpSalary)
AS
(
	SELECT DepartmentID, Salary
	FROM OldEmployees
)
SELECT DeptId, MAX(EmpSalary) AS 'MaxSalary'
FROM DeptSalary
GROUP BY DeptId
ORDER BY 'MaxSalary';

/*6. Get department wise minimum salary from employee table order by salary ascending
Ans.*/
WITH DeptSalary (DeptId, EmpSalary)
AS
(
	SELECT DepartmentID, Salary
	FROM OldEmployees
)
SELECT DeptId, MIN(EmpSalary) AS 'MinSalary'
FROM DeptSalary
GROUP BY DeptId
ORDER BY 'MinSalary';

/*7. Select department, total salary with respect to a department from employee table where total salary greater than 50000 order by TotalSalary descending
Ans.*/
WITH DeptSalary (DeptId, EmpSalary)
AS
(
	SELECT DepartmentID, Salary
	FROM OldEmployees
)
SELECT DeptId, SUM(EmpSalary) AS 'TotalSalary'
FROM DeptSalary
GROUP BY DeptId
HAVING SUM(EmpSalary)>50000
ORDER BY 'TotalSalary' DESC;



--DAY5 TASKS

SELECT * FROM Employees

SELECT * FROM Incentives

/*Q 1. Get difference between JOINING_DATE and INCENTIVE_DATE from employee and incentives table
Ans.*/
WITH EmpDtDiff (EmplID, JoinDate, IncentDate)
AS
(
	SELECT e.EmployeeID, e.JoiningDate, i.IncentiveDate 
	FROM
	(
		SELECT EmployeeID, JoiningDate
		FROM Employees
	) AS e
	JOIN
	(
		SELECT EmpRefID, IncentiveDate
		FROM Incentives
	) AS i
	ON e.EmployeeID = i.EmpRefID
)
SELECT EmplID AS 'EmployeeID', DATEDIFF(DD, JoinDate, IncentDate) AS 'TotalDays'
FROM EmpDtDiff

/*Q 2. Select first_name, incentive amount from employee and incentives table for those employees who have incentives and incentive amount greater than 3000
Ans.*/
WITH EmpIncentAmount (EmpName, IncentAmount)
AS
(
	SELECT e.FirstName, i.IncentiveAmount
	FROM
	(
		SELECT EmployeeID, FirstName
		FROM Employees
	) AS e
	JOIN
	(
		SELECT EmpRefID, IncentiveAmount
		FROM Incentives
	) AS i
	ON e.EmployeeID = i.EmpRefID
)
SELECT EmpName AS 'Name', IncentAmount AS 'IncentiveAmount'
FROM EmpIncentAmount
WHERE IncentAmount>3000;

/*Q 3. Select first_name, incentive amount from employee and incentives table for all employees even if they didn’t get incentives.
Ans.*/
WITH EmpCTE (EmpID, Fname)
AS
(
	SELECT EmployeeID, FirstName
	FROM Employees
)
,
IncentivesCTE (EmplRefId, IncentAmt)
AS
(
	SELECT EmpRefID, IncentiveAmount
	FROM Incentives
)
SELECT Fname, IncentAmt
FROM EmpCTE LEFT OUTER JOIN IncentivesCTE
ON EmpCTE.EmpID = IncentivesCTE.EmplRefId

/* OR, USING DERIVED TABLE

	SELECT e.FirstName, i.IncentiveAmount
	FROM
	(
		SELECT EmployeeID, FirstName
		FROM Employees
	) AS e
	LEFT OUTER JOIN
	(
		SELECT EmpRefID, IncentiveAmount
		FROM Incentives
	) AS i
	ON e.EmployeeID = i.EmpRefID;

*/


/*Q 4. Select EmployeeName, ManagerName from the employee table.
Ans.*/

	SELECT e.FirstName AS 'EmployeeName', i.FirstName AS 'ManagerName'
	FROM
	(
		SELECT ManagerID, FirstName
		FROM Employees
	) AS e
	JOIN
	(
		SELECT EmployeeID, FirstName
		FROM Employees
	) AS i
	ON e.ManagerID = i.EmployeeID;

/*Q 5. Select first_name, incentive amount from employee and incentives table for all employees even if they didn’t get incentives and set incentive
amount as 0 for those employees who didn’t get incentives.
Ans.*/
WITH EmpCTE (EmpID, Fname)
AS
(
	SELECT EmployeeID, FirstName
	FROM Employees
)
,
IncentivesCTE (EmplRefId, IncentAmt)
AS
(
	SELECT EmpRefID, IncentiveAmount
	FROM Incentives
)
SELECT Fname, ISNULL(IncentAmt, 0)
FROM EmpCTE LEFT OUTER JOIN IncentivesCTE
ON EmpCTE.EmpID = IncentivesCTE.EmplRefId
