USE AdventureWorks2012;

SELECT CHAR(56);

SELECT CHARINDEX('S','MY SQL SERVER');

SELECT LEFT('HELLO WORLD', 3);

SELECT LTRIM('     HELLO WORLD');

SELECT Name = 'Mr.' + ' ' + LEFT(Name,1) + '. ' FROM Person.ContactType;

SELECT BusinessEntityID, DATENAME(MM,HireDate) + ', ' + CONVERT(VARCHAR, DATEPART(YYYY,HireDate)) AS 'Joining' FROM HumanResources.Employee;

SELECT DATENAME(MM, GETDATE()) + SPACE(1) + CAST(DATEPART(DD, GETDATE()) AS VARCHAR) + ', '+ CAST(DATEPART(YYYY, GETDATE()) AS VARCHAR);

SELECT LoginID, HireDate FROM HumanResources.Employee WHERE HireDate >= '1966-06-01' AND HireDate <= '2009-07-30';

SELECT HireDate FROM HumanResources.Employee;

SELECT DATEDIFF(YEAR, HireDate, GETDATE()) AS "Work Experience" FROM HumanResources.Employee;

SELECT HOST_ID() AS "HostID";

SELECT BusinessEntityID, 'Hourly Pay Rate' = ROUND(Rate,2) FROM HumanResources.EmployeePayHistory;

SELECT BusinessEntityID, 'Hourly Pay Rate' = CEILING(Rate) FROM HumanResources.EmployeePayHistory;

SELECT BusinessEntityID, 'Hourly Pay Rate' = FLOOR(Rate) FROM HumanResources.EmployeePayHistory;

SELECT POWER(3,4);

SELECT EXP(4);