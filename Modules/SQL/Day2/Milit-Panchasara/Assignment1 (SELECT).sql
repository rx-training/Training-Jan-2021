--1
SELECT * FROM Employees;

--2
SELECT FirstName, LastName FROM Employees;

--3
SELECT FirstName as 'Employee Name' FROM Employees;

--4
SELECT * FROM Employees WHERE FirstName = 'Steven';

--5
SELECT * FROM Employees WHERE FirstName IN ('NEENA', 'Lex');

--6
SELECT * FROM Employees WHERE FirstName NOT IN ('NEENA', 'Lex');

--7
SELECT * FROM Employees WHERE Salary BETWEEN 5000 AND 8000;

--8
SELECT FirstName, LastName, Salary, (Salary * 0.12) AS 'PF' FROM Employees;

--9
SELECT * FROM Employees WHERE FirstName like 'N%';

--10
SELECT DISTINCT DepartmentID FROM Employees;

--11
SELECT * FROM Employees ORDER BY FirstName DESC;

--12
SELECT EmployeeID, FirstName, LastName, Salary FROM Employees ORDER BY Salary;

--13
SELECT TOP 2 EmployeeID, FirstName, LastName, Salary FROM Employees ORDER BY Salary DESC;