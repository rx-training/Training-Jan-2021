USE DAY6SQLMore;

/* View Task */
-- 1. Write a query to find the addresses (location_id, street_address,
--city, state_province, country_name) of all the departments. 

CREATE VIEW ViewDepartments
AS
SELECT d.DepartmentName,l.LocationID,l.StreetAddress,l.City,l.StateProvince,c.CountryName 
FROM Countries c 
JOIN Locations l ON c.CountryID = l.CountryID
JOIN Departments d ON l.LocationID = d.LocationID; 

SELECT * FROM ViewDepartments;
-- 2. Write a query to find the names (first_name, last name), department ID and name of all the employees.

CREATE VIEW ViewEmpHistory
AS
SELECT e.FirstName,e.LastName,d.DepartmentID,d.DepartmentName
FROM Employees e
LEFT OUTER JOIN Departments d ON d.DepartmentID = e.DepartmentID;

SELECT * FROM ViewEmpHistory;
-- 3. Find the names (first_name, last_name), job, department number,
--and department name of the employees who work in London. 

CREATE VIEW Viewworklondon
AS
SELECT e.FirstName,e.LastName,e.JobId,d.DepartmentID,d.DepartmentName
FROM Employees e
JOIN Departments d ON e.DepartmentID = d.DepartmentID
JOIN Locations l ON d.LocationID = l.LocationID WHERE l.City = 'London';

SELECT * FROM Viewworklondon;

-- 4. Write a query to find the employee id, name (last_name) along with 
--their manager_id, manager name (last_name).


CREATE VIEW ViewEmpManager
AS
SELECT e.EmployeeID, e.LastName 'Employee Last Name',e.ManagerID,em.LastName 'Manager Last Name'
FROM Employees e
LEFT OUTER JOIN Employees em ON em.EmployeeID = e.ManagerID;

SELECT * FROM ViewEmpHistory

-- 5. Find the names (first_name, last_name) and hire date of the employees who were hired
--after 'Jones'. 

CREATE VIEW ViewAfterJones
AS
SELECT e.FirstName+e.LastName As 'names',e.HireDate 
FROM Employees e where e.HireDate > (SELECT HireDate From Employees Where FirstName = 'Jones')  


SELECT * FROM ViewAfterJones;
-- 6. Write a query to get the department name and number of employees in the department.

CREATE VIEW ViewDepartEmpNumbers
AS
SELECT d.DepartmentName,COUNT(e.EmployeeID) As 'Number Of Employees'
FROM Departments d
LEFT OUTER JOIN Employees e ON d.DepartmentID = e.DepartmentID GROUP BY d.DepartmentName;

SELECT * FROM ViewDepartEmpNumbers; 
-- 7. Find the employee ID, job title, number of days between ending date and starting date
--for all jobs in department 90 from job history. 

CREATE VIEW ViewDepartmentdatas
AS
SELECT EmployeeID,JobID,DATEDIFF(dd,StartDate,EndDate) As Date
FROM JobHistory WHERE DepartmentID = 90;

SELECT * FROM ViewDepartmentdatas;

-- 8. Write a query to display the department ID, department name and manager first name.

CREATE VIEW ViewDepartment
AS
SELECT d.DepartmentID,d.DepartmentName,e.FirstName AS 'Manager Names'
FROM Departments d
 JOIN Employees e ON e.EmployeeID = d.ManagerID;

SELECT * FROM ViewDepartment;

-- 9. Write a query to display the department name, manager name, and city.

CREATE VIEW viewmanager
AS
SELECT d.DepartmentName,e.FirstName AS 'Manager Name',l.City
FROM Departments d
JOIN Locations l ON d.LocationID = l.LocationID
 JOIN Employees e ON e.EmployeeID = d.ManagerID
;

SELECT * FROM viewmanager;
-- 10. Write a query to display the job title and average salary of employees.

CREATE VIEW ViewAVGSalary
AS
SELECT JobId,AVG(Salary) AS 'AVG Salary'
FROM Employees GROUP BY JobId;

SELECT * FROM ViewAVGSalary;
-- 11. Display job title, employee name, and the difference between salary of the 
--employee and minimum salary for the job.

CREATE VIEW ViewSalaryDiff
AS
SELECT FirstName,LastName,JobId,Salary-(SELECT MIN(e.Salary) FROM Employees e WHERE em.JobId=e.JobId) 'Salary Diff'
FROM Employees em;

SELECT * FROM ViewSalaryDiff;

-- 12. Write a query to display the job history that were done by any employee who is 
--currently drawing more than 10000 of salary.

CREATE VIEW ViewSalaryMore
AS
SELECT j.* FROM JobHistory j
JOIN Employees e ON j.EmployeeID = e.EmployeeID
WHERE Salary > 10000;

SELECT * FROM ViewSalaryMore;

-- 13. Write a query to display department name, name (first_name, last_name), hire date,
--salary of the manager for all managers whose experience is more than 15 years.

CREATE VIEW Viewexpmanager
AS
SELECT d.DepartmentName,e.FirstName+' '+e.LastName AS 'Name',e.HireDate ,e.Salary ,j.StartDate,j.EndDate
FROM Departments d
JOIN Employees e ON e.EmployeeID = d.ManagerID
JOIN JobHistory j ON j.EmployeeID = d.ManagerID
WHERE DATEDIFF(yy,j.StartDate,j.EndDate) > 15;

SELECT * FROM Viewexpmanager;