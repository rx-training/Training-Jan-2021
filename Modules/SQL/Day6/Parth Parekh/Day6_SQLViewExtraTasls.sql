/*1. Write a query to find the addresses (location_id, street_address, city, state_province, country_name) of all the departments. */

CREATE VIEW addressDepartments AS
SELECT d.DepartmentID , d.DepartmentName , l.LocationID , l.City , l.StreetAddress , l.StateProvince , c.CountryName   FROM Departments d
	   JOIN Locations l ON d.LocationID = l.LocationID 
	   JOIN Countries c ON l.CountryID = c.CountryID

SELECT  LocationID , StreetAddress , City , StateProvince  , CountryName   AS 'Addresses' , DepartmentName
        FROM  addressDepartments 
		
/* 2. Write a query to find the names (first_name, last name), department ID and name of all the Employess */
CREATE VIEW vEmployeeDepartments AS
SELECT  e.FirstName , e.LastName , d.DepartmentID ,d.DepartmentName FROM Employees e LEFT OUTER JOIN Departments d ON e.DepartmentID = d.DepartmentID

/* 3. Find the names (first_name, last_name), job, department number, and department name of the employees who work in London. */
CREATE VIEW vEmp AS
SELECT e.FirstName , e.LastName , e.JobId , d.DepartmentID ,d.DepartmentName   FROM Employees e 
       JOIN Departments d ON e.DepartmentID = d.DepartmentID
	   JOIN Locations l ON d.LocationID = l.LocationID WHERE l.city = 'London'

/* 4. Write a query to find the employee id, name (last_name) along with their manager_id, manager name (last_name). */
CREATE VIEW EmployeeWithManager AS
SELECT  e.EmployeeID , e.LastName  , e.ManagerID , s.LastName  FROM Employees e LEFT OUTER JOIN Employees s ON s.EmployeeID = e.ManagerID 

/* 5. Find the names (first_name, last_name) and hire date of the employees who were hired after 'Bruce'. */

CREATE VIEW Find_Named_After_FirstName AS
SELECT FirstName , LastName , HireDate FROM Employees 

SELECT * FROM Find_Named_After_FirstName WHERE HireDate > (SELECT HireDate FROM Employees WHERE FirstName = 'Bruce')

/* 6 . Write a query to get the department name and number of employees in the department. */
CREATE VIEW NumberOfEmployeeInDepartment AS
SELECT d.DepartmentName , COUNT(e.EmployeeID) FROM Departments d 
       LEFT OUTER  JOIN Employees e ON d.DepartmentID =  e.DepartmentID   GROUP BY d.DepartmentName

/* 7. Find the employee ID, job title, number of days between ending date and starting date for all jobs in department 90 from job history. */
CREATE VIEW DiffrenceStartingDateEndDate AS
SELECT  EmployeeID ,JobID  ,CONCAT(
		DATEDIFF(DD, StartDate,EndDate ),' Days ' ) As 'Number of Days' FROM JobHistory WHERE DepartmentID = 90 

/* 8. Write a query to display the department ID, department name and manager first name. */
CREATE VIEW ManagerFirstName AS
SELECT d.DepartmentID , d.DepartmentName  , e.FirstName 'Manager Name' FROM Departments d 
       LEFT OUTER JOIN Employees e ON e.EmployeeID = d.ManagerID

/* 9. Write a query to display the department name, manager name, and city. */
CREATE VIEW displayDepartment AS
SELECT  d.DepartmentName  , e.FirstName As 'Manager Name', l.City FROM Departments d 	
		 JOIN Locations l ON d.LocationID = l.LocationID
		LEFT OUTER JOIN Employees e ON d.ManagerID = e.EmployeeID 
		
/* 10. Write a query to display the job title and average salary of employees.  */
CREATE VIEW AveravgeSalary AS
 SELECT  JobId , AVG(Salary) FROM Employees GROUP BY JobId

/* 11. Display job title, employee name, and the difference between salary of the employee and minimum salary for the job.*/
CREATE VIEW  minSalary AS
SELECT JobId , FirstName AS 'Employee Name' , Salary - (SELECT  MIN(Salary) FROM Employees AS e2 WHERE e1.JobId = e2.JobId ) AS 'Salary' FROM Employees e1 

/* 12. Write a query to display the job history that were done by any employee who is currently drawing more than 10000 of salary. */
CREATE VIEW Salary AS
SELECT  j.* FROM JobHistory  j JOIN Employees e ON  j.EmployeeID  = e.EmployeeID  WHERE Salary > 10000

/* 13. Write a query to display department name, name (first_name, last_name), hire date, salary of the manager for
all managers whose experience is more than 15 years.  */

CREATE VIEW vDepartmentHire AS
		SELECT  d.DepartmentName , e.EmployeeID, CONCAT(e.FirstName ,',' ,e.LastName )AS 'NAME'  , e.Salary FROM Departments d
		JOIN Employees e ON e.EmployeeID = d.ManagerID 
		JOIN JobHistory j ON  e.EmployeeID = j.EmployeeID
		WHERE  DATEDIFF( YYYY,  StartDate, EndDate) > 15	

