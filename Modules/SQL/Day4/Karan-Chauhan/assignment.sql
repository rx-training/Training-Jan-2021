USE Employeesdb;

/* Write a query to rank employees based on their salary for a month */
SELECT DENSE_RANK() OVER (ORDER BY Salary) AS RANK,* FROM Employees;

--SELECT * FROM Employees;

/* Select 4th Highest salary from employee table using ranking function */
SELECT * FROM
(SELECT FirstName, LastName, Salary, DENSE_RANK() OVER (ORDER BY Salary DESC) AS 'Salary Rank' FROM Employees) AS mytable WHERE [Salary Rank] = 4 ;

/* Get department, total salary with respect to a department from employee table. */
SELECT JobId, SUM(Salary) AS "TOTAL SALARY" FROM Employees GROUP BY ROLLUP(JobId);

/* Get department, total salary with respect to a department from employee table order by total salary descending */
SELECT JobId, SUM(Salary) AS "TOTAL SALARY" FROM Employees GROUP BY JobId ORDER BY SUM(Salary) DESC;

/* Get department wise maximum salary from employee table order by salary ascending */
SELECT JobId, MAX(Salary) AS "MAXIMUM SALARY" FROM Employees GROUP BY JobId ORDER BY MAX(Salary);

/* Get department wise minimum salary from employee table order by salary ascending */
SELECT JobId, MIN(Salary) AS "MINIMUM SALARY" FROM Employees GROUP BY JobId ORDER BY MIN(Salary);

/* Select department, total salary with respect to a department from employee table where total salary greater than 50000 order by TotalSalary descending */
SELECT JobId, SUM(Salary) AS "TOTAL SALARY GREATER THAN 50000" FROM Employees GROUP BY JobId HAVING SUM(Salary) > 50000 ORDER BY SUM(Salary) DESC;