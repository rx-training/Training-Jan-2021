--Day14

--What to Learn

-- " Trigger " : A SQL Server trigger is a piece of procedural code, like a stored procedure which is only executed when a given event happens.

--There are three main characteristics that make triggers different than stored procedures:

--Triggers cannot be manually executed by the user.
--There is no chance for triggers to receive parameters.
--You cannot commit or rollback a transaction inside a trigger.


-- " DML Trigger " : This class of triggers fires upon events that change the structure (like creating, modifying or dropping a table), or in certain server related events like security changes or statistics update events.


-- " DDL Trigger " : This is the most used class of triggers. In this case the firing event is a data modification statement; it could be an insert, update or delete statement either on a table or a view.


-- " After Trigger " : These types of triggers are executed after the firing statement ends (either an insert, update or delete).

-- " Instead of Trigger " : Contrary to the FOR (AFTER) type, the INSTEAD OF triggers executes instead of the firing statement. In other words, this type of trigger replaces the firing statement. This is very useful in cases where you need to have cross database referential integrity.


-- syntax : 
CREATE TRIGGER trigger_name   
	ON { Table name or view name }   
	[ WITH <Options> ]  
	{ FOR | AFTER | INSTEAD OF }   
	{ [INSERT], [UPDATE] , [DELETE] }	


-- [ Practice Exercise ] :
--  Do the hands on the things provided in video and ppt.
CREATE TRIGGER TR_Sale_Insert ON Sales
	FOR INSERT
AS
	DECLARE @date DATE ;
	SET @date = ( SELECT SaleDate FROM INSERTED ) ;
	IF ( @date != GETDATE() ) BEGIN
		PRINT 'The modified date should be today only'
		ROLLBACK TRANSACTION
	END

CREATE TRIGGER TR_Sale_Delete ON Sales
	FOR DELETE
AS 
	PRINT 'You cannot delete sale record'
	ROLLBACK TRANSACTION
	RETURN

CREATE TRIGGER TR_Sale_Update ON Sales
	AFTER UPDATE 
AS 
	PRINT 'Update successful'

CREATE TRIGGER safety ON DATABASE
	FOR DROP_TABLE 
AS 
	PRINT 'You must disable trigger "safetyTable" to drop table'
	ROLLBACK

DROP TABLE Manager ;

ALTER TRIGGER safety ON DATABASE
	FOR DROP_TABLE
AS 
	PRINT 'You can drop the table'

DROP TABLE Manager ;


-- for refs
-- sample table
CREATE TABLE Triggering (
	Id			INT	NOT NULL IDENTITY(1,1) ,  
	Name		VARCHAR(50) , 
	Salary		VARCHAR(50)
) ;

INSERT INTO Triggering ( Name , Salary ) VALUES 
	( 'Dua lipa' , 20000 ) , 
	( 'Travis Scott' , 999999 ) , 
	( 'Eminem' , 239999 ) ,
	( 'Dj khalid' , 430000 ) , 
	( 'Adele' , 1230000 ) ;
INSERT INTO Triggering ( Name, Salary ) VALUES
	( 'Bieber' , 45455 ) ;
SELECT * FROM Triggering ;


-- log table
CREATE TABLE Triggering_log (
	Id			INT NOT NULL IDENTITY(1,1) , 
	SingerId	INT ,
	Name		VARCHAR(500) ,
	Salary		VARCHAR(50),
	Action		VARCHAR(100) ,
	OnField		VARCHAR(50) ,
	ActionBy	CHAR(300) , 
	ActionDate	DATETIME ,
	PRIMARY KEY CLUSTERED (Id)
) ;


-- DML Trigger : updates data into log table on fired
CREATE TRIGGER TR_Trigerring_log ON Triggering 
	FOR INSERT , UPDATE , DELETE
AS
	DECLARE @user VARCHAR(10) ;

	-- current active user
	SELECT @user = login_name FROM sys.dm_exec_sessions WHERE session_id = @@SPID ;

	
	DECLARE @actionField VARCHAR(10) ;
	IF UPDATE(Name) BEGIN		-- if updated / deleted / inserted Name Field
		SET @actionField = 'Name'
	END
	IF UPDATE(Salary) BEGIN		-- if U/D/I Salary
		SET @actionField = 'Salary'
	END
	IF UPDATE(Name) AND UPDATE(Salary) BEGIN
		SET @actionField = 'Name | Salary' 
	END

	IF EXISTS ( SELECT 0 FROM Deleted )
	BEGIN
		
		IF EXISTS ( SELECT 0 FROM Inserted ) -- updated
		BEGIN
			DECLARE @name VARCHAR(200) , @Salary VARCHAR(50) ;
			IF UPDATE(Name) BEGIN	-- if updated name , concat old data
				SET @name = (SELECT Name FROM Inserted) + '<-' + (SELECT Name FROM Deleted) ;
			END
			ELSE BEGIN				-- read data
				SET @name = (SELECT Name FROM Inserted)
			END

			IF UPDATE(Salary) BEGIN -- if updated salary , concat old data
				SET @Salary = (SELECT Salary FROM Inserted) + '<-' + (SELECT Salary FROM Deleted) 
			END
			ELSE BEGIN				-- else read data
				SET @Salary = (SELECT Salary FROM Inserted)
			END
			
			INSERT INTO Triggering_log (	-- insert into log table
					SingerId , Name , Salary , Action , OnField , ActionBy , ActionDate )
			SELECT  I.Id , @name AS Name , @Salary AS Salary , 'Updated' , @actionField , @user , GETDATE() 
			FROM Inserted I 
		END

		ELSE	-- deleted
		BEGIN
			INSERT INTO Triggering_log (
					SingerId , Name , Salary , Action , OnField , ActionBy , ActionDate )
			SELECT  Id , Name , Salary , 'Deleted' , '' , @user , GETDATE() 
			FROM Deleted
		END
	END

	ELSE	-- inserted
	BEGIN
		
		INSERT INTO Triggering_log (
				SingerId , Name , Salary , Action , OnField , ActionBy , ActionDate )
		SELECT  Id ,	Name , Salary , 'Inserted' , '' , @user , GETDATE() 
		FROM Inserted
	END
	
	SELECT * FROM Triggering_log 
GO


UPDATE Triggering SET Salary = 000340 WHERE Id = 2 ;
UPDATE Triggering SET Name = 'Gary' WHERE Id=5 ;

INSERT INTO Triggering( Name,Salary ) VALUES ('Becky G' , 1234323 ) ;
DELETE FROM Triggering WHERE Id = 3 ;



-- reference 
SELECT * FROM sys.dm_exec_sessions ; -- users log table

