USE AdventureWorks2012


--Declare Variable
DECLARE @rate INT

SELECT @rate = MAX(Rate)
FROM HumanResources.EmployeePayHistory

PRINT @rate
GO


--IF ELSE
DECLARE @rate MONEY

SELECT @rate = Rate 
FROM HumanResources.EmployeePayHistory
WHERE BusinessEntityID = 12
IF @rate < 15
	PRINT 'Review required'
ELSE
	BEGIN
	PRINT 'Review not required'
	PRINT 'Rate : '
	PRINT @rate
END
GO


--CASE 
SELECT  BusinessEntityID, 'Marital Status' = 
CASE MaritalStatus 
	WHEN 'M' THEN 'Married'
	WHEN 'S' THEN 'Single'
	ELSE 'Not specified'
END
FROM HumanResources.Employee
GO


--WHILE
WHILE(SELECT AVG(ListPrice) FROM Production. Product) < $300
BEGIN
	UPDATE Production.Product
	SET ListPrice = ListPrice * 2
	SELECT MAX(ListPrice) FROM Production.Product
	IF (SELECT MAX(ListPrice) FROM Production.Product) > $500
		BREAK
	ELSE
		CONTINUE
END
PRINT 'Too much for the market to bear'
GO


--JSON
DECLARE @json VARCHAR(MAX)
SET @json = '[
	{"id" : "1", "Name" : "Aaa"},
	{"id" : "2", "Name" : "Bbb"}
	]'

SELECT * INTO People
FROM OPENJSON(@json)
WITH
	(Id INT '$.id',
	Name VARCHAR(50) '$.Name')


--Export JSON
SELECT *
FROM People
FOR JSON PATH


--JSON Modify
DECLARE @json VARCHAR(MAX)
SET @json = '{"info": 
	{"address": 
		[
			{"town": "Belgrade"}, 
			{"town": "Paris"}, 
			{"town":"Madrid"}
		]
	}}'
SET @json = JSON_MODIFY(@json, '$.info.address[1].town', 'London')
SELECT @json


--JSON_VALUE
DECLARE @town VARCHAR(32)
SET @town=JSON_VALUE(@json,'$.info.address[0].town')
SET @town=JSON_VALUE(@json,'$.info.address[1].town')
PRINT @town

