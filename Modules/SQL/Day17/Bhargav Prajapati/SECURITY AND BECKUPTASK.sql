
---SERVER LEVEL PERMISSION--

SELECT * FROM sys.fn_builtin_permissions('SERVER') ORDER BY permission_name;

----------FixServer Role-------------
EXEC sp_helpsrvrole ;

--------RETURN DIscription of diskadmin role----------------
sp_helpsrvrole 'diskadmin' ;

-------------CREATE SERVER  ROLE-----------------
CREATE SERVER ROLE buyers AUTHORIZATION BenMiller

CREATE SERVER ROLE auditors AUTHORIZATION securityadmin


---------------DROP SERER ROLE ---------------------
DROP SERVER ROLE purchasing

-------------------ALTER SERVER ROLE--------------------
CREATE SERVER ROLE Product
ALTER SERVER ROLE Product WITH NAME = Production


ALTER SERVER ROLE diskadmin ADD MEMBER Ted ;  
GO



-------------GRANT PERMISSSION-----------------------
GRANT EXECUTE ON TestProc TO TesterRole WITH GRANT OPTION
EXECUTE sp_addrolemember TesterRole, User1;
---USER 2 not access the testme Because user2 does not permisson to access the TestMe
GRANT EXECUTE ON TESTME TO USER2

-----------Now USer 2 access the testme because the permission is granted----------
GRANT EXECUTE ON TestMe TO User2 AS TesterRole;  

----------------Dany Permission----------------------
USE AdventureWorks2012;  
DENY CONTROL ON USER::Wanida TO RolandX;  
GO
  
DENY VIEW DEFINITION ON ROLE::SammamishParking   
    TO JinghaoLiu CASCADE;  
GO

--------------Revoke Permisssion-------------

REVOKE CONTROL ON USER::Wanida FROM RolandX;  
GO
 
REVOKE VIEW DEFINITION ON ROLE::SammamishParking   
    FROM JinghaoLiu CASCADE;  
GO


--------BACKUP AND RESTORE--------------

-------BACK UP DATABASE---------------
BACKUP DATABASE JobDB
TO DISK='F:\JobDBdatabase.bak'
WITH FORMAT
GO

----------BACKUP FILE------------
	BACKUP DATABASE JobDB
	FILEGROUP='Group1'	
	TO DISK='F:\JobDBdatabase.bak'
	GO

	-------BACKUP FILE WITH DIFFERENIAL--------------
	
BACKUP DATABASE Sales
    FILEGROUP = 'SalesGroup1',
    FILEGROUP = 'SalesGroup2'
    TO DISK = 'Z:\SQLServerBackups\SalesFiles.bck'
    WITH
      DIFFERENTIAL;
GO

------------RESTORE DATABASE ----------------------

--------RESOTE DATABASE---------
RESTORE DATABASE JobDB 
FROM JobDBdatabase
--------RESTORE FATABASE USING LOCATION------------------

RESTORE DATABASE JobDB 
FROM DISK='F:\JobDBdatabase.bak'


---------RESOTRING DATABASE AND MOVING-------------

RESTORE DATABASE AdventureWorks2012
    FROM AdventureWorksBackups
    WITH NORECOVERY,
      MOVE 'AdventureWorks2012_Data' TO
'C:\Program Files\Microsoft SQL Server\MSSQL13.MSSQLSERVER\MSSQL\Data\NewAdvWorks.mdf',
      MOVE 'AdventureWorks2012_Log'
TO 'C:\Program Files\Microsoft SQL Server\MSSQL13.MSSQLSERVER\MSSQL\Data\NewAdvWorks.ldf';
RESTORE LOG AdventureWorks2012
    FROM AdventureWorksBackups
    WITH RECOVERY;

