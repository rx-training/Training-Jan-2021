USE Day2DB

SELECT * FROM Employees

/*1. Write a query to rank employees based on their salary for a month*/
SELECT EmployeeID, FirstName, LastName, Salary, DENSE_RANK() OVER (ORDER BY Salary) 'DenseRank', RANK() OVER (ORDER BY Salary) 'Rank'
FROM Employees

/*2. Select 4th Highest salary from employee table using ranking function*/
SELECT * FROM 
(SELECT EmployeeID, FirstName, LastName, Salary, DENSE_RANK() OVER (ORDER BY Salary DESC) 'DenseRank' FROM Employees) AS RankTbl
WHERE DenseRank=4

/*3. Get department, total salary with respect to a department from employee table.*/
SELECT DepartmentID, SUM(Salary) AS 'Total Salary' 
FROM Employees
GROUP BY DepartmentID

/*4. Get department, total salary with respect to a department from employee table order by total salary descending*/
SELECT DepartmentID, SUM(Salary) AS 'Total Salary' 
FROM Employees
GROUP BY DepartmentID
ORDER BY 'Total Salary' DESC

/*5. Get department wise maximum salary from employee table order by salary ascending*/
SELECT DepartmentID, MAX(Salary) AS 'Max Salary' 
FROM Employees
GROUP BY DepartmentID
ORDER BY 'Max Salary'

/*6. Get department wise minimum salary from employee table order by salary ascending*/
SELECT DepartmentID, MIN(Salary) AS 'Min Salary' 
FROM Employees
GROUP BY DepartmentID
ORDER BY 'Min Salary'

/*7. Select department, total salary with respect to a department from employee table where total salary greater than 50000 order by TotalSalary descending*/
SELECT DepartmentID, SUM(Salary) AS 'Total Salary' 
FROM Employees
GROUP BY DepartmentID
HAVING SUM(Salary)> 50000
ORDER BY 'Total Salary' DESC