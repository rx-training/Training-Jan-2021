DECLARE @info NVARCHAR(100)='{"name":"John","skills":["C#","SQL"]}'

PRINT @info

-- Multiple updates  

SET @info=JSON_MODIFY(JSON_MODIFY(JSON_MODIFY(@info,'$.name','Mike'),'$.surname','Smith'),'append $.skills','Azure')

PRINT @info

set @info = JSON_MODIFY(@info , '$.name' , 'mike')

DECLARE @info NVARCHAR(100)='{"name":"John","skills":["C#","SQL"]}'

SET @info = JSON_MODIFY(JSON_MODIFY(@info ,'$.First_name',CAST(JSON_VALUE(@info,'$.name') AS varchar(50))), '$.name' , NULL)

PRINT @info