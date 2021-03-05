USE AdventureWorks2012;

SELECT * FROM HumanResources.Employee;

-- STRING FUNCTIONS -----------------------------------------------------------

SELECT ASCII(Gender) FROM HumanResources.Employee;

SELECT CHAR(77)

SELECT CHARINDEX('N',JobTitle) FROM HumanResources.Employee;
SELECT CHARINDEX('N',JobTitle,14) FROM HumanResources.Employee;

SELECT CONCAT(LoginID, ' - ', JobTitle) AS 'LOGINID - JOB' FROM HumanResources.Employee;

DECLARE @d DATE = '11/22/2020';
SELECT FORMAT( @d, 'd', 'en-US' ) 'US English'  
      ,FORMAT( @d, 'd', 'en-gb' ) 'Great Britain English'  
      ,FORMAT( @d, 'd', 'de-de' ) 'German'  
      ,FORMAT( @d, 'd', 'zh-cn' ) 'Simplified Chinese (PRC)';  

SELECT FORMAT(123456789, '###-##-####');

SELECT LEFT('abcdefg',5); 

SELECT LEFT(Name, 5)   
	FROM Production.Product  
	ORDER BY ProductID;

SELECT LEN(JobTitle), JobTitle FROM HumanResources.Employee;

SELECT LOWER(JobTitle), JobTitle FROM HumanResources.Employee;

SELECT LTRIM('     Five spaces are at the beginning of this string.');

SELECT PATINDEX('%Development%', JobTitle), JobTitle FROM HumanResources.Employee;

SELECT REPLACE(JobTitle,'Engineer','ER') FROM HumanResources.Employee;

SELECT RTRIM('Removes trailing spaces.   ');  

SELECT SOUNDEX ('Smith'), SOUNDEX ('Smythe'); 

SELECT RTRIM(LastName) + ',' + SPACE(12) +  LTRIM(FirstName)  
FROM Person.Person  
ORDER BY LastName, FirstName; 

SELECT STR(123.45, 5, 2)
		,STR(123.45, 2, 2);  

SELECT STUFF(JobTitle,1,1,'abc') FROM HumanResources.Employee;

SELECT SUBSTRING(JobTitle, 1, 5) FROM HumanResources.Employee;

SELECT TRANSLATE('abcdabcdac','ab','kl');

SELECT TRIM( '     remove    ');

SELECT UNICODE(JobTitle),JobTitle FROM HumanResources.Employee;

SELECT REPLICATE(JobTitle, 3),JobTitle FROM HumanResources.Employee;

SELECT REVERSE(JobTitle),JobTitle FROM HumanResources.Employee;

SELECT RIGHT(JobTitle, 5),JobTitle FROM HumanResources.Employee;


-- DATE FUNCTIONS --------------------------------------------------------

SELECT CURRENT_TIMESTAMP
		,GETDATE();

SELECT BusinessEntityID, DATENAME(DD,BirthDate) AS BIRTHDATE, DATENAME(MM,BirthDate) AS BIRTHMONTH, DATENAME(YY, BirthDate) AS BIRTHYEAR,
		DATEPART(DD,BirthDate) AS BIRTHDATE, DATEPART(MM,BirthDate) AS BIRTHMONTH, DATEPART(YY, BirthDate) AS BIRTHYEAR FROM HumanResources.Employee;


SELECT BusinessEntityID, BirthDate FROM HumanResources.Employee WHERE BirthDate >= '1987-06-01' AND BirthDate <= '1987-07-30';

SELECT DATEDIFF(YY, HireDate, GETDATE()) AS EXPERIENCE FROM HumanResources.Employee;


-- MATH FUNCTIONS ------------------------------------------------------

SELECT * FROM HumanResources.EmployeePayHistory;

SELECT CEILING(Rate) AS 'CEILING RATE', Rate FROM HumanResources.EmployeePayHistory;

SELECT FLOOR(Rate) AS 'CEILING RATE', Rate FROM HumanResources.EmployeePayHistory;

SELECT EXP(Rate) AS 'CEILING RATE', Rate FROM HumanResources.EmployeePayHistory;

SELECT POWER(Rate,2) AS 'CEILING RATE', Rate FROM HumanResources.EmployeePayHistory;

SELECT ROUND(Rate,2) AS 'CEILING RATE', Rate FROM HumanResources.EmployeePayHistory;

--BUILT IN FUNCTIONS --------------------------------------------------

SELECT * FROM Person.Person;

SELECT FirstName
		,LastName
		,ISNULL(MiddleName, 'NOT AVAIABLE')
		,COALESCE(MiddleName, 'NOT AVAIABLE')
FROM Person.Person;