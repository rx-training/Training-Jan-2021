CREATE TRIGGER SIXTH_TGR
ON DATABASE
FOR DROP_TABLE , ALTER_TABLE
AS
	PRINT 'YOU must be disable trigger sixth_tgr to drop or alter tables!'
	ROLLBACK
