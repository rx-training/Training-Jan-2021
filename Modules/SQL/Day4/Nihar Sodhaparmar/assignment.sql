USE Day2;

SELECT * FROM Employees;

/* 1. Write a query to rank employees based on their salary for a month */
SELECT EmployeeID, Salary, DENSE_RANK() OVER (ORDER BY Salary DESC) AS 'Rank' 
FROM Employees;


/* 2. Select 4th Highest salary from employee table using ranking function */
SELECT SalaryTbl.Salary AS '4th Max Salary' 
FROM (SELECT EmployeeID, Salary, DENSE_RANK() OVER (ORDER BY Salary DESC) AS 'SalaryRank' FROM Employees) AS SalaryTbl
WHERE SalaryTbl.SalaryRank = 4;


/* 3. Get department, total salary with respect to a department from employee table. */
SELECT DepartmentID, SUM(Salary) AS 'Department Wise Salary' 
FROM Employees 
GROUP BY DepartmentID;


/* 4. Get department, total salary with respect to a department from employee table order by total salary descending */
SELECT *
FROM (SELECT DepartmentID, SUM(Salary) AS 'Department Wise Salary' FROM Employees GROUP BY DepartmentID) AS SalaryTbl
ORDER BY SalaryTbl.[Department Wise Salary] DESC;


/* 5. Get department wise maximum salary from employee table order by salary ascending */
SELECT *
FROM (SELECT DepartmentID, MAX(Salary) AS 'Max Salary Of Department' FROM Employees GROUP BY DepartmentID) AS SalaryTbl
ORDER BY SalaryTbl.[Max Salary Of Department];


/* 6. Get department wise minimum salary from employee table order by salary ascending */
SELECT *
FROM (SELECT DepartmentID, MIN(Salary) AS 'Min Salary Of Department' FROM Employees GROUP BY DepartmentID) AS SalaryTbl
ORDER BY SalaryTbl.[Min Salary Of Department];


/* 7. Select department, total salary with respect to a department from employee table where total salary 
greater than 50000 order by TotalSalary descending */
SELECT *
FROM (SELECT DepartmentID, SUM(Salary) AS 'TotalSalary' FROM Employees GROUP BY DepartmentID HAVING SUM(Salary) > 50000) AS SalaryTbl
ORDER BY SalaryTbl.TotalSalary DESC;