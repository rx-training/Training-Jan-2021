USE Day2DB

SELECT * FROM Employees

/*1. Write a query that displays the FirstName and the length of the FirstName for all employees whose name starts with the letters ‘A’, ‘J’ or ‘M’.
Give each column an appropriate label. Sort the results by the employees’ FirstName*/
SELECT FirstName AS 'Employee Name', LEN(FirstName) AS 'NameLength'
FROM Employees
WHERE FirstName LIKE 'A%' OR FirstName LIKE 'J%' OR FirstName LIKE 'M%'
ORDER BY FirstName

/*2. Write a query to display the FirstName and Salary for all employees. Format the salary to be 10 characters long, left-padded with the $ symbol.
Label the column SALARY.*/
SELECT FirstName, RIGHT(REPLICATE('$', 10-LEN(Salary)) + CONVERT(VARCHAR, Salary), 10) AS 'SALARY'
FROM Employees

/*3. Write a query to display the employees with their code, first name, last name and hire date who hired either on seventh day of any month or 
seventh month in any year.*/
SELECT EmployeeID, FirstName, LastName, HireDate
FROM Employees
WHERE DATEPART(DD, HireDate) = '07' OR DATEPART(MM, HireDate) ='07'

/*4. Write a query to display the length of first name for employees where last name contains character ‘c’ after 2nd position.*/
SELECT LEN(FirstName) AS 'NameLength'
FROM Employees
WHERE CHARINDEX('c', LastName)>2

/*5. Write a query to extract the last 4 character of PhoneNumber.*/
SELECT RIGHT(PhoneNumber, 4) AS 'Last4Digits'
FROM Employees

/*6. Write a query to update the portion of the PhoneNumber in the employees table, within the phone number the substring ‘124’ will be replaced by ‘999’.*/
SELECT REPLACE(PhoneNumber, '124', '999') AS 'UpdatedNumber'
FROM Employees

/*7. Write a query to calculate the age in year.*/
SELECT DATEDIFF(YY, '1999-09-26', GETDATE()) AS 'Age'

/*8. Write a query to get the distinct Mondays from HireDate in employees tables.*/
SELECT DISTINCT HireDate
FROM Employees
WHERE DATENAME(DW, HireDate) = 'Monday'

/*9. Write a query to get the FirstName and HireDate from Employees table where HireDate between ‘1987-06-01’ and ‘1987-07-30’*/
SELECT FirstName, HireDate
FROM Employees
WHERE HireDate >='1987-06-01' AND HireDate<='1987-07-30'

/*10. Write a query to display the current date in the following format.Sample output : 12:00 AM Sep 5, 2014*/
SELECT LTRIM(STUFF(RIGHT(CONVERT(VARCHAR, GETDATE(), 0), 7), 6, 0, ' ')) + ' ' + DATENAME(MM, GETDATE()) + SPACE(1) + CAST(DATEPART(DD, GETDATE()) AS VARCHAR) + ', ' + CAST(DATEPART(YY, GETDATE()) AS VARCHAR) AS 'CurrentDate&Time'

/*11. Write a query to get the FirstName, LastName who joined in the month of June.*/
SELECT FirstName, LastName
FROM Employees
WHERE DATENAME(MM, HireDate) = 'June'

/*12. Write a query to get first name, hire date and experience of the employees.*/
SELECT FirstName, HireDate, DATEDIFF(YY, HireDate, GETDATE()) AS 'Experience'
FROM Employees

/*13. Write a query to get first name of employees who joined in 1987.*/
SELECT FirstName
FROM Employees
WHERE DATENAME(YY, HireDate) = '1987'