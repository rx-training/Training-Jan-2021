USE Employeesdb;

/* Write a query to rank employees based on their salary for a month */
SELECT DENSE_RANK() OVER (ORDER BY Salary) AS [d_rank],* FROM Employees [table_temp];

--SELECT * FROM Employees;

/* Select 4th Highest salary from employee table using ranking function */
SELECT * FROM
(SELECT FirstName, LastName, Salary, DENSE_RANK() OVER (ORDER BY Salary DESC) AS 'Salary Rank' FROM Employees) AS [table_temp] WHERE [Salary Rank] = 4 ;

/* Get department, total salary with respect to a department from employee table. */
SELECT * FROM (SELECT JobId, SUM(Salary) AS "TOTAL SALARY" FROM Employees GROUP BY ROLLUP(JobId)) [table_temp] ;

/* Get department, total salary with respect to a department from employee table order by total salary descending */
SELECT JobId, SUM(Salary) AS "TOTAL SALARY" FROM Employees AS [table_temp] GROUP BY JobId ORDER BY SUM(Salary) DESC ;

/* Get department wise maximum salary from employee table order by salary ascending */
SELECT JobId, MAX(Salary) AS "MAXIMUM SALARY" FROM Employees AS [table_temp] GROUP BY JobId ORDER BY MAX(Salary);

/* Get department wise minimum salary from employee table order by salary ascending */
SELECT JobId, MIN(Salary) AS "MINIMUM SALARY" FROM Employees AS [table_temp] GROUP BY JobId ORDER BY MIN(Salary);

/* Select department, total salary with respect to a department from employee table where total salary greater than 50000 order by TotalSalary descending */
SELECT JobId, SUM(Salary) AS "TOTAL SALARY GREATER THAN 50000" FROM Employees AS [table_temp] GROUP BY JobId HAVING SUM(Salary) > 50000 ORDER BY SUM(Salary) DESC;


USE Empdb;

/* Get difference between JOINING_DATE and INCENTIVE_DATE from employee and incentives table */
SELECT * FROM (SELECT FIRST_NAME, DATEDIFF(YEAR,JOINING_DATE,INCENTIVE_DATE) AS "DateDifference" FROM Employees A INNER JOIN Incentives B ON A.EMPLOYEE_ID = B.EMPLOYEE_REF_ID) AS [table_temp];

/* Select first_name, incentive amount from employee and incentives table for those employees who have incentives and incentive amount greater than 3000 */
SELECT * FROM (SELECT FIRST_NAME, INCENTIVE_AMOUNT FROM Employees A INNER JOIN Incentives B ON A.EMPLOYEE_ID = B.EMPLOYEE_REF_ID AND INCENTIVE_AMOUNT>3000) AS [table_temp];

/* Select first_name, incentive amount from employee and incentives table for all employees even if they didn’t get incentives. */
SELECT * FROM (SELECT FIRST_NAME, INCENTIVE_AMOUNT FROM Employees A LEFT JOIN Incentives B ON A.EMPLOYEE_ID = B.EMPLOYEE_REF_ID) AS [table_temp];

/* Select EmployeeName, ManagerName from the employee table. */
SELECT * FROM (SELECT FIRST_NAME, MANAGER_ID FROM Employees) AS [table_temp];

/* Select first_name, incentive amount from employee and incentives table for all employees even if they didn’t get incentives and set incentive amount as 0 
for those employees who didn’t get incentives. */
SELECT FIRST_NAME, ISNULL(INCENTIVE_AMOUNT,0) FROM Employees A LEFT JOIN Incentives B ON A.EMPLOYEE_ID = B.EMPLOYEE_REF_ID;