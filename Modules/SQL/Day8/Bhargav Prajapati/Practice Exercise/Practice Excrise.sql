USE AdventureWorks2012

CREATE TABLE LEARN_INDEXES
(
 Id int,
 FirstName varchar(50),
 Lastname varchar(50),
 Email varchar(50)
)

INSERT INTO LEARN_INDEXES (Id,FirstName,Lastname,Email) VALUES(3,'Misha','Patel','abc@gmail.com'),
															  (5,'Rajesh','Patel','pqr@gmail.com'),
															  (2,'Parth','Prajapati','axt@gmail.com'),
															  (1,'Raj','Joshi','scf@gmail.com'),
															  (4,'Vishw','Mewada','dcvg@gmail.com'),
															  (6,'Harsh','soni','mhj@gmail.com')

---------Before Applying The Clusetered Indexes------------
SELECT * FROM LEARN_INDEXES

--------------Applying Clustered Index-------------

CREATE CLUSTERED INDEX CIX_LI_ID ON LEARN_INDEXES(Id  DESC)

---------------After Applying The Clustered Indexes---------------
SELECT* FROM  LEARN_INDEXES


/*Do Not Create the  Another Clusted Index  for same table*/
/*CREATE CLUSTERED INDEX CIX_LI_ID1 ON LEARN_INDEXES(Email)*/
 

 /*Create the Nonclustered  using UI*/
 SELECT * FROM  LEARN_INDEXES WHERE Email LIKE '%.com'
 SELECT * FROM sys.indexes
 SELECT * FROM Purchasing.ProductVendor

 /*CREATING NONCLUSTED INDEX*/
 CREATE NONCLUSTERED INDEX IX_ProductVendor_BusinessEntityID ON  Purchasing.ProductVendor(BusinessEntityID)
 DROP INDEX IX_ProductVendor_BusinessEntityID ON Purchasing.ProductVendor;
 SELECT * FROM Purchasing.ProductVendor WHERE MaxOrderQty=100
 
 
 /*Creating the Unique Index*/
 CREATE UNIQUE INDEX UQ_LEARN_INDEXES_Email ON  LEARN_INDEXES(Email)
 /*because of unique index we can not enter the same mail id*/
--INSERT INTO LEARN_INDEXES (Id,FirstName,Lastname,Email) VALUES(7,'ASF','STU','abc@gmail.com')--


/*Creating The Filter Index*/

CREATE NONCLUSTERED INDEX fl_LEARN_INDEXES_FirstName_LastName ON LEARN_INDEXES(FirstName,LastName) WHERE FirstName='Misha'  AND LastName IS NOT NULL
INSERT INTO LEARN_INDEXES (Id,FirstName,Lastname,Email) VALUES(3,'sdsd',NULL,'sfdsfd@gmail.com')

SELECT * FROM LEARN_INDEXES WHERE FirstName='Misha'
 
------------nonclustred Including Cloumn ---------------------  
CREATE NONCLUSTERED INDEX IX_Address_PostalCode  
ON Person.Address (PostalCode)  
INCLUDE (AddressLine1, AddressLine2, City, StateProvinceID);  
GO
SELECT AddressLine1,AddressLine2,City,StateProvinceID FROM Person.Address


------------------Deleting The Index-------------------

DROP INDEX CIX_LI_ID ON LEARN_INDEXES
DROP INDEX IX_Address_PostalCode ON Person.Address
SELECT name FROM sys.indexes WHERE name='IX_Address_PostalCode '


----------------Modify The Index------------

ALTER INDEX AK_SalesOrderHeader_SalesOrderNumber ON
    Sales.SalesOrderHeader
SET (
    STATISTICS_NORECOMPUTE = ON,
    IGNORE_DUP_KEY = ON,
    ALLOW_PAGE_LOCKS = ON
    )
;

---------------------Disable INDEX---------------
ALTER INDEX CIX_LI_ID  ON LEARN_INDEXES DISABLE;
/*We Can not Access The Data*/
SELECT * FROM LEARN_INDEXES


ALTER INDEX ALL ON HumanResources.Employee  
DISABLE;
SELECT * FROM HumanResources.Employee

---------------Enable INDEX-----------------
ALTER INDEX CIX_LI_ID  ON LEARN_INDEXES REBUILD;
SELECT * FROM LEARN_INDEXES

ALTER INDEX ALL ON HumanResources.Employee  
REBUILD;
SELECT * FROM HumanResources.Employee

EXEC sp_rename  N'LEARN_INDEXES.CIX_LI_ID',Change_name


