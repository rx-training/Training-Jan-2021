

----ROLLUP----

SELECT DepartmentID,JobId,SUM(Salary) AS Salary FROM Employees GROUP BY ROLLUP (DepartmentID,JobId)



----CUBE----

SELECT DepartmentID,JobId,SUM(Salary) AS Salary FROM Employees GROUP BY CUBE (DepartmentID,JobId)