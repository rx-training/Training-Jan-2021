USE Empdb;




/* Select employee details from employee table if data exists in incentive table ? */
SELECT * FROM Employees WHERE EXISTS (SELECT * FROM Incentives);

/* Find Salary of the employee whose salary is more than Roy Salary */
SELECT SALARY FROM Employees WHERE SALARY > (SELECT SALARY FROM Employees WHERE FIRST_NAME = 'Roy');

/* Create a view to select FirstName,LastName,Salary,JoiningDate,IncentiveDate and IncentiveAmount */
GO
CREATE VIEW EmployeesView 
AS 
SELECT A.FIRST_NAME, A.LAST_NAME, A.SALARY, A.JOINING_DATE, B.INCENTIVE_DATE, B.INCENTIVE_AMOUNT FROM Employees AS A JOIN Incentives AS B ON A.EMPLOYEE_ID = B.EMPLOYEE_REF_ID;
GO
SELECT FIRST_NAME, LAST_NAME, SALARY, JOINING_DATE, INCENTIVE_DATE, INCENTIVE_AMOUNT FROM EmployeesView;

/* Create a view to select Select first_name, incentive amount from employee and incentives table for those employees who have incentives and incentive amount greater than 3000 */
GO
CREATE VIEW EmployeesView2 
AS 
SELECT A.FIRST_NAME, B.INCENTIVE_AMOUNT FROM Employees AS A INNER JOIN Incentives AS B ON A.EMPLOYEE_ID = B.EMPLOYEE_REF_ID AND INCENTIVE_AMOUNT>3000;
GO

SELECT FIRST_NAME, INCENTIVE_AMOUNT FROM EmployeesView2;




/* (Note refer tables from sql supported files) */

USE Day6db;

/* Create a View to Find the names (first_name, last_name), job, department number, and department name of the employees who work in London */ 
GO
CREATE VIEW EmployeesView3
AS 
SELECT A.FirstName, A.LastName, A.JobId, B.DepartmentID, B.DepartmentName FROM Employees A JOIN Departments B  ON (A.DepartmentID = B.DepartmentID) JOIN Locations C ON B.LocationID = C.LocationID WHERE C.City = 'London';
GO
SELECT * FROM EmployeesView3;


/* Create a View to get the department name and number of employees in the department. */ 
GO
CREATE VIEW EmployeesView4
AS
SELECT DepartmentName, COUNT(*) AS "Number of Employees" FROM Departments D INNER JOIN Employees E ON E.DepartmentID = D.DepartmentID GROUP BY D.DepartmentID,D.DepartmentName;
GO
SELECT * FROM EmployeesView4;

/* Find the employee ID, job title, number of days between ending date and starting date for all jobs in department 90 from job history. */ 
GO
CREATE VIEW EmpView
AS
SELECT EmployeeID, JobID, DATEDIFF(DAY, StartDate, EndDate) AS "Number of Days" FROM JobHistory WHERE DepartmentID = 90;
GO
SELECT * FROM EmpView;
/* Write a View to display the department name, manager name, and city.  */
GO
CREATE VIEW EmployeesView5
AS
SELECT D.DepartmentName, D.ManagerID, L.City FROM Departments D LEFT JOIN Locations L ON D.LocationID = L.LocationID;
GO
SELECT * FROM EmployeesView5;


/* Create a View to display department name, name (first_name, last_name), hire date, salary of the manager for all managers whose experience is more than 15 years. */
GO
CREATE VIEW EmployeesView6
AS
SELECT D.DepartmentName, E.FirstName, E.LastName, E.HireDate, E.Salary, DATEDIFF(YEAR,HireDate,GETDATE()) AS "Experience" FROM Departments D JOIN Employees E ON D.ManagerID = E.EmployeeID WHERE DATEDIFF(YEAR,HireDate,GETDATE()) > 15;
GO
SELECT * FROM EmployeesView6;