USE Day2
SELECT * FROM INCENTIVES
--Day6 Assignment
/* 1. Select employee details from employee table if data exists in incentive table ? */

SELECT * FROM EMPLOYEE WHERE EXISTS ( SELECT * FROM  INCENTIVES WHERE EMPLOYEE_REF_ID > 0)

/* 2.Find Salary of the employee whose salary is more than Roy Salary */
SELECT FIRST_NAME FROM EMPLOYEE WHERE SALARY > (SELECT SALARY FROM EMPLOYEE WHERE FIRST_NAME = 'Roy')

/* 3.Create a view to select FirstName,LastName,Salary,JoiningDate,IncentiveDate and IncentiveAmount */
CREATE VIEW vEmployee AS
SELECT e.FIRST_NAME , e.LAST_NAME , e.SALARY ,e.JOINING_DATE , i.INCENTIVE_DATE , i.INCENTIVE_AMOUNT FROM EMPLOYEE e 
       JOIN INCENTIVES i ON e.EMPLOYEE_ID = i.EMPLOYEE_REF_ID

SELECT * FROM vEmployee

/* 4.Create a view to select Select first_name, incentive amount from employee and incentives table for those employees
who have incentives and incentive amount greater than 3000 */

CREATE VIEW vEmp AS
SELECT e.FIRST_NAME , i.INCENTIVE_AMOUNT FROM EMPLOYEE e 
       JOIN INCENTIVES i ON e.EMPLOYEE_ID = i.EMPLOYEE_REF_ID WHERE i.INCENTIVE_AMOUNT > 3000

SELECT * FROM vEmp

/* 5. Create a View to Find the names (first_name, last_name), job, department number, and department name of the employees who work in London */

CREATE VIEW vEmp AS
SELECT e.FirstName , e.LastName , e.JobId , d.DepartmentID ,d.DepartmentName   FROM Employees e 
       JOIN Departments d ON e.DepartmentID = d.DepartmentID
	   JOIN Locations l ON d.LocationID = l.LocationID WHERE l.city = 'London'

/* 6. Create a View to get the department name and number of employees in the department. */
USE Day6
CREATE VIEW getDepartment AS
SELECT d.DepartmentName , COUNT(e.EmployeeID) AS 'Number Of Employee' FROM Departments d 
       JOIN Employees e ON d.DepartmentID = e.DepartmentID
	   GROUP BY d.DepartmentName

/* 7. Find the employee ID, job title, number of days between ending date and starting date for all jobs in department 90 from job history.  */

 SELECT  EmployeeID ,JobID  ,CONCAT(
		DATEDIFF(DD, StartDate,EndDate ),' Days ' ) As 'Number of Days' FROM JobHistory WHERE DepartmentID = 90 

/* 8. Write a View to display the department name, manager name, and city. */

CREATE VIEW displayDepartment AS
SELECT  d.DepartmentName  , e.FirstName As 'Manager Name', l.City FROM Departments d 	
		 JOIN Locations l ON d.LocationID = l.LocationID
		LEFT OUTER JOIN Employees e ON d.ManagerID = e.EmployeeID 
		
/* 9.Create a View to display department name, name (first_name, last_name), hire date, 
salary of the manager for all managers whose experience is more than 15 years. */

CREATE VIEW vDepartmentHire AS
		SELECT  d.DepartmentName , e.EmployeeID, CONCAT(e.FirstName ,',' ,e.LastName )AS 'NAME'  , e.Salary FROM Departments d
		JOIN Employees e ON e.EmployeeID = d.ManagerID 
		JOIN JobHistory j ON  e.EmployeeID = j.EmployeeID
		WHERE  DATEDIFF( YYYY,  StartDate, EndDate) > 15	







