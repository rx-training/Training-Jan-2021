use [view-database];
--Write a query to find the addresses (location_id, street_address, city, state_province,
--country_name) of all the departments. 

CREATE VIEW v1 AS 
SELECT *
FROM Departments d JOIN Locations l on d.LocationID = l.LocationID

 --Write a query to find the names (first_name, last name), 
 --department ID and name of all the employees. 

 CREATE VIEW v2 AS
 SELECT e.FirstName + e.LastName  as 'Name',
		d.DepartmentID

 FROM Employees e JOIN Departments d On e.DepartmentID = d.DepartmentID

 SELECT * FROM v2

  --Find the names (first_name, last_name), job, department number, 
  --and department name of the employees who work in London. 

  CREATE VIEW v3 AS 
  SELECT e.FirstName + e.LastName  as 'Name',
		e.JobId,
		d.DepartmentID,
		d.DepartmentName
  FROM Employees e JOIN Departments d ON e.DepartmentID = d.DepartmentID 
						JOIN Locations l ON d.LocationID = l.LocationID 
						WHERE l.City = 'london'

SELECT * FROM v3

 --Write a query to find the employee id, name (last_name) along with
 --their manager_id, manager name (last_name). 
 CREATE VIEW v4 AS 
	SELECT	e.EmployeeID,
	e.LastName  as 'Name',
	d.ManagerID,
	d.DepartmentName
	FROM Employees e JOIN Departments d on e.ManagerID =d.ManagerID 

	SELECT * FROM JobHistory

 --Find the names (first_name, last_name) and 
 --hire date of the employees who were hired after 'Jones'. 
 DROP VIEW v5
 CREATE VIEW v5 AS
 SELECT e.FirstName + e.LastName  as 'Name',
		jh.StartDate AS 'hiredate'
		FROM Employees e JOIN JobHistory jh on e.EmployeeID = jh.EmployeeID 
		WHERE jh.StartDate > (SELECT StartDate FROM JobHistory WHERE e.LastName = 'jones')

	SELECT * FROM v5

--Write a query to get the department name and number of employees in the department.

	CREATE VIEW v6 AS
	SELECT d.DepartmentName, 
		COUNT(d.DepartmentID)  AS 'NUMBER'
	FROM Employees e JOIN Departments d ON e.DepartmentID =d.DepartmentID
		GROUP BY d.DepartmentID, d.DepartmentName

		SELECT * FROM v6


 --Find the employee ID, job title, number of days between 
 --ending date and starting date for all jobs in department 90 from job history.
CREATE VIEW v7 AS SELECT e.EmployeeID ,
		dp.JobID as 'job-title',
		dp.datediff
		
		
		FROM Employees e JOIN (SELECT EmployeeID,JobID,DATEDIFF(d,StartDate,EndDate) as 'datediff'
	FROM JobHistory jh WHERE jh.DepartmentID = 90 ) as dp ON e.EmployeeID = dp.EmployeeID

SELECT * FROM v7

--Write a query to display the department ID, department name and manager first name.

SELECT DepartmentID,DepartmentName  
FROM Departments --There is no column as such department name in provided table

--Write a query to display the department name, manager name, and city

CREATE VIEW v9 AS SELECT d.ManagerID,d.DepartmentName,l.City
						FROM  Departments d JOIN Locations L ON
						d.LocationID = l.LocationID 
SELECT * FROM v9
--Write a query to display the job title and average salary of employees. 

SELECT AVG(Salary) AS 'avg salary per job-ID',
	JobId
	FROM Employees
	GROUP BY JobId

 --Display job title, employee name, 
 --and the difference between salary of the employee and minimum salary for the job. 

 DROP VIEW v11
 CREATE VIEW  v11  AS 
 SELECT  JobId,FirstName,
	 Salary - (SELECT MIN(salary) FROM Employees e2 WHERE e2.JobId = e1.JobId ) AS 'SAlary-Diff'
	 FROM Employees e1

	 SELECT * FROM v11

--12. Write a query to display the job history that were done by any
--employee who is currently drawing more than 10000 of salary. 

CREATE VIEW v12 AS
SELECT   Jh.*
 FROM JobHistory jh JOIN Employees e ON jh.EmployeeID = e.EmployeeID
 WHERE E.Salary >1000

 SELECT * FROM v12

 --13. Write a query to display department name, name (first_name, last_name),
 --hire date, salary of the manager for all managers whose experience is more than 15 years. 
 CREATE VIEW v13 AS 
SELECT  d.DepartmentName , e.FirstName + e.LastName AS 'NAME',
		jh.StartDate, Salary
FROM Employees e JOIN Departments d on e.ManagerID = d.ManagerID
JOIN JobHistory jh ON jh.DepartmentID = d.DepartmentID 
WHERE DATEDIFF(YEAR,StartDate,EndDate) > 15

SELECT * FROM v13
			