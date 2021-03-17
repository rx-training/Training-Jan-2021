DECLARE @Rate MONEY

SELECT @Rate = RATE  FROM HumanResources.EmployeePayHistory
WHERE BusinessEntityID = 23
IF @Rate < 15
PRINT 'Review of the rate is required'
ELSE 
BEGIN
PRINT 'Review of the rate is not required'
PRINT @RATE 
END
GO