-- dropping unique email constraint
ALTER TABLE employees
DROP CONSTRAINT ukEmail;

-- Disabling safety feature
SET SQL_SAFE_UPDATES = 0;

-- Write a query that displays the FirstName and the length of the FirstName for all employees whose name starts with the letters ‘A’, ‘J’ or ‘M’. Give each column an appropriate label. Sort the results by the employees’ FirstName
SELECT FirstName , LENGTH(FirstName) AS Length FROM Employees WHERE ( FirstName LIKE 'A%' ) OR ( FirstName LIKE 'J%' ) OR ( FirstName LIKE 'M%' ) ;

-- Write a query to display the FirstName and Salary for all employees. Format the salary to be 10 characters long, left-padded with the $ symbol. Label the column SALARY.
SELECT FirstName , CONCAT ( '$' , LPAD( Salary , 10 , ' ' ) ) AS Salary FROM Employees ;

-- Write a query to display the employees with their code, first name, last name and hire date who hired either on seventh day of any month or seventh month in any year.
SELECT FirstName , LastName , HireDate FROM Employees WHERE ( HireDate LIKE '%-07-%' ) OR ( HireDate LIKE '%-%-07' ) ;

-- Write a query to display the length of first name for employees where last name contains character ‘c’ after 2nd position.
SELECT FirstName , Length( FirstName ) AS Length , LastName FROM Employees WHERE LastName LIKE '__%c%' ;

-- Write a query to extract the last 4 character of PhoneNumber.
SELECT RIGHT(PhoneNumber , 4 ) AS PhoneNumber FROM Employees ;

-- Write a query to update the portion of the PhoneNumber in the employees table, within the phone number the substring ‘124’ will be replaced by ‘999’.
SELECT  PhoneNumber , 
		REPLACE ( PhoneNumber , '124' , '999' ) AS Output 
        FROM Employees WHERE PhoneNumber LIKE '%124%' ;

-- Write a query to calculate the age in year.
SELECT  HireDate , 
		CURDATE() , 
        CONCAT( 
			YEAR ( FROM_DAYS ( DATEDIFF ( CURDATE() , HireDate ) ) ), ' yrs ' ,
			MONTH ( FROM_DAYS ( DATEDIFF ( CURDATE() , HireDate ) ) ), ' months ' ,
            DAY ( FROM_DAYS ( DATEDIFF ( CURDATE() , HireDate ) ) ), ' days ' 
		) AS Experience 
        FROM Employees ;

-- Write a query to get the distinct Mondays from HireDate in employees tables.
SELECT DISTINCT HireDate , DAYNAME (HireDate) AS Mondays FROM Employees WHERE DAYNAME(HireDate) = 'Monday' ;

-- Write a query to get the FirstName and HireDate from Employees table where HireDate between ‘1987-06-01’ and ‘1987-07-30’
SELECT FirstName , HireDate FROM Employees Where HireDate > '1987-06-01' AND HireDate < '1987-07-30' ;

-- Write a query to display the current date in the following format.
-- Sample output : 12:00 AM Sep 5, 2014
SELECT DATE_FORMAT ( HireDate , '%H:%i %p %b %d, %Y' ) FROM Employees ;

-- Write a query to get the FirstName, LastName who joined in the month of June.
SELECT FirstName , LastName FROM Employees WHERE MONTH ( HireDate ) = 6 ;

-- Write a query to get first name, hire date and experience of the employees.
SELECT  FirstName ,
		HireDate , 
        CONCAT( 
			YEAR ( FROM_DAYS ( DATEDIFF ( CURDATE() , HireDate ) ) ), ' yrs ' ,
			MONTH ( FROM_DAYS ( DATEDIFF ( CURDATE() , HireDate ) ) ), ' months ' ,
            DAY ( FROM_DAYS ( DATEDIFF ( CURDATE() , HireDate ) ) ), ' days ' 
		) AS Experience 
        FROM Employees ;
        
-- Write a query to get first name of employees who joined in 1987.
SELECT FirstName FROM Employees WHERE YEAR( HireDate ) = 1987 ;

-- Enaabling safety feature
SET SQL_SAFE_UPDATES = 1;