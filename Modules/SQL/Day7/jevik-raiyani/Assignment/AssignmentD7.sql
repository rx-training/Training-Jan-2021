--Day4
--Write a query to rank employees based on their salary for a month
WITH empCTC (Rank,EMpID)
AS(
SELECT RANK() OVER (ORDER BY Salary) 'Rank',EmployeeID FROM Employees
)
SELECT Rank,EMpID FROM empCTC

SELECT Rank,EmployeeID FROM(
SELECT RANK() OVER (ORDER BY Salary) 'Rank',EmployeeID FROM Employees
) newtab


--Select 4th Highest salary from employee table using ranking function
WITH empCTC (Rank,Salary)
AS(
SELECT DENSE_RANK() OVER (ORDER BY Salary DESC) 'Rank',Salary FROM Employees
)
SELECT Rank,Salary FROM empCTC
WHERE Rank = 4

SELECT Rank,Salary FROM(
SELECT DENSE_RANK() OVER (ORDER BY Salary) 'Rank',Salary FROM Employees
) newtable
WHERE Rank=4

--Get department, total salary with respect to a department from employee table
WITH empCTC (DepartmentID,Salary)
AS(
 SELECT DepartmentID, SUM(Salary) 'DeptSalary'
FROM Employees GROUP BY DepartmentID 
)
SELECT DepartmentID,Salary FROM empCTC
WHERE DepartmentID != 0

SELECT DepartmentID,DeptSalary FROM(
SELECT DepartmentID, SUM(Salary) 'DeptSalary'
FROM Employees GROUP BY DepartmentID ) newtable
WHERE DepartmentID != 0

--Get department, total salary with respect to a department from employee table order by 
--total salary descending

WITH empCTC (DepartmentID,Salary)
AS(
	SELECT DepartmentID, SUM(Salary) 'DeptSalary'
	FROM Employees GROUP BY DepartmentID 
)
SELECT DepartmentID,Salary FROM empCTC
WHERE DepartmentID != 0
ORDER BY Salary DESC

SELECT DepartmentID,DeptSalary FROM(
SELECT DepartmentID, SUM(Salary) 'DeptSalary'
FROM Employees GROUP BY DepartmentID  ) newtable
WHERE DepartmentID != 0
ORDER BY DeptSalary DESC


--Get department wise maximum salary from employee table order by salary ascending


WITH empCTC (DepartmentID,Salary)
AS(
	SELECT DepartmentID, MAX(Salary) 'DeptSalary'
	FROM Employees GROUP BY DepartmentID 
)
SELECT DepartmentID,Salary FROM empCTC
WHERE DepartmentID != 0
ORDER BY Salary 

SELECT DepartmentID,DeptSalary FROM(
SELECT DepartmentID, MAX(Salary) 'DeptSalary'
FROM Employees GROUP BY DepartmentID ) newtable
WHERE DepartmentID != 0
ORDER BY DeptSalary 

--Get department wise minimum salary from employee table order by salary ascending

WITH empCTC (DepartmentID,Salary)
AS(
	SELECT DepartmentID, MIN(Salary) 'DeptSalary'
	FROM Employees GROUP BY DepartmentID 
)
SELECT DepartmentID,Salary FROM empCTC
WHERE DepartmentID != 0
ORDER BY Salary 

SELECT DepartmentID,DeptSalary FROM(
SELECT DepartmentID, MIN(Salary) 'DeptSalary'
FROM Employees GROUP BY DepartmentID  ) newtable
WHERE DepartmentID != 0
ORDER BY DeptSalary 


--Select department, total salary with respect to a department from employee table 
--where total salary greater than 50000 order by TotalSalary descending

WITH empCTC (DepartmentID,Salary)
AS(
	SELECT DepartmentID, SUM(Salary) 'DeptSalary'
	FROM Employees GROUP BY DepartmentID 

)
SELECT DepartmentID,Salary FROM empCTC
WHERE DepartmentID != 0 AND Salary>50000
ORDER BY Salary  DESC

SELECT DepartmentID,DeptSalary FROM(
SELECT DepartmentID, SUM(Salary) 'DeptSalary'
FROM Employees GROUP BY DepartmentID  ) newtable
WHERE DepartmentID != 0 AND DeptSalary>50000
ORDER BY DeptSalary DESC


--Day5
--Get difference between JOINING_DATE and INCENTIVE_DATE from employee and incentives table

WITH empCTC (EmpId,dayDifference)
AS(
	SELECT e.Emp_ID,DATEDIFF(DAY,e.Joining_Date,i.Incentive_Date)  'diffendence'
	FROM Employees e JOIN Incentives i 
	ON e.Emp_ID = i.Emp_Ref_ID
)
SELECT EmpId,dayDifference FROM empCTC

SELECT Emp_ID,diffendence FROM(
SELECT e.Emp_ID,DATEDIFF(DAY,e.Joining_Date,i.Incentive_Date)  'diffendence'
FROM Employees e JOIN Incentives i 
ON e.Emp_ID = i.Emp_Ref_ID  ) newtable

SELECT Emp_ID,DATEDIFF(DAY,Joining_Date,i.Incentive_Date)  'diffendence' 
FROM Employees 
INNER JOIN(
SELECT Emp_Ref_ID,Incentive_Date
FROM  Incentives) AS i
ON i.Emp_Ref_ID = Emp_ID


--Select first_name, incentive amount from employee and incentives table for those employees 
--who have incentives and incentive amount greater than 3000

WITH empCTC (First_Name,Incentive_Amount)
AS(
	SELECT e.First_Name, i.Incentive_Amount
	FROM Employees e JOIN Incentives i 
	ON e.Emp_ID = i.Emp_Ref_ID 
)
SELECT First_Name,Incentive_Amount FROM empCTC
WHERE Incentive_Amount > 3000

SELECT First_Name, i.Incentive_Amount
FROM Employees 
INNER JOIN(
SELECT Incentive_Amount,Emp_Ref_ID
FROM  Incentives) AS i
ON i.Emp_Ref_ID = Emp_ID



--Select first_name, incentive amount from employee and incentives table for 
--all employees even if they didn’t get incentives.
WITH empCTC (FName, IAmount)
AS(
	SELECT e.First_Name, SUM(i.Incentive_Amount) FROM Employees e
	LEFT OUTER JOIN Incentives i
	ON e.Emp_ID = i.Emp_Ref_ID
	GROUP BY e.First_Name,e.Last_Name
)
SELECT * FROM empCTC

SELECT First_Name, SUM(i.Incentive_Amount) 'IAmount' FROM Employees
LEFT OUTER JOIN(
SELECT Incentive_Amount,Emp_Ref_ID  FROM Incentives ) AS i
ON Emp_ID =i.Emp_Ref_ID
GROUP BY First_Name,Last_Name

--Select EmployeeName, ManagerName from the employee table.
WITH empCTC (EName, MName)
AS(
	SELECT emp.First_Name ,man.First_Name
	FROM Employees emp , Employees man
	WHERE emp.Manager_ID =man.Emp_ID
)
SELECT * FROM empCTC

SELECT Employees.First_Name 'EmpFname', e.First_Name 'ManFname'
FROM Employees INNER JOIN(
SELECT Emp_ID,First_Name  FROM Employees ) AS e
ON  Manager_ID =e.Emp_ID


--Select first_name, incentive amount from employee and incentives table for all employees 
--even if they didn’t get incentives and set incentive amount as 0 for those employees who didn’t get incentives.
SELECT e.First_Name, ISNULL(i.Incentive_Amount,0)
FROM Employees e LEFT JOIN Incentives i
ON e.Emp_ID = i.Emp_Ref_ID

WITH empCTC (FName, Incentive_Amount)
AS(
	SELECT e.First_Name, ISNULL(i.Incentive_Amount,0)
	FROM Employees e LEFT JOIN Incentives i
	ON e.Emp_ID = i.Emp_Ref_ID
)
SELECT * FROM empCTC

SELECT First_Name ,ISNULL(i.Incentive_Amount,0)
FROM Employees LEFT JOIN(
SELECT Emp_Ref_ID,Incentive_Amount  FROM Incentives ) AS i
ON  Emp_ID = i.Emp_Ref_ID



SELECT * FROM Employees
USE day5