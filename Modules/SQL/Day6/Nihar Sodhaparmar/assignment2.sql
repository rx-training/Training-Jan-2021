USE Day6;

/* 1. Create a View to Find the names (first_name, last_name), job, department number, and department name 
of the employees who work in London */
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


/* 2. Create a View to get the department name and number of employees in the department. */
CREATE VIEW NumberOfEmployeesInDepartment AS
SELECT d.DepartmentName, COUNT(e.EmployeeID) AS 'No Of Employees'
FROM Departments d
	INNER JOIN Employees e ON e.DepartmentID = d.DepartmentID 
GROUP BY d.DepartmentID, d.DepartmentName;

SELECT * FROM NumberOfEmployeesInDepartment;

/* 3. Find the employee ID, job title, number of days between ending date and starting date for 
all jobs in department 90 from job history.*/
SELECT e.EmployeeID
	, j.JobID
	, DATEDIFF(DD,j.StartDate,j.EndDate) AS 'NumberOfDays'
FROM Employees e
	INNER JOIN JobHistory j ON e.JobId = j.JobID
	INNER JOIN Departments d ON j.DepartmentID = d.DepartmentID
WHERE d.DepartmentID = 90;


/* 4. Write a View to display the department name, manager name, and city. */
CREATE VIEW DepartmentNameWithCity AS
SELECT d.DepartmentName
	, CONCAT(e.FirstName, ' ', e.LastName) AS 'ManagerName'
	, l.City
FROM Departments d
	INNER JOIN Locations l ON d.LocationID = l.LocationID
	INNER JOIN Employees e ON e.EmployeeID = d.ManagerID;

SELECT * FROM DepartmentNameWithCity;


/* 5. Create a View to display department name, name (first_name, last_name), hire date, salary of the manager 
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