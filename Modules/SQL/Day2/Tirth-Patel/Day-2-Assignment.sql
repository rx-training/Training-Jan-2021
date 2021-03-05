USE TestData
ALTER TABLE Employees DROP CONSTRAINT ukemail
--Write a SQL statement to change the Email column of Employees table with ‘not available’ for all employees.
UPDATE Employees SET Email='not availible'


--Write a SQL statement to change the Email and CommissionPct column of employees table with ‘not available’ and 0.10 for all employees.
UPDATE Employees SET Email='Not availible' ,CommissionPct ='0.10';

--Write a SQL statement to change the Email and CommissionPct column of employees 
--table with ‘not available’ and 0.10 for those employees whose DepartmentID is 110.
SELECT *
FROM Employees
UPDATE Employees SET Email='not availile', CommissionPct = '0.10'
				WHERE DepartmentID=110



--Write a SQL statement to change the Email column of employees table with ‘not available’
--for those employees whose DepartmentID is 80 and gets a commission is less than 20%
UPDATE Employees SET Email='not availile'
				WHERE DepartmentID=80




--Write a SQL statement to change salary of employee to 8000 whose ID is 105,
--if the existing salary is less than 5000

UPDATE Employees SET Salary=8000 
		WHERE EmployeeId=105 AND Salary < 5000


--Write a SQL statement to change job ID of employee which ID is 118, to SH_CLERK if the employee belongs to department, 
--which ID is 30 and the existing job ID does not start with SH.

UPDATE Employees SET JobId= 'SH_CLERK'
		WHERE EmployeeId=118 AND DepartmentID = 30 AND JobId NOT LIKE 'SH%'

--Write a SQL statement to increase the salary of employees under the department 40,
--90 and 110 according to the company rules that, salary will be increased by 25% for 
--the department 40, 15% for department 90 and 10%for the department 110 and the rest 
--of the departments will remain same.
UPDATE Employees 
SET Salary =
	 (CASE
	 WHEN (DepartmentId = 40) THEN  (.25 * Salary)+ Salary
	 WHEN (DepartmentId = 90) THEN  (.15 * Salary)+ Salary
	 WHEN (DepartmentId = 110) THEN (.10 * Salary)+ Salary
	 ELSE (Salary)
	 END)
			
--SELECT QUERIES

--Get all employee details from the Employee table
	SELECT Salary
	FROM Employees

--Get FirstName, LastName from Employees table
	SELECT FirstName,
			LastName
	FROM Employees

--Get FirstName from Employees table using alias name “Employee Name
	SELECT FirstName AS 'Employee Name'
		FROM Employees

--Get employee details from Employees table whose Employee Name is “Steven”
	SELECT *

	FROM Employees 
	WHERE FirstName = 'Steven'

--Get employee details from Employees table whose Employee Name are “Neena” and “Lex”
SELECT *
FROM Employees 
	WHERE FirstName in ('Neena','Lex')

--Get employee details from Employees table whose Employee name are not “Neena” and “Neena”
	SELECT *
FROM Employees 
	WHERE FirstName NOT in ('Neena','Lex')

--Get employee details from Employees table whose Salary between 5000 and 8000
SELECT *
	FROM Employees
	WHERE Salary BETWEEN 5000 AND 8000

--Write a query to get the names (FirstName, LastName), Salary, 
--PF of all the Employees (PF is calculated as 12% of salary).

SELECT FirstName + LastName AS 'name',
		(Salary*0.12 +Salary) AS 'after Pf Salary'
FROM Employees

--Get employee details from Employees table whose FirstName starts with ‘N’

SELECT *
FROM Employees
WHERE FirstName like 'N%'

--Write a query to get unique department ID from Employees table

SELECT  DISTINCT DepartmentID 
FROM Employees 

--Write a query to get
--all employee details from the employee table order by FirstName, descending
	SELECT *
	FROM Employees
	ORDER BY  FirstName DESC

	--Write a query to get
	--the EmployeeID, names (FirstName, LastName), salary in ascending order of salary.
SELECT EmployeeId,
			FirstName + LastName AS 'names',
			Salary
	FROM Employees
	ORDER BY  Salary 

	--Select TOP 2 salary from employee table
	SELECT TOP 2 [Salary] 
	From Employees
