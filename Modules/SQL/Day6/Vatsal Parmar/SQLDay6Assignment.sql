/* Assignment Day 6 */

-- 1 - Select employee details from employee table if data exists in incentive table
SELECT * FROM Employees 
WHERE EXISTS
(SELECT Employee_Id FROM Incentives WHERE Employee_Id>0);

-- 2 -- Find Salary of the employee whose salary is more than Roy Salary.
SELECT First_Name,Salary 
FROM Employees
WHERE Salary > (SELECT Salary FROM Employees WHERE First_Name='Roy');

-- 3 - Create a view to select FirstName,LastName,Salary,JoiningDate,IncentiveDate and IncentiveAmount

CREATE VIEW vEmployees
AS
SELECT e.First_Name,e.Last_Name,e.Salary,e.Joining_Date,i.Incentive_Date,i.Incentive_Amount
FROM Employees e 
JOIN Incentives i
ON e.Employee_Id = i.Employee_Ref_Id;

-- 4 - Create a view to select Select first_name, incentive amount from employee and
--incentives table for those employees who have incentives and incentive amount
--greater than 3000

CREATE VIEW vEmps
AS
SELECT e.First_Name,i.Incentive_Amount
FROM Employees e 
JOIN Incentives i
ON e.Employee_Id = i.Employee_Ref_Id 
WHERE i.Incentive_Amount > 3000;

-- 5 - Create a View to Find the names (first_name, last_name), job, department number,
--and department name of the employees who work in London
USE SQLDay6Learning

CREATE VIEW vLondon
AS
SELECT e.FirstName,e.LastName,e.JobId,d.DepartmentID,d.DepartmentName
FROM Employees e
JOIN Departments d ON e.DepartmentID = d.DepartmentID
JOIN Locations l ON d.LocationID = l.LocationID WHERE l.City = 'London';

-- 6 - Create a View to get the department name and number of employees in the department.

CREATE VIEW vDepartment
AS
SELECT d.DepartmentName,COUNT(EmployeeID) 'Number Of Employees'
FROM Departments d
JOIN Employees e ON d.DepartmentID = e.DepartmentID GROUP BY d.DepartmentName;

-- 7 - Find the employee ID, job title, number of days between ending date and 
--starting date for all jobs in department 90 from job history.

SELECT EmployeeID,JobID,DATEDIFF(dd,StartDate,EndDate)'Number Of Days'
FROM JobHistory WHERE DepartmentID = 90;

-- 8 - Write a View to display the department name, manager name, and city.

CREATE VIEW vManager
AS
SELECT d.DepartmentName,e.FirstName AS 'Manager Name',l.City
FROM Departments d
JOIN Locations l ON d.LocationID = l.LocationID
LEFT OUTER JOIN Employees e ON e.EmployeeID = d.ManagerID
;

-- 9 Create a View to display department name, name (first_name, last_name), hire date,
--salary of the manager for all managers whose experience is more than 15 years.

CREATE VIEW vManagers
AS
SELECT d.DepartmentName,e.FirstName+' '+e.LastName AS 'Name',e.HireDate ,e.Salary
FROM Departments d
JOIN Employees e ON e.EmployeeID = d.ManagerID
JOIN JobHistory j ON j.EmployeeID = d.ManagerID
WHERE DATEDIFF(yy,j.StartDate,j.EndDate) > 15;
