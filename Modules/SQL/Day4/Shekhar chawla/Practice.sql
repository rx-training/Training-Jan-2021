
--Day4

--What to Learn

--Ranking Functions
--Row_number()
--Rank()
--Dense_rank()
--Aggregate Function
--SUM/COUNT/AVG/MAX/MIN
--Group by/Having/ROLLUP

--Practice Exercise:
--Do the hands on the video provided in tutorial site.


-- Row_number
SELECT	ROW_NUMBER() OVER ( ORDER BY Salary DESC ) AS Row_Num ,
		Salary 
	FROM Employees ;


-- Rank
SELECT	RANK() OVER ( PARTITION BY DepartmentID ORDER BY Salary DESC ) AS 'Rank' ,
		DepartmentID , Salary 
	FROM Employees 
	ORDER BY Salary DESC ;


-- Dense_Rank
SELECT	DENSE_RANK() OVER ( PARTITION BY DepartmentID ORDER BY Salary DESC ) AS 'Dense_Rank' ,
		DepartmentID , Salary 
	FROM Employees 
	ORDER BY Salary DESC ;


-- Ntile
SELECT	NTILE(3) OVER ( ORDER BY Salary DESC ) AS 'Ntile' ,
		Salary 
	FROM Employees ;


-- Avg , Count , Sum , Max , Min , Group by , Having
SELECT DepartmentID , 
		COUNT( EmployeeID ) AS 'No. of Employees' , 
		AVG( Salary )Average ,
		SUM( Salary ) AS 'Sum of Salaries' , 
		MAX( Salary ) AS 'Max Salary' ,
		MIN( Salary ) AS 'Min Salary' 
	FROM Employees 
	GROUP BY DepartmentID 
	HAVING SUM(Salary) > 10000
	ORDER BY DepartmentID ASC ;

-- Gives sum where null value is encountered
SELECT DepartmentID , ISNULL(FirstName, 'TOTAL--------->') , SUM(Salary) AS TotalSales
FROM Employees 
GROUP BY ROLLUP(DepartmentID , FirstName  ) ;


SELECT DepartmentID , ISNULL(FirstName, 'TOTAL--------->') , SUM(Salary) AS TotalSales
FROM Employees 
GROUP BY CUBE( FirstName ,DepartmentID , ) ;


SELECT DepartmentID , ISNULL(FirstName, 'TOTAL--------->') , SUM(Salary) AS TotalSales
FROM Employees 
GROUP BY GROUPING SETS (  FirstName , DepartmentID , ()  ) ;


-- Into
SELECT * INTO EmployeesTemp FROM Employees ;
SELECT * FROM EmployeesTemp ;


-- Over
select Salary, DepartmentID
	, [min]	= min(Salary) over(partition by DepartmentID order by Salary)
	, [max]	= max(Salary) over(partition by DepartmentID order by Salary)
from Employees ;