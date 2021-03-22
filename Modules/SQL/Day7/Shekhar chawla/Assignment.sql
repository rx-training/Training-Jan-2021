--Assignment
--Convert Day4 and Day5 Exercises with CTE and Derived Table.

--Day4

--Write a query to rank employees based on their salary for a month
WITH Cte1 AS
(
	SELECT * , DENSE_RANK() OVER ( ORDER BY Salary DESC) AS 'Rank' FROM Employees 
)
SELECT * FROM Cte1 ;



--Select 4th Highest salary from employee table using ranking function
WITH Cte2 AS
(
	SELECT *
	FROM ( SELECT  * , DENSE_RANK() OVER ( ORDER BY Salary DESC) AS rank_emp FROM Employees ) AS a 
	WHERE rank_emp = 4
)
SELECT * FROM Cte2 ;

--SELECT * 
--FROM Employees Emp1
--WHERE (1) = ( 
--SELECT COUNT(DISTINCT(Emp2.Salary))
--FROM Employees Emp2
--WHERE Emp2.Salary > Emp1.Salary) 



--Get department, total salary with respect to a department from employee table.
WITH Cte3 AS
(
	SELECT * 
	FROM (	SELECT DepartmentId , SUM( Salary ) AS TotalSalary
			FROM Employees GROUP BY DepartmentID ) AS a
)
SELECT * FROM Cte3 ;



--Get department, total salary with respect to a department from employee table order by total salary descending
WITH Cte4 AS
(
	SELECT DepartmentID , SUM( Salary ) AS TotalSalary FROM Employees GROUP BY DepartmentID
)
SELECT * FROM Cte4 ORDER BY TotalSalary DESC ;



--Get department wise maximum salary from employee table order by salary ascending
WITH Cte5 AS
(
	SELECT DepartmentID , Salary FROM Employees 
)
SELECT DepartmentID , MAX( Salary ) AS MaxSal FROM Cte5 GROUP BY DepartmentID ORDER BY MaxSal ASC ;



--Get department wise minimum salary from employee table order by salary ascending
WITH Cte6 AS
(
	SELECT DepartmentID , Salary FROM Employees 
)
SELECT DepartmentID , MIN( Salary ) AS MinSal FROM Cte6 GROUP BY DepartmentID ORDER BY MinSal ASC ;



--Select department, total salary with respect to a department from employee table where total salary greater than 50000 order by TotalSalary descending
WITH Cte6 AS
(
	SELECT DepartmentID , Salary FROM Employees 
)
SELECT DepartmentID , SUM( Salary ) AS TotalSal 
FROM Cte6 
GROUP BY DepartmentID 
HAVING SUM( Salary )>5000 
ORDER BY TotalSal DESC ;




--Day5
--Assignment:

--Get difference between JOINING_DATE and INCENTIVE_DATE from employee and incentives table
WITH Cte1 AS
(
	SELECT Employees.EmployeeID, FirstName ,
	CAST( DATEDIFF(MM,HireDate,IncentiveDate) AS VARCHAR ) + ' months ' AS Diff
	FROM Employees JOIN Incentives ON Employees.EmployeeID = Incentives.EmployeeId 
)
SELECT * FROM Cte1 ;



--Select first_name, incentive amount from employee and incentives table for those employees who have incentives and incentive amount greater than 3000
WITH Cte2 AS 
(
	SELECT FirstName , IncentiveAmount FROM Employees 
	JOIN Incentives ON Employees.EmployeeID = Incentives.EmployeeId 
	WHERE IncentiveAmount > 3000 AND MONTH(IncentiveDate) = 2
)
SELECT * FROM Cte2 ;


--Select first_name, incentive amount from employee and incentives table for all employees even if they didn’t get incentives.
WITH Cte3 AS
(
	SELECT FirstName , IncentiveAmount FROM Employees 
	LEFT JOIN Incentives ON Employees.EmployeeID = Incentives.EmployeeId 
) 
SELECT * FROM Cte3 ;



--Select EmployeeName, ManagerName from the employee table.
WITH Cte4 AS
(
	SELECT Employees.FirstName , Manager.ManagerName FROM Employees 
	JOIN Manager ON Employees.EmployeeID = Manager.EmployeeId
)
SELECT * FROM Cte4 ;


--Select first_name, incentive amount from employee and incentives table for all employees even if they didn’t get incentives and set incentive amount as 0 for those employees who didn’t get incentives.
WITH Cte5 AS
(
	SELECT FirstName , IncentiveAmount
	FROM Employees 
	FULL JOIN Incentives ON Employees.EmployeeID = Incentives.EmployeeId
)
SELECT	FirstName , 
		CASE
			WHEN IncentiveAmount IS NULL THEN 0
			ELSE IncentiveAmount
		END AS IncentiveAmount 
FROM Cte5 ;