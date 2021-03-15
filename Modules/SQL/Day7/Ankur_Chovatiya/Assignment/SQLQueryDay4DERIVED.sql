---- Day 7 assignment 


-- ==================   (day4 query to convert into derived table)    =================================================

-- 1 


SELECT Rank,EmployeeID FROM(
SELECT RANK() OVER (ORDER BY Salary) 'Rank',EmployeeID FROM Employees
) D_table
 

-- 2 


SELECT Rank,Salary FROM(
SELECT DENSE_RANK() OVER (ORDER BY Salary) 'Rank',Salary FROM Employees
) D_table
WHERE Rank=4


-- 3 

SELECT DepartmentID,DeptSalary FROM(
SELECT DepartmentID, SUM(Salary) 'DeptSalary'
FROM Employees GROUP BY DepartmentID ) D_table
WHERE DepartmentID != 0


-- 4 


SELECT DepartmentID,DeptSalary FROM(
SELECT DepartmentID, SUM(Salary) 'DeptSalary'
FROM Employees GROUP BY DepartmentID  ) D_table
WHERE DepartmentID != 0
ORDER BY DeptSalary DESC

-- 5 


SELECT DepartmentID,DeptSalary FROM(
SELECT DepartmentID, MAX(Salary) 'DeptSalary'
FROM Employees GROUP BY DepartmentID ) D_table
WHERE DepartmentID != 0
ORDER BY DeptSalary 


-- 6 


SELECT DepartmentID,DeptSalary FROM(
SELECT DepartmentID, MIN(Salary) 'DeptSalary'
FROM Employees GROUP BY DepartmentID  ) D_table
WHERE DepartmentID != 0
ORDER BY DeptSalary

-- 7 

SELECT DepartmentID,DeptSalary FROM(
SELECT DepartmentID, SUM(Salary) 'DeptSalary'
FROM Employees GROUP BY DepartmentID  ) D_table
WHERE DepartmentID != 0 AND DeptSalary>50000
ORDER BY DeptSalary DESC