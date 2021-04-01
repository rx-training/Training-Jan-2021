--Day15

--Transaction

--ACID Properties
--Implicit and Explicit Transaction
--Rollback Transaction
--Isolation Level
--Deadlock

--Practice Exercise:
-- Do the hands on the things provided in video and ppt.

CREATE TABLE TP (
	Id			INT NOT NULL IDENTITY(1,1) ,
	Name		VARCHAR(340) ,
	Amount		INT 
);


-- Implicit transactions
SET IMPLICIT_TRANSACTIONS ON ;
INSERT INTO TP(Name, Amount) VALUES ('Jack', 6660000) , ('Robert', 4540000), ('Ferrore', 15400) , ('Gel', 7804540) ;
COMMIT TRANSACTION ;

SELECT * FROM TP ;
SET IMPLICIT_TRANSACTIONS OFF ;


-- Explicit transactions
BEGIN TRAN transfAmt
	UPDATE TP SET Amount = Amount - 9999 WHERE Name Like '%Jack%' ;
	UPDATE TP SET Amount = Amount + 9999 WHERE Name Like 'Ferrore' ;
	SELECT * FROM TP ;
COMMIT TRAN



BEGIN TRANSACTION tr
	SET NOCOUNT ON ;
	BEGIN TRY
		UPDATE TP SET Amount = Amount + 'sd' WHERE Name LIKE '%Fer%' ;

		COMMIT TRANSACTION tr
		PRINT 'Committed'		
	
	END TRY
	BEGIN CATCH
		ROLLBACK TRANSACTION tr
		PRINT 'Rollbacked'
	END CATCH


-- Isolation levels
SELECT @@SPID ;			-- current session 

SELECT	CASE transaction_isolation_level
			WHEN 0 THEN 'Unspecified'
			WHEN 1 THEN 'Read Uncommited'
			WHEN 2 THEN 'Read Commited'			--default 
			WHEN 3 THEN 'Repeatable'
			WHEN 4 THEN 'Serializable'
			WHEN 5 THEN 'Snapshot' 
		END AS 'Transaction Isolation Level'
FROM sys.dm_exec_sessions WHERE session_id = @@SPID ;



