SELECT LEN(FirstName) len_of_First 
FROM Employees
WHERE CHARINDEX('c' ,LastName) >2


SELECT lastname from Employees  WHERE CHARINDEX('c' ,LastName) >2 