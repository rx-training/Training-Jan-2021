DECLARE @HOUR SMALLINT
SELECT @HOUR = MAX(VacationHours)
FROM HumanResources.Employee
SELECT @HOUR 
PRINT @HOUR
GO
--*********************************************************************************************************

DECLARE @JSON  VARCHAR(MAX)
SET @JSON = '[
	{"ID" : 1, "Name" : "Smit"},
	{"ID" : 2, "Name" : "Dhrumil"},
	{"ID" : 3,  "Name" : "Sahil"},
	{"ID" : 4, "Name" : "Preet"}
	]';
SELECT * 
FROM OPENJSON(@JSON) 
	WITH (
	ID INT '$.ID',Name VARCHAR(30) '$.Name'
)
GO

--*********************************************************************************************************

DECLARE @JSON2  VARCHAR(MAX)
SET @JSON2 = '[
  {
    "name": "John",
    "skills": ["SQL", "C#", "Azure"]
  },
  {
    "name": "Jane",
    "surname": "Doe"
  }
]';
SELECT * 
FROM OPENJSON(@JSON2) 
	WITH (
	ID VARCHAR(30) '$.name',Skills NVARCHAR(MAX) '$.skills' AS JSON,surname varchar(40) '$.surname'
)
GO

--*********************************************************************************************************

DECLARE @jsonInfo NVARCHAR(MAX)

SET @jsonInfo=N'[{  
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
 }]'  

 select JSON_VALUE(@jsonInfo,'$[0].info.address.country')
 GO

 --*********************************************************************************************************

 DECLARE @json NVARCHAR(MAX);
SET @json = N'[
  {"id": 2, "info": {"name": "John", "surname": "Smith"}, "age": 25},
  {"id": 5, "info": {"name": "Jane", "surname": "Smith"}, "dob": "2005-11-04T12:00:00"}
]';

SELECT *
FROM OPENJSON(@json)
  WITH (
    id INT ,
    firstName NVARCHAR(50) '$.info.name',
    lastName NVARCHAR(50) '$.info.surname',
    age INT,
    dateOfBirth DATETIME2 '$.dob'
  );
  go

 --*********************************************************************************************************

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
  GO

--*********************************************************************************************************

DECLARE @jsonInfo NVARCHAR(MAX)
DECLARE @NotJson NVARCHAR(MAX)
SET @NotJson = 'HELLO'
SET @jsonInfo = N'[{  
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
 }]'  

 select JSON_VALUE(@jsonInfo,'$[0].info.address.country'),
		JSON_QUERY(@jsonInfo,'$[0].info.tags'),
		ISJSON(@NotJson) 'NotJson',
		ISJSON(@jsonInfo) 'JsonInfo'

SET @jsonInfo = JSON_MODIFY(@jsonInfo,'$[0].info.address.country','India')
SET @jsonInfo = JSON_MODIFY(@jsonInfo,'append $[0].info.tags','Cricket')
PRINT @JSONINFO
select JSON_VALUE(@jsonInfo,'$[0].info.address.country'),
		JSON_QUERY(@jsonInfo,'$[0].info.tags'),
		ISJSON(@NotJson) 'NotJson',
		ISJSON(@jsonInfo) 'JsonInfo'
