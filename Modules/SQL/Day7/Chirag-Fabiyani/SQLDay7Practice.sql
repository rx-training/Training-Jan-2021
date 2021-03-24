

----UNION----

SELECT EmployeeID,SUM(Salary) AS Salary FROM (
		SELECT EmployeeID,Salary FROM Employees
		UNION
		SELECT EmployeeRefID,IncentiveAmount FROM Incentives
) AS tbl GROUP BY EmployeeID




----INTERSECT----

SELECT * FROM Employees WHERE EmployeeID IN (
		SELECT EmployeeID FROM Employees
		INTERSECT
		SELECT EmployeeRefID FROM Incentives
)




----EXCEPT----

SELECT * FROM Employees WHERE EmployeeID IN (
		SELECT EmployeeID FROM Employees
		EXCEPT
		SELECT EmployeeRefID FROM Incentives
)