-- WHILE
DECLARE @count int = 101;

WHILE @count < 200
BEGIN
	SET @count = @count + 1;
END
SELECT @count as LastCount;

GO

-- IF-ELSE
DECLARE @count int = 100; --even

IF @count % 2 = 0
	SELECT 'even' as 'Type';
ELSE
	SELECT 'odd' as 'Type';
PRINT @count;

SET @count = 103; --odd

IF @count % 2 = 0
	SELECT 'even' as 'Type';
ELSE
	SELECT 'odd' as 'Type';
PRINT @count;

GO