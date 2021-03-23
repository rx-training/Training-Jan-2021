USE Day6;

/* 1. Write a query to find the addresses (location_id, street_address, city, state_province, country_name) of all the departments. */
CREATE VIEW DepartmentAddress AS
SELECT d.DepartmentName
	, l.LocationID
	, l.StreetAddress
	, l.City
	, l.StateProvince
	, c.CountryName
FROM Departments d
	LEFT JOIN Locations l ON d.LocationID = l.LocationID
	LEFT JOIN Countries c ON c.CountryID = l.CountryID;

SELECT * FROM DepartmentAddress;


/* 2. Write a query to find the names (first_name, last name), department ID and name of all the employees. */
CREATE VIEW EmpWithDepartment AS
SELECT CONCAT(e.FirstName, ' ', e.LastName) AS 'FullName'
	, d.DepartmentID
	, d.DepartmentName
FROM Employees e
	LEFT JOIN Departments d ON e.DepartmentID = d.DepartmentID;

SELECT * FROM EmpWithDepartment;


/* 3. Find the names (first_name, last_name), job, department number, and department name of the employees who work in London. */
CREATE VIEW EmpInLondon AS
SELECT CONCAT(e.FirstName, ' ', e.LastName) AS 'FullName'
	, e.JobId
	, e.DepartmentID
	, d.DepartmentName
FROM Employees e
	INNER JOIN Departments d ON e.DepartmentID = d.DepartmentID
	INNER JOIN Locations l ON d.LocationID = l.LocationID
	INNER JOIN Countries c ON l.CountryID = c.CountryID
WHERE c.CountryName = 'London';

SELECT * FROM EmpInLondon;

/* 4. Write a query to find the employee id, name (last_name) along with their manager_id, manager name (last_name).  */
CREATE VIEW EmpWithManager AS
SELECT e.EmployeeID
	, e.LastName
	, m.ManagerID
	, M.LastName AS 'ManagerName'
FROM Employees e
	LEFT JOIN Employees m ON e.ManagerID = m.EmployeeID;

SELECT * FROM EmpWithManager;


/* 5. Find the names (first_name, last_name) and hire date of the employees who were hired after 'Jones'. */
CREATE VIEW EmpHiredAfterJones AS 
SELECT CONCAT(e.FirstName, ' ', e.LastName) AS 'FullName'
	, e.HireDate
FROM Employees e
	INNER JOIN Employees j ON e.HireDate > j.HireDate AND j.LastName='Jones';


/* 6. Write a query to get the department name and number of employees in the department. */
CREATE VIEW NumberOfEmployeesInDepartment AS
SELECT d.DepartmentName
	, COUNT(e.EmployeeID) AS 'No Of Employees'
FROM Departments d
	INNER JOIN Employees e ON e.DepartmentID = d.DepartmentID 
GROUP BY d.DepartmentID, d.DepartmentName;

SELECT * FROM NumberOfEmployeesInDepartment;


/* 7. Find the employee ID, job title, number of days between ending date and starting date for all jobs in 
department 90 from job history. */
CREATE VIEW EmpOfDepartment90WithJobDays AS
SELECT EmployeeID
	, JobID
	, DATEDIFF(DD, StartDate, EndDate) AS 'NumberOfDays'
FROM JobHistory
WHERE DepartmentID = 90;

SELECT * FROM EmpOfDepartment90WithJobDays;


/* 8. Write a query to display the department ID, department name and manager first name.*/
CREATE VIEW ManagerOfDepartments AS
SELECT d.DepartmentID
	, d.DepartmentName
	, m.FirstName 
FROM Departments d
	LEFT JOIN Employees m ON d.ManagerID = m.EmployeeID;

SELECT * FROM ManagerOfDepartments;


/* 9. Write a query to display the department name, manager name, and city. */
CREATE VIEW ManagerOfDepartmentsWithCity AS
SELECT d.DepartmentID
	, d.DepartmentName
	, m.FirstName, l.City
FROM Departments d
	LEFT JOIN Employees m ON d.ManagerID = m.EmployeeID
	LEFT JOIN Locations l ON d.LocationID = l.LocationID;

SELECT * FROM ManagerOfDepartmentsWithCity;


/* 10. Write a query to display the job title and average salary of employees. */
CREATE VIEW AvgSalaryOfEmployeesWithJobId AS
SELECT JobId, AVG(Salary) AS 'AverageSalary'
FROM Employees
GROUP BY JobId;

SELECT * FROM AvgSalaryOfEmployeesWithJobId;


/* 11. Display job title, employee name, and the difference between salary of the employee and minimum salary for the job. */
CREATE VIEW DifferenceOfMinSalaryOnJobId AS
SELECT e.JobId
	, CONCAT(e.FirstName, ' ', e.LastName) AS 'FullName'
	, e.Salary - ( SELECT DISTINCT MIN(Salary)
					FROM Employees d
					WHERE e.JobId = d.JobId 
					GROUP BY JobId) AS 'DifferenceFromMinSalary'
FROM Employees e;

SELECT * FROM DifferenceOfMinSalaryOnJobId;


/* 12. Write a query to display the job history that were done by any employee who is currently drawing more than 10000 of salary. */
CREATE VIEW JobHistoryOfEmpWhoseSalaryGreater10000 AS
SELECT CONCAT(e.FirstName, ' ', e.LastName) AS 'FullName'
	, e.Salary
	, e.JobId
	, j.StartDate
	, j.EndDate
FROM Employees e
	LEFT JOIN JobHistory j ON e.EmployeeID = j.EmployeeID
WHERE e.Salary > 10000
ORDER BY e.FirstName, e.LastName ASC;


/* 13. Write a query to display department name, name (first_name, last_name), hire date, salary of the manager 
for all managers whose experience is more than 15 years. */
CREATE VIEW ManagerWith15YearsExperience AS
SELECT d.DepartmentName
	, e.FirstName +' '+e.LastName[Name]
	, e.HireDate
	, e.Salary
FROM Employees e 
	INNER JOIN Departments d ON d.ManagerID = e.EmployeeID
	INNER JOIN JobHistory j 
	ON j.EmployeeID = e.EmployeeID
WHERE DATEDIFF(YY,e.HireDate,GETDATE()) > 15;

SELECT * FROM ManagerWith15YearsExperience;