USE TestData
SELECT * FROM Employees


--Write a query to rank employees based on their salary for a month
SELECT EmployeeID, 
	Salary,
	RANK() OVER (ORDER BY salary)
FROM Employees


--Select 4th Highest salary from employee table using ranking function

SELECT * FROM 
(SELECT  salary,RANK() OVER (ORDER BY Salary DESC) 'salary_rank'
FROM Employees) AS rankquery
WHERE salary_rank = 4

--Get department, total salary with respect to a department from employee table.

SELECT   DepartmentID,
		SUM(Salary) as 'total salary'
FROM Employees
GROUP BY ROLLUP(DepartmentID)

--Get department, total salary with respect
--to a department from employee table order by total salary descending
SELECT * FROM (SELECT   DepartmentID,
		SUM(Salary) as 'total salary'
FROM Employees
GROUP BY ROLLUP(DepartmentID)) AS department ORDER BY ([total salary]) DESC


--Get department wise maximum salary from employee table order by salary ascending
SELECT * FROM (SELECT   DepartmentID,
		MAX(Salary) AS "MAX_SALARY"
FROM Employees
GROUP BY (DepartmentID)) AS department ORDER BY ([MAX_SALARY]) DESC

SELECT Salary,DepartmentID
FROM Employees

--Get department wise minimum salary from employee table order by salary ascending

SELECT * FROM (SELECT   DepartmentID,
		MIN(Salary) AS "MIN_SALARY"
FROM Employees
GROUP BY (DepartmentID)) AS department ORDER BY ([MIN_SALARY]) DESC

--Select department, total salary with respect to a department from employee
--table where total salary greater than 50000 order by TotalSalary descending

SELECT   DepartmentID,
		SUM(Salary) as 'total salary'
FROM Employees
GROUP BY ROLLUP(DepartmentID)
HAVING SUM(Salary) > 50000 ORDER BY ([total salary]) DESC
SELECT Salary,DepartmentID
FROM Employees
