USE Day4


--Write a query to rank employees based on their salary for a month
SELECT EmployeeID, FirstName,Salary, RANK() OVER(ORDER BY Salary) AS 'Rank'
FROM Employees


--Select 4th Highest salary from employee table using ranking function
SELECT DISTINCT TOP 4 EmployeeID, FirstName,Salary, DENSE_RANK() OVER(ORDER BY Salary DESC) AS 'Ranks'
FROM Employees


--Get department, total salary with respect to a department from employee table.
SELECT DepartmentID, SUM(Salary) AS 'Rank' 
FROM Employees
GROUP BY DepartmentID


--Get department, total salary with respect to a department from employee table order by total salary descending
SELECT DepartmentID, SUM(Salary) AS 'Sum of Salary', ROW_NUMBER() OVER(ORDER BY SUM(Salary) DESC) AS 'Row Number' 
FROM Employees
GROUP BY DepartmentID


--Get department wise maximum salary from employee table order by salary ascending
SELECT DepartmentID, MAX(Salary) AS 'Maximum Salary', ROW_NUMBER() OVER(ORDER BY MAX(Salary)) AS 'Row Number'
FROM Employees
GROUP BY DepartmentID


--Get department wise minimum salary from employee table order by salary ascending
SELECT DepartmentID, MIN(Salary) AS 'Maximum Salary', ROW_NUMBER() OVER(ORDER BY MIN(Salary)) AS 'Row Number'
FROM Employees
GROUP BY DepartmentID


--Select department, total salary with respect to a department from employee table where total salary greater than 50000 order by TotalSalary descending
SELECT DepartmentID, SUM(Salary) AS 'Total Salary'
FROM Employees
GROUP BY DepartmentID
HAVING SUM(Salary) > 50000
ORDER BY SUM(Salary) DESC