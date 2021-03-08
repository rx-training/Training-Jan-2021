--1
SELECT FirstName, LEN(FirstName) AS 'Name Length' FROM Employees WHERE FirstName LIKE '[A,J,M]%' ORDER BY FirstName;

--2
SELECT FirstName, LEFT(CONCAT('$ ',Salary),10) AS Salary FROM Employees;

--3
SELECT EmployeeID, FirstName, LastName, HireDate from Employees where DATEPART(DD,HireDate) = 7 OR DATEPART(MM,HireDate) = 7 

--4
SELECT FirstName, LEN(FirstName) AS 'Name Length', LastName FROM Employees WHERE CHARINDEX('c', LastName, 3) <> 0;

--5
SELECT PhoneNumber, RIGHT(PhoneNumber, 4) AS LastFourDigits FROM Employees;

--6
UPDATE Employees SET PhoneNumber = REPLACE(PhoneNumber, '124', '999');
SELECT PhoneNumber AS PhoneNumberUpdated FROM Employees;

--7
SELECT DATEDIFF(YY, '1998-10-17', GETDATE()) AS Age;

--8
SELECT DISTINCT HireDate FROM Employees WHERE DATENAME(weekday, HireDate) = 'Monday';

--9
SELECT FirstName, HireDate FROM Employees WHERE HireDate BETWEEN '1987-06-01' AND '1987-07-30';

--10
SELECT CONCAT_WS(' ',RIGHT(CONVERT(varchar, GETDATE()), 7), CONVERT(varchar, GETDATE(),107));

--12
SELECT FirstName, LastName FROM Employees WHERE DATENAME(month, HireDate) = 'June';

--13
SELECT FirstName,
CASE
	WHEN DATEPART(MM, GETDATE()) = DATEPART(MM, HireDate) - 1 THEN 
		CASE
			WHEN DATEPART(DD, GETDATE()) > DATEPART(DD, HireDate) THEN DATEDIFF(YYYY, HireDate, GETDATE())
			ELSE DATEDIFF(YYYY, HireDate, GETDATE())
		END
	WHEN DATEPART(MM, GETDATE()) > DATEPART(MM, HireDate) THEN DATEDIFF(YYYY, HireDate, GETDATE())
	ELSE DATEDIFF(YYYY, HireDate, GETDATE()) - 1
END
AS WorkExperience, HireDate FROM Employees;

--14
SELECT FirstName FROM Employees WHERE DATEPART(YYYY, HireDate) = '1987';