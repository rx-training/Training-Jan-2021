USE SampleDB

/*Q 1. Detroit Bank need to implement the transaction whenever the amount is transferred from one account to the another account.
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
			ROLLBACK TRANSACTION
			RAISERROR('Amount is greater than amount present in account', 10, 1)
		END
		ELSE 
		BEGIN
			IF (@Name IN (SELECT Name FROM DetroitFixedDepositAccount))	AND (@Name IN (SELECT Name FROM DetroitSavingsAccount))
			BEGIN
				UPDATE DetroitFixedDepositAccount
				SET Balance = Balance - @Balance
				WHERE Name=@Name

				UPDATE DetroitSavingsAccount
				SET Balance = Balance + @Balance
				WHERE Name=@Name
			END

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

EXECUTE prcTransferAmountDetroit 'Reema', 1000

EXECUTE prcTransferAmountDetroit 'Tiya', 10000


/*Q 2. At AdventureWorks, Inc., an employee named Sidney Higa, who is currently working as Production Technician – WC10 has been promoted as
Marketing Manager. The employee ID of Sidney is 13. As a database developer, you need to update his records. This involves updating the
title in the Employee table and updating the department history details.​ You need to ensure that all the changes take effect.
In addition, you need to ensure that no other transaction should be able to view the data being modified by the current transaction.
Ans.*/
SELECT * FROM HumanResources.Employee WHERE BusinessEntityID = 1069 OR BusinessEntityID = 50
SELECT * FROM HumanResources.EmployeeDepartmentHistory WHERE BusinessEntityID = 50
SELECT * FROM HumanResources.Department
SELECT * FROM Person.Person WHERE FirstName='Sidney' AND LastName ='Higa'


SET TRANSACTION ISOLATION LEVEL
READ COMMITTED
BEGIN TRANSACTION Tr
BEGIN TRY
	DECLARE @EmpId INT, @DeptId INT;

	SELECT @EmpId = BusinessEntityID FROM HumanResources.Employee WHERE BusinessEntityID IN (
			SELECT BusinessEntityID FROM Person.Person WHERE FirstName = 'Sidney' AND LastName = 'Higa'
	)

	SELECT @DeptId = DepartmentID FROM HumanResources.Department WHERE Name='Marketing'

	UPDATE HumanResources.Employee SET JobTitle = 'Marketing Manager', ModifiedDate = GETDATE() WHERE BusinessEntityID = @EmpId;
	
	UPDATE HumanResources.EmployeeDepartmentHistory SET DepartmentID = @DeptId, ModifiedDate = GETDATE() WHERE BusinessEntityID = @EmpId;
	
	PRINT 'TRANSACTION EXECUTED'
	COMMIT TRANSACTION Tr
END TRY
BEGIN CATCH
	ROLLBACK TRANSACTION Tr
	PRINT 'TRANSACTION ROLLBACKED'
END CATCH

