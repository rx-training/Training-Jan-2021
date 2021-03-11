use CompanyTraining;




--1)Select employee details from employee table if data exists in incentive table ?


--2)Find Salary of the employee whose salary is more than Roy Salary

    --Ans:- SELECT * FROM Employees WHERE Salary >(SELECT Salary FROM Employees where FirstName='Roy');

--3)Create a view to select FirstName,LastName,Salary,JoiningDate,IncentiveDate and IncentiveAmount
	
	/*
	CREATE VIEW ViewEmployee
	AS
	SELECT FirstName,LastName,Salary,HireDate,INCENTIVE_DATE,INCENTIVE_AMOUNT
	FROM Employees
	JOIN Incentive
	ON Employees.EmployeeID=Incentive.EMPLOYEE_REF_ID;
	*/


--4)Create a view to select Select first_name, incentive amount from employee and incentives table for those employees who have incentives and incentive amount greater than 3000
		
	/*

	CREATE VIEW ViewEmployee
	AS
	SELECT FirstName,INCENTIVE_AMOUNT
	FROM Employees
	JOIN Incentive
	ON Employees.EmployeeID=Incentive.EMPLOYEE_REF_ID;
	WHERE INCENTIVE_AMOUNT>=3000;

	*/

--(Note refer tables from sql supported files)

--1)Create a View to Find the names (first_name, last_name), job, department number, and department name of the employees who work in London
	/*
	CREATE VIEW ViewEmployee2
	AS
	SELECT FirstName,LastName,JobId,DepartmentID
	FROM Employees
	JOIN Departments
	on Employees.EmployeeID=Departments.DepartmentID
	WHERE LocationID IN(2400,2600);
	*/

--2)Create a View to get the department name and number of employees in the department.

	/*
	CREATE VIEW ViewEmployee2
	AS
	SELECT FirstName,LastName,JobId,DepartmentID
	FROM Employees
	JOIN Departments
	on Employees.EmployeeID=Departments.DepartmentID
	WHERE LocationID IN(2400,2600);
	*/

--3)Find the employee ID, job title, number of days between ending date and starting date for all jobs in department 90 from job history.
	
	/*
	CREATE VIEW ViewEmployee3
	AS
	SELECT EmployeeID,JobId,DATEDIFF(StartDate,EndDate)	FROM Employees
	JOIN JobHistory
	on Employees.EmployeeID=JobHistory.EmployeeID
	WHERE DepartmentID IN(90);
	*/

--4)Write a View to display the department name, manager name, and city.
	
	/*
	CREATE VIEW ViewEmployee4
	AS
	SELECT DepartmentmentName,ManagerID,City ,LocationID from Departments
	JOIN Locations
	on Departments.DepartmentID=Locations.LocationID
	*/

--5)Create a View to display department name, name (first_name, last_name), hire date, salary of the manager for all managers whose experience is more than 15 years.
	
	/*
	CREATE VIEW ViewEmployee5
	AS
	SELECT FirstName,LastName,HireDate,Salary ,LocationID,DepartmentmentName from Employees
	JOIN Departments
	on Employees.EmployeeID=Departments.DepartmentID AND Employees.EmployeeID=JobHistory.EmployeeID
	where DATEDIFF(StartDate,EndDate) > 15;
	*/



-- -----------------------------------------Detailed SUB-QUERIES----------------------------
--1. Write a query to find the names (first_name, last_name) and salaries of the employees who have higher salary than the 
--employee whose last_name='Bull'. 

		--Ans:- SELECT FirstName,LastName,Salary from Employees where  Salary >(select Salary from Employees where LastName='Bull');

--2. Find the names (first_name, last_name) of all employees who works in the IT department.

		--Ans:- SELECT FirstName,LastName,JobId,Salary from Employees where JobId IN(SELECT JobId FROM Employees where JobId='IT_PROG');

--3   Find the names (first_name, last_name) of the employees who have a manager who works for a department based in United States.

        --Ans:- SELECT FirstName,LastName from Employees where ManagerId in(SELECT ManagerID FROM Departments where ManagerID IN(SELECT * from Locations where CountryID='US'));

--4   Find the names (first_name, last_name) of the employees who are managers. 

		--Ans:-  SELECT FirstName, LastName FROM Employees WHERE (EmployeeId IN (SELECT ManagerID FROM employees));

--5   Find the names (first_name, last_name), salary of the employees whose salary is greater than the average salary.

		--Ans:-  SELECT FirstName,LastName from Employees where Salary >(SELECT AVG(Salary) from Employees);

--6   Find the names (first_name, last_name), salary of the employees whose salary is equal to the minimum salary for their job grade. 
        
		--Ans:-  SELECT FirstName,LastName from Employees where Salary IN(SELECT MIN(Salary) AS 'Min Salary' from Employees GROUP BY JobId );

--7   Find the names (first_name, last_name), salary of the employees who earn more than the average salary and who works in any of the IT departments. 

		--Ans:-  SELECT FirstName,LastName from Employees where Salary>(SELECT AVG(Salary) from Employees where JobId='IT_PROG');

--8   Find the names (first_name, last_name), salary of the employees who earn more than Mr. Bell

		--Ans:-  SELECT FirstName,LastName,Salary from Employees where Salary >(SELECT Salary  from Employees where LastName='Bell');

--9   Find the names (first_name, last_name), salary of the employees who earn the same salary as the minimum salary for all departments. 

		--Ans:-SELECT FirstName,LastName from Employees where Salary IN(SELECT MIN(Salary) from Employees GROUP BY DepartmentID);


--10  Find the names (first_name, last_name), salary of the employees whose salary greater than average salary of all department.

		--Ans:- SELECT FirstName,LastName,Salary as 'AVG SALARY' from Employees where Salary IN(SELECT AVG(Salary) from Employees GROUP BY DepartmentID);

--11.  Write a query to find the names (first_name, last_name) and salary of the employees who earn a salary that is higher than
--     the salary of all the Shipping Clerk (JOB_ID = 'SH_CLERK').

		--Ans:- Select FirstName,LastName,Salary as 'Highest Salary' from Employees where Salary IN (SELECT MAX(Salary) from Employees where JobId='SH_CLERK');


--12. Write a query to find the names (first_name, last_name) of the employees who are not supervisors.
			
		--Ans:-SELECT FirstName,LastName,JobId as 'Job ID' from Employees WHERE JobId IN(SELECT JobId FROM Employees where JobId NOT IN('SH_CLERK'));

--13. Write a query to display the employee ID, first name, last names, and department names of all employees. 

		--Ans:- SELECT EmployeeID,FirstName,LastName from Employees where DepartmentID IN(SELECT DepartmentName from Departments);

--14. Write a query to display the employee ID, first name, last names, salary of all employees whose salary is above average
	  --for their departments. 

	 --Ans:- SELECT EmployeeID,FirstName,LastName,Salary AS '> AVG SALARY' from Employees where Salary In(SELECT AVG(Salary) from Employees group by DepartmentID);


--15. Write a query to fetch even numbered records from employees table. 
	

--16. Write a query to find the 5th maximum salary in the employees table. 
		
		/*
		Ans:-
		SELECT DISTINCT Salary 
		FROM Employees e1 
		WHERE 5 = (SELECT COUNT(DISTINCT Salary) 
		FROM employees  e2 
		WHERE e2.salary >= e1.salary);
		*/

--17. Write a query to find the 4th minimum salary in the employees table. 
			/* 
			Ans:-
			SELECT DISTINCT salary 
			FROM employees e1 
			WHERE 4 = (SELECT COUNT(DISTINCT salary) 
			FROM employees  e2 
			WHERE e2.salary <= e1.salary);
			*/

--18. Write a query to select last 10 records from a table. 
		
		--Ans:-SELECT * FROM (SELECT * FROM Employees ORDER BY EmployeeID DESC LIMIT 10) ORDER BY EmployeeID ASC;

--19. Write a query to list department number, name for all the departments in which there are no employees in the department.

		--Ans:-SELECT * FROM Employees WHERE DepartmentID =(SELECT ManagerID FROM Departments where ManagerID=NULL);

--20. Write a query to get 3 maximum salaries. 
		
		/* 
		Ans:-
		SELECT DISTINCT Salary 
		FROM Employees a 
		WHERE 3 >= (SELECT COUNT(DISTINCT Salary) 
		FROM Employees b 
		WHERE b.Salary >= a.Salary) 
		ORDER BY a.Salary DESC;
		*/

--21. Write a query to get 3 minimum salaries. 
		
		/*
		Ans:-
		SELECT DISTINCT Salary 
		FROM Employees a 
		WHERE 3 >= (SELECT COUNT(DISTINCT Salary) 
		FROM Employees b 
		WHERE b.Salary <= a.Salary) 
		ORDER BY a.Salary DESC;
		*/

--22. Write a query to get nth max salaries of employees. 
		
		--And:- SELECT TOP Salary from Employees;


----------------------------------Detailed views-----------------------------------------------------
/*
1. Write a query to find the addresses (location_id, street_address, city, state_province, country_name) of all the departments. 

	/*
	CREATE VIEW ViewEmployee1
	AS
	SELECT LocationID,StreetAddress,PostalCode,City,StateProvince,CountryID
	FROM Locations
	JOIN Departments
	on Locations.LocationID=Departments.LocationID
	*/

2. Write a query to find the names (first_name, last name), department ID and name of all the employees. 
	
	CREATE VIEW ViewEmployee2
	AS
	SELECT FirstName,LastName,DepartmentID
	FROM Employees;

3. Find the names (first_name, last_name), job, department number, and department name of the employees who work in London. 

	SELECT FirstName,LastName,JobId,DepartmentID
	FROM Employees
	JOIN Departments
	on Employees.EmployeeID=Departments.DepartmentName
	WHERE LocationID IN(2400,2600);
	*/

--4. Write a query to find the employee id, name (last_name) along with their manager_id, manager name (last_name). 
	/*
	SELECT e.employee_id 'Emp_Id', e.last_name 'Employee', 
	m.employee_id 'Mgr_Id', m.last_name 'Manager' 
	FROM employees e 
	join employees m 
	ON (e.manager_id = m.employee_id);'
	*/

--5. Find the names (first_name, last_name) and hire date of the employees who were hired after 'Jones'. 
	/*
	SELECT e.first_name, e.last_name, e.hire_date 
	FROM employees e 
	JOIN employees davies 
	ON (davies.last_name = 'Jones') 
	WHERE davies.hire_date < e.hire_date;
	*/

--6. Write a query to get the department name and number of employees in the department. 
	
	/*
	SELECT department_name AS 'Department Name', 
	COUNT(*) AS 'No of Employees' 
	FROM departments 
	INNER JOIN employees 
	ON employees.department_id = departments.department_id 
	GROUP BY departments.department_id, department_name 
	ORDER BY department_name;
	*/


--7. Find the employee ID, job title, number of days between ending date and starting date for all jobs in department 90 from job history. 

	/*
	SELECT employee_id, job_title, end_date-start_date Days FROM job_history 
	NATURAL JOIN jobs 
	WHERE department_id=90;
	*/

	
--8. Write a query to display the department ID, department name and manager first name. 
	
	/*
	SELECT d.department_id, d.department_name, d.manager_id, e.first_name 
	FROM departments d 
	INNER JOIN employees e 
	ON (d.manager_id = e.employee_id);
	*/

--9. Write a query to display the department name, manager name, and city. 
		
		/*
		SELECT d.department_name, e.first_name, l.city 
		FROM departments d 
		JOIN employees e 
		ON (d.manager_id = e.employee_id) 
		JOIN locations l USING (location_id);
		*/

--10. Write a query to display the job title and average salary of employees. 
		
		/*
		SELECT job_title, AVG(salary) 
		FROM employees 
		NATURAL JOIN jobs 
		GROUP BY job_title;
		*/


--11. Display job title, employee name, and the difference between salary of the employee and minimum salary for the job. 
				
			/*
			SELECT job_title, first_name, salary-min_salary 'Salary - Min_Salary' 
			FROM employees 
			NATURAL JOIN jobs;
			*/

--12. Write a query to display the job history that were done by any employee who is currently drawing more than 10000 of salary. 
		
		/*
		SELECT jh.* FROM job_history jh 
		JOIN employees e 
		ON (jh.employee_id = e.employee_id) 
		WHERE salary > 10000;
		*/

--13. Write a query to display department name, name (first_name, last_name), hire date, salary of the manager for all managers whose experience is more than 15 years. 
		/*
		SELECT first_name, last_name, hire_date, salary, 
		(DATEDIFF(now(), hire_date))/365 Experience 
		FROM departments d JOIN employees e 
		ON (d.manager_id = e.employee_id
		WHERE (DATEDIFF(now(), hire_date))/365>15;
		*/