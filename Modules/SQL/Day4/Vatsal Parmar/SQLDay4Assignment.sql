/* Day 4 Assignment */

-- 1 - Write a query to rank employees based on their salary for a month.

SELECT EmployeeID, FirstName, Salary, DENSE_RANK() OVER(ORDER BY Salary DESC) AS 'Salary Rank' FROM Employees;

-- 2 - Select 4th Highest salary from employee table using ranking function.

SELECT * FROM(SELECT EmployeeID, FirstName, Salary, DENSE_RANK() OVER(ORDER BY Salary DESC) AS 'SalaryRank' FROM Employees)AS SABQ WHERE SalaryRank = 4;

-- 3 - Get department, total salary with respect to a department from employee table.

SELECT DepartmentID, SUM(Salary) 'Total Salary' FROM Employees GROUP BY DepartmentID;

-- 4 - Get department, total salary with respect to a department from employee table order by total salary descending.

SELECT DepartmentID, SUM(Salary) 'TotalSalary' FROM Employees GROUP BY DepartmentID ORDER BY TotalSalary DESC;

-- 5 - Get department wise maximum salary from employee table order by salary ascending.

SELECT DepartmentID, MAX(Salary) 'MaxSalary' FROM Employees GROUP BY DepartmentID ORDER BY MaxSalary;

-- 6 - Get department wise minimum salary from employee table order by salary ascending.

SELECT DepartmentID, MIN(Salary) 'MinSalary' FROM Employees GROUP BY DepartmentID ORDER BY MinSalary;

-- 7 - Select department, total salary with respect to a department from employee table where total salary greater than 50000 order by TotalSalary descending.

SELECT DepartmentID, SUM(Salary) 'TotalSalary' FROM Employees GROUP BY DepartmentID HAVING SUM(Salary)>50000 ORDER BY TotalSalary DESC;
