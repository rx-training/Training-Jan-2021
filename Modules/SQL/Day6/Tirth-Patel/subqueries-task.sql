use [view-database]

SELECT * FROM Employees 

 --Write a query to find the names (first_name, last_name) and salaries of 
 --the employees who have higher salary than the employee whose last_name='Bull'.
SELECT FirstName + SPACE(1) +LastName AS 'NAME'
FROM Employees WHERE Salary > (SELECT SALARY FROM Employees WHERE LastName = 'Bull')

--Find the names (first_name, last_name) of all employees who works in the IT department.

SELECT FirstName + SPACE(1) + LastName AS 'Name'
FROM Employees WHERE departmentID IN
(SELECT DepartmentID FROM Departments WHERE DepartmentName = 'IT')


 --Find the names (first_name, last_name) of
 --the employees who have a manager who works for a department based in United States.

 SELECT FirstName + SPACE(1) + LastName AS 'Name'
 FROM Employees WHERE ManagerID IN(SELECT ManagerID FROM Departments WHERE LocationID
 IN(SELECT LocationID FROM Locations WHERE CountryID =
	(SELECT CountryID FROM Countries WHERE CountryName LIKE
	'United States of America')))

 --Find the names (first_name, last_name) of the employees who are managers. 

 SELECT FirstName + SPACE(1) + LastName AS 'Name'
 FROM Employees WHERE ManagerID IN (SELECT ManagerID FROM Departments  )

 --Find the names (first_name, last_name), salary of the employees
 --whose salary is greater than the average salary. 

  SELECT FirstName + SPACE(1) + LastName AS 'Name',
		Salary
  FROM Employees WHERE Salary> (SELECT AVG(Salary)FROM Employees )

  --Find the names (first_name, last_name), 
  --salary of the employees whose salary is equal to the minimum salary for their job grade.
    SELECT FirstName + SPACE(1) + LastName AS 'Name',
		Salary
  FROM Employees WHERE Salary IN (SELECT MIN(salary) FROM Employees GROUP BY JobId)


  --Find the names (first_name, last_name), salary of the employees who earn more than
  --the average salary and who works in any of the IT departments. 
  SELECT FirstName + SPACE(1) + LastName AS 'Name',
		Salary
  FROM Employees WHERE Salary>  (SELECT AVG(Salary) FROM Employees WHERE EmployeeID IN
  (SELECT EmployeeID FROM Departments WHERE DepartmentName = 'IT'))

  --8. Find the names (first_name, last_name), salary of 
  --the employees who earn more than Mr. Bell. 
    SELECT FirstName + SPACE(1) + LastName AS 'Name',
		Salary
  FROM Employees WHERE Salary> (SELECT SALARY FROM Employees WHERE LastName LIKE 'Bell' )



 --9.   -Find the names (first_name, last_name), salary of the employees 
  --who earn the same salary as the minimum salary for all departments. 
     SELECT FirstName + SPACE(1) + LastName AS 'Name',
		Salary
  FROM Employees WHERE Salary > (SELECT MIN(salary) FROM Employees ) ORDER BY Salary

  --10. Find the names (first_name, last_name), 
  --salary of the employees whose salary greater than average salary of all department. 
   SELECT FirstName + SPACE(1) + LastName AS 'Name',
		Salary
  FROM Employees WHERE Salary > (SELECT AVG(salary) FROM Employees ) ORDER BY Salary

  --11. Write a query to find the names (first_name, last_name) and s
  --alary of the employees who earn a salary that is higher than the 
  --salary of all the Shipping Clerk (JOB_ID = 'SH_CLERK').
  --Sort the results on salary from the lowest to highest. 
   SELECT FirstName + SPACE(1) + LastName AS 'Name',
Salary
   FROM Employees WHERE 
		Salary >((SELECT MAX(Salary) FROM Employees
							GROUP BY JobId
							HAVING  JobId LIKE 'SH_CLERK' ) )
		ORDER BY Salary
 --Write a query to find the names (first_name, last_name) of the employees who are 
 --not supervisors

 SELECT FirstName + SPACE(1) + LastName AS 'Name' FROM Employees
 WHERE JobId NOT IN (SELECT JobId FROM Employees WHERE JobId like 'supervisors' OR
														JobId like '%SV%')

--13. Write a query to display the employee ID, first name, last names, and department names
--of all employees. 
SELECT FirstName ,
		LastName ,
		dp.DepartmentName
		 
FROM Employees e JOIN (SELECT DepartmentName,DepartmentID FROM Departments) AS dp
ON e.DepartmentID = dp.DepartmentID


 --14. Write a query to display the employee ID, first name, last names, 
 --salary of all employees whose salary is above average for their departments. 

 SELECT EmployeeID ,
		FirstName,
		LastName
 FROM Employees  A WHERE Salary > 
		(SELECT AVG(salary) FROM Employees WHERE DepartmentID = A.DepartmentID)

--15. Write a query to fetch even numbered records from employees table. 

SELECT * FROM Employees WHERE EmployeeID % 2 !=0

--16. Write a query to find the 5th maximum salary in the employees table
SELECT SALARY FROM EMPLOYEES ORDER BY Salary desc

SELECT SALARY FROM 
(SELECT *,DENSE_RANK() OVER (ORDER BY SALARY DESC)  AS rank FROM EMPLOYEES) r WHERE r.rank=5

--17.Write a query to find the 4th minimum salary in the employees table

SELECT SALARY FROM 
(SELECT *,DENSE_RANK() OVER (ORDER BY SALARY )  AS rank FROM EMPLOYEES) r WHERE r.rank=4

--18. Write a query to select last 10 records from a table.
SELECT TOP(10) * FROM Employees ORDER BY EmployeeID DESC 

--19.Write a query to list department number, name for all the departments in 
--which there are no employees in the department. 

SELECT * FROM Employees WHERE  DepartmentID NOT IN 
(SELECT DepartmentID FROM Departments)

 --20.Write a query to get 3 maximum salaries

 --SELECT DISTINCT  TOP(3) SALARY  FROM Employees ORDER BY Salary DESC 

 SELECT DISTINCT SALARY FROM Employees e WHERE 3> = 
 (SELECT COUNT(DISTINCT Salary) FROM Employees e2 WHERE e2.Salary >= e.Salary) 
 ORDER BY e.Salary DESC

 --21. Write a query to get 3 minimum salaries. 

  SELECT DISTINCT SALARY FROM Employees e WHERE 3> = 
 (SELECT COUNT(DISTINCT Salary) FROM Employees e2 WHERE e2.Salary <= e.Salary) 
 ORDER BY e.Salary  DESC
  
  --22.Write a query to get nth max salaries of employees


   SELECT DISTINCT SALARY FROM Employees e WHERE 3= --3 replaced by nth term
 (SELECT COUNT(DISTINCT Salary) FROM Employees e2 WHERE e2.Salary >= e.Salary) 
 ORDER BY e.Salary DESC


