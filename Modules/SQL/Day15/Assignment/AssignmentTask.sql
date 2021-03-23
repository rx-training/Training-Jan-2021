USE SampleDB

/*Q. Detroit Bank need to implement the transaction whenever the amount is transferred from one account to the another account.
Ans.*/
CREATE TABLE DetroitFixedDepositAccount(
	FixedDepositActId INT CONSTRAINT DetroitFixedDepositAccount_FixedDepositActId_PK PRIMARY KEY IDENTITY(1, 1),
	Balance MONEY CONSTRAINT DetroitFixedDepositAccount_Balance_DF DEFAULT 0,
	Name VARCHAR(50)
)

CREATE TABLE DetroitSavingsAccount(
	SavingsActId INT CONSTRAINT DetroitSavingsAccount_SavingsActId_PK PRIMARY KEY IDENTITY(1, 1),
	Balance MONEY CONSTRAINT DetroitSavingsAccount_Balance_DF DEFAULT 0,
	Name VARCHAR(50)
)

SELECT * FROM DetroitFixedDepositAccount

SELECT * FROM DetroitSavingsAccount

--PROCEDURE TO CREATE FIXED DEPOSIT OR SAVINGS ACCOUNT IN DETROIT BANK
CREATE PROCEDURE prcCreateDetroitAccount
    @ActName VARCHAR(50), @Name VARCHAR(50), @Balance MONEY
AS  
    DECLARE @TranCounter INT;  
    SET @TranCounter = @@TRANCOUNT;  
	PRINT @TranCounter;
    IF @TranCounter > 0    
        SAVE TRANSACTION ProcedureSave;  
    ELSE    
        BEGIN TRANSACTION;    
    BEGIN TRY 
		IF @ActName = 'Fixed Deposit'
		BEGIN
			INSERT INTO DetroitFixedDepositAccount (Name, Balance) VALUES (@Name, @Balance); 
		END
		ELSE IF @ActName = 'Savings'
		BEGIN
			INSERT INTO DetroitSavingsAccount (Name, Balance) VALUES (@Name, @Balance); 
		END
		PRINT @TranCounter;
        IF @TranCounter = 0    
            COMMIT TRANSACTION;  
    END TRY  
    BEGIN CATCH  
		PRINT @TranCounter;
        IF @TranCounter = 0   
            ROLLBACK TRANSACTION;  
        ELSE    
            IF XACT_STATE() <> -1  
                ROLLBACK TRANSACTION ProcedureSave;  
        DECLARE @ErrorMessage NVARCHAR(4000);  
        DECLARE @ErrorSeverity INT;  
        DECLARE @ErrorState INT;  
  
        SELECT @ErrorMessage = ERROR_MESSAGE();  
        SELECT @ErrorSeverity = ERROR_SEVERITY();  
        SELECT @ErrorState = ERROR_STATE();  
  
        RAISERROR (@ErrorMessage,  
                   @ErrorSeverity,  
                   @ErrorState 
                   );  
    END CATCH  
GO

EXECUTE prcCreateDetroitAccount 'Fixed Deposit', 'Reena', 50000

EXECUTE prcCreateDetroitAccount 'Fixed Deposit', 'Meena', 60000

EXECUTE prcCreateDetroitAccount 'Fixed Deposit', 'Reema', 40000

EXECUTE prcCreateDetroitAccount 'Fixed Deposit', 'Tina', 90000

EXECUTE prcCreateDetroitAccount 'Savings', 'Reena', 30000

EXECUTE prcCreateDetroitAccount 'Savings', 'Meena', 40000

EXECUTE prcCreateDetroitAccount 'Savings', 'Reema', 60000

EXECUTE prcCreateDetroitAccount 'Savings', 'Tina', 50000


--TRANSFER AMOUNT FROM FIXED DEPOSIT ACCOUNT TO SAVINGS ACCOUNT FOR A CUSTOMER IN DETROIT BANK
CREATE PROCEDURE prcTransferAmountDetroit
    @Name VARCHAR(50), @Balance MONEY
AS  
    DECLARE @TranCounter INT; 
    SET @TranCounter = @@TRANCOUNT;
	PRINT @TranCounter
    IF @TranCounter > 0    
        SAVE TRANSACTION ProcedureSave;  
    ELSE  
        BEGIN TRANSACTION;    
    BEGIN TRY
		DECLARE @CurBalance MONEY;
		SELECT @CurBalance = Balance FROM DetroitFixedDepositAccount WHERE Name=@Name
		IF @Balance > @CurBalance
		BEGIN
			RAISERROR('Amount is greater than amount present in account', 10, 1)
		END
		ELSE 
		BEGIN
			UPDATE DetroitFixedDepositAccount
			SET Balance = Balance - @Balance
			WHERE Name=@Name

			UPDATE DetroitSavingsAccount
			SET Balance = Balance + @Balance
			WHERE Name=@Name

			PRINT @TranCounter;
			IF @TranCounter = 0    
				COMMIT TRANSACTION;  
		END
    END TRY  
    BEGIN CATCH  
		PRINT @TranCounter;
        IF @TranCounter = 0   
            ROLLBACK TRANSACTION;  
        ELSE    
            IF XACT_STATE() <> -1  
                ROLLBACK TRANSACTION ProcedureSave;  
        DECLARE @ErrorMessage NVARCHAR(4000);  
        DECLARE @ErrorSeverity INT;  
        DECLARE @ErrorState INT;  
  
        SELECT @ErrorMessage = ERROR_MESSAGE();  
        SELECT @ErrorSeverity = ERROR_SEVERITY();  
        SELECT @ErrorState = ERROR_STATE();  
  
        RAISERROR (@ErrorMessage,  
                   @ErrorSeverity,  
                   @ErrorState 
                   );  
    END CATCH  
GO

EXECUTE prcTransferAmountDetroit 'Reena', 500000

EXECUTE prcTransferAmountDetroit 'Meena', 10000
