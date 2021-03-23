USE Day2;

SELECT * FROM Employees;

/* 1. Write a query that displays the FirstName and the length of the FirstName for all employees whose name starts 
with the letters ‘A’, ‘J’ or ‘M’. Give each column an appropriate label. Sort the results by the employees’ FirstName */
SELECT FirstName, LEN(FirstName) AS 'Length' FROM Employees WHERE FirstName LIKE 'A%' OR FirstName LIKE 'J%' OR FirstName LIKE 'M%' 
		ORDER BY FirstName;


/* 2. Write a query to display the FirstName and Salary for all employees. Format the salary to be 10 characters long, 
left-padded with the $ symbol. Label the column SALARY.*/
SELECT FirstName, CONCAT('$ ', CONCAT(REPLICATE(0, 10 - LEN(Salary)), Salary)) AS 'Salary' FROM Employees;


/* 3. Write a query to display the employees with their code, first name, last name and hire date who hired either on 
seventh day of any month or seventh month in any year.*/
SELECT EmployeeID AS 'Code', FirstName, LastName, HireDate FROM Employees WHERE DATEPART(DD,HireDate) = 7 OR DATEPART(MM, HireDate) = 7;


/* 4. Write a query to display the length of first name for employees where last name contains character ‘c’ after 2nd position.*/
SELECT FirstName, LEN(FirstName) AS 'Length Of FirstName' FROM Employees WHERE CHARINDEX('c',LastName,3) > 0;


/* 5. Write a query to extract the last 4 character of PhoneNumber.*/
SELECT RIGHT(PhoneNumber, 4) AS 'Last 4 Characters of PhoneNumber' FROM Employees;


/* 6. Write a query to update the portion of the PhoneNumber in the employees table, within the phone number the substring ‘124’ 
will be replaced by ‘999’.*/
UPDATE Employees SET PhoneNumber = REPLACE(PhoneNumber, '124', '999');


/* 7. Write a query to calculate the age in year.*/
USE AdventureWorks2012;
SELECT BirthDate, DATEDIFF(YY, BirthDate, GETDATE()) AS 'Age' FROM HumanResources.Employee;
USE Day2;


/* 8. Write a query to get the distinct Mondays from HireDate in employees tables.*/
SELECT DISTINCT(HireDate) AS 'Mondays' FROM Employees WHERE DATEPART(weekday, HireDate) = 2;


/* 9. Write a query to get the FirstName and HireDate from Employees table where HireDate between ‘1987-06-01’ and ‘1987-07-30’*/
SELECT FirstName, HireDate FROM Employees WHERE HireDate >= '1987-06-01' AND HireDate <= '1987-07-30';


/* 10. Write a query to display the current date in the following format.
Sample output : 12:00 AM Sep 5, 2014 */
DECLARE @d DATETIME = GETDATE();
DECLARE @hour VARCHAR(MAX) = IIF(DATEPART(HH, @d) > 12, DATEPART(HH, @d) - 12, DATEPART(HH, @d));
DECLARE @minute VARCHAR(MAX) = DATEPART(MI, @d);

SELECT CONCAT(REPLICATE(0, 2 - LEN(@hour)) + @hour , ':', REPLICATE(0, 2 - LEN(@minute)) + @minute
	, ' ', IIF(DATEPART(HH, @d) > 12, 'PM', 'AM'), ' ', LEFT(DATENAME(MM, @d), 3), ' ', DATEPART(DD, @d), ', ', DATEPART(YY, @d));


/* 11. Write a query to get the FirstName, LastName who joined in the month of June.*/
SELECT FirstName, LastName FROM Employees WHERE DATENAME(MM, HireDate) = 'June';


/* 12. Write a query to get first name, hire date and experience of the employees.*/
SELECT FirstName, HireDate, DATEDIFF(YY, HireDate, GETDATE()) AS 'Experience' FROM Employees;


/* 13. Write a query to get first name of employees who joined in 1987.*/
SELECT FirstName FROM Employees WHERE DATEPART(YY, HireDate) = 1987;