USE Day2SQL;
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

TRUNCATE table Employees;


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

/*drop table in all email record*/
ALTER TABLE Employees
DROP COLUMN Email;

SELECT *
FROM Employees;

UPDATE Employees
SET Email='not available';
/*update data in Commissionpct 0.10*/
UPDATE Employees SET Email='not available',CommissionPct=0.10 WHERE EmployeeID<=115;



/*Department id add 110 in that commistionPct is 0.10 */
UPDATE Employees SET	Email='not available',CommissionPct=0.10 WHERE DepartmentID=110;

/*Department id is 80 and commistionPct lessthen 0.20% */
UPDATE Employees SET	Email='not available' WHERE DepartmentID=80 and CommissionPct<0.20;

/*jobid is Account  and email is not available */
UPDATE Employees SET	Email='not available' WHERE JobId!='Account';

/*Departmentid is 105 that record is salary is less then 5000 that salary it 8000 */
UPDATE Employees SET	Email='not available',Salary=8000 WHERE Salary<5000 ;

/*Employees id is 118 change shclerk and department id 30 jobid not start sh */
UPDATE Employees SET JobId = 'SH_CLERK' WHERE EmployeeID=118 AND DepartmentID=30 AND JobId NOT LIKE 'SH%';

/*Write a SQL statement to increase the salary of employees under the department 40, 90 and 110 according to the company rules that, salary will be
increased by 25% for the department 40, 15% for department 90 and 10% for the department 110 and the rest of the departments will remain same.*/

UPDATE Employees SET Salary = CASE  DepartmentID
                        WHEN 40 THEN Salary + (Salary * 0.25)
                        WHEN  90 THEN Salary + (Salary * 0.15) 
                        WHEN  110 THEN Salary + (Salary * 0.10) 
                        ELSE Salary
                    END

/* Write a SQL statement to increase the minimum and maximum salary of PU_CLERK by 2000 as well as the salary for those employees by 20% and commission by 10% . */
SELECT *
FROM Employees;
UPDATE Employees SET Salary = Salary + (Salary * 0.20), CommissionPct = CommissionPct + (CommissionPct * 0.10) WHERE JobId = 'PU_CLERK'


/*Basic Select Queries:*/

/*Get all employee details from the Employee table*/
SELECT * FROM Employees;

/*Get FirstName, LastName from Employees table*/
SELECT FirstName,LastName FROM Employees;

/*Get FirstName from Employees table using alias name “Employee Name”*/
 SELECT FirstName AS 'Employee Name' FROM Employees; 

/* Get employee details from Employees table whose Employee Name is “Steven”*/
SELECT FirstName FROM Employees WHERE FirstName='Steven';

/*Get employee details from Employees table whose Employee Name are “Neena” and “Lex”*/
SELECT * FROM Employees WHERE FirstName='Neena' or FirstName='Lex';


/*Get employee details from Employees table whose Employee name are not “Neena” and “Neena”*/
SELECT * FROM Employees WHERE FirstName !='Neena' and FirstName = 'Neena';

/*Get employee details from Employees table whose Salary between 5000 and 8000*/
SELECT * FROM Employees WHERE Salary BETWEEN 5000 AND 8000;

/*Write a query to get the names (FirstName, LastName), Salary, PF of all the Employees (PF is calculated as 12% of salary).*/
SELECT FirstName, LastName, Salary, PF = Salary * 0.12,TAX = Salary * 0.15 FROM Employees;

/*Get employee details from Employees table whose FirstName starts with ‘N’*/
SELECT * FROM Employees WHERE FirstName LIKE 'N%'; 

/*Write a query to get unique department ID from Employees table*/
SELECT DISTINCT DepartmentID FROM Employees;

/*Write a query to get all employee details from the employee table order by FirstName, descending*/
SELECT * FROM Employees ORDER BY FirstName DESC;

/*Write a query to get the EmployeeID, names (FirstName, LastName), salary in ascending order of salary.*/
SELECT FirstName,LastName,Salary FROM Employees ORDER BY Salary ASC;

/*Select TOP 2 salary from employee table*/
SELECT TOP 2 Salary FROM Employees;
