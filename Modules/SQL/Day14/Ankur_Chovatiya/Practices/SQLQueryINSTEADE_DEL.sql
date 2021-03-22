CREATE TRIGGER FIFTH_TGR
ON HumanResources.JobCandidate
INSTEAD OF DELETE
AS 
	PRINT 'Records cannot deleted'


SELECT * FROM HumanResources.JobCandidate

DELETE FROM HumanResources.JobCandidate WHERE JobCandidateID = 7 