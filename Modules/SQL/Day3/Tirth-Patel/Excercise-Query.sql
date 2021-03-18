USE AdventureWorks2012

SELECT CONCAT('HEllo','SQL')

SELECT CONCAT(Name ,' Costs' , ListPrice) AS 'prices'
FROM Production.Product
WHERE ListPrice > 100

SELECT Name +' Costs' + CAST(ListPrice AS nvarchar) AS  'PRICES' 
	FROM Production.Product


SELECT TRY_PARSE('121/2/2021' AS date )

SELECT CHOOSE(3,FirstName,LastName, FirstName + ' ' +LastName)  AS 'NAME'
FROM Person.Person

SELECT ASCII('c')

SELECT CHAR(99)

SELECT CHARINDEX ('T' ,'pqrqrqrqrT',10)

DECLARE @d DATETIME = '01/02/2012'
SELECT FORMAT(@d,'yy','en-US')

SELECT LEFT ('MICROSOFT SQL SERVER 2018',10)

SELECT RIGHT ('MICROSOFT SQL SERVER 2018',4)

SELECT LEN ('HELLO SQL')

SELECT LOWER ('UPPERCASE')

SELECT LTRIM('     HELLO    ')

SELECT RTRIM('HELLO    ')

SELECT CHARINDEX('search','Hello sql SEARCH igonre')

SELECT PATINDEX('%search%','Hello sql SEARCH igonre')

SELECT REPLACE('hello world of java','java','SQL')

SELECT SPACE(10) + 'hello'

SELECT STR(100)

SELECT REPLICATE(' hello ',5)

SELECT REVERSE('reverse')

SELECT GETDATE()
select GETUTCDATE()

SELECT SUBSTRING(DATENAME(MONTH ,CONVERT(DATETIME,'2020/12/2')),1,3)

SELECT DAY('1999-1-05')

SELECT BusinessEntityID , DATENAME(mm,HireDate) + ', ' +
					CONVERT(varchar,DATEPART(yyyy,hiredate)) AS 'joining-date'
FROM HumanResources.Employee

SELECT BusinessEntityID ,CONCAT( DATENAME(mm,HireDate),', ',DATEPART(yyyy,hiredate)) 
					AS 'joining-date'
FROM HumanResources.Employee

SELECT DATENAME(mm,GETDATE()) + SPACE(1) + CAST(DATEPART(dd,GETDATE()) AS nvarchar) + ', ' +
				CAST(DATEPART(YYYY,GETDATE()) AS nvarchar)

SELECT LoginID ,HireDate , DATEDIFF(DAY,HireDate,GETDATE()) [experience]
FROM HumanResources.Employee

SELECT DATEFROMPARTS (1999,12,05)

SELECT EOMONTH('2024-02-2') END_of_month_feb2024

SELECT CEILING(14.50)

SELECT FLOOR(14.50)

SELECT POWER(2,2)

SELECT ROUND(15.25623232,2)

SELECT BusinessEntityID , 'hourly pay rate' = ROUND(Rate,2)
				
FROM HumanResources.EmployeePayHistory

SELECT HOST_ID() as'host'
SELECT HOST_NAME()

--//system function

USE AdventureWorks2012;  
GO  
UPDATE HumanResources.Employee   
SET JobTitle = N'Executive'  
WHERE NationalIDNumber = 123456789  
IF @@ROWCOUNT = 0  
PRINT 'Warning: No rows were updated mesasge by me';  
GO  


CREATE TABLE myTable (column1 INT, column2 VARCHAR(256));  
GO  
INSERT INTO myTable VALUES (1, 'test');  
GO  
SELECT BINARY_CHECKSUM(*) from myTable;  
GO  
UPDATE myTable set column2 = 'TEST';  
GO  
SELECT BINARY_CHECKSUM(*) from myTable;  
GO  


ALTER TABLE Production.Product  
ADD cs_Pname AS CHECKSUM(Name);  
GO  
CREATE INDEX Pname_index ON Production.Product (cs_Pname);  
GO  

SELECT name,
		cs_Pname  
FROM Production.Product

SELECT GETANSINULL('AdventureWorks2012')  


SELECT Weight
FROM Production.Product
SELECT AVG(ISNULL(Weight, 0))  
FROM Production.Product;  
SELECT AVG(Weight)  
FROM Production.Product; 

USE master;  
GO  
SELECT name, ISNUMERIC(name) AS IsNameANumber ,name, database_id, ISNUMERIC(database_id) AS IsIdANumber   
FROM sys.databases;  
GO  

SELECT GETANSINULL('AdventureWorks2012') 
--it means DB allows NULL values