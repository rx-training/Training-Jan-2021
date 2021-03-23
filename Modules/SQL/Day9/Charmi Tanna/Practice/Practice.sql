CREATE DATABASE BATCHES
USE BATCHES
-->DECLARING A VARIABLE USING BATCH
USE AdventureWorks2012
SELECT * FROM HumanResources.Employee
SELECT * FROM HumanResources.EmployeePayHistory
-->DECLARING A VARIABLE USING BATCH
DECLARE @Rate INT
SELECT MAX(Rate)FROM HumanResources.EmployeePayHistory
GO
-->SETTING A VARIABLE USING BATCH
DECLARE @Rate INT
SELECT @Rate = MAX(Rate) FROM HumanResources.EmployeePayHistory 
GO
-->PRINT VARIABLE USING BATCH
DECLARE @Rate INT
SELECT @Rate = MAX(Rate) FROM HumanResources.EmployeePayHistory 
PRINT @Rate
GO
-->IF STATEMENT IN BATCH
DECLARE @Rate MONEY
SELECT @Rate = Rate FROM HumanResources.EmployeePayHistory 
WHERE BusinessEntityID = 27
IF @Rate < 15
PRINT 'Review Of Rate IS Required'
ELSE 
BEGIN
PRINT'Review Of Rate IS Not Required'
PRINT 'Rate='
PRINT @Rate
END 
GO
-->CASE STATEMENT IN BATCH
SELECT BusinessEntityID,JobTitle,'Marital Status'=
CASE MaritalStatus
	WHEN  'M' THEN 'Married'
	WHEN 'S' THEN 'Single'
	ELSE 'Not Specified'
	END
FROM HumanResources.Employee 
GO
-->
SELECT * FROM Production.Product
-->WHILE STATEMENT IN BATCH
WHILE(SELECT AVG(SafetyStockLevel) FROM Production.Product) >500
BEGIN 
UPDATE Production.Product 
SET SafetyStockLevel =SafetyStockLevel * 3
SELECT MAX(SafetyStockLevel) FROM Production.Product
IF (SELECT MAX(SafetyStockLevel)FROM Production.Product)>1500
BREAK
ELSE 
CONTINUE
END
-->OPEN JSON
DECLARE @json NVARCHAR(MAX)
SET @json = N'[
{"Id":1,"Name":"ABC"},
{"Id":2,"Name":"XYZ"}
]'
SELECT * FROM OPENJSON(@json)
WITH(
Id INT '$.Id',
Name NVARCHAR(50) '$.Name');


SELECT compatibility_level
FROM sys.databases
WHERE name = 'BATCHES';
-->Convert SQL Server data to JSON or export JSON
USE AdventureWorks2012 
SELECT compatibility_level
FROM sys.databases
WHERE name = 'AdventureWorks2012';

ALTER DATABASE AdventureWorks2012 
SET COMPATIBILITY_LEVEL = 150;

SELECT * FROM HumanResources.Employee
-->Convert SQL Server data to JSON or export JSON FOR JSON PATH
SELECT BusinessEntityID AS 'BID' , BirthDate AS 'BOD' , HireDate AS 'HDATE' FROM HumanResources.Employee FOR JSON PATH;
-->Convert SQL Server data to JSON or export JSON FOR JSON AUTO
SELECT BusinessEntityID AS 'BID' , BirthDate AS 'BOD' , HireDate AS 'HDATE' FROM HumanResources.Employee FOR JSON AUTO;
-->Convert SQL Server data to JSON or export JSON FOR WITHOUT_ARRAY_WRAPPER
SELECT 2015 as year, 12 as month, 15 as day FOR JSON PATH, WITHOUT_ARRAY_WRAPPER 
SELECT BusinessEntityID AS 'BID' , BirthDate AS 'BOD' , HireDate AS 'HDATE' FROM HumanResources.Employee FOR JSON PATH, WITHOUT_ARRAY_WRAPPER;
-->ISJSON
DECLARE @json NVARCHAR(MAX)
SET @json = N'[
{"Id":1,"Name":"ABC"},
{"Id":2,"Name":"XYZ"}
]'
IF(ISJSON(@json)=1)
BEGIN 
PRINT 'This is JSON'
END
ELSE
BEGIN
PRINT 'This is NOT JSON'
END 
GO
-->JSON_VALUE
DECLARE @json NVARCHAR(MAX)
SET @json = N'{
"Employees":[
{"Id":1,"Name":"ABC"},
{"Id":2,"Name":"XYZ"}
]
}'
SELECT JSON_VALUE(@json , '$.Employees[0].Name') AS 'Name'

-->JSON_QUERY
DECLARE @json NVARCHAR(MAX)
SET @json = N'{
"Employees":[
{"Id":1,"Name":"ABC"},
{"Id":2,"Name":"XYZ"}
]
}'
SELECT JSON_QUERY(@json , '$.Employees') AS 'Name'

-->JSON_MODIFY
DECLARE @json NVARCHAR(MAX)
SET @json = N'{
"Employees":[
{"Id":1,"Name":"ABC"},
{"Id":2,"Name":"XYZ"}
]
}'
SET @json=JSON_MODIFY(@json,'$.Employees[0].Name','Smith')
PRINT @json
