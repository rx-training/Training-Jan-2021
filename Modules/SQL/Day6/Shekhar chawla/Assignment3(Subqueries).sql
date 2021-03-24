--Sub-queries  Task

--1. Write a query to find the names (first_name, last_name) and salaries of the employees who have higher salary than the employee whose last_name='Bull'. 
SELECT FirstName , LastName , Salary FROM Employees WHERE Salary > (SELECT Salary FROM Employees WHERE LastName='Bull' ) ;



--2. Find the names (first_name, last_name) of all employees who works in the IT department. 
SELECT FirstName , LastName , JobId FROM Employees WHERE JobId LIKE '%IT%' ;



--3. Find the names (first_name, last_name) of the employees who have a manager who works for a department based in United States. 
--Hint : Write single-row and multiple-row subqueries
SELECT	Employees.FirstName , Employees.LastName , Locations.CountryID
FROM	Employees , Locations 
WHERE	Employees.LocationID = Locations.LocationID AND 
		Locations.CountryID LIKE '%US%' ;



--4. Find the names (first_name, last_name) of the employees who are managers. 
SELECT FirstName , LastName FROM Employees WHERE EmployeeID IN ( SELECT ManagerID FROM Employees ) ;



--5. Find the names (first_name, last_name), salary of the employees whose salary is greater than the average salary. 
SELECT * FROM Employees e , 
(SELECT DepartmentID , AVG(Salary) avg_sal FROM Employees GROUP BY DepartmentID) e1
WHERE e.DepartmentID = e1.DepartmentID AND e.Salary > e1.avg_sal ;



--6. Find the names (first_name, last_name), salary of the employees whose salary is equal to the minimum salary for their job grade. 
SELECT * FROM Employees e , 
( SELECT DepartmentID , MIN(Salary) min_sal FROM Employees GROUP BY DepartmentID ) e1
WHERE e.DepartmentID = e1.DepartmentID AND e.Salary = e1.min_sal ;



--7. Find the names (first_name, last_name), salary of the employees who earn more than the average salary and who works in any of the IT departments. 
SELECT * FROM Employees e , 
(SELECT JobId, DepartmentID , AVG(Salary) avg_sal FROM Employees GROUP BY DepartmentID, JobId ) e1 
WHERE e.DepartmentID = e1.DepartmentID AND e.Salary > e1.avg_sal AND e.JobId Like '%IT%' ;



--8. Find the names (first_name, last_name), salary of the employees who earn more than Mr. Bell. 
SELECT FirstName , LastName , Salary FROM Employees WHERE Salary > ( SELECT Salary FROM Employees WHERE LastName = 'Bell' ) ;



--9. Find the names (first_name, last_name), salary of the employees who earn the same salary as the minimum salary for all departments. 
SELECT * FROM Employees e , 
(SELECT DepartmentID , MIN(Salary) min_sal FROM Employees GROUP BY DepartmentID ) e1 
WHERE e.DepartmentID = e1.DepartmentID AND e.Salary = e1.min_sal ;



--10. Find the names (first_name, last_name), salary of the employees whose salary greater than average salary of all department. 
SELECT * from Employees e , 
(SELECT AVG(Salary) avg_sal FROM Employees GROUP BY Salary) e1
WHERE e.Salary > e1.avg_sal ;



--11. Write a query to find the names (first_name, last_name) and salary of the employees who earn a salary that is higher than the salary of all the Shipping Clerk (JOB_ID = 'SH_CLERK'). Sort the results on salary from the lowest to highest. 
SELECT FirstName , LastName , Salary FROM Employees WHERE Salary > (SELECT MAX(Salary) FROM Employees WHERE JobID LIKE 'SH_CLERK' ) ORDER BY Salary DESC ;



--12. Write a query to find the names (first_name, last_name) of the employees who are not supervisors. 
SELECT FirstName , LastName FROM Employees WHERE EmployeeID NOT IN ( SELECT ManagerID FROM Employees ) ;



--13. Write a query to display the employee ID, first name, last names, and department names of all employees. 
SELECT EmployeeID , FirstName , LastName, DepartmentID FROM Employees ;



--14. Write a query to display the employee ID, first name, last names, salary of all employees whose salary is above average for their departments. 
SELECT EmployeeID , FirstName , LastName , Salary FROM Employees e , 
(SELECT DepartmentID , AVG(Salary) avg_sal FROM Employees GROUP BY DepartmentID) e1
WHERE e.DepartmentID = e1.DepartmentID AND e.Salary > e1.avg_sal ;



--15. Write a query to fetch even numbered records from employees table. 
SELECT * FROM Employees WHERE EmployeeID % 2 = 0 ;



--16. Write a query to find the 5th maximum salary in the employees table. 
SELECT MIN(Salary) FROM Employees WHERE Salary IN (SELECT TOP 5 Salary FROM Employees)  ;



--17. Write a query to find the 4th minimum salary in the employees table. 
SELECT MAX(Salary) FROM Employees WHERE Salary IN (SELECT TOP 4 Salary FROM Employees ORDER BY Salary ASC ) ;



--18. Write a query to select last 10 records from a table. 
SELECT TOP 10 * FROM Employees ORDER BY EmployeeID DESC ;



--19. Write a query to list department number, name for all the departments in which there are no employees in the department. 
SELECT * FROM Employees WHERE DepartmentID NOT IN ( SELECT DepartmentID FROM Departments ) ;



--20. Write a query to get 3 maximum salaries. 
SELECT TOP 3 Salary FROM Employees ORDER BY Salary DESC ;



--21. Write a query to get 3 minimum salaries. 
SELECT TOP 3 Salary FROM Employees ORDER BY Salary ASC ;



--22. Write a query to get nth max salaries of employees. 
--Getting 10th Max Salary 
SELECT MIN(Salary) FROM Employees WHERE Salary IN ( SELECT TOP 10 Salary FROM Employees ORDER BY Salary DESC ) ;


