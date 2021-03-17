-- ROW_NUMBER()
SELECT ROW_NUMBER() OVER(ORDER BY Email) AS RowNo, * FROM Employees;

-- RANK() vs DENSE_RANK()
SELECT RANK() OVER(ORDER BY Salary DESC) AS SalaryRank,DENSE_RANK() OVER(ORDER BY Salary DESC) AS SalaryDenseRank,* FROM Employees;

-- PARTITION BY
SELECT RANK() OVER(PARTITION BY DepartmentID ORDER BY Salary DESC) AS SalaryRank, * 
FROM Employees 
ORDER BY DepartmentID ASC, Salary DESC;

-- SUM()
SELECT DepartmentID, SUM(Salary) AS TotalSalary FROM Employees GROUP BY DepartmentID;

-- With multiple groupby & min,max,avg,count
SELECT DepartmentID, JobID, 
SUM(Salary) AS TotalSalary, 
MAX(Salary) AS MaxSalary, 
MIN(Salary) AS MinSalary,
AVG(Salary) AS AvgSalary,
COUNT(Salary) AS SalaryCount
FROM Employees GROUP BY DepartmentID, JobID;

-- * , 1 , primary key returns same total row count
SELECT COUNT(*),COUNT(1),COUNT(EmployeeID) FROM Employees;

-- ROLLUP
SELECT DepartmentID,JobID, SUM(Salary) AS MinSalary FROM Employees GROUP BY ROLLUP (DepartmentID, JobID);

-- CUBE
SELECT DepartmentID,JobID, SUM(Salary) AS MinSalary FROM Employees GROUP BY CUBE(DepartmentID, JobID);

-- GROUPING SETS (union of multiple grouped data)
SELECT 
	DepartmentID,
	JobID, 
	SUM(Salary) AS MinSalary 
FROM Employees 
GROUP BY GROUPING SETS (ROLLUP (DepartmentID, JobID), CUBE(DepartmentID, JobID));

-- GROUPING ID (id given for different type of combinations)
SELECT 
	GROUPING_ID(DepartmentID,JobID) as GroupingID, 
	DepartmentID,
	JobID, 
	SUM(Salary) AS MinSalary 
FROM Employees 
GROUP BY CUBE(DepartmentID, JobID) 
ORDER BY 1;