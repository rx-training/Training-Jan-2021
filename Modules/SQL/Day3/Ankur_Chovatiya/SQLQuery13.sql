SELECT FirstName , HireDate ,  Experience = DATEPART(YY, GETDATE()) - DATEPART(YY,HireDate)
FROM Employees