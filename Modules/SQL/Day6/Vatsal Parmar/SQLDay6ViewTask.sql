/* View Task */

-- 1. Write a query to find the addresses (location_id, street_address,
--city, state_province, country_name) of all the departments. 

CREATE VIEW vDepartments
AS
SELECT d.DepartmentName,l.LocationID,l.StreetAddress,l.City,l.StateProvince,c.CountryName 
FROM Countries c 
JOIN Locations l ON c.CountryID = l.CountryID
JOIN Departments d ON l.LocationID = d.LocationID; 

-- 2. Write a query to find the names (first_name, last name), department ID and name of all the employees.

CREATE VIEW vEmplyoyeeDepartmentHistory
AS
SELECT e.FirstName + ' ' + e.LastName 'Name',d.DepartmentID,d.DepartmentName
FROM Employees e
LEFT OUTER JOIN Departments d ON d.DepartmentID = e.DepartmentID;

-- 3. Find the names (first_name, last_name), job, department number,
--and department name of the employees who work in London. 

CREATE VIEW vLondon
AS
SELECT e.FirstName,e.LastName,e.JobId,d.DepartmentID,d.DepartmentName
FROM Employees e
JOIN Departments d ON e.DepartmentID = d.DepartmentID
JOIN Locations l ON d.LocationID = l.LocationID WHERE l.City = 'London';

-- 4. Write a query to find the employee id, name (last_name) along with 
--their manager_id, manager name (last_name).


CREATE VIEW vEmployeeManagerHistory
AS
SELECT e.EmployeeID, e.LastName 'Employee Last Name',e.ManagerID,em.LastName 'Manager Last Name'
FROM Employees e
LEFT OUTER JOIN Employees em ON em.EmployeeID = e.ManagerID;

-- 5. Find the names (first_name, last_name) and hire date of the employees who were hired
--after 'Jones'. 

CREATE VIEW vAfterLuis
AS
SELECT e.FirstName + ' ' + e.LastName 'Name',e.HireDate
FROM Employees e
LEFT OUTER JOIN Employees em ON e.HireDate > em.HireDate WHERE em.FirstName = 'Luis';

-- 6. Write a query to get the department name and number of employees in the department.

CREATE VIEW vDepartmentEmployeeNumbers
AS
SELECT d.DepartmentName,COUNT(e.EmployeeID) 'Number Of Employees'
FROM Departments d
LEFT OUTER JOIN Employees e ON d.DepartmentID = e.DepartmentID GROUP BY d.DepartmentName;

-- 7. Find the employee ID, job title, number of days between ending date and starting date
--for all jobs in department 90 from job history. 

CREATE VIEW vDepartment90
AS
SELECT EmployeeID,JobID,DATEDIFF(dd,StartDate,EndDate)
FROM JobHistory WHERE DepartmentID = 90;

-- 8. Write a query to display the department ID, department name and manager first name.

CREATE VIEW vManager
AS
SELECT d.DepartmentID,d.DepartmentName,e.FirstName AS 'Manager Name'
FROM Departments d
LEFT OUTER JOIN Employees e ON e.EmployeeID = d.ManagerID;

-- 9. Write a query to display the department name, manager name, and city.

CREATE VIEW vManagerLocation
AS
SELECT d.DepartmentName,e.FirstName AS 'Manager Name',l.City
FROM Departments d
JOIN Locations l ON d.LocationID = l.LocationID
LEFT OUTER JOIN Employees e ON e.EmployeeID = d.ManagerID
;

-- 10. Write a query to display the job title and average salary of employees.

CREATE VIEW vAvgSalary
AS
SELECT JobId,AVG(Salary) 'Average Salary'
FROM Employees GROUP BY JobId;

-- 11. Display job title, employee name, and the difference between salary of the 
--employee and minimum salary for the job.

CREATE VIEW vSalDiff
AS
SELECT FirstName + ' ' + LastName 'Name',JobId,Salary-(SELECT MIN(e.Salary) FROM Employees e WHERE em.JobId=e.JobId) 'Sal Diff'
FROM Employees em;

-- 12. Write a query to display the job history that were done by any employee who is 
--currently drawing more than 10000 of salary.

CREATE VIEW vSalary
AS
SELECT j.* 
FROM JobHistory j
JOIN Employees e ON j.EmployeeID = e.EmployeeID
WHERE Salary > 10000;

-- 13. Write a query to display department name, name (first_name, last_name), hire date,
--salary of the manager for all managers whose experience is more than 15 years.

CREATE VIEW vExperiencedManagers
AS
SELECT d.DepartmentName,e.FirstName+' '+e.LastName AS 'Name',e.HireDate ,e.Salary
FROM Departments d
JOIN Employees e ON e.EmployeeID = d.ManagerID
JOIN JobHistory j ON j.EmployeeID = d.ManagerID
WHERE DATEDIFF(yy,j.StartDate,j.EndDate) > 15;
