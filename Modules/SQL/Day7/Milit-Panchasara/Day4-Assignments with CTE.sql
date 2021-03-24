--13
WITH CTE1 (SalaryRank, EmployeeID, FirstName, LastName, Salary)
AS
(
SELECT DENSE_RANK() OVER(ORDER BY Salary) AS SalaryRank, EmployeeID, FirstName, LastName, Salary FROM Employees
)
SELECT * FROM CTE1;

--2
WITH CTE2 (SalaryRank, EmployeeID, FirstName, LastName, Salary)
AS
(
SELECT SalaryRank, EmployeeID, FirstName, LastName, Salary FROM 
(SELECT DENSE_RANK() OVER(ORDER BY Salary DESC) AS SalaryRank,* FROM Employees) AS A 
WHERE SalaryRank = 4
)
SELECT * FROM CTE2;

--3
WITH CTE3 (DepartmentID, TotalSalary)
AS
(
SELECT DepartmentID, SUM(Salary) AS TotalSalary FROM Employees GROUP BY DepartmentID
)
SELECT * FROM CTE3;

--4
WITH CTE4 (DepartmentID, TotalSalary)
AS
(
SELECT DepartmentID, SUM(Salary) AS TotalSalary FROM Employees GROUP BY DepartmentID
)
SELECT * FROM CTE4 ORDER BY TotalSalary DESC;

--5
WITH CTE5 (DepartmentID, TotalSalary)
AS
(
SELECT DepartmentID, MAX(Salary) AS MaxSalary FROM Employees GROUP BY DepartmentID
)
SELECT * FROM CTE5;

--6
WITH CTE6 (DepartmentID, TotalSalary)
AS
(
SELECT DepartmentID, MIN(Salary) AS MinSalary FROM Employees GROUP BY DepartmentID
)
SELECT * FROM CTE6;

--7
WITH CTE7 (DepartmentID, TotalSalary)
AS
(
SELECT DepartmentID, SUM(Salary) AS TotalSalary FROM Employees 
GROUP BY DepartmentID 
HAVING SUM(Salary) > 50000
)
SELECT * FROM CTE7 ORDER BY TotalSalary DESC;