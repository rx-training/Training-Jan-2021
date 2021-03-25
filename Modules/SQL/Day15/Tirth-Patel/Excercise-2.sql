USE TestData
SELECT * FROM Employees
SET TRANSACTION ISOLATION LEVEL READ UNCOMMITTED
BEGIN TRANSACTION tr1
UPDATE Employees SET Salary= 13500 WHERE EmployeeID = 108
COMMIT TRANSACTION Tr1
SELECT CASE transaction_isolation_level
WHEN 0 THEN 'Unspecified'
WHEN 1 THEN 'ReadUncommitted'
WHEN 2 THEN 'ReadCommitted'
WHEN 3 THEN 'Repeatable'
WHEN 4 THEN 'Serializable'
WHEN 5 THEN 'Snapshot' END AS TRANSACTION_ISOLATION_LEVEL
FROM sys.dm_exec_sessions
where session_id = @@SPID



--Repeatable Read


BEGIN TRANSACTION tr2
SET TRANSACTION ISOLATION LEVEL REPEATABLE READ
SELECT Salary FROM Employees WHERE EmployeeID = 108
--The below statement will excute in a miunte
SELECT Salary FROM Employees WHERE EmployeeID = 108
COMMIT TRANSACTION tr2
GO

--Serializable


BEGIN TRANSACTION tr4
SET TRANSACTION ISOLATION LEVEL SERIALIZABLE
SELECT Salary FROM Employees WHERE EmployeeID = 108
--The below statement will excute in a miunte
SELECT Salary FROM Employees WHERE EmployeeID = 108
COMMIT TRANSACTION tr4
GO
--Snapshot
ALTER DATABASE TestData SET ALLOW_SNAPSHOT_ISOLATION ON
BEGIN TRANSACTION tr3
SET TRANSACTION ISOLATION LEVEL SNAPSHOT
SELECT Salary FROM Employees WHERE EmployeeID = 108
--The below statement will excute in a miunte
SELECT Salary FROM Employees WHERE EmployeeID = 108
UPDATE Employees SET Salary = 10000 WHERE EmployeeID = 108--This will not work due to update conflict
COMMIT TRANSACTION tr3