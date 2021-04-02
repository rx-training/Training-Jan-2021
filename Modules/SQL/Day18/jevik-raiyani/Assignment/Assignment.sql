sa---

make infoinfo user

user info
pass info

user infoinfo
pass infoinfo

sysadmin = sa user

SELECT * FROM sys.fn_builtin_permissions('SERVER') ORDER BY permission_name;

Role

Object Permission--tabels views storeProcedures

database-Task-Backup-FULL/DIFFERNCIAL-Path/Default
and also restore database

db_owner can perform all the task but not Except server level security	

sp_helpsrvrole [ [ @srvrolename = ] 'role' ]

SELECT * FROM sys.server_principals WHERE type = 'R' ;

sp_helpsrvrole 'diskadmin' ;

CREATE SERVER ROLE role_name [ AUTHORIZATION server_principal ]

USE master;  
CREATE SERVER ROLE buyers AUTHORIZATION BenMiller;  
GO
USE master;  
CREATE SERVER ROLE auditors AUTHORIZATION securityadmin;  
GO

GRANT UPDATE ON OBJECT::Production.Product TO PartsTeam;

GRANT SELECT ON OBJECT::Employees TO info;   
  
GRANT CONTROL ON OBJECT::Region TO Ted;   
  
GRANT SELECT ON SCHEMA::Customers TO Ted;   
  
GRANT CONTROL ON SCHEMA::Customers TO Ted;   
  
GRANT SELECT ON DATABASE::SalesDB TO Ted;   
  
USE [master]
RESTORE DATABASE [SQLTestDB] 
FROM DISK = N'C:\Program Files\Microsoft SQL Server\MSSQL14.MSSQLSERVER\MSSQL\Backup\SQLTestDB.bak' WITH  FILE = 1,  NOUNLOAD,  STATS = 5
GO
EXEC msdb.dbo.sp_delete_database_backuphistory @database_name = N'SQLTestDB'
GO

USE [master]
DROP DATABASE [SQLTestDB]
GO

GRANT CONTROL ON DATABASE::SalesDB TO Ted;
