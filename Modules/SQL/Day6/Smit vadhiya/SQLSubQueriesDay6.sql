
/*1. Write a query to find the names (first_name, last_name) and salaries of the employees 
who have higher salary than the employee whose last_name='Bull'. */
USE day6

select FirstName + LastName 'Name' FROM Employees WHERE Salary > (SELECT Salary from Employees WHere LastName = 'Bull') 

/*2. Find the names (first_name, last_name) of all employees who works in the IT department. */

SELECT FirstName + LastName 'Name' FROM Employees
WHERE DepartmentID = (SELECT DepartmentID FROM Departments WHERE DepartmentName = 'it')

/*3. Find the names (first_name, last_name) of the employees who have a manager who works 
for a department based in United States.Hint : Write single-row and multiple-row subqueries */

SELECT FirstName + LastName 'Name' FROM Employees 
WHERE ManagerID IN (SELECT ManagerID FROM Departments
WHERE LocationID IN (SELECT LocationID FROM Locations WHERE CountryID = 'us'))

/*4. Find the names (first_name, last_name) of the employees who are managers. */

SELECT FirstName + LastName 'Name' FROM Employees 
WHERE EmployeeID IN (SELECT ManagerID FROM Departments)

/*5. Find the names (first_name, last_name), salary of the employees whose salary
is greater than the average salary. */

SELECT FirstName + LastName 'Name' FROM Employees
WHERE Salary > (SELECT AVG(Salary) FROM Employees)

/*6. Find the names (first_name, last_name), salary of the employees whose salary is equal
to the minimum salary for their job grade. */

SELECT FirstName + LastName 'Name' FROM Employees
WHERE Salary = (SELECT MIN(Salary) FROM Employees)

/*7. Find the names (first_name, last_name), salary of the employees who earn more than the
average salary and who works in any of the IT departments. */
select * from depart
SELECT FirstName + LastName 'Name' FROM Employees 
WHERE Salary > (SELECT AVG(Salary) FROM Employees) AND
DepartmentID IN  (SELECT DepartmentID FROM Departments WHERE DepartmentName LIKE '%it%')

/*8. Find the names (first_name, last_name), salary of the employees who earn more than Mr. Bell. */

select FirstName + LastName 'Name' FROM Employees 
WHERE Salary > (SELECT Salary from Employees WHere FirstName + LastName LIKE '%Bell%') 


select FirstName + LastName 'Name' FROM Employees 
WHERE Salary > (SELECT Salary from Employees WHere LastName = 'Bell') 


/*9. Find the names (first_name, last_name), salary of the employees who earn the same salary as 
the minimum salary for all departments. */

--FINDING MINIMUM SALARY IN EVERY DEPARTMENT
SELECT FirstName + LastName 'Name', Salary FROM 
(SELECT *, DENSE_RANK() OVER (PARTITION BY DepartmentID ORDER BY Salary) AS 'rank' FROM Employees ) AS t WHERE rank = 1

/*10. Find the names (first_name, last_name), salary of the employees
whose salary greater than average salary of all department. */

SELECT FirstName + LastName 'Name', Salary FROM Employees
WHERE Salary >  (SELECT AVG(Salary) as 'avg' FROM Employees) 

/*11. Write a query to find the names (first_name, last_name) and salary
of the employees who earn a salary that is higher than the salary of all
the Shipping Clerk (JOB_ID = 'SH_CLERK'). Sort the results on salary from the lowest to highest. */

SELECT FirstName + LastName 'Name', Salary FROM Employees
WHERE Salary > (SELECT MAX(Salary) FROM Employees where JobId= 'SH_CLERK' GROUP BY JobId ) ORDER BY Salary

/*12. Write a query to find the names (first_name, last_name) of the employees who are not supervisors. */

---------supervisor is not defind anywhere

/*13. Write a query to display the employee ID, first name, last names, 
and department names of all employees. */

SELECT EmployeeID, FirstName, LastName, d.DepartmentName FROM
Employees e left JOIN Departments D ON e.DepartmentID = d.DepartmentID

SELECT e.*,d.DepartmentName FROM Employees e,Departments d where e.DepartmentID=d.DepartmentID

/*14. Write a query to display the employee ID, first name, last names,
salary of all employees whose salary is above average for their departments. */


SELECT e.EmployeeID,e.FirstName,e.LastName,e.Salary 
	FROM 
	(
		SELECT DepartmentID, AVG(SALARY) 'avg' 
		FROM Employees 
		GROUP BY DepartmentID
	) AS tbl1 JOIN Employees e 
	ON tbl1.DepartmentID = e.DepartmentID 
	WHERE Salary>avg

/*15. Write a query to fetch even numbered records from employees table. */

SELECT e.* FROM 
 (SELECT EmployeeID,ROW_NUMBER() OVER ( ORDER BY EmployeeID) 'rank' FROM Employees) AS TBL
 JOIN Employees e ON TBL.EmployeeID = e.EmployeeID 
 WHERE TBL.rank % 2 = 0


/*16. Write a query to find the 5th maximum salary in the employees table. */

SELECT Salary FROM 
 (SELECT Salary,DENSE_RANK() OVER ( ORDER BY Salary DESC) 'rank' FROM Employees GROUP BY Salary) AS tbl
 WHERE rank = 5

/*17. Write a query to find the 4th minimum salary in the employees table. */

SELECT Salary FROM 
 (SELECT Salary,DENSE_RANK() OVER ( ORDER BY Salary) 'rank' FROM Employees GROUP BY Salary) AS tbl
 WHERE rank = 4

/*18. Write a query to select last 10 records from a table. */

SELECT TOP(10)* FROM Employees ORDER BY EmployeeID DESC 

/*19. Write a query to list department number, name for all the
departments in which there are no employees in the department. */

SELECT DepartmentID, DepartmentName FROM Departments WHERE DepartmentID NOT IN(SELECT DepartmentID FROM Employees)

/*20. Write a query to get 3 maximum salaries. */


SELECT Salary FROM 
 (SELECT Salary,DENSE_RANK() OVER ( ORDER BY Salary DESC) 'rank' FROM Employees GROUP BY Salary) AS tbl
 WHERE rank <= 3

/*21. Write a query to get 3 minimum salaries. */


SELECT Salary FROM 
 (SELECT Salary,DENSE_RANK() OVER ( ORDER BY Salary ) 'rank' FROM Employees GROUP BY Salary) AS tbl
 WHERE rank <= 3

/*22. Write a query to get nth max salaries of employees. */

SELECT Salary FROM 
 (SELECT Salary,DENSE_RANK() OVER ( ORDER BY Salary DESC) 'rank' FROM Employees GROUP BY Salary) AS tbl
 WHERE rank = n