

----Write a query to find the names (first_name, last_name) and salaries of the employees who have higher salary----
----than the employee whose last_name='Bull'. ----

SELECT FirstName,LastName,Salary FROM Employees WHERE Salary > (
	SELECT Salary FROM Employees WHERE LastName='Bull');




----Find the names (first_name, last_name) of all employees who works in the IT department.----

SELECT FirstName,LastName FROM Employees WHERE DepartmentID IN (
	SELECT DepartmentID FROM Departments WHERE DepartmentName='IT');




----Find the names (first_name, last_name) of the employees who have a manager who works for a department based in United States. ----

SELECT FirstName,LastName FROM Employees WHERE ManagerID IN(
	SELECT ManagerID FROM Departments WHERE LocationID IN(
		SELECT LocationID FROM Locations WHERE CountryID='US'));




----Find the names (first_name, last_name) of the employees who are managers.----

SELECT FirstName,LastName FROM Employees WHERE EmployeeID IN (
	Select ManagerID FROM Employees);




----Find the names (first_name, last_name), salary of the employees whose salary is greater than the average salary.----

SELECT FirstName,LastName FROM Employees WHERE Salary > (
	SELECT AVG(Salary) FROM Employees);




----Find the names (first_name, last_name), salary of the employees whose salary is equal to the minimum salary for their job grade.----

SELECT FirstName,LastName,Salary FROM Employees e WHERE Salary = (
	SELECT MIN(Salary) FROM Employees WHERE DepartmentID=e.DepartmentID);




----Find the names (first_name, last_name), salary of the employees who earn more than the average salary and who works in any----
----of the IT departments.----

SELECT FirstName,LastName,Salary FROM Employees WHERE Salary > (
	SELECT AVG(Salary) FROM Employees) AND DepartmentID IN (
	SELECT DepartmentID FROM Departments WHERE DepartmentName='IT');




----Find the names (first_name, last_name), salary of the employees who earn more than Mr. Bell.----

SELECT FirstName,LastName,Salary FROM Employees WHERE Salary > (
	SELECT Salary FROM Employees WHERE LastName='Bull');




----Find the names (first_name, last_name), salary of the employees who earn the same salary as the minimum salary for all departments.----

SELECT FirstName,LastName,Salary FROM Employees  WHERE Salary IN (
	SELECT MIN(Salary) FROM Employees GROUP BY DepartmentID);




----Find the names (first_name, last_name), salary of the employees whose salary greater than average salary of all department.----

SELECT FirstName,LastName,Salary FROM Employees WHERE Salary > (
	SELECT AVG(Salary) FROM Employees);




----Write a query to find the names (first_name, last_name) and salary of the employees who earn a salary that is higher----
----than the salary of all the Shipping Clerk (JOB_ID = 'SH_CLERK'). Sort the results on salary from the lowest to highest.----

SELECT FirstName,LastName,Salary FROM Employees WHERE Salary>(
	SELECT MAX(Salary) FROM Employees WHERE JobId='SH_CLERK') ORDER BY Salary ASC;




----Write a query to find the names (first_name, last_name) of the employees who are not supervisors.----

SELECT FirstName,LastName FROM Employees WHERE EmployeeID NOT IN (
	SELECT ManagerID FROM Employees);




----Write a query to display the employee ID, first name, last names, and department names of all employees.----

SELECT e.EmployeeID,e.FirstName,e.LastName,tbl.DepartmentName FROM (SELECT DepartmentID,DepartmentName FROM Departments) AS tbl JOIN Employees e
ON e.DepartmentID=tbl.DepartmentID;




----Write a query to display the employee ID, first name, last names, salary of all employees whose salary is above average for their departments.----

SELECT EmployeeID, FirstName 
FROM Employees AS e
WHERE Salary > 
(SELECT AVG(Salary) FROM Employees WHERE DepartmentID = e.DepartmentID);




----Write a query to fetch even numbered records from employees table.----

SELECT * FROM Employees WHERE EmployeeID%2=0;




----Write a query to find the 5th maximum salary in the employees table.----

SELECT DISTINCT Salary FROM (SELECT Salary,DENSE_RANK() OVER (ORDER BY Salary DESC) AS dRank FROM Employees) AS tbl WHERE dRank=5;




----Write a query to find the 4th minimum salary in the employees table.----

SELECT DISTINCT Salary FROM (SELECT Salary,DENSE_RANK() OVER (ORDER BY Salary ASC) AS dRank FROM Employees) AS tbl WHERE dRank=4;




----Write a query to select last 10 records from a table.----

SELECT EmployeeID,FirstName,LastName,Email,PhoneNumber,HireDate,JobId,Salary,CommissionPct,ManagerID,DepartmentID FROM (
	SELECT *,ROW_NUMBER() OVER (ORDER BY EmployeeID DESC) AS dRow FROM Employees) AS tbl WHERE dROW BETWEEN 1 AND 10;




----Write a query to list department number, name for all the departments in which there are no employees in the department.----

SELECT DepartmentID,DepartmentName FROM Departments WHERE DepartmentID NOT IN (
	SELECT DepartmentID FROM Employees);




----Write a query to get 3 maximum salaries.----

SELECT DISTINCT Salary FROM (SELECT Salary,DENSE_RANK() OVER (ORDER BY Salary DESC) AS dRank FROM Employees) AS tbl WHERE dRank BETWEEN 1 AND 3;




----Write a query to get 3 minimum salaries.----

SELECT DISTINCT Salary FROM (SELECT Salary,DENSE_RANK() OVER (ORDER BY Salary ASC) AS dRank FROM Employees) AS tbl WHERE dRank BETWEEN 1 AND 3;




----Write a query to get nth max salaries of employees.----

SELECT Salary FROM (SELECT Salary,DENSE_RANK() OVER (ORDER BY Salary DESC) AS dRank FROM Employees) AS tbl WHERE dRank=3;