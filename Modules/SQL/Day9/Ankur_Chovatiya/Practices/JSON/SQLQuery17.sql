DECLARE @Json NVARCHAR(MAX)
SET @Json = N'[
  {
    "name": "John",
    "skills": ["SQL", "C#", "Azure"]
  },
  {
    "name": "Jane",
    "surname": "Doe"
  }	
  ]'

SELECT * FROM OPENJSON(@Json)
	WITH (
		NAME VARCHAR(20) '$.name',
		
		surname varchar(20) '$.surname',
		skills nvarchar(max) '$.skills' as json
	)

	outer apply openjson(skills)
		with
		(
		skill nvarchar(20) '$'
		)


--SELECT ISJSON(@Json)

SELECT JSON_VALUE(@Json , '$.name')
SET @Json = JSON_MODIFY(@Json , '$.surname' , 'Anks');
SELECT MODIFIEDJSON = @Json	



