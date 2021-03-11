
--
--Assignment
--
-- Note: Refer existing employee Table
--1 Select employee details from employee table if data exists in incentive table ?

SELECT * FROM Employees WHERE EmployeeId IN(
SELECT EmployeeRefId FROM Incentives);

--2 Find Salary of the employee whose salary is more than Roy Salary

SELECT FirstName + ' ' +LastName[Name],
	Salary
FROM Employees WHERE Salary > (
					SELECT Salary FROM Employees
					WHERE FirstName = 'Roy');
					
--3 Create a view to select FirstName,LastName,Salary,JoiningDate,IncentiveDate and IncentiveAmount

CREATE VIEW EmployeeView
AS
SELECT dbo.Employees.FirstName, dbo.Employees.LastName, dbo.Employees.Salary, dbo.Employees.JoiningDate, dbo.Incentives.IncentiveDate, dbo.Incentives.IncentiveAmount
FROM dbo.Employees INNER JOIN
      dbo.Incentives ON dbo.Employees.EmployeeId = dbo.Incentives.EmployeeRefId

--4 Create a view to select Select first_name, incentive amount from employee and incentives table for those employees who have incentives and incentive amount greater than 3000

CREATE VIEW EmployeeView3000
AS
SELECT        dbo.Employees.FirstName, dbo.Incentives.IncentiveAmount
FROM            dbo.Employees INNER JOIN
                         dbo.Incentives ON dbo.Employees.EmployeeId = dbo.Incentives.EmployeeRefId
WHERE        (dbo.Incentives.IncentiveAmount > 3000);

--
-- (Note refer tables from sql supported files)
-- 
--1 Create a View to Find the names (first_name, last_name), job, department number, and department name of the employees who work in London

CREATE VIEW View1 AS
SELECT        dbo.Employees.FirstName + ' ' + dbo.Employees.LastName AS Name, dbo.Employees.JobId, dbo.Employees.DepartmentID, dbo.Departments.DepartmentName
FROM            dbo.Employees INNER JOIN
                         dbo.Departments ON dbo.Employees.DepartmentID = dbo.Departments.DepartmentID INNER JOIN
                         dbo.Locations ON dbo.Departments.LocationID = dbo.Locations.LocationID INNER JOIN
                         dbo.Countries ON dbo.Countries.CountryID = dbo.Locations.CountryID
WHERE        (dbo.Countries.CountryName = 'London')

-- 2. Create a View to get the department name and number of employees in the department. 
CREATE VIEW View2 AS
SELECT d.DepartmentName, COUNT(e.EmployeeID) AS 'No Of Employees'
FROM Departments d
	INNER JOIN Employees e ON e.DepartmentID = d.DepartmentID 
GROUP BY d.DepartmentID, d.DepartmentName;

/*3 Find the employee ID, job title, number of days between ending date and starting date for 
all jobs in department 90 from job history.*/
SELECT e.EmployeeID
	, j.JobID
	, DATEDIFF(DD,j.StartDate,j.EndDate) AS 'NumberOfDays'
FROM Employees e
	INNER JOIN JobHistory j ON e.JobId = j.JobID
	INNER JOIN Departments d ON j.DepartmentID = d.DepartmentID
WHERE d.DepartmentID = 90;

--4 Write a View to display the department name, manager name, and city.
CREATE VIEW View3 AS
SELECT d.DepartmentName,
	e.FirstName+' '+e.LastName[Manager Name],
	l.City
FROM Departments d 
	INNER JOIN Locations l
	ON d.LocationID = l.LocationID
	INNER JOIN Employees e
	ON e.EmployeeID =d.ManagerID;

--5 Create a View to display department name, name (first_name, last_name), hire date, salary of the manager for all managers whose experience is more than 15 years.
CREATE VIEW View4 AS
SELECT d.DepartmentName,
	e.FirstName +' '+e.LastName[Name],
	e.HireDate,
	e.Salary
FROM Employees e INNER JOIN Departments d
	ON d.ManagerID = e.EmployeeID
	INNER JOIN JobHistory j 
	ON j.EmployeeID = e.EmployeeID
WHERE DATEDIFF(YY,e.HireDate,GETDATE()) > 15;\


-- Sub Queries

-- 1. Write a query to find the names (first_name, last_name) and salaries of the employees who have higher salary than the employee whose last_name='Bull'. 

	SELECT FirstName +' '+LastName[Name],
		Salary
	FROM Employees 
	WHERE Salary > (SELECT Salary 
					FROM Employees 
					WHERE LastName='Bull');

-- 2. Find the names (first_name, last_name) of all employees who works in the IT department. 

	SELECT FirstName +' '+LastName
	FROM Employees 
	WHERE DepartmentID = (SELECT DepartmentID 
							FROM Departments 
							WHERE DepartmentName = 'IT');

-- 3. Find the names (first_name, last_name) of the employees who have a manager who works for a department based in United States. 
-- Hint : Write single-row and multiple-row subqueries
	
	SELECT FirstName+' '+LastName 
	FROM Employees 
	WHERE ManagerID IN (SELECT ManagerID 
					FROM Departments 
					WHERE LocationID IN (SELECT LocationID
							FROM Locations
							WHERE CountryID IN (SELECT CountryID 
									FROM Countries 
									WHERE CountryName = 'United States')));

-- 4. Find the names (first_name, last_name) of the employees who are managers. 

	SELECT FirstName +' '+LastName [Names] 
	FROM Employees 
	WHERE EmployeeID IN (SELECT DISTINCT ManagerID 
						FROM Departments);

-- 5. Find the names (first_name, last_name), salary of the employees whose salary is greater than the average salary. 
	
	SELECT FirstName+' '+LastName[Names],
		Salary 
	FROM Employees 
	WHERE Salary > (SELECT AVG(Salary) 
				FROM Employees);


-- 6. Find the names (first_name, last_name), salary of the employees whose salary is equal to the minimum salary for their job grade. 

	SELECT FirstName+' '+LastName[Names],
		Salary 
	FROM Employees 
	WHERE Salary > (SELECT MIN(Salary) 
				FROM Employees);

-- 7. Find the names (first_name, last_name), salary of the employees who earn more than the average salary and who works in any of the IT departments. 
	
	SELECT FirstName+' '+LastName[Names],
		Salary
	FROM Employees 
	WHERE DepartmentID = (SELECT DepartmentID 
						FROM Departments 
						WHERE DepartmentName = 'IT') 
		  and Salary > (SELECT AVG(Salary) 
						FROM Employees);

-- 8. Find the names (first_name, last_name), salary of the employees who earn more than Mr. Bell. 

	SELECT FirstName+''+LastName[Names],
		Salary 
	FROM Employees
	WHERE Salary > (SELECT Salary
					FROM Employees 
					WHERE LastName ='Bell');

-- 9. Find the names (first_name, last_name), salary of the employees who earn the same salary as the minimum salary for all departments. 

	SELECT CONCAT(e.FirstName, ' ', e.LastName) AS 'FullName', e.Salary, e.DepartmentID
	FROM Employees e
	WHERE Salary = (SELECT tempTbl.MinDepartmentSalary
                FROM ( SELECT MIN(Salary) AS 'MinDepartmentSalary', DepartmentID
                        FROM Employees
                        GROUP BY DepartmentID) AS tempTbl
                WHERE e.DepartmentID = tempTbl.DepartmentID);
-- 10. Find the names (first_name, last_name), salary of the employees whose salary greater than average salary of all department. 

	SELECT CONCAT(e.FirstName, ' ', e.LastName) AS 'FullName', e.Salary,e.DepartmentID
	FROM Employees e
	WHERE Salary > (SELECT tempTbl.AvgDepartmentSalary
                FROM ( SELECT AVG(Salary) AS 'AvgDepartmentSalary', DepartmentID
                        FROM Employees
                        GROUP BY DepartmentID) AS tempTbl
                WHERE e.DepartmentID = tempTbl.DepartmentID);

-- 11. Write a query to find the names (first_name, last_name) and salary of the employees who earn a salary that is higher than the salary of all the Shipping Clerk (JOB_ID = 'SH_CLERK'). Sort the results on salary from the lowest to highest. 

	SELECT e1.FirstName+' '+e1.LastName[Names], e1.Salary
	FROM Employees e1
	WHERE e1.Salary > (SELECT MAX(e2.Salary) 
						FROM Employees e2 
						WHERE e2.JobId='SH_CLERK')
	ORDER BY e1.Salary;

-- 12. Write a query to find the names (first_name, last_name) of the employees who are not supervisors. 

	SELECT e.FirstName+' '+e.LastName[Names],
		e.Salary
	FROM Employees e
	WHERE e.EmployeeID NOT IN (SELECT e2.EmployeeID
								FROM Employees e2 
								WHERE e2.ManagerID = 0);

-- 13. Write a query to display the employee ID, first name, last names, and department names of all employees. 

	SELECT e.EmployeeID
		,e.FirstName +' '+e.LastName[Names],
		(SELECT DepartmentName FROM Departments where e.DepartmentID = DepartmentID)'Department Name'
	FROM Employees e;

-- 14. Write a query to display the employee ID, first name, last names, salary of all employees whose salary is above average for their departments. 

	SELECT e1.EmployeeID,
		e1.FirstName+''+e1.LastName[Names],
		e1.Salary
	FROM Employees e1
	WHERE Salary >= (SELECT AVG(e2.Salary) FROM Employees e2 WHERE e1.DepartmentID=e2.DepartmentID)

-- 15. Write a query to fetch even numbered records from employees table. 

	SELECT * 
	FROM Employees 
	WHERE EmployeeID % 2 = 0 ;  

-- 16. Write a query to find the 5th maximum salary in the employees table. 

	SELECT DISTINCT Salary 
	FROM (SELECT Salary,
		DENSE_RANK() OVER(ORDER BY Salary DESC) 'SalaryRank' 
		FROM Employees)AS tmp
	WHERE tmp.SalaryRank = 5;

-- 17. Write a query to find the 4th minimum salary in the employees table. 

	SELECT DISTINCT Salary 
	FROM (SELECT Salary,
		DENSE_RANK() OVER(ORDER BY Salary) 'SalaryRank' 
		FROM Employees)AS tmp
	WHERE tmp.SalaryRank = 4;

-- 18. Write a query to select last 10 records from a table. 

	SELECT DISTINCT EmployeeID,
		FirstName,
		LastName,
		Email,
		PhoneNumber,
		HireDate,
		JobId,
		Salary,
		CommissionPct,
		ManagerID,
		DepartmentID
	FROM(SELECT *,
		DENSE_RANK() OVER (ORDER BY EmployeeID DESC) AS 'empRank'
		FROM Employees) AS tbl
	WHERE tbl.empRank < 11;

-- 19. Write a query to list department number, name for all the departments in which there are no employees in the department. 

	SELECT DepartmentID,DepartmentName
	FROM Departments
	WHERE DepartmentID NOT IN (SELECT DepartmentID FROM Employees);

-- 20. Write a query to get 3 maximum salaries. 

	SELECT DISTINCT Salary AS 'MAX3Salaries'
	FROM(SELECT Salary, DENSE_RANK() OVER (ORDER BY Salary DESC)'SalaryRank' FROM Employees) tbl
	WHERE tbl.SalaryRank < 4
	ORDER BY Salary DESC;

-- 21. Write a query to get 3 minimum salaries. 

	SELECT DISTINCT Salary AS 'MIN3Salaries'
	FROM (SELECT Salary, 
		DENSE_RANK() OVER (ORDER BY Salary ASC) AS 'SalaryRank'
		FROM Employees) TempTbl
	WHERE TempTbl.SalaryRank < 4;

-- 22. Write a query to get nth max salaries of employees. 
	
	DECLARE @n INT = 5;
	SELECT DISTINCT Salary'5th max salary '
	FROM (SELECT Salary,
		DENSE_RANK() OVER (ORDER BY Salary DESC) AS 'SalaryRank' 
		FROM Employees) TempTbl
	WHERE TempTbl.SalaryRank = @n;


---------------------------------------------------------------------------------------------------------------------------------------------------------
-- Views
USE Day6;

 

-- 1. Write a query to find the addresses (location_id, street_address, city, state_province, country_name) of all the departments. 
CREATE VIEW DepartmentsAddress AS
SELECT d.DepartmentName,
	l.LocationID,
	l.StreetAddress,
	l.City,
	l.StateProvince,
	c.CountryName
FROM Departments d
    LEFT JOIN Locations l ON d.LocationID = l.LocationID
    LEFT JOIN Countries c ON c.CountryID = l.CountryID;

-- 2. Write a query to find the names (first_name, last name), department ID and name of all the employees. 
CREATE VIEW EmployeesDepartment AS
SELECT CONCAT(e.FirstName, ' ', e.LastName) AS 'FullName', d.DepartmentID, d.DepartmentName
FROM Employees e
    LEFT JOIN Departments d ON e.DepartmentID = d.DepartmentID;

-- 3. Find the names (first_name, last_name), job, department number, and department name of the employees who work in London. 
CREATE VIEW EmployeeInLondon AS
SELECT e.FirstName+ ' ' +e.LastName[Names]
    , e.JobId
    , e.DepartmentID
    , d.DepartmentName
FROM Employees e
    INNER JOIN Departments d ON e.DepartmentID = d.DepartmentID
    INNER JOIN Locations l ON d.LocationID = l.LocationID
    INNER JOIN Countries c ON l.CountryID = c.CountryID
WHERE c.CountryName = 'London';

-- 4. Write a query to find the employee id, name (last_name) along with their manager_id, manager name (last_name).  
CREATE VIEW EmployeeManager AS
SELECT e.EmployeeID, e.LastName, m.ManagerID, m.LastName AS 'ManagerName'
FROM Employees e
    LEFT JOIN Employees m ON e.ManagerID = m.EmployeeID;

-- 5. Find the names (first_name, last_name) and hire date of the employees who were hired after 'Jones'. 
CREATE VIEW EmployeeHiredAfterJones AS 
SELECT CONCAT(e.FirstName, ' ', e.LastName) AS 'FullName', e.HireDate
FROM Employees e
    INNER JOIN Employees j ON e.HireDate > j.HireDate AND j.LastName='Jones';

-- 6. Write a query to get the department name and number of employees in the department. 
CREATE VIEW NumberOfEmployeesInDepartment AS
SELECT d.DepartmentName, COUNT(e.EmployeeID) AS 'No Of Employees'
FROM Departments d
    INNER JOIN Employees e ON e.DepartmentID = d.DepartmentID 
GROUP BY d.DepartmentID, d.DepartmentName;

--7. Find the employee ID, job title, number of days between ending date and starting date for all jobs in department 90 from job history. 



-- 8. Write a query to display the department ID, department name and manager first name. 

-- 9. Write a query to display the department name, manager name, and city. 

-- 10. Write a query to display the job title and average salary of employees. 

-- 11. Display job title, employee name, and the difference between salary of the employee and minimum salary for the job. 

-- 12. Write a query to display the job history that were done by any employee who is currently drawing more than 10000 of salary. 

-- 13. Write a query to display department name, name (first_name, last_name), hire date, salary of the manager for all managers whose experience is more than 15 years. 
