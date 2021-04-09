USE Day1;
-- ------------------------------------------------------- TRANSACTIONS -------------------------------------------------------

-- IMPLICIT TRANSACTIONS
SET IMPLICIT_TRANSACTIONS ON;

INSERT INTO Departments (DepartmentName)
	VALUES ('PHP');

INSERT INTO Departments (DepartmentName)
	VALUES ('Node');

COMMIT TRANSACTION;
-- ROLLBACK TRANSACTION

SET IMPLICIT_TRANSACTIONS OFF;


-- EXPLICIT TRANSACTIONS
BEGIN TRANSACTION myTran

UPDATE Departments
SET DepartmentName = 'NODE1' 
WHERE DepartmentId = 1

UPDATE Departments
SET DepartmentName = '.NET1'
WHERE DepartmentId = 2

ROLLBACK TRAN myTran
--COMMIT TRAN myTran


-- TRANSACTION EXAMPLE AND ISOLATION LEVEL
SET TRANSACTION ISOLATION LEVEL
READ COMMITTED
BEGIN TRANSACTION myTran
BEGIN TRY
	UPDATE Departments
	SET DepartmentName = 'NODE1' 
	WHERE DepartmentId = 1

	UPDATE Departments
	SET DepartmentName = '.NET1'
	WHERE DepartmentId = 2

	COMMIT TRAN myTran
	SELECT 'Transaction Executed'
END TRY
BEGIN CATCH
	ROLLBACK TRAN myTran
	SELECT 'Transaction Rollbacked'
END CATCH