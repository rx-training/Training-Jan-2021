CREATE TRIGGER MY_THIRD_TGR
ON HumanResources.EmployeePayHistory
FOR UPDATE
AS
IF UPDATE(Rate)
BEGIN
	DECLARE @MY_VAR FLOAT
	SELECT @MY_VAR = AVG(RATE)
	FROM HumanResources.EmployeePayHistory
	IF(@MY_VAR > 20 )
	BEGIN
		PRINT 'The average value of rate is cannot be more then 20'
		ROLLBACK TRANSACTION
	END
END

UPDATE HumanResources.EmployeePayHistory
SET Rate = 800 WHERE BusinessEntityID = 4


SELECT * FROM HumanResources.EmployeePayHistory