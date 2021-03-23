USE Employeesdb;

/* Write a query to rank employees based on their salary for a month */
WITH RANKS_CTE (SalaryRank)
AS
(
SELECT DENSE_RANK() OVER (ORDER BY Salary) AS RANK FROM Employees GROUP BY Salary
)
SELECT * FROM RANKS_CTE;

--SELECT * FROM Employees;

/* Select 4th Highest salary from employee table using ranking function */
WITH HighestSalary_CTE (FirstName, LastName, Salary, SalaryRank)
AS
(
SELECT * FROM(
SELECT FirstName, LastName, Salary, DENSE_RANK() OVER (ORDER BY Salary DESC) AS 'Salary Rank' FROM Employees) AS mytable  
)
SELECT * FROM HighestSalary_CTE WHERE [SalaryRank] = 4;

/* Get department, total salary with respect to a department from employee table. */
WITH Department_CTE (JobId, SumOfSalary)
AS
(
SELECT JobId, SUM(Salary) AS "TOTAL SALARY" FROM Employees GROUP BY ROLLUP(JobId)
)
SELECT * FROM Department_CTE;

/* Get department, total salary with respect to a department from employee table order by total salary descending */
WITH Depart_CTE (JobId, SumOfSalary)
AS
(
SELECT JobId, SUM(Salary) AS "TOTAL SALARY" FROM Employees GROUP BY JobId 
)
SELECT SUM(SumOfSalary) FROM Depart_CTE;

/* Get department wise maximum salary from employee table order by salary ascending */
WITH Maxsal_CTE (JobId, MaxSalary)
AS
(
SELECT JobId, MAX(Salary) AS "MAXIMUM SALARY" FROM Employees GROUP BY JobId 
)
SELECT * FROM Maxsal_CTE ORDER BY MaxSalary;

/* Get department wise minimum salary from employee table order by salary ascending */
WITH Minsal_CTE (JobId, MinSalary)
AS
(
SELECT JobId, MIN(Salary) AS "MINIMUM SALARY" FROM Employees GROUP BY JobId 
)
SELECT * FROM Minsal_CTE ORDER BY MinSalary;

/* Select department, total salary with respect to a department from employee table where total salary greater than 50000 order by TotalSalary descending */
WITH Totalsal_CTE (JobId, TotalSalary)
AS
(
SELECT JobId, SUM(Salary) AS "TOTAL SALARY GREATER THAN 50000" FROM Employees GROUP BY JobId HAVING SUM(Salary) > 50000 
)
SELECT * FROM Totalsal_CTE ORDER BY TotalSalary DESC;


USE Empdb;


/* Get difference between JOINING_DATE and INCENTIVE_DATE from employee and incentives table */
WITH Diff_CTE (FirstName,DateDifference)
AS
(
SELECT FIRST_NAME, DATEDIFF(YEAR,JOINING_DATE,INCENTIVE_DATE) FROM Employees A INNER JOIN Incentives B ON A.EMPLOYEE_ID = B.EMPLOYEE_REF_ID
)
SELECT * FROM Diff_CTE;

/* Select first_name, incentive amount from employee and incentives table for those employees who have incentives and incentive amount greater than 3000 */
WITH Incentive_CTE (FirstName,IncentiveAmount)
AS
(
SELECT FIRST_NAME, INCENTIVE_AMOUNT FROM Employees A INNER JOIN Incentives B ON A.EMPLOYEE_ID = B.EMPLOYEE_REF_ID AND INCENTIVE_AMOUNT>3000
)
SELECT * FROM Incentive_CTE;

/* Select first_name, incentive amount from employee and incentives table for all employees even if they didn’t get incentives. */
WITH Incent_CTE (FirstName,IncentiveAmount)
AS
(
SELECT FIRST_NAME, INCENTIVE_AMOUNT FROM Employees A LEFT JOIN Incentives B ON A.EMPLOYEE_ID = B.EMPLOYEE_REF_ID
)
SELECT * FROM Incent_CTE;

/* Select EmployeeName, ManagerName from the employee table. */
WITH Manager_CTE (FirstName, ManagerID)
AS
(
SELECT FIRST_NAME, MANAGER_ID FROM Employees
)
SELECT * FROM Manager_CTE;

/* Select first_name, incentive amount from employee and incentives table for all employees even if they didn’t get incentives and set incentive amount as 0 
for those employees who didn’t get incentives. */
WITH NoIncentive_CTE (FirstName, IncentiveAmount)
AS
(
SELECT FIRST_NAME, ISNULL(INCENTIVE_AMOUNT,0) FROM Employees A LEFT JOIN Incentives B ON A.EMPLOYEE_ID = B.EMPLOYEE_REF_ID
)
SELECT * FROM NoIncentive_CTE;
