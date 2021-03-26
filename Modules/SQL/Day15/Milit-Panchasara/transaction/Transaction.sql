SELECT * FROM HumanResources.Employee WHERE BusinessEntityID = 50
SELECT * FROM HumanResources.EmployeeDepartmentHistory WHERE BusinessEntityID = 50
SELECT * FROM Person.Person WHERE BusinessEntityID = 50
GO

SET TRANSACTION ISOLATION LEVEL
SERIALIZABLE;
BEGIN TRANSACTION
UPDATE HumanResources.Employee SET JobTitle = 'Production Technician - WC10 - Updated' WHERE BusinessEntityID = 50
UPDATE HumanResources.EmployeeDepartmentHistory SET EndDate = GETDATE() WHERE BusinessEntityID = 50
COMMIT TRANSACTION

----- TO KNOW CURRENT ISOLATION LEVEL -----
SELECT CASE transaction_isolation_level 
WHEN 0 THEN 'Unspecified' 
WHEN 1 THEN 'ReadUncommitted' 
WHEN 2 THEN 'ReadCommitted' 
WHEN 3 THEN 'Repeatable' 
WHEN 4 THEN 'Serializable' 
WHEN 5 THEN 'Snapshot' END AS TRANSACTION_ISOLATION_LEVEL 
FROM sys.dm_exec_sessions 
where session_id = @@SPID