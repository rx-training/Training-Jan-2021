-- Assignment in Traing plan on Supported file Tables

-- 1 

CREATE VIEW EMP_LONDON
AS
SELECT E.FirstName , E.LastName ,E.JobId, D.DepartmentID , D.DepartmentName FROM Employees AS E
JOIN Departments AS D ON E.DepartmentID = D.DepartmentID
JOIN Locations AS L ON D.LocationID = L.LocationID
WHERE L.City = 'London'


-- 2 

CREATE VIEW EMP_CONTACT
AS
SELECT DepartmentName , DepartmentID FROM Departments

-- 3 

SELECT EmployeeID , JobID , DATEDIFF(DAY , StartDate , EndDate) Days FROM JobHistory
WHERE DepartmentID = 90 

-- 4

CREATE VIEW DEPT_CITY 
AS
SELECT d.DepartmentName,e.FirstName,l.City
FROM Departments d
JOIN Employees e ON d.ManagerID=e.EmployeeID
JOIN Locations l ON d.LocationID =l.LocationID




-- 5 

CREATE VIEW MAN_EXP_15Y
AS
SELECT d.DepartmentName,e.FirstName+' '+e.LastName 'Name',e.HireDate,e.Salary
FROM Departments d
JOIN Employees e
ON d.ManagerID=e.EmployeeID
WHERE DATEDIFF(YEAR,HireDate,GETDATE()) > 15


















