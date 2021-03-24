-----------------------------------------------VIEW TABLE TASK------------------------------------------------


/*1. Write a query to find the addresses (location_id, street_address, city, state_province, country_name)
of all the departments. */

--FIRST CREATE VIEW FOR THIS DATA
CREATE VIEW Address AS
(SELECT d.DepartmentName,l.LocationID,l.StreetAddress,l.City,l.StateProvince,c.CountryName 
FROM Locations l JOIN Countries c ON l.CountryID = c.CountryID JOIN Departments d ON d.LocationID = l.LocationID)

--SELECT DATA
SELECT * FROM Address

/*2. Write a query to find the names (first_name, last name), department ID and name of all the employees. */

CREATE VIEW EmpData AS
SELECT e.FirstName + e.LastName 'Name',e.DepartmentID,d.DepartmentName 
FROM Employees e LEFT JOIN Departments d ON e.DepartmentID = d.DepartmentID 

SELECT * FROM EmpData

/*3. Find the names (first_name, last_name), job, department number, and department name of the employees who work in London. */

ALTER VIEW LondonEmp AS
SELECT e.FirstName + e.LastName AS 'Name',e.JobId ,e.DepartmentID, d.DepartmentName FROM Employees e  JOIN Departments d ON e.DepartmentID = d.DepartmentID 
JOIN Locations l ON d.LocationID = l.LocationID WHERE City = 'London'

SELECT * FROM LondonEmp

/*4. Write a query to find the employee id, name (last_name) along with their manager_id, manager name (last_name). */
CREATE VIEW ManagerList AS
SELECT m.EmployeeID, m.LastName 'EmpLastName',e.EmployeeID 'ManagerId' ,e.LastName 'ManagerLastName'  FROM
Employees e JOIN Employees m ON e.EmployeeID = m.ManagerID 

SELECT * from ManagerList

/*5. Find the names (first_name, last_name) and hire date of the employees who were hired after 'Jones'. */
CREATE VIEW HireDate AS
SELECT FirstName + LastName AS 'Name' ,HireDate  FROM
Employees WHERE HireDate > (SELECT HireDate FROM Employees WHERE FirstName + LastName LIKE '%jones%')  

SELECT * FROM HireDate


/*6. Write a query to get the department name and number of employees in the department. */

ALTER VIEW TotalDepartment AS
SELECT COUNT(DepartmentID) 'EMP',DepartmentName from 
(
SELECT e.DepartmentID,d.DepartmentName FROM 
Employees e RIGHT JOIN Departments d ON e.DepartmentID = d.DepartmentID
) AS TBL GROUP BY(DepartmentName) 

SELECT * FROM TotalDepartment

/*7. Find the employee ID, job title, number of days between ending date and starting date for
all jobs in department 90 from job history. */

CREATE VIEW DayDiff AS 
SELECT EmployeeID,JobID,DATEDIFF(DD,StartDate,EndDate) 'Day diffrence' ,DepartmentID  FROM JobHistory WHERE DepartmentID = 90

SELECT * FROM DayDiff


/*8. Write a query to display the department ID, department name and manager first name. */

CREATE VIEW ManagerData AS
SELECT  d.DepartmentID, d.DepartmentName,e.FirstName + e.LastName 'Name' 
FROM Employees e JOIN Departments d ON e.EmployeeID = d.ManagerID  

SELECT * FROM ManagerData

/*9. Write a query to display the department name, manager name, and city. */

--USE MANAGERDATA VIEW IN THIS
ALTER VIEW ManagerCity AS
SELECT  d.DepartmentName,e.FirstName + e.LastName 'Name',l.City 
FROM Employees e JOIN Departments d ON e.EmployeeID = d.ManagerID JOIN Locations l ON D.LocationID =  l.LocationID

SELECT * FROM ManagerCity
/*10. Write a query to display the job title and average salary of employees. */

CREATE VIEW AVGSalary AS 
SELECT JobId, AVG(Salary) 'Salary' FROM Employees  GROUP BY JobId 

SELECT * FROM AVGSalary


/*11. Display job title, employee name, and the difference between salary of
the employee and minimum salary for the job. */

CREATE VIEW MINSalary AS 
SELECT e.JobId, e.FirstName + e.LastName 'Name' ,'Diffrence in salary' = Salary - MINSalary 
FROM Employees e JOIN (SELECT JobId, MIN(Salary) 'MINSalary' FROM Employees GROUP BY JobId) m ON e.JobId = m.JobId

SELECT * FROM MINSalary
/*12. Write a query to display the job history that were done by any employee who is 
currently drawing more than 10000 of salary. */

CREATE VIEW VJobHistory AS 
SELECT J.* FROM Employees e JOIN JobHistory j ON e.EmployeeID = j.EmployeeID WHERE e.Salary > 10000

SELECT * FROM VJobHistory
/*13. Write a query to display department name, name (first_name, last_name), hire date, 
salary of the manager for all managers whose experience is more than 15 years. */


CREATE VIEW ManagetDetail AS 
SELECT * FROM 
(
SELECT  e.FirstName + e.LastName 'Name',e.Salary,D.DepartmentName,e.HireDate,
DATEDIFF(YYYY,j.StartDate,j.EndDate) 'Experiance'  FROM
(Employees e JOIN Departments d ON e.EmployeeID = d.ManagerID JOIN JobHistory j ON j.DepartmentID = d.DepartmentID)
) AS TBL WHERE Experiance > 15;


SELECT * FROM ManagetDetail