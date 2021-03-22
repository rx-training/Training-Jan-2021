CREATE TRIGGER FORTH_TGR
ON HumanResources.Shift
AFTER DELETE 
AS
	PRINT 'Deletion sucessful'


SELECT * FROM HumanResources.Shift

DELETE FROM HumanResources.Shift WHERE Name = 'Day'