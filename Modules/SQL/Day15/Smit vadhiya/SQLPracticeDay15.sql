USE AdventureWorks2012;  
GO  
BEGIN  TRANSACTION MYTRANSACTION
	DECLARE @Total INT
	SELECT @Total = COUNT(*) FROM HumanResources.JobCandidate
	DELETE HumanResources.JobCandidate  WHERE JobCandidateID = 10;  
	PRINT @Total
	IF @Total > 5
	BEGIN
		PRINT 'COMMIT'	
		COMMIT Transaction
	END
	ELSE
	BEGIN
		PRINT 'ROLLBACK'
		ROLLBACK Transaction MYTRANSACTION
	END

GO 
select COUNT(*) from HumanResources.JobCandidate

SELECT * FROM HumanResources.Employee

