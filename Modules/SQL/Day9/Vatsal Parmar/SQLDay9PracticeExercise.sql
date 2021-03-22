/*** Day 9 Practice Exercise ***/
-- Batch

SELECT BusinessEntityID FROM HumanResources.Employee;
SELECT DepartmentID,[Name] FROM HumanResources.Department
GO

-- Variables

DECLARE @Rate INT 
SELECT @Rate = MAX(Rate) 
FROM HumanResources.EmployeePayHistory
PRINT @Rate
GO

--IF-ELSE

DECLARE @Rate MONEY
SELECT @Rate = Rate FROM
HumanResources.EmployeePayHistory
WHERE BusinessEntityID = 23
IF @Rate < 15
PRINT 'Review of the rate is required'
ELSE
BEGIN
PRINT 'Review of the rate is not required'
PRINT 'Rate = '
PRINT @Rate
END
GO

-- CASE STATEMENT

SELECT BusinessEntityID,'Marital Status' =
CASE MaritalStatus
	WHEN 'M' THEN 'Married'
	WHEN 'S' THEN 'Single'
	ELSE 'Not Specified'
END
FROM HumanResources.Employee
GO

-- WHILE

WHILE (SELECT AVG(ListPrice) FROM Production.Product) <
$300
BEGIN
	UPDATE Production.Product
		SET ListPrice = ListPrice * 2
	SELECT MAX(ListPrice) FROM Production.Product
	IF (SELECT MAX(ListPrice) FROM Production.Product) >
$500
		BREAK
	ELSE
		CONTINUE
END
PRINT 'Too much for the market to bear';

-- Processing JSON
-- ISJSON

DECLARE @param NVARCHAR(MAX)
SET @param = '[
	{"id":1,"Name":"John"},
	{"id":2,"Name":"John"}
]'
IF (ISJSON(@param) > 0)  
BEGIN  
     PRINT @param
END
GO

-- JSON_VALUE

DECLARE @param NVARCHAR(MAX)
SET @param = '{"Info":[
	{"id":1,"Name":"John"},
	{"id":2,"Name":"Doe"}
]}'
PRINT JSON_VALUE(@param,'$.Info[0].Name')
GO

-- JSON_QUERY

DECLARE @param NVARCHAR(MAX)
SET @param = '{"Info":[
	{"id":1,"Name":"John"},
	{"id":2,"Name":"Doe"}
]}'
SELECT JSON_QUERY(@param,'$.Info') AS 'JSON Object';
GO

-- JSON_MODIFY

DECLARE @param NVARCHAR(MAX)
SET @param = '{"Info":[
	{"id":1,"Name":"John"},
	{"id":2,"Name":"Doe"}
]}'
-- Update name 
SET @param = JSON_MODIFY(@param,'$.Info[0].Name','Vatsal')
PRINT @param
-- Insert surname
SET @param = JSON_MODIFY(@param,'$.Info[0].Surname','Parmar')
PRINT @param
-- Delete name
SET @param = JSON_MODIFY(@param,'$.Info[0].Surname',NULL)
PRINT @param
GO

-- Convert JSON collections to a rowset
--OPEN JSON

DECLARE @param VARCHAR(MAX)
SET @param = '[
	{"id":1,"Name":"John"},
	{"id":2,"Name":"Doe"}
]'
SELECT * FROM OPENJSON(@param)
	WITH(
		Id INT '$.id',
		[Name] VARCHAR(50) '$.Name'
	)

-- Convert SQL Server data to JSON or export JSON
-- FOR JSON PATH

SELECT DepartmentID,[Name] 'Department Name'
FROM HumanResources.Department
FOR JSON PATH;

-- FOR JSON AUTO

SELECT DepartmentID,[Name] 'Department Name'
FROM HumanResources.Department
FOR JSON AUTO;

-- WITHOUT_ARRAY_WRAPPER

SELECT DepartmentID,[Name] 'Department Name'
FROM HumanResources.Department WHERE DepartmentID=1
FOR JSON PATH, WITHOUT_ARRAY_WRAPPER;