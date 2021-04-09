 
USE master;  
CREATE SERVER ROLE buyers AUTHORIZATION BenMiller;  
GO  
 
USE master;  
CREATE SERVER ROLE auditors AUTHORIZATION securityadmin;  
GO  

DROP SERVER ROLE buyers;  
GO  

SELECT SP1.name AS RoleOwner, SP2.name AS Server_Role  
FROM sys.server_principals AS SP1  
JOIN sys.server_principals AS SP2  
    ON SP1.principal_id = SP2.owning_principal_id   
ORDER BY SP1.name ; 




BACKUP DATABASE AdventureWorks2012
TO DISK='X:\SQLServerBackups\AdventureWorks1.bak',
DISK='Y:\SQLServerBackups\AdventureWorks2.bak',
DISK='Z:\SQLServerBackups\AdventureWorks3.bak'
WITH FORMAT,
  MEDIANAME = 'AdventureWorksStripedSet0',
  MEDIADESCRIPTION = 'Striped media set for AdventureWorks2012 database';
GO


BACKUP DATABASE AdventureWorks2012
TO DISK='X:\SQLServerBackups\AdventureWorks1a.bak',
  DISK='Y:\SQLServerBackups\AdventureWorks2a.bak',
  DISK='Z:\SQLServerBackups\AdventureWorks3a.bak'
MIRROR TO DISK='X:\SQLServerBackups\AdventureWorks1b.bak',
  DISK='Y:\SQLServerBackups\AdventureWorks2b.bak',
  DISK='Z:\SQLServerBackups\AdventureWorks3b.bak';
GO

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
'Z:\SQLServerBackups\AdvWorksData.bak';
GO
EXEC sp_addumpdevice 'disk', 'AdvWorksLog',
'X:\SQLServerBackups\AdvWorksLog.bak';
GO

-- Back up the full AdventureWorks2012 database.
BACKUP DATABASE AdventureWorks2012 TO AdvWorksData;
GO
-- Back up the AdventureWorks2012 log.
BACKUP LOG AdventureWorks2012
    TO AdvWorksLog;
GO




--Back up the files in SalesGroup1:
BACKUP DATABASE Sales
    FILEGROUP = 'SalesGroup1',
    FILEGROUP = 'SalesGroup2'
    TO DISK = 'Z:\SQLServerBackups\SalesFiles.bck';
GO


--Back up the files in SalesGroup1:
BACKUP DATABASE Sales
    FILEGROUP = 'SalesGroup1',
    FILEGROUP = 'SalesGroup2'
    TO DISK = 'Z:\SQLServerBackups\SalesFiles.bck'
    WITH
      DIFFERENTIAL;
GO

BACKUP DATABASE AdventureWorks2012
TO TAPE = '\\.\tape0', TAPE = '\\.\tape1'
MIRROR TO TAPE = '\\.\tape2', TAPE = '\\.\tape3'
WITH
    FORMAT,
    MEDIANAME = 'AdventureWorksSet1';


SELECT query = a.text, start_time, percent_complete,
    eta = dateadd(second,estimated_completion_time/1000, getdate())
FROM sys.dm_exec_requests r
    CROSS APPLY sys.dm_exec_sql_text(r.sql_handle) a
WHERE r.command LIKE 'BACKUP%'

RESTORE DATABASE master FROM DISK = 'Z:\SQLServerBackups\master.bak' WITH REPLACE;