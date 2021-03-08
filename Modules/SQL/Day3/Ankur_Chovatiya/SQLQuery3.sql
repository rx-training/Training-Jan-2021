SELECT FirstName,LastName,HireDate,EmployeeID
FROM employees
WHERE DATENAME (DD , HireDate) = 7 OR DATEPART (MM , HireDate) = 7
	

