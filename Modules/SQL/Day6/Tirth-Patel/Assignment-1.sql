use CarSales
SELECT * FROM Employees
SELECT * FROM incentives


--Select employee details from employee table if data exists in incentive table ?
SELECT * FROM Employees e WHERE  EXISTS (SELECT * FROM incentives i
							WHERE e.Employee_ID = i.Employee_Ref_Id)

--Find Salary of the employee whose salary is more than Roy Salary

SELECT Salary ,First_Name FROM Employees WHERE Salary > (SELECT Salary FROM Employees 
												WHERE First_Name = 'Roy'
												)
--Create a view to select FirstName,LastName,Salary,JoiningDate,IncentiveDate
--and IncentiveAmount
CREATE VIEW 
vEmployees AS SELECT e.First_Name , e.Last_Name ,e.Salary,e.Joining_Date ,
									i.Incentive_Date,i.Incentive_Amount
FROM Employees e JOIN incentives i ON e.Employee_ID = i.Employee_Ref_Id

SELECT * fROM vEmployees

--Create a view to select Select first_name, incentive amount from employee and incentives 
--table for those employees who have incentives and incentive amount greater than 3000

CREATE VIEW 
vEmployees1 AS SELECT e.First_Name , e.Last_Name ,e.Salary,e.Joining_Date ,
									i.Incentive_Date,i.Incentive_Amount
FROM Employees e JOIN incentives i ON e.Employee_ID = i.Employee_Ref_Id 
WHERE i.Incentive_Amount > 3000

SELECT * fROM vEmployees1

USE [view-database]

SELECT * FROM Departments


--Create a View to Find the names (first_name, last_name), job,
--department number, and department name of the employees who work in London


SELECT        dbo.Employees.FirstName, dbo.Employees.LastName, dbo.Employees.JobId, dbo.Departments.DepartmentID, dbo.Departments.DepartmentName, dbo.Locations.LocationID
FROM            dbo.Employees INNER JOIN
                         dbo.Departments ON dbo.Employees.DepartmentID = dbo.Departments.DepartmentID INNER JOIN
                         dbo.Locations ON dbo.Departments.LocationID = dbo.Locations.LocationID
WHERE        (dbo.Locations.City = 'london')

SELECT * FROM EmpLondonDepartment


--Create a View to get the department name and number of employees in the department.
SELECT        dbo.Employees.EmployeeID, dbo.Employees.DepartmentID, dbo.Departments.DepartmentName, dbo.Departments.DepartmentID AS Expr1
FROM            dbo.Employees INNER JOIN
                         dbo.Departments ON dbo.Employees.DepartmentID = dbo.Departments.DepartmentID

SELECT * FROM vEmpDepartment

SELECT * FROM JobHistory

--Find the employee ID, job title, number of days 
--between ending date and starting date for all jobs in department 90 from job history

SELECT employeeID,
	(SELECT EmployeeID,JobID,DATEDIFF(d,StartDate,EndDate) FROM JobHistory jh WHERE jh.DepartmentID = 90 )
	 FROM Employees


SELECT e.EmployeeID ,
		dp.JobID as 'job-title',
		dp.datediff
	FROM Employees e JOIN (SELECT EmployeeID,JobID,DATEDIFF(d,StartDate,EndDate) as 'datediff'
	FROM JobHistory jh WHERE jh.DepartmentID = 90 ) as dp ON e.EmployeeID = dp.EmployeeID

	--Write a View to display the department name, manager name, and city

	CREATE VIEW  vdepartment AS 
	SELECT d.DepartmentName, d.ManagerID,l.City
	FROM Departments d JOIN Locations l ON d.LocationID = l.LocationID 

	SELECT * FROM vdepartment

--Create a View to display department name, name (first_name, last_name),
--hire date, salary of the manager for all managers whose experience is more than 15 years.

--DROP VIEW vManagerSalary
CREATE VIEW vManagerSalary AS 
SELECT  d.DepartmentName , e.FirstName + e.LastName AS 'NAME',
		jh.StartDate, Salary
FROM Employees e JOIN Departments d on e.ManagerID = d.ManagerID
JOIN JobHistory jh ON jh.DepartmentID = d.DepartmentID 
WHERE DATEDIFF(YEAR,StartDate,EndDate) > 15

SELECT * FROM vManagerSalary
			
			
