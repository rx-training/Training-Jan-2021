-- practice of if else

USE AdventureWorks2012
-- If else 
DECLARE @Rate money
SELECT @Rate = Rate 
FROM HumanResources.EmployeePayHistory
WHERE BusinessEntityID =23

IF @Rate < 15
	PRINT 'Review of the rate is required'
ELSE 
	BEGIN
	PRINT 'Review of the rate is not required'
	PRINT 'Rate = '
	Print @Rate
END
GO

-- Case statment
SELECT BusinessEntityID, 
	'MaritalStatus'= 
		CASE MaritalStatus	
			WHEN 'M' THEN 'Married'
			WHEN 'S' THEN 'Single'
			ELSE 'Not Specified'
		END
FROM HumanResources.Employee
GO

-- While statement

WHILE (SELECT AVG(ListPrice) FROM Production.Product)< $300
BEGIN 
	UPDATE Production.Product
		SET ListPrice = ListPrice * 2
	SELECT MAX(ListPrice) FROM Production.Product
	IF(SELECT MAX(ListPrice) FROM Production.Product) > $500
		BREAK
	ELSE
		CONTINUE
END
PRINT 'Too much for the market to bear';

------------------------------------------------------------------------------------------------------------------------------------------------
-- JSON

-- converting json data to rows
Use master
DECLARE @json NVARCHAR(MAX);
SET @json = N'[
	{"id" : 1, "Name" : "john"},
	{"id" : 2, "Name" : "Rita"}
	]';
SELECT * 
FROM OPENJSON(@json)
	WITH (
		Id INT '$.id',
		Name VARCHAR(50)'$.Name'
	)	

------------------------------------------------------------------------------------------------------------------------------------------------
-- JSON_VALUE

DECLARE @jsonInfo NVARCHAR(MAX)

SET @jsonInfo=N'{  
     "info":{    
       "type":1,  
       "address":{    
         "town":"Bristol",  
         "county":"Avon",  
         "country":"England"  
       },  
       "tags":["Sport", "Water polo"]  
    },  
    "type":"Basic"  
 }'

SELECT FirstName, 
	LastName, 
	JSON_VALUE(@jsonInfo, '$.info.address[0].town')'Town'
FROM Person.Person
WHERE JSON_VALUE(@jsonInfo, '$.info.address[0].state') LIKE 'US%'
ORDER BY JSON_VALUE(@jsonInfo, '$.info.address[0].town');
-----------------------------------------------------
DECLARE @jsonInfo NVARCHAR(MAX)
DECLARE @town NVARCHAR(32)

SET @jsonInfo = N'{
				"info":{
					"address":[
						{"town":"Paris"}, 
						{"town":"London"}
					]	
				}
			}';
SET @town = JSON_VALUE(@jsonInfo, '$.info.address[0].town'); -- Paris
SET @town = JSON_VALUE(@jsonInfo, '$.info.address[1].town'); -- London

PRINT @town

------------------------------------------------------------------------------------------------------------------------------------------------
-- Format Query Results AS JSON with FOR JSON(SQL SERVER)

--Using PATH
SELECT FirstName +' '+LastName [Name.FirstName], 
	MiddleName 'Name.MiddleName'
FROM Person.Person
FOR JSON PATH, ROOT('Names')

--Using AUTO 
SELECT FirstName +' '+LastName [Name.FirstName], 
	MiddleName 'Name.MiddleName'
FROM Person.Person
FOR JSON AUTO

-- Using WITHOUT_ARRAY_WRAPPER
SELECT FirstName +' '+LastName [Name.FirstName], 
	MiddleName 'Name.MiddleName'
FROM Person.Person
FOR JSON PATH,WITHOUT_ARRAY_WRAPPER

------------------------------------------------------------------------------------------------------------------------------------------------
-- JSON_Modify

DECLARE @info NVARCHAR(100)='{
						"name":"john",
						"skills":["C#","SQL"]
						}'
						
-- Multiple updates
SET @info = JSON_MODIFY(JSON_MODIFY(JSON_MODIFY(@info, '$.name','Mike'), '$.surname', 'Smith'), 'append $.skills', 'Azure')
PRINT @info

-- Update Name
SET @info = JSON_MODIFY(@info, '$.name', 'Mike');

-- Insert surname
SET @info = JSON_MODIFY(@info, '$.surname', 'Smith')

-- Delete Name
SET @info = JSON_MODIFY(@info, '$.name', NULL)

-- Add skills
SET @info = JSON_MODIFY(@info, 'append $.skills', 'Azure')
PRINT @info
--------------------------------------------------
--Rename a key
DECLARE @product NVARCHAR(100) = '{"price":49.99}'

SET @product = 
	JSON_MODIFY(
		JSON_MODIFY(@product, '$.Price', CAST(JSON_VALUE(@product, '$.price') AS NUMERIC(4,2))),
		'$.price', 
		NULL
	)
PRINT @product
--------------------------------------------------

DECLARE @product NVARCHAR(100)='{"price":49.99}'

PRINT @product

-- Rename property  

SET @product=
 JSON_MODIFY(
  JSON_MODIFY(@product,'$.Price',CAST(JSON_VALUE(@product,'$.price') AS NUMERIC(4,2))),
  '$.price',
  NULL
  )

PRINT @product

--------------------------------------------------------------------------------------------------------------------------------------------------------
-- ISJSON()
-- Created table families
CREATE TABLE Families (
   id int identity constraint PK_JSON_ID primary key,
   doc nvarchar(max)
)

INSERT INTO Families (doc) VALUES 
('{
  "id": "WakefieldFamily",
  "parents": [
      { "familyName": "Wakefield", "givenName": "Robin" },
      { "familyName": "Miller", "givenName": "Ben" }
  ],
  "children": [
      {
        "familyName": "Merriam",
        "givenName": "Jesse",
        "gender": "female",
        "grade": 1,
        "pets": [
            { "givenName": "Goofy" },
            { "givenName": "Shadow" }
        ]
      },
      { 
        "familyName": "Miller",
         "givenName": "Lisa",
         "gender": "female",
         "grade": 8 }
  ],
  "address": { "state": "NY", "county": "Manhattan", "city": "NY" },
  "creationDate": 1431620462,
  "isRegistered": false
}')

SELECT *
FROM Families
WHERE ISJSON(doc) > 0
GO

--------------------------------------------------------------------------------------------------------------------------------------------------------
-- JSON_VALUE
SELECT JSON_VALUE(f.doc, '$.id')  AS Name, 
       JSON_VALUE(f.doc, '$.address.city') AS City,
       JSON_VALUE(f.doc, '$.address.county') AS County
FROM Families f 
WHERE JSON_VALUE(f.doc, '$.id') = N'WakefieldFamily'
ORDER BY JSON_VALUE(f.doc, '$.address.city') DESC, JSON_VALUE(f.doc, '$.address.state') ASC
GO

--------------------------------------------------------------------------------------------------------------------------------------------------------
-- JSON_QUERY
SELECT JSON_QUERY(f.doc, '$.address') AS Address,
       JSON_QUERY(f.doc, '$.parents') AS Parents,
       JSON_QUERY(f.doc, '$.parents[0]') AS Parent0
FROM Families f 
WHERE JSON_VALUE(f.doc, '$.id') = N'WakefieldFamily'
GO