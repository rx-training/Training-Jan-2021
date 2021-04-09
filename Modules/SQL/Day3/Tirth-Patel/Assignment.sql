USE TestData
SELECT * FROM Employees
----Write a query that displays the FirstName and the length of the 
--	FirstName for all employees whose name starts with the letters 
----‘A’, ‘J’ or ‘M’. Give each column an appropriate label. Sort the 
--	results by the employees’ FirstName

SELECT FirstName ,
		LEN(FirstName) AS 'LENGHT OF FIRST NAME'
FROM Employees
WHERE FirstName Like ('A%') OR FirstName Like ('j%')  OR  FirstName Like ('M%')
ORDER BY FirstName

--Write a query to display the FirstName and Salary for all employees. Format the 
--salary to be 10 characters long, left-padded with the $ symbol. Label the column SALARY.
SELECT FirstName,
	CONCAT('$',REPLICATE('0',10-LEN(RTRIM(Salary))) , Salary)
FROM Employees

--Write a query to display the employees with their code, first name, last name
--and hire date who hired either on seventh day of any month or seventh month in any year.

SELECT EmployeeID,
		FirstName,
		LastName,
		HireDate
FROM Employees
WHERE DAY(HireDate) =7 OR MONTH(HireDate) = 7

--Write a query to display the length of first name for 
--\employees where last name contains character ‘c’ after 2nd position.

SELECT LastName,
	LEN(FirstName) AS'LENGTH OF NAME'

	
	FROM Employees
	WHERE  CHARINDEX('c',LastName) > 2

	--Write a query to extract the last 4 character of PhoneNumber

	SELECT  RIGHT(CONVERT(VARCHAR,PhoneNumber),4) AS 'LAST 4 DIGITS'
	FROM Employees

	--Write a query to update the portion of the PhoneNumber in the employees
	--table, within the phone number the substring ‘124’ will be replaced by ‘999’.

	SELECT REPLACE( CONVERT(VARCHAR,PhoneNumber),'124','999')
	FROM Employees

	--Write a query to calculate the age in year.

	SELECT
		DATEDIFF(YEAR,'12/05/1999',GETDATE())

--Write a query to get the distinct Mondays from HireDate in employees tables.
	SELECT * FROM Employees
	WHERE DATENAME(WEEKDAY,HireDate) = 'monday'

	--Write a query to get the FirstName and HireDate from Employees table where
	--HireDate between ‘1987-06-01’ and ‘1987-07-30’
	SELECT FirstName,
			HireDate
	FROM Employees
	WHERE HireDate >= '1987-06-01' AND HireDate <= '1987-07-30'

--	Write a query to display the current date in the following format.
--Sample output : 12:00 AM Sep 5, 2014
	SELECT  STUFF(RIGHT(CONVERT(VarChar(19), GETDATE(), 0), 7),6,0,' ') + space(1) +
		SUBSTRING(DATENAME(MONTH ,GETDATE()),1,3) +space(1) +		
		DATENAME(day,GETDATE())+ ',' +space(1) + DATENAME(year,GETDATE())

--Write a query to get the FirstName, LastName who joined in the month of June
SELECT FirstName,
		LastName
		
FROM Employees
WHERE  DATENAME(month,HireDate) = 'june'
--Write a query to get first name, hire date and experience of the employees.
SELECT FirstName,
		HireDate,
		DATEDIFF(year,HireDate,GETDATE()) AS ' experience of the employees'
FROM	Employees

--Write a query to get first name of employees who joined in 1987.
SELECT FirstName 
FROM Employees
WHERE DATEPART(year,HireDate) = '1987'