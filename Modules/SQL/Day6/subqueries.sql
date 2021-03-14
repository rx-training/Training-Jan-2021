USE Day6db;

/* 1. Write a query to find the names (first_name, last_name) and salaries of the employees who have higher salary than the employee whose last_name='Bull'.  */
SELECT FirstName, LastName, Salary FROM Employees WHERE Salary > (SELECT Salary FROM Employees WHERE LastName = 'Bull');

/* 2. Find the names (first_name, last_name) of all employees who works in the IT department.  */
SELECT FirstName, LastName FROM Employees E JOIN Departments D ON E.DepartmentID = D.DepartmentID WHERE DepartmentName = 'IT';

/* 3. Find the names (first_name, last_name) of the employees who have a manager who works for a department based in United States. 
Hint : Write single-row and multiple-row subqueries  */
SELECT FirstName, LastName FROM Employees WHERE ManagerID IN (SELECT EmployeeID FROM Employees WHERE DepartmentID IN (SELECT DepartmentID FROM Departments WHERE LocationID IN (SELECT LocationID FROM Locations WHERE CountryID = 'US')))

/* 4. Find the names (first_name, last_name) of the employees who are managers.    */
SELECT FirstName, LastName FROM Employees WHERE EmployeeID IN (SELECT ManagerID FROM Employees);

/* 5. Find the names (first_name, last_name), salary of the employees whose salary is greater than the average salary.  */
SELECT FirstName, LastName, Salary FROM Employees WHERE Salary > (SELECT AVG(Salary) FROM Employees);

/* 6. Find the names (first_name, last_name), salary of the employees whose salary is equal to the minimum salary for their job grade.  */
SELECT FirstName, LastName, Salary FROM Employees WHERE Salary = (SELECT MIN(Salary) FROM Employees);

/* 7. Find the names (first_name, last_name), salary of the employees who earn more than the average salary and who works in any of the IT departments.  */
SELECT FirstName, LastName, Salary FROM Employees WHERE DepartmentID IN (SELECT DepartmentID FROM Departments WHERE DepartmentName LIKE 'IT%') AND Salary > (SELECT AVG(Salary) FROM Employees);

/* 8. Find the names (first_name, last_name), salary of the employees who earn more than Mr. Bell.  */
SELECT FirstName, LastName, Salary FROM Employees WHERE Salary > (SELECT Salary FROM Employees WHERE LastName = 'Bell');

/* 9. Find the names (first_name, last_name), salary of the employees who earn the same salary as the minimum salary for all departments.  */
SELECT FirstName, LastName, Salary FROM Employees WHERE Salary = (SELECT MIN(Salary) FROM Employees);

/* 10. Find the names (first_name, last_name), salary of the employees whose salary greater than average salary of all department.  */
SELECT FirstName, LastName, Salary FROM Employees WHERE Salary > (SELECT AVG(Salary) FROM Employees);

/* 11. Write a query to find the names (first_name, last_name) and salary of the employees who earn a salary that is higher than the salary of all the Shipping Clerk (JOB_ID = 'SH_CLERK'). Sort the results on salary from the lowest to highest.  */
SELECT FirstName, LastName, Salary FROM Employees WHERE Salary > ALL (SELECT Salary FROM Employees WHERE JobId = 'SH_CLERK') ORDER BY Salary;

/* 12. Write a query to find the names (first_name, last_name) of the employees who are not supervisors.  */
SELECT B.FirstName, B.LastName FROM Employees B WHERE NOT EXISTS (SELECT 'X' FROM Employees A WHERE A.ManagerID = B.EmployeeID);

/* 13. Write a query to display the employee ID, first name, last names, and department names of all employees.  */
SELECT EmployeeID, FirstName, LastName, (SELECT DepartmentName FROM Departments D WHERE D.DepartmentID = E.DepartmentID) AS "Department Name" FROM Employees E ;

/* 14. Write a query to display the employee ID, first name, last names, salary of all employees whose salary is above average for their departments.  */
SELECT EmployeeID, FirstName, LastName, Salary FROM Employees E WHERE Salary > (SELECT AVG(Salary) FROM Employees WHERE DepartmentID = E.DepartmentID);

/* 15. Write a query to fetch even numbered records from employees table.  */
SELECT * FROM Employees WHERE (EmployeeID%2) = 1;

/* 16. Write a query to find the 5th maximum salary in the employees table.  */
SELECT * FROM (SELECT FirstName, LastName, Salary, DENSE_RANK() OVER(ORDER BY Salary DESC) AS 'Rank Of Salary' FROM Employees) AS table1 WHERE [Rank Of Salary] = 5;

/* 17. Write a query to find the 4th minimum salary in the employees table.  */
SELECT * FROM (SELECT FirstName, LastName, Salary, DENSE_RANK() OVER(ORDER BY Salary) AS 'Rank Of Salary' FROM Employees) AS table1 WHERE [Rank Of Salary] = 4;

/* 18. Write a query to select last 10 records from a table.  */
SELECT TOP 10 * FROM Employees ORDER BY EmployeeID DESC;

/* 19. Write a query to list department number, name for all the departments in which there are no employees in the department.  */
SELECT DepartmentID, DepartmentName  FROM Departments WHERE DepartmentID NOT IN (SELECT DepartmentID FROM Employees);

/* 20. Write a query to get 3 maximum salaries.  */
SELECT DISTINCT Salary FROM Employees A WHERE 3 >= (SELECT COUNT(DISTINCT Salary) FROM Employees B WHERE B.Salary >= A.Salary) ORDER BY A.Salary DESC;

/* 21. Write a query to get 3 minimum salaries.  */
SELECT DISTINCT Salary FROM Employees A WHERE 3 >= (SELECT COUNT(DISTINCT Salary) FROM Employees B WHERE B.Salary <= A.Salary) ORDER BY A.Salary DESC;

/* 22. Write a query to get nth max salaries of employees. */
SELECT * FROM Employees E WHERE (1) = (SELECT COUNT(DISTINCT(EM.Salary)) FROM Employees EM WHERE EM.Salary > E.Salary);

