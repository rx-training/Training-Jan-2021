CREATE FUNCTION PF_CAL (@SALARY INT)
RETURNS INT
AS
BEGIN
	DECLARE  @PF INT
	SET @PF = @SALARY * 0.12
	RETURN @PF 
END

	DECLARE @ANS INT
	SET @ANS = DBO.PF_CAL(8000)

	PRINT @ANS