UPDATE Employees
SET JobId = 'SH_CLERK'
WHERE EmployeeID = 118 AND DepartmentID = 30 And JobId NOT LIKE 'SH%'


SELECT * FROM Employees
