SELECT FirstName,len_first_name = LEN(FirstName) 
FROM Employees 
WHERE FirstName LIKE 'A%'	
	OR FirstName LIKE 'J%'
	OR FirstName LIKE 'M%'
ORDER BY FirstName