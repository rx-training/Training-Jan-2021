use CompanyTraining;


/*
1)Write a query that displays the FirstName and the length of the FirstName for all employees whose name starts with the 
letters ‘A’, ‘J’ or ‘M’. Give each column an appropriate label. Sort the results by the employees’ FirstName
*/
--SELECT FirstName,LEN(FirstName) as Length from Employees where FirstName LIKE 'A%' OR FirstName LIKE 'J%' OR FirstName LIKE 'M%' ORDER BY FirstName;


/*
2)Write a query to display the FirstName and Salary for all employees. Format the salary to be 10 characters long, 
left-padded with the $ symbol. Label the column SALARY.
*/

--SELECT FirstName,LPAD(Salary,10,'$') SALARY from Employees;

/*
3)Write a query to display the employees with their code, first name, last name and hire date who hired either on seventh day
of any month or seventh month in any year.
*/

--   SELECT EmployeeID, FirstName, LastName, HireDate
--   FROM Employees
--   WHERE DATEPART(mm, HireDate) = 07 OR DATEPART(dd, HireDate) = 07

/*
4)Write a query to display the length of first name for employees where last name contains character ‘c’ after 2nd position.
*/

--SELECT FirstName,LEN(FirstName) as Length from Employees WHERE LastName LIKE '__c%';
/*
5)Write a query to extract the last 4 character of PhoneNumber.
*/
--SELECT RIGHT(PhoneNumber, 4) as 'Ph.No.' FROM employees;

/*
6)Write a query to update the portion of the PhoneNumber in the employees table,
within the phone number the substring ‘124’ will be replaced by ‘999’.
*/
--SELECT PhoneNumber,REPLACE(PhoneNumber,124,999) as PhoneNumberEdted from Employees


/*
7)Write a query to calculate the age in year.
8)Write a query to get the distinct Mondays from HireDate in employees tables.
*/

	--SELECT HireDate, DATEPART(WEEKDAY, HireDate) AS 'Mondays'
	--FROM Employees
	--WHERE DATEPART(WEEKDAY, HireDate) = 1

/*
9)Write a query to get the FirstName and HireDate from Employees table where HireDate between ‘1987-06-01’ and ‘1987-07-30’
--    SELECT FirstName ,HireDate from Employees WHERE HireDate BETWEEN '1987-06-01' AND '1987-07-30'
*/

/*
10)Write a query to display the current date in the following format.Sample output : 12:00 AM Sep 5, 2014
*/
		--SELECT FORMAT(SYSDATETIME(), 'hh:mm tt') + SPACE(1) + DATENAME(MM,GETDATE()) + SPACE(1) + CAST(DATEPART(DD, GETDATE()) AS VARCHAR) + ', ' + CAST(DATEPART(YYYY, GETDATE()) AS VARCHAR)
/*
11)Write a query to get the FirstName, LastName who joined in the month of June.
	--SELECT FirstName,LastName from Employees where DATEPART(mm, HireDate) = 07 ;
*/

/*
12)Write a query to get first name, hire date and experience of the employees.
	--SELECT FirstName,HireDate,Experience from Employees;
*/

--13)Write a query to get first name of employees who joined in 1987.
	 --select * from Employees where DATEPART(yy, HireDate) = 1987 ;

