--1
SELECT FirstName, LastName, Salary FROM Employees WHERE Salary > (SELECT Salary FROM Employees WHERE LastName ='Bull');

--2
SELECT FirstName, LastName FROM Employees WHERE DepartmentID = (SELECT DepartmentID FROM Departments WHERE DepartmentName = 'IT');

--3
SELECT FirstName, LastName FROM Employees WHERE DepartmentID IN 
(SELECT DepartmentID FROM Departments WHERE LocationID IN 
(SELECT LocationID FROM Locations WHERE CountryID = 'US' ));

--4
SELECT FirstName, LastName FROM Employees WHERE EmployeeID IN (SELECT DISTINCT ManagerID FROM Employees);

--5
SELECT FirstName, LastName, Salary FROM Employees WHERE Salary > (SELECT AVG(Salary) FROM Employees);

--6
SELECT FirstName, LastName, Salary FROM Employees WHERE Salary IN (SELECT MIN(Salary) FROM Employees GROUP BY JobId);

--7
SELECT FirstName, LastName, Salary FROM Employees 
WHERE Salary > (SELECT AVG(Salary) FROM Employees) 
AND DepartmentID = (SELECT DepartmentID FROM Departments WHERE DepartmentName = 'IT');

--8
SELECT FirstName, LastName, Salary FROM Employees WHERE Salary > (SELECT Salary FROM Employees WHERE LastName ='Bell');

--9
SELECT FirstName, LastName, Salary FROM Employees WHERE Salary IN (SELECT MIN(Salary) FROM Employees GROUP BY DepartmentID);

--10
SELECT FirstName, LastName, Salary FROM Employees WHERE Salary > (SELECT AVG(Salary) FROM Employees);

--11
SELECT FirstName, LastName, Salary FROM Employees WHERE Salary > (SELECT MAX(Salary) FROM Employees WHERE JobId = 'SH_CLERK') ORDER BY Salary;

--12
SELECT FirstName, LastName FROM Employees WHERE EmployeeID NOT IN (SELECT DISTINCT ManagerID FROM Employees);

--13
SELECT EmployeeID, FirstName, LastName, (SELECT DepartmentName FROM Departments WHERE DepartmentID = Employees.DepartmentID) AS Department
FROM Employees;

--14
SELECT EmployeeID, FirstName, LastName, Salary FROM Employees E WHERE 
Salary > (SELECT AVG(Salary) FROM Employees EE WHERE EE.DepartmentID = E.DepartmentID);

--15
SELECT * FROM (SELECT ROW_NUMBER()  OVER(ORDER BY EmployeeID) AS Ranks,* FROM Employees) AS X WHERE X.Ranks % 2 = 0;

--16
SELECT DISTINCT TOP 1 Salary FROM Employees WHERE Salary NOT IN 
(SELECT DISTINCT TOP 4 Salary FROM Employees ORDER BY Salary DESC ) ORDER BY Salary DESC;

--17
SELECT DISTINCT TOP 1 Salary FROM Employees WHERE Salary NOT IN 
(SELECT DISTINCT TOP 3 Salary FROM Employees ORDER BY Salary ) ORDER BY Salary;

--18
SELECT TOP 10 * FROM (SELECT ROW_NUMBER()  OVER(ORDER BY EmployeeID) AS Ranks,* FROM Employees) AS X ORDER BY Ranks DESC;

--19
SELECT D.DepartmentID, D.DepartmentName FROM Departments D WHERE DepartmentID NOT IN (SELECT DISTINCT DepartmentID FROM Employees);

--20
SELECT DISTINCT TOP 3 Salary FROM Employees ORDER BY Salary DESC;

--21
SELECT DISTINCT TOP 3 Salary FROM Employees ORDER BY Salary;

--22
DECLARE @n int;
SET @n = 4;
SELECT DISTINCT TOP 1 Salary FROM Employees WHERE Salary NOT IN 
(SELECT DISTINCT TOP (@n) Salary FROM Employees ORDER BY Salary DESC ) ORDER BY Salary DESC;