

----Write a query to rank employees based on their salary for a month----

WITH A1(Salary)
AS
(
	SELECT Salary FROM Employees
)
SELECT DENSE_RANK() OVER (ORDER BY Salary DESC) AS EmployeeRank, Salary FROM A1;




----Select 4th Highest salary from employee table using ranking function----

WITH A1(Salary)
AS
(
	SELECT Salary FROM Employees
)
SELECT * FROM (SELECT DENSE_RANK() OVER (ORDER BY Salary DESC) AS EmployeeRank, Salary FROM A1) AS tbl WHERE EmployeeRank=4;




----Get department, total salary with respect to a department from employee table.----

WITH A2(DepartmentID,Salary)
AS
(
	SELECT DepartmentID,Salary FROM Employees
)
SELECT DepartmentID,SUM(Salary) AS TotalSalary FROM A2 GROUP BY DepartmentID;




----Get department, total salary with respect to a department from employee table order by total salary descending----

WITH A2(DepartmentID,Salary)
AS
(
	SELECT DepartmentID,Salary FROM Employees
)
SELECT SUM(Salary) AS TotalSalary,DepartmentID FROM A2 GROUP BY DepartmentID ORDER BY TotalSalary DESC;




----Get department wise maximum salary from employee table order by salary ascending----

WITH A2(DepartmentID,Salary)
AS
(
	SELECT DepartmentID,Salary FROM Employees
)
SELECT MAX(Salary) AS MaximumSalary,DepartmentID FROM A2 GROUP BY DepartmentID ORDER BY MaximumSalary ASC;




----Get department wise minimum salary from employee table order by salary ascending----

WITH A2(DepartmentID,Salary)
AS
(
	SELECT DepartmentID,Salary FROM Employees
)
SELECT MIN(Salary) AS MinimumSalary,DepartmentID FROM A2 GROUP BY DepartmentID ORDER BY MinimumSalary ASC;




----Select department, total salary with respect to a department from employee table where total salary greater----
----than 50000 order by TotalSalary descending----

WITH A3(DepartmentID,Salary)
AS
(
	SELECT DepartmentID,Salary FROM Employees
)
SELECT * FROM (SELECT SUM(Salary) AS TotalSalary, DepartmentID FROM A3 GROUP BY DepartmentID) AS tbl
WHERE TotalSalary>50000 ORDER BY TotalSalary DESC;




----Get difference between JOINING_DATE and INCENTIVE_DATE from employee and incentives table----

WITH A4(JoiningDate,IncentiveDate)
AS
(
	SELECT e.JoiningDate,i.IncentiveDate FROM Employees e JOIN Incentives i ON e.EmployeeID=i.EmployeeRefID
)
SELECT JoiningDate,IncentiveDate,DATEDIFF(month,JoiningDate,IncentiveDate) AS DifferenceDate FROM A4;




----Select first_name, incentive amount from employee and incentives table for those employees who----
----have incentives and incentive amount greater than 3000----

WITH A5(FirstName,IncentiveAmount)
AS
(
	SELECT e.FirstName,i.IncentiveAmount FROM Employees e JOIN Incentives i ON e.EmployeeID=i.EmployeeRefID
)
SELECT * FROM A5 WHERE IncentiveAmount>3000;




----Select first_name, incentive amount from employee and incentives table for all employees even if they didn’t get incentives.----

WITH A6(FirstName,IncentiveAmount)
AS
(
	SELECT e.FirstName,i.IncentiveAmount FROM Employees e LEFT OUTER JOIN Incentives i ON e.EmployeeID=i.EmployeeRefID
)
SELECT * FROM A6;




----Select EmployeeName, ManagerName from the employee table.----

WITH A7(EmployeeName,ManagerName)
AS
(
	SELECT e.FirstName+' '+e.LastName AS EmployeeName, m.FirstName+' '+m.LastName AS ManagerName FROM Employees e
	JOIN Employees m ON e.ManagerID=m.EmployeeID
)
SELECT * FROM A7;

----Select first_name, incentive amount from employee and incentives table for all employees even if they didn’t get incentives----
----and set incentive amount as 0 for those employees who didn’t get incentives.----

WITH A8(FirstName,IncentiveAmount)
AS
(
	SELECT e.FirstName,i.IncentiveAmount
	FROM Employees e LEFT OUTER JOIN Incentives i ON e.EmployeeID=i.EmployeeRefID
)
SELECT FirstName,
CASE
		WHEN IncentiveAmount IS NULL THEN 0
		ELSE IncentiveAmount 
END AS IncentiveAmount
FROM A8;