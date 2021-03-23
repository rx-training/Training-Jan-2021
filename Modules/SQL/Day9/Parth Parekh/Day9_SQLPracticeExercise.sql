-- Batch
SELECT * FROM HumanResources.Department
SELECT * FROM HumanResources.Employee
GO
-- Variable
USE AdventureWorks2012
DECLARE @Rate int
SELECT @Rate = max(Rate)
FROM HumanResources.EmployeePayHistory
PRINT @RATE
GO

-- IF-Else Example
DECLARE @Rate money
SELECT @Rate = Rate
FROM HumanResources.EmployeePayHistory
WHERE BusinessEntityID = 23
IF @Rate < 15
PRINT 'Review of the rate is required'
ELSE 
BEGIN 
PRINT 'Review of the rate is not required  '
PRINT 'Rate =' 
PRINT @Rate
END 
GO

-- Case Statement 
SELECT  BusinessEntityID , 'Marital Status ' = 
CASE MaritalStatus
     WHEN 'M' THEN 'Married'
	 WHEN 'S' THEN 'Single'
	 ELSE 'Not Specified'
END 
FROM HumanResources.Employee
GO

-- WHILE Statment
WHILE (SELECT AVG(ListPrice) FROM Production.Product )< $300
BEGIN 
	UPDATE Production.Product
	    SET ListPrice = ListPrice * 2 
		SELECT MAX(ListPrice) FROM Production.Product 
		IF (SELECT MAX(ListPrice) FROM Production.Product) > $500
		    BREAK
		ELSE
		   CONTINUE
END 
PRINT 'Too Much For The Market To Bear'

-- ISJSON(expression)
DECLARE @param nvarchar(max)
SET @param =' {"Info": [ 
	{ "Name": "Parth" , "Age" : "21"  } ,
	{ "Name": "Pah" , "Age" : "22"}
				
]}'

IF (ISJSON(@param) > 0)  
BEGIN  
	 PRINT @param
END

-- JSON_VALUE(expression , path )
SELECT JSON_VALUE(@param, '$.Info[0].Name') AS 'NAME'

-- JSON_QUERY(expression [,path])

DECLARE @param varchar(max)
SET @param =' {"Info": [ 
	{ "Name": "Parth" , "Age" : "21"  } ,
	{ "Name": "Pah" , "Age" : "22"}
				
]}'
SELECT JSON_QUERY(@param , '$.Info') AS 'INFO Object'


-- JSON_MODIFY (expression , path , newvalue)
DECLARE @param varchar(max)
SET @param =' {"Info": [ 
	{ "Name": "Parth" , "Age" : "21"  } ,
	{ "Name": "Pah" , "Age" : "22"}
				
]}'
SET @param = JSON_MODIFY(@param , '$.Info[0].Name' , 'rth')
PRINT @param

-- Insert surname  
SET @param = JSON_MODIFY(@param,'$.surname','Parekh')
PRINT @param

-- Delete name  
SET @param = JSON_MODIFY(@param,'$.Info[0].Name',NULL)
PRINT @param

-- OPENJSON
DECLARE @Json nvarchar(max)
SET @Json = N'[
	{ "id" : 1 ,"Name" : "PArth"},
	{ "id" : 2 ,"Name" : "Parekh"}
]'
SELECT * FROM OPENJSON(@Json) WITH (
id INT '$.id' , Name NVARCHAR(50) '$.Name'
)

--FOR JSON PATH
SELECT  DepartmentID, NAME AS 'Department Name' FROM HumanResources.Department FOR JSON PATH 

--FOR JSON AUTO
SELECT  DepartmentID, NAME AS 'Department Name' FROM HumanResources.Department FOR JSON AUTO 

--WITHOUT_ARRAY_WRAPPER
SELECT  DepartmentID, NAME AS 'Department Name' FROM HumanResources.Department FOR JSON PATH  , WITHOUT_ARRAY_WRAPPER



