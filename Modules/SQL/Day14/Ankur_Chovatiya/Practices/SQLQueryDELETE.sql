CREATE TRIGGER MY_SECOND_TGR
ON HumanResources.Department
FOR DELETE 
AS
	PRINT 'Deletion of the department is not allowed'
	ROLLBACK TRANSACTION
	RETURN


SELECT * FROM HumanResources.Department

DELETE FROM HumanResources.Department WHERE DepartmentID = 5