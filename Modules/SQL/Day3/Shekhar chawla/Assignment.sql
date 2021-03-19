-- dropping unique email constraint
ALTER TABLE employees
DROP CONSTRAINT ukEmail;

-- Write a query that displays the FirstName and the length of the FirstName for all employees whose name starts with the letters ‘A’, ‘J’ or ‘M’. Give each column an appropriate label. Sort the results by the employees’ FirstName
SELECT FirstName , LEN(FirstName) AS Length FROM Employees WHERE ( FirstName LIKE 'A%' ) OR ( FirstName LIKE 'J%' ) OR ( FirstName LIKE 'M%' ) ;

-- Write a query to display the FirstName and Salary for all employees. Format the salary to be 10 characters long, left-padded with the $ symbol. Label the column SALARY.
SELECT FirstName , '$'  + STR(Salary , 10 , 1 ) AS Salary FROM Employees ;

-- Write a query to display the employees with their code, first name, last name and hire date who hired either on seventh day of any month or seventh month in any year.
SELECT FirstName , LastName , HireDate FROM Employees WHERE ( HireDate LIKE '%-07-%' ) OR ( HireDate LIKE '%-%-07' ) ;

-- Write a query to display the length of first name for employees where last name contains character ‘c’ after 2nd position.
SELECT FirstName , Len( FirstName ) AS Length , LastName FROM Employees WHERE LastName LIKE '__%c%' ;

-- Write a query to extract the last 4 character of PhoneNumber.
SELECT RIGHT(PhoneNumber , 4 ) AS PhoneNumber FROM Employees ;

-- Write a query to update the portion of the PhoneNumber in the employees table, within the phone number the substring ‘124’ will be replaced by ‘999’.
SELECT  PhoneNumber , 
		REPLACE ( PhoneNumber , '124' , '999' ) AS Output 
        FROM Employees WHERE PhoneNumber LIKE '%124%' ;

-- Write a query to calculate the age in year.
SELECT  HireDate , 
		CAST( GETDATE() AS Date ) , 
        CONCAT( 
			 DATEDIFF(year,  HireDate , CAST( GETDATE() AS Date ) )  , ' yrs ' , 
       	 	 DATEDIFF(month,  HireDate , CAST( GETDATE() AS Date ) ) - (DATEDIFF(year,  HireDate , CAST( GETDATE() AS Date ) ) *12)  , ' months ' ,
          	 DATEPART(d,CAST( GETDATE() AS Date ))-DATEPART(d,HireDate)  , ' days '
        )
        AS Experience FROM Employees ;

-- Write a query to get the distinct Mondays from HireDate in employees tables.
SELECT DISTINCT HireDate , DATENAME (DW, HireDate) AS Mondays FROM Employees WHERE DATENAME(DW, HireDate) = 'Monday' ;

-- Write a query to get the FirstName and HireDate from Employees table where HireDate between ‘1987-06-01’ and ‘1987-07-30’
SELECT FirstName , HireDate FROM Employees Where HireDate > '1987-06-01' AND HireDate < '1987-07-30' ;

-- Write a query to display the current date in the following format.
-- Sample output : 12:00 AM Sep 5, 2014
SELECT 	CONCAT (
		SUBSTRING( CONVERT(varchar , CAST(HireDate AS datetime) ) , 13 , 5), ' ' ,
		RIGHT( CONVERT(varchar , CAST(HireDate AS datetime) ) , 2) , ' ' ,
  		CONVERT(varchar,HireDate,107)
  		) FROM Employees ;

-- Write a query to get the FirstName, LastName who joined in the month of June.
SELECT FirstName , LastName FROM Employees WHERE MONTH ( HireDate ) = 6 ;

-- Write a query to get first name, hire date and experience of the employees.
SELECT  HireDate , 
		CAST( GETDATE() AS Date ) , 
        CONCAT( 
			 DATEDIFF(year,  HireDate , CAST( GETDATE() AS Date ) )  , ' yrs ' , 
       	 	 DATEDIFF(month,  HireDate , CAST( GETDATE() AS Date ) ) - (DATEDIFF(year,  HireDate , CAST( GETDATE() AS Date ) ) *12)  , ' months ' ,
          	 DATEPART(d,CAST( GETDATE() AS Date ))-DATEPART(d,HireDate)  , ' days '
        )
        AS Experience FROM Employees ;
        
-- Write a query to get first name of employees who joined in 1987.
SELECT FirstName FROM Employees WHERE YEAR( HireDate ) = 1987 ;
