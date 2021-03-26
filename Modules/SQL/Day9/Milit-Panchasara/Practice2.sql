--showing json array in column using AS JSON (datatype has to be nvarchar)

DECLARE @json varchar(MAX) = N'[
  {
    "name": "John",
    "skills": ["SQL", "C#", "Azure"]
  },
  {
    "name": "Jane",
    "surname": "Doe"
  }
]'

SELECT * FROM
OPENJSON(@json) 
WITH
(	
	name varchar(100),
	surname varchar(100) '$.surname',
	skills nvarchar(max) '$.skills' AS JSON
)
GO
---------------------------------------------------

-- joining sub array from json
DECLARE @json NVARCHAR(MAX);
SET @json = N'[  
  {"id": 2, "info": {"name": "John", "surname": "Smith"}, "age": 25},
  {"id": 5, "info": {"name": "Jane", "surname": "Smith", "skills": ["SQL", "C#", "Azure"]}, "dob": "2005-11-04T12:00:00"}  
]';

SELECT *  
FROM OPENJSON(@json)  
  WITH (
    id INT 'strict $.id',
    firstName NVARCHAR(50) '$.info.name',
    lastName NVARCHAR(50) '$.info.surname',  
    age INT,
    dateOfBirth DATETIME2 '$.dob',
    skills NVARCHAR(MAX) '$.info.skills' AS JSON
  )
OUTER APPLY OPENJSON(skills)
  WITH (skill NVARCHAR(8) '$');
GO

-- ISJSON() function
DECLARE @json varchar(MAX) = N'[
  {
    "name": "John",
    "skills": ["SQL", "C#", "Azure"]
  },
  {
    "name": "Jane",
    "surname": "Doe"
  }
]'

SELECT ISJSON(@json) AS IsJsonFunction
GO

DECLARE @json varchar(MAX) = N'[
  {
    "name": "John"]'

SELECT ISJSON(@json) AS IsJsonFunction
GO

--JSON_VALUE() & JSON_QUERY() function
DECLARE @json varchar(MAX) = N'[
  {
    "name": "John",
    "skills": ["SQL", "C#", "Azure"]
  },
  {
    "name": "Jane",
    "surname": "Doe"
  }
]'

SELECT JSON_VALUE(@json, '$[0].skills[0]') AS ValueFromJSON;
SELECT JSON_query(@json, '$[0].skills') AS ValueFromJSON; --can print whole array, json_value cant show array
GO

-- JSON_MODIFY() function

DECLARE @info NVARCHAR(100)='{"name":"John","skills":["C#","SQL"]}'
PRINT @info

-- Update name  
SET @info=JSON_MODIFY(@info,'$.name','Mike')
PRINT @info

-- Insert surname  
SET @info=JSON_MODIFY(@info,'$.surname','Smith')
PRINT @info

-- Delete name  
SET @info=JSON_MODIFY(@info,'$.name',NULL)
PRINT @info

-- Add skill  
SET @info=JSON_MODIFY(@info,'append $.skills','Azure')
PRINT @info

-- Update skills array  
SET @info=JSON_MODIFY(@info,'$.skills',JSON_QUERY('["C#","T-SQL","Azure"]')) --use JSON_QUERY() to update json data, otherwise it'll store as a plain text
PRINT @info