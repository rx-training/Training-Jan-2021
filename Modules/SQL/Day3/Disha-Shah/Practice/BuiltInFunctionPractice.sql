USE AdventureWorks2012

SELECT * FROM HumanResources.Employee 

/* STRING FUNCTIONS */

--ASCII()
SELECT ASCII('D')

--CHAR()
SELECT CHAR(65)

--CHARINDEX()
SELECT CHARINDEX('E', JobTitle) AS 'Position E', JobTitle FROM HumanResources.Employee

SELECT CHARINDEX('E', JobTitle, 5) AS 'Position E', JobTitle FROM HumanResources.Employee

--CONCAT()
SELECT CONCAT('John', ' ', 'Doe')

SELECT CONCAT(NationalIDNumber, '-', LoginID) AS 'NationalLoginId' FROM HumanResources.Employee

--LEFT() & RIGHT()
SELECT LEFT ('MICROSOFT SQL SERVER 2012', 11), RIGHT ('MICROSOFT SQL SERVER 2012', 11)

SELECT LEFT (JobTitle, 7) AS 'LeftChar', RIGHT (JobTitle, 7) AS 'RightChar', JobTitle FROM HumanResources.Employee

--LEN()
SELECT LEN ('John Doe')

SELECT LEN(JobTitle) AS 'Length', JobTitle FROM HumanResources.Employee

--LOWER()
SELECT LOWER(JobTitle) AS 'LowerTitle' FROM HumanResources.Employee

--UPPER()
SELECT UPPER(JobTitle) AS 'UpperTitle' FROM HumanResources.Employee

--LTRIM(), RTRIM(), TRIM()
SELECT LTRIM('    John Doe   ') AS 'LtrimWord', RTRIM('   John Doe    ') AS 'RtrimWord', TRIM('    John Doe    ') AS 'TrimWord'

--PATINDEX()
SELECT PATINDEX('%Engineer%', JobTitle) AS 'DesignerIndex', JobTitle FROM HumanResources.Employee

--REPLACE()
SELECT REPLACE(JobTitle, 'Engineer', 'Engr') AS 'Designation', JobTitle FROM HumanResources.Employee

--SOUNDEX () & DIFFERENCE()
SELECT SOUNDEX ('Smith'), SOUNDEX ('Smythe');
  
SELECT DIFFERENCE('Smithers', 'Smythers');  

--SPACE()
SELECT CONCAT(NationalIDNumber, ':', SPACE(5), LoginID) AS 'NationalLoginId' FROM HumanResources.Employee

--STR()
SELECT STR(123.3), LEN(STR(123.3)) AS 'Length'
SELECT STR(123.45,6,1), LEN(STR(123.45,6,1)) AS 'Length'
SELECT STR(123.45,2,2), LEN(STR(123.45,2,2)) AS 'Length'

--STUFF()
SELECT STUFF(JobTitle, 1, 3, 'ABC') AS 'StuffTitle', JobTitle FROM HumanResources.Employee

--SUBSTRING()
SELECT SUBSTRING(JobTitle, 2, 6) AS 'SubString', JobTitle FROM HumanResources.Employee

--TRANSLATE()
SELECT TRANSLATE('2*[3+4]/{7-2}', '[]{}', '()()');

SELECT TRANSLATE('[137.4, 72.3]' , '[,]', '( )') AS 'Point',
    TRANSLATE('(137.4 72.3)' , '( )', '[,]') AS 'Coordinates';

--UNICODE()
SELECT UNICODE('A')

--REPLICATE()
SELECT REPLICATE(BusinessEntityID, 2) AS 'Replicated', BusinessEntityID FROM HumanResources.Employee

--REVERSE()
SELECT REVERSE(JobTitle) AS 'Reversed', JobTitle FROM HumanResources.Employee


/* DATE FUNCTIONS */

--GETDATE(), DAY(), MONTH(), YEAR()
SELECT GETDATE() AS 'DateTime', DAY(GETDATE()) AS 'Date', DAY(GETDATE())+10 AS 'Date', MONTH(GETDATE()) AS 'Month', YEAR(GETDATE()) AS 'Year'

SELECT DAY(BirthDate) AS 'Date', MONTH(BirthDate) AS 'Month', YEAR(BirthDate) AS 'Year', BirthDate FROM HumanResources.Employee

--DATEADD()
SELECT DATEADD(MM,6,HireDate) AS 'ProbationMonth', DATEADD(DD,10,HireDate) AS 'ProbationDate', DATEADD(YY,5,HireDate) AS 'ProbationYear',HireDate, DATEADD(HH,8,ModifiedDate) AS 'ModifiedHours', ModifiedDate 
FROM HumanResources.Employee

--DATENAME()
SELECT DATENAME(MM,HireDate) AS 'ProbationMonth', DATENAME(DD,HireDate) AS 'ProbationDate', DATENAME(YY,HireDate) AS 'ProbationYear',HireDate 
FROM HumanResources.Employee

--DATEDIFF()
SELECT DATEDIFF(YY, HireDate, GETDATE()) AS 'TotalYears'
FROM HumanResources.Employee

--DATEPART()
SELECT DATEPART(DD, HireDate) AS 'Date', HireDate FROM HumanResources.Employee

--CAST() & CONVERT()
SELECT DATENAME(MM, HireDate) + ', ' + CONVERT(VARCHAR, DATEPART(YY, HireDate)) AS 'Joining', HireDate FROM HumanResources.Employee

SELECT DATENAME(MM, HireDate) + SPACE(1) + CAST(DATEPART(DD, HireDate) AS VARCHAR) + ', ' + CAST(DATEPART(YY, HireDate) AS VARCHAR), HireDate
FROM HumanResources.Employee
WHERE HireDate >='2009-01-14' AND HireDate<='2011-01-18'

--EOMONTH()
SELECT EOMONTH(GETDATE())


/* MATH FUNCTIONS */

--CEILING(), FLOOR(), EXP(), POWER(), ROUND()
SELECT CEILING(12.34) AS 'Ceiling', FLOOR(12.34) AS 'Floor', EXP(4.5) AS 'Exp', POWER(2,3) AS 'Power', ROUND(15.457,2) AS 'Round'

/* SYSTEM FUNCTIONS */

--HOST_ID()
SELECT HOST_ID() AS 'HostID'

--HOST_NAME()
SELECT HOST_NAME() AS 'Host Name'

--ISNULL()
SELECT AVG(ISNULL(Weight, 50))
FROM Production.Product

--ISNUMERIC()
SELECT City, PostalCode  
FROM Person.Address   
WHERE ISNUMERIC(PostalCode) <> 1; 

--CHOOSE()
SELECT CHOOSE(3, Name, GroupName, Name + ' ' + GroupName)
FROM HumanResources.Department

--IIF()
SELECT * FROM Production.Product

SELECT IIF(ListPrice > 0, 'Normal Product', 'Internal Component') AS 'ProductInfo', ListPrice, Name
FROM Production.Product

--GETANSINULL()
SELECT GETANSINULL('AdventureWorks2012')  

--ERROR_STATE()
BEGIN TRY  
    -- Generate a divide by zero error  
    SELECT 1/0;  
END TRY  
BEGIN CATCH  
    SELECT ERROR_STATE() AS ErrorState;  
END CATCH;  

--ERROR_SEVERITY()
BEGIN TRY  
    -- Generate a divide-by-zero error.  
    SELECT 1/0;  
END TRY  
BEGIN CATCH  
    SELECT ERROR_SEVERITY() AS ErrorSeverity;  
END CATCH; 

--ERROR_NUMBER()
BEGIN TRY  
    -- Generate a divide-by-zero error.  
    SELECT 1/0;  
END TRY  
BEGIN CATCH  
    SELECT ERROR_NUMBER() AS ErrorNumber;  
END CATCH;  

--ERROR_MESSAGE()
BEGIN TRY  
    -- Generate a divide-by-zero error.  
    SELECT 1/0;  
END TRY  
BEGIN CATCH  
    SELECT ERROR_MESSAGE() AS ErrorMessage;  
END CATCH;  

--ERROR_LINE()
BEGIN TRY  
    -- Generate a divide-by-zero error.  
    SELECT 1/0;  
END TRY  
BEGIN CATCH  
    SELECT ERROR_LINE() AS ErrorLine;  
END CATCH;  
