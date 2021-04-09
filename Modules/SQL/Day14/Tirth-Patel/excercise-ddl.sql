--DDL triggers
	
	CREATE TRIGGER safety
	ON database
	FOR DROP_TABLE , ALTER_TABLE 
	AS 
		PRINT 'NOT ALLOWED TO DROP'
		ROLLBACK

DROP TRIGGER Safety on database

CREATE TRIGGER safety
ON database
	FOR CREATE_TABLE
		AS
			PRINT'create table issued'
			SELECT EVENTDATA().value('(/EVENT_INSTANCE/TSQLCommand/CommandText)[1]','nvarchar(max)')
			RAISERROR('cannnot create new table in this database',16,1)
			ROLLBACK

		CREATE TABLE t1 (c1 int)
DROP TRIGGER SAFETY ON database

ALTER TRIGGER ColumnChanges
ON database
	FOR alter_table AS
		RAISERROR('this schema can not be modified',16,22)
		SELECT EVENTDATA().value('(/EVENT_INSTANCE/TSQLCommand/CommandText)[1]', 'nvarchar(max)')  
		ROLLBACK
USE AdventureWorks2012
ALTER TABLE  Person.Address ALTER COLUMN ModifiedDate date

DROP TRIGGER SAfety on AdventureWorks2012
USE AdventureWorks2012;  
GO  
CREATE TABLE ddl_log (PostTime datetime, DB_User nvarchar(100), Event nvarchar(100), TSQL nvarchar(2000));  
GO  
CREATE TRIGGER log   
ON DATABASE   
FOR DDL_DATABASE_LEVEL_EVENTS   
AS  
DECLARE @data XML  
SET @data = EVENTDATA()  
INSERT ddl_log   
   (PostTime, DB_User, Event, TSQL)   
   VALUES   
   (GETDATE(),   
   CONVERT(nvarchar(100), CURRENT_USER),   
   @data.value('(/EVENT_INSTANCE/EventType)[1]', 'nvarchar(100)'),   
   @data.value('(/EVENT_INSTANCE/TSQLCommand)[1]', 'nvarchar(2000)') ) ;  
GO  
--Test the trigger  
CREATE TABLE TestTable (a int)  
DROP TABLE TestTable ;  
GO  
SELECT * FROM ddl_log ;  
GO