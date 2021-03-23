USE Day6;

/* 1. Write a query to find the names (first_name, last_name) and salaries of the employees 
who have higher salary than the employee whose last_name='Bull'. */
SELECT CONCAT(FirstName, ' ', LastName) AS 'FullName', Salary
FROM Employees 
WHERE Salary > (SELECT Salary 
				FROM Employees 
				WHERE LastName = 'Bull');


/* 2. Find the names (first_name, last_name) of all employees who works in the IT department.*/
SELECT CONCAT(FirstName, ' ', LastName) AS 'FullName'
FROM Employees 
WHERE DepartmentID = (SELECT DepartmentID 
						FROM Departments 
						WHERE DepartmentName = 'IT');


/* 3. Find the names (first_name, last_name) of the employees who have a manager who works for a department based in United States.*/
SELECT CONCAT(FirstName, ' ', LastName) AS 'FullName'
FROM Employees 
WHERE ManagerID IN (SELECT ManagerID 
					FROM Departments 
					WHERE LocationID IN ( SELECT LocationID
											FROM Locations 
											WHERE CountryID IN (SELECT CountryID
																FROM Countries
																WHERE CountryName = 'United States')));


/* 4. Find the names (first_name, last_name) of the employees who are managers. */
SELECT CONCAT(FirstName, ' ', LastName) AS 'FullName'
FROM Employees 
WHERE EmployeeID IN ( SELECT DISTINCT ManagerID 
						FROM Departments 
						GROUP BY ManagerID);


/* 5. Find the names (first_name, last_name), salary of the employees whose salary is greater than the average salary. */
SELECT CONCAT(FirstName, ' ', LastName) AS 'FullName', Salary
FROM Employees 
WHERE Salary > (SELECT AVG(Salary) FROM Employees);


/* 6. Find the names (first_name, last_name), salary of the employees whose salary is equal to the minimum salary for their job grade.*/
SELECT CONCAT(FirstName, ' ', LastName) AS 'FullName', Salary
FROM Employees e1
WHERE Salary = (SELECT MIN(Salary) 
				FROM Employees e2 
				WHERE e2.JobId = e1.JobId);


/* 7. Find the names (first_name, last_name), salary of the employees who earn more than the average salary and who works 
in any of the IT departments. */
SELECT CONCAT(FirstName, ' ', LastName) AS 'FullName', Salary
FROM Employees
WHERE Salary > (SELECT AVG(Salary) FROM Employees WHERE DepartmentID IN ( SELECT DepartmentID
																			FROM Departments WHERE DepartmentName = 'IT'));


/* 8. Find the names (first_name, last_name), salary of the employees who earn more than Mr. Bell. */
SELECT CONCAT(FirstName, ' ', LastName) AS 'FullName', Salary
FROM Employees
WHERE Salary > (SELECT Salary 
				FROM Employees 
				WHERE LastName = 'Bell');


/* 9. Find the names (first_name, last_name), salary of the employees who earn the same salary as the minimum salary 
for all departments.*/
SELECT CONCAT(e.FirstName, ' ', e.LastName) AS 'FullName', e.Salary, e.DepartmentID
FROM Employees e
WHERE Salary = (SELECT tempTbl.MinDepartmentSalary 
				FROM ( SELECT MIN(Salary) AS 'MinDepartmentSalary', DepartmentID
						FROM Employees 
						GROUP BY DepartmentID) AS tempTbl
				WHERE e.DepartmentID = tempTbl.DepartmentID);


/* 10. Find the names (first_name, last_name), salary of the employees whose salary greater than average salary of all department. */
SELECT CONCAT(e.FirstName, ' ', e.LastName) AS 'FullName', e.Salary, e.DepartmentID
FROM Employees e
WHERE Salary > (SELECT tempTbl.AvgDepartmentSalary 
				FROM ( SELECT AVG(Salary) AS 'AvgDepartmentSalary', DepartmentID
						FROM Employees 
						GROUP BY DepartmentID) AS tempTbl
				WHERE e.DepartmentID = tempTbl.DepartmentID);


/* 11. Write a query to find the names (first_name, last_name) and salary of the employees who earn a salary that is higher than 
the salary of all the Shipping Clerk (JOB_ID = 'SH_CLERK'). Sort the results on salary from the lowest to highest. */
SELECT CONCAT(e1.FirstName, ' ', e1.LastName) AS 'FullName', e1.Salary
FROM Employees e1
WHERE e1.Salary > ( SELECT MAX(e2.Salary) 
					FROM Employees e2 
					WHERE e2.JobId = 'SH_CLERK')
ORDER BY e1.Salary; 


/* 12. Write a query to find the names (first_name, last_name) of the employees who are not supervisors. */
SELECT CONCAT(e1.FirstName, ' ', e1.LastName) AS 'FullName', e1.Salary
FROM Employees e1
WHERE EmployeeID NOT IN ( SELECT e2.EmployeeID 
							FROM Employees e2 
							WHERE e2.ManagerID = 0);


/* 13. Write a query to display the employee ID, first name, last names, and department names of all employees. */
SELECT CONCAT(e.FirstName, ' ', e.LastName) AS 'FullName'
	, ( SELECT d.DepartmentName 
		FROM Departments d 
		WHERE e.DepartmentID = d.DepartmentID) 'DepartmentName'
FROM Employees e;


/* 14. Write a query to display the employee ID, first name, last names, salary of all employees whose 
salary is above average for their departments. */
SELECT CONCAT(e1.FirstName, ' ', e1.LastName) AS 'FullName', e1.Salary, e1.DepartmentID
FROM Employees e1
WHERE Salary >= (SELECT AVG(Salary)
				FROM Employees e2 WHERE e1.DepartmentID = e2.DepartmentID GROUP BY e2.DepartmentID);


/* 15. Write a query to fetch even numbered records from employees table. */
SELECT *
FROM Employees WHERE EmployeeID % 2 = 0;


/* 16. Write a query to find the 5th maximum salary in the employees table. */
SELECT DISTINCT Salary
FROM (SELECT Salary, DENSE_RANK() OVER (ORDER BY Salary DESC) AS 'SalaryRank' FROM Employees) TempTbl
WHERE TempTbl.SalaryRank = 5;


/* 17. Write a query to find the 4th minimum salary in the employees table. */
SELECT DISTINCT Salary
FROM (SELECT Salary, DENSE_RANK() OVER (ORDER BY Salary ASC) AS 'SalaryRank' FROM Employees) TempTbl
WHERE TempTbl.SalaryRank = 4;


/* 18. Write a query to select last 10 records from a table. */
SELECT DISTINCT EmployeeID, FirstName, LastName, Email, PhoneNumber, HireDate, JobId, Salary, CommissionPct, ManagerID, DepartmentID
FROM (SELECT *, DENSE_RANK() OVER (ORDER BY EmployeeId DESC) AS 'empRank' FROM Employees) TempTbl
WHERE TempTbl.empRank < 11;


/* 19. Write a query to list department number, name for all the departments in which there are no employees in the department. */
SELECT DepartmentID, DepartmentName
FROM Departments 
WHERE DepartmentID NOT IN (SELECT DepartmentID FROM Employees GROUP BY DepartmentID);


/* 20. Write a query to get 3 maximum salaries.*/
SELECT DISTINCT Salary AS 'Max3Salaries'
FROM (SELECT Salary, DENSE_RANK() OVER (ORDER BY Salary DESC) AS 'SalaryRank' FROM Employees) TempTbl
WHERE TempTbl.SalaryRank < 4
ORDER BY Salary DESC;


/* 21. Write a query to get 3 minimum salaries. */
SELECT DISTINCT Salary AS 'MinSalaries'
FROM (SELECT Salary, DENSE_RANK() OVER (ORDER BY Salary ASC) AS 'SalaryRank' FROM Employees) TempTbl
WHERE TempTbl.SalaryRank < 4;


/* 22. Write a query to get nth max salaries of employees. */
DECLARE @n INT = 5;
SELECT DISTINCT Salary
FROM (SELECT Salary, DENSE_RANK() OVER (ORDER BY Salary DESC) AS 'SalaryRank' FROM Employees) TempTbl
WHERE TempTbl.SalaryRank = @n;