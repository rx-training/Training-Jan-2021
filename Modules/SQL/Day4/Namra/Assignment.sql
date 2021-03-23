
-- 1. Write a query to rank employees based on their salary for a month

	SELECT EmployeeID,FirstName,Salary, DENSE_RANK() OVER (ORDER BY Salary DESC) FROM Employees

-- 2. Select 4th Highest salary from employee table using ranking function

	SELECT Salary FROM 
	(SELECT DISTINCT Salary,DENSE_RANK() OVER (ORDER BY Salary DESC) 'DSalary' FROM Employees) as tbl WHERE DSalary = '4';

-- 3. Get department, total salary with respect to a department from employee table.
	
	SELECT DepartmentID,SUM(Salary) FROM Employees GROUP BY DepartmentID;

-- 4. Get department, total salary with respect to a department from employee table order by total salary descending

	SELECT * FROM(
	SELECT DepartmentID,SUM(Salary)'SUM_SALARY' FROM Employees GROUP BY DepartmentID) AS tbl
	ORDER BY SUM_SALARY DESC;

-- 5. Get department wise maximum salary from employee table order by salary ascending

	SELECT * FROM (
	SELECT DepartmentID, MAX(Salary)'MaxSalaryDepartment' FROM Employees GROUP BY DepartmentID) AS tbl
	ORDER BY MaxSalaryDepartment;	

-- 6. Get department wise minimum salary from employee table order by salary ascending

	
	SELECT * FROM (
	SELECT DepartmentID, MIN(Salary)'MinSalaryDepartment' FROM Employees GROUP BY DepartmentID) AS tbl
	ORDER BY MinSalaryDepartment;	


-- 7. Select department, total salary with respect to a department from employee table where total
--    salary greater than 50000 order by TotalSalary descending

	SELECT * FROM(
	SELECT DepartmentID, SUM(Salary)'TotalSalary' FROM Employees GROUP BY DepartmentID HAVING SUM(Salary)>50000
	)AS tbl ORDER BY TotalSalary DESC;
