/* Detroit Bank need to implement the transaction whenever the amount is transferred from one account to the another account. */
CREATE PROCEDURE TransferAmount @SenderAccountNumber INT , @ReceiverAccountNumber INT, @MoneytobeTransfer INT
AS
	SET NOCOUNT ON
	BEGIN TRANSACTION
	IF @SenderAccountNumber NOT IN (SELECT AccountNumber FROM DetroitBank ) OR @ReceiverAccountNumber NOT IN (SELECT AccountNumber FROM DetroitBank )
	BEGIN 
		PRINT 'Transaction Failed'
	END
	ELSE
	BEGIN
		UPDATE DetroitBank SET Balance = Balance - @MoneytobeTransfer WHERE AccountNumber = @SenderAccountNumber 
		UPDATE DetroitBank SET Balance = Balance + @MoneytobeTransfer WHERE AccountNumber = @ReceiverAccountNumber
	END
	COMMIT TRANSACTION
	SET NOCOUNT OFF
	
GO
EXEC TransferAmount  1,2,4000
GO

/*Problem Statement:
At AdventureWorks, Inc., an employee named Sidney Higa, who is currently working as Production Technician – WC10 has been promoted as Marketing Manager. 
The employee ID of Sidney is 13.
As a database developer, you need to update his records. 
This involves updating the title in the Employee table and updating the department history details.
You need to ensure that all the changes take effect. 
In addition, you need to ensure that no other transaction should be able to view the data being modified by the current transaction.*/

SET TRANSACTION ISOLATION LEVEL
READ COMMITTED
BEGIN TRANSACTION TR
BEGIN TRY
	UPDATE HumanResources.Employee SET JobTitle = 'Marketing Manager' WHERE BusinessEntityID = 13
	UPDATE HumanResources.EmployeeDepartmentHistory SET DepartmentID = 4 , ModifiedDate = GETDATE() WHERE  BusinessEntityID = 13		
COMMIT TRANSACTION TR
END TRY
BEGIN CATCH 
		ROLLBACK TRANSACTION TR 
		SELECT 'Transaction Rollbacked' , ERROR_LINE() ,ERROR_MESSAGE()
END CATCH

