USE AdventureWorks2012;

DECLARE @Rate int 
SELECT @Rate =AVG(Rate) FROM HumanResources.EmployeePayHistory;
PRINT @Rate

DECLARE @Rate money
SELECT @Rate = Rate FROM HumanResources.EmployeePayHistory WHERE BusinessEntityID = 21;
IF @Rate < 20
PRINT 'RATE'
ELSE
BEGIN
PRINT 'RATE='
PRINT @Rate
END
GO


DECLARE @Rate int
SET @Rate = 8
IF (@Rate) > 60
BEGIN
	PRINT 'Rate is more'
END
ELSE
BEGIN
	IF (@Rate < 10)
		PRINT 'Rate is less'
	ELSE
		PRINT 'Rate is medium'
END
GO

SELECT 'Marital Status' = CASE MaritalStatus 
	WHEN 'M' THEN 'Married'
	WHEN 'S' THEN 'Single'
	ELSE 'Not specified'
END
FROM HumanResources.Employee;

SELECT * FROM HumanResources.EmployeePayHistory
WHILE(SELECT AVG(Rate) FROM HumanResources.EmployeePayHistory) < 25
BEGIN
UPDATE HumanResources.EmployeePayHistory SET Rate = Rate * 2
	IF(SELECT MAX(Rate) FROM HumanResources.EmployeePayHistory) > 25
		BREAK
	ELSE
		CONTINUE
	END
	PRINT 'Rate is printed'
GO

ALTER TABLE HumanResources.EmployeePayHistory DROP CONSTRAINT CK_EmployeePayHistory_Rate ;

USE master;
DECLARE @JSON varchar(MAX)
SET @JSON = N'[{"ID":1,"Name":"Karan"},{"ID":2,"Name":"Raj"},{"ID":3,"Name":"James"}]'
SELECT * FROM OPENJSON(@JSON) WITH (ID int '$.ID', Name varchar(MAX) '$.Name');

USE AdventureWorks2012;

SELECT DepartmentID AS 'JSONID', Name AS 'JSONNAME' FROM HumanResources.Department;

USE master;
DECLARE @JSON2 varchar(MAX)
SET @JSON2='[{"ID":1,"Name":"Karan"},{"ID":2,"Name":"Raj"},{"ID":3,"Name":"James"}]'
SELECT * FROM OPENJSON(@JSON2) WITH (ID int '$.ID', Name varchar(20) '$.Name');


DECLARE @JSON3 nvarchar(100)='{"ID":1,"Name":"Karan"}'
SET @JSON3 = JSON_MODIFY(@JSON3, '$.Name', 'Task')
PRINT @JSON3;


DECLARE @JSON4 NVARCHAR(MAX)
DECLARE @JSON5 NVARCHAR(50)

SET @JSON4 = N'{"info":{"address":[{"town":"Ahmedabad"}]}}';
SET @JSON5 = JSON_VALUE(@JSON4, '$.info.address[0].town');
PRINT @JSON5
GO