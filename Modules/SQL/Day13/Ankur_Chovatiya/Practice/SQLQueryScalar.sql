
-- Scalar function

CREATE FUNCTION fun_first (@num int)
RETURNS int
AS
BEGIN 
	DECLARE @SUM INT
	SET @SUM = @num + @num +@num
	RETURN @SUM
END

DECLARE @ANS INT
SET @ANS = dbo.fun_first (15)
PRINT @ANS