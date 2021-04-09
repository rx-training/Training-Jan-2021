USE CarCompany;

-- Creating new role
CREATE ROLE Viewer;

-- Adding member to the roles
ALTER ROLE Viewer ADD MEMBER guest;
ALTER ROLE db_owner ADD MEMBER guest;

-- Removing member to the roles
ALTER ROLE Viewer DROP MEMBER guest;

-- GRANTING, REVOKING AND DENYING PERMISSIONS to new role for a particular object in the DB
GRANT SELECT ON dbo.Employees TO Viewer WITH GRANT OPTION;
DENY EXECUTE ON dbo.usp_Demo TO Viewer;
GRANT EXECUTE ON dbo.usp_Demo TO Viewer;
REVOKE EXECUTE ON dbo.usp_Demo TO Viewer;

-- DB BACKUP 
BACKUP DATABASE CarCompany
TO DISK = 'W:\RADIXWEB\Training-Jan-2021\Modules\SQL\Day17\Milit-Panchasara\CarCompany.bak'
WITH FORMAT;

-- RESTORE DB
RESTORE DATABASE CarCompany
    FROM DISK = 'W:\RADIXWEB\Training-Jan-2021\Modules\SQL\Day17\Milit-Panchasara\CarCompany.bak'