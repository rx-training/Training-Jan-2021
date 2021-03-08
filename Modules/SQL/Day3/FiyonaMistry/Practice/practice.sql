--String Functions


SELECT ASCII('A') AS A, ASCII('B') AS B,   
ASCII('a') AS a, ASCII('b') AS b,  
ASCII(1) AS [1], ASCII(2) AS [2] --returns the ASCII value

SELECT CONCAT(' FIYONA ', ' BHARATKUMAR ', ' MISTRY ') AS 'Full Name' --CONCATS string

SELECT FORMAT(SYSDATETIME(), 'hh:mm tt') --returns system time

SELECT CHARINDEX('a', 'This is a string')  --returns the index of the character 

SELECT LEFT('abcdefg',2)  --returns the 2 characters from the left side

USE AdventureWorks2012
SELECT LEN(FirstName) AS Length, FirstName 
FROM Sales.vIndividualCustomer   --returns the length of the first name

SELECT LTRIM('     Five spaces are at the beginning of this string.')  --removes the extra wide spaces from the string

SELECT PATINDEX('%ter%', 'interesting data')  --returns the position 3

SELECT REPLACE('abcdefghicde','cde','xxx')  --returns abxxxfghixxx

SELECT STR(123.45, 6, 1)  --STR(float, length, decimal)

SELECT STUFF('abcdef', 2, 3, 'ijklmn')  --returns aijklmnef

SELECT SUBSTRING('abcdef', 2, 3)  --returns bcd

SELECT REVERSE(1234)  --returns 4321

SELECT Name, Class, Color, ProductNumber,  
COALESCE(Class, Color, ProductNumber) AS FirstNotNull  
FROM Production.Product

SELECT AVG(ISNULL(Weight, 50))  
FROM Production.Product


--Date Examples


USE AdventureWorks2012


SELECT BusinessEntityID, DATENAME(mm, hiredate) + ', ' + CONVERT(VARCHAR, DATEPART(yyyy, hiredate)) AS 'Joining'
FROM HumanResources.Employee  
--Note : DATENAME returns STRING 

SELECT DATENAME(MM,GETDATE()) + SPACE(1) + CAST(DATEPART(DD, GETDATE()) AS VARCHAR) + ', ' + CAST(DATEPART(YYYY, GETDATE()) AS VARCHAR)
--Note : Returns current date in MM-DD-YYYY format

SELECT EOMONTH(GETDATE()) --End of Month


USE Day2
SELECT FirstName, HireDate 
FROM Employees
WHERE HireDate >= '1987-06-01' AND HireDate <= '1987-07-30'

SELECT FirstName, HireDate, DATEDIFF(YEAR, HireDate, GETDATE()) [Experience] 
FROM Employees


--Math Functions

USE AdventureWorks2012
SELECT BusinessEntityID, 'Hourly Pay Rate' = ROUND(Rate, 2)
FROM HumanResources.EmployeePayHistory

SELECT CEILING(12.45)

SELECT FLOOR(12.45)

SELECT POWER(2,3)


--System Functions

SELECT HOST_ID() AS 'Host Id'  --Returns Host Id

SELECT HOST_NAME() AS 'Host Name'  --Returns Host Name

