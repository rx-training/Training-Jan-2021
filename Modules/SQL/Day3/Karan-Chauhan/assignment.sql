USE Employeesdb;


/*  Write a query that displays the FirstName and the length of the FirstName for all employees whose name starts with the letters ‘A’, ‘J’ or ‘M’. 
Give each column an appropriate label. Sort the results by the employees’ FirstName */

SELECT FirstName, LEN(FirstName) AS "Length" FROM Employees WHERE FirstName LIKE 'A%' OR FirstName LIKE 'J%' OR FirstName LIKE 'M%' ORDER BY FirstName;


/* Write a query to display the FirstName and Salary for all employees. Format the salary to be 10 characters long, left-padded with the $ symbol. 
Label the column SALARY. */

SELECT FirstName, LEFT('$'+CONVERT(varchar(10),Salary),10) AS "SALARY" FROM Employees;

/* Write a query to display the employees with their code, first name, last name and hire date who hired either on seventh day of any month 
or seventh month in any year. */
SELECT EmployeeID,FirstName,LastName,HireDate FROM Employees WHERE DATEPART(DAY,HireDate) = 7 OR DATEPART(MONTH,HireDate) = 7;

/* METHOD 2 */

SELECT EmployeeID,FirstName,LastName,HireDate FROM Employees WHERE HireDate LIKE '[0-9][0-9][0-9][0-9]-[0][7]-[0-3][0-9]' OR HireDate LIKE '[0-9][0-9][0-9][0-9]-[0-1][0-9]-[0][7]';

/* Write a query to display the length of first name for employees where last name contains character ‘c’ after 2nd position. */

SELECT LEN(FirstName) AS "Length" FROM Employees;

/* Write a query to extract the last 4 character of PhoneNumber. */

SELECT RIGHT(PhoneNumber,4) AS "PhoneNumber" FROM Employees;

/* Write a query to update the portion of the PhoneNumber in the employees table, within the phone number the substring ‘124’ will be replaced by ‘999’. */
SELECT REPLACE (PhoneNumber,'124','999') FROM Employees;
UPDATE Employees SET PhoneNumber = REPLACE(PhoneNumber,'124','999');
SELECT PhoneNumber FROM Employees;

/* Write a query to calculate the age in year. */
SELECT DATEDIFF(YEAR,'04-09-1999',GETDATE()) AS 'Age' ;

/* Write a query to get the distinct Mondays from HireDate in employees tables. */
SELECT *,DATENAME(WEEKDAY, HireDate) AS 'Distinct Mondays' FROM Employees WHERE DATENAME(WEEKDAY, HireDate)='Monday';

/* Write a query to get the FirstName and HireDate from Employees table where HireDate between ‘1987-06-01’ and ‘1987-07-30’ */
SELECT FirstName, HireDate FROM Employees WHERE HireDate >= '1987-06-01' AND HireDate <= '1987-07-30';

/* Write a query to display the current date in the following format. Sample output : 12:00 AM Sep 5, 2014 */
SELECT CAST(DATEPART(HH,GETDATE()) AS VARCHAR) +' : ' + CAST(DATEPART(MM,GETDATE()) AS VARCHAR) + ' AM '+ DATENAME(MONTH,GETDATE()) + SPACE(1) +CAST(DATEPART(DAY,GETDATE()) AS VARCHAR) + ', '+ CAST(DATEPART(YEAR,GETDATE()) AS VARCHAR);

/* Write a query to get the FirstName, LastName who joined in the month of June. */
SELECT FirstName, LastName FROM Employees WHERE DATEPART(MONTH,HireDate) = 6;

/* Write a query to get first name, hire date and experience of the employees. */
SELECT FirstName, HireDate, DATEDIFF(YEAR, HireDate, GETDATE()) AS "Experience" FROM Employees;

/* Write a query to get first name of employees who joined in 1987. */
SELECT FirstName FROM Employees WHERE DATEPART(YEAR,HireDate) = 1987;