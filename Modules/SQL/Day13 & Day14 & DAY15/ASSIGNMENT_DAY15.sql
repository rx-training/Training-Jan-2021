
use Day2SQL


/*ASSIGNMENT*/
CREATE TABLE DETROIT (DETROIT INT ,ACCOUNT_NO INT,AMOUNT MONEY)

INSERT DETROIT VALUES('1','111111111','100000'),
('2','111111112','50000'),
('3','111111113','55000'),
('4','111111114','45000'),
('5','111111115','40000'),
('6','111111116','20000')

--CREATE FUNCTION BANK_TRANSFER_AMT(@TRANFERT_AMOUNT MONEY,@AMOUNT_SEND_CUSTOMER_ID INT,@AMOUNT_RECIVE_CUSTOMER_ID INT)
--RETURN 
SELECT * FROM DETROIT

BEGIN TRY
	BEGIN TRANSACTION DETROIT_BANK 
	UPDATE DETROIT SET AMOUNT += 10000 WHERE ACCOUNT_NO = 111111113;
	UPDATE DETROIT SET AMOUNT -= 10000 WHERE ACCOUNT_NO = 111111111;
	COMMIT TRANSACTION 
	PRINT 'SUCCESSFULLY TRANSFER AMOUNT  ONE CUSTOMER TO ONTHER CUSTOMER'
END TRY
BEGIN CATCH
	ROLLBACK TRANSACTION
	PRINT 'Transaction Rolled back'
	PRINT 'YOUR MONEY ADD YOUR ACCOUNT IN 24 HOURS'
END CATCH

/*EXTRAPRACTICE*/
SElect * from Employees order by Salary
/*Implesit transaction*/
SET IMPLICIT_TRANSACTION ON;
INSERT INTO Employees VALUES ('105','NIRAJ','SAPRA','NIRAJ@GMAIL.COM','7567564430','2002-05-15','IT_PROG','5000','0.16','108','60');
INSERT INTO Employees VALUES ('106','NILL','SAPRA','NIRAJ1@GMAIL.COM','7567564430','2002-05-16','IT_PROG','7000','0.16','108','60');
COMMIT TRANSACTION;


/*Explesit transaction*/
Begin Try
	Begin Transaction
	update Employees SET Salary=2500 Where EmployeeID='111'
	update Employees SET Salary=3500 Where EmployeeID='104'
	update Employees SET Salary='abc' Where EmployeeID='125'
	Commit Transaction
	PRINT 'TRANSACTION Commited'
End Try
Begin Catch
	Rollback Transaction	
	print 'Transaction Rolled back'
End Catch


/*ISOLATION */

SET TRANSACTION ISOLATION LEVEL
READ COMMITTED
Begin Transaction TR
Begin Try
	update Employees
	SET Salary=2500 Where EmployeeID='111'
	update Employees SET Email='NIRAJSAPRA21@GMAIL.COM' Where EmployeeID='104'
	update Employees SET Email='abc@GMAIL.COM' Where EmployeeID='125'
--	Commit Transaction TR
	PRINT 'TRANSACTION EXECUTE'
End TRY
Begin Catch
	Rollback Transaction TR
	print 'Transaction Rolled back'
End Catch



