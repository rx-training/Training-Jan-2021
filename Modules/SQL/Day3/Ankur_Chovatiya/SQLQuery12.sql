SELECT FirstName, LastName , HireDate
FROM Employees
WHERE DATENAME(MM,HireDate) = 'JUNE' 
