-- Day 7 assignment 


-- ==================   (day4 query to convert into CTE)    =================================================


-- 1

WITH salary_rank_CTE (Rank,EMpID)
AS(
SELECT RANK() OVER (ORDER BY Salary) 'Rank',EmployeeID FROM Employees
)

SELECT Rank,EMpID FROM salary_rank_CTE

-- 2

WITH rank_4th_salary (Rank,Salary)
AS(
SELECT DENSE_RANK() OVER (ORDER BY Salary DESC) 'Rank',Salary FROM Employees
)
SELECT Rank,Salary FROM rank_4th_salary
WHERE Rank = 4


-- 3 

WITH total_sal_dept (DepartmentID,Salary)
AS(
 SELECT DepartmentID, SUM(Salary) 'DeptSalary'
FROM Employees GROUP BY DepartmentID 
)
SELECT DepartmentID,Salary FROM total_sal_dept
WHERE DepartmentID != 0

-- 4 

WITH total_sal_dept_desc (DepartmentID,Salary)
AS(
	SELECT DepartmentID, SUM(Salary) 'DeptSalary'
	FROM Employees GROUP BY DepartmentID 
)
SELECT DepartmentID,Salary FROM total_sal_dept_desc
WHERE DepartmentID != 0
ORDER BY Salary DESC


-- 5 

WITH dept_max_sal (DepartmentID,Salary)
AS(
	SELECT DepartmentID, MAX(Salary) 'DeptSalary'
	FROM Employees GROUP BY DepartmentID 
)
SELECT DepartmentID,Salary FROM dept_max_sal
WHERE DepartmentID != 0
ORDER BY Salary 


-- 6


WITH dept_min_sal (DepartmentID,Salary)
AS(
	SELECT DepartmentID, MIN(Salary) 'DeptSalary'
	FROM Employees GROUP BY DepartmentID 
)
SELECT DepartmentID,Salary FROM dept_min_sal
WHERE DepartmentID != 0
ORDER BY Salary 


-- 7 

WITH sal_more_50k (DepartmentID,Salary)
AS(
	SELECT DepartmentID, SUM(Salary) 'DeptSalary'
	FROM Employees GROUP BY DepartmentID 

)
SELECT DepartmentID,Salary FROM sal_more_50k
WHERE DepartmentID != 0 AND Salary>50000
ORDER BY Salary  DESC


