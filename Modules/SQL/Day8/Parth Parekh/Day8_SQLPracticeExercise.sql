-- clustered 
USE AdventureWorks2012;  

-- Create a new table with three columns.  
CREATE TABLE TestTable  
    (TestCol1 int NOT NULL,  
     TestCol2 nchar(10) NULL,  
     TestCol3 nvarchar(50) NULL);  

CREATE CLUSTERED INDEX IX_TestTable_TestCol2   
    ON dbo.TestTable (TestCol2);   

SELECT * FROM TestTable

-- nonclustered   
-- Find an existing index named IX_ProductVendor_VendorID and delete it if found.   
IF EXISTS (SELECT name FROM sys.indexes  
            WHERE name = N'IX_ProductVendor_VendorID')   
    DROP INDEX IX_ProductVendor_VendorID ON Purchasing.ProductVendor;   
 
CREATE NONCLUSTERED INDEX IX_ProductVendor_VendorID   
    ON Purchasing.ProductVendor (BusinessEntityID);   

-- Filtered Indexes
  
-- Looks for an existing filtered index named "FIBillOfMaterialsWithEndDate"  
-- and deletes it from the table Production.BillOfMaterials if found.   
IF EXISTS (SELECT name FROM sys.indexes  
    WHERE name = N'FIBillOfMaterialsWithEndDate'  
    AND object_id = OBJECT_ID (N'Production.BillOfMaterials'))  
DROP INDEX FIBillOfMaterialsWithEndDate  
    ON Production.BillOfMaterials  
-- Creates a filtered index "FIBillOfMaterialsWithEndDate"  
-- on the table Production.BillOfMaterials   
-- using the columms ComponentID and StartDate.  

CREATE NONCLUSTERED INDEX FIBillOfMaterialsWithEndDate  
    ON Production.BillOfMaterials (ComponentID, StartDate)  
    WHERE EndDate IS NOT NULL ;  

SELECT ProductAssemblyID, ComponentID, StartDate   
FROM Production.BillOfMaterials  
WHERE EndDate IS NOT NULL   
    AND ComponentID = 5   
    AND StartDate > '01/01/2008' ;  

--Delete an Index
-- delete the IX_ProductVendor_BusinessEntityID index  
-- from the Purchasing.ProductVendor table  
DROP INDEX IX_ProductVendor_BusinessEntityID   
    ON Purchasing.ProductVendor;  


-- Modify an Index
CREATE NONCLUSTERED INDEX IX_WorkOrder_ProductID
    ON Production.WorkOrder(ProductID)
    WITH (FILLFACTOR = 80,
        PAD_INDEX = ON,
        DROP_EXISTING = ON)
;

ALTER INDEX AK_SalesOrderHeader_SalesOrderNumber ON
    Sales.SalesOrderHeader
SET (
    STATISTICS_NORECOMPUTE = ON,
    IGNORE_DUP_KEY = ON,
    ALLOW_PAGE_LOCKS = ON 
    )
;

-- Disable Indexes and Constraints
ALTER INDEX IX_Employee_OrganizationLevel_OrganizationNode ON HumanResources.Employee  
DISABLE;

-- To disable all indexes on a table
ALTER INDEX ALL ON HumanResources.Employee  
DISABLE;

-- Enable Indexes and Constraints
ALTER INDEX IX_Employee_OrganizationLevel_OrganizationNode ON HumanResources.Employee  
REBUILD;   

-- To enable all indexes on a table using DBCC DBREINDEX
DBCC DBREINDEX ("HumanResources.Employee", " ");  

--Rename
--Renames the IX_ProductVendor_VendorID index on the Purchasing.ProductVendor table to IX_VendorID.   
EXEC sp_rename N'Purchasing.ProductVendor.IX_ProductVendor_VendorID', N'IX_VendorID', N'INDEX';   

