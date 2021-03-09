--1
SELECT DENSE_RANK() OVER(ORDER BY Salary) AS SalaryRank, * FROM Employees;

--2
SELECT * FROM (SELECT DENSE_RANK() OVER(ORDER BY Salary DESC) AS SalaryRank,* FROM Employees) AS A WHERE SalaryRank = 4;

--3
SELECT DepartmentID, SUM(Salary) AS TotalSalary FROM Employees GROUP BY DepartmentID;

--4
SELECT DepartmentID, SUM(Salary) AS TotalSalary FROM Employees GROUP BY DepartmentID ORDER BY TotalSalary DESC;

--5
SELECT DepartmentID, MAX(Salary) AS MaxSalary FROM Employees GROUP BY DepartmentID;

--6
SELECT DepartmentID, MIN(Salary) AS MinSalary FROM Employees GROUP BY DepartmentID;

--7
SELECT DepartmentID, SUM(Salary) AS TotalSalary FROM Employees 
GROUP BY DepartmentID 
HAVING SUM(Salary) > 50000 
ORDER BY TotalSalary DESC;