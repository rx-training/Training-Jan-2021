/* Grant Permission */

USE AdventureWorks2012;
GRANT CREATE TABLE TO Vatsal;
GO

GRANT SELECT ON OBJECT::Person.Address TO Vatsal;  
GO
/* Revok */

REVOKE SELECT ON OBJECT::Person.Address FROM Vatsal;  
GO

/* Backup */

BACKUP DATABASE IRCTC
TO DISK='D:\SQLServerBackups\IRCTC.bak'
WITH FORMAT;
GO

-- Back up the database and log.

USE master;
GO

ALTER DATABASE IRCTC
    SET RECOVERY FULL;
GO

USE master
GO
EXEC sp_addumpdevice 'disk', 'IRCTCData',
'D:\SQLServerBackups\IRCTC.bak';
GO
EXEC sp_addumpdevice 'disk', 'IRCTCLog',
'D:\SQLServerBackups\IRCTCLog.bak';
GO

BACKUP DATABASE IRCTC 
	TO IRCTCData;
GO

BACKUP LOG IRCTC
    TO IRCTCLog
GO

-- Differential Back Up

BACKUP DATABASE IRCTC
TO DISK='D:\SQLServerBackups\IRCTC.bak'
WITH DIFFERENTIAL;
GO


/* Restoring Full Database */

RESTORE DATABASE IRCTC
  FROM DISK='D:\SQLServerBackups\IRCTC.bak';
GO