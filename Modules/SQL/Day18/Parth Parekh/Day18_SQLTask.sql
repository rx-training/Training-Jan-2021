
-- Backup paytm base
BACKUP DATABASE Paytm
 TO DISK = 'D:\Paytmdatabase.bak'
    WITH FORMAT;
GO

-- Backing up the database and log
USE master
GO
ALTER DATABASE Paytm
    SET RECOVERY FULL;
GO
USE master
GO
EXEC sp_addumpdevice 'disk', 'PaytmDatabase',
'D:\Paytmdatabase.bak';
GO
EXEC sp_addumpdevice 'disk', 'PaytmLog',
'D:\PaytmLog.bak';
GO
BACKUP DATABASE Paytm TO PaytmDatabase;
GO
-- Back up the AdventureWorks2012 log.
BACKUP LOG Paytm
    TO PaytmLog;
GO

--Creating a differential file backup
BACKUP DATABASE Paytm
    TO DISK = 'D:\Paytm1.bak'
    WITH
      DIFFERENTIAL;
GO

-- Restore 
RESTORE DATABASE Paytm
	FROM DISK ='D:\Paytm1.bak'
GO

-- Granting permission to create tables
USE AdventureWorks2012;
GRANT CREATE TABLE TO Parth;
GO

-- Granting SELECT permission on a table
GRANT SELECT ON Person.Address TO Parth;  
GO
--Revoking SELECT permission on a table
REVOKE SELECT ON Person.Address FROM Parth;  
GO