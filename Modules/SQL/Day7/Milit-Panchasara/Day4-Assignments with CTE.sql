--13
WITH CTE1 (SalaryRank, EmployeeID, FirstName, LastName, Salary)
AS
(
SELECT DENSE_RANK() OVER(ORDER BY Salary DESC) AS SalaryRank, EmployeeID, FirstName, LastName, Salary FROM Employees
)
SELECT * FROM CTE1;

--2
WITH CTE2 (SalaryRank, EmployeeID, FirstName, LastName, Salary)
AS
(
SELECT DENSE_RANK() OVER(ORDER BY Salary DESC) AS SalaryRank, EmployeeID, FirstName, LastName, Salary FROM Employees
)
SELECT * FROM CTE2 WHERE SalaryRank = 4;

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
)
SELECT * FROM CTE7 WHERE TotalSalary > 50000 ORDER BY TotalSalary DESC;