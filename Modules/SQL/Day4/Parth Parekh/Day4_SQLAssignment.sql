SELECT * FROM Employees

/* 1. Write a query to rank employees based on their salary for a month */

SELECT  FirstNAme , LastName , ROW_NUMBER() OVER (ORDER BY Salary DESC) AS 'Ranked' FROM Employees 

/*----------------------------------------------------------------------------------------------------------------------------------------------*/

/* 2. Select 4th Highest salary from employee table using ranking function  */

SELECT * FROM
	(SELECT FirstName , LastName ,Salary , DENSE_RANK() OVER (ORDER BY Salary DESC) AS 'Ranked' FROM Employees )AS t1
	where Ranked = 4

/*-------------------------------------------------------------------------------------------------------------------------------------------*/

/* 3. Get department, total salary with respect to a department from employee table.   */

SELECT DepartmentID , SUM(Salary) 'Total Salary of Department' FROM Employees GROUP BY DepartmentID

/*------------------------------------------------------------------------------------------------------------------------------------------*/

/* 4. Get department, total salary with respect to a department from employee table order by total salary descending  */

SELECT DepartmentID  , SUM(Salary) 'Total Salary of Department' FROM Employees GROUP BY  DepartmentID ORDER BY SUM(Salary) DESC

-- Query Answer Using SubQuery
SELECT * FROM
(SELECT DepartmentID  , SUM(Salary) 'Total Salary of Department' FROM Employees GROUP BY  DepartmentID)	AS t1 ORDER BY [Total Salary of Department] DESC

/*--------------------------------------------------------------------------------------------------------------------------------------------*/

/*  5. Get department wise maximum salary from employee table order by salary ascending   */

SELECT DepartmentID , MAX(Salary) 'Maximum Salary of Department' FROM Employees GROUP BY DepartmentID ORDER BY MAX(Salary)

-- Query Answer Using SubQuery
SELECT * FROM
(SELECT DepartmentID , MAX(Salary) 'Maximum Salary of Department' FROM Employees GROUP BY DepartmentID) AS t1 ORDER BY [Maximum Salary of Department]

/*--------------------------------------------------------------------------------------------------------------------------------------------*/

/*  6. Get department wise minimum salary from employee table order by salary ascending  */

SELECT DepartmentID , MIN(Salary)'Minimum Salary of Depaetment' FROM Employees GROUP BY DepartmentID ORDER BY MIN(Salary)

-- Query Answer Using SubQuery
SELECT * FROM
(SELECT DepartmentID , MIN(Salary) 'Minimum Salary of Department' FROM Employees GROUP BY DepartmentID) AS t1 ORDER BY [Minimum Salary of Department]

/*--------------------------------------------------------------------------------------------------------------------------------------------*/

/* 7. Select department, total salary with respect to a department from employee table
  where total salary greater than 50000 order by TotalSalary descending  */

SELECT DepartmentID , SUM(Salary) 'TotalSalary' FROM Employees GROUP BY DepartmentID HAVING SUM(Salary) > 50000 ORDER BY TotalSalary

-- Query Answer Using SubQuery
SELECT * FROM
(SELECT DepartmentID  , SUM(Salary) 'Total Salary of Department' FROM Employees GROUP BY  DepartmentID)	AS t1 WHERE [Total Salary of Department] > 50000 ORDER BY [Total Salary of Department]

/*--------------------------------------------------------------------------------------------------------------------------------------------*/
