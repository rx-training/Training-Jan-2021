USE Jevik

--Write a query that displays the FirstName and the length of the FirstName for all employees whose name
--starts with the letters ‘A’, ‘J’ or ‘M’. Give each column an appropriate label. Sort the results by 
--the employees’ FirstName

SELECT FirstName, LEN(FirstName) 'FIRST_LENGTH' FROM Employees WHERE FirstName LIKE '[ajm]%'

--Write a query to display the FirstName and Salary for all employees. Format the salary to be 
--10 characters long, left-padded with the $ symbol. Label the column SALARY.

SELECT FirstName, REPLICATE('$',1)+LTRIM( STR(Salary,10,2)) 'SALARY'	 FROM Employees 

--Write a query to display the employees with their code, first name, last name and hire date 
--who hired either on seventh day of any month or seventh month in any year.

SELECT EmployeeID,  FirstName, LastName,HireDate	 FROM Employees 
WHERE (SELECT MONTH(HireDate) )  = 7 OR (SELECT DAY(HireDate) ) = 7

--Write a query to display the length of first name for employees where last name contains 
--character ‘c’ after 2nd position.

SELECT LEN( FirstName )  'LEN_FIRST'  FROM Employees WHERE LastName LIKE '__[c]%' 
SELECT LEN( FirstName )  'LEN_FIRST'  FROM Employees WHERE LastName LIKE '__%[c]%' 

--Write a query to extract the last 4 character of PhoneNumber.

SELECT RIGHT(PhoneNumber, 4)  FROM Employees 

--Write a query to update the portion of the PhoneNumber in the employees table, within the phone number the 
--substring ‘124’ will be replaced by ‘999’.

UPDATE Employees SET PhoneNumber = REPLACE(PhoneNumber,'124','999') WHERE PhoneNumber LIKE '%124%'

--Write a query to calculate the age in year.

SELECT DATEDIFF(YEAR,'12-12-1999',GETDATE())  
SELECT DATEDIFF(DAY, '12-12-1999',GETDATE() )/365 'AGE' 

--Write a query to get the distinct Mondays from HireDate in employees tables.

SELECT  HireDate  FROM Employees WHERE  DATENAME(WEEKDAY, HireDate)= 'Monday'

--Write a query to get the FirstName and HireDate from Employees table where HireDate between ‘1987-06-01’ 
--and ‘1987-07-30’

SELECT FirstName , HireDate FROM Employees
WHERE HireDate<= '1987-07-30' AND HireDate>= '1987-06-01'

--Write a query to display the current date in the following format.

SELECT GETDATE()

--Sample output : 12:00 AM Sep 5, 2014

SELECT  REVERSE(SUBSTRING(REVERSE(convert(varchar,GETDATE(),100)),3,5)) +' '+
RIGHT(convert(varchar,GETDATE(),100),2) +' '+DATENAME(MM, GETDATE())  +' '
+CAST(DAY(GETDATE())AS varchar) +', '+CAST(YEAR(GETDATE())AS varchar)

--Write a query to get the FirstName, LastName who joined in the month of June.

SELECT FirstName, LastName FROM Employees WHERE MONTH(HireDate)=6

--Write a query to get first name, hire date and experience of the employees.

SELECT FirstName, HireDate, 
CAST( DATEDIFF(DD,HireDate,GETDATE())/365AS varchar)+'y '+ 
CAST( DATEDIFF(DD,HireDate,GETDATE())%365/30 AS varchar)+'m '+ 
CAST( DATEDIFF(DD,HireDate,GETDATE())%30 AS varchar)+'d' 'Experience'  FROM Employees


SELECT FirstName, HireDate, CONCAT(
DATEDIFF(DD,HireDate,GETDATE())/365,'y ', 
DATEDIFF(DD,HireDate,GETDATE())%365/30,'m ', 
DATEDIFF(DD,HireDate,GETDATE())%30,'d ') AS Experience FROM Employees

--Write a query to get first name of employees who joined in 1987

SELECT FirstName FROM Employees WHERE HireDate LIKE'%1987%'
SELECT FirstName  FROM Employees WHERE YEAR( HireDate) =1987

SELECT * FROM Employees