SET IMPLICIT_TRANSACTIONS ON
INSERT INTO Employees(Emp_ID)
	VALUES (17)
INSERT INTO Employees(Emp_ID)
	VALUES (16)
COMMIT TRANSACTION

SET IMPLICIT_TRANSACTIONS OFF

BEGIN TRAN mytran
UPDATE Employees
SET Salary-=1000
WHERE Emp_ID=1

UPDATE Employees
SET Salary+=1000
WHERE Emp_ID=111
COMMIT TRAN mytran

BEGIN TRAN RollTran
BEGIN TRY
	UPDATE Employees
	SET First_Name='fir' WHERE Emp_ID=1
	UPDATE Employees
	SET Last_Name='lastttt' WHERE Emp_ID=12/0
	COMMIT TRAN Rolltran
	SELECT	'TRANSACTION EXCECUTED'
END TRY
BEGIN CATCH
	ROLLBACK TRANSACTION RollTran
	SELECT 'TRANSACTION ROLLBACKED'
END CATCH

SELECT * FROM Employees

SET TRANSACTION ISOLATION LEVEL
READ COMMITTED
BEGIN TRAN RollTran
BEGIN TRY
	UPDATE Employees
	SET First_Name='firstname' WHERE Emp_ID=1
	UPDATE Employees
	SET Last_Name='last' WHERE Emp_ID=15
	COMMIT TRAN Rolltran
	SELECT	'TRANSACTION EXCECUTED'
END TRY
BEGIN CATCH
	ROLLBACK TRANSACTION Rolltran
	SELECT 'TRANSACTION ROLLBACKED'
END CATCH

BEGIN TRAN
DELETE FROM Employees
	WHERE Emp_ID=17
COMMIT TRAN

IF OBJECT_ID(N'TestTran',N'U') IS NOT NULL  
    DROP TABLE TestTran;  
GO  
CREATE TABLE TestTran (Cola INT PRIMARY KEY, Colb CHAR(3));  
GO  
-- This statement sets @@TRANCOUNT to 1.  
BEGIN TRANSACTION OuterTran;  
  
PRINT N'Transaction count after BEGIN OuterTran = '  
    + CAST(@@TRANCOUNT AS NVARCHAR(10));  
 
INSERT INTO TestTran VALUES (1, 'aaa');  
 
-- This statement sets @@TRANCOUNT to 2.  
BEGIN TRANSACTION Inner1;  
 
PRINT N'Transaction count after BEGIN Inner1 = '  
    + CAST(@@TRANCOUNT AS NVARCHAR(10));  
  
INSERT INTO TestTran VALUES (2, 'bbb');  
  
-- This statement sets @@TRANCOUNT to 3.  
BEGIN TRANSACTION Inner2;  
  
PRINT N'Transaction count after BEGIN Inner2 = '  
    + CAST(@@TRANCOUNT AS NVARCHAR(10));  
  
INSERT INTO TestTran VALUES (3, 'ccc');  
  
-- This statement decrements @@TRANCOUNT to 2.  
-- Nothing is committed.  
COMMIT TRANSACTION Inner2;  
 
PRINT N'Transaction count after COMMIT Inner2 = '  
    + CAST(@@TRANCOUNT AS NVARCHAR(10));  
 
-- This statement decrements @@TRANCOUNT to 1.  
-- Nothing is committed.  
COMMIT TRANSACTION Inner1;  
 
PRINT N'Transaction count after COMMIT Inner1 = '  
    + CAST(@@TRANCOUNT AS NVARCHAR(10));  
  
-- This statement decrements @@TRANCOUNT to 0 and  
-- commits outer transaction OuterTran.  
COMMIT TRANSACTION OuterTran;  
  
PRINT N'Transaction count after COMMIT OuterTran = '  
    + CAST(@@TRANCOUNT AS NVARCHAR(10));


-- This statement sets @@TRANCOUNT to 1.  
BEGIN TRANSACTION OuterTran;  
  
PRINT N'Transaction count after BEGIN OuterTran = '  
    + CAST(@@TRANCOUNT AS NVARCHAR(10));  
 
INSERT INTO TestTran VALUES (4, 'aaa');  
 
-- This statement sets @@TRANCOUNT to 2.  
BEGIN TRANSACTION Inner1;  
 
PRINT N'Transaction count after BEGIN Inner1 = '  
    + CAST(@@TRANCOUNT AS NVARCHAR(10));  
  
INSERT INTO TestTran VALUES (5, 'bbb');  
  
-- This statement sets @@TRANCOUNT to 3.  
BEGIN TRANSACTION Inner2;  
  
PRINT N'Transaction count after BEGIN Inner2 = '  
    + CAST(@@TRANCOUNT AS NVARCHAR(10));  
  
INSERT INTO TestTran VALUES (6, 'ccc');  
  
-- This statement decrements @@TRANCOUNT to 2.  
-- Nothing is committed.  
COMMIT TRANSACTION Inner2;  
 
PRINT N'Transaction count after COMMIT Inner2 = '  
    + CAST(@@TRANCOUNT AS NVARCHAR(10));  
 
-- This statement decrements @@TRANCOUNT to 1.  
-- Nothing is committed.  
COMMIT TRANSACTION Inner1;  
 
PRINT N'Transaction count after COMMIT Inner1 = '  
    + CAST(@@TRANCOUNT AS NVARCHAR(10));  
  
-- This statement decrements @@TRANCOUNT to 0 and  
-- commits outer transaction OuterTran.  
COMMIT TRANSACTION OuterTran;  
  
PRINT N'Transaction count after COMMIT OuterTran = '  
    + CAST(@@TRANCOUNT AS NVARCHAR(10));

CREATE TABLE ValueTable ([value] INT);  
GO  
DECLARE @TransactionName VARCHAR(20) = 'Transaction1';  
BEGIN TRAN @TransactionName  
       INSERT INTO ValueTable VALUES(1), (2);  
ROLLBACK TRAN @TransactionName;  
INSERT INTO ValueTable VALUES(3),(4);   
SELECT [value] FROM ValueTable;  
 
DROP TABLE ValueTable;

Set Implicit_Transactions On;
--Transaction 1
Update Employees Set First_Name = 'Black' where Emp_ID = 15;
commit;
--Transaction 2
Update Employees Set First_Name = 'Voyer' where Emp_ID = 16;
Rollback;
 
--Transaction 3
Update Employees Set First_Name = 'new' where Emp_ID = 17;
commit;
 
--Select the Authors, to see the effect of Update statement
Select * FROM Employees
 
--Revert back to Original
Update Employees Set First_Name = 'White' where Emp_ID = 15;
Update Employees Set First_Name = 'Green' where Emp_ID = 16;
Update Employees Set First_Name = 'Blue' where Emp_ID = 17;
Go


Set Implicit_Transactions OFF

--Example 04
Declare @ErrNo int
Begin Transaction;
Insert into Employees(Emp_ID, First_Name, Last_Name, Salary)
values (31, 'Billy', 'Jones', 15200.25);
Set @ErrNo = @@Error;
if @ErrNo != 0
        Begin
               Print 'Error Occurred. Transaction Cancelled';
               RollBack;
        End
else
        Begin
               Print 'Data Inserted.';
               Commit;
        End
Begin Transaction;
Insert into Employees(Emp_ID, First_Name, Last_Name, Salary)
values (30, 'Billy', 'Jones', 15200);
Set @ErrNo = @@Error;
if @ErrNo != 0
        Begin
               Print 'Error Occurred. Transaction Cancelled';
               RollBack;
        End
else
        Begin
               Print 'Data Inserted.';
               Commit;
        End
-- Revert back the Change
Delete from Employees where Emp_ID =30;

BEGIN TRAN rollbacktra
Insert into Employees(Emp_ID, First_Name, Last_Name, Salary)
values (11, 'mike', 'Jonh', 18200);
ROLLBACK TRAN rollbacktra

BEGIN TRAN rollbacktra
Insert into Employees(Emp_ID, First_Name, Last_Name, Salary)
values (11, 'mike', 'Jonh', 18200);
ROLLBACK TRAN rollbacktra
Insert into Employees(Emp_ID, First_Name, Last_Name, Salary)
values (12, 'mike', 'Jonh', 18200);

BEGIN TRANSACTION SEC_TRAN
BEGIN TRY 
    UPDATE Employees
    SET salary = 5000
    WHERE Emp_ID = 1111
    COMMIT TRANSACTION SEC_TRAN

    SELECT 'Transaction executed'
END TRY
BEGIN CATCH
    ROLLBACK TRANSACTION SEC_TRAN
    SELECT 'Transaction rollbacked'
END CATCH

BEGIN TRAN RollTran
BEGIN TRY
	UPDATE Employees
	SET First_Name='fir' WHERE Emp_ID=1
	UPDATE Employees
	SET Last_Name='lastttt' WHERE Emp_ID=12
	COMMIT TRAN Rolltran
	SELECT	'TRANSACTION EXCECUTED'
END TRY
BEGIN CATCH
	ROLLBACK TRANSACTION RollTran
	SELECT 'TRANSACTION ROLLBACKED'
END CATCH

SET TRANSACTION ISOLATION LEVEL
READ UNCOMMITTED -- transaction can read uncommitted data in the dirty read problem
BEGIN TRAN RollTran
BEGIN TRY
	UPDATE Employees
	SET First_Name='fir' WHERE Emp_ID=1
	UPDATE Employees
	SET Last_Name='lastttt' WHERE Emp_ID=12
	COMMIT TRAN Rolltran
	SELECT	'TRANSACTION EXCECUTED'
END TRY
BEGIN CATCH
	ROLLBACK TRANSACTION RollTran
	SELECT 'TRANSACTION ROLLBACKED'
END CATCH
SELECT * FROM Employees


SET TRANSACTION ISOLATION LEVEL
READ COMMITTED -- transaction cannot read during modification
BEGIN TRAN RollTran
BEGIN TRY
	UPDATE Employees
	SET First_Name='fir' WHERE Emp_ID=1
	UPDATE Employees
	SET Last_Name='lastttt' WHERE Emp_ID=12
	COMMIT TRAN Rolltran
	SELECT	'TRANSACTION EXCECUTED'
END TRY
BEGIN CATCH
	ROLLBACK TRANSACTION RollTran
	SELECT 'TRANSACTION ROLLBACKED'
END CATCH


SET TRANSACTION ISOLATION LEVEL
REPEATABLE READ 
BEGIN TRAN RollTran
BEGIN TRY
	UPDATE Employees
	SET First_Name='fir' WHERE Emp_ID=1
	UPDATE Employees
	SET Last_Name='lastttt' WHERE Emp_ID=12
	COMMIT TRAN Rolltran
	SELECT	'TRANSACTION EXCECUTED'
END TRY
BEGIN CATCH
	ROLLBACK TRANSACTION RollTran
	SELECT 'TRANSACTION ROLLBACKED'
END CATCH


SET TRANSACTION ISOLATION LEVEL
SNAPSHOT
BEGIN TRAN RollTran
BEGIN TRY
	UPDATE Employees
	SET First_Name='fir' WHERE Emp_ID=1
	UPDATE Employees
	SET Last_Name='lastttt' WHERE Emp_ID=12
	COMMIT TRAN Rolltran
	SELECT	'TRANSACTION EXCECUTED'
END TRY
BEGIN CATCH
	ROLLBACK TRANSACTION RollTran
	SELECT 'TRANSACTION ROLLBACKED'
END CATCH


SET TRANSACTION ISOLATION LEVEL
SERIALIZABLE
BEGIN TRAN RollTran
BEGIN TRY
	UPDATE Employees
	SET First_Name='fir' WHERE Emp_ID=1
	UPDATE Employees
	SET Last_Name='lastttt' WHERE Emp_ID=12
	COMMIT TRAN Rolltran
	SELECT	'TRANSACTION EXCECUTED'
END TRY
BEGIN CATCH
	ROLLBACK TRANSACTION RollTran
	SELECT 'TRANSACTION ROLLBACKED'
END CATCH

USE day5
SELECT * FROM TestTran
SELECT * FROM Employees

CREATE TABLE Customer10
(ID INT IDENTITY(1,1), CustomerName VARCHAR(20)) 
GO 
CREATE TABLE Orders10 
(OrderID INT IDENTITY(1,1), ProductName VARCHAR(50))
 GO
INSERT INTO Customer10(CustomerName) VALUES ('Rajendra')
Go
INSERT INTO Orders10(ProductName) VALUES ('Laptop')
 Go

BEGIN TRAN
UPDATE Customer10	SET CustomerName='Peter'
WHERE ID=1

UPDATE Orders10 SET ProductName='Keyword'
WHERE OrderID=10

BEGIN TRAN
UPDATE Orders10 SET ProductName='Mouse'
WHERE OrderID=10

UPDATE Customer10	SET CustomerName='Shusant'
WHERE ID=1

SELECT * FROM Customer10
SELECT * FROM Orders10

SET IMPLICIT_TRANSACTIONS ON;
INSERT INTO Employees(Emp_ID,First_Name) VALUES (56,'Jack');
INSERT INTO Employees(Emp_ID,First_Name) VALUES (57,'Jay');
COMMIT TRANSACTION

SET IMPLICIT_TRANSACTIONS OFF

BEGIN TRAN mytran
UPDATE Employees
SET Salary-=1000
WHERE Emp_ID=1

UPDATE Employees
SET Salary+=1000
WHERE Emp_ID=111
COMMIT TRAN mytran

UPDATE Employees
SET Salary+=1000
WHERE Emp_ID=111
COMMIT TRAN mytran

BEGIN TRAN RollTran
BEGIN TRY
	UPDATE Employees
	SET First_Name='fir' WHERE Emp_ID=1
	UPDATE Employees
	SET Last_Name='lastttt' WHERE Emp_ID=56
	COMMIT TRAN Rolltran
	SELECT	'TRANSACTION EXCECUTED'
END TRY
BEGIN CATCH
	ROLLBACK TRANSACTION RollTran
	SELECT 'TRANSACTION ROLLBACKED'
END CATCH

SET TRANSACTION ISOLATION LEVEL
READ UNCOMMITTED
BEGIN TRAN RollTran
	UPDATE Employees
	SET First_Name='raiyani' WHERE Emp_ID=1
	COMMIT TRAN Rolltran

--SET TRANSACTION ISOLATION LEVEL
--READ UNCOMMITTED
--SELECT * FROM Employees

SET TRANSACTION ISOLATION LEVEL
READ COMMITTED
BEGIN TRAN RollTran
	UPDATE Employees
	SET First_Name='ranii' WHERE Emp_ID=1
	COMMIT TRAN Rolltran

SET TRANSACTION ISOLATION LEVEL
REPEATABLE READ
BEGIN TRAN RollTran
	UPDATE Employees
	SET First_Name='rani' WHERE Emp_ID=1
	COMMIT TRAN Rolltran

ALTER DATABASE day5 SET ALLOW_SNAPSHOT_ISOLATION ON 

SET TRANSACTION ISOLATION LEVEL
SNAPSHOT
BEGIN TRAN RollTran
	UPDATE Employees
	SET First_Name='rai' WHERE Emp_ID=1
	COMMIT TRAN Rolltran

SET TRANSACTION ISOLATION LEVEL
SERIALIZABLE
BEGIN TRAN RollTran
	UPDATE Employees
	SET First_Name='Raiyani' WHERE Emp_ID=1
	COMMIT TRAN Rolltran

SET TRANSACTION ISOLATION LEVEL
READ COMMITTED
BEGIN TRAN RollTran
	UPDATE Employees
	SET First_Name='raiyai' WHERE Emp_ID=1
	COMMIT TRAN Rolltran
USE day5
SELECT * FROM Employees



