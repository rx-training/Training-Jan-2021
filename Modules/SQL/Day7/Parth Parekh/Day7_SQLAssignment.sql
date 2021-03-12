-- Convert Day 4 And Day 5 Queries to  CTE & Derived Table 

/******************************************* [ Day 4 Assignment Queries   ]***********************************************/

/* 1. Write a query to rank employees based on their salary for a month */
-- CTE
WITH basedonsalary (FirstName , LastName , Number) AS
(
	SELECT  FirstNAme , LastName , ROW_NUMBER() OVER (ORDER BY Salary DESC) AS 'Ranked' FROM Employees 
)
SELECT FirstName , LastName , Number FROM basedonsalary
--Derived Table 
USE DAY2
SELECT * FROM (SELECT  FirstNAme , LastName , ROW_NUMBER() OVER (ORDER BY Salary DESC) AS 'Ranked' FROM Employees ) AS Emp


/* 2. Select 4th Highest salary from employee table using ranking function  */
-- CTE 
WITH FourthHighestSalary (FirstName , LastName ,Salary , Ranked) AS
(
	SELECT FirstName , LastName ,Salary , DENSE_RANK() OVER (ORDER BY Salary DESC) AS 'Ranked' FROM Employees AS t1	
)
SELECT * FROM FourthHighestSalary WHERE Ranked = 4

-- Dervied Table
SELECT * FROM
	(SELECT FirstName , LastName ,Salary , DENSE_RANK() OVER (ORDER BY Salary DESC) AS 'Ranked' FROM Employees )AS t1
	where Ranked = 4

/* 3. Get department, total salary with respect to a department from employee table.   */
-- CTE
WITH totalSalaryEmployeeDepartment ( DepartmentID , Salary ) AS
(
	SELECT DepartmentID , SUM(Salary) 'Total Salary of Department' FROM Employees GROUP BY DepartmentID
)
SELECT * FROM totalSalaryEmployeeDepartment

-- Dervied Table
SELECT * FROM (SELECT DepartmentID , SUM(Salary) 'Total Salary of Department' FROM Employees GROUP BY DepartmentID) AS Emp
	
/* 4. Get department, total salary with respect to a department from employee table order by total salary descending  */
-- CTE
WITH totalSalaryEmployeeDepartmentDESC (DepartmentID , TotalSalary ) AS
(
	SELECT  DepartmentID  , SUM(Salary) 'Total Salary of Department' FROM Employees GROUP BY DepartmentID 
)
SELECT * FROM totalSalaryEmployeeDepartmentDESC 
ORDER BY TotalSalary DESC
        
-- Dervied Table 
SELECT * FROM (SELECT DepartmentID  , SUM(Salary) 'Total Salary of Department' FROM Employees GROUP BY DepartmentID ) AS emp
ORDER BY [Total Salary of Department] DESC


/*  5. Get department wise maximum salary from employee table order by salary ascending   */
-- CTE 
WITH maximumSalaryAscending  AS
(
	SELECT * FROM
   (SELECT DepartmentID , MAX(Salary) 'Maximum Salary of Department' FROM Employees GROUP BY DepartmentID) AS t1 
	
)
SELECT * FROM maximumSalaryAscending ORDER BY [Maximum Salary of Department] 

-- Derived Table
SELECT * FROM
(SELECT DepartmentID , MAX(Salary) 'Maximum Salary of Department' FROM Employees GROUP BY DepartmentID) AS t1 ORDER BY [Maximum Salary of Department]

/*  6. Get department wise minimum salary from employee table order by salary ascending  */
-- CTE
WITH minsalary AS 
(
	SELECT * FROM ( SELECT DepartmentID , MIN(Salary)'Minimum Salary of Department' FROM Employees GROUP BY DepartmentID ) AS t1
)
SELECT * FROM minsalary ORDER BY [Minimum Salary of Department]

-- Derived Table
SELECT * FROM ( SELECT DepartmentID , MIN(Salary)'Minimum Salary of Depaetment' FROM Employees GROUP BY DepartmentID ) AS t1 
ORDER BY [Minimum Salary of Depaetment]

/* 7. Select department, total salary with respect to a department from employee table
  where total salary greater than 50000 order by TotalSalary descending  */

-- CTE
WITH totalsalary AS (
	SELECT DepartmentID , SUM(Salary) 'TotalSalary' FROM Employees GROUP BY DepartmentID HAVING SUM(Salary) > 50000 
)
SELECT * FROM totalsalary ORDER BY TotalSalary

-- Derived Table
SELECT * FROM (SELECT DepartmentID , SUM(Salary) 'TotalSalary' FROM Employees GROUP BY DepartmentID HAVING SUM(Salary) > 50000  ) em ORDER BY TotalSalary

/******************************************* [ Day 5 Assignment Queries   ]***********************************************/

/* 1 . Get difference between JOINING_DATE and INCENTIVE_DATE from employee and incentives table */

USE Day2
-- CTE
WITH Diff  AS
(
	SELECT  e.FIRST_NAME , DATEDIFF(MM , e.JOINING_DATE, i.INCENTIVE_DATE)	
	AS 'Differecne By Month'  , e.JOINING_DATE ,  i.INCENTIVE_DATE   FROM EMPLOYEE e INNER JOIN INCENTIVES i  ON e.EMPLOYEE_ID = i.EMPLOYEE_REF_ID 
) 
SELECT * FROM Diff

-- Derived Table
	SELECT * FROM (SELECT  e.FIRST_NAME , DATEDIFF(MM , e.JOINING_DATE, i.INCENTIVE_DATE)	
	AS 'Differecne By Month'  , e.JOINING_DATE ,  i.INCENTIVE_DATE   FROM EMPLOYEE e INNER JOIN INCENTIVES i  ON e.EMPLOYEE_ID = i.EMPLOYEE_REF_ID ) emp1

/* 2. Select first_name, incentive amount from employee and incentives table for those employees who have
incentives and incentive amount greater than 3000 */
-- CTE 
WITH greatersalary (FirstName , INCENTIVE_AMOUNT) AS
(
	SELECT  e.FIRST_NAME ,i.INCENTIVE_AMOUNT  FROM EMPLOYEE e JOIN INCENTIVES i ON e.EMPLOYEE_ID = i.EMPLOYEE_REF_ID 
)
SELECT FirstName , INCENTIVE_AMOUNT FROM greatersalary WHERE INCENTIVE_AMOUNT > 3000

-- Derived Table
SELECT * FROM ( SELECT  e.FIRST_NAME ,i.INCENTIVE_AMOUNT  FROM EMPLOYEE e JOIN INCENTIVES i ON e.EMPLOYEE_ID = i.EMPLOYEE_REF_ID )Emp 
       WHERE INCENTIVE_AMOUNT > 3000

/* 3. Select first_name, incentive amount from employee and incentives table for all employees even if they didn't get incentives. */
-- CTE 
WITH employeeincentive ( FirstName , INCENTIVE_AMOUNT  ) AS
(
	SELECT e.FIRST_NAME , i.INCENTIVE_AMOUNT   FROM EMPLOYEE e LEFT OUTER JOIN INCENTIVES i ON e.EMPLOYEE_ID = i.EMPLOYEE_REF_ID 
)
SELECT FirstName , INCENTIVE_AMOUNT FROM employeeincentive 

-- Derived Table
SELECT * FROM ( SELECT e.FIRST_NAME , i.INCENTIVE_AMOUNT   FROM EMPLOYEE e LEFT OUTER JOIN INCENTIVES i ON e.EMPLOYEE_ID = i.EMPLOYEE_REF_ID ) Emp

/* 4. Select EmployeeName, ManagerName from the employee table. */
-- CTE 
WITH managerName AS
(
	SELECT e.FIRST_NAME , s.FIRST_NAME AS 'Manager Name' FROM EMPLOYEE e LEFT OUTER JOIN EMPLOYEE s  ON s.EMPLOYEE_ID = e.MANAGER_ID 
)
SELECT * FROM managerName

-- Derived Table
SELECT * FROM (SELECT e.FIRST_NAME , s.FIRST_NAME  AS 'Manager Name' FROM EMPLOYEE e LEFT OUTER JOIN EMPLOYEE s  ON s.EMPLOYEE_ID = e.MANAGER_ID ) emp


/*  5. Select first_name, incentive amount from employee and incentives table
for all employees even if they didn't get incentives 
and set incentive amount as 0 for those employees who didn't get incentives.  */
-- CTE

WITH setnull AS
(
SELECT FIRST_NAME ,  ISNULL(b.INCENTIVE_AMOUNT , 0) AS 'Amount' FROM EMPLOYEE a LEFT OUTER JOIN INCENTIVES b ON a.EMPLOYEE_ID = b.EMPLOYEE_REF_ID
)
SELECT * FROM setnull

--DERIVED Table

SELECT * FROM (SELECT FIRST_NAME ,  ISNULL(b.INCENTIVE_AMOUNT , 0) AS 'Amount' 
              FROM EMPLOYEE a LEFT OUTER JOIN INCENTIVES b ON a.EMPLOYEE_ID = b.EMPLOYEE_REF_ID) emp

