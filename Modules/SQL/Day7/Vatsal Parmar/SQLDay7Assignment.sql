/**** SQL Day 7 Assignment ****/

/** 1 - Write a query to rank employees based on their salary for a month. **/

-- USING DERIVED TABLE

SELECT * FROM 
(
	SELECT EmployeeID, FirstName, Salary, DENSE_RANK() OVER(ORDER BY Salary DESC) AS 'Salary Rank'
	FROM Employees
)[tb1];

-- USING CTE

WITH SalRank(EmployeeID,FirstName,Salary,SalaryRank)
AS
	(
		SELECT EmployeeID, FirstName, Salary, DENSE_RANK() OVER(ORDER BY Salary DESC) AS 'SalaryRank'
		FROM Employees
	)
SELECT * FROM SalRank;

/** 2 - Select 4th Highest salary from employee table using ranking function. ***/

-- USING DERIVED TABLE

SELECT * FROM
(
	SELECT EmployeeID, FirstName, Salary, DENSE_RANK() OVER(ORDER BY Salary DESC
	) 'SalaryRank' FROM Employees
)AS SABQ 
WHERE SalaryRank = 4;

-- USING CTE

WITH SalRank(EmployeeID,FirstName,Salary,SalaryRank)
AS
	(
		SELECT EmployeeID, FirstName, Salary, DENSE_RANK() OVER(ORDER BY Salary DESC) AS 'SalaryRank'
		FROM Employees
	)
SELECT * FROM SalRank WHERE SalaryRank = 4;

/** 3 - Get department, total salary with respect to a department from employee table. **/

-- DERIVED TABLE

SELECT * FROM
(
	SELECT DepartmentID, SUM(Salary) 'Total Salary' FROM Employees GROUP BY DepartmentID
)[tb1];

-- USING CTE

WITH DepartmentTotalSalary(DEpartmentID,TotalSalary)
AS
(
	SELECT DepartmentID, SUM(Salary) 'TotalSalary' FROM Employees GROUP BY DepartmentID
)
SELECT * FROM DepartmentTotalSalary;

/** 4 - Get department, total salary with respect to a department from employee table order by total salary descending. **/

-- USING DERIVED TABLE

SELECT * FROM
(
	SELECT DepartmentID, SUM(Salary) 'TotalSalary'
	FROM Employees GROUP BY DepartmentID
)[tb1] 
ORDER BY TotalSalary DESC;

-- USING CTE

WITH DescSalary(DepartmentID,TotalSalary)
AS
(
	SELECT DepartmentID, SUM(Salary) 'TotalSalary'
	FROM Employees GROUP BY DepartmentID
)
SELECT * FROM DescSalary ORDER BY TotalSalary DESC;

/** 5 - Get department wise maximum salary from employee table order by salary ascending. **/

-- USING DERIVED TABLE

SELECT * FROM
(
	SELECT DepartmentID, MAX(Salary) 'MaxSalary' 
	FROM Employees GROUP BY DepartmentID
)
tb1 ORDER BY MaxSalary;

-- USING CTE

WITH MaxSalary(DepartmentID,MaxSalary)
AS
(
	SELECT DepartmentID, MAX(Salary) 'MaxSalary' 
	FROM Employees GROUP BY DepartmentID
)
SELECT * FROM MaxSalary ORDER BY MaxSalary;

/** 6 - Get department wise minimum salary from employee table order by salary ascending. **/

-- USING DERIVED TABLE

SELECT * FROM
(
	SELECT DepartmentID, MIN(Salary) 'MinSalary' 
	FROM Employees GROUP BY DepartmentID
)
tb1 ORDER BY MinSalary;

-- USING CTE

WITH MinSal(DepartmentId,MinSalary)
AS
(
	SELECT DepartmentID, MIN(Salary) 'MinSalary' 
	FROM Employees GROUP BY DepartmentID
)
SELECT * FROM MinSal ORDER BY MinSalary;

/** 7 - Select department, total salary with respect to a department from employee table
where total salary greater than 50000 order by TotalSalary descending. **/

-- USING DERIVED TABLE

SELECT * FROM 
(
	SELECT DepartmentID, SUM(Salary) 'TotalSalary' 
	FROM Employees GROUP BY DepartmentID 
	HAVING SUM(Salary)>50000
)tb1 ORDER BY TotalSalary;

-- USING CTE

WITH TotalSal(DepartmentId,TotalSalary)
AS
(
	SELECT DepartmentID, SUM(Salary) 'TotalSalary' 
	FROM Employees GROUP BY DepartmentID 
	HAVING SUM(Salary)>50000
)
SELECT * FROM TotalSal ORDER BY TotalSalary;

/** 8 - Get difference between JOINING_DATE and INCENTIVE_DATE from employee and incentives table. **/

--USING DERIVED TABLE

SELECT * FROM
(
	SELECT e.First_Name,e.Joining_Date , i.Incentive_Date,
	DATEDIFF(dd,e.Joining_Date,i.Incentive_Date) 
	AS 'Incintive After'
	FROM Employees e
	JOIN Incentives i
	ON e.Employee_Id = i.Employee_Ref_Id
)tb1;

-- USING CTE

WITH IncentiveDate(First_Name,Joining_Date,Incentive_Date,Incentive_After)
AS
(
	SELECT e.First_Name,e.Joining_Date , i.Incentive_Date,
	DATEDIFF(dd,e.Joining_Date,i.Incentive_Date) 
	AS 'Incintive After'
	FROM Employees e
	JOIN Incentives i
	ON e.Employee_Id = i.Employee_Ref_Id
)
SELECT * FROM IncentiveDate;

/** 9 - Select first_name, incentive amount from employee and incentives table for those
employees who have incentives and incentive amount greater than 3000. **/

-- USING DERIVED TABLE

SELECT * FROM (
SELECT e.First_Name, i.Incentive_Amount
FROM Employees e
JOIN Incentives i
ON e.Employee_Id = i.Employee_Ref_Id
)tb1 WHERE Incentive_Amount>3000;

-- USING CTE

WITH IncentiveAmount(First_Name,Incentive_Amount)
AS
(
	SELECT e.First_Name, i.Incentive_Amount
	FROM Employees e
	JOIN Incentives i
	ON e.Employee_Id = i.Employee_Ref_Id
)
SELECT * FROM IncentiveAmount WHERE Incentive_Amount>3000;

/** 10 -  Select first_name, incentive amount from employee and incentives table for
all employees even if they didn't get incentives. **/

-- USING DERIVED TABLE

SELECT	* FROM
(
	SELECT e.First_Name, i.Incentive_Amount
	FROM Employees e
	LEFT OUTER JOIN Incentives i
	ON e.Employee_Id = i.Employee_Ref_Id
)tb1;

-- USING CTE

WITH Incentive
AS
(
	SELECT e.First_Name, i.Incentive_Amount
	FROM Employees e
	LEFT OUTER JOIN Incentives i
	ON e.Employee_Id = i.Employee_Ref_Id
)
SELECT * FROM Incentive;

/** 11 - Select EmployeeName, ManagerName from the employee table. **/

-- USING DERIVED TABLE

SELECT * FROM
(
	SELECT e.First_Name+' '+e.Last_Name 'Employee Name', b.First_Name +' '+b.Last_Name 'Manager Name'
	FROM Employees e 
	LEFT OUTER JOIN Employees b ON b.Employee_Id= e.Manager_Id
)tb1;

-- USING CTE

WITH Managers
AS
(
	SELECT e.First_Name+' '+e.Last_Name 'Employee Name', b.First_Name +' '+b.Last_Name 'Manager Name'
	FROM Employees e 
	LEFT OUTER JOIN Employees b ON b.Employee_Id= e.Manager_Id
)
SELECT * FROM Managers;

/** 12 - Select first_name, incentive amount from employee and incentives table for all
employees even if they didn't get incentives and set incentive amount as 0 for those 
employees who didn't get incentives. **/

-- USING DERIVED TABLE

SELECT * FROM
(
	SELECT e.First_Name, ISNULL(i.Incentive_Amount,0)'Incentive_Amount'
	FROM Employees e
	LEFT OUTER JOIN Incentives i
	ON e.Employee_Id = i.Employee_Ref_Id
)tb1;

-- USING CTE

WITH IncentiveAmount(FirstNumber,IncentiveAmount)
AS
(
	SELECT e.First_Name, ISNULL(i.Incentive_Amount,0)'Incentive_Amount'
	FROM Employees e
	LEFT OUTER JOIN Incentives i
	ON e.Employee_Id = i.Employee_Ref_Id
)
SELECT * FROM IncentiveAmount;