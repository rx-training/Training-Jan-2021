

----Create a View to Find the names (first_name, last_name), job, department number, and department name of the employees who work in London----

CREATE VIEW A1
AS
SELECT e.FirstName,e.LastName,e.JobID,d.DepartmentID,d.DepartmentName,d.LocationID
FROM Employees e JOIN Departments d
ON e.DepartmentID=d.DepartmentID;

SELECT FirstName,LastName,JobID,DepartmentID,DepartmentName FROM A1 WHERE LocationID IN (SELECT LocationID FROM Locations WHERE City='London');




----Create a View to get the department name and number of employees in the department.----

CREATE VIEW A2
AS
SELECT e.EmployeeID,e.DepartmentID,d.DepartmentName
FROM Employees e JOIN Departments d
ON e.DepartmentID = d.DepartmentID

SELECT DepartmentName,COUNT(EmployeeID) AS NumberOfEmployees FROM A2 GROUP BY DepartmentName




----Find the employee ID, job title, number of days between ending date and starting date for all jobs in department 90 from job history.----

SELECT EmployeeID,JobID,DATEDIFF(day,StartDate,EndDate) AS NumberOfDays FROM JobHistory WHERE DepartmentID=90;




----Write a View to display the department name, manager name, and city.----

CREATE VIEW A3
AS
SELECT d.DepartmentName,e.FirstName,e.LastName,l.City FROM Departments d
JOIN Employees e ON d.ManagerID=e.EmployeeID
JOIN Locations l ON d.LocationID=l.LocationID

SELECT DepartmentName,FirstName,LastName,City FROM A3;




----Create a View to display department name, name (first_name, last_name), hire date, salary of the manager----
----for all managers whose experience is more than 15 years.----

CREATE VIEW A4
AS
SELECT d.DepartmentName,e.FirstName,e.LastName,e.HireDate,e.Salary FROM Departments d
JOIN Employees e ON d.ManagerID=e.EmployeeID
WHERE DATEDIFF(year,e.HireDate,GETDATE())>15

SELECT * FROM A4;