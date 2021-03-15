USE SampleDB

--CREATED CLUSTERED INDEX USING OBJECT EXPLORER
CREATE TABLE Students(
	StudID INT,
	Name VARCHAR(50),
	Std INT
)

INSERT INTO Students VALUES (2, 'Reena', 3),
							(4, 'Meena', 7),
							(1, 'Rita', 10),
							(3, 'Reshma', 2),
							(2, 'Seema', 5),
							(3, 'Tina', 7)


--CREATED CLUSTERED INDEX USING TABLE DESIGNER
INSERT INTO Schools VALUES	(2, 'AV', 'Ahmedabad'),
							(4, 'KV', 'Ahmedabad'),
							(1, 'DPS', 'Ahmedabad'),
							(3, 'HBK', 'Ahmedabad')


--CREATED CLUSTERED INDEX USING TRANSACT SQL
USE AdventureWorks2012

-- Create a new table with three columns.  
CREATE TABLE TestTable  
    (TestCol1 INT NOT NULL,  
     TestCol2 NCHAR(10) NULL,  
     TestCol3 NVARCHAR(50) NULL);  
 
-- Create a clustered index called IX_TestTable_TestCol1  
-- on the dbo.TestTable table using the TestCol1 column.  
CREATE CLUSTERED INDEX IX_TestTable_TestCol1   
    ON TestTable (TestCol1);   


--CREATED NON CLUSTERED INDEX USING OBJECT EXPLORER

SELECT StudID, Name INTO IXStudentsName
FROM Students

SELECT * FROM IXStudentsName

SELECT StudID, Std
FROM Students


--CREATED NON CLUSTERED INDEX USING TABLE DESIGNER


--CREATED NON CLUSTERED INDEX USING TRANSACT SQL

-- Find an existing index named IX_ProductVendor_VendorID and delete it if found.   
IF EXISTS (SELECT name FROM sys.indexes  
            WHERE name = N'IX_ProductVendor_VendorID')   
    DROP INDEX IX_ProductVendor_VendorID ON Purchasing.ProductVendor;   
GO  
-- Create a nonclustered index called IX_ProductVendor_VendorID   
-- on the Purchasing.ProductVendor table using the BusinessEntityID column.   
CREATE NONCLUSTERED INDEX IX_ProductVendor_VendorID   
    ON Purchasing.ProductVendor (BusinessEntityID);   
GO  


--EXECUTION PLAN
EXEC sp_helpindex 'Person.Person'

SELECT * FROM Person.Person

SELECT FirstName, LastName FROM Person.Person WHERE Title = 'Ms.'


--HEAP REBUILD
--Drroped clustered index on Schools table
ALTER TABLE Schools REBUILD


--UNIQUE INDEX USING TRANSACT SQL
SELECT * FROM Production.UnitMeasure
-- Find an existing index named AK_UnitMeasure_Name and delete it if found  
IF EXISTS (SELECT name from sys.indexes  
           WHERE name = N'AK_UnitMeasure_Name')   
   DROP INDEX AK_UnitMeasure_Name ON Production.UnitMeasure;   
GO  
-- Create a unique index called AK_UnitMeasure_Name  
-- on the Production.UnitMeasure table using the Name column.  
CREATE UNIQUE INDEX AK_UnitMeasure_Name   
   ON Production.UnitMeasure (Name);   
GO


--FILTERED INDEX

SELECT * FROM Production.BillOfMaterials

-- Looks for an existing filtered index named "FIBillOfMaterialsWithEndDate"  
-- and deletes it from the table Production.BillOfMaterials if found.   
IF EXISTS (SELECT name FROM sys.indexes  
    WHERE name = N'FIBillOfMaterialsWithEndDate'  
    AND object_id = OBJECT_ID (N'Production.BillOfMaterials'))  
DROP INDEX FIBillOfMaterialsWithEndDate  
    ON Production.BillOfMaterials  
GO  
-- Creates a filtered index "FIBillOfMaterialsWithEndDate"  
-- on the table Production.BillOfMaterials   
-- using the columms ComponentID and StartDate.  

CREATE NONCLUSTERED INDEX FIBillOfMaterialsWithEndDate  
    ON Production.BillOfMaterials (ComponentID, StartDate)  
    WHERE EndDate IS NOT NULL ;  
GO

SELECT ProductAssemblyID, ComponentID, StartDate   
FROM Production.BillOfMaterials  
WHERE EndDate IS NOT NULL   
    AND ComponentID = 5   
    AND StartDate > '01/01/2008' ;  
GO

SELECT ComponentID, StartDate FROM Production.BillOfMaterials  
    WITH ( INDEX ( FIBillOfMaterialsWithEndDate ) )   
WHERE EndDate IN ('20000825', '20000908', '20000918');   
GO

--WITH INCLUDED COLUMNS

SELECT * FROM Person.Address

-- Creates a nonclustered index on the Person.Address table with four included (nonkey) columns.   
-- index key column is PostalCode and the nonkey columns are  
-- AddressLine1, AddressLine2, City, and StateProvinceID.  
CREATE NONCLUSTERED INDEX IX_Address_PostalCode  
ON Person.Address (PostalCode)  
INCLUDE (AddressLine1, AddressLine2, City, StateProvinceID);  
GO


--MODIFY INDEX
CREATE NONCLUSTERED INDEX IX_WorkOrder_ProductID
    ON Production.WorkOrder(ProductID)
    WITH (FILLFACTOR = 80,
        PAD_INDEX = ON,
        DROP_EXISTING = ON)

ALTER INDEX AK_SalesOrderHeader_SalesOrderNumber ON
    Sales.SalesOrderHeader
SET (
    STATISTICS_NORECOMPUTE = ON,
    IGNORE_DUP_KEY = ON,
    ALLOW_PAGE_LOCKS = ON
    )


--DISABLE INDEX
USE AdventureWorks2012;  
GO  
-- disables the IX_Employee_OrganizationLevel_OrganizationNode index  
-- on the HumanResources.Employee table  
ALTER INDEX IX_Employee_OrganizationLevel_OrganizationNode ON HumanResources.Employee  
DISABLE;

USE AdventureWorks2012;  
GO  
-- Disables all indexes on the HumanResources.Employee table.  
ALTER INDEX ALL ON HumanResources.Employee  
DISABLE;

--ENABLE INDEX

--USING ALTER INDEX
USE AdventureWorks2012;  
GO  
-- Enables the IX_Employee_OrganizationLevel_OrganizationNode index  
-- on the HumanResources.Employee table.  

ALTER INDEX IX_Employee_OrganizationLevel_OrganizationNode ON HumanResources.Employee  
REBUILD;   
GO

USE AdventureWorks2012;  
GO  
-- enables all indexes  
-- on the HumanResources.Employee table  
ALTER INDEX ALL ON HumanResources.Employee  
REBUILD;  
GO


--RENAME INDEX
USE AdventureWorks2012;  
GO  
--Renames the IX_ProductVendor_VendorID index on the Purchasing.ProductVendor table to IX_VendorID.   

EXEC sp_rename N'Purchasing.ProductVendor.IX_ProductVendor_VendorID', N'IX_VendorID', N'INDEX';   
GO

--USING CREATE INDEX
USE AdventureWorks2012;  
GO  
-- re-creates the IX_Employee_OrganizationLevel_OrganizationNode index  
-- on the HumanResources.Employee table  
-- using the OrganizationLevel and OrganizationNode columns  
-- and then deletes the existing IX_Employee_OrganizationLevel_OrganizationNode index  
CREATE INDEX IX_Employee_OrganizationLevel_OrganizationNode ON HumanResources.Employee  
   (OrganizationLevel, OrganizationNode)  
WITH (DROP_EXISTING = ON);  
GO

--SEE PROPERTIES OF ALL INDEXES IN A TABLE
SELECT i.name AS index_name
   , i.type_desc
   , i.is_unique
   , ds.type_desc AS filegroup_or_partition_scheme
   , ds.name AS filegroup_or_partition_scheme_name
   , i.ignore_dup_key
   , i.is_primary_key
   , i.is_unique_constraint
   , i.fill_factor
   , i.is_padded
   , i.is_disabled
   , i.allow_row_locks
   , i.allow_page_locks
   , i.has_filter
   , i.filter_definition
FROM sys.indexes AS i
   INNER JOIN sys.data_spaces AS ds
      ON i.data_space_id = ds.data_space_id
   WHERE is_hypothetical = 0 AND i.index_id <> 0
       AND i.object_id = OBJECT_ID('HumanResources.Employee')

--SET THE PROPERTY OF AN INDEX
ALTER INDEX AK_SalesOrderHeader_SalesOrderNumber ON
    Sales.SalesOrderHeader
SET (
    STATISTICS_NORECOMPUTE = ON,
    IGNORE_DUP_KEY = ON,
    ALLOW_PAGE_LOCKS = ON
    )


SELECT i.name AS index_name
   , i.type_desc
   , i.is_unique
   , ds.type_desc AS filegroup_or_partition_scheme
   , ds.name AS filegroup_or_partition_scheme_name
   , i.ignore_dup_key
   , i.is_primary_key
   , i.is_unique_constraint
   , i.fill_factor
   , i.is_padded
   , i.is_disabled
   , i.allow_row_locks
   , i.allow_page_locks
   , i.has_filter
   , i.filter_definition
FROM sys.indexes AS i
   INNER JOIN sys.data_spaces AS ds
      ON i.data_space_id = ds.data_space_id
   WHERE is_hypothetical = 0 AND i.index_id <> 0
       AND i.object_id = OBJECT_ID('Sales.SalesOrderHeader')

ALTER INDEX ALL ON Production.Product
REBUILD WITH 
   (
       FILLFACTOR = 80
       , SORT_IN_TEMPDB = ON
       , STATISTICS_NORECOMPUTE = ON
   )

SELECT i.name AS index_name
   , i.type_desc
   , i.is_unique
   , ds.type_desc AS filegroup_or_partition_scheme
   , ds.name AS filegroup_or_partition_scheme_name
   , i.ignore_dup_key
   , i.is_primary_key
   , i.is_unique_constraint
   , i.fill_factor
   , i.is_padded
   , i.is_disabled
   , i.allow_row_locks
   , i.allow_page_locks
   , i.has_filter
   , i.filter_definition
FROM sys.indexes AS i
   INNER JOIN sys.data_spaces AS ds
      ON i.data_space_id = ds.data_space_id
   WHERE is_hypothetical = 0 AND i.index_id <> 0
       AND i.object_id = OBJECT_ID('Production.Product')


--REORGANIZE INDEX
ALTER INDEX AK_Employee_LoginID
    ON HumanResources.Employee
    REORGANIZE;

--REORGANIZE ALL INDEX
ALTER INDEX ALL ON HumanResources.Employee
   REORGANIZE;

--FILL FACTOR
USE AdventureWorks2012;  
GO  
-- Rebuilds the IX_Employee_OrganizationLevel_OrganizationNode index   
-- with a fill factor of 80 on the HumanResources.Employee table.  

ALTER INDEX IX_Employee_OrganizationLevel_OrganizationNode ON HumanResources.Employee  
REBUILD WITH (FILLFACTOR = 80);   
GO

--MAXIMUM DEGREE OF PARALLELISM
USE AdventureWorks2012;   
GO  
/*Alters the IX_ProductVendor_VendorID index on the Purchasing.ProductVendor table so that, if the server has eight or more processors, the Database Engine will limit the execution of the index operation to eight or fewer processors.  
*/  
ALTER INDEX IX_ProductVendor_BusinessEntityID ON Purchasing.ProductVendor  
REBUILD WITH (MAXDOP=8);   
GO

--COLUMNSTORE INDEX
CREATE CLUSTERED COLUMNSTORE INDEX StudIDClusteredIndex 
ON Students  
WITH (DROP_EXISTING = ON);

--BULK LOADING
SELECT object_id, index_id, partition_number, row_group_id, delta_store_hobt_id, 
  state, state_desc, total_rows, deleted_rows, size_in_bytes   
FROM sys.dm_db_column_store_row_group_physical_stats
