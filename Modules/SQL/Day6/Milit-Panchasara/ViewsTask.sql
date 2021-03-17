--1
CREATE OR ALTER VIEW dbo.ViewsTask1 
AS
SELECT DepartmentID,L.LocationID,L.StreetAddress,L.City,L.PostalCode,L.StateProvince,L.CountryID 
FROM Departments D JOIN Locations L ON L.LocationID = D.LocationID;
GO
SELECT * FROM dbo.ViewsTask1;
GO

--2
CREATE OR ALTER VIEW dbo.ViewsTask2
AS
SELECT FirstName, LastName, D.DepartmentID, D.DepartmentName FROM Employees E
JOIN Departments D ON D.DepartmentID = E.DepartmentID;
GO
SELECT * FROM dbo.ViewsTask2;
GO

--3
CREATE OR ALTER VIEW dbo.ViewsTask3
AS
SELECT FirstName, LastName,E.JobId, D.DepartmentID, D.DepartmentName FROM Employees E
JOIN Departments D ON D.DepartmentID = E.DepartmentID
JOIN Locations L ON L.LocationID = D.LocationID WHERE L.City = 'London';
GO
SELECT * FROM dbo.ViewsTask3;
GO

--4
CREATE OR ALTER VIEW dbo.ViewsTask4
AS
SELECT E.EmployeeID, E.LastName AS EmployeeName,E.ManagerID, M.LastName AS ManagerName FROM Employees E
JOIN Employees M ON M.EmployeeID = E.ManagerID;
GO
SELECT * FROM dbo.ViewsTask4;
GO

--5
CREATE OR ALTER VIEW dbo.ViewsTask5
AS
SELECT FirstName, LastName, HireDate FROM Employees E WHERE HireDate > (SELECT HireDate FROM Employees WHERE LastName = 'Jones');
GO
SELECT * FROM dbo.ViewsTask5;
GO

--6
CREATE OR ALTER VIEW dbo.ViewsTask6
AS
SELECT D.DepartmentName, COUNT(E.EmployeeID) AS EmployeeCount FROM Employees E JOIN 
Departments D ON D.DepartmentID = E.DepartmentID GROUP BY DepartmentName;
GO
SELECT * FROM dbo.ViewsTask6;
GO

--7
CREATE OR ALTER VIEW dbo.ViewsTask7
AS
SELECT EmployeeID, JobID, DATEDIFF(DD, StartDate, EndDate) AS DaysInterval FROM JobHistory WHERE DepartmentID = 90;
GO
SELECT * FROM dbo.ViewsTask7;
GO

--8
CREATE OR ALTER VIEW dbo.ViewsTask8
AS
SELECT E.FirstName, D.DepartmentID, D.DepartmentName FROM Employees E JOIN 
Departments D ON D.ManagerID = E.EmployeeID
GO
SELECT * FROM dbo.ViewsTask8;
GO

--9
CREATE OR ALTER VIEW dbo.ViewsTask9
AS
SELECT E.FirstName AS ManagerName, D.DepartmentName, L.City FROM Employees E JOIN 
Departments D ON D.ManagerID = E.EmployeeID JOIN
Locations L ON L.LocationID = D.LocationID;
GO
SELECT * FROM dbo.ViewsTask9;
GO

--10
CREATE OR ALTER VIEW dbo.ViewsTask10
AS
SELECT E.JobId, AVG(Salary) AS AvgSalary FROM Employees E GROUP BY JobId;
GO
SELECT * FROM dbo.ViewsTask10;
GO

--11
CREATE OR ALTER VIEW dbo.ViewsTask11
AS
SELECT E.FirstName, 
D.DepartmentName,
E.JobId,
(E.Salary - (SELECT MIN(Salary) FROM Employees E2 WHERE E2.JobId = E.JobId)) AS Diff, 
(SELECT MIN(Salary) FROM Employees E2 WHERE E2.JobId = E.JobId) AS MinSalary 
FROM Employees E JOIN 
Departments D ON D.DepartmentID = E.DepartmentID ;
GO
SELECT * FROM dbo.ViewsTask11;
GO

--12
CREATE OR ALTER VIEW dbo.ViewsTask12
AS
SELECT JH.* FROM JobHistory JH JOIN Employees E ON E.EmployeeID = JH.EmployeeID WHERE Salary > 10000;
GO
SELECT * FROM dbo.ViewsTask12;
GO

--13
CREATE OR ALTER VIEW dbo.ViewsTask13
AS
SELECT E.FirstName + ' ' + E.LastName AS Name, 
D.DepartmentName,
E.HireDate,
E.Salary
FROM Employees E JOIN 
Departments D ON D.DepartmentID = E.DepartmentID WHERE DATEDIFF(YY, HireDate, GETDATE()) > 15;
GO
SELECT * FROM dbo.ViewsTask13;
GO