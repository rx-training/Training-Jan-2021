use CompanyTraining;

/*
1)Write a query to rank employees based on their salary for a month.

Ans:- SELECT FirstName,LastName,Salary,RANK() OVER  (ORDER BY Salary  DESC ) AS Ranks FROM dbo.Employees;
*/
         
 
/*
2)Select 4th Highest salary from employee table using ranking function
Ans:-
		--SELECT * FROM Employees ORDER BY Salary DESC;
		  WITH Result AS(
		  SELECT Salary,
		  DENSE_RANK() OVER (ORDER BY Salary DESC) AS SalaryRank
		  FROM Employees
		  )
		  SELECT TOP 1 Salary FROM Result where SalaryRank=4;	
*/

/*
3)Get department, total salary with respect to a department from employee table.
Ans:-
		
		Ans:-SELECT COUNT(DepartmentID) as TotalDepartments,SUM(Salary) AS TotalSalary from dbo.Employees;
*/
		


/*
4)Get department, total salary with respect to a department from employee table order by total salary descending.
Ans:-
		Ans:-SELECT DepartmentID, SUM(Salary) AS TOTAL_SALARY FROM Employees GROUP BY DepartmentID;

*/
	
		
/*
5)Get department wise maximum salary from employee table order by salary ascending.
Ans:-
		Ans:- SELECT DepartmentID, MAX(Salary) AS MAX_SALARY FROM Employees  GROUP BY DepartmentID;
*/

/*
6)Get department wise minimum salary from employee table order by salary ascending
Ans:-
		Ans:- SELECT DepartmentID, MIN(Salary) AS MIN_SALARY FROM Employees  GROUP BY DepartmentID;
*/
		
/*
7)	Select department, total salary with respect to a department from employee 
	table where total salary greater than 50000 order by TotalSalary descending.

Ans:- SELECT DepartmentID, SUM(Salary) AS TotalSalary FROM Employees WHERE (Salary>50000 OR Salary>5000) GROUP BY DepartmentID;	
		
		
*/
			