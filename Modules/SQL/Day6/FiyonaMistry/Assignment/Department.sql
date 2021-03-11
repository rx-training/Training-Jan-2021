USE Day6


--Create a View to Find the names (first_name, last_name), job, department number, and department name of the employees who work in London
CREATE VIEW EmployeesNames
AS
SELECT e.FirstName + e.LastName AS 'Name', e.JobId
FROM Employees AS e
JOIN 
	(SELECT DepartmentID, DepartmentName
	FROM Departments
	WHERE locationId = 
		(SELECT LocationID
		FROM Locations AS l
		WHERE l.City = 'London')) AS xyz
ON xyz.DepartmentID = e.DepartmentID

SELECT * 
FROM EmployeesNames


--Create a View to get the department name and number of employees in the department.
CREATE VIEW DepartmentName
AS
SELECT d.DepartmentName, COUNT(e.DepartmentID) AS 'COUNT'
FROM Departments AS d
JOIN Employees AS e
ON e.DepartmentID = d.DepartmentID
GROUP BY d.DepartmentName

SELECT * 
FROM Department 


--Find the employee ID, job title, number of days between ending date and starting date for all jobs in department 90 from job history.
SELECT EmployeeID, JobId, DATEDIFF(DAY, StartDate, EndDate) AS 'DAYDIFF'
FROM JobHistory
WHERE DepartmentID = 90


--Write a View to display the department name, manager name, and city.
CREATE VIEW Ex8
AS
SELECT e.FirstName, d.DepartmentName, l.City 
FROM Employees AS e 
JOIN Departments AS d 
ON d.ManagerID = e.EmployeeID 
JOIN Locations AS l 
ON l.LocationID = d.LocationID

SELECT * 
FROM Ex8

--Create a View to display department name, name (first_name, last_name), hire date, salary of the manager for all managers whose experience is more than 15 years.
CREATE VIEW Experience
AS
SELECT d.DepartmentName, e.FirstName + e.LastName AS 'Name', e.HireDate, e.Salary,  DATEDIFF(YEAR, HireDate, GETDATE()) AS 'Experience'
FROM Employees AS e
JOIN Departments AS d
ON e.DepartmentID = d.DepartmentID
WHERE DATEDIFF(YEAR, HireDate, GETDATE()) > 15

SELECT * 
FROM Experience


--1. Write a query to find the names (first_name, last_name) and salaries of the employees who have higher salary than the employee whose last_name='Bull'. 
SELECT FirstName + LastName AS 'Name'
FROM Employees
WHERE Salary > 
	(SELECT Salary
	FROM Employees
	WHERE LastName = 'Bull')


--2. Find the names (first_name, last_name) of all employees who works in the IT department. 
SELECT FirstName + LastName AS 'Name'
FROM Employees AS e
JOIN Departments AS d
ON e.DepartmentID = d.DepartmentID
WHERE d.DepartmentName = 'IT'


--3. Find the names (first_name, last_name) of the employees who have a manager who works for a department based in United States. Hint : Write single-row and multiple-row subqueries
SELECT FirstName + LastName AS 'Name'
FROM Employees
WHERE DepartmentID IN
	(SELECT DepartmentID
	FROM Departments
	WHERE LocationID IN
		(SELECT LocationID
		FROM Locations AS l
		JOIN Countries AS c
		ON l.CountryID = c.CountryID
		WHERE c.CountryName = 'United States of America'))


--4. Find the names (first_name, last_name) of the employees who are managers. 
SELECT FirstName + LastName AS 'Name'
FROM Employees 
WHERE EmployeeID IN
	(SELECT DISTINCT ManagerID
	FROM Departments)


--5. Find the names (first_name, last_name), salary of the employees whose salary is greater than the average salary. 
SELECT FirstName + LastName AS 'Name', Salary
FROM Employees
WHERE Salary > 
	(SELECT AVG(Salary)
	FROM Employees)


--6. Find the names (first_name, last_name), salary of the employees whose salary is equal to the minimum salary for their job grade. 
SELECT FirstName + LastName AS 'Name', Salary
FROM Employees
WHERE Salary = 
	(SELECT MIN(Salary)
	FROM Employees)


--7. Find the names (first_name, last_name), salary of the employees who earn more than the average salary and who works in any of the IT departments. 
SELECT FirstName + LastName AS 'Name', Salary
FROM Employees
WHERE Salary > 
	(SELECT AVG(Salary)
	FROM Employees
	WHERE JobId = 'IT_PROG')


--8. Find the names (first_name, last_name), salary of the employees who earn more than Mr. Bell. 
SELECT FirstName + LastName AS 'Name', Salary
FROM Employees
WHERE Salary >
	(SELECT Salary
	FROM Employees
	WHERE LastName = 'Bell')


--9. Find the names (first_name, last_name), salary of the employees who earn the same salary as the minimum salary for all departments. 
SELECT FirstName + LastName AS 'Name', Salary
FROM Employees
WHERE Salary IN
	(SELECT MIN(Salary)
	FROM Employees
	GROUP BY DepartmentID)


--10. Find the names (first_name, last_name), salary of the employees whose salary greater than average salary of all department. 
SELECT FirstName + LastName AS 'Name', Salary
FROM Employees
WHERE Salary > 
	(SELECT AVG(Salary)
	FROM Employees)


--11. Write a query to find the names (first_name, last_name) and salary of the employees who earn a salary that is higher than the salary of all the Shipping Clerk (JOB_ID = 'SH_CLERK'). Sort the results on salary from the lowest to highest. 
SELECT FirstName + LastName AS 'Name', Salary
FROM Employees
WHERE Salary >
	(SELECT MAX(Salary)
	FROM Employees
	WHERE JobId = 'SH_CLERK')
ORDER BY Salary


--12. Write a query to find the names (first_name, last_name) of the employees who are not supervisors. 
SELECT FirstName + LastName AS 'Name'
FROM Employees
WHERE EmployeeID NOT IN
	(SELECT ManagerID
	FROM Employees)


--13. Write a query to display the employee ID, first name, last names, and department names of all employees. 
SELECT e.EmployeeID, e.FirstName, e.LastName, d.DepartmentName
FROM Employees AS e
FULL OUTER JOIN Departments AS d
ON e.DepartmentID = d.DepartmentID


--14. Write a query to display the employee ID, first name, last names, salary of all employees whose salary is above average for their departments. 
SELECT DISTINCT d.DepartmentID, e.EmployeeID, e.FirstName, e.LastName, e.Salary
FROM Employees AS e
JOIN Departments AS d
ON e.DepartmentID = d.DepartmentID
WHERE Salary > 
	(SELECT AVG(Salary)
	FROM Employees)


--15. Write a query to fetch even numbered records from employees table. 
SELECT *
FROM Employees
WHERE EmployeeID % 2 = 0


--16. Write a query to find the 5th maximum salary in the employees table. 
SELECT DISTINCT TOP 1 Salary
FROM Employees
WHERE Salary NOT IN
	(SELECT DISTINCT TOP 4 Salary
	FROM Employees
	ORDER BY Salary)
ORDER BY Salary DESC


--17. Write a query to find the 4th minimum salary in the employees table. 
SELECT DISTINCT TOP 1 Salary
FROM Employees
WHERE Salary NOT IN
	(SELECT DISTINCT TOP 3 Salary
	FROM Employees
	ORDER BY Salary)
ORDER BY Salary


--18. Write a query to select last 10 records from a table. 
SELECT TOP 10 * 
FROM 
	(SELECT ROW_NUMBER() OVER(ORDER BY EmployeeID) AS Ranks,* 
	FROM Employees) AS temp 
ORDER BY Ranks DESC


--19. Write a query to list department number, name for all the departments in which there are no employees in the department. 
SELECT d.DepartmentID, d.DepartmentName 
FROM Departments AS d 
WHERE DepartmentID NOT IN 
	(SELECT DISTINCT DepartmentID 
	FROM Employees)


--20. Write a query to get 3 maximum salaries. 
SELECT DISTINCT TOP 3 Salary 
FROM Employees 
ORDER BY Salary DESC


--21. Write a query to get 3 minimum salaries. 
SELECT DISTINCT TOP 3 Salary 
FROM Employees
ORDER BY Salary



--22. Write a query to get nth max salaries of employees. 
DECLARE @n int;
SET @n = 10;
SELECT DISTINCT TOP 1 Salary 
FROM Employees 
WHERE Salary NOT IN 
	(SELECT DISTINCT TOP (@n) Salary 
	FROM Employees 
	ORDER BY Salary DESC ) 
ORDER BY Salary DESC



--VIEWS
--1. Write a query to find the addresses (location_id, street_address, city, state_province, country_name) of all the departments. 
CREATE VIEW VIEW1
AS
SELECT l.LocationID, l.StreetAddress, l.City, l.StateProvince, c.CountryName
FROM Locations AS l
JOIN Countries AS c
ON l.CountryID = c.CountryID

SELECT *
FROM VIEW1


--2. Write a query to find the names (first_name, last name), department ID and name of all the employees. 
CREATE VIEW VIEW2
AS
SELECT e.FirstName, e.LastName, e.DepartmentID, d.DepartmentName
FROM Employees AS e
JOIN Departments AS d
ON e.DepartmentID = d.DepartmentID

SELECT *
FROM VIEW2


--3. Find the names (first_name, last_name), job, department number, and department name of the employees who work in London. 
CREATE VIEW VIEW3
AS
SELECT e.FirstName + e.LastName AS 'Name', e.JobId
FROM Employees AS e
JOIN 
	(SELECT DepartmentID, DepartmentName
	FROM Departments
	WHERE locationId = 
		(SELECT LocationID
		FROM Locations AS l
		WHERE l.City = 'London')) AS xyz
ON xyz.DepartmentID = e.DepartmentID

SELECT *
FROM VIEW3


--4. Write a query to find the employee id, name (last_name) along with their manager_id, manager name (last_name). 
CREATE VIEW VIEW4
AS
SELECT e.EmployeeID AS 'Manager ID', e.LastName AS 'Manager Name', mgr.EmployeeID, mgr.LastName
FROM  Employees AS mgr, Employees AS e
WHERE e.EmployeeID = mgr.DepartmentID

SELECT *
FROM VIEW4


--5. Find the names (first_name, last_name) and hire date of the employees who were hired after 'Jones'. 
CREATE VIEW VIEW5
AS
SELECT FirstName, LastName, HireDate
FROM Employees
WHERE HireDate >
	(SELECT HireDate
	FROM Employees
	WHERE LastName = 'Jones')

SELECT *
FROM VIEW5


--6. Write a query to get the department name and number of employees in the department. 
CREATE VIEW VIEW6
AS
SELECT d.DepartmentName, COUNT(e.EmployeeID) AS 'EmployeeCount' 
FROM Employees AS e 
JOIN Departments AS d 
ON d.DepartmentID = e.DepartmentID 
GROUP BY DepartmentName

SELECT * 
FROM VIEW6


--7. Find the employee ID, job title, number of days between ending date and starting date for all jobs in department 90 from job history. 
CREATE VIEW VIEW7
AS
SELECT EmployeeID, JobId, DATEDIFF(DAY, StartDate, EndDate) AS 'DAYDIFF'
FROM JobHistory
WHERE DepartmentID = 90

SELECT *
FROM VIEW7


--8. Write a query to display the department ID, department name and manager first name. 
CREATE VIEW VIEW8
AS
SELECT e.FirstName, d.DepartmentID, d.DepartmentName 
FROM Employees AS e 
JOIN Departments AS d 
ON d.ManagerID = e.EmployeeID

SELECT * 
FROM VIEW8


--9. Write a query to display the department name, manager name, and city. 
CREATE VIEW VIEW9
AS
SELECT e.FirstName AS 'Manager Name', d.DepartmentName, l.City 
FROM Employees AS e 
JOIN Departments AS d 
ON d.ManagerID = e.EmployeeID 
JOIN Locations AS l ON l.LocationID = d.LocationID

SELECT * 
FROM VIEW9


--10. Write a query to display the job title and average salary of employees. 
CREATE VIEW VIEW10
AS
SELECT e.JobId, AVG(Salary) AS 'Average Salary' 
FROM Employees AS e 
GROUP BY JobId

SELECT * 
FROM VIEW10


--11. Display job title, employee name, and the difference between salary of the employee and minimum salary for the job. 
CREATE VIEW VIEW11
AS
SELECT e.FirstName, d.DepartmentName, e.JobId, (e.Salary - 
	(SELECT MIN(Salary) 
	FROM Employees AS e2 
	WHERE e2.JobId = e.JobId)) AS Diff, 
	(SELECT MIN(Salary) 
	FROM Employees AS e2 
	WHERE e2.JobId = e.JobId) AS MinSalary 
FROM Employees AS e 
JOIN Departments AS d 
ON d.DepartmentID = e.DepartmentID 

SELECT * 
FROM VIEW11


--12. Write a query to display the job history that were done by any employee who is currently drawing more than 10000 of salary. 
CREATE VIEW VIEW12
AS
SELECT j.* 
FROM JobHistory As j 
JOIN Employees As e 
ON e.EmployeeID = j.EmployeeID 
WHERE Salary > 10000

SELECT * 
FROM VIEW12


--13. Write a query to display department name, name (first_name, last_name), hire date, salary of the manager for all managers whose experience is more than 15 years.
CREATE VIEW VIEW13
AS
SELECT e.FirstName + ' ' + e.LastName AS 'Name', d.DepartmentName, e.HireDate, e.Salary
FROM Employees AS e 
JOIN Departments AS d 
ON d.DepartmentID = e.DepartmentID 
WHERE DATEDIFF(YYYY, HireDate, GETDATE()) > 15

SELECT * 
FROM VIEW13