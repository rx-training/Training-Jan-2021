--Assignment:

-- Detroit Bank need to implement the transaction whenever the amount is transferred from one account to the another account.
CREATE TABLE Account (
	Id		INT NOT NULL PRIMARY KEY , 
	Name	VARCHAR(600) NOT NULL ,
	Amount	INT NOT NULL DEFAULT 0
) 
INSERT INTO Account VALUES 
	( 1, 'A' , 20000 ) ,
	( 2, 'B' , 30000 ) ,
	( 3, 'C' , 40000 ) ,
	( 4, 'D' , 50000 ) 

USE master ;
GO 

CREATE PROCEDURE TransferAmount 
	@fromAccount VARCHAR(40) ,
	@toAccount VARCHAR(40) ,
	@amt		 INT
AS
BEGIN
	SET NOCOUNT ON ;
	DECLARE @sent INT = 0, @received INT = 0;
	BEGIN TRY
		BEGIN TRANSACTION transferring
			UPDATE Account SET Amount = Amount - @amt WHERE Name LIKE @fromAccount ;
			SELECT @sent = @@ROWCOUNT ;			-- sent

			UPDATE Account SET Amount = Amount + @amt WHERE Name LIKE @toAccount ;
			SELECT @received = @@ROWCOUNT ;		-- received
					
			IF @sent=1 AND @received=1 BEGIN	-- if send and received 
				COMMIT TRANSACTION
				PRINT 'Successful'
			END
			ELSE BEGIN
				ROLLBACK TRANSACTION
				PRINT 'Failed'
			END
	END TRY
	BEGIN CATCH					-- if variables are not equal to system size
		ROLLBACK TRANSACTION
		PRINT 'Amount transfer unsuccessful'
	END CATCH
END
GO

EXEC TransferAmount 'B' , 'E' , 3000 ;
SELECT * FROM Account ;
GO