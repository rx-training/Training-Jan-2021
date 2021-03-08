/*** Assignment Day3 ***/

/*** 1. Write a query that displays the FirstName and the length of the FirstName for all employees whose name starts with 
the letters 'A', 'J' or 'M'. Give each column an appropriate label.Sort the results by the employees' FirstName ***/

SELECT FirstName , LEN(FirstName) AS 'Length' FROM Employees WHERE FirstName LIKE 'A%' OR FirstName LIKE 'J%' OR FirstName LIKE 'M%'

/*** 2 Write a query to display the FirstName and Salary for all employees. 
Format the salary to be 10 characters long, left-padded with the $ symbol. Label the column SALARY.  ****/

SELECT  FirstName,CONCAT('$ ', LEFT(Salary , 10)) FROM Employees

/*** 3 . Write a query to display the employees with their code, first name, last name and hire date who hired either on seventh day
of any month or seventh month in any year.  ***/

SELECT EmployeeID , FirstName , LastName , HireDate  FROM Employees WHERE DATEPART(MM,HireDate) = 7 OR DATEPART(DD,HireDate) = 7    

/*** 4 . Write a query to display the length of first name for employees where last name contains character 'c' after 2nd position.  ***/ 

SELECT LEN(FirstName) AS 'Length of FirstName'  FROM Employees WHERE PATINDEX('%c%', LastName) > 2

/*** 5. Write a query to extract the last 4 character of PhoneNumber. ***/

SELECT RIGHT(PhoneNumber,4) AS 'Last 4 Digit PhoneNumber' FROM Employees

/*** 6. Write a query to update the portion of the PhoneNumber in the employees table, 
within the phone number the substring '124' will be replaced by '999'  ***/

SELECT REPLACE(PhoneNumber,'124','999') AS PhoneNumber FROM Employees

/*** 7. Write a query to calculate the age in year. ***/
SELECT DATEDIFF( YYYY ,'2000-08-31',GETDATE()) AS 'AGE'


/*** 8. Write a query to get the distinct Mondays from HireDate in employees tables. ***/
SELECT *, DATENAME(WEEKDAY, HireDate) FROM Employees WHERE DATENAME(WEEKDAY, HireDate) = 'Monday' 

/*** 9.  Write a query to get the FirstName and HireDate from Employees table where HireDate between '1987-06-01' and '1987-07-30' ***/
SELECT FirstName , HireDate FROM Employees WHERE HireDate BETWEEN '1987-06-01' AND '1987-07-30' 

/*** 10. Write a query to display the current date in the following format. ***/
/*** 11. Sample output : 12:00 AM Sep 5, 2014 ***/
SELECT FORMAT( GETDATE() , 'hh:mm tt MMM dd , yyyy')

/*** 12. Write a query to get the FirstName, LastName who joined in the month of June. ***/
SELECT FirstName , LastName  FROM Employees WHERE  DATENAME(MM , HireDate) = 'June'

/*** 13. Write a query to get first name, hire date and experience of the employees.  ***/
SELECT FirstName , LastName ,  DATEDIFF(YYYY , HireDate , GETDATE()) AS Experience  FROM Employees 

/*** 14. Write a query to get first name of employees who joined in 1987. ***/
SELECT  FirstName FROM Employees WHERE DATEPART(YYYY , HireDate) = '1987'


