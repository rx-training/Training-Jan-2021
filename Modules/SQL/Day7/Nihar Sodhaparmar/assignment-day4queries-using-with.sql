USE Day2;

SELECT * FROM Employees;

/* 1. Write a query to rank employees based on their salary for a month */
WITH EmpRank(EmployeeID, Salary, SalaryRank)
AS
(
	SELECT EmployeeID
		, Salary
		, DENSE_RANK() OVER (ORDER BY Salary DESC) SalaryRank
	FROM Employees
)
SELECT * FROM EmpRank;


/* 2. Select 4th Highest salary from employee table using ranking function */
WITH EmpRank(EmployeeID, Salary, SalaryRank)
AS
(
	SELECT EmployeeID
		, Salary
		, DENSE_RANK() OVER (ORDER BY Salary DESC) AS 'SalaryRank' 
	FROM Employees
)
SELECT Salary FROM EmpRank WHERE SalaryRank = 4;


/* 3. Get department, total salary with respect to a department from employee table. */
WITH Departments(DepartmentId, DepartmentTotalSalary)
AS
(
	SELECT DepartmentID
		, SUM(Salary) 
	FROM Employees 
	GROUP BY DepartmentID
)
SELECT * FROM Departments;


/* 4. Get department, total salary with respect to a department from employee table order by total salary descending */
WITH Departments(DepartmentId, DepartmentTotalSalary)
AS
(
	SELECT DepartmentID
		, SUM(Salary) 
	FROM Employees 
	GROUP BY DepartmentID
)
SELECT * FROM Departments ORDER BY DepartmentTotalSalary DESC;


/* 5. Get department wise maximum salary from employee table order by salary ascending */
WITH Departments(DepartmentId, DepartmenMaxSalary)
AS
(
	SELECT DepartmentID
		, MAX(Salary) 
	FROM Employees 
	GROUP BY DepartmentID
)
SELECT * FROM Departments ORDER BY DepartmenMaxSalary ASC;


/* 6. Get department wise minimum salary from employee table order by salary ascending */
WITH Departments(DepartmentId, DepartmenMinSalary)
AS
(
	SELECT DepartmentID
		, MIN(Salary) 
	FROM Employees 
	GROUP BY DepartmentID
)
SELECT * FROM Departments ORDER BY DepartmenMinSalary ASC;


/* 7. Select department, total salary with respect to a department from employee table where total salary 
greater than 50000 order by TotalSalary descending */
WITH Departments(DepartmentId, DepartmentTotalSalary)
AS
(
	SELECT DepartmentID
		, SUM(Salary) 
	FROM Employees 
	GROUP BY DepartmentID
)
SELECT * FROM Departments WHERE DepartmentTotalSalary > 50000 ORDER BY DepartmentTotalSalary DESC;
