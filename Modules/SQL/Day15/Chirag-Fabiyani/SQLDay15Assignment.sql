

----Detroit Bank need to implement the transaction whenever the amount is transferred from one account to the another account.----

BEGIN TRAN DetroitBank
DECLARE @Amount int
SET @Amount=5000 
BEGIN TRY
    UPDATE Customers
    SET Balance = Balance - @Amount
    WHERE AccountNo = 123456
    UPDATE Customers
    SET Balance = Balance + @Amount
    WHERE AccountNo = 654321
    COMMIT TRAN DetroitBank
    PRINT 'Transaction Successful'
END TRY
BEGIN CATCH
    ROLLBACK TRAN DetroitBank
    PRINT 'Transaction Unsuccessful'
END CATCH