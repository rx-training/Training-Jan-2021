CREATE DATABASE PracticeExercisedbDay3
USE PracticeExercisedbDay3

-------------------String Function-------------------------
--1 ASCII()---
SELECT ASCII('A')AS 'ASCII OF A',ASCII('B') AS 'ASCII OF B',ASCII('c') AS 'ASCII OF c',ASCII('C') AS  'ASCII OF C'

--2 CHAR()--
SELECT CHAR(65) AS 'CHARACTER OF ASSCII CODE',CHAR(66) AS 'CHARACTER OF ASSCII CODE',CHAR(99) AS 'CHARACTER OF ASSCII CODE',CHAR(67) AS 'CHARACTER OF ASSCII CODE'
USE AdventureWorks2012

--3 CHARINDEX()--
SELECT * FROM  HumanResources.Department
SELECT  GroupName,CHARINDEX('s',GroupName ) AS 'INDEX OF S',CHARINDEX('R',GroupName )	As 'INDEX OF R'  FROM  HumanResources.Department
---4 CONCAT()--
SELECT * FROM  HumanResources.Department
SELECT *,CONCAT(Name,GroupName) AS 'CONCATED OUTPUT' FROM  HumanResources.Department

--5 LEFT()--
SELECT LEFT('MICROSOFT SQL SERVER 2012',10) As 'LEFT FUNCTION'

--6 LEN()--
SELECT *FROM HumanResources.Department
SELECT GroupName ,LEN(GroupName) AS 'LENGTH OF THE GROUP NAME'  FROM HumanResources.Department

--7 LOWERCASE()  AND UPPERCASE()--
SELECT GroupName, LOWER(GroupName) AS 'Lower Case',UPPER(GroupName)  AS 'Upper Case' FROM HumanResources.Department

---8 TRIM() ---
SELECT'         HELLO'AS'Without LTRIM', LTRIM('                 HELLO') AS 'LTRIM FUNCTION'
SELECT'HELLO                  'AS'Without RTRIM', RTRIM('HELLO         ') AS 'RTRIM FUNCTION'
SELECT'              HELLO                  'AS'Without TRIM', TRIM('           HELLO         ') AS 'TRIM FUNCTION'


--9 PATINDEX()--------
SELECT *FROM HumanResources.Department
SELECT   GroupName,PATINDEX('R%',GroupName) FROM HumanResources.Department
--10 REPLACE()--------
SELECT *FROM HumanResources.Department
SELECT GroupName ,REPLACE('HELLO','Research and Development',GroupName) FROM HumanResources.Department
WHERE GroupName='Research and Development'

--11 SOUNDEX()---
SELECT SOUNDEX('Smith'),SOUNDEX('Smythe')

--12 Space() ---
SELECT *FROM HumanResources.Department
SELECT 'FIRSTNAME' +SPACE(5)+'LASTNAME'

--13 STR()--
SELECT STR(123.45, 6, 2); 
--14 STUFF()-----
SELECT *FROM HumanResources.Department
SELECT Name,STUFF(Name,1,3,'HELLO') FROM HumanResources.Department
---15 str Method------
SELECT *FROM HumanResources.Department
SELECT  Name ,SUBSTRING(Name,1,10) FROM HumanResources.Department
---16 REVERCE METHOD------
SELECT *FROM HumanResources.Department
SELECT GroupName,REVERSE(GroupName) FROM HumanResources.Department
---16 RAPLICATE  METHOD------
SELECT *FROM HumanResources.Department
SELECT GroupName,REPLICATE(GroupName,2) AS 'REPLICATE' FROM HumanResources.Department
-------------------Date Function-------------------------
SELECT GETDATE()
SELECT SYSDATETIME()
SELECT SYSUTCDATETIME()
SELECT *FROM HumanResources.Department
SELECT YEAR(ModifiedDate)AS 'YEAR' ,MONTH(ModifiedDate) AS 'MONTH',DAY(ModifiedDate) AS DAY FROM HumanResources.Department
SELECT DATEPART(YEAR,ModifiedDate),DATEPART(MONTH,ModifiedDate)+2,DATEPART(DAY,ModifiedDate),DATEPART(MILLISECOND,ModifiedDate) FROM HumanResources.Department
SELECT DATENAME(YEAR,ModifiedDate)AS'YEAR',DATENAME(MONTH,ModifiedDate) AS'MONTH',DATENAME(DAY,ModifiedDate)AS'Day' FROM HumanResources.Department
SELECT DATEDIFF(YEAR,ModifiedDate,GETDATE())FROM HumanResources.Department

SELECT DATEADD(DAY,31,'2000-01-01') 
SELECT DATEADD(YEAR,-2147, '21');