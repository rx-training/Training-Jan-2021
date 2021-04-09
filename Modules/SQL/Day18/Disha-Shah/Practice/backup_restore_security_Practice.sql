--SERVER LEVEL PERMISSIONS
SELECT * FROM sys.fn_builtin_permissions('LAPTOP-NLRDC1FB\SQLEXPRESS01') ORDER BY permission_name;

--CREATING A SERVER ROLE THAT IS OWNED BY A LOGIN
USE master;  
CREATE SERVER ROLE buyers AUTHORIZATION info;  
GO

--Creating a server role thai is owned by a fixed server role
USE master;  
CREATE SERVER ROLE auditors AUTHORIZATION securityadmin;  
GO

--GRANTING IMPERSONATE permission on a login
USE master;  
GRANT IMPERSONATE ON LOGIN::sa to [info];  
GO

--Granting view definition permission with GRANT option
USE master;  
GRANT VIEW DEFINITION ON LOGIN::sa TO info   
    WITH GRANT OPTION;  
GO

--Granting Select permission on a table
GRANT SELECT ON OBJECT::Person.Address TO infonew;  
GO

--granting execute permission on a stored procedure
USE AdventureWorks2012;  
CREATE ROLE newauditors ;
GRANT EXECUTE ON OBJECT::HumanResources.uspUpdateEmployeeHireInfo  
    TO newauditors;  
GO

--Granting REFERENCES permission on a view with GRANT OPTION
GRANT REFERENCES (BusinessEntityID) ON OBJECT::HumanResources.vEmployee   
    TO infonew WITH GRANT OPTION;  
GO

--Granting SELECT permission on a table without using the OBJECT phrase
GRANT SELECT ON Person.Address TO infonew;  
GO

--Granting EXECUTE permission on a procedure to a role
CREATE ROLE newrole ;  
GRANT EXECUTE ON dbo.uspGetBillOfMaterials TO newrole ;  
GO

--Revoking select permission on a table
USE AdventureWorks2012;  
REVOKE SELECT ON OBJECT::Person.Address FROM infonew;  
GO

--Revoking EXECUTE permission on a stored procedure
USE AdventureWorks2012;  
REVOKE EXECUTE ON OBJECT::HumanResources.uspUpdateEmployeeHireInfo  
    FROM newauditors;  
GO

--Revoking REFERENCES permission on a view with CASCADE
USE AdventureWorks2012;  
REVOKE REFERENCES (BusinessEntityID) ON OBJECT::HumanResources.vEmployee   
    FROM infonew CASCADE;  
GO

--Denying select permission on a table
DENY SELECT ON OBJECT::Person.Address TO infonew;  
GO

--denying execute permission on a stored procedure
DENY EXECUTE ON OBJECT::HumanResources.uspUpdateEmployeeHireInfo  
    TO newauditors;  
GO

--Backup
BACKUP DATABASE AdventureWorks2012
TO DISK='D:\Radixweb-Daily Entry\SQL\SQLBackUpDemo\AdventureWorks1.bak',
DISK='D:\Radixweb-Daily Entry\SQL\SQLBackUpDemo\AdventureWorks2.bak',
DISK='D:\Radixweb-Daily Entry\SQL\SQLBackUpDemo\AdventureWorks3.bak'
WITH FORMAT,
  MEDIANAME = 'AdventureWorksStripedSet0',
  MEDIADESCRIPTION = 'Striped media set for AdventureWorks2012 database';
GO

--Backing up a complete database
BACKUP DATABASE AdventureWorks2012
 TO DISK = 'D:\Radixweb-Daily Entry\SQL\SQLBackUpDemo\AdvWorksData.bak'
    WITH FORMAT;
GO

--Backing up the database and log
-- To permit log backups, before the full database backup, modify the database
-- to use the full recovery model.
USE master;
GO
ALTER DATABASE AdventureWorks2012
    SET RECOVERY FULL;
GO
-- Create AdvWorksData and AdvWorksLog logical backup devices.
USE master
GO
EXEC sp_addumpdevice 'disk', 'AdvWorksData',
'D:\Radixweb-Daily Entry\SQL\SQLBackUpDemo\AdvWorksData.bak';
GO
EXEC sp_addumpdevice 'disk', 'AdvWorksLog',
'D:\Radixweb-Daily Entry\SQL\SQLBackUpDemo\AdvWorksLog.bak';
GO

-- Back up the full AdventureWorks2012 database.
BACKUP DATABASE AdventureWorks2012 TO AdvWorksData;
GO
-- Back up the AdventureWorks2012 log.
BACKUP LOG AdventureWorks2012
    TO AdvWorksLog;
GO

--TRACK PROGRESS OF BACKUP
SELECT query = a.text, start_time, percent_complete,
    eta = dateadd(second,estimated_completion_time/1000, getdate())
FROM sys.dm_exec_requests r
    CROSS APPLY sys.dm_exec_sql_text(r.sql_handle) a
WHERE r.command LIKE 'BACKUP%'

CREATE DATABASE BackUpDemoDB

--creating a backup
BACKUP DATABASE SampleDB  
   TO DISK = 'D:\Radixweb-Daily Entry\SQL\SQLBackUpDemo\SampleDB.bak';  
GO

--restoring a backup
RESTORE DATABASE SampleDB   
   FROM DISK = 'D:\Radixweb-Daily Entry\SQL\SQLBackUpDemo\SampleDB.bak';
