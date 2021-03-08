USE DAY3SQL
CREATE TABLE Employees
(
    EmployeeID decimal(6,0) NOT NULL DEFAULT '0',
	FirstName varchar(20)  NULL,
	LastName varchar(25) NOT NULL,
	Email varchar(25) NOT NULL,
	PhoneNumber varchar(20) DEFAULT NULL,
	HireDate date NOT NULL,
	JobId varchar(10) NOT NULL,
	Salary decimal(6,0) DEFAULT NULL,
	CommissionPct decimal(2,2) DEFAULT NULL,
	ManagerID decimal(6,0) DEFAULT NULL,
	DepartmentID decimal(4,0) DEFAULT NULL,
);


INSERT INTO Employees (EmployeeID,FirstName,LastName , Email, PhoneNumber, HireDate, JobId, Salary, CommissionPct, ManagerID, DepartmentID) VALUES
('100', 'Steven', 'King', 'SKING', '515.123.4567', '1987-06-17', 'AD_PRES', '24000.00', '0.00', '0', '90'),
('101', 'Neena', 'Kochhar', 'NKOCHHAR', '515.123.4568', '1987-06-18', 'AD_VP', '17000.00', '0.00', '100', '90'),
('102', 'Lex', 'De Haan', 'LDEHAAN', '515.123.4569', '1987-06-19', 'AD_VP', '17000.00', '0.00', '100', '90'),
('103', 'Alexander', 'Hunold', 'AHUNOLD', '590.423.4567', '1987-06-20', 'IT_PROG', '9000.00', '0.00', '102', '60'),
('104', 'Bruce', 'Ernst', 'BERNST', '590.423.4568', '1987-06-21', 'IT_PROG', '6000.00', '0.00', '103', '60'),
('105', 'David', 'Austin', 'DAUSTIN', '590.423.4569', '1987-06-22', 'IT_PROG', '4800.00', '0.00', '103', '60'),
('106', 'Valli', 'Pataballa', 'VPATABAL', '590.423.4560', '1987-06-23', 'IT_PROG', '4800.00', '0.00', '103', '60'),
('107', 'Diana', 'Lorentz', 'DLORENTZ', '590.423.5567', '1987-06-24', 'IT_PROG', '4200.00', '0.00', '103', '60'),
('108', 'Nancy', 'Greenberg', 'NGREENBE', '515.124.4569', '1987-06-25', 'FI_MGR', '12000.00', '0.00', '101', '100'),
('109', 'Daniel', 'Faviet', 'DFAVIET', '515.124.4169', '1987-06-26', 'FI_ACCOUNT', '9000.00', '0.00', '108', '100'),
('110', 'John', 'Chen', 'JCHEN', '515.124.4269', '1987-06-27', 'FI_ACCOUNT', '8200.00', '0.00', '108', '100'),
('111', 'Ismael', 'Sciarra', 'ISCIARRA', '515.124.4369', '1987-06-28', 'FI_ACCOUNT', '7700.00', '0.00', '108', '100'),
('112', 'Jose Manuel', 'Urman', 'JMURMAN', '515.124.4469', '1987-06-29', 'FI_ACCOUNT', '7800.00', '0.00', '108', '100'),
('113', 'Luis', 'Popp', 'LPOPP', '515.124.4567', '1987-06-30', 'FI_ACCOUNT', '6900.00', '0.00', '108', '100'),
('114', 'Den', 'Raphaely', 'DRAPHEAL', '515.127.4561', '1987-07-01', 'PU_MAN', '11000.00', '0.00', '100', '30'),
('115', 'Alexander', 'Khoo', 'AKHOO', '515.127.4562', '1987-07-02', 'PU_CLERK', '3100.00', '0.00', '114', '30'),
('116', 'Shelli', 'Baida', 'SBAIDA', '515.127.4563', '1987-07-03', 'PU_CLERK', '2900.00', '0.00', '114', '30'),
('117', 'Sigal', 'Tobias', 'STOBIAS', '515.127.4564', '1987-07-04', 'PU_CLERK', '2800.00', '0.00', '114', '30'),
('118', 'Guy', 'Himuro', 'GHIMURO', '515.127.4565', '1987-07-05', 'PU_CLERK', '2600.00', '0.00', '114', '30'),
('119', 'Karen', 'Colmenares', 'KCOLMENA', '515.127.4566', '1987-07-06', 'PU_CLERK', '2500.00', '0.00', '114', '30'),
('120', 'Matthew', 'Weiss', 'MWEISS', '650.123.1234', '1987-07-07', 'ST_MAN', '8000.00', '0.00', '100', '50'),
('121', 'Adam', 'Fripp', 'AFRIPP', '650.123.2234', '1987-07-08', 'ST_MAN', '8200.00', '0.00', '100', '50'),
('122', 'Payam', 'Kaufling', 'PKAUFLIN', '650.123.3234', '1987-07-09', 'ST_MAN', '7900.00', '0.00', '100', '50'),
('123', 'Shanta', 'Vollman', 'SVOLLMAN', '650.123.4234', '1987-07-10', 'ST_MAN', '6500.00', '0.00', '100', '50'),
('124', 'Kevin', 'Mourgos', 'KMOURGOS', '650.123.5234', '1987-07-11', 'ST_MAN', '5800.00', '0.00', '100', '50'),
('125', 'Julia', 'Nayer', 'JNAYER', '650.124.1214', '1987-07-12', 'ST_CLERK', '3200.00', '0.00', '120', '50'),
('126', 'Irene', 'Mikkilineni', 'IMIKKILI', '650.124.1224', '1987-07-13', 'ST_CLERK', '2700.00', '0.00', '120', '50'),
('127', 'James', 'Landry', 'JLANDRY', '650.124.1334', '1987-07-14', 'ST_CLERK', '2400.00', '0.00', '120', '50'),
('128', 'Steven', 'Markle', 'SMARKLE', '650.124.1434', '1987-07-15', 'ST_CLERK', '2200.00', '0.00', '120', '50'),
('129', 'Laura', 'Bissot', 'LBISSOT', '650.124.5234', '1987-07-16', 'ST_CLERK', '3300.00', '0.00', '121', '50'),
('130', 'Mozhe', 'Atkinson', 'MATKINSO', '650.124.6234', '1987-07-17', 'ST_CLERK', '2800.00', '0.00', '121', '50'),
('131', 'James', 'Marlow', 'JAMRLOW', '650.124.7234', '1987-07-18', 'ST_CLERK', '2500.00', '0.00', '121', '50'),
('132', 'TJ', 'Olson', 'TJOLSON', '650.124.8234', '1987-07-19', 'ST_CLERK', '2100.00', '0.00', '121', '50'),
('133', 'Jason', 'Mallin', 'JMALLIN', '650.127.1934', '1987-07-20', 'ST_CLERK', '3300.00', '0.00', '122', '50'),
('134', 'Michael', 'Rogers', 'MROGERS', '650.127.1834', '1987-07-21', 'ST_CLERK', '2900.00', '0.00', '122', '50')

/*Prac1:-Write a query that displays the FirstName and the length of the FirstName for all employees whose name starts with
the letters ‘A’, ‘J’ or ‘M’. Give each column an appropriate label. Sort the results by the employees’ FirstName*/

Select  FirstName ,LEN("FirstName") AS LengthOfName FROM Employees WHERE FirstName Like 'A%' or FirstName Like 'J%'  or FirstName Like 'M%' ORDER BY FirstName ASC;

/*Prac 2:-Write a query to display the FirstName and Salary for all employees. Format the salary to be 10
  characters long, left-padded with the $ symbol. Label the column SALARY.*/
/*
DECLARE @Number INT    
SET @Number='12345';
*SELECT RIGHT(REPLICATE('$', 7) + '1234', 10);
*/

SELECT FirstName,RIGHT(REPLICATE('$', 10-LEN(Salary)) + CONVERT(varchar(10),Salary) , 10) AS SALARY FROM Employees;

/*Prac 3:-Write a query to display the employees with their code , first name, last name and hire date who hired either 
on seventh day of any month or seventh month in any year.*/
SELECT EmployeeID,FirstName,LastName,HireDate FROM Employees 
WHERE DAY(HireDate)  LIKE '%7%' or MONTH(HireDate)  LIKE '%7%';

/*Prac 4:-Write a query to display the length of first name for employees where
last name contains character ‘c’ after 2nd position.*/
SELECT FirstName,LEN(FirstName) As NameLEN,LastName FROM Employees WHERE LEFT(LastName, 2) LIKE '%c';

/*Prac 5:-Write a query to extract the last 4 character of PhoneNumber.*/
SELECT FirstName,PhoneNumber FROM Employees WHERE RIGHT(PhoneNumber, 1) = 4;

/*Prac 6:-Write a query to update the portion of the PhoneNumber in the employees table,
within the phone number the substring ‘124’ will be replaced by ‘999’.*/
UPDATE Employees 
SET PhoneNumber = REPLACE(PhoneNumber, '124', '999') 
WHERE PhoneNumber LIKE '%124%';
SELECT FirstName,PhoneNumber FROM Employees WHERE PhoneNumber LIKE '%999%';

/*Prac 7:-Write a query to calculate the age in year.*/
SELECT YEAR(CURRENT_TIMESTAMP) - 
         YEAR('1999-08-21') As Age; 

/*Prac 8:-Write a query to get the distinct Mondays from HireDate in employees tables.*/
/*SELECT DATENAME(dw,GETDATE());*/
SELECT FirstName,PhoneNumber FROM Employees WHERE DATENAME(dw,HireDate) = 'Monday';


/*Prac 9:-Write a query to get the FirstName and HireDate from Employees table
 where HireDate between ‘1987-06-01’ and ‘1987-07-30’*/
SELECT * FROM Employees WHERE HireDate BETWEEN '1987-06-01' AND '1987-07-30';

/*Prac 10:-Write a query to display the current date in the following format.*/
SELECT CAST( GETDATE() AS Date ) ;

/*Prac 11:-Sample output : 12:00 AM Sep 5, 2014*/
SELECT CAST( GETDATE() AS datetime );

/*Prac 12:Write a query to get the FirstName, LastName who joined in the month of June.*/
SELECT * FROM Employees WHERE Month(HireDate) = 6;

/*Prac 13:-Write a query to get first name, hire date and experience of the employees.*/
SELECT FirstName,HireDate, YEAR(CURRENT_TIMESTAMP) - YEAR(HireDate) As Experience FROM Employees;


/*Prac 14:-Write a query to get first name of employees who joined in 1987.*/
SELECT FirstName,LastName,HireDate FROM Employees WHERE YEAR(HireDate)='1987';


