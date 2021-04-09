--DAY 4 EXCERCIES WITH CTE AND DERIVED TABLE

--excercises which was not done using derived table or CTE


--Select 4th Highest salary from employee table using ranking function

WITH max_4th (Salary,salary_rank) 
AS(

SELECT Salary, RANK() OVER (ORDER BY SAlary DESC) 'Salary_rank'
FROM Employees)
SELECT * FROM max_4th 
WHERE salary_rank =4
--Get department, total salary with respect to a department from employee table.
WITH total_sal (Id,SAL)
AS(
SELECT DepartmentID , SUM(Salary) AS 'SAL' FROM Employees GROUP BY (DepartmentID))
SELECT * FROM total_sal ORDER BY [SAL] 

--Get department, total salary with respect
--to a department from employee table order by total salary descending

WITH total_sal (Id,SAL)
AS(
SELECT DepartmentID , SUM(Salary) AS 'SAL' FROM Employees GROUP BY (DepartmentID))
SELECT * FROM total_sal ORDER BY [SAL]  DESC



--Get department wise maximum salary from employee table order by salary ascending
WITH MAX_sal (ID,maximum)
AS(
SELECT DepartmentID , MAX(Salary) AS 'maximum' FROM Employees GROUP BY (DepartmentID))
SELECT * FROM MAX_sal ORDER BY maximum DESC

--Get department wise minimum salary from employee table order by salary ascending
WITH MIN_sal (ID,Minimum)
AS(
SELECT DepartmentID , MIN(Salary) AS 'Minimum' FROM Employees GROUP BY (DepartmentID))
SELECT * FROM MIN_sal ORDER BY Minimum 
--Select department, total salary with respect to a department from employee
--table where total salary greater than 50000 order by TotalSalary descending
USE TestData

WITH Sal_CTE (DepartmentID ,TotalSalary)
AS(
SELECT DepartmentID , SUM(salary) AS 'TotalSalary' 
FROM Employees 

GROUP BY(DepartmentID)
)
SELECT *
FROM Sal_CTE 
WHERE TotalSalary > 50000
ORDER BY TotalSalary DESC


--Day 5 assignment-1
--Get difference between JOINING_DATE and INCENTIVE_DATE from
----employee and incentives table
USE CarSales

SELECT ID,DATEDIFF(day,j,I)
	FROM 
	(SELECT  Employee_Ref_Id AS 'ID',Incentive_Date as 'I'
		FROM incentives) id,
	(SELECT  Employee_ID as 'ID2',Joining_Date as 'j'
		FROM Employees)jd WHERE id.ID = jd.ID2
	
--Select first_name, incentive amount from employee and incentives table for
--those employees who have incentives and incentive amount greater than 3000
SELECT NAME ,amt
FROM 
	(SELECT  Incentive_Amount as 'amt',Employee_Ref_Id as 'ID'
		FROM incentives) id,
	(SELECT  First_Name as 'Name',Employee_ID as 'ID2'
		FROM Employees)jd WHERE id.ID = jd.ID2 AND amt  > 3000

--Select first_name, incentive amount from
--employee and incentives table for all employees even if they didn’t get incentives.

SELECT id.amt ,jd.Name 
FROM 
	(SELECT  Incentive_Amount as 'amt',Employee_Ref_Id
		FROM incentives) AS id FULL OUTER JOIN
	(SELECT  First_Name as 'Name',Employee_ID 
		FROM Employees) AS jd ON  id.Employee_Ref_Id = jd.Employee_ID

--Select EmployeeName, ManagerName from the employee table.

SELECT EMP, MNG
FROM  (
	SELECT  Manager_ID ,First_Name AS 'EMP'
		FROM Employees ) as e JOIN 
	(SELECT  Employee_ID ,First_Name as 'MNG'
		FROM Employees) as m ON  e.Manager_ID= m.Employee_ID

