
DECLARE @info NVARCHAR(100)='{"name":"John","skills":["C#","SQL"]}'

PRINT @info

SET @info=JSON_MODIFY(@info,'$.name','Mike')

PRINT @info

SET @info=JSON_MODIFY(@info,'append $.skills','Azure')

PRINT @info