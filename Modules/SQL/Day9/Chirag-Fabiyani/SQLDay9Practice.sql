

DECLARE @Rate int
SELECT @Rate = MAX(Rate)
FROM HumanResources.EmployeePayHistory
PRINT @Rate
GO



DECLARE @Rate money
SELECT @Rate = Rate
FROM HumanResources.EmployeePayHistory
WHERE BusinessEntityID = 4
IF @Rate < 15
PRINT 'Review of the rate is required'
ELSE
BEGIN
PRINT 'Review of the rate is not required'
PRINT 'Rate='
PRINT @Rate
END
GO



SELECT BusinessEntityID,
CASE MaritalStatus
	WHEN 'M' THEN 'Married'
	WHEN 'S' THEN 'Single'
	ELSE 'Not Specified'
END AS MaritalStatus
FROM HumanResources.Employee
GO



DECLARE @json NVARCHAR(MAX);
SET @json = '[
	{
		"id": 1,
		"Name": "John",
		"Subjects": ["c","c++"]
	},
	{
		"id": 2,
		"Name": "Rita",
		"Subjects": ["java","python"]
	}
]';

SELECT * FROM OPENJSON(@json)
	WITH(
		ID int '$.id',
		Name varchar(50) '$.Name',
		Subjects varchar(50) '$.Subjects'
	)

IF(ISJSON(@json)>0)
BEGIN
PRINT 'Hii'
END




DECLARE @jsonInfo NVARCHAR(MAX)

SET @jsonInfo=N'{  
     "info":{    
       "type":1,  
       "address":{    
         "town":"Bristol",  
         "county":"Avon",  
         "country":"England"  
       },  
       "tags":[101, "Water", "polo"]  
    },  
    "type":"Basic"  
 }' 

SELECT JSON_VALUE(@jsonInfo,'$.info.tags') AS town

DECLARE @j nvarchar(MAX)

SET @j = '{
	"a": "[1,2]",
	"b": [1, 2],
	"c": "hi"

}'

SELECT JSON_QUERY(@j,'$.b') AS Query



DECLARE @info NVARCHAR(100)='{"name":"John","skills":["C#","SQL"]}'

PRINT @info 

SET @info=JSON_MODIFY(@info,'$.name','Mike')

SET @info = JSON_MODIFY(@info,'append $.skills','Python')

PRINT @info


SELECT TOP 5   
       BusinessEntityID As Id,  
       FirstName, LastName,  
       Title As 'Info.Title',  
       MiddleName As 'Info.MiddleName'  
   FROM Person.Person  
   FOR JSON PATH


SELECT TOP 5   
       BusinessEntityID As Id,  
       FirstName, LastName,  
       Title As 'Info.Title',  
       MiddleName As 'Info.MiddleName'  
   FROM Person.Person  
   FOR JSON AUTO  


SELECT TOP 5   
       BusinessEntityID As Id,  
       FirstName, LastName,  
       Title As 'Info.Title',  
       MiddleName As 'Info.MiddleName'  
   FROM Person.Person  
   FOR JSON PATH, ROOT('info')


SELECT TOP 5   
       BusinessEntityID As Id,  
       FirstName, LastName,  
       Title As 'Info.Title',  
       MiddleName As 'Info.MiddleName'  
   FROM Person.Person  
   FOR JSON PATH, INCLUDE_NULL_VALUES


SELECT TOP 5   
       BusinessEntityID As Id,  
       FirstName, LastName,  
       Title As 'Info.Title',  
       MiddleName As 'Info.MiddleName'  
   FROM Person.Person  
   FOR JSON PATH, WITHOUT_ARRAY_WRAPPER