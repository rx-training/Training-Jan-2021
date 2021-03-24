

----Write a query to find the addresses (location_id, street_address, city, state_province, country_name) of all the departments.----

CREATE VIEW A5
AS
SELECT d.LocationID,l.StreetAddress,l.City,l.StateProvince,l.CountryID FROM Departments d JOIN Locations l
ON d.LocationID=l.LocationID

SELECT * FROM A5;




----Write a query to find the names (first_name, last name), department ID and name of all the employees.----

CREATE VIEW A6
AS
SELECT e.FirstName,e.LastName,e.DepartmentID,d.DepartmentName FROM Employees e JOIN Departments d
ON e.DepartmentID=d.DepartmentID

SELECT * FROM A6;




----Find the names (first_name, last_name), job, department number, and department name of the employees who work in London.----

CREATE VIEW A7
AS
SELECT e.FirstName,e.LastName,e.JobId,e.DepartmentID,d.DepartmentName FROM Departments d
JOIN Employees e ON e.DepartmentID=d.DepartmentID
JOIN Locations l ON d.LocationID=l.LocationID WHERE l.City='London'

SELECT * FROM A7;




----Write a query to find the employee id, name (last_name) along with their manager_id, manager name (last_name).----

CREATE VIEW A8
AS
SELECT e.EmployeeID,e.LastName,e.ManagerID,m.LastName FROM Employees e
JOIN Employees m ON e.ManagerID=m.EmployeeID




----Find the names (first_name, last_name) and hire date of the employees who were hired after 'Jones'.----

CREATE VIEW A9
AS
SELECT e.FirstName,e.LastName,e.HireDate FROM Employees e
JOIN Employees j ON e.HireDate>j.HireDate WHERE j.LastName='Jones'

SELECT * FROM A9;




----Write a query to get the department name and number of employees in the department.----

CREATE VIEW A10
AS
SELECT d.DepartmentName,COUNT(e.EmployeeID) AS NumberOfEmployees FROM Employees e
JOIN Departments d ON e.DepartmentID=d.DepartmentID
GROUP BY d.DepartmentName

SELECT * FROM A10;




----Find the employee ID, job title, number of days between ending date and starting date for all jobs in department 90 from job history.----

CREATE VIEW A11
AS
SELECT e.EmployeeID,e.JobId,DATEDIFF(day,j.StartDate,j.EndDate) AS NumberofDays FROM Employees e
JOIN JobHistory j ON e.DepartmentID=j.DepartmentID WHERE j.DepartmentID=90

SELECT * FROM A11;




----Write a query to display the department ID, department name and manager first name.----

CREATE VIEW A12
AS
SELECT d.DepartmentID,d.DepartmentName,e.FirstName FROM Departments d
JOIN Employees e ON d.ManagerID=e.EmployeeID

SELECT * FROM A12;




----Write a query to display the department name, manager name, and city.----

CREATE VIEW A13
AS
SELECT d.DepartmentName,e.FirstName,e.LastName,l.City FROM Departments d
JOIN Employees e ON d.ManagerID=e.EmployeeID
JOIN Locations l ON d.LocationID=l.LocationID

SELECT * FROM A13;




----Write a query to display the job title and average salary of employees.----

CREATE VIEW A14
AS
SELECT JobId,AVG(Salary) AS AverageSalary FROM Employees GROUP BY JobId;

SELECT * FROM A14;




----Display job title, employee name, and the difference between salary of the employee and minimum salary for the job.----

CREATE VIEW A15
AS
SELECT e.JobId,e.FirstName+' '+e.LastName AS EmployeeName,(e.Salary-tbl.MinSalary) AS SalaryDiff FROM Employees e
CROSS JOIN  (SELECT MIN(Salary) AS MinSalary FROM Employees) AS tbl

SELECT * FROM A15;




----Write a query to display the job history that were done by any employee who is currently drawing more than 10000 of salary.----

CREATE VIEW A16
AS
SELECT j.EmployeeID,j.StartDate,j.EndDate,j.JobId,j.DepartmentID FROM JobHistory j
JOIN Employees e ON e.EmployeeID=j.EmployeeID WHERE e.Salary>10000

SELECT * FROM A16;




----Write a query to display department name, name (first_name, last_name), hire date, salary of the manager for all managers----
----whose experience is more than 15 years.----

CREATE VIEW A17
AS
SELECT d.DepartmentName,e.FirstName+' '+e.LastName AS EmployeeName,e.HireDate,e.Salary FROM Departments d
JOIN Employees e ON d.ManagerID=e.EmployeeID WHERE DATEDIFF(year,e.HireDate,GETDATE())>15

SELECT * FROM A17;