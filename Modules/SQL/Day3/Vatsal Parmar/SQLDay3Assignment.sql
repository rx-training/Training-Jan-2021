/* Assignment Day 3 */

-- 1 - Write a query that displays the FirstName and the length of the FirstName for all employees whose name starts with the letters 'A', 'J' or 'M'. Give each column an appropriate label. Sort the results by the employees� FirstName.

SELECT * FROM Employees;
SELECT FirstName,LEN(FirstName) AS 'Lenghth' FROM Employees WHERE FirstName LIKE 'A%' OR FirstName LIKE 'J%' OR FirstName LIKE 'M%';

-- 2 - Write a query to display the FirstName and Salary for all employees. Format the salary to be 10 characters long, left-padded with the $ symbol. Label the column SALARY.

SELECT FirstName,CONCAT('$ ',LEFT(Salary,10)) AS SALARY FROM Employees;

-- 3 - Write a query to display the employees with their code, first name, last name and hire date who hired either on seventh day of any month or seventh month in any year.

SELECT EmployeeID,FirstName,LastName,HireDate FROM Employees WHERE DATEPART(mm,HireDate)= 7 OR DATEPART(dd,HireDate)=7;

-- 4 - Write a query to display the length of first name for employees where last name contains character 'c' after 2nd position.

SELECT FirstName,LastName ,LEN(FirstName) AS 'Length Of First Name' FROM Employees WhERE PATINDEX('%c%',LastName) > 2;

-- 5 - Write a query to extract the last 4 character of PhoneNumber.

SELECT RIGHT(PhoneNumber,4) AS 'Last 4 Digit Of PhoneNumber' FROM Employees;

-- 6 - Write a query to update the portion of the PhoneNumber in the employees table, within the phone number the substring '124' will be replaced by '999'.

SELECT REPLACE(PhoneNumber,'124','999') AS 'Phone Number' FROM Employees;

-- 7 - Write a query to calculate the age in year.

SELECT DATEDIFF(YEAR,'1998-5-27',GETDATE()) AS 'Age';

-- 8 - Write a query to get the distinct Mondays from HireDate in employees tables.

SELECT FirstName,HireDate,DATENAME(WEEKDAY,HireDate) FROM Employees WHERE DATENAME(WEEKDAY,HireDate) = 'Monday';

-- 9 - Write a query to get the FirstName and HireDate from Employees table where HireDate between '1987-06-01' and '1987-07-30'.

SELECT FirstName,HireDate FROM Employees WHERE HireDate >= '1987-06-01' AND HireDate <='1987-07-30';

-- 10 - Write a query to display the current date in the following format.
-- 11 - Sample output : 12:00 AM Sep 5, 2014

SELECT FORMAT(GETDATE(),'hh:mm tt MMM dd, yyyy') AS 'Date & Time';

-- 12 - Write a query to get the FirstName, LastName who joined in the month of June.

SELECT FirstName,LastName FROM Employees WHERE  DATEPART(MM,HireDate) = 6;

-- 13 - Write a query to get first name, hire date and experience of the employees.

SELECT FirstName,HireDate,DATEDIFF(YEAR,HireDate,GETDATE()) AS Experience FROM Employees;

-- 14 - Write a query to get first name of employees who joined in 1987.

SELECT FirstName FROM Employees WHERE DATEPART(YEAR,HireDate) = 1987;