USE AdventureWorks2012
SELECT FirstName, 
		LastName
FROM Person.Person WHERE LastName = 'Harrison'

CREATE NONCLUSTERED INDEX IX_Person_LastName
ON [Person].[Person] ([LastName])

CREATE TABLE dbo.TestTable 
(
	Testcol1 int NOT NULL,
	Testcol2 nchar(10) NOT NULL,
	Testcol3 varchar(50) NOT NULL
)
DROP INDEX Person.person.IX_person_LastName_FirstName
CREATE CLUSTERED INDEX IX_TestTable_Testcol1 on dbo.TestTable (Testcol1)

SELECT FirstName, LastName FROM Person.Person WHERE FirstName = 'Kelli'
SELECT * FROM Purchasing.ProductVendor


CREATE INDEX IX_ProductID ON Purchasing.productvendor (productID)

CREATE NONCLUSTERED INDEX IX_SalesPerson_SalesQuota_SalesYTD ON 
				Sales.SalesPerson (SalesQuota, SalesYTD);

--EXEC sp_helpindex N'Sales.customer';
EXEC  sp_helpindex 'Sales.SalesPerson'
select  * from HumanResources.Employee
CREATE INDEX IX_ID_Title ON HumanResources.Employee  (BusinessentityID ASC,JobTitle ASC);

--rebuild and add another column

CREATE INDEX IX_ID_Title ON  HumanResources.Employee  (BusinessentityID ASC,JobTitle ASC , Gender)
WITH(DROP_EXISTING = ON)

EXEC sp_helpindex 'HumanResources.Employee'

SELECT * FROM Production.UnitMeasure

CREATE UNIQUE INDEX AK_UnitMeasure_Name ON Production.UnitMeasure(Name) WITH(DROP_EXISTING = ON)


SELECT Name FROM Production.UnitMeasure WHERE NAME = 'Ounces'

INSERT INTO Production.UnitMeasure VALUES ('OC','Ounces',GETDATE()) 
--You cant insert duplicate entry Because wee have unique index  ON it.

--Use the IGNORE_DUP_KEY option

CREATE TABLE #Test (
C1 nvarchar(10) , c2 nvarchar(50) , c3 Datetime)

CREATE UNIQUE INDEX AK_Index On #Test (c2)
WITH (IGNORE_DUP_KEY = ON)

INSERT INTO #Test VALUES ('OC' , 'Ounces' , GETDATE())
INSERT INTO #Test SELECT * FROM Production.UnitMeasure

SELECT COUNT(*) AS 'NO' FROM #Test

DROP TABLE #Test 


CREATE TABLE #Test (
C1 nvarchar(10) , c2 nvarchar(50) , c3 Datetime)

CREATE UNIQUE INDEX AK_Index On #Test (c2)
WITH (IGNORE_DUP_KEY = OFF)

INSERT INTO #Test VALUES ('OC' , 'Ounces' , GETDATE())
INSERT INTO #Test SELECT * FROM Production.UnitMeasure

SELECT COUNT(*) AS 'NO' FROM #Test

--Create an index on a view

CREATE VIEW
		Sales.vOrders
  WITH SCHEMABINDING
AS
  SELECT SUM(UnitPrice * OrderQty * (1.00 - UnitPriceDiscount)) AS Revenue,
    OrderDate, ProductID, COUNT_BIG(*) AS COUNT
  FROM Sales.SalesOrderDetail AS od, Sales.SalesOrderHeader AS o
  WHERE od.SalesOrderID = o.SalesOrderID
  GROUP BY OrderDate, ProductID;

CREATE UNIQUE CLUSTERED INDEX IDX_ON_View
  ON Sales.vOrders (OrderDate, ProductID);

  SELECT SUM(UnitPrice * OrderQty * (1.00 - UnitPriceDiscount)) AS Rev,
  OrderDate, ProductID
FROM Sales.SalesOrderDetail AS od
  JOIN Sales.SalesOrderHeader AS o ON od.SalesOrderID = o.SalesOrderID
    AND ProductID BETWEEN 700 AND 800
    AND OrderDate >= CONVERT(DATETIME, '05/01/2002', 101)
GROUP BY OrderDate, ProductID
ORDER BY Rev DESC;
CREATE NONCLUSTERED INDEX IX_SalesOrderDetails_ID
ON [Sales].[SalesOrderDetail] ([ProductID])
INCLUDE ([OrderQty],[UnitPrice],[UnitPriceDiscount])


--DROP INDEX
DROP INDEX IX_ProductVendor_BusinessEntityID   
    ON Purchasing.ProductVendor; 
	--multiple at once
	DROP INDEX  
    IX_PurchaseOrderHeader_EmployeeID ON Purchasing.PurchaseOrderHeader,  
    IX_Address_StateProvinceID ON Person.Address;

	CREATE NONCLUSTERED INDEX IX_WorkOrder_ProductID
    ON Production.WorkOrder(ProductID)
    WITH (FILLFACTOR = 80,
        PAD_INDEX = ON,
        DROP_EXISTING = ON)

--ALtering Index 
ALTER INDEX AK_SalesOrderHeader_SalesOrderNumber ON
    Sales.SalesOrderHeader
SET (
    STATISTICS_NORECOMPUTE = ON,
    IGNORE_DUP_KEY = ON,
    ALLOW_PAGE_LOCKS = ON
   )
   --Disabling index
   ALTER INDEX IX_Employee_OrganizationLevel_OrganizationNode ON HumanResources.Employee  
DISABLE; --type all in place of index name to drop  all indexes 

--rebuild  or enable indexeds

ALTER INDEX IX_Employee_OrganizationLevel_OrganizationNode ON HumanResources.Employee  
REBUILD; 

--Rename
EXEC sp_rename 'HumanResources.Employee.IX_Employee_OrganizationLevel_OrganizationNode','IX_Rename'