--Write a query to rank employees based on their salary for a month

SELECT RANK() OVER (ORDER BY Salary) 'Rank',* FROM Employees

--Select 4th Highest salary from employee table using ranking function
SELECT DISTINCT Salary FROM(
SELECT DENSE_RANK() OVER (ORDER BY Salary DESC) 'Rank',* FROM Employees) newsub 
WHERE  Rank=4

--Get department, total salary with respect to a department from employee table
SELECT DepartmentID, SUM(Salary) 'DeptSalary'
FROM Employees GROUP BY DepartmentID 

--Get department, total salary with respect to a department from employee table order by 
--total salary descending

SELECT DepartmentID, SUM(Salary) 'DeptSalary'
FROM Employees GROUP BY DepartmentID ORDER BY SUM(Salary) DESC

--Get department wise maximum salary from employee table order by salary ascending

SELECT DepartmentID, MAX(Salary) 'DeptSalary'
FROM Employees GROUP BY DepartmentID ORDER BY MAX(Salary) 

--Get department wise minimum salary from employee table order by salary ascending

SELECT DepartmentID, MIN(Salary) 'DeptSalary'
FROM Employees GROUP BY DepartmentID ORDER BY MIN(Salary) 

--Select department, total salary with respect to a department from employee table 
--where total salary greater than 50000 order by TotalSalary descending

SELECT DepartmentID, SUM(Salary) 'DeptSalary'
FROM Employees GROUP BY DepartmentID HAVING SUM(Salary)>50000 ORDER BY SUM(Salary)  DESC


USE JEVIk
SELECT * FROM Employees