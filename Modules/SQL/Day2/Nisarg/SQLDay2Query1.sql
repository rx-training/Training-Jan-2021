use CompanyTraining;
/*
UPDATE Queries
1)Write a SQL statement to change the Email column of Employees table with ‘not available’ for all employees.

UPDATE Employees
SET Email='not available';

*/

/*
2)Write a SQL statement to change the Email and CommissionPct column of employees table with ‘not available’ and 0.10 for all employees.

UPDATE dbo.Employees
SET Email='not available',CommissionPct='0.10';

*/

/*
3)Write a SQL statement to change the Email and CommissionPct column of employees table with ‘not available’ and 0.10 for those employees whose DepartmentID is 110.


UPDATE dbo.Employees
SET Email='not available',CommissionPct='0.10';
WHERE DepartmentID=110;

*/

/*
4)Write a SQL statement to change the Email column of employees table with ‘not available’ for those employees whose DepartmentID is 80 and gets a commission
is less than 20%

UPDATE dbo.Employees
SET Email='not available' WHERE DepartmentID=80 AND  CommissionPct<0.20;

*/


/*
5)Write a SQL statement to change the Email column of employees table with ‘not available’ for those employees who belongs to the ‘Accouning’ department.

UPDATE dbo.Employees
SET Email='not available' WHERE JobId="FI_ACCOUNT";

*/


/*
6)Write a SQL statement to change salary of employee to 8000 whose ID is 105, if the existing salary is less than 5000.

UPDATE dbo.Employees
SET Salary=8000 WHERE EmployeeID=105 AND Salary <5000;
*/

/*
7)
Write a SQL statement to change job ID of employee which ID is 118, to SH_CLERK if the employee belongs to department,
which ID is 30 and the existing job ID does 8)not start with SH.

UPDATE Employees
SET JobID='SH_CLERK' WHERE NOT IN(DepartmentID=30) AND JobId NOT LIKE 'SH%';

*/

/*
8)Write a SQL statement to increase the salary of employees under the department 40, 90 and 110 according to the company rules that, 
salary will be increased by 25% for the department 40, 15% for department 90 and 10% for the department 110 and the rest of the
departments will remain same.

*/	
	/*
	Ans:-
	UPDATE Employees SET (DepartmentID=40(Salary*25/100 as "Salary")) AND (DepartmentID=90(Salary*15/100 as "Salary")) AND (DepartmentID=110(Salary*10/100 as "Salary"))  where DepartmentID IN(40,90,110);
	CASE
    WHEN condition1 THEN result1
    WHEN condition2 THEN result2
    WHEN conditionN THEN resultN
    ELSE result
END;

	
	UPDATE Employees SET Salary = CASE
    WHEN DepartmentID = 40 THEN Salary * 1.25
    When DepartmentID = 90 THEN Salary * 1.15
    When DepartmentID = 110 THEN Salary * 1.10
    Else Salary
    END;
	*/


/*
9)Write a SQL statement to increase the minimum and maximum salary of PU_CLERK by 2000 as well as the salary for those employees by 20% and commission by 10% .

    UPDATE Employees
	SET Salary = Salary + (Salary * 0.20), CommissionPct = CommissionPct + (CommissionPct * 0.10)
	WHERE JobId = 'PU_CLERK'



*/


/*-------------------SELECT QUERIES------------------------*/


/*
1)Get all employee details from the Employee table
*/
		SELECT * from dbo.Employees;
/*
2)Get FirstName, LastName from Employees table
*/
		SELECT FirstName,LastName from dbo.Employees;
/*
3)Get FirstName from Employees table using alias name “Employee Name”
*/
		SELECT FirstName as "Employee Name" from dbo.Employees;
/*
4)Get employee details from Employees table whose Employee Name is “Steven”
*/
		
		SELECT * from Employees where FirstName='Steven';
/*
5)Get employee details from Employees table whose Employee Name are “Neena” and “Lex”
*/
		SELECT * from Employees where FirstName='Neena' AND FirstName='Lex';
/*
6)Get employee details from Employees table whose Employee name are not “Neena” and “Neena”
*/
		SELECT * from Employees where FirstName NOT IN('Neena','Lex');
/*
7)Get employee details from Employees table whose Salary between 5000 and 8000
*/
		SELECT * from Employees where Salary between 5000 and 8000;
/*
8)Write a query to get the names (FirstName, LastName), Salary, PF of all the Employees (PF is calculated as 12% of salary).
*/	
		SELECT FirstName,LastName,Salary,(Salary*12/100) as "PF" from Employees;
/*
9)Get employee details from Employees table whose FirstName starts with ‘N’
*/
		SELECT * from Employees where FirstName like 'N%';
/*
10)Write a query to get unique department ID from Employees table
*/
		SELECT DISTINCT DepartmentID from Employees ;
/*
11)Write a query to get all employee details from the employee table order by FirstName, descending.
*/
		SELECT * FROM Employees ORDER BY FirstName DESC; 
/*
12)Write a query to get the EmployeeID, names (FirstName, LastName), salary in ascending order of salary.
*/
		SELECT EmployeeID,FirstName,LastName,Salary from Employees ORDER BY Salary;
/*
13)Select TOP 2 salary from employee table
*/
SELECT TOP 2 * FROM Employees;
