--1
SELECT * FROM Employees WHERE EmployeeID IN (SELECT EmployeeRefID FROM Incentives);

--2
SELECT * FROM Employees WHERE Salary > (SELECT Salary FROM Employees WHERE FirstName = 'Roy');
GO
--3
CREATE OR ALTER VIEW dbo.View_Ex3 
AS
SELECT dbo.Employees.FirstName, dbo.Employees.LastName, dbo.Employees.JoiningDate, dbo.Employees.Salary, dbo.Incentives.IncentiveDate, dbo.Incentives.IncentiveAmount
FROM dbo.Employees INNER JOIN
dbo.Incentives ON dbo.Employees.EmployeeID = dbo.Incentives.EmployeeRefID;
GO
SELECT * FROM dbo.View_Ex3;
GO

--4
CREATE OR ALTER VIEW dbo.View_Ex4
AS
SELECT dbo.Employees.FirstName, dbo.Employees.JoiningDate, dbo.Incentives.IncentiveDate, dbo.Incentives.IncentiveAmount
FROM dbo.Employees JOIN
dbo.Incentives ON dbo.Employees.EmployeeID = dbo.Incentives.EmployeeRefID WHERE dbo.Incentives.IncentiveAmount > 3000;
GO
SELECT * FROM dbo.View_Ex4;
GO

--5
CREATE OR ALTER VIEW dbo.View_Ex5
AS
SELECT E.FirstName, E.LastName, E.JobID, D.DepartmentID, D.DepartmentName FROM Employees E JOIN 
Departments D ON D.DepartmentID = E.DepartmentID JOIN
Locations L ON L.LocationID = D.LocationID WHERE L.City = 'London'; 
GO
SELECT * FROM dbo.View_Ex5;
GO

--6
CREATE OR ALTER VIEW dbo.View_Ex6
AS
SELECT D.DepartmentName, COUNT(E.EmployeeID) AS EmployeeCount FROM Employees E JOIN 
Departments D ON D.DepartmentID = E.DepartmentID GROUP BY D.DepartmentName
GO
SELECT * FROM dbo.View_Ex6;
GO

--7
CREATE OR ALTER VIEW dbo.View_Ex7
AS
SELECT EmployeeID, JobID, DATEDIFF(DD, StartDate, EndDate) AS DaysInterval FROM JobHistory WHERE DepartmentID = 90;
GO
SELECT * FROM dbo.View_Ex7;
GO

--8
CREATE OR ALTER VIEW dbo.View_Ex8
AS
SELECT E.FirstName, D.DepartmentName, L.City FROM Employees E JOIN 
Departments D ON D.ManagerID = E.EmployeeID JOIN
Locations L ON L.LocationID = D.LocationID;
GO
SELECT * FROM dbo.View_Ex8;
GO

--9
CREATE OR ALTER VIEW dbo.View_Ex9
AS
SELECT CONCAT_WS(' ',E.FirstName,E.LastName) AS Name, D.DepartmentName, E.HireDate, E.Salary, DATEDIFF(YY, E.HireDate, GETDATE()) AS Experience FROM Employees E JOIN 
Departments D ON D.ManagerID = E.EmployeeID WHERE DATEDIFF(YY, E.HireDate, GETDATE()) > 15;
GO
SELECT * FROM dbo.View_Ex9;
GO