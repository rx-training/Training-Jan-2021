USE Day6db;

/* 1. Write a query to find the addresses (location_id, street_address, city, state_province, country_name) of all the departments.  */
GO
CREATE VIEW View1 AS
SELECT L.LocationID, L.StreetAddress, L.City, L.StateProvince, C.CountryName FROM Departments D JOIN Locations L ON D.LocationID = L.LocationID JOIN Countries C ON L.CountryID = C.CountryID;   
GO
SELECT * FROM View1;

/* 2. Write a query to find the names (first_name, last name), department ID and name of all the employees.  */
GO
CREATE VIEW View2 AS
SELECT E.FirstName, E.LastName, D.DepartmentID, D.DepartmentName FROM Employees E JOIN Departments D ON E.DepartmentID = D.DepartmentID;
GO
SELECT * FROM View2;

/* 3. Find the names (first_name, last_name), job, department number, and department name of the employees who work in London.  */
GO
CREATE VIEW View3 AS
SELECT E.FirstName, E.LastName, E.JobId, D.DepartmentID, D.DepartmentName FROM Employees E JOIN Departments D ON E.DepartmentID = D.DepartmentID JOIN Locations L ON D.LocationID = L.LocationID WHERE City = 'London' ;
GO
SELECT * FROM View3;


/* 4. Write a query to find the employee id, name (last_name) along with their manager_id, manager name (last_name).  */
GO
CREATE VIEW View4 AS
SELECT E.EmployeeID, E.LastName, M.ManagerID, M.LastName FROM Employees E JOIN Employees M ON E.ManagerID = M.EmployeeID;
GO
SELECT * FROM View4;


/* 5. Find the names (first_name, last_name) and hire date of the employees who were hired after 'Jones'.  */
GO
CREATE VIEW View5 AS
SELECT FirstName, LastName, HireDate FROM Employees WHERE HireDate > (SELECT HireDate FROM Employees WHERE LastName = 'Jones');
GO
SELECT * FROM View5;

/* 6. Write a query to get the department name and number of employees in the department.  */
GO
CREATE VIEW View6
AS
SELECT DepartmentName, COUNT(*) AS "Number of Employees" FROM Departments D INNER JOIN Employees E ON E.DepartmentID = D.DepartmentID GROUP BY D.DepartmentID,D.DepartmentName;
GO
SELECT * FROM View6;

/* 7. Find the employee ID, job title, number of days between ending date and starting date for all jobs in department 90 from job history.  */
GO
CREATE VIEW View7
AS
SELECT EmployeeID, JobID, DATEDIFF(DAY, StartDate, EndDate) AS "Number of Days" FROM JobHistory WHERE DepartmentID = 90;
GO
SELECT * FROM View7;

/* 8. Write a query to display the department ID, department name and manager first name. */ 
GO
CREATE VIEW View8
AS
SELECT D.DepartmentID, D.DepartmentName, E.FirstName AS "Manager Name" FROM Departments D INNER JOIN Employees E ON D.ManagerID = E.EmployeeID;
GO
SELECT * FROM View8;

/* 9. Write a query to display the department name, manager name, and city.  */
GO
CREATE VIEW View9
AS
SELECT D.DepartmentName, D.ManagerID, L.City FROM Departments D LEFT JOIN Locations L ON D.LocationID = L.LocationID;
GO
SELECT * FROM View9;

/* 10. Write a query to display the job title and average salary of employees.  */
GO
CREATE VIEW View10
AS
SELECT JobId, (SELECT AVG(Salary) FROM Employees) AS "AVERAGE SALARY"  FROM Employees;
GO
SELECT * FROM View10;

/* 11. Display job title, employee name, and the difference between salary of the employee and minimum salary for the job.  */
GO
CREATE VIEW View11
AS
SELECT JobId, FirstName AS "Employee Name", Salary - (SELECT MIN(Salary) FROM Employees) AS "Salary Difference" FROM Employees;
GO
SELECT * FROM View11;

/* 12. Write a query to display the job history that were done by any employee who is currently drawing more than 10000 of salary.  */
GO
CREATE VIEW View12
AS
SELECT * FROM JobHistory WHERE EmployeeID IN (SELECT EmployeeID FROM Employees WHERE Salary > 10000);
GO
SELECT * FROM View12;

/* 13. Write a query to display department name, name (first_name, last_name), hire date, salary of the manager for all managers whose experience is more than 15 years. */
GO
CREATE VIEW View13
AS
SELECT D.DepartmentName, E.FirstName, E.LastName, E.HireDate, E.Salary, DATEDIFF(YEAR,HireDate,GETDATE()) AS "Experience" FROM Departments D JOIN Employees E ON D.ManagerID = E.EmployeeID WHERE DATEDIFF(YEAR,HireDate,GETDATE()) > 15;
GO
SELECT * FROM View13;